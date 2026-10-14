import { a as attr_style, s as stringify } from "../../chunks/index.js";
import "@sveltejs/kit/internal";
import "../../chunks/url.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/root.js";
import "../../chunks/exports.js";
import "../../chunks/state.svelte.js";
import "../../chunks/navigation.js";
import "clsx";
/* empty css                                              */
function StarfieldBg($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<canvas class="starfield-bg svelte-mnq2cf"></canvas>`);
  });
}
function CubeTransition($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      isActive = false
    } = $$props;
    let cubeRotX = 0;
    let cubeRotY = 0;
    let cameraZ = 0;
    if (isActive) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="cube-transition-overlay svelte-o797iy"><div class="cube-scene svelte-o797iy"${attr_style(`perspective: ${stringify(2e3 + cameraZ)}px;`)}><div class="cube svelte-o797iy"${attr_style(`transform: translateZ(${stringify(-cameraZ)}px) rotateX(${stringify(cubeRotX)}deg) rotateY(${stringify(cubeRotY)}deg)`)}><div class="cube-face front svelte-o797iy" style="--face-color: #00ff41"><div class="face-label svelte-o797iy">PROFILE</div> <div class="face-preview profile-preview svelte-o797iy"><div class="avatar-placeholder svelte-o797iy"></div> <div class="text-placeholder svelte-o797iy"></div></div></div> <div class="cube-face right svelte-o797iy" style="--face-color: #00f3ff"><div class="face-label svelte-o797iy">AUDIO</div> <div class="face-preview audio-preview svelte-o797iy"><div class="wave-line svelte-o797iy"></div> <div class="wave-line svelte-o797iy"></div> <div class="wave-line svelte-o797iy"></div></div></div> <div class="cube-face back svelte-o797iy" style="--face-color: #ff9100"><div class="face-label svelte-o797iy">BIO</div> <div class="face-preview bio-preview svelte-o797iy"><div class="heartbeat-line svelte-o797iy"></div> <div class="pulse-dot svelte-o797iy"></div></div></div> <div class="cube-face left svelte-o797iy" style="--face-color: #00ff9d"><div class="face-label svelte-o797iy">GEO</div> <div class="face-preview geo-preview svelte-o797iy"><div class="globe-ring svelte-o797iy"></div> <div class="globe-ring inner svelte-o797iy"></div> <div class="location-dot svelte-o797iy"></div></div></div> <div class="cube-face top svelte-o797iy" style="--face-color: #ff0055"><div class="face-label svelte-o797iy">VISUAL</div> <div class="face-preview visual-preview svelte-o797iy"><div class="play-triangle svelte-o797iy"></div></div></div> <div class="cube-face bottom svelte-o797iy" style="--face-color: #bc13fe"><div class="face-label svelte-o797iy">MEMORY</div> <div class="face-preview memory-preview svelte-o797iy"><div class="polaroid-frame svelte-o797iy"></div> <div class="polaroid-frame offset svelte-o797iy"></div></div></div></div></div> <div class="phase-indicator mono svelte-o797iy">`);
      {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children } = $$props;
    let showTransition = false;
    let scaleValue = 1;
    let scaledHeight = "100vh";
    $$renderer2.push(`<div class="viewport-wrapper svelte-12qhfyh" style="width: 100vw; height: 100vh; overflow: hidden;"><div class="scale-container svelte-12qhfyh"${attr_style(`transform: scale(${stringify(scaleValue)}); transform-origin: top left; width: ${"100%"}; height: ${stringify(scaledHeight)};`)}><div class="matrix-container">`);
    StarfieldBg($$renderer2);
    $$renderer2.push(`<!----> <div class="vignette"></div> <div class="scanlines"></div> `);
    CubeTransition($$renderer2, {
      isActive: showTransition
    });
    $$renderer2.push(`<!----> `);
    {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="boot-screen svelte-12qhfyh"><div class="terminal-text svelte-12qhfyh"><div class="typewriter mono svelte-12qhfyh">INITIALIZING SYSTEM...</div> <div class="typewriter mono delay-1 svelte-12qhfyh">LOADING 3D SHADER ENGINE...</div> <div class="typewriter mono delay-2 svelte-12qhfyh">RENDERING GALAXY...</div> <div class="typewriter mono delay-3 svelte-12qhfyh">ACTIVATING AURORA BOREALIS...</div></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div>`);
  });
}
export {
  _layout as default
};
