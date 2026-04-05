export class ShaderDiamond {
    constructor() {
        this.diamond = null;
        this.container = null;
        this.currentFace = 0;
        this.rotationY = -30;
        this.rotationX = -15;
        this.rotationZ = 0;
        this.isDragging = false;
        this.startX = 0;
        this.startY = 0;
        this.lastX = 0;
        this.lastY = 0;
        this.velocity = { x: 0, y: 0 };
        this.animationId = null;
        this.autoRotateId = null;
        this.faceRotations = [0, -90, -180, -270];
        this.glCanvas = null;
        this.gl = null;
        this.shaderPrograms = [];
        this.renderLoopId = null;
        this.vertexShaderCode = `attribute vec2 position;
void main() {
    gl_Position = vec4(position, 0.0, 1.0);
}`;
        console.log('[Diamond] Constructor starting');
        this.diamond = document.getElementById('shader-diamond');
        this.container = document.querySelector('.diamond-container');
        if (!this.diamond || !this.container) {
            console.error('[Diamond] Missing elements, aborting init');
            return;
        }
        this.init();
    }
    init() {
        this.bindEvents();
        this.initNavButtons();
        this.setActiveFace(0);
        this.initSharedWebGL();
        this.startAutoRotate();
    }
    initSharedWebGL() {
        this.glCanvas = document.createElement('canvas');
        this.glCanvas.width = 300;
        this.glCanvas.height = 300;
        this.gl = this.glCanvas.getContext('webgl', {
            alpha: false,
            antialias: false,
            depth: false,
            preserveDrawingBuffer: true
        });
        if (!this.gl) {
            console.error('[Diamond] Shared WebGL context FAILED');
            return;
        }
        console.log('[Diamond] Shared WebGL context OK');
        const positions = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
        const buffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, positions, this.gl.STATIC_DRAW);
        const vs = this.createShader(this.gl, this.gl.VERTEX_SHADER, this.vertexShaderCode);
        if (!vs)
            return;
        const faces = this.diamond?.querySelectorAll('.diamond-face');
        if (!faces)
            return;
        const LIVE_COUNT = 4;
        console.log(`[Diamond] Loading ${faces.length} shaders (${LIVE_COUNT} live, ${faces.length - LIVE_COUNT} static)`);
        let loaded = 0;
        const total = faces.length;
        faces.forEach((face, i) => {
            const faceEl = face;
            const shaderFile = faceEl.dataset.shader;
            const canvas = faceEl.querySelector('.diamond-shader-canvas');
            if (!shaderFile || !canvas)
                return;
            const ctx2d = canvas.getContext('2d');
            if (!ctx2d)
                return;
            const isLive = i < LIVE_COUNT;
            this.loadFaceShader(vs, shaderFile, i, ctx2d, canvas.width, canvas.height, isLive).then(() => {
                loaded++;
                if (loaded === total) {
                    this.renderAllOnce();
                    this.startRenderLoop();
                }
            });
        });
    }
    async loadFaceShader(vs, shaderFile, faceIndex, ctx2d, canvasW, canvasH, live) {
        const gl = this.gl;
        try {
            const response = await fetch(`shaders/${shaderFile}`);
            if (!response.ok)
                throw new Error(`Fetch failed: ${response.status}`);
            const fragmentCode = await response.text();
            const fs = this.createShader(gl, gl.FRAGMENT_SHADER, fragmentCode);
            if (!fs)
                throw new Error('Fragment shader compile failed');
            const program = gl.createProgram();
            if (!program)
                throw new Error('Program create failed');
            gl.attachShader(program, vs);
            gl.attachShader(program, fs);
            gl.linkProgram(program);
            if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
                console.error(`[Diamond] Link error face ${faceIndex}:`, gl.getProgramInfoLog(program));
                return;
            }
            this.shaderPrograms[faceIndex] = {
                program,
                resLoc: gl.getUniformLocation(program, 'resolution'),
                timeLoc: gl.getUniformLocation(program, 'time'),
                intensityLoc: gl.getUniformLocation(program, 'intensity'),
                ctx2d,
                canvasW,
                canvasH,
                live
            };
            console.log(`[Diamond] ✓ face ${faceIndex} (${shaderFile}) ${live ? 'LIVE' : 'STATIC'}`);
        }
        catch (error) {
            console.error(`[Diamond] ERROR face ${faceIndex} (${shaderFile}):`, error);
        }
    }
    renderFace(sp, t) {
        const gl = this.gl;
        const glCanvas = this.glCanvas;
        gl.useProgram(sp.program);
        const posLoc = gl.getAttribLocation(sp.program, 'position');
        gl.enableVertexAttribArray(posLoc);
        gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);
        gl.viewport(0, 0, glCanvas.width, glCanvas.height);
        if (sp.resLoc)
            gl.uniform2f(sp.resLoc, glCanvas.width, glCanvas.height);
        if (sp.timeLoc)
            gl.uniform1f(sp.timeLoc, t);
        if (sp.intensityLoc)
            gl.uniform1f(sp.intensityLoc, 1.0);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        sp.ctx2d.drawImage(glCanvas, 0, 0, sp.canvasW, sp.canvasH);
    }
    renderAllOnce() {
        for (const sp of this.shaderPrograms) {
            if (!sp)
                continue;
            this.renderFace(sp, 0.5);
        }
        console.log('[Diamond] ✓ All faces rendered (static snapshots done)');
    }
    startRenderLoop() {
        const gl = this.gl;
        let frameCount = 0;
        const render = (t) => {
            if (gl.isContextLost()) {
                console.error('[Diamond] Shared context LOST');
                return;
            }
            t *= 0.001;
            for (const sp of this.shaderPrograms) {
                if (!sp || !sp.live)
                    continue;
                this.renderFace(sp, t);
            }
            frameCount++;
            if (frameCount === 1) {
                console.log('[Diamond] ✓ Render loop started (live faces)');
            }
            this.renderLoopId = requestAnimationFrame(render);
        };
        this.renderLoopId = requestAnimationFrame(render);
    }
    createShader(gl, type, source) {
        const shader = gl.createShader(type);
        if (!shader)
            return null;
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error('[Diamond] Compile error:', gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }
    bindEvents() {
        if (!this.diamond)
            return;
        this.diamond.addEventListener('mousedown', this.onDragStart.bind(this));
        document.addEventListener('mousemove', this.onDragMove.bind(this));
        document.addEventListener('mouseup', this.onDragEnd.bind(this));
        this.diamond.addEventListener('touchstart', this.onTouchStart.bind(this), { passive: false });
        document.addEventListener('touchmove', this.onTouchMove.bind(this), { passive: false });
        document.addEventListener('touchend', this.onTouchEnd.bind(this));
        this.diamond.addEventListener('contextmenu', (e) => e.preventDefault());
    }
    initNavButtons() {
        const buttons = document.querySelectorAll('.diamond-nav-btn');
        buttons.forEach((btn) => {
            btn.addEventListener('click', () => {
                const face = parseInt(btn.getAttribute('data-face') || '0');
                this.rotateTo(face);
                this.stopAutoRotate();
            });
        });
    }
    onDragStart(e) {
        this.isDragging = true;
        this.startX = e.clientX;
        this.startY = e.clientY;
        this.lastX = e.clientX;
        this.lastY = e.clientY;
        this.diamond?.classList.add('dragging');
        this.stopAutoRotate();
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }
    onDragMove(e) {
        if (!this.isDragging)
            return;
        const deltaX = e.clientX - this.lastX;
        const deltaY = e.clientY - this.lastY;
        this.velocity.x = deltaX;
        this.velocity.y = deltaY;
        this.rotationY += deltaX * 0.5;
        this.rotationX -= deltaY * 0.3;
        this.rotationX = Math.max(-60, Math.min(60, this.rotationX));
        this.updateTransform();
        this.lastX = e.clientX;
        this.lastY = e.clientY;
    }
    onDragEnd() {
        if (!this.isDragging)
            return;
        this.isDragging = false;
        this.diamond?.classList.remove('dragging');
        this.applyMomentum();
    }
    onTouchStart(e) {
        if (e.touches.length !== 1)
            return;
        e.preventDefault();
        const touch = e.touches[0];
        this.isDragging = true;
        this.startX = touch.clientX;
        this.startY = touch.clientY;
        this.lastX = touch.clientX;
        this.lastY = touch.clientY;
        this.diamond?.classList.add('dragging');
        this.stopAutoRotate();
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }
    onTouchMove(e) {
        if (!this.isDragging || e.touches.length !== 1)
            return;
        e.preventDefault();
        const touch = e.touches[0];
        const deltaX = touch.clientX - this.lastX;
        const deltaY = touch.clientY - this.lastY;
        this.velocity.x = deltaX;
        this.velocity.y = deltaY;
        this.rotationY += deltaX * 0.5;
        this.rotationX -= deltaY * 0.3;
        this.rotationX = Math.max(-60, Math.min(60, this.rotationX));
        this.updateTransform();
        this.lastX = touch.clientX;
        this.lastY = touch.clientY;
    }
    onTouchEnd() {
        if (!this.isDragging)
            return;
        this.isDragging = false;
        this.diamond?.classList.remove('dragging');
        this.applyMomentum();
    }
    applyMomentum() {
        const friction = 0.95;
        const minVelocity = 0.1;
        const animate = () => {
            this.velocity.x *= friction;
            this.velocity.y *= friction;
            if (Math.abs(this.velocity.x) > minVelocity || Math.abs(this.velocity.y) > minVelocity) {
                this.rotationY += this.velocity.x * 0.5;
                this.rotationX -= this.velocity.y * 0.3;
                this.rotationX = Math.max(-60, Math.min(60, this.rotationX));
                this.updateTransform();
                this.animationId = requestAnimationFrame(animate);
            }
            else {
                this.snapToNearestFace();
            }
        };
        this.animationId = requestAnimationFrame(animate);
    }
    snapToNearestFace() {
        let normalizedY = ((this.rotationY % 360) + 360) % 360;
        let nearestDir = 0;
        let minDiff = Infinity;
        for (let i = 0; i < 4; i++) {
            const faceAngle = ((-this.faceRotations[i] % 360) + 360) % 360;
            let diff = Math.abs(normalizedY - faceAngle);
            if (diff > 180)
                diff = 360 - diff;
            if (diff < minDiff) {
                minDiff = diff;
                nearestDir = i;
            }
        }
        const face = this.rotationX > 15 ? nearestDir + 4 : nearestDir;
        this.rotateTo(face);
    }
    rotateTo(face) {
        this.currentFace = face;
        const dirIndex = face % 4;
        const isLower = face >= 4;
        const targetY = this.faceRotations[dirIndex];
        let currentNormalized = this.rotationY % 360;
        let diff = targetY - currentNormalized;
        if (diff > 180)
            diff -= 360;
        if (diff < -180)
            diff += 360;
        this.rotationY = this.rotationY + diff;
        this.rotationX = isLower ? 20 : -15;
        this.diamond?.classList.remove('dragging');
        this.updateTransform();
        this.setActiveFace(face);
    }
    updateTransform() {
        if (!this.diamond)
            return;
        this.diamond.style.transform = `rotateX(${this.rotationX}deg) rotateY(${this.rotationY}deg) rotateZ(${this.rotationZ}deg)`;
    }
    setActiveFace(face) {
        const faces = document.querySelectorAll('.diamond-face');
        faces.forEach((f, i) => {
            if (i < 8)
                f.classList.toggle('active', i === face);
        });
        const buttons = document.querySelectorAll('.diamond-nav-btn');
        buttons.forEach((btn, i) => {
            btn.classList.toggle('active', i === face);
        });
    }
    startAutoRotate() {
        let lastTime = performance.now();
        const speedY = 20;
        const rotate = (time) => {
            if (this.isDragging)
                return;
            const delta = (time - lastTime) / 1000;
            lastTime = time;
            this.rotationY += speedY * delta;
            const t = time * 0.001;
            this.rotationX = -5 + Math.sin(t * 0.4) * 25;
            this.rotationZ = Math.sin(t * 0.25) * 8;
            this.updateTransform();
            this.autoRotateId = requestAnimationFrame(rotate);
        };
        this.autoRotateId = requestAnimationFrame(rotate);
    }
    stopAutoRotate() {
        if (this.autoRotateId) {
            cancelAnimationFrame(this.autoRotateId);
            this.autoRotateId = null;
        }
    }
    destroy() {
        this.stopAutoRotate();
        if (this.animationId)
            cancelAnimationFrame(this.animationId);
        if (this.renderLoopId)
            cancelAnimationFrame(this.renderLoopId);
    }
}
