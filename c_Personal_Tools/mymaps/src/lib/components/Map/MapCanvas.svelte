<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import maplibregl from 'maplibre-gl';
  import type { Map as MapLibreMap } from 'maplibre-gl';
  import {
    mapStore,
    currentStyle,
    setMapInstance,
    userLocation,
    isGlobeView
  } from '$lib/stores/mapStore';
  import { encodeMapState, updateUrl, decodeMapState, getCurrentHash } from '$lib/utils/urlState';
  import { throttle } from '$lib/utils/debounce';

  let mapContainer: HTMLDivElement;
  let map: MapLibreMap | null = null;

  // Sync map state to URL (throttled)
  const syncToUrl = throttle(() => {
    if (map) {
      const center = map.getCenter();
      const state = {
        center: [center.lng, center.lat] as [number, number],
        zoom: map.getZoom(),
        bearing: map.getBearing(),
        pitch: map.getPitch()
      };
      updateUrl(encodeMapState(state));
      mapStore.syncFromMap(map);
    }
  }, 500);

  onMount(() => {
    // Check for state in URL
    const hash = getCurrentHash();
    const urlState = decodeMapState(hash);

    // Get initial state from URL or store
    let initialState = $mapStore;
    if (urlState) {
      initialState = { ...initialState, ...urlState };
    }

    // Create map
    map = new maplibregl.Map({
      container: mapContainer,
      style: $currentStyle.url,
      center: initialState.center,
      zoom: initialState.zoom,
      bearing: initialState.bearing,
      pitch: initialState.pitch,
      attributionControl: false,
      maxZoom: 20,
      minZoom: 1
    });

    // Add attribution in corner
    map.addControl(
      new maplibregl.AttributionControl({ compact: true }),
      'bottom-right'
    );

    // Store reference
    setMapInstance(map);

    // Sync state on move
    map.on('moveend', syncToUrl);

    // Set loaded flag and add 3D buildings when style loads
    map.on('style.load', () => {
      mapLoaded = true;
      add3DBuildings();
    });

    // Handle user location updates
    const unsubLocation = userLocation.subscribe((loc) => {
      if (loc && map) {
        updateUserMarker(loc);
      }
    });

    return () => {
      unsubLocation();
    };
  });

  onDestroy(() => {
    if (map) {
      map.remove();
      setMapInstance(null);
    }
  });

  // Add 3D building extrusions
  function add3DBuildings() {
    if (!map) return;

    // Check if building layer exists
    const layers = map.getStyle().layers || [];
    const labelLayerId = layers.find(
      (layer) => layer.type === 'symbol' && (layer.layout as Record<string, unknown>)?.['text-field']
    )?.id;

    // Add 3D building layer if source exists
    const sources = map.getStyle().sources || {};
    if (sources['carto'] || sources['openmaptiles']) {
      const sourceId = sources['carto'] ? 'carto' : 'openmaptiles';

      map.addLayer(
        {
          id: '3d-buildings',
          source: sourceId,
          'source-layer': 'building',
          type: 'fill-extrusion',
          minzoom: 14,
          paint: {
            'fill-extrusion-color': '#1a1a2e',
            'fill-extrusion-height': ['get', 'render_height'],
            'fill-extrusion-base': ['get', 'render_min_height'],
            'fill-extrusion-opacity': 0.7
          }
        },
        labelLayerId
      );
    }
  }

  // User location marker
  let userMarker: maplibregl.Marker | null = null;

  function updateUserMarker(location: [number, number]) {
    if (!map) return;

    if (userMarker) {
      userMarker.setLngLat(location);
    } else {
      // Create custom marker element
      const el = document.createElement('div');
      el.className = 'map-marker map-marker--user';

      userMarker = new maplibregl.Marker({ element: el })
        .setLngLat(location)
        .addTo(map);
    }
  }

  // Track if map is loaded
  let mapLoaded = false;

  // React to style changes
  $: if (map && $currentStyle && mapLoaded) {
    map.setStyle($currentStyle.url);
  }

  // React to globe view changes
  $: if (map && mapLoaded && typeof map.setProjection === 'function') {
    try {
      map.setProjection($isGlobeView ? 'globe' : 'mercator');
    } catch (e) {
      console.warn('Globe projection not supported');
    }
  }
</script>

<div class="map-canvas" bind:this={mapContainer}></div>
