// Import shaders
import { ShaderManager } from './shaders/ShaderManager';
import { heroShaderCode } from './shaders/heroShader';
import { calmShaderCode } from './shaders/calmShader';
import { cubeShaderCode } from './shaders/cubeShader';
import { pyramidShaderCode } from './shaders/pyramidShader';

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
        // Initialize WebGL shaders
        this.shaderManagers.push(
            new ShaderManager('hero-shader', heroShaderCode, 1.0),
            new ShaderManager('services-shader', calmShaderCode, 0.6),
            new ShaderManager('cube-shader', cubeShaderCode, 0.8),
            new ShaderManager('gallery-shader', calmShaderCode, 0.5),
            new ShaderManager('about-shader', calmShaderCode, 0.5),
            new ShaderManager('pyramid-shader', pyramidShaderCode, 0.8),
            new ShaderManager('contact-shader', calmShaderCode, 0.4)
        );

        // Initialize animations
        new CursorAnimation();
        new CardEffects();
        new ScrollEffects();
        new ServiceCube();
        new VisionPyramid();

        // Initialize utilities
        // IMPORTANT: ShadertoyGallery must run BEFORE ObserverManager
        // because it creates .shader-card elements that need to be observed
        new ShadertoyGallery();
        new ObserverManager();
        new LoaderManager();
    }
}

// Start application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new LeafStudios();
});
