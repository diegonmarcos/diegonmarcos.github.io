export class ShadertoyGallery {
    constructor() {
        this.shaders = [
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
        this.vertexShaderCode = `
        attribute vec2 position;
        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `;
        this.activeShaders = [];
        this.createGallery();
    }
    async createGallery() {
        const gallery = document.getElementById('shader-gallery');
        if (!gallery)
            return;
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
            this.initShader(canvas, shader.file);
        }
    }
    async initShader(canvas, shaderFile) {
        try {
            const response = await fetch(`shaders/${shaderFile}`);
            if (!response.ok) {
                console.warn(`Failed to load shader: ${shaderFile}`);
                return;
            }
            const fragmentCode = await response.text();
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            if (!gl) {
                console.warn('WebGL not supported');
                return;
            }
            const vs = this.createShader(gl, gl.VERTEX_SHADER, this.vertexShaderCode);
            const fs = this.createShader(gl, gl.FRAGMENT_SHADER, fragmentCode);
            if (!vs || !fs)
                return;
            const program = gl.createProgram();
            if (!program)
                return;
            gl.attachShader(program, vs);
            gl.attachShader(program, fs);
            gl.linkProgram(program);
            if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
                console.error('Shader program error:', gl.getProgramInfoLog(program));
                return;
            }
            gl.useProgram(program);
            const positions = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
            const buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
            const posLoc = gl.getAttribLocation(program, 'position');
            gl.enableVertexAttribArray(posLoc);
            gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);
            const resLoc = gl.getUniformLocation(program, 'resolution');
            const timeLoc = gl.getUniformLocation(program, 'time');
            const intensityLoc = gl.getUniformLocation(program, 'intensity');
            const render = (t) => {
                t *= 0.001;
                gl.viewport(0, 0, canvas.width, canvas.height);
                gl.uniform2f(resLoc, canvas.width, canvas.height);
                gl.uniform1f(timeLoc, t);
                gl.uniform1f(intensityLoc, 1.0);
                gl.drawArrays(gl.TRIANGLES, 0, 6);
                const animationId = requestAnimationFrame(render);
                const existing = this.activeShaders.find(s => s.gl === gl);
                if (existing) {
                    existing.animationId = animationId;
                }
            };
            const animationId = requestAnimationFrame(render);
            this.activeShaders.push({ gl, animationId });
        }
        catch (error) {
            console.error(`Error loading shader ${shaderFile}:`, error);
        }
    }
    createShader(gl, type, source) {
        const shader = gl.createShader(type);
        if (!shader)
            return null;
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error('Shader compile error:', gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }
    destroy() {
        this.activeShaders.forEach(({ animationId }) => {
            cancelAnimationFrame(animationId);
        });
        this.activeShaders = [];
    }
}
