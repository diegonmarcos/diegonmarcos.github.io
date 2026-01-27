import type { GraphData, GraphNode, GraphEdge } from '../types';
export declare function loadGraphData(): Promise<GraphData>;
export declare function buildGraph(data: GraphData): {
    nodes: GraphNode[];
    edges: GraphEdge[];
};
export declare function getAncestors(node: GraphNode): GraphNode[];
export declare function getDescendants(node: GraphNode): GraphNode[];
export declare function getPathToRoot(node: GraphNode): GraphNode[];
export declare function findNodeById(nodes: GraphNode[], id: string): GraphNode | undefined;
export declare function highlightPath(nodes: GraphNode[], edges: GraphEdge[], targetNode: GraphNode | null): void;
