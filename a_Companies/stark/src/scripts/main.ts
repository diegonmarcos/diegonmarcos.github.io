import { ShaderManager } from './shaders/ShaderManager.ts';
import { CursorAnimation } from './animations/cursor.ts';
import { CardEffects } from './animations/cardEffects.ts';
import { ScrollEffects } from './animations/scrollEffects.ts';
import { ServiceCube } from './animations/serviceCube.ts';
import { VisionPyramid } from './animations/visionPyramid.ts';
import { ShaderDiamond } from './animations/shaderDiamond.ts';
import { ObserverManager } from './utils/intersectionObserver.ts';
import { LoaderManager } from './utils/loader.ts';
import { PageSnap } from './utils/pageSnap.ts';

class StarkIndustries {
    private shaderManagers: ShaderManager[] = [];

    constructor() {
        this.init();
    }

    private init(): void {
        this.shaderManagers.push(
            new ShaderManager('hero-shader', 'hero.glsl', 1.0)
        );

        new CursorAnimation();
        new CardEffects();
        new ScrollEffects();
        new ServiceCube();
        new VisionPyramid();
        new ShaderDiamond();
        new ObserverManager();
        new LoaderManager();
        new PageSnap();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new StarkIndustries();
});
