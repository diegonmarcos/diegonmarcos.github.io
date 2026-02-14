/**
 * Uzumaki3D Component
 * Full 3D spirograph rendered with Three.js
 *
 * Formula: F(n, t) = [ r, θ, z ]
 * - r = n^(3/2) / (n + radiusOffset)
 * - θ = nMultiplier * n * sin(freqMultiplier * t)
 * - z = sin(t * zFrequency) * zAmplitude
 */

import { PRESETS } from './presets.js';

export class Uzumaki3D {
    constructor(renderer) {
        this.renderer = renderer;

        this.currentPreset = 0;
        this.config = {
            baseRadius: 150,
            lineOpacity: 0.6,
            ...PRESETS[0],
        };

        // State
        this.currentLayer = 0;
        this.isPlaying = true;
        this.isPaused = false;
        this.isDrawingComplete = false;
        this.totalPointsDrawn = 0;

        // Drawing throttle (slower drawing)
        this.drawFrameCounter = 0;
        this.drawInterval = 6; // Draw 1 layer every N frames (higher = slower)

        // Auto-cycle mode
        this.isAutoMode = false;
        this.autoRotationTime = 0;
        this.autoRotationsPerPreset = 1.5;

        // Three.js objects
        this.scene = null;
        this.camera = null;
        this.spiralGroup = null;
        this.lines = [];

        // Interaction
        this.isDragging = false;
        this.isPinching = false;
        this.previousPos = { x: 0, y: 0 };
        this.previousPinchDist = 0;

        // Event callbacks
        this.onPresetChange = null;

        this.init();
    }

    init() {
        console.log('%c[Uzumaki3D] Initializing...', 'color: #ff00aa');

        // Scene
        this.scene = new THREE.Scene();

        // Camera
        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 5000);
        this.camera.position.z = 450;
        this.camera.position.y = -50;
        this.camera.lookAt(0, 0, 0);

        // Spiral group
        this.spiralGroup = new THREE.Group();
        this.scene.add(this.spiralGroup);

        // Setup interactions
        this.setupEventListeners();

        // Resize handler
        window.addEventListener('resize', () => this.onResize());

        // Initial formula display
        this.updateFormulaDisplay();

        console.log('%c[Uzumaki3D] Ready', 'color: #00ff00');

        return this;
    }

    setupEventListeners() {
        const canvas = this.renderer.domElement;
        canvas.style.cursor = 'grab';
        canvas.style.pointerEvents = 'auto';

        // Mouse controls
        canvas.addEventListener('mousedown', (e) => {
            this.isDragging = true;
            this.previousPos = { x: e.clientX, y: e.clientY };
            canvas.style.cursor = 'grabbing';
        });

        canvas.addEventListener('mousemove', (e) => {
            if (this.isDragging) {
                const dx = e.clientX - this.previousPos.x;
                const dy = e.clientY - this.previousPos.y;
                this.spiralGroup.rotation.y += dx * 0.005;
                this.spiralGroup.rotation.x += dy * 0.005;
                this.previousPos = { x: e.clientX, y: e.clientY };
            }
        });

        canvas.addEventListener('mouseup', () => {
            this.isDragging = false;
            canvas.style.cursor = 'grab';
        });

        canvas.addEventListener('mouseleave', () => {
            this.isDragging = false;
            canvas.style.cursor = 'grab';
        });

        // Touch controls
        canvas.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) {
                this.isPinching = false;
                this.isDragging = true;
                this.previousPos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            } else if (e.touches.length === 2) {
                this.isPinching = true;
                this.isDragging = false;
                const dx = e.touches[0].clientX - e.touches[1].clientX;
                const dy = e.touches[0].clientY - e.touches[1].clientY;
                this.previousPinchDist = Math.sqrt(dx * dx + dy * dy);
            }
        }, { passive: false });

        canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            if (e.touches.length === 1 && !this.isPinching) {
                const dx = e.touches[0].clientX - this.previousPos.x;
                const dy = e.touches[0].clientY - this.previousPos.y;
                this.spiralGroup.rotation.y += dx * 0.005;
                this.spiralGroup.rotation.x += dy * 0.005;
                this.previousPos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            } else if (e.touches.length === 2) {
                const dx = e.touches[0].clientX - e.touches[1].clientX;
                const dy = e.touches[0].clientY - e.touches[1].clientY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (this.previousPinchDist > 0) {
                    const scale = Math.max(0.2, Math.min(5.0, this.spiralGroup.scale.x * (dist / this.previousPinchDist)));
                    this.spiralGroup.scale.setScalar(scale);
                }
                this.previousPinchDist = dist;
            }
        }, { passive: false });

        canvas.addEventListener('touchend', (e) => {
            if (e.touches.length < 2) this.isPinching = false;
            if (e.touches.length === 0) this.isDragging = false;
        });

        // Wheel zoom
        canvas.addEventListener('wheel', (e) => {
            e.preventDefault();
            const scale = Math.max(0.2, Math.min(5.0, this.spiralGroup.scale.x * (1 - e.deltaY * 0.001)));
            this.spiralGroup.scale.setScalar(scale);
        }, { passive: false });
    }

    onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
    }

    /**
     * HSL to RGB conversion
     */
    hslToRgb(h, s, l) {
        h /= 360;
        let r, g, b;

        if (s === 0) {
            r = g = b = l;
        } else {
            const hue2rgb = (p, q, t) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1/6) return p + (q - p) * 6 * t;
                if (t < 1/2) return q;
                if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                return p;
            };

            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1/3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1/3);
        }

        return { r, g, b };
    }

    /**
     * Get layer color based on formula and preset
     * Color varies by: layer depth, preset theme, and formula parameters
     */
    getLayerColor(layerIndex) {
        const progress = layerIndex / this.config.maxLayers;
        const { colorHue, colorSaturation, freqMultiplier, nMultiplier } = this.config;

        // Base hue from preset, modulated by formula parameters
        const hueShift = Math.sin(progress * Math.PI * 2) * 20;
        const formulaInfluence = (freqMultiplier / 250) * 15; // Higher freq = more hue variation
        const hue = (colorHue + hueShift + progress * formulaInfluence) % 360;

        // Saturation varies with depth and nMultiplier
        const saturation = colorSaturation + (1 - progress) * 0.1 + nMultiplier * 0.2;

        // Lightness: bright at start, slightly dimmer towards end
        const lightness = 0.85 - progress * 0.25;

        const rgb = this.hslToRgb(hue, Math.min(saturation, 0.6), lightness);

        return new THREE.Color(rgb.r, rgb.g, rgb.b);
    }

    /**
     * Calculate 3D point using Uzumaki formula
     */
    calculatePoint3D(n, t) {
        const { freqMultiplier, nMultiplier, phaseMultiplier, baseRadius, radiusOffset, innerRatio, penDistance, zAmplitude, zFrequency } = this.config;

        // r = n^(3/2) / (n + radiusOffset)
        const radiusFactor = Math.pow(n, 1.5) / (n + radiusOffset);
        let R = baseRadius * radiusFactor;
        R = Math.min(R, 180);

        const r = R * innerRatio;
        const d = R * penDistance;

        // θ perturbation: sin(nMultiplier * n * sin(freqMultiplier * t))
        const innerSine = Math.sin(freqMultiplier * t);
        const warp = Math.sin(nMultiplier * n * innerSine) * 0.25;

        const rotation = phaseMultiplier * n * 1.5;

        // Epitrochoid formula
        const ratio = (R - r) / r;
        const x = (R - r) * Math.cos(t + rotation) + d * Math.cos(ratio * t + rotation * 0.5 + warp);
        const y = (R - r) * Math.sin(t + rotation) - d * Math.sin(ratio * t + rotation * 0.5 + warp);

        // Z-axis depth
        const z = Math.sin(t * zFrequency + n * 0.1) * zAmplitude * (n / this.config.maxLayers);

        return new THREE.Vector3(x, y, z);
    }

    /**
     * Create a 3D line for a layer
     */
    createLayerLine(layerIndex) {
        const n = layerIndex + 1;
        const { pointsPerLayer, rotations } = this.config;

        const points = [];
        for (let i = 0; i <= pointsPerLayer; i++) {
            const t = (i / pointsPerLayer) * Math.PI * 2 * rotations;
            points.push(this.calculatePoint3D(n, t));
        }

        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({
            color: this.getLayerColor(layerIndex),
            transparent: true,
            opacity: this.config.lineOpacity,
            linewidth: 1
        });

        const line = new THREE.Line(geometry, material);
        this.spiralGroup.add(line);
        this.lines.push(line);

        this.totalPointsDrawn += pointsPerLayer;
    }

    /**
     * Draw next layer (throttled)
     */
    drawNextLayer() {
        if (this.currentLayer >= this.config.maxLayers) {
            if (!this.isDrawingComplete) {
                this.isDrawingComplete = true;
                console.log(`%c[Uzumaki3D] Complete: ${this.totalPointsDrawn.toLocaleString()} points`, 'color: #00ff00');
            }
            return false;
        }

        this.createLayerLine(this.currentLayer);
        this.currentLayer++;
        this.updateStats();
        return true;
    }

    /**
     * Update formula display
     */
    updateFormulaDisplay() {
        const { freqMultiplier, radiusOffset, nMultiplier } = this.config;
        const formulaEl = document.querySelector('.formula-display');
        if (formulaEl) {
            formulaEl.innerHTML = `
                <span class="formula-r">r = n<sup>3/2</sup>/(n+${radiusOffset})</span>
                <span class="formula-sep">·</span>
                <span class="formula-theta">θ = ${nMultiplier}n·sin(${freqMultiplier.toFixed(1)}t)</span>
            `;
        }

        // Trigger callback if set
        if (this.onPresetChange) {
            this.onPresetChange(PRESETS[this.currentPreset]);
        }
    }

    /**
     * Update stats display
     */
    updateStats() {
        const presetName = this.isAutoMode ? `Auto: ${PRESETS[this.currentPreset].name}` : PRESETS[this.currentPreset].name;
        const status = this.isDrawingComplete ? ' ∞' : '';

        const layerEl = document.getElementById('layerCount');
        const pointEl = document.getElementById('pointCount');

        if (layerEl) layerEl.textContent = `${presetName} ${Math.min(this.currentLayer, this.config.maxLayers)}/${this.config.maxLayers}${status}`;
        if (pointEl) pointEl.textContent = `Points: ${this.totalPointsDrawn.toLocaleString()}`;
    }

    /**
     * Clear spiral
     */
    clearSpiral() {
        this.lines.forEach(line => {
            line.geometry.dispose();
            line.material.dispose();
            this.spiralGroup.remove(line);
        });
        this.lines = [];
    }

    /**
     * Set preset
     */
    setPreset(index) {
        this.currentPreset = index;
        this.config = { ...this.config, ...PRESETS[index] };
        this.restart();
    }

    /**
     * Next preset
     */
    nextPreset() {
        const nextIndex = (this.currentPreset + 1) % PRESETS.length;
        this.setPreset(nextIndex);
    }

    /**
     * Restart
     */
    restart() {
        this.clearSpiral();
        this.currentLayer = 0;
        this.totalPointsDrawn = 0;
        this.isPlaying = true;
        this.isPaused = false;
        this.isDrawingComplete = false;
        this.autoRotationTime = 0;
        this.drawFrameCounter = 0;

        const pauseBtn = document.getElementById('pauseBtn');
        if (pauseBtn) pauseBtn.textContent = 'Pause';

        this.updateStats();
        this.updateFormulaDisplay();
    }

    /**
     * Toggle pause
     */
    togglePause() {
        this.isPaused = !this.isPaused;
        const pauseBtn = document.getElementById('pauseBtn');
        if (pauseBtn) pauseBtn.textContent = this.isPaused ? 'Resume' : 'Pause';
    }

    /**
     * Toggle auto mode
     */
    toggleAutoMode() {
        this.isAutoMode = !this.isAutoMode;
        const autoBtn = document.getElementById('autoBtn');

        if (this.isAutoMode) {
            autoBtn?.classList.add('active');
            document.querySelectorAll('.preset-btn:not(.auto-btn)').forEach(b => b.classList.remove('active'));
            this.autoRotationTime = 0;
            this.restart();
        } else {
            autoBtn?.classList.remove('active');
            this.updateActiveButton(this.currentPreset);
        }
    }

    /**
     * Disable auto mode
     */
    disableAutoMode() {
        this.isAutoMode = false;
        document.getElementById('autoBtn')?.classList.remove('active');
    }

    /**
     * Update active button
     */
    updateActiveButton(presetIndex) {
        document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
        const btn = document.querySelector(`[data-preset="${presetIndex}"]`);
        if (btn) btn.classList.add('active');
    }

    /**
     * Update (called each frame)
     */
    update() {
        if (this.isPaused) return;

        // 3D rotation (continuous)
        if (!this.isDragging && !this.isPinching) {
            this.spiralGroup.rotation.y += 0.004;
            this.spiralGroup.rotation.x += 0.001;
            this.spiralGroup.rotation.z += 0.0005;
        }

        // Progressive drawing (heavily throttled for slow effect)
        if (!this.isDrawingComplete) {
            this.drawFrameCounter++;
            if (this.drawFrameCounter >= this.drawInterval) {
                this.drawNextLayer();
                this.drawFrameCounter = 0;
            }
        } else {
            // Auto mode cycling
            if (this.isAutoMode) {
                this.autoRotationTime += 0.004;
                if (this.autoRotationTime >= Math.PI * 2 * this.autoRotationsPerPreset) {
                    this.autoRotationTime = 0;
                    this.nextPreset();
                }
            }
        }
    }

    /**
     * Render
     */
    render() {
        this.renderer.render(this.scene, this.camera);
    }

    /**
     * Get current preset
     */
    getCurrentPreset() {
        return PRESETS[this.currentPreset];
    }

    /**
     * Cleanup
     */
    destroy() {
        this.clearSpiral();
        this.scene = null;
        this.camera = null;
        this.spiralGroup = null;
    }
}

export { PRESETS };
export default Uzumaki3D;
