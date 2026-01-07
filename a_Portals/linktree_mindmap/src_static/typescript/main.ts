// ==========================================================================
// Main Entry Point - Linktree Mindmap
// ==========================================================================

import type { GraphNode, GraphEdge, ViewState } from './types';
import { loadGraphData, buildGraph } from './modules/data';
import { initParticles, updateParticles, renderParticles } from './modules/particles';
import { initRenderer, render, getCanvasSize } from './modules/renderer';
import { computeInitialLayout, createViewState, updateViewState } from './modules/graph';
import { updatePhysics, updateBreathing } from './modules/physics';
import {
  initInteraction,
  setCallbacks,
  getHoveredNode,
  setFocusedNode,
  clearFocus,
} from './modules/interaction';
import {
  initUI,
  showLoading,
  hideLoading,
  showTooltip,
  hideTooltip,
  focusOnNodeWithUI,
  hideBackButton,
  setOnBack,
  updateCanvasSize,
} from './modules/ui';

// -----------------------------------------------------------------------------
// State
// -----------------------------------------------------------------------------

let nodes: GraphNode[] = [];
let edges: GraphEdge[] = [];
let view: ViewState;
let lastTime = 0;
let animationFrameId: number | null = null;

// Canvas elements
let bgCanvas: HTMLCanvasElement | null = null;
let graphCanvas: HTMLCanvasElement | null = null;

// -----------------------------------------------------------------------------
// Initialize Application
// -----------------------------------------------------------------------------

async function init(): Promise<void> {
  try {
    showLoading();

    // Get canvas elements
    bgCanvas = document.getElementById('bg-canvas') as HTMLCanvasElement;
    graphCanvas = document.getElementById('graph-canvas') as HTMLCanvasElement;

    if (!bgCanvas || !graphCanvas) {
      throw new Error('Canvas elements not found');
    }

    // Initialize particles (background)
    initParticles(bgCanvas);

    // Initialize renderer
    initRenderer(graphCanvas);

    // Load graph data
    const data = await loadGraphData();
    const graph = buildGraph(data);
    nodes = graph.nodes;
    edges = graph.edges;

    // Create view state
    view = createViewState();

    // Compute initial layout
    const { width, height } = getCanvasSize();
    computeInitialLayout(nodes, width / 2, height / 2);

    // Initialize interaction
    initInteraction(graphCanvas, nodes, edges, view);
    setCallbacks(handleNodeClick, handleBackgroundClick);

    // Initialize UI
    initUI(view, width, height);
    setOnBack(handleBackToFullView);

    hideLoading();

    // Start animation loop
    lastTime = performance.now();
    animationFrameId = requestAnimationFrame(animate);
  } catch (error) {
    console.error('Failed to initialize:', error);
    hideLoading();
    alert('Failed to load mindmap data. Please refresh the page.');
  }
}

// -----------------------------------------------------------------------------
// Animation Loop
// -----------------------------------------------------------------------------

function animate(time: number): void {
  const deltaTime = time - lastTime;
  lastTime = time;

  // Update particles
  updateParticles(deltaTime);

  // Update view state (smooth pan/zoom)
  updateViewState(view);

  // Update physics
  const { width, height } = getCanvasSize();
  updatePhysics(nodes, edges, deltaTime, width / 2, height / 2);

  // Update breathing animation
  updateBreathing(nodes, time);

  // Render particles (background canvas)
  renderParticles();

  // Render graph (main canvas)
  render(nodes, edges, view, time);

  // Update tooltip
  updateTooltipPosition();

  // Continue loop
  animationFrameId = requestAnimationFrame(animate);
}

// -----------------------------------------------------------------------------
// Event Handlers
// -----------------------------------------------------------------------------

function handleNodeClick(node: GraphNode): void {
  if (node.links.length > 0) {
    // Leaf node with links - show panel
    focusOnNodeWithUI(node);
    setFocusedNode(node);
  } else if (node.children.length > 0) {
    // Branch node - focus on subtree
    focusOnNodeWithUI(node);
    setFocusedNode(node);
  }
}

function handleBackgroundClick(): void {
  // Clicking on background clears focus
  clearFocus();
  hideBackButton();
}

function handleBackToFullView(): void {
  clearFocus();
}

// -----------------------------------------------------------------------------
// Tooltip Management
// -----------------------------------------------------------------------------

function updateTooltipPosition(): void {
  const hoveredNode = getHoveredNode();

  if (hoveredNode) {
    // Convert world position to screen position
    const { width, height } = getCanvasSize();
    const centerX = width / 2;
    const centerY = height / 2;

    const screenX = (hoveredNode.x - centerX) * view.scale + centerX + view.x;
    const screenY = (hoveredNode.y - centerY) * view.scale + centerY + view.y;

    showTooltip(hoveredNode, screenX, screenY);
  } else {
    hideTooltip();
  }
}

// -----------------------------------------------------------------------------
// Resize Handler
// -----------------------------------------------------------------------------

function handleResize(): void {
  const { width, height } = getCanvasSize();
  updateCanvasSize(width, height);
}

window.addEventListener('resize', handleResize);

// -----------------------------------------------------------------------------
// Cleanup
// -----------------------------------------------------------------------------

function cleanup(): void {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
  }
  window.removeEventListener('resize', handleResize);
}

window.addEventListener('beforeunload', cleanup);

// -----------------------------------------------------------------------------
// Start Application
// -----------------------------------------------------------------------------

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
