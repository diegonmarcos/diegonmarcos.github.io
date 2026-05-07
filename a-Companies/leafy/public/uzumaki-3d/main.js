/**
 * 渦巻き - The Most Illegal Uzumaki in Mathematics
 *
 * MAIN ENTRY POINT
 * Component-based modular architecture
 */

// Utils
import { runPerformanceCheck } from './utils/performance.js';
import { FPSCounter } from './utils/fps.js';

// Components
import { Stars } from './components/stars/stars.js';
import { Background } from './components/background/background.js';
import { Uzumaki3D } from './components/uzumaki/uzumaki.js';
import { Controls } from './components/controls/controls.js';

console.log('%c[App] Starting Uzumaki-3D...', 'color: #00ff88; font-weight: bold');

/**
 * Main Application Class
 */
class App {
    constructor() {
        this.perfData = null;
        this.stars = null;
        this.background = null;
        this.uzumaki = null;
        this.controls = null;
        this.fpsCounter = null;
        this.isRunning = false;
    }

    /**
     * Initialize all components
     */
    init() {
        console.log('%c[App] Initializing components...', 'color: #88ff00');

        // 1. Performance check
        this.perfData = runPerformanceCheck();

        // 2. Stars (CSS layer - z-index 1)
        this.stars = new Stars();
        this.stars.init();

        // 3. Background (WebGL shader - z-index 2)
        this.background = new Background({
            isLowEnd: this.perfData.isLowEnd
        });
        this.background.init();

        // 4. Uzumaki3D (Three.js - z-index 3)
        this.uzumaki = new Uzumaki3D(this.background.getRenderer());

        // 5. Controls (UI handlers)
        this.controls = new Controls(this.uzumaki);

        // 6. FPS Counter
        this.fpsCounter = new FPSCounter();

        console.log('%c[App] All components initialized', 'color: #00ff00');

        return this;
    }

    /**
     * Start animation loop
     */
    start() {
        this.isRunning = true;
        this.animate();
        console.log('%c[App] Animation started!', 'color: #00ff00; font-weight: bold');
        return this;
    }

    /**
     * Main animation loop
     */
    animate() {
        if (!this.isRunning) return;

        requestAnimationFrame(() => this.animate());

        // Update background shader
        this.background.update(0.01);

        // Update uzumaki
        this.uzumaki.update();

        // Render (order matters for transparency)
        const renderer = this.background.getRenderer();
        renderer.autoClear = false;
        renderer.clear();

        // 1. Background shader
        this.background.render();

        // 2. 3D Uzumaki
        this.uzumaki.render();

        // FPS counter
        this.fpsCounter.update();
    }

    /**
     * Stop animation
     */
    stop() {
        this.isRunning = false;
        return this;
    }

    /**
     * Cleanup
     */
    destroy() {
        this.stop();
        this.stars?.destroy();
        this.background?.destroy();
        this.uzumaki?.destroy();
    }
}

/**
 * Initialize application
 */
function init() {
    const app = new App();
    app.init();

    // Start after DOM settles
    setTimeout(() => {
        app.start();
    }, 500);

    // Expose for debugging
    window.uzumakiApp = app;

    return app;
}

// Start when DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Error handlers
window.addEventListener('error', (e) => {
    console.error('%c[App] Error:', 'color: red', e.error || e.message);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('%c[App] Rejection:', 'color: red', e.reason);
});

console.log('%c[App] Script loaded', 'color: #888');
