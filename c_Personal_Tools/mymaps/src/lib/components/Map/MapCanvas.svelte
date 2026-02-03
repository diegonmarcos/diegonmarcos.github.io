<script lang="ts">
  import { onMount, onDestroy, untrack } from 'svelte';
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
    // - Two-finger scroll = ZOOM (native, fast)
    // - Ctrl + two-finger scroll = PAN
    const mapOptions: maplibregl.MapOptions = {
      container: mapContainer,
      style: $currentStyle.url,
      center: initialState.center,
      zoom: initialState.zoom,
      bearing: initialState.bearing,
      pitch: $isGlobeView ? 45 : initialState.pitch,
      attributionControl: false,
      maxZoom: 20,
      minZoom: 1,
      scrollZoom: true,   // Native fast zoom
      dragPan: true       // Normal drag pan
    };

    console.log('[GLOBE DEBUG] Creating map with options:', mapOptions);
    map = new maplibregl.Map(mapOptions);

    // Intercept Ctrl+scroll for panning instead of zoom
    const handleWheel = (e: WheelEvent) => {
      if (!map || !e.ctrlKey) return;

      // Ctrl is pressed - pan instead of zoom
      e.preventDefault();
      e.stopPropagation();
      map.panBy([-e.deltaX * 2, -e.deltaY * 2], { duration: 0 });
    };

    mapContainer.addEventListener('wheel', handleWheel, { passive: false, capture: true });

    const cleanupGestures = () => {
      mapContainer.removeEventListener('wheel', handleWheel, { capture: true });
    };

    // Add attribution in corner
    map.addControl(
      new maplibregl.AttributionControl({ compact: true }),
      'bottom-right'
    );

    // Store reference
    setMapInstance(map);

    // Sync state on move
    map.on('moveend', syncToUrl);

    // Set loaded flag, apply globe projection, terrain, and add 3D buildings when style loads
    map.on('style.load', () => {
      mapLoaded = true;

      // Apply globe projection if enabled (must be done after style loads)
      if ($isGlobeView && map) {
        console.log('[GLOBE DEBUG] Applying initial globe projection');
        map.setProjection({ type: 'globe' });
      }

      // Add 3D terrain
      add3DTerrain();

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
      cleanupGestures();
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
  let mapLoaded = $state(false);

  // Helper: Toggle globe projection (MapLibre 5.0+)
  function toggleGlobeProjection(enabled: boolean) {
    console.log('[GLOBE DEBUG] toggleGlobeProjection called with:', enabled);

    if (!map) {
      console.error('[GLOBE DEBUG] No map instance!');
      return;
    }

    try {
      // Use setProjection API (MapLibre 5.0+)
      map.setProjection({ type: enabled ? 'globe' : 'mercator' });
      console.log('[GLOBE DEBUG] setProjection succeeded:', enabled ? 'globe' : 'mercator');

      // Adjust pitch for better 3D view
      const targetPitch = enabled ? 45 : 0;
      map.easeTo({
        pitch: targetPitch,
        duration: 500
      });
    } catch (e) {
      console.error('[GLOBE DEBUG] setProjection failed:', e);
    }
  }

  // React to style changes
  $effect(() => {
    const style = $currentStyle;
    if (map && style && mapLoaded) {
      untrack(() => map!.setStyle(style.url));
    }
  });

  // React to globe view toggle
  $effect(() => {
    const globeEnabled = $isGlobeView;
    if (map && mapLoaded) {
      console.log('[GLOBE DEBUG] $effect: toggling globe to', globeEnabled);
      untrack(() => toggleGlobeProjection(globeEnabled));
    }
  });
</script>

<div class="map-canvas" bind:this={mapContainer}></div>
