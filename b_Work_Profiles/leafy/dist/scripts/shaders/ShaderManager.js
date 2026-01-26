import { vertexShaderCode } from './vertexShader.js';
export class ShaderManager {
    constructor(canvasId, fragmentCode, intensity = 1.0) {
        this.gl = null;
        this.program = null;
        this.canvas = null;
        this.animationId = null;
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas)
            return;
        this.gl = this.canvas.getContext('webgl') || this.canvas.getContext('experimental-webgl');
        if (!this.gl)
            return;
        this.resize = this.resize.bind(this);
        this.resize();
        window.addEventListener('resize', this.resize);
        this.initShader(fragmentCode, intensity);
    }
    resize() {
        if (!this.canvas || !this.gl)
            return;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    }
    createShader(type, source) {
        if (!this.gl)
            return null;
        const shader = this.gl.createShader(type);
        if (!shader)
            return null;
        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);
        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
            console.error(this.gl.getShaderInfoLog(shader));
            return null;
        }
        return shader;
    }
    initShader(fragmentCode, intensity) {
        if (!this.gl)
            return;
        const vs = this.createShader(this.gl.VERTEX_SHADER, vertexShaderCode);
        const fs = this.createShader(this.gl.FRAGMENT_SHADER, fragmentCode);
        if (!vs || !fs)
            return;
        this.program = this.gl.createProgram();
        if (!this.program)
            return;
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
        const render = (t) => {
            if (!this.gl || !this.canvas)
                return;
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
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        window.removeEventListener('resize', this.resize);
    }
}
