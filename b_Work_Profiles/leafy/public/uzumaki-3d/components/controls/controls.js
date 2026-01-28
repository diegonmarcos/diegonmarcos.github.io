/**
 * Controls Component
 * UI button handlers
 */

export class Controls {
    constructor(uzumaki) {
        this.uzumaki = uzumaki;
        this.init();
    }

    init() {
        console.log('%c[Controls] Initializing...', 'color: #ffaa00');

        // Restart button
        const restartBtn = document.getElementById('restartBtn');
        if (restartBtn) {
            restartBtn.addEventListener('click', () => {
                this.uzumaki.restart();
            });
        }

        // Pause button
        const pauseBtn = document.getElementById('pauseBtn');
        if (pauseBtn) {
            pauseBtn.addEventListener('click', () => {
                this.uzumaki.togglePause();
            });
        }

        // Preset buttons
        document.querySelectorAll('.preset-btn:not(.auto-btn)').forEach((btn) => {
            btn.addEventListener('click', (e) => {
                const presetIndex = parseInt(e.target.dataset.preset);
                if (!isNaN(presetIndex)) {
                    this.uzumaki.disableAutoMode();
                    this.uzumaki.setPreset(presetIndex);
                    this.uzumaki.updateActiveButton(presetIndex);
                }
            });
        });

        // Auto button
        const autoBtn = document.getElementById('autoBtn');
        if (autoBtn) {
            autoBtn.addEventListener('click', () => {
                this.uzumaki.toggleAutoMode();
            });
        }

        console.log('%c[Controls] Ready', 'color: #00ff00');

        return this;
    }
}

export default Controls;
