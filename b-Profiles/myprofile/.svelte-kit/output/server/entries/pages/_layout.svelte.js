import { Z as attr_style, _ as stringify, $ as store_get, a0 as unsubscribe_stores } from "../../chunks/index2.js";
import { g as getContext } from "../../chunks/context.js";
import "clsx";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
import "../../chunks/navigation.js";
/* empty css                                              */
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
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
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="cube-transition-overlay svelte-o797iy"><div class="cube-scene svelte-o797iy"${attr_style(`perspective: ${stringify(2e3 + cameraZ)}px;`)}><div class="cube svelte-o797iy"${attr_style(`transform: translateZ(${stringify(-cameraZ)}px) rotateX(${stringify(cubeRotX)}deg) rotateY(${stringify(cubeRotY)}deg)`)}><div class="cube-face front svelte-o797iy" style="--face-color: #00ff41"><div class="face-label svelte-o797iy">PROFILE</div> <div class="face-preview profile-preview svelte-o797iy"><div class="avatar-placeholder svelte-o797iy"></div> <div class="text-placeholder svelte-o797iy"></div></div></div> <div class="cube-face right svelte-o797iy" style="--face-color: #00f3ff"><div class="face-label svelte-o797iy">AUDIO</div> <div class="face-preview audio-preview svelte-o797iy"><div class="wave-line svelte-o797iy"></div> <div class="wave-line svelte-o797iy"></div> <div class="wave-line svelte-o797iy"></div></div></div> <div class="cube-face back svelte-o797iy" style="--face-color: #ff9100"><div class="face-label svelte-o797iy">BIO</div> <div class="face-preview bio-preview svelte-o797iy"><div class="heartbeat-line svelte-o797iy"></div> <div class="pulse-dot svelte-o797iy"></div></div></div> <div class="cube-face left svelte-o797iy" style="--face-color: #00ff9d"><div class="face-label svelte-o797iy">GEO</div> <div class="face-preview geo-preview svelte-o797iy"><div class="globe-ring svelte-o797iy"></div> <div class="globe-ring inner svelte-o797iy"></div> <div class="location-dot svelte-o797iy"></div></div></div> <div class="cube-face top svelte-o797iy" style="--face-color: #ff0055"><div class="face-label svelte-o797iy">VISUAL</div> <div class="face-preview visual-preview svelte-o797iy"><div class="play-triangle svelte-o797iy"></div></div></div> <div class="cube-face bottom svelte-o797iy" style="--face-color: #bc13fe"><div class="face-label svelte-o797iy">MEMORY</div> <div class="face-preview memory-preview svelte-o797iy"><div class="polaroid-frame svelte-o797iy"></div> <div class="polaroid-frame offset svelte-o797iy"></div></div></div></div></div> <div class="phase-indicator mono svelte-o797iy">`);
      {
        $$renderer2.push("<!--[!-->");
        {
          $$renderer2.push("<!--[!-->");
          {
            $$renderer2.push("<!--[!-->");
            {
              $$renderer2.push("<!--[!-->");
            }
            $$renderer2.push(`<!--]-->`);
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { children } = $$props;
    let showTransition = false;
    function getPageFromPath(path) {
      if (path.includes("/audio")) return "audio";
      if (path.includes("/bio")) return "bio";
      if (path.includes("/geo")) return "geo";
      if (path.includes("/visual")) return "visual";
      if (path.includes("/memory")) return "memory";
      if (path.includes("/syslog")) return "syslog";
      if (path.includes("/stats")) return "profile";
      if (path.includes("/terminal")) return "syslog";
      if (path.includes("/galaxy")) return "syslog";
      return "profile";
    }
    let scaleValue = 1;
    let scaledHeight = "100vh";
    getPageFromPath(store_get($$store_subs ??= {}, "$page", page).url.pathname);
    $$renderer2.push(`<div class="viewport-wrapper svelte-12qhfyh" style="width: 100vw; height: 100vh; overflow: hidden;"><div class="scale-container svelte-12qhfyh"${attr_style(`transform: scale(${stringify(scaleValue)}); transform-origin: top left; width: ${stringify("100%")}; height: ${stringify(scaledHeight)};`)}><div class="matrix-container">`);
    StarfieldBg($$renderer2);
    $$renderer2.push(`<!----> <div class="vignette"></div> <div class="scanlines"></div> `);
    CubeTransition($$renderer2, {
      isActive: showTransition
    });
    $$renderer2.push(`<!----> `);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="boot-screen svelte-12qhfyh"><div class="terminal-text svelte-12qhfyh"><div class="typewriter mono svelte-12qhfyh">INITIALIZING SYSTEM...</div> <div class="typewriter mono delay-1 svelte-12qhfyh">LOADING 3D SHADER ENGINE...</div> <div class="typewriter mono delay-2 svelte-12qhfyh">RENDERING GALAXY...</div> <div class="typewriter mono delay-3 svelte-12qhfyh">ACTIVATING AURORA BOREALIS...</div></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _layout as default
};
