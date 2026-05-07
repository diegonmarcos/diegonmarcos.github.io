/**
 * FPS Counter Utility
 */

export class FPSCounter {
    constructor(elementId = 'fpsCount', updateInterval = 2000) {
        this.element = document.getElementById(elementId);
        this.updateInterval = updateInterval;
        this.frameCount = 0;
        this.lastTime = performance.now();
        this.fpsHistory = [];
        this.maxHistory = 5;
    }

    /**
     * Call this every frame
     */
    update() {
        this.frameCount++;
        const now = performance.now();
        const elapsed = now - this.lastTime;

        if (elapsed >= this.updateInterval) {
            const fps = this.frameCount / (elapsed / 1000);
            this.fpsHistory.push(fps);

            if (this.fpsHistory.length > this.maxHistory) {
                this.fpsHistory.shift();
            }

            const avgFps = this.fpsHistory.reduce((a, b) => a + b, 0) / this.fpsHistory.length;

            if (this.element) {
                this.element.textContent = `FPS: ${avgFps.toFixed(0)}`;
            }

            this.frameCount = 0;
            this.lastTime = now;

            return avgFps;
        }

        return null;
    }

    /**
     * Get current average FPS
     */
    getAverageFPS() {
        if (this.fpsHistory.length === 0) return 0;
        return this.fpsHistory.reduce((a, b) => a + b, 0) / this.fpsHistory.length;
    }

    /**
     * Reset counter
     */
    reset() {
        this.frameCount = 0;
        this.lastTime = performance.now();
        this.fpsHistory = [];
    }
}

export default FPSCounter;
