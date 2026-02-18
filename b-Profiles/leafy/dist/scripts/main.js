import { ShaderManager } from "./shaders/ShaderManager.js";
import { CursorAnimation } from "./animations/cursor.js";
import { CardEffects } from "./animations/cardEffects.js";
import { ScrollEffects } from "./animations/scrollEffects.js";
import { ServiceCube } from "./animations/serviceCube.js";
import { VisionPyramid } from "./animations/visionPyramid.js";
import { ShaderDiamond } from "./animations/shaderDiamond.js";
import { ObserverManager } from "./utils/intersectionObserver.js";
import { LoaderManager } from "./utils/loader.js";
import { PageSnap } from "./utils/pageSnap.js";
class LeafStudios {
    constructor() {
        this.shaderManagers = [];
        this.init();
    }
    init() {
        this.shaderManagers.push(new ShaderManager('hero-shader', 'hero.glsl', 1.0));
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
    new LeafStudios();
});
