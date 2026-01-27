import type { GraphNode, ViewState } from '../types';
export declare function computeInitialLayout(nodes: GraphNode[], centerX: number, centerY: number): void;
export declare function calculateFitZoom(nodes: GraphNode[], screenWidth: number, screenHeight: number): number;
export declare function createViewState(): ViewState;
export declare function updateViewState(view: ViewState): void;
export declare function screenToWorld(screenX: number, screenY: number, view: ViewState, canvasWidth: number, canvasHeight: number): {
    x: number;
    y: number;
};
export declare function worldToScreen(worldX: number, worldY: number, view: ViewState, canvasWidth: number, canvasHeight: number): {
    x: number;
    y: number;
};
export declare function focusOnNode(node: GraphNode, view: ViewState, canvasWidth: number, canvasHeight: number): void;
export declare function setInitialFitZoom(zoom: number): void;
export declare function resetView(view: ViewState): void;
export declare function zoomIn(view: ViewState): void;
export declare function zoomOut(view: ViewState): void;
export declare function zoomAtPoint(view: ViewState, screenX: number, screenY: number, delta: number, canvasWidth: number, canvasHeight: number): void;
