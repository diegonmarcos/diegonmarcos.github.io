export interface RGBA {
    r: number;
    g: number;
    b: number;
    a: number;
}
export declare function parseHex(hex: string): RGBA;
export declare function toRgba(color: RGBA): string;
export declare function toHex(color: RGBA): string;
export declare function withAlpha(color: string, alpha: number): string;
export declare function lighten(color: string, amount: number): string;
export declare function darken(color: string, amount: number): string;
export declare function desaturate(color: string, amount: number): string;
export declare function blendColors(color1: string, color2: string, t: number): string;
export declare function createRadialGlow(ctx: CanvasRenderingContext2D, x: number, y: number, innerRadius: number, outerRadius: number, color: string, opacity?: number): CanvasGradient;
export declare function createGlassGradient(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, color: string, opacity?: number): CanvasGradient;
