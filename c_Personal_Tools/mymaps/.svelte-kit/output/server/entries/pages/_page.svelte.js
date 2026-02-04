import { s as store_get, a as attr_class, b as attr, u as unsubscribe_stores, e as ensure_array_like, c as stringify, h as head } from "../../chunks/index2.js";
import { s as searchResults, a as searchQuery, f as formatDuration, b as formatDistance, P as ProviderBadge, c as showDirectionsPanel, r as routeMode, i as isCalculatingRoute, d as routeError, e as selectedRoute, g as routeOrigin, h as routeDestination, j as showLayersPanel, m as mapStyles, k as currentStyleId, l as isTerrainLayer, n as is3DTerrain, o as layerStore, M as MapCanvas, p as MapControls, q as PlacePanel } from "../../chunks/PlacePanel.js";
import { c as capabilities } from "../../chunks/configStore.js";
import "maplibre-gl";
import { $ as escape_html } from "../../chunks/context.js";
import "@mapbox/togeojson";
import "jszip";
import { b as base } from "../../chunks/server.js";
import "@sveltejs/kit/internal/server";
function SearchBar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let isFocused = false;
    let showDropdown = isFocused;
    store_get($$store_subs ??= {}, "$searchResults", searchResults).length > 0;
    $$renderer2.push(`<div class="search-container"><div${attr_class("search-bar", void 0, {
      "search-bar--focused": isFocused,
      "search-bar--has-results": showDropdown
    })}><span class="search-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></span> <input type="text" class="search-input" placeholder="Search places..."${attr("value", store_get($$store_subs ??= {}, "$searchQuery", searchQuery))} autocomplete="off" spellcheck="false"/> <button${attr_class("search-clear", void 0, {
      "search-clear--visible": store_get($$store_subs ??= {}, "$searchQuery", searchQuery).length > 0
    })} aria-label="Clear search"${attr("tabindex", store_get($$store_subs ??= {}, "$searchQuery", searchQuery).length > 0 ? 0 : -1)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function DirectionsPanel($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let originInput = "";
    let destinationInput = "";
    const modeIcons = {
      driving: "M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z",
      walking: "M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7",
      cycling: "M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z",
      transit: "M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-6H6V6h5v5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6h-5V6h5v5z"
    };
    if (store_get($$store_subs ??= {}, "$showDirectionsPanel", showDirectionsPanel)) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="directions-panel panel"><div class="panel-header"><h2 class="panel-title">Directions</h2> <button class="panel-close" aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></div> <div class="directions-inputs"><div class="directions-input-row"><span class="directions-dot directions-dot--origin"></span> <input type="text" class="directions-input" placeholder="Choose starting point..."${attr("value", originInput)} readonly/> <button class="directions-swap" aria-label="Use my location"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M12 2v4M12 18v4M2 12h4M18 12h4"></path></svg></button></div> <div class="directions-input-row"><span class="directions-dot directions-dot--destination"></span> <input type="text" class="directions-input" placeholder="Choose destination..."${attr("value", destinationInput)} readonly/> <button class="directions-swap" aria-label="Swap origin and destination"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="7 16 3 12 7 8"></polyline><polyline points="17 8 21 12 17 16"></polyline><line x1="3" y1="12" x2="21" y2="12"></line></svg></button></div></div> <div class="directions-modes"><!--[-->`);
      const each_array = ensure_array_like(["driving", "walking", "cycling", "transit"]);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let mode = each_array[$$index];
        $$renderer2.push(`<button${attr_class("directions-mode", void 0, {
          "directions-mode--active": store_get($$store_subs ??= {}, "$routeMode", routeMode) === mode,
          "directions-mode--disabled": mode === "transit" && !store_get($$store_subs ??= {}, "$capabilities", capabilities).routing.transit
        })}${attr("disabled", mode === "transit" && !store_get($$store_subs ??= {}, "$capabilities", capabilities).routing.transit, true)}${attr("aria-label", mode)}><svg viewBox="0 0 24 24" fill="currentColor"><path${attr("d", modeIcons[mode])}></path></svg> ${escape_html(mode.charAt(0).toUpperCase() + mode.slice(1))}</button>`);
      }
      $$renderer2.push(`<!--]--></div> `);
      if (store_get($$store_subs ??= {}, "$isCalculatingRoute", isCalculatingRoute)) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="directions-loading"><div class="search-loading-spinner"></div> <span>Calculating route...</span></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (store_get($$store_subs ??= {}, "$routeError", routeError)) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="search-no-results"><p>${escape_html(store_get($$store_subs ??= {}, "$routeError", routeError))}</p></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (store_get($$store_subs ??= {}, "$selectedRoute", selectedRoute)) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<div class="directions-summary"><div><div class="directions-duration">${escape_html(formatDuration(store_get($$store_subs ??= {}, "$selectedRoute", selectedRoute).duration))}</div> <div class="directions-distance">${escape_html(formatDistance(store_get($$store_subs ??= {}, "$selectedRoute", selectedRoute).distance))}</div></div> `);
            ProviderBadge($$renderer2, {
              source: store_get($$store_subs ??= {}, "$selectedRoute", selectedRoute).source
            });
            $$renderer2.push(`<!----></div> <div class="directions-steps"><!--[-->`);
            const each_array_1 = ensure_array_like(store_get($$store_subs ??= {}, "$selectedRoute", selectedRoute).steps);
            for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
              let step = each_array_1[i];
              $$renderer2.push(`<div class="directions-step"><div class="directions-step-icon"><svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">`);
              if (i === 0) {
                $$renderer2.push("<!--[-->");
                $$renderer2.push(`<circle cx="12" cy="12" r="6"></circle>`);
              } else {
                $$renderer2.push("<!--[!-->");
                if (i === store_get($$store_subs ??= {}, "$selectedRoute", selectedRoute).steps.length - 1) {
                  $$renderer2.push("<!--[-->");
                  $$renderer2.push(`<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>`);
                } else {
                  $$renderer2.push("<!--[!-->");
                  $$renderer2.push(`<path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"></path>`);
                }
                $$renderer2.push(`<!--]-->`);
              }
              $$renderer2.push(`<!--]--></svg></div> <div class="directions-step-content"><div class="directions-step-instruction">${escape_html(step.instruction)}</div> <div class="directions-step-meta">${escape_html(formatDistance(step.distance))} · ${escape_html(formatDuration(step.duration))}</div></div></div>`);
            }
            $$renderer2.push(`<!--]--></div>`);
          } else {
            $$renderer2.push("<!--[!-->");
            if (store_get($$store_subs ??= {}, "$routeOrigin", routeOrigin) && store_get($$store_subs ??= {}, "$routeDestination", routeDestination)) {
              $$renderer2.push("<!--[-->");
              $$renderer2.push(`<div class="directions-calculate"><button class="glass-button glass-button--primary">Get Directions</button></div>`);
            } else {
              $$renderer2.push("<!--[!-->");
              $$renderer2.push(`<div class="empty-state"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg> <p>Select origin and destination</p></div>`);
            }
            $$renderer2.push(`<!--]-->`);
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function LayersPanel($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    if (store_get($$store_subs ??= {}, "$showLayersPanel", showLayersPanel)) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="layers-panel panel"><div class="panel-header"><h2 class="panel-title">Layers</h2> <button class="panel-close" aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></div> <div class="layers-section"><h3 class="layers-section-title">Map Style</h3> <!--[-->`);
      const each_array = ensure_array_like(mapStyles);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let style = each_array[$$index];
        $$renderer2.push(`<button class="layer-option"><div${attr_class("layer-preview", void 0, {
          "layer-preview--active": store_get($$store_subs ??= {}, "$currentStyleId", currentStyleId) === style.id
        })}>`);
        if (style.preview) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<img${attr("src", style.preview)}${attr("alt", style.name)}/>`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<div class="layer-preview-placeholder"></div>`);
        }
        $$renderer2.push(`<!--]--></div> <div class="layer-info"><div class="layer-name">${escape_html(style.name)}</div></div></button>`);
      }
      $$renderer2.push(`<!--]--></div> <div class="layers-section"><h3 class="layers-section-title">Map Features</h3> <div class="layer-toggle"><input type="checkbox" id="terrain-layer"${attr("checked", store_get($$store_subs ??= {}, "$isTerrainLayer", isTerrainLayer), true)}/> <span class="toggle-switch"></span> <span class="toggle-label">Terrain (Hillshade)</span></div> <div class="layer-toggle"><input type="checkbox" id="terrain-3d"${attr("checked", store_get($$store_subs ??= {}, "$is3DTerrain", is3DTerrain), true)}/> <span class="toggle-switch"></span> <span class="toggle-label">3D Elevation</span></div></div> <div class="layers-section"><h3 class="layers-section-title">Custom Layers</h3> <!--[-->`);
      const each_array_1 = ensure_array_like(store_get($$store_subs ??= {}, "$layerStore", layerStore));
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let layer = each_array_1[$$index_1];
        $$renderer2.push(`<div class="layer-toggle"><input type="checkbox"${attr("id", `layer-${stringify(layer.id)}`)}${attr("checked", layer.visible, true)}/> <span class="toggle-switch"></span> <span class="toggle-label">${escape_html(layer.name)}</span> <button class="layer-remove-btn" aria-label="Remove layer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></div>`);
      }
      $$renderer2.push(`<!--]--> `);
      if (store_get($$store_subs ??= {}, "$layerStore", layerStore).length === 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="layers-empty-text">No custom layers added</p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <input type="file" accept=".kml,.kmz" class="sr-only"/> <button class="glass-button layers-import-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg> Import KML/KMZ</button></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function SideMenu($$renderer) {
  let isOpen = false;
  const menuSections = [
    {
      id: "list",
      name: "List",
      icon: "M4 6h16M4 12h16M4 18h16",
      description: "View saved places"
    },
    {
      id: "maps",
      name: "Maps",
      icon: "M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 1.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0 0 21 18.382V7.618a1 1 0 0 0-.553-.894L15 4m0 13V4m0 0L9 7",
      description: "Your custom maps"
    },
    {
      id: "chronology",
      name: "Chronology",
      icon: "M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
      description: "Location history"
    }
  ];
  let activeSection = null;
  $$renderer.push(`<button${attr_class("menu-toggle", void 0, { "menu-toggle--open": isOpen })}${attr("aria-label", "Open menu")}${attr("aria-expanded", isOpen)}><span class="menu-toggle-bar"></span> <span class="menu-toggle-bar"></span> <span class="menu-toggle-bar"></span></button> `);
  {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--> <nav${attr_class("side-menu", void 0, { "side-menu--open": isOpen })} aria-label="Main menu"><div class="side-menu-header"><h2 class="side-menu-title">MyMaps</h2></div> <div class="side-menu-content"><!--[-->`);
  const each_array = ensure_array_like(menuSections);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let section = each_array[$$index];
    $$renderer.push(`<button${attr_class("menu-section", void 0, { "menu-section--active": activeSection === section.id })}><div class="menu-section-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path${attr("d", section.icon)}></path></svg></div> <div class="menu-section-info"><span class="menu-section-name">${escape_html(section.name)}</span> <span class="menu-section-desc">${escape_html(section.description)}</span></div> <svg class="menu-section-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg></button> `);
    if (activeSection === section.id) {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<div class="menu-section-content">`);
      if (section.id === "list") {
        $$renderer.push("<!--[-->");
        $$renderer.push(`<div class="menu-empty-state"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg> <p>No saved places yet</p> <span>Search and save places to see them here</span></div>`);
      } else {
        $$renderer.push("<!--[!-->");
        if (section.id === "maps") {
          $$renderer.push("<!--[-->");
          $$renderer.push(`<div class="menu-empty-state"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18M9 21V9"></path></svg> <p>No custom maps</p> <span>Create maps to organize your places</span></div>`);
        } else {
          $$renderer.push("<!--[!-->");
          if (section.id === "chronology") {
            $$renderer.push("<!--[-->");
            $$renderer.push(`<div class="menu-empty-state"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> <p>No location history</p> <span>Your visited places will appear here</span></div>`);
          } else {
            $$renderer.push("<!--[!-->");
          }
          $$renderer.push(`<!--]-->`);
        }
        $$renderer.push(`<!--]-->`);
      }
      $$renderer.push(`<!--]--></div>`);
    } else {
      $$renderer.push("<!--[!-->");
    }
    $$renderer.push(`<!--]-->`);
  }
  $$renderer.push(`<!--]--></div> <div class="side-menu-footer"><a href="/maps/" class="menu-footer-link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> <span>Classic Maps</span></a> <a${attr("href", `${stringify(base)}/settings`)} class="menu-footer-link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg> <span>Settings</span></a></div></nav>`);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>MyMaps Pro - Interactive Maps</title>`);
      });
    });
    $$renderer2.push(`<div id="app"><div class="app-map">`);
    MapCanvas($$renderer2);
    $$renderer2.push(`<!----></div> <div class="app-ui">`);
    SideMenu($$renderer2);
    $$renderer2.push(`<!----> `);
    SearchBar($$renderer2);
    $$renderer2.push(`<!----> `);
    MapControls($$renderer2);
    $$renderer2.push(`<!----> `);
    PlacePanel($$renderer2);
    $$renderer2.push(`<!----> `);
    DirectionsPanel($$renderer2);
    $$renderer2.push(`<!----> `);
    LayersPanel($$renderer2);
    $$renderer2.push(`<!----></div></div>`);
  });
}
export {
  _page as default
};
