import type { GraphNode, GraphEdge } from '../types';
export declare function updatePhysics(nodes: GraphNode[], edges: GraphEdge[], deltaTime: number, centerX: number, centerY: number): void;
export declare function updateBreathing(nodes: GraphNode[], time: number): void;
export declare function updateOpacityTransitions(_nodes: GraphNode[], _edges: GraphEdge[], _deltaTime: number): void;
