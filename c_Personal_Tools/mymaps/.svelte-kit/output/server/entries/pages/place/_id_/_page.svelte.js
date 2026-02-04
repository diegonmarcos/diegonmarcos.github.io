import { s as store_get, h as head, b as attr, u as unsubscribe_stores, c as stringify } from "../../../../chunks/index2.js";
import { _ as getContext, $ as escape_html } from "../../../../chunks/context.js";
import "clsx";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../chunks/state.svelte.js";
import { b as base } from "../../../../chunks/server.js";
import { M as MapCanvas, o as MapControls, p as PlacePanel, q as selectedPlace, t as isLoadingPlace } from "../../../../chunks/PlacePanel.js";
import "../../../../chunks/configStore.js";
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
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    store_get($$store_subs ??= {}, "$page", page).params.id;
    head("64wdv8", $$renderer2, ($$renderer3) => {
      if (store_get($$store_subs ??= {}, "$selectedPlace", selectedPlace)) {
        $$renderer3.push("<!--[-->");
        $$renderer3.title(($$renderer4) => {
          $$renderer4.push(`<title>${escape_html(store_get($$store_subs ??= {}, "$selectedPlace", selectedPlace).name)} - MyMaps Pro</title>`);
        });
        $$renderer3.push(`<meta name="description"${attr("content", store_get($$store_subs ??= {}, "$selectedPlace", selectedPlace).address)}/>`);
      } else {
        $$renderer3.push("<!--[!-->");
        $$renderer3.title(($$renderer4) => {
          $$renderer4.push(`<title>Place - MyMaps Pro</title>`);
        });
      }
      $$renderer3.push(`<!--]-->`);
    });
    $$renderer2.push(`<div id="app"><div class="app-map">`);
    MapCanvas($$renderer2);
    $$renderer2.push(`<!----></div> <div class="app-ui">`);
    MapControls($$renderer2);
    $$renderer2.push(`<!----> `);
    {
      $$renderer2.push("<!--[!-->");
      if (store_get($$store_subs ??= {}, "$isLoadingPlace", isLoadingPlace)) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="place-loading-panel panel"><div class="search-loading"><div class="search-loading-spinner"></div> <span>Loading place...</span></div></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
        PlacePanel($$renderer2);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--> <a${attr("href", `${stringify(base)}/settings`)} class="settings-link glass-button glass-button--icon" aria-label="Settings"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></a></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
