// ==========================================================================
// Graph Module - Linktree Mindmap
// ==========================================================================

import type { GraphNode, ViewState } from '../types';
import { layout } from '../config';

// -----------------------------------------------------------------------------
// Initial Layout (Tree)
// -----------------------------------------------------------------------------

export function computeInitialLayout(
  nodes: GraphNode[],
  centerX: number,
  centerY: number
): void {
  const root = nodes.find((n) => n.depth === 0);
  if (!root) return;

  // Position root at center
  root.x = root.targetX = centerX;
  root.y = root.targetY = centerY;

  // Recursively layout children
  layoutSubtree(root, centerX, centerY);
}

function layoutSubtree(node: GraphNode, parentX: number, parentY: number): void {
  const childCount = node.children.length;
  if (childCount === 0) return;

  const levelRadius = layout.levelSpacing * (node.depth + 1);
  const angleSpread = Math.PI * 1.2; // Spread children across 216 degrees
  const startAngle = -Math.PI / 2 - angleSpread / 2;

  node.children.forEach((child, i) => {
    // Calculate angle for this child
    const angleStep = childCount > 1 ? angleSpread / (childCount - 1) : 0;
    const angle = startAngle + (childCount > 1 ? i * angleStep : angleSpread / 2);

    // Position relative to parent
    child.x = child.targetX = parentX + Math.cos(angle) * levelRadius;
    child.y = child.targetY = parentY + Math.sin(angle) * levelRadius;

    // Recurse
    layoutSubtree(child, child.x, child.y);
  });
}

// -----------------------------------------------------------------------------
// View State Management
// -----------------------------------------------------------------------------

export function createViewState(): ViewState {
  return {
    x: 0,
    y: 0,
    scale: layout.defaultZoom,
    targetX: 0,
    targetY: 0,
    targetScale: layout.defaultZoom,
  };
}

export function updateViewState(view: ViewState): void {
  // Smooth interpolation toward target
  view.x += (view.targetX - view.x) * layout.panEasing;
  view.y += (view.targetY - view.y) * layout.panEasing;
  view.scale += (view.targetScale - view.scale) * layout.panEasing;

  // Clamp scale
  view.scale = Math.max(layout.minZoom, Math.min(layout.maxZoom, view.scale));
  view.targetScale = Math.max(layout.minZoom, Math.min(layout.maxZoom, view.targetScale));
}

export function screenToWorld(
  screenX: number,
  screenY: number,
  view: ViewState,
  canvasWidth: number,
  canvasHeight: number
): { x: number; y: number } {
  const centerX = canvasWidth / 2;
  const centerY = canvasHeight / 2;

  return {
    x: (screenX - centerX - view.x) / view.scale + centerX,
    y: (screenY - centerY - view.y) / view.scale + centerY,
  };
}

export function worldToScreen(
  worldX: number,
  worldY: number,
  view: ViewState,
  canvasWidth: number,
  canvasHeight: number
): { x: number; y: number } {
  const centerX = canvasWidth / 2;
  const centerY = canvasHeight / 2;

  return {
    x: (worldX - centerX) * view.scale + centerX + view.x,
    y: (worldY - centerY) * view.scale + centerY + view.y,
  };
}

// -----------------------------------------------------------------------------
// Focus on Node
// -----------------------------------------------------------------------------

export function focusOnNode(
  node: GraphNode,
  view: ViewState,
  canvasWidth: number,
  canvasHeight: number
): void {
  const centerX = canvasWidth / 2;
  const centerY = canvasHeight / 2;

  // Pan to center the node
  view.targetX = centerX - node.x;
  view.targetY = centerY - node.y;

  // Zoom in slightly
  view.targetScale = Math.min(1.5, layout.maxZoom);
}

export function resetView(view: ViewState): void {
  view.targetX = 0;
  view.targetY = 0;
  view.targetScale = layout.defaultZoom;
}

// -----------------------------------------------------------------------------
// Zoom Controls
// -----------------------------------------------------------------------------

export function zoomIn(view: ViewState): void {
  view.targetScale = Math.min(view.targetScale * 1.3, layout.maxZoom);
}

export function zoomOut(view: ViewState): void {
  view.targetScale = Math.max(view.targetScale / 1.3, layout.minZoom);
}

export function zoomAtPoint(
  view: ViewState,
  screenX: number,
  screenY: number,
  delta: number,
  canvasWidth: number,
  canvasHeight: number
): void {
  const oldScale = view.targetScale;
  const newScale = Math.max(
    layout.minZoom,
    Math.min(layout.maxZoom, oldScale * (1 - delta * 0.001))
  );

  // Zoom toward mouse position
  const centerX = canvasWidth / 2;
  const centerY = canvasHeight / 2;
  const mouseX = screenX - centerX;
  const mouseY = screenY - centerY;

  const scaleDiff = newScale - oldScale;
  view.targetX -= (mouseX - view.targetX) * (scaleDiff / oldScale);
  view.targetY -= (mouseY - view.targetY) * (scaleDiff / oldScale);
  view.targetScale = newScale;
}
