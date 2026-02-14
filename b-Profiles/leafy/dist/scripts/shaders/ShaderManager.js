export class ShaderManager {
    constructor(canvasId, shaderFile, intensity = 1.0) {
        this.gl = null;
        this.program = null;
        this.canvas = null;
        this.animationId = null;
        this.initialized = false;
        this.vertexShaderCode = `attribute vec2 position;
void main() {
    gl_Position = vec4(position, 0.0, 1.0);
}`;
        this.canvasId = canvasId;
        this.intensity = intensity;
        this.shaderFile = shaderFile;
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) {
            console.error(`[ShaderManager] Canvas not found: ${canvasId}`);
            return;
        }
        this.resize = this.resize.bind(this);
        this.initWebGL();
    }
    initWebGL() {
        if (this.initialized || !this.canvas)
            return;
        this.initialized = true;
        console.log(`[ShaderManager] Initializing: ${this.canvasId}`);
        try {
            this.gl = this.canvas.getContext('webgl', {
                alpha: true,
                antialias: false,
                depth: false,
                stencil: false,
                preserveDrawingBuffer: false
            });
            if (!this.gl) {
                this.gl = this.canvas.getContext('experimental-webgl');
            }
        }
        catch (e) {
            console.error(`[ShaderManager] WebGL error for ${this.canvasId}:`, e);
            return;
        }
        if (!this.gl) {
            console.error(`[ShaderManager] No WebGL for ${this.canvasId}`);
            return;
        }
        this.canvas.addEventListener('webglcontextlost', (e) => {
            console.error(`[ShaderManager] Context LOST: ${this.canvasId}`);
            e.preventDefault();
            if (this.animationId)
                cancelAnimationFrame(this.animationId);
        });
        this.canvas.addEventListener('webglcontextrestored', () => {
            console.log(`[ShaderManager] Context restored: ${this.canvasId}`);
            this.initialized = false;
            this.initWebGL();
        });
        console.log(`[ShaderManager] WebGL OK: ${this.canvasId}`);
        this.resize();
        window.addEventListener('resize', this.resize);
        this.loadShader(this.shaderFile);
    }
    async loadShader(shaderFile) {
        try {
            console.log(`[ShaderManager] Loading: ${shaderFile}`);
            const response = await fetch(`shaders/${shaderFile}`);
            if (!response.ok) {
                console.error(`[ShaderManager] Fetch failed: ${shaderFile}`);
                return;
            }
            const fragmentCode = await response.text();
            console.log(`[ShaderManager] Loaded ${shaderFile}, ${fragmentCode.length} chars`);
            this.initShader(fragmentCode);
        }
        catch (error) {
            console.error(`[ShaderManager] Load error ${shaderFile}:`, error);
        }
    }
    resize() {
        if (!this.canvas || !this.gl)
            return;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const w = this.canvas.clientWidth;
        const h = this.canvas.clientHeight;
        this.canvas.width = w * dpr;
        this.canvas.height = h * dpr;
        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    }
    createShader(type, source) {
        if (!this.gl)
            return null;
        const shader = this.gl.createShader(type);
        if (!shader) {
            console.error(`[ShaderManager] createShader failed`);
            return null;
        }
        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);
        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
            const info = this.gl.getShaderInfoLog(shader);
            console.error(`[ShaderManager] Compile error ${this.canvasId}:`, info);
            this.gl.deleteShader(shader);
            return null;
        }
        return shader;
    }
    initShader(fragmentCode) {
        if (!this.gl || !this.canvas)
            return;
        const vs = this.createShader(this.gl.VERTEX_SHADER, this.vertexShaderCode);
        const fs = this.createShader(this.gl.FRAGMENT_SHADER, fragmentCode);
        if (!vs || !fs) {
            console.error(`[ShaderManager] Shader creation failed: ${this.canvasId}`);
            return;
        }
        this.program = this.gl.createProgram();
        if (!this.program)
            return;
        this.gl.attachShader(this.program, vs);
        this.gl.attachShader(this.program, fs);
        this.gl.linkProgram(this.program);
        if (!this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) {
            console.error(`[ShaderManager] Link error:`, this.gl.getProgramInfoLog(this.program));
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
        const gl = this.gl;
        const canvas = this.canvas;
        const intensity = this.intensity;
        const canvasId = this.canvasId;
        let frameCount = 0;
        const render = (t) => {
            if (!gl || gl.isContextLost()) {
                console.error(`[ShaderManager] Context lost in render: ${canvasId}`);
                return;
            }
            t *= 0.001;
            gl.viewport(0, 0, canvas.width, canvas.height);
            gl.uniform2f(resLoc, canvas.width, canvas.height);
            gl.uniform1f(timeLoc, t);
            gl.uniform1f(intensityLoc, intensity);
            gl.drawArrays(gl.TRIANGLES, 0, 6);
            frameCount++;
            if (frameCount === 1) {
                console.log(`[ShaderManager] First frame rendered: ${canvasId}`);
            }
            this.animationId = requestAnimationFrame(render);
        };
        console.log(`[ShaderManager] Starting render: ${this.canvasId}`);
        this.animationId = requestAnimationFrame(render);
    }
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        window.removeEventListener('resize', this.resize);
    }
}
