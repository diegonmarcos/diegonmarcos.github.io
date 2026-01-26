// Local Shader Gallery - Runs shaders from local GLSL files

export interface LocalShaderData {
    file: string;
    name: string;
    author: string;
}

export class ShadertoyGallery {
    private shaders: LocalShaderData[] = [
        { file: 'seascape.glsl', name: 'Seascape', author: 'TDM' },
        { file: 'clouds.glsl', name: 'Clouds', author: 'iq' },
        { file: 'rainier.glsl', name: 'Rainier Mood', author: 'flockaroo' },
        { file: 'elevated.glsl', name: 'Elevated', author: 'iq' },
        { file: 'aurora.glsl', name: 'Aurora', author: 'nimitz' },
        { file: 'starnest.glsl', name: 'Star Nest', author: 'Kali' },
        { file: 'volcanic.glsl', name: 'Volcanic', author: 'iq' },
        { file: 'flame.glsl', name: 'Flame', author: 'iq' },
        { file: 'fractalland.glsl', name: 'Fractal Land', author: 'Kali' },
        { file: 'glassy.glsl', name: 'Abstract Glassy', author: 'iq' }
    ];

    private vertexShaderCode = `
        attribute vec2 position;
        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `;

    private activeShaders: Array<{ gl: WebGLRenderingContext; animationId: number }> = [];

    constructor() {
        this.createGallery();
    }

    private async createGallery(): Promise<void> {
        const gallery = document.getElementById('shader-gallery');
        if (!gallery) return;

        for (let index = 0; index < this.shaders.length; index++) {
            const shader = this.shaders[index];
            const card = document.createElement('div');
            card.className = 'shader-card gpu';
            card.style.transitionDelay = `${index * 0.1}s`;

            const canvas = document.createElement('canvas');
            canvas.className = 'shader-canvas';
            canvas.width = 400;
            canvas.height = 225;

            card.innerHTML = `
                <div class="shader-overlay">
                    <div class="shader-info">
                        <h4>${shader.name}</h4>
                        <p>by ${shader.author}</p>
                    </div>
                </div>
            `;
            card.insertBefore(canvas, card.firstChild);

            gallery.appendChild(card);

            // Load and initialize shader
            this.initShader(canvas, shader.file);
        }
    }

    private async initShader(canvas: HTMLCanvasElement, shaderFile: string): Promise<void> {
        try {
            // Fetch the shader code
            const response = await fetch(`shaders/${shaderFile}`);
            if (!response.ok) {
                console.warn(`Failed to load shader: ${shaderFile}`);
                return;
            }
            const fragmentCode = await response.text();

            // Initialize WebGL
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') as WebGLRenderingContext;
            if (!gl) {
                console.warn('WebGL not supported');
                return;
            }

            // Create shaders
            const vs = this.createShader(gl, gl.VERTEX_SHADER, this.vertexShaderCode);
            const fs = this.createShader(gl, gl.FRAGMENT_SHADER, fragmentCode);
            if (!vs || !fs) return;

            // Create program
            const program = gl.createProgram();
            if (!program) return;

            gl.attachShader(program, vs);
            gl.attachShader(program, fs);
            gl.linkProgram(program);

            if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
                console.error('Shader program error:', gl.getProgramInfoLog(program));
                return;
            }

            gl.useProgram(program);

            // Setup geometry
            const positions = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
            const buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

            const posLoc = gl.getAttribLocation(program, 'position');
            gl.enableVertexAttribArray(posLoc);
            gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

            // Get uniform locations
            const resLoc = gl.getUniformLocation(program, 'resolution');
            const timeLoc = gl.getUniformLocation(program, 'time');
            const intensityLoc = gl.getUniformLocation(program, 'intensity');

            // Render loop
            const render = (t: number) => {
                t *= 0.001;
                gl.viewport(0, 0, canvas.width, canvas.height);
                gl.uniform2f(resLoc, canvas.width, canvas.height);
                gl.uniform1f(timeLoc, t);
                gl.uniform1f(intensityLoc, 1.0);
                gl.drawArrays(gl.TRIANGLES, 0, 6);
                const animationId = requestAnimationFrame(render);

                // Store for cleanup
                const existing = this.activeShaders.find(s => s.gl === gl);
                if (existing) {
                    existing.animationId = animationId;
                }
            };

            const animationId = requestAnimationFrame(render);
            this.activeShaders.push({ gl, animationId });

        } catch (error) {
            console.error(`Error loading shader ${shaderFile}:`, error);
        }
    }

    private createShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
        const shader = gl.createShader(type);
        if (!shader) return null;

        gl.shaderSource(shader, source);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error('Shader compile error:', gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }

        return shader;
    }

    public destroy(): void {
        this.activeShaders.forEach(({ animationId }) => {
            cancelAnimationFrame(animationId);
        });
        this.activeShaders = [];
    }
}
