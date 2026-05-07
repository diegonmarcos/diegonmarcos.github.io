/**
 * Stars Component
 * Creates animated CSS star field
 */

export class Stars {
    constructor(options = {}) {
        this.container = null;
        this.totalStars = 0;

        // Configuration
        this.config = {
            layers: [
                { count: 180, size: 1, speed: 60, opacity: 0.7 },
                { count: 120, size: 1, speed: 90, opacity: 0.5 },
                { count: 80, size: 2, speed: 140, opacity: 0.8 },
                { count: 40, size: 2, speed: 220, opacity: 0.6 },
                { count: 20, size: 3, speed: 320, opacity: 1.0 },
            ],
            colors: {
                white: { color: 'white', weight: 0.75 },
                warm: { color: '#ffaa88', weight: 0.10 },
                cool: { color: '#88aaff', weight: 0.10 },
                yellow: { color: '#ffffaa', weight: 0.05 },
            },
            ...options
        };
    }

    /**
     * Get random star color based on weights
     */
    getRandomColor() {
        const rnd = Math.random();
        let cumulative = 0;

        for (const [name, config] of Object.entries(this.config.colors)) {
            cumulative += config.weight;
            if (rnd < cumulative) {
                return config.color;
            }
        }
        return 'white';
    }

    /**
     * Create a single star element
     */
    createStar(size, opacity) {
        const star = document.createElement('div');
        star.className = 'star';

        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const twinkleDuration = 0.5 + Math.random() * 2;
        const color = this.getRandomColor();

        star.style.cssText = `
            left: ${x}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            opacity: ${opacity};
            animation: twinkle ${twinkleDuration}s ease-in-out infinite alternate;
            box-shadow: 0 0 ${size * 2}px ${color};
        `;

        return star;
    }

    /**
     * Create a layer of stars
     */
    createLayer(layerIndex, layerConfig) {
        const layer = document.createElement('div');
        layer.className = 'star-layer';
        layer.style.animation = `starMove${layerIndex} ${layerConfig.speed}s linear infinite`;

        for (let i = 0; i < layerConfig.count; i++) {
            const star = this.createStar(layerConfig.size, layerConfig.opacity);
            layer.appendChild(star);
        }

        return layer;
    }

    /**
     * Initialize and render stars
     */
    init() {
        console.log('%c[Stars] Initializing...', 'color: #aa88ff');

        // Create container
        this.container = document.createElement('div');
        this.container.id = 'stars-container';

        // Create layers
        this.config.layers.forEach((layerConfig, index) => {
            const layer = this.createLayer(index, layerConfig);
            this.container.appendChild(layer);
            this.totalStars += layerConfig.count;
        });

        // Add to DOM
        document.body.insertBefore(this.container, document.body.firstChild);

        console.log(`%c[Stars] Created ${this.totalStars} stars in ${this.config.layers.length} layers`, 'color: #00ff00');

        return this;
    }

    /**
     * Remove stars from DOM
     */
    destroy() {
        if (this.container && this.container.parentNode) {
            this.container.parentNode.removeChild(this.container);
        }
        this.container = null;
        this.totalStars = 0;
    }

    /**
     * Get stats
     */
    getStats() {
        return {
            totalStars: this.totalStars,
            layers: this.config.layers.length
        };
    }
}

export default Stars;
