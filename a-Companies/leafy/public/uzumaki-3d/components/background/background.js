/**
 * Background Component
 * WebGL shader for nebula, aurora, and shooting stars
 */

import { vertexShader } from '../../shaders/background.vert.js';
import { fragmentShader } from '../../shaders/background.frag.js';

export class Background {
    constructor(options = {}) {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.material = null;
        this.time = 0;

        this.config = {
            isLowEnd: false,
            maxPixelRatio: 1.5,
            ...options
        };
    }

    /**
     * Initialize WebGL background
     */
    init() {
        console.log('%c[Background] Initializing WebGL shader...', 'color: #00aaff');

        // Scene & Camera
        this.scene = new THREE.Scene();
        this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        // Renderer
        const pixelRatio = this.config.isLowEnd ? 1 : Math.min(window.devicePixelRatio, this.config.maxPixelRatio);
        this.renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(pixelRatio);
        this.renderer.setClearColor(0x000000, 0);
        this.renderer.domElement.id = 'background-canvas';

        // Shader Material
        const geometry = new THREE.PlaneGeometry(2, 2);
        this.material = new THREE.ShaderMaterial({
            uniforms: {
                u_time: { value: 0 },
                u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
            },
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            transparent: true,
            depthWrite: false
        });

        const mesh = new THREE.Mesh(geometry, this.material);
        this.scene.add(mesh);

        // Add to DOM
        document.body.appendChild(this.renderer.domElement);

        // Resize handler
        window.addEventListener('resize', () => this.onResize());

        console.log('%c[Background] WebGL shader ready', 'color: #00ff00');

        return this;
    }

    /**
     * Handle window resize
     */
    onResize() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.material.uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
    }

    /**
     * Update shader time
     */
    update(deltaTime = 0.01) {
        this.time += deltaTime;
        this.material.uniforms.u_time.value = this.time;
    }

    /**
     * Render background
     */
    render() {
        this.renderer.render(this.scene, this.camera);
    }

    /**
     * Get renderer (for sharing with other components)
     */
    getRenderer() {
        return this.renderer;
    }

    /**
     * Get current time
     */
    getTime() {
        return this.time;
    }

    /**
     * Cleanup
     */
    destroy() {
        if (this.renderer) {
            this.renderer.dispose();
            if (this.renderer.domElement.parentNode) {
                this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
            }
        }
        if (this.material) {
            this.material.dispose();
        }
    }
}

export default Background;
