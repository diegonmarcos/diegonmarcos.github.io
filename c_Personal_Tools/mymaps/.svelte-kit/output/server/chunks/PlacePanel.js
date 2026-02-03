import "clsx";
import { a0 as ssr_context, $ as escape_html } from "./context.js";
import "maplibre-gl";
import "@sveltejs/kit/internal";
import "./exports.js";
import "./utils.js";
import "@sveltejs/kit/internal/server";
import "./state.svelte.js";
import { s as store_get, a as attr_class, d as attr_style, b as attr, u as unsubscribe_stores, c as stringify, e as ensure_array_like } from "./index2.js";
import { d as derived, w as writable } from "./index.js";
import { c as capabilities } from "./configStore.js";
function onDestroy(fn) {
  /** @type {SSRContext} */
  ssr_context.r.on_destroy(fn);
}
const defaultState = {
  center: [2.3522, 48.8566],
  // Paris
  zoom: 5,
  bearing: 0,
  pitch: 0
};
const mapStyles = [
  {
    id: "carto-dark",
    name: "Dark",
    url: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
    preview: "https://basemaps.cartocdn.com/dark_all/5/15/12.png"
  },
  {
    id: "carto-light",
    name: "Light",
    url: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
    preview: "https://basemaps.cartocdn.com/light_all/5/15/12.png"
  },
  {
    id: "carto-voyager",
    name: "Voyager",
    url: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
    preview: "https://basemaps.cartocdn.com/rastertiles/voyager/5/15/12.png"
  }
];
function loadState() {
  return defaultState;
}
function createMapStore() {
  const { subscribe, set, update } = writable(loadState());
  return {
    subscribe,
    /**
     * Update map state from MapLibre instance
     */
    syncFromMap(map) {
      const center = map.getCenter();
      const state = {
        center: [center.lng, center.lat],
        zoom: map.getZoom(),
        bearing: map.getBearing(),
        pitch: map.getPitch()
      };
      set(state);
    },
    /**
     * Set center coordinates
     */
    setCenter(center) {
      update((state) => {
        const newState = { ...state, center };
        return newState;
      });
    },
    /**
     * Set zoom level
     */
    setZoom(zoom) {
      update((state) => {
        const newState = { ...state, zoom };
        return newState;
      });
    },
    /**
     * Reset bearing to north
     */
    resetBearing() {
      update((state) => {
        const newState = { ...state, bearing: 0 };
        return newState;
      });
    },
    /**
     * Reset to default state
     */
    reset() {
      set(defaultState);
    }
  };
}
const mapStore = createMapStore();
const currentStyleId = writable("carto-dark");
derived(
  currentStyleId,
  ($id) => mapStyles.find((s) => s.id === $id) || mapStyles[0]
);
const userLocation = writable(null);
const isLocating = writable(false);
function loadGlobeState() {
  return false;
}
const isGlobeView = writable(loadGlobeState());
function MapCanvas($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    onDestroy(() => {
    });
    $$renderer2.push(`<div class="map-canvas"></div>`);
  });
}
function loadLayerMetadata() {
  return [];
}
function generateLayerId() {
  return `layer-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function createLayerStore() {
  const initialLayers = loadLayerMetadata().map((meta) => ({
    ...meta,
    data: null
  }));
  const { subscribe, set, update } = writable(initialLayers);
  return {
    subscribe,
    /**
     * Add a new custom layer
     */
    add(layer) {
      const id = generateLayerId();
      const newLayer = { id, ...layer };
      update((layers) => {
        const updated = [...layers, newLayer];
        return updated;
      });
      return id;
    },
    /**
     * Update a layer
     */
    update(id, updates) {
      update((layers) => {
        const updated = layers.map(
          (layer) => layer.id === id ? { ...layer, ...updates } : layer
        );
        return updated;
      });
    },
    /**
     * Toggle layer visibility
     */
    toggleVisibility(id) {
      update((layers) => {
        const updated = layers.map(
          (layer) => layer.id === id ? { ...layer, visible: !layer.visible } : layer
        );
        return updated;
      });
    },
    /**
     * Remove a layer
     */
    remove(id) {
      update((layers) => {
        const updated = layers.filter((layer) => layer.id !== id);
        return updated;
      });
    },
    /**
     * Get a layer by ID
     */
    get(id) {
      let layer;
      subscribe((layers) => {
        layer = layers.find((l) => l.id === id);
      })();
      return layer;
    },
    /**
     * Clear all layers
     */
    clear() {
      set([]);
    }
  };
}
const layerStore = createLayerStore();
derived(
  layerStore,
  ($layers) => $layers.filter((layer) => layer.visible)
);
const showLayersPanel = writable(false);
function MapControls($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let bearingStyle = "";
    bearingStyle = `--bearing: ${-store_get($$store_subs ??= {}, "$mapStore", mapStore).bearing}deg`;
    $$renderer2.push(`<div class="map-controls"><div class="map-control-group"><button class="map-control-btn" aria-label="Zoom in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></button> <button class="map-control-btn" aria-label="Zoom out"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line></svg></button></div> <button${attr_class("map-compass", void 0, {
      "map-compass--rotated": store_get($$store_subs ??= {}, "$mapStore", mapStore).bearing !== 0
    })}${attr_style(bearingStyle)} aria-label="Reset bearing to north"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2L15 10L12 8L9 10L12 2Z" fill="#ef4444" stroke="currentColor" stroke-width="1"></path><path d="M12 22L9 14L12 16L15 14L12 22Z" fill="currentColor" stroke="currentColor" stroke-width="1"></path></svg></button> <button${attr_class("geolocate-btn", void 0, {
      "geolocate-btn--tracking": store_get($$store_subs ??= {}, "$userLocation", userLocation) !== null
    })} aria-label="Find my location"${attr("disabled", store_get($$store_subs ??= {}, "$isLocating", isLocating), true)}>`);
    if (store_get($$store_subs ??= {}, "$isLocating", isLocating)) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="16"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"></animateTransform></circle></svg>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M12 2v4M12 18v4M2 12h4M18 12h4"></path></svg>`);
    }
    $$renderer2.push(`<!--]--></button> <button${attr_class("map-control-btn map-control-btn--standalone", void 0, {
      "map-control-btn--active": store_get($$store_subs ??= {}, "$showLayersPanel", showLayersPanel)
    })} aria-label="Toggle layers panel"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg></button> <button class="map-control-btn map-control-btn--standalone" aria-label="Change map style"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18M9 21V9"></path></svg></button> <button${attr_class("map-control-btn map-control-btn--standalone", void 0, {
      "map-control-btn--active": store_get($$store_subs ??= {}, "$isGlobeView", isGlobeView)
    })}${attr("aria-label", store_get($$store_subs ??= {}, "$isGlobeView", isGlobeView) ? "Switch to flat map" : "Switch to globe view")}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></button></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
const MAX_RECENT_SEARCHES = 10;
const searchQuery = writable("");
const isSearching = writable(false);
const searchResults = writable([]);
const selectedResult = writable(null);
const selectedPlace = writable(null);
const isLoadingPlace = writable(false);
function loadRecentSearches() {
  return [];
}
function createRecentSearchesStore() {
  const { subscribe, set, update } = writable(loadRecentSearches());
  return {
    subscribe,
    /**
     * Add a search query to recent searches
     */
    add(query) {
      const trimmed = query.trim();
      if (!trimmed) return;
      update((searches) => {
        const filtered = searches.filter((s) => s.toLowerCase() !== trimmed.toLowerCase());
        const updated = [trimmed, ...filtered].slice(0, MAX_RECENT_SEARCHES);
        return updated;
      });
    },
    /**
     * Remove a search from recent searches
     */
    remove(query) {
      update((searches) => {
        const filtered = searches.filter((s) => s !== query);
        return filtered;
      });
    },
    /**
     * Clear all recent searches
     */
    clear() {
      set([]);
    }
  };
}
createRecentSearchesStore();
derived(
  searchResults,
  ($results) => $results.length > 0
);
derived(
  [searchQuery, searchResults, isSearching],
  ([$query, $results, $loading]) => {
    return $query.length > 0 && ($results.length > 0 || $loading);
  }
);
const routeOrigin = writable(null);
const routeDestination = writable(null);
const routeMode = writable("driving");
const routes = writable([]);
const selectedRouteIndex = writable(0);
const isCalculatingRoute = writable(false);
const routeError = writable(null);
const showDirectionsPanel = writable(false);
const selectedRoute = derived(
  [routes, selectedRouteIndex],
  ([$routes, $index]) => $routes[$index] || null
);
derived(
  [routeOrigin, routeDestination],
  ([$origin, $destination]) => $origin !== null && $destination !== null
);
function formatDuration(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds % 3600 / 60);
  if (hours > 0) {
    return `${hours}h ${minutes}min`;
  }
  return `${minutes} min`;
}
function formatDistance(meters) {
  if (meters >= 1e3) {
    const km = meters / 1e3;
    return km >= 10 ? `${Math.round(km)} km` : `${km.toFixed(1)} km`;
  }
  return `${Math.round(meters)} m`;
}
function ProviderBadge($$renderer, $$props) {
  let { source } = $$props;
  const labels = {
    nominatim: "OSM",
    photon: "OSM",
    osm: "OSM",
    overpass: "OSM",
    foursquare: "FSQ",
    google: "Google",
    mapbox: "Mapbox",
    yelp: "Yelp",
    osrm: "OSRM",
    valhalla: "Valhalla"
  };
  $$renderer.push(`<span${attr_class(`provider-badge provider-badge--${stringify(source)}`)}>${escape_html(labels[source] || source)}</span>`);
}
function PlacePanel($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    function formatCategory(category) {
      if (!category) return "";
      return category.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    }
    function formatPhone(phone) {
      if (!phone) return "";
      return phone.replace(/\s+/g, " ").trim();
    }
    let place = store_get($$store_subs ??= {}, "$selectedPlace", selectedPlace) || (store_get($$store_subs ??= {}, "$selectedResult", selectedResult) ? {
      id: store_get($$store_subs ??= {}, "$selectedResult", selectedResult).id,
      name: store_get($$store_subs ??= {}, "$selectedResult", selectedResult).name,
      address: store_get($$store_subs ??= {}, "$selectedResult", selectedResult).address,
      coordinates: store_get($$store_subs ??= {}, "$selectedResult", selectedResult).coordinates,
      source: store_get($$store_subs ??= {}, "$selectedResult", selectedResult).source,
      category: store_get($$store_subs ??= {}, "$selectedResult", selectedResult).category
    } : null);
    let showPanel = place !== null;
    if (showPanel && place) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="place-panel panel"><div class="panel-header"><div class="place-panel-header-content"><h2 class="panel-title">${escape_html(place.name)}</h2> `);
      if (place.category) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<span class="place-category">${escape_html(formatCategory(place.category))}</span>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div> <button class="panel-close" aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></div> `);
      if (store_get($$store_subs ??= {}, "$isLoadingPlace", isLoadingPlace)) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="place-loading"><div class="search-loading-spinner"></div> <span>Loading details...</span></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<div class="place-content"><div class="place-info-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="place-info-icon"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> <span class="place-info-text">${escape_html(place.address)}</span></div> `);
        if (place.phone) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<a${attr("href", `tel:${stringify(place.phone)}`)} class="place-info-row place-info-row--link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="place-info-icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> <span class="place-info-text">${escape_html(formatPhone(place.phone))}</span></a>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (place.website) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<a${attr("href", place.website)} target="_blank" rel="noopener noreferrer" class="place-info-row place-info-row--link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="place-info-icon"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> <span class="place-info-text place-info-text--truncate">${escape_html(place.website.replace(/^https?:\/\/(www\.)?/, ""))}</span></a>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (place.rating) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="place-info-row"><svg viewBox="0 0 24 24" fill="currentColor" class="place-info-icon place-info-icon--star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> <span class="place-info-text">${escape_html(place.rating.toFixed(1))} `);
          if (place.reviewCount) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<span class="place-review-count">(${escape_html(place.reviewCount)} reviews)</span>`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]--></span></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (place.hours) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="place-hours"><div class="place-hours-header"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="place-info-icon"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> <span${attr_class("place-hours-status", void 0, { "place-hours-status--open": place.hours.isOpen })}>${escape_html(place.hours.isOpen ? "Open now" : "Closed")}</span></div> `);
          if (place.hours.schedule?.length > 0) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<div class="place-hours-schedule"><!--[-->`);
            const each_array = ensure_array_like(place.hours.schedule);
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let day = each_array[$$index];
              $$renderer2.push(`<div class="place-hours-day"><span>${escape_html(day.day)}</span> <span>${escape_html(day.hours)}</span></div>`);
            }
            $$renderer2.push(`<!--]--></div>`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]--></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (place.attributes && Object.keys(place.attributes).length > 0) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="place-attributes"><!--[-->`);
          const each_array_1 = ensure_array_like(Object.entries(place.attributes));
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let [key, value] = each_array_1[$$index_1];
            $$renderer2.push(`<span class="place-attribute">${escape_html(key.replace(/[_:]/g, " "))}: ${escape_html(value)}</span>`);
          }
          $$renderer2.push(`<!--]--></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (place.photos && place.photos.length > 0 && store_get($$store_subs ??= {}, "$capabilities", capabilities).places.photos) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="place-photos"><!--[-->`);
          const each_array_2 = ensure_array_like(place.photos.slice(0, 4));
          for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
            let photo = each_array_2[$$index_2];
            $$renderer2.push(`<div class="place-photo"><img${attr("src", photo.url)}${attr("alt", place.name)} loading="lazy"/></div>`);
          }
          $$renderer2.push(`<!--]--></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (!store_get($$store_subs ??= {}, "$capabilities", capabilities).places.photos) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<div class="place-premium-hint"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg> <span>Add Foursquare or Google API key for photos</span></div>`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]--> `);
        if (place.reviews && place.reviews.length > 0 && store_get($$store_subs ??= {}, "$capabilities", capabilities).places.reviews) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="place-reviews"><h3 class="place-section-title">Reviews</h3> <!--[-->`);
          const each_array_3 = ensure_array_like(place.reviews.slice(0, 3));
          for (let $$index_4 = 0, $$length = each_array_3.length; $$index_4 < $$length; $$index_4++) {
            let review = each_array_3[$$index_4];
            $$renderer2.push(`<div class="place-review"><div class="place-review-header"><span class="place-review-author">${escape_html(review.author)}</span> <div class="place-review-rating"><!--[-->`);
            const each_array_4 = ensure_array_like(Array(5));
            for (let i = 0, $$length2 = each_array_4.length; i < $$length2; i++) {
              each_array_4[i];
              $$renderer2.push(`<svg viewBox="0 0 24 24"${attr("fill", i < review.rating ? "currentColor" : "none")} stroke="currentColor" stroke-width="2" class="place-review-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`);
            }
            $$renderer2.push(`<!--]--></div></div> <p class="place-review-text">${escape_html(review.text)}</p> <span class="place-review-date">${escape_html(review.date)}</span></div>`);
          }
          $$renderer2.push(`<!--]--></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> <div class="place-source"><span>Data from</span> `);
        ProviderBadge($$renderer2, { source: place.source });
        $$renderer2.push(`<!----></div></div> <div class="place-actions"><button class="glass-button glass-button--primary"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg> Directions</button> <button class="glass-button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg> Share</button></div>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  MapCanvas as M,
  ProviderBadge as P,
  searchQuery as a,
  formatDistance as b,
  showDirectionsPanel as c,
  routeError as d,
  selectedRoute as e,
  formatDuration as f,
  routeOrigin as g,
  routeDestination as h,
  isCalculatingRoute as i,
  showLayersPanel as j,
  currentStyleId as k,
  layerStore as l,
  mapStyles as m,
  MapControls as n,
  PlacePanel as o,
  selectedPlace as p,
  isLoadingPlace as q,
  routeMode as r,
  searchResults as s
};
