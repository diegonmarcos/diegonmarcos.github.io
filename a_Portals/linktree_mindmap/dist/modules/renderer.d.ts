import type { GraphNode, GraphEdge, ViewState } from '../types';
export declare function initRenderer(container: HTMLElement): void;
export declare function getCanvasSize(): {
    width: number;
    height: number;
};
export declare function createNodeElements(nodes: GraphNode[]): void;
export declare function createEdgeElements(edges: GraphEdge[]): void;
export declare function render(nodes: GraphNode[], edges: GraphEdge[], view: ViewState): void;
export declare function getNodeElement(nodeId: string): HTMLElement | undefined;
export declare function getNodeAtPoint(x: number, y: number): string | null;
export declare function destroyRenderer(): void;
