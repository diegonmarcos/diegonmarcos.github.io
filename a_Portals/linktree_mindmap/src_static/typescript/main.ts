// ==========================================================================
// Main Entry Point - Linktree Mindmap (CSS/DOM-based Rendering)
// ==========================================================================

import type { GraphNode, GraphEdge, ViewState } from './types';
import { loadGraphData, buildGraph } from './modules/data';
import { initRenderer, render, getCanvasSize, createNodeElements, createEdgeElements } from './modules/renderer';
import { computeInitialLayout, createViewState, calculateFitZoom, setInitialFitZoom } from './modules/graph';
import {
  initInteraction,
  setCallbacks,
  setFocusedNode,
  clearFocus,
  setRenderCallback,
} from './modules/interaction';
import {
  initUI,
  showLoading,
  hideLoading,
  showLinkPanel,
  setOnBack,
  setNodes,
  setOnNodeSelect,
  setRenderCallback as setUIRenderCallback,
  updateCanvasSize,
  updateZoomIndicator,
  updateMinimap,
  updateBreadcrumb,
  focusOnNodeWithUI,
  setCurrentNode,
} from './modules/ui';
import { GalaxyRenderer } from './modules/galaxy';

// -----------------------------------------------------------------------------
// State
// -----------------------------------------------------------------------------

let nodes: GraphNode[] = [];
let edges: GraphEdge[] = [];
let view: ViewState;
let expansionFrameId: number | null = null;

// DOM elements
let graphContainer: HTMLElement | null = null;

// WebGL galaxy background
let galaxyRenderer: GalaxyRenderer | null = null;

// -----------------------------------------------------------------------------
// Initialize Application
// -----------------------------------------------------------------------------

async function init(): Promise<void> {
  try {
    showLoading();

    // Get graph container element
    graphContainer = document.getElementById('graph-container');
    if (!graphContainer) {
      throw new Error('Graph container element not found');
    }

    // Initialize WebGL galaxy background
    galaxyRenderer = new GalaxyRenderer(graphContainer);

    // Initialize renderer (DOM-based)
    initRenderer(graphContainer);

    // Load graph data
    const data = await loadGraphData();
    const graph = buildGraph(data);
    nodes = graph.nodes;
    edges = graph.edges;

    // Create view state
    view = createViewState();

    // Compute initial layout (sets target positions)
    const { width, height } = getCanvasSize();
    computeInitialLayout(nodes, width / 2, height / 2);

    // Calculate zoom to fit all nodes on screen
    const fitZoom = calculateFitZoom(nodes, width, height);
    setInitialFitZoom(fitZoom);
    view.scale = fitZoom;
    view.targetScale = fitZoom;

    // Create DOM elements for nodes and edges
    createNodeElements(nodes);
    createEdgeElements(edges);

    // Start all nodes at center (collapsed state)
    const centerX = width / 2;
    const centerY = height / 2;
    nodes.forEach((node) => {
      node.x = centerX;
      node.y = centerY;
    });

    // Initialize interaction (event-driven updates)
    initInteraction(graphContainer as unknown as HTMLCanvasElement, nodes, edges, view);
    setCallbacks(handleNodeClick, handleBackgroundClick);
    setRenderCallback(() => {
      render(nodes, edges, view);
      updateMinimap(nodes, edges);
      updateZoomIndicator();
    });

    // Initialize UI
    initUI(view, width, height);
    setNodes(nodes);
    setOnBack(handleBackToFullView);
    setOnNodeSelect(handleNodeSelect);
    setUIRenderCallback(() => {
      render(nodes, edges, view);
      updateMinimap(nodes, edges);
    });

    hideLoading();

    // Run expansion animation ONCE, then stop
    runExpansionAnimation();

    // Root pulse is now CSS-based (see _graph.scss root-glow animation)

  } catch (error) {
    console.error('Failed to initialize:', error);
    hideLoading();
    alert('Failed to load mindmap data. Please refresh the page.');
  }
}

// -----------------------------------------------------------------------------
// Expansion Animation (runs once, then stops - NO continuous loop)
// -----------------------------------------------------------------------------

function runExpansionAnimation(): void {
  const startTime = performance.now();
  const duration = 2000; // 2 seconds
  const { width, height } = getCanvasSize();
  const centerX = width / 2;
  const centerY = height / 2;

  function animateExpansion(time: number): void {
    const elapsed = time - startTime;
    const progress = Math.min(1, elapsed / duration);

    // Easing function (ease-out cubic)
    const eased = 1 - Math.pow(1 - progress, 3);

    // Interpolate nodes from center to target positions
    nodes.forEach((node) => {
      node.x = centerX + (node.targetX - centerX) * eased;
      node.y = centerY + (node.targetY - centerY) * eased;
    });

    // Render current state
    render(nodes, edges, view);

    if (progress < 1) {
      expansionFrameId = requestAnimationFrame(animateExpansion);
    } else {
      // Expansion complete - NO MORE ANIMATION LOOP!
      expansionFrameId = null;

      // Final render with nodes at target positions
      nodes.forEach((node) => {
        node.x = node.targetX;
        node.y = node.targetY;
      });
      render(nodes, edges, view);
    }
  }

  expansionFrameId = requestAnimationFrame(animateExpansion);
}

// -----------------------------------------------------------------------------
// Event Handlers (trigger re-renders only when needed)
// -----------------------------------------------------------------------------

function handleNodeClick(node: GraphNode): void {
  // Highlight path
  setFocusedNode(node);
  setCurrentNode(node);
  updateBreadcrumb(node);

  // If this is a leaf node with exactly 1 link (a link leaf), open it directly
  if (node.links.length === 1 && node.children.length === 0) {
    const link = node.links[0];
    window.open(link.url, '_blank', 'noopener,noreferrer');
  } else if (node.links.length > 1) {
    // Show panel if node has multiple links
    showLinkPanel(node);
  }

  // Re-render to update highlights
  render(nodes, edges, view);
  updateMinimap(nodes, edges);
}

function handleNodeSelect(node: GraphNode): void {
  // Called from UI (search, breadcrumb, keyboard nav)
  setFocusedNode(node);
  focusOnNodeWithUI(node);
  render(nodes, edges, view);
  updateMinimap(nodes, edges);
}

function handleBackgroundClick(): void {
  clearFocus();
  updateBreadcrumb(null);
  // Re-render to clear highlights
  render(nodes, edges, view);
  updateMinimap(nodes, edges);
}

function handleBackToFullView(): void {
  clearFocus();
  updateBreadcrumb(null);
  render(nodes, edges, view);
  updateMinimap(nodes, edges);
}

// -----------------------------------------------------------------------------
// Resize Handler
// -----------------------------------------------------------------------------

function handleResize(): void {
  const { width, height } = getCanvasSize();
  updateCanvasSize(width, height);
  // Re-render on resize
  render(nodes, edges, view);
}

window.addEventListener('resize', handleResize);

// -----------------------------------------------------------------------------
// Cleanup
// -----------------------------------------------------------------------------

function cleanup(): void {
  if (expansionFrameId !== null) {
    cancelAnimationFrame(expansionFrameId);
  }
  if (galaxyRenderer) {
    galaxyRenderer.destroy();
  }
  window.removeEventListener('resize', handleResize);
}

window.addEventListener('beforeunload', cleanup);

// -----------------------------------------------------------------------------
// Start Application
// -----------------------------------------------------------------------------

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
