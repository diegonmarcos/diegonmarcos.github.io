import { vertexShaderCode } from './vertexShader';

export class ShaderManager {
    private gl: WebGLRenderingContext | null = null;
    private program: WebGLProgram | null = null;
    private canvas: HTMLCanvasElement | null = null;
    private animationId: number | null = null;

    constructor(canvasId: string, fragmentCode: string, intensity: number = 1.0) {
        this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        if (!this.canvas) return;

        this.gl = this.canvas.getContext('webgl') || this.canvas.getContext('experimental-webgl') as WebGLRenderingContext;
        if (!this.gl) return;

        this.resize = this.resize.bind(this);

        this.resize();
        window.addEventListener('resize', this.resize);

        this.initShader(fragmentCode, intensity);
    }

    private resize(): void {
        if (!this.canvas || !this.gl) return;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    }

    private createShader(type: number, source: string): WebGLShader | null {
        if (!this.gl) return null;
        const shader = this.gl.createShader(type);
        if (!shader) return null;

        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);

        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
            console.error(this.gl.getShaderInfoLog(shader));
            return null;
        }
        return shader;
    }

    private initShader(fragmentCode: string, intensity: number): void {
        if (!this.gl) return;

        const vs = this.createShader(this.gl.VERTEX_SHADER, vertexShaderCode);
        const fs = this.createShader(this.gl.FRAGMENT_SHADER, fragmentCode);
        if (!vs || !fs) return;

        this.program = this.gl.createProgram();
        if (!this.program) return;

        this.gl.attachShader(this.program, vs);
        this.gl.attachShader(this.program, fs);
        this.gl.linkProgram(this.program);

        if (!this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) {
            console.error(this.gl.getProgramInfoLog(this.program));
            return;
        }

        this.gl.useProgram(this.program);

        const positions = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
        const buffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, positions, this.gl.STATIC_DRAW);

        const posLoc = this.gl.getAttribLocation(this.program, 'position');
        this.gl.enableVertexAttribArray(posLoc);
        this.gl.vertexAttribPointer(posLoc, 2, this.gl.FLOAT, false, 0, 0);

        const resLoc = this.gl.getUniformLocation(this.program, 'resolution');
        const timeLoc = this.gl.getUniformLocation(this.program, 'time');
        const intensityLoc = this.gl.getUniformLocation(this.program, 'intensity');

        const render = (t: number) => {
            if (!this.gl || !this.canvas) return;
            t *= 0.001;
            this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
            this.gl.uniform2f(resLoc, this.canvas.width, this.canvas.height);
            this.gl.uniform1f(timeLoc, t);
            this.gl.uniform1f(intensityLoc, intensity);
            this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
            this.animationId = requestAnimationFrame(render);
        };

        this.animationId = requestAnimationFrame(render);
    }

    public destroy(): void {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        window.removeEventListener('resize', this.resize);
    }
}
