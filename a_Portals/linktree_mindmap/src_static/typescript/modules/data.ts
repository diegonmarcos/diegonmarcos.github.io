// ==========================================================================
// Data Module - Linktree Mindmap
// ==========================================================================

import type { GraphData, GraphNode, GraphEdge, NodeData } from '../types';
import { config } from '../config';
import { GRAPH_DATA } from '../data-embedded';

// -----------------------------------------------------------------------------
// Load Data
// -----------------------------------------------------------------------------

export async function loadGraphData(): Promise<GraphData> {
  // Return embedded data to avoid CORS issues with file:// protocol
  return Promise.resolve(GRAPH_DATA);
}

// -----------------------------------------------------------------------------
// Build Graph
// -----------------------------------------------------------------------------

export function buildGraph(data: GraphData): { nodes: GraphNode[]; edges: GraphEdge[] } {
  const nodes: GraphNode[] = [];
  const edges: GraphEdge[] = [];
  const nodeMap = new Map<string, GraphNode>();

  // Create root node
  const rootNode = createNode(data.root, 0, null);
  nodes.push(rootNode);
  nodeMap.set(rootNode.id, rootNode);

  // Recursively build tree
  function processChildren(parentNode: GraphNode, childIds: string[] | undefined, depth: number): void {
    if (!childIds) return;

    childIds.forEach((childId) => {
      const childData = data.nodes[childId];
      if (!childData) {
        console.warn(`Node not found: ${childId}`);
        return;
      }

      const childNode = createNode(childData, depth, parentNode);
      nodes.push(childNode);
      nodeMap.set(childNode.id, childNode);
      parentNode.children.push(childNode);

      // Create edge
      edges.push({
        source: parentNode,
        target: childNode,
        highlighted: false,
        opacity: 1,
      });

      // Recurse
      processChildren(childNode, childData.children, depth + 1);
    });
  }

  processChildren(rootNode, data.root.children, 1);

  return { nodes, edges };
}

// -----------------------------------------------------------------------------
// Create Node
// -----------------------------------------------------------------------------

function createNode(data: NodeData, depth: number, parent: GraphNode | null): GraphNode {
  const visual = config.visual;
  const depthIndex = Math.min(depth, visual.nodeRadiusByDepth.length - 1);

  return {
    id: data.id,
    label: data.label,
    fullLabel: data.fullLabel,
    icon: data.icon,
    color: data.color,
    depth,
    parent,
    children: [],
    links: data.links || [],

    // Position (will be set by layout)
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    targetX: 0,
    targetY: 0,

    // Visual state
    radius: visual.nodeRadiusByDepth[depthIndex],
    opacity: visual.opacityByDepth[depthIndex],
    glowIntensity: visual.glowIntensityByDepth[depthIndex],
    highlighted: false,
    hovered: false,
    focused: false,

    // Animation
    breathePhase: Math.random() * Math.PI * 2, // Random start phase
    breatheScale: 1,
  };
}

// -----------------------------------------------------------------------------
// Graph Traversal Utilities
// -----------------------------------------------------------------------------

export function getAncestors(node: GraphNode): GraphNode[] {
  const ancestors: GraphNode[] = [];
  let current = node.parent;
  while (current) {
    ancestors.push(current);
    current = current.parent;
  }
  return ancestors;
}

export function getDescendants(node: GraphNode): GraphNode[] {
  const descendants: GraphNode[] = [];

  function traverse(n: GraphNode): void {
    n.children.forEach((child) => {
      descendants.push(child);
      traverse(child);
    });
  }

  traverse(node);
  return descendants;
}

export function getPathToRoot(node: GraphNode): GraphNode[] {
  const path = [node];
  let current = node.parent;
  while (current) {
    path.push(current);
    current = current.parent;
  }
  return path.reverse();
}

export function findNodeById(nodes: GraphNode[], id: string): GraphNode | undefined {
  return nodes.find((n) => n.id === id);
}

// -----------------------------------------------------------------------------
// Highlight Path
// -----------------------------------------------------------------------------

export function highlightPath(
  nodes: GraphNode[],
  edges: GraphEdge[],
  targetNode: GraphNode | null
): void {
  if (!targetNode) {
    // Clear all highlights
    nodes.forEach((n) => {
      n.highlighted = false;
      n.opacity = config.visual.opacityByDepth[Math.min(n.depth, config.visual.opacityByDepth.length - 1)];
    });
    edges.forEach((e) => {
      e.highlighted = false;
      e.opacity = 1;
    });
    return;
  }

  const ancestors = new Set(getAncestors(targetNode));
  const descendants = new Set(getDescendants(targetNode));
  const highlighted = new Set([targetNode, ...ancestors, ...descendants]);

  // Update nodes
  nodes.forEach((n) => {
    n.highlighted = highlighted.has(n);
    // Fade non-highlighted nodes
    if (n.highlighted) {
      n.opacity = config.visual.opacityByDepth[Math.min(n.depth, config.visual.opacityByDepth.length - 1)];
    } else {
      n.opacity = 0.15;
    }
  });

  // Update edges
  edges.forEach((e) => {
    e.highlighted = highlighted.has(e.source) && highlighted.has(e.target);
    e.opacity = e.highlighted ? 1 : 0.1;
  });
}
