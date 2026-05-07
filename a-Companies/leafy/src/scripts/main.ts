// Import shader manager
import { ShaderManager } from './shaders/ShaderManager.ts';

// Import animations
import { CursorAnimation } from './animations/cursor.ts';
import { CardEffects } from './animations/cardEffects.ts';
import { ScrollEffects } from './animations/scrollEffects.ts';
import { ServiceCube } from './animations/serviceCube.ts';
import { VisionPyramid } from './animations/visionPyramid.ts';
import { ShaderDiamond } from './animations/shaderDiamond.ts';

// Import utilities
import { ObserverManager } from './utils/intersectionObserver.ts';
import { LoaderManager } from './utils/loader.ts';
import { PageSnap } from './utils/pageSnap.ts';

// Initialize application
class LeafStudios {
    private shaderManagers: ShaderManager[] = [];

    constructor() {
        this.init();
    }

    private init(): void {
        // Only 2 WebGL shaders to avoid context exhaustion
        // Mobile browsers have ~8 context limit
        this.shaderManagers.push(
            new ShaderManager('hero-shader', 'hero.glsl', 1.0)
        );

        // Initialize animations
        new CursorAnimation();
        new CardEffects();
        new ScrollEffects();
        new ServiceCube();
        new VisionPyramid();
        new ShaderDiamond();

        // Initialize utilities
        new ObserverManager();
        new LoaderManager();
        new PageSnap();
    }
}

// Start application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new LeafStudios();
});
