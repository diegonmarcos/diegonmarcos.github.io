// ==========================================================================
// Renderer Module - Linktree Mindmap
// ==========================================================================

import type { GraphNode, GraphEdge, ViewState } from '../types';
import { withAlpha, createRadialGlow, createGlassGradient } from '../utils/color';

// -----------------------------------------------------------------------------
// Canvas Setup
// -----------------------------------------------------------------------------

let canvas: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;
let iconCache: Map<string, HTMLImageElement> = new Map();

export function initRenderer(canvasElement: HTMLCanvasElement): void {
  canvas = canvasElement;
  ctx = canvas.getContext('2d');

  if (!ctx) {
    console.error('Failed to get 2D context for graph canvas');
    return;
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
}

function resizeCanvas(): void {
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

export function getCanvasSize(): { width: number; height: number } {
  return {
    width: canvas?.width || window.innerWidth,
    height: canvas?.height || window.innerHeight,
  };
}

// -----------------------------------------------------------------------------
// Main Render Function
// -----------------------------------------------------------------------------

export function render(
  nodes: GraphNode[],
  edges: GraphEdge[],
  view: ViewState,
  time: number
): void {
  if (!ctx || !canvas) return;

  // Clear canvas (background is handled by particles canvas)
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Save state and apply view transform
  ctx.save();
  ctx.translate(canvas.width / 2 + view.x, canvas.height / 2 + view.y);
  ctx.scale(view.scale, view.scale);
  ctx.translate(-canvas.width / 2, -canvas.height / 2);

  // Draw connection glows (blurred layer)
  drawConnectionGlows(edges);

  // Draw connections
  drawConnections(edges);

  // Draw nodes
  nodes.forEach((node) => drawNode(node, time));

  // Draw labels for visible nodes
  nodes.forEach((node) => drawLabel(node, view.scale));

  ctx.restore();
}

// -----------------------------------------------------------------------------
// Draw Connections
// -----------------------------------------------------------------------------

function drawConnections(edges: GraphEdge[]): void {
  if (!ctx) return;

  edges.forEach((edge) => {
    const { source, target, highlighted, opacity } = edge;

    // Calculate control point for curve
    const midX = (source.x + target.x) / 2;
    const midY = (source.y + target.y) / 2;
    const dx = target.x - source.x;
    const dy = target.y - source.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const offset = dist * 0.15;

    // Perpendicular offset for curve
    const nx = -dy / dist;
    const ny = dx / dist;
    const controlX = midX + nx * offset;
    const controlY = midY + ny * offset;

    // Create gradient
    const gradient = ctx!.createLinearGradient(source.x, source.y, target.x, target.y);
    const sourceAlpha = highlighted ? 0.7 : 0.25;
    const targetAlpha = highlighted ? 0.7 : 0.25;
    gradient.addColorStop(0, withAlpha(source.color, sourceAlpha * opacity * source.opacity));
    gradient.addColorStop(1, withAlpha(target.color, targetAlpha * opacity * target.opacity));

    ctx!.strokeStyle = gradient;
    ctx!.lineWidth = highlighted ? 2 : 1;
    ctx!.lineCap = 'round';

    ctx!.beginPath();
    ctx!.moveTo(source.x, source.y);
    ctx!.quadraticCurveTo(controlX, controlY, target.x, target.y);
    ctx!.stroke();
  });
}

function drawConnectionGlows(edges: GraphEdge[]): void {
  if (!ctx) return;

  // Only draw glows for highlighted edges
  const highlightedEdges = edges.filter((e) => e.highlighted);

  highlightedEdges.forEach((edge) => {
    const { source, target } = edge;

    const midX = (source.x + target.x) / 2;
    const midY = (source.y + target.y) / 2;
    const dx = target.x - source.x;
    const dy = target.y - source.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const offset = dist * 0.15;
    const nx = -dy / dist;
    const ny = dx / dist;
    const controlX = midX + nx * offset;
    const controlY = midY + ny * offset;

    // Draw blurred glow
    ctx!.save();
    ctx!.filter = 'blur(6px)';

    const gradient = ctx!.createLinearGradient(source.x, source.y, target.x, target.y);
    gradient.addColorStop(0, withAlpha(source.color, 0.4));
    gradient.addColorStop(1, withAlpha(target.color, 0.4));

    ctx!.strokeStyle = gradient;
    ctx!.lineWidth = 4;
    ctx!.lineCap = 'round';

    ctx!.beginPath();
    ctx!.moveTo(source.x, source.y);
    ctx!.quadraticCurveTo(controlX, controlY, target.x, target.y);
    ctx!.stroke();

    ctx!.restore();
  });
}

// -----------------------------------------------------------------------------
// Draw Node
// -----------------------------------------------------------------------------

function drawNode(node: GraphNode, time: number): void {
  if (!ctx) return;

  const { x, y, radius, color, opacity, glowIntensity, highlighted, hovered, breathePhase } = node;

  // Breathing animation
  const breathe = 1 + 0.02 * Math.sin(time * 0.001 + breathePhase);
  const currentRadius = radius * breathe;

  // Boost opacity and glow when hovered/highlighted
  const effectiveOpacity = hovered ? 1 : opacity;
  const effectiveGlow = highlighted || hovered ? glowIntensity * 1.5 : glowIntensity;

  // Outer glow
  const glowRadius = currentRadius * (2 + effectiveGlow * 0.5);
  const glowGradient = createRadialGlow(ctx!, x, y, currentRadius * 0.5, glowRadius, color, effectiveOpacity * effectiveGlow);
  ctx!.fillStyle = glowGradient;
  ctx!.beginPath();
  ctx!.arc(x, y, glowRadius, 0, Math.PI * 2);
  ctx!.fill();

  // Glass fill
  const glassGradient = createGlassGradient(ctx!, x, y, currentRadius, color, effectiveOpacity);
  ctx!.fillStyle = glassGradient;
  ctx!.beginPath();
  ctx!.arc(x, y, currentRadius, 0, Math.PI * 2);
  ctx!.fill();

  // Glass border
  ctx!.strokeStyle = withAlpha('#ffffff', (hovered ? 0.35 : 0.2) * effectiveOpacity);
  ctx!.lineWidth = hovered ? 1.5 : 1;
  ctx!.stroke();

  // Icon (for larger nodes)
  if (currentRadius > 14) {
    drawIcon(node.icon, x, y, currentRadius * 0.5, effectiveOpacity);
  }
}

// -----------------------------------------------------------------------------
// Draw Icon
// -----------------------------------------------------------------------------

function drawIcon(iconName: string, x: number, y: number, size: number, opacity: number): void {
  if (!ctx) return;

  const iconPath = `public/icons/${iconName}.svg`;

  // Check cache
  let img = iconCache.get(iconPath);

  if (!img) {
    // Load icon
    img = new Image();
    img.src = iconPath;
    iconCache.set(iconPath, img);
  }

  if (img.complete && img.naturalWidth > 0) {
    ctx!.save();
    ctx!.globalAlpha = opacity * 0.9;
    // Apply white filter to SVG
    ctx!.filter = 'brightness(0) invert(1)';
    ctx!.drawImage(img, x - size, y - size, size * 2, size * 2);
    ctx!.restore();
  }
}

// -----------------------------------------------------------------------------
// Draw Label
// -----------------------------------------------------------------------------

function drawLabel(node: GraphNode, scale: number): void {
  if (!ctx) return;

  // Only show labels for depth 0-1, or when hovered
  const shouldShow = node.depth <= 1 || node.hovered || node.highlighted;
  if (!shouldShow) return;

  // Adjust font size based on zoom
  const baseFontSize = node.depth === 0 ? 14 : 11;
  const fontSize = Math.max(10, baseFontSize / Math.sqrt(scale));

  ctx!.font = `500 ${fontSize}px Inter, sans-serif`;
  ctx!.textAlign = 'center';
  ctx!.textBaseline = 'top';

  const label = node.fullLabel || node.label;
  const y = node.y + node.radius * node.breatheScale + 8;

  // Text shadow/glow
  ctx!.fillStyle = withAlpha(node.color, 0.6 * node.opacity);
  ctx!.filter = 'blur(4px)';
  ctx!.fillText(label, node.x, y);

  // Main text
  ctx!.filter = 'none';
  ctx!.fillStyle = withAlpha('#ffffff', node.opacity);
  ctx!.fillText(label, node.x, y);
}

// -----------------------------------------------------------------------------
// Cleanup
// -----------------------------------------------------------------------------

export function destroyRenderer(): void {
  window.removeEventListener('resize', resizeCanvas);
  iconCache.clear();
}
