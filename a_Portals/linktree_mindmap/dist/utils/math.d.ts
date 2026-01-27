export interface Vec2 {
    x: number;
    y: number;
}
export declare function vec2(x: number, y: number): Vec2;
export declare function add(a: Vec2, b: Vec2): Vec2;
export declare function sub(a: Vec2, b: Vec2): Vec2;
export declare function mul(v: Vec2, s: number): Vec2;
export declare function div(v: Vec2, s: number): Vec2;
export declare function length(v: Vec2): number;
export declare function normalize(v: Vec2): Vec2;
export declare function distance(a: Vec2, b: Vec2): number;
export declare function dot(a: Vec2, b: Vec2): number;
export declare function lerp(a: number, b: number, t: number): number;
export declare function lerpVec2(a: Vec2, b: Vec2, t: number): Vec2;
export declare function clamp(value: number, min: number, max: number): number;
export declare function mapRange(value: number, inMin: number, inMax: number, outMin: number, outMax: number): number;
export declare function smoothstep(edge0: number, edge1: number, x: number): number;
export declare function random(min?: number, max?: number): number;
export declare function randomInt(min: number, max: number): number;
export declare function seededRandom(seed: number): () => number;
export declare function pointInCircle(px: number, py: number, cx: number, cy: number, r: number): boolean;
export declare function angleBetween(a: Vec2, b: Vec2): number;
export declare function quadraticBezier(p0: Vec2, p1: Vec2, p2: Vec2, t: number): Vec2;
