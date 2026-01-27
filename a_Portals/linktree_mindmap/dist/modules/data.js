// ==========================================================================
// Data Module - Linktree Mindmap
// ==========================================================================
import { config } from '../config';
import { GRAPH_DATA } from '../data-embedded';
// -----------------------------------------------------------------------------
// Load Data
// -----------------------------------------------------------------------------
export async function loadGraphData() {
    // Return embedded data to avoid CORS issues with file:// protocol
    return Promise.resolve(GRAPH_DATA);
}
// -----------------------------------------------------------------------------
// Build Graph
// -----------------------------------------------------------------------------
export function buildGraph(data) {
    const nodes = [];
    const edges = [];
    const nodeMap = new Map();
    // Create root node
    const rootNode = createNode(data.root, 0, null);
    nodes.push(rootNode);
    nodeMap.set(rootNode.id, rootNode);
    // Recursively build tree
    function processChildren(parentNode, childIds, depth) {
        if (!childIds)
            return;
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
            // Recurse into children first
            processChildren(childNode, childData.children, depth + 1);
            // If this node has links and no children, expand links as leaf nodes
            if (childData.links && childData.links.length > 0 && (!childData.children || childData.children.length === 0)) {
                childData.links.forEach((link, linkIndex) => {
                    const linkNode = createLinkNode(link, `${childNode.id}-link-${linkIndex}`, depth + 1, childNode);
                    nodes.push(linkNode);
                    nodeMap.set(linkNode.id, linkNode);
                    childNode.children.push(linkNode);
                    // Create edge to link node
                    edges.push({
                        source: childNode,
                        target: linkNode,
                        highlighted: false,
                        opacity: 1,
                    });
                });
            }
        });
    }
    processChildren(rootNode, data.root.children, 1);
    return { nodes, edges };
}
// Create a node from a link
function createLinkNode(link, id, depth, parent) {
    const visual = config.visual;
    const depthIndex = Math.min(depth, visual.nodeRadiusByDepth.length - 1);
    return {
        id,
        label: link.label,
        fullLabel: link.label,
        icon: link.icon,
        color: parent.color,
        depth,
        parent,
        children: [],
        links: [link], // Single link for this node
        // Position (will be set by layout)
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        targetX: 0,
        targetY: 0,
        // Visual state
        radius: visual.nodeRadiusByDepth[depthIndex],
        opacity: 1.0,
        glowIntensity: visual.glowIntensityByDepth[depthIndex],
        highlighted: false,
        hovered: false,
        focused: false,
        // Animation
        breathePhase: Math.random() * Math.PI * 2,
        breatheScale: 1,
    };
}
// -----------------------------------------------------------------------------
// Create Node
// -----------------------------------------------------------------------------
function createNode(data, depth, parent) {
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
        opacity: 1.0, // All nodes start fully visible
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
export function getAncestors(node) {
    const ancestors = [];
    let current = node.parent;
    while (current) {
        ancestors.push(current);
        current = current.parent;
    }
    return ancestors;
}
export function getDescendants(node) {
    const descendants = [];
    function traverse(n) {
        n.children.forEach((child) => {
            descendants.push(child);
            traverse(child);
        });
    }
    traverse(node);
    return descendants;
}
export function getPathToRoot(node) {
    const path = [node];
    let current = node.parent;
    while (current) {
        path.push(current);
        current = current.parent;
    }
    return path.reverse();
}
export function findNodeById(nodes, id) {
    return nodes.find((n) => n.id === id);
}
// -----------------------------------------------------------------------------
// Highlight Path
// -----------------------------------------------------------------------------
export function highlightPath(nodes, edges, targetNode) {
    if (!targetNode) {
        // Clear all highlights - restore full visibility
        nodes.forEach((n) => {
            n.highlighted = false;
            n.opacity = 1.0;
        });
        edges.forEach((e) => {
            e.highlighted = false;
            e.opacity = 1;
        });
        return;
    }
    const ancestors = getAncestors(targetNode);
    const descendants = getDescendants(targetNode);
    const highlightedSet = new Set([targetNode, ...ancestors, ...descendants]);
    // Calculate distance from target for each highlighted node
    const distanceMap = new Map();
    distanceMap.set(targetNode, 0);
    // Distance to ancestors (going up)
    ancestors.forEach((anc, i) => {
        distanceMap.set(anc, i + 1);
    });
    // Distance to descendants (going down) - BFS
    function setDescendantDistances(node, dist) {
        node.children.forEach((child) => {
            if (!distanceMap.has(child)) {
                distanceMap.set(child, dist);
                setDescendantDistances(child, dist + 1);
            }
        });
    }
    setDescendantDistances(targetNode, 1);
    // Find max distance for normalization
    const maxDist = Math.max(...Array.from(distanceMap.values()), 1);
    // Update nodes with distance-based opacity
    nodes.forEach((n) => {
        n.highlighted = highlightedSet.has(n);
        if (n.highlighted) {
            const dist = distanceMap.get(n) || 0;
            // Closer = higher opacity (1.0 for target, fades with distance)
            // Use exponential falloff for smoother gradient
            n.opacity = Math.max(0.3, 1.0 - (dist / (maxDist + 1)) * 0.7);
        }
        else {
            n.opacity = 0.08; // Very faded for non-highlighted
        }
    });
    // Update edges with distance-based opacity
    edges.forEach((e) => {
        e.highlighted = highlightedSet.has(e.source) && highlightedSet.has(e.target);
        if (e.highlighted) {
            const sourceDist = distanceMap.get(e.source) || 0;
            const targetDist = distanceMap.get(e.target) || 0;
            const avgDist = (sourceDist + targetDist) / 2;
            e.opacity = Math.max(0.3, 1.0 - (avgDist / (maxDist + 1)) * 0.7);
        }
        else {
            e.opacity = 0.03;
        }
    });
}
//# sourceMappingURL=data.js.map