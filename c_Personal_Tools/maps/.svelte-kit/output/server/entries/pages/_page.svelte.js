import { a as attr_style, s as stringify, b as store_get, u as unsubscribe_stores, h as head, c as attr_class, d as attr } from "../../chunks/index2.js";
import "@sveltejs/kit/internal/server";
import "topojson-client";
import { d as derived, w as writable } from "../../chunks/index.js";
import * as d3Geo from "d3-geo";
import { a0 as escape_html } from "../../chunks/context.js";
const projections = [
  {
    id: "orthographic",
    name: "Globe",
    description: "3D spherical view",
    preserves: "True shape (no distortion)",
    factory: () => d3Geo.geoOrthographic()
  },
  {
    id: "mercator",
    name: "Mercator",
    description: "Standard web map",
    preserves: "Angles & shapes",
    factory: () => d3Geo.geoMercator()
  },
  {
    id: "equalEarth",
    name: "Equal Earth",
    description: "Modern equal-area",
    preserves: "Area (sizes)",
    factory: () => d3Geo.geoEqualEarth()
  },
  {
    id: "naturalEarth1",
    name: "Natural Earth",
    description: "Balanced compromise",
    preserves: "Nothing perfectly",
    factory: () => d3Geo.geoNaturalEarth1()
  },
  {
    id: "equirectangular",
    name: "Plate Carrée",
    description: "Simple lat/lon grid",
    preserves: "Distances on meridians",
    factory: () => d3Geo.geoEquirectangular()
  }
];
const currentProjectionType = writable("orthographic");
const autoRotate = writable(true);
const currentProjectionConfig = derived(
  currentProjectionType,
  ($type) => projections.find((p) => p.id === $type) || projections[0]
);
const isGlobe = derived(
  currentProjectionType,
  ($type) => $type === "orthographic"
);
function GlobeCanvas($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    $$renderer2.push(`<div class="canvas-container"><canvas${attr_style(`cursor: ${stringify(store_get($$store_subs ??= {}, "$isGlobe", isGlobe) ? "grab" : "default")}`)}></canvas></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let showProjectionList = false;
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Maps - ${escape_html(store_get($$store_subs ??= {}, "$currentProjectionConfig", currentProjectionConfig).name)} View</title>`);
      });
    });
    GlobeCanvas($$renderer2);
    $$renderer2.push(`<!----> <a href="/mymaps" class="nav-link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 19l-7-7 7-7"></path></svg> <span>MyMaps</span></a> <div class="controls"><div class="control-group"><button class="control-btn" title="Zoom in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></button> <button class="control-btn" title="Zoom out"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line></svg></button> <button class="control-btn" title="Reset view"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg></button></div> `);
    if (store_get($$store_subs ??= {}, "$isGlobe", isGlobe)) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="control-group"><button${attr_class("control-btn", void 0, {
        "active": store_get($$store_subs ??= {}, "$autoRotate", autoRotate)
      })}${attr("title", store_get($$store_subs ??= {}, "$autoRotate", autoRotate) ? "Stop rotation" : "Auto-rotate")}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></svg></button></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="control-group"><button${attr_class("control-btn", void 0, { "active": showProjectionList })} title="Change projection"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></button></div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="info-panel"><h2 class="info-title">${escape_html(store_get($$store_subs ??= {}, "$currentProjectionConfig", currentProjectionConfig).name)}</h2> <p class="info-subtitle">${escape_html(store_get($$store_subs ??= {}, "$currentProjectionConfig", currentProjectionConfig).description)}<br/> <strong>Preserves:</strong> ${escape_html(store_get($$store_subs ??= {}, "$currentProjectionConfig", currentProjectionConfig).preserves)}</p></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
