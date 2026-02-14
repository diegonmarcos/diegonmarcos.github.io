// Import shader manager
import { ShaderManager } from './shaders/ShaderManager';

// Import animations
import { CursorAnimation } from './animations/cursor';
import { CardEffects } from './animations/cardEffects';
import { ScrollEffects } from './animations/scrollEffects';
import { ServiceCube } from './animations/serviceCube';
import { VisionPyramid } from './animations/visionPyramid';

// Import utilities
import { ObserverManager } from './utils/intersectionObserver';
import { LoaderManager } from './utils/loader';
import { ShadertoyGallery } from './utils/shadertoyGallery';

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

        // Initialize utilities
        new ShadertoyGallery(); // Lazy-loaded shader gallery
        new ObserverManager();
        new LoaderManager();
    }
}

// Start application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new LeafStudios();
});
