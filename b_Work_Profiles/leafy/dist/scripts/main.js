import { ShaderManager } from './shaders/ShaderManager.js';
import { heroShaderCode } from './shaders/heroShader.js';
import { calmShaderCode } from './shaders/calmShader.js';
import { cubeShaderCode } from './shaders/cubeShader.js';
import { pyramidShaderCode } from './shaders/pyramidShader.js';
import { CursorAnimation } from './animations/cursor.js';
import { CardEffects } from './animations/cardEffects.js';
import { ScrollEffects } from './animations/scrollEffects.js';
import { ServiceCube } from './animations/serviceCube.js';
import { VisionPyramid } from './animations/visionPyramid.js';
import { ObserverManager } from './utils/intersectionObserver.js';
import { LoaderManager } from './utils/loader.js';
import { ShadertoyGallery } from './utils/shadertoyGallery.js';
class LeafStudios {
    constructor() {
        this.shaderManagers = [];
        this.init();
    }
    init() {
        this.shaderManagers.push(new ShaderManager('hero-shader', heroShaderCode, 1.0), new ShaderManager('services-shader', calmShaderCode, 0.6), new ShaderManager('cube-shader', cubeShaderCode, 0.8), new ShaderManager('gallery-shader', calmShaderCode, 0.5), new ShaderManager('about-shader', calmShaderCode, 0.5), new ShaderManager('pyramid-shader', pyramidShaderCode, 0.8), new ShaderManager('contact-shader', calmShaderCode, 0.4));
        new CursorAnimation();
        new CardEffects();
        new ScrollEffects();
        new ServiceCube();
        new VisionPyramid();
        new ShadertoyGallery();
        new ObserverManager();
        new LoaderManager();
    }
}
document.addEventListener('DOMContentLoaded', () => {
    new LeafStudios();
});
