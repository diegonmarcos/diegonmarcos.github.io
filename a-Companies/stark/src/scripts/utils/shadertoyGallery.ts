// Shader Lab Gallery - Lazy loading shaders with click-to-activate

export interface ShaderData {
    file: string;
    name: string;
    author: string;
    colors: string[]; // Gradient colors for preview
}

export class ShadertoyGallery {
    private shaders: ShaderData[] = [
        { file: 'seascape.glsl', name: 'Seascape', author: 'TDM', colors: ['#0a1628', '#1a4a6e', '#3d8eb9'] },
        { file: 'clouds.glsl', name: 'Clouds', author: 'iq', colors: ['#1a1a2e', '#4a4a6e', '#8a8aae'] },
        { file: 'aurora.glsl', name: 'Aurora', author: 'nimitz', colors: ['#0a0a1a', '#1a4a3a', '#3aaa7a'] },
        { file: 'starnest.glsl', name: 'Star Nest', author: 'Kali', colors: ['#000010', '#1a1a4a', '#4a3a8a'] },
        { file: 'flame.glsl', name: 'Flame', author: 'iq', colors: ['#1a0a00', '#4a2a0a', '#aa4a0a'] },
        { file: 'volcanic.glsl', name: 'Volcanic', author: 'iq', colors: ['#1a0500', '#3a1a0a', '#6a2a1a'] }
    ];

    private vertexShaderCode = `attribute vec2 position;
void main() {
    gl_Position = vec4(position, 0.0, 1.0);
}`;

    private activeShader: { canvas: HTMLCanvasElement; gl: WebGLRenderingContext; animationId: number } | null = null;

    constructor() {
        this.createGallery();
    }

    private createGallery(): void {
        const gallery = document.getElementById('shader-gallery');
        if (!gallery) return;

        this.shaders.forEach((shader, index) => {
            const card = document.createElement('div');
            card.className = 'shader-card gpu';
            card.style.transitionDelay = `${index * 0.1}s`;
            card.dataset.shader = shader.file;

            // Create gradient preview
            const preview = document.createElement('div');
            preview.className = 'shader-preview';
            preview.style.background = `linear-gradient(135deg, ${shader.colors.join(', ')})`;

            // Play button overlay
            const playBtn = document.createElement('div');
            playBtn.className = 'shader-play-btn';
            playBtn.innerHTML = `
                <svg viewBox="0 0 24 24" width="48" height="48">
                    <circle cx="12" cy="12" r="11" fill="rgba(0,0,0,0.5)" stroke="rgba(201,162,39,0.8)" stroke-width="1"/>
                    <path d="M9 7l9 5-9 5V7z" fill="rgba(201,162,39,0.9)"/>
                </svg>
            `;

            // Hidden canvas for shader
            const canvas = document.createElement('canvas');
            canvas.className = 'shader-canvas';
            canvas.width = 400;
            canvas.height = 225;
            canvas.style.display = 'none';

            // Info overlay
            const overlay = document.createElement('div');
            overlay.className = 'shader-overlay';
            overlay.innerHTML = `
                <div class="shader-info">
                    <h4>${shader.name}</h4>
                    <p>by ${shader.author}</p>
                </div>
            `;

            card.appendChild(preview);
            card.appendChild(playBtn);
            card.appendChild(canvas);
            card.appendChild(overlay);
            gallery.appendChild(card);

            // Click to activate
            card.addEventListener('click', () => this.activateShader(card, canvas, shader));
        });
    }

    private async activateShader(card: HTMLElement, canvas: HTMLCanvasElement, shader: ShaderData): Promise<void> {
        // Stop any currently running shader
        if (this.activeShader) {
            cancelAnimationFrame(this.activeShader.animationId);
            this.activeShader.canvas.style.display = 'none';
            const oldCard = this.activeShader.canvas.closest('.shader-card');
            if (oldCard) {
                oldCard.classList.remove('active');
                const oldPreview = oldCard.querySelector('.shader-preview') as HTMLElement;
                const oldPlayBtn = oldCard.querySelector('.shader-play-btn') as HTMLElement;
                if (oldPreview) oldPreview.style.display = 'block';
                if (oldPlayBtn) oldPlayBtn.style.display = 'flex';
            }
            this.activeShader = null;
        }

        // If clicking the same card, just stop it
        if (card.classList.contains('active')) {
            card.classList.remove('active');
            return;
        }

        // Show loading state
        const playBtn = card.querySelector('.shader-play-btn') as HTMLElement;
        if (playBtn) {
            playBtn.innerHTML = `
                <svg viewBox="0 0 24 24" width="48" height="48" class="loading-spinner">
                    <circle cx="12" cy="12" r="10" fill="none" stroke="rgba(201,162,39,0.8)" stroke-width="2" stroke-dasharray="50 20"/>
                </svg>
            `;
        }

        try {
            // Fetch shader code
            const response = await fetch(`shaders/${shader.file}`);
            if (!response.ok) throw new Error('Fetch failed');
            const fragmentCode = await response.text();

            // Initialize WebGL
            const gl = canvas.getContext('webgl', {
                alpha: false,
                antialias: false,
                depth: false,
                preserveDrawingBuffer: false
            }) as WebGLRenderingContext;

            if (!gl) throw new Error('No WebGL');

            // Create shaders
            const vs = this.createShader(gl, gl.VERTEX_SHADER, this.vertexShaderCode);
            const fs = this.createShader(gl, gl.FRAGMENT_SHADER, fragmentCode);
            if (!vs || !fs) throw new Error('Shader compile failed');

            // Create program
            const program = gl.createProgram();
            if (!program) throw new Error('Program failed');

            gl.attachShader(program, vs);
            gl.attachShader(program, fs);
            gl.linkProgram(program);

            if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
                throw new Error('Link failed');
            }

            gl.useProgram(program);

            // Geometry
            const positions = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
            const buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

            const posLoc = gl.getAttribLocation(program, 'position');
            gl.enableVertexAttribArray(posLoc);
            gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

            // Uniforms
            const resLoc = gl.getUniformLocation(program, 'resolution');
            const timeLoc = gl.getUniformLocation(program, 'time');
            const intensityLoc = gl.getUniformLocation(program, 'intensity');

            // Show canvas, hide preview
            const preview = card.querySelector('.shader-preview') as HTMLElement;
            if (preview) preview.style.display = 'none';
            if (playBtn) playBtn.style.display = 'none';
            canvas.style.display = 'block';
            card.classList.add('active');

            // Render loop
            const render = (t: number) => {
                if (gl.isContextLost()) return;
                t *= 0.001;
                gl.viewport(0, 0, canvas.width, canvas.height);
                gl.uniform2f(resLoc, canvas.width, canvas.height);
                gl.uniform1f(timeLoc, t);
                gl.uniform1f(intensityLoc, 1.0);
                gl.drawArrays(gl.TRIANGLES, 0, 6);
                const animationId = requestAnimationFrame(render);
                if (this.activeShader) {
                    this.activeShader.animationId = animationId;
                }
            };

            const animationId = requestAnimationFrame(render);
            this.activeShader = { canvas, gl, animationId };

        } catch (error) {
            console.error(`[Gallery] Error loading ${shader.file}:`, error);
            // Show error state
            if (playBtn) {
                playBtn.innerHTML = `
                    <svg viewBox="0 0 24 24" width="48" height="48">
                        <circle cx="12" cy="12" r="11" fill="rgba(0,0,0,0.5)" stroke="rgba(255,100,100,0.8)" stroke-width="1"/>
                        <path d="M12 7v6M12 15v2" stroke="rgba(255,100,100,0.9)" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                `;
            }
        }
    }

    private createShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
        const shader = gl.createShader(type);
        if (!shader) return null;

        gl.shaderSource(shader, source);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error('[Gallery] Compile error:', gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }

    public destroy(): void {
        if (this.activeShader) {
            cancelAnimationFrame(this.activeShader.animationId);
        }
    }
}
