// ==========================================================================
// Interaction Module - Linktree Mindmap
// ==========================================================================

import type { GraphNode, ViewState, InteractionState } from '../types';
import { highlightPath } from './data';
import { resetView, zoomAtPoint, screenToWorld } from './graph';
import { pointInCircle } from '../utils/math';

// -----------------------------------------------------------------------------
// State
// -----------------------------------------------------------------------------

let state: InteractionState = {
  hoveredNode: null,
  focusedNode: null,
  draggingNode: null,
  isPanning: false,
  panStartX: 0,
  panStartY: 0,
  lastMouseX: 0,
  lastMouseY: 0,
};

let canvas: HTMLCanvasElement | null = null;
let nodes: GraphNode[] = [];
let edges: any[] = [];
let view: ViewState | null = null;

// Callbacks
let onNodeClick: ((node: GraphNode) => void) | null = null;
let onBackgroundClick: (() => void) | null = null;

// -----------------------------------------------------------------------------
// Initialize
// -----------------------------------------------------------------------------

export function initInteraction(
  canvasElement: HTMLCanvasElement,
  graphNodes: GraphNode[],
  graphEdges: any[],
  viewState: ViewState
): void {
  canvas = canvasElement;
  nodes = graphNodes;
  edges = graphEdges;
  view = viewState;

  // Mouse events
  canvas.addEventListener('mousemove', handleMouseMove);
  canvas.addEventListener('mousedown', handleMouseDown);
  canvas.addEventListener('mouseup', handleMouseUp);
  canvas.addEventListener('mouseleave', handleMouseLeave);
  canvas.addEventListener('wheel', handleWheel, { passive: false });
  canvas.addEventListener('click', handleClick);
  canvas.addEventListener('dblclick', handleDoubleClick);

  // Touch events
  canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
  canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
  canvas.addEventListener('touchend', handleTouchEnd);
}

export function setCallbacks(
  nodeClick: (node: GraphNode) => void,
  backgroundClick: () => void
): void {
  onNodeClick = nodeClick;
  onBackgroundClick = backgroundClick;
}

export function updateInteractionData(
  graphNodes: GraphNode[],
  graphEdges: any[]
): void {
  nodes = graphNodes;
  edges = graphEdges;
}

// -----------------------------------------------------------------------------
// Hit Testing
// -----------------------------------------------------------------------------

function findNodeAtPosition(screenX: number, screenY: number): GraphNode | null {
  if (!canvas || !view) return null;

  const world = screenToWorld(screenX, screenY, view, canvas.width, canvas.height);

  // Check nodes in reverse order (top-most first)
  for (let i = nodes.length - 1; i >= 0; i--) {
    const node = nodes[i];
    const hitRadius = node.radius * 3; // Larger hit area for easier hovering
    const dx = world.x - node.x;
    const dy = world.y - node.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist <= hitRadius) {
      return node;
    }
  }

  return null;
}

// -----------------------------------------------------------------------------
// Mouse Handlers
// -----------------------------------------------------------------------------

function handleMouseMove(e: MouseEvent): void {
  if (!canvas) return;

  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  state.lastMouseX = x;
  state.lastMouseY = y;

  // Handle panning
  if (state.isPanning && view) {
    const dx = x - state.panStartX;
    const dy = y - state.panStartY;
    view.targetX += dx;
    view.targetY += dy;
    state.panStartX = x;
    state.panStartY = y;
    return;
  }

  // Handle node dragging
  if (state.draggingNode && view && canvas) {
    const world = screenToWorld(x, y, view, canvas.width, canvas.height);
    state.draggingNode.x = world.x;
    state.draggingNode.y = world.y;
    state.draggingNode.vx = 0;
    state.draggingNode.vy = 0;
    return;
  }

  // Update hover state
  const hoveredNode = findNodeAtPosition(x, y);

  // Clear previous hover
  if (state.hoveredNode && state.hoveredNode !== hoveredNode) {
    state.hoveredNode.hovered = false;
  }

  // Set new hover
  if (hoveredNode) {
    hoveredNode.hovered = true;
    canvas.style.cursor = 'pointer';
    highlightPath(nodes, edges, hoveredNode);
  } else {
    canvas!.style.cursor = state.isPanning ? 'grabbing' : 'grab';
    highlightPath(nodes, edges, null);
  }

  state.hoveredNode = hoveredNode;
}

function handleMouseDown(e: MouseEvent): void {
  const rect = canvas!.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const node = findNodeAtPosition(x, y);

  if (node) {
    // Start dragging node
    state.draggingNode = node;
    (node as any).dragging = true;
    canvas!.style.cursor = 'grabbing';
  } else {
    // Start panning
    state.isPanning = true;
    state.panStartX = x;
    state.panStartY = y;
    canvas!.style.cursor = 'grabbing';
  }
}

function handleMouseUp(): void {
  if (state.draggingNode) {
    (state.draggingNode as any).dragging = false;
    state.draggingNode = null;
  }

  state.isPanning = false;
  canvas!.style.cursor = state.hoveredNode ? 'pointer' : 'grab';
}

function handleMouseLeave(): void {
  if (state.hoveredNode) {
    state.hoveredNode.hovered = false;
    if (!state.focusedNode) {
      highlightPath(nodes, edges, null);
    }
  }
  state.hoveredNode = null;
  state.isPanning = false;
  if (state.draggingNode) {
    (state.draggingNode as any).dragging = false;
    state.draggingNode = null;
  }
}

function handleWheel(e: WheelEvent): void {
  e.preventDefault();
  if (!view || !canvas) return;

  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  zoomAtPoint(view, x, y, e.deltaY, canvas.width, canvas.height);
}

function handleClick(e: MouseEvent): void {
  const rect = canvas!.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const node = findNodeAtPosition(x, y);

  if (node) {
    if (onNodeClick) onNodeClick(node);
  } else {
    if (onBackgroundClick) onBackgroundClick();
  }
}

function handleDoubleClick(): void {
  if (view) {
    resetView(view);
    state.focusedNode = null;
    highlightPath(nodes, edges, null);
  }
}

// -----------------------------------------------------------------------------
// Touch Handlers
// -----------------------------------------------------------------------------

let lastTouchDist = 0;

function handleTouchStart(e: TouchEvent): void {
  e.preventDefault();

  if (e.touches.length === 1) {
    const touch = e.touches[0];
    const rect = canvas!.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    state.lastMouseX = x;
    state.lastMouseY = y;

    const node = findNodeAtPosition(x, y);
    if (node) {
      state.draggingNode = node;
      (node as any).dragging = true;
    } else {
      state.isPanning = true;
      state.panStartX = x;
      state.panStartY = y;
    }
  } else if (e.touches.length === 2) {
    // Pinch zoom
    const t1 = e.touches[0];
    const t2 = e.touches[1];
    lastTouchDist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
  }
}

function handleTouchMove(e: TouchEvent): void {
  e.preventDefault();

  if (e.touches.length === 1 && (state.isPanning || state.draggingNode)) {
    const touch = e.touches[0];
    const rect = canvas!.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    if (state.isPanning && view) {
      const dx = x - state.panStartX;
      const dy = y - state.panStartY;
      view.targetX += dx;
      view.targetY += dy;
      state.panStartX = x;
      state.panStartY = y;
    } else if (state.draggingNode && view && canvas) {
      const world = screenToWorld(x, y, view, canvas.width, canvas.height);
      state.draggingNode.x = world.x;
      state.draggingNode.y = world.y;
    }

    state.lastMouseX = x;
    state.lastMouseY = y;
  } else if (e.touches.length === 2 && view && canvas) {
    const t1 = e.touches[0];
    const t2 = e.touches[1];
    const dist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
    const center = {
      x: (t1.clientX + t2.clientX) / 2,
      y: (t1.clientY + t2.clientY) / 2,
    };

    const rect = canvas.getBoundingClientRect();
    const delta = (lastTouchDist - dist) * 2;
    zoomAtPoint(view, center.x - rect.left, center.y - rect.top, delta, canvas.width, canvas.height);

    lastTouchDist = dist;
  }
}

function handleTouchEnd(): void {
  if (state.draggingNode) {
    (state.draggingNode as any).dragging = false;
    state.draggingNode = null;
  }
  state.isPanning = false;
}

// -----------------------------------------------------------------------------
// Public API
// -----------------------------------------------------------------------------

export function getHoveredNode(): GraphNode | null {
  return state.hoveredNode;
}

export function getFocusedNode(): GraphNode | null {
  return state.focusedNode;
}

export function setFocusedNode(node: GraphNode | null): void {
  state.focusedNode = node;
  if (node) {
    highlightPath(nodes, edges, node);
  }
}

export function clearFocus(): void {
  state.focusedNode = null;
  highlightPath(nodes, edges, null);
}

// -----------------------------------------------------------------------------
// Cleanup
// -----------------------------------------------------------------------------

export function destroyInteraction(): void {
  if (!canvas) return;

  canvas.removeEventListener('mousemove', handleMouseMove);
  canvas.removeEventListener('mousedown', handleMouseDown);
  canvas.removeEventListener('mouseup', handleMouseUp);
  canvas.removeEventListener('mouseleave', handleMouseLeave);
  canvas.removeEventListener('wheel', handleWheel);
  canvas.removeEventListener('click', handleClick);
  canvas.removeEventListener('dblclick', handleDoubleClick);
  canvas.removeEventListener('touchstart', handleTouchStart);
  canvas.removeEventListener('touchmove', handleTouchMove);
  canvas.removeEventListener('touchend', handleTouchEnd);
}
