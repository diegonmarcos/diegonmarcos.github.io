<script lang="ts">
  import { getMapInstance, mapStore, userLocation, isLocating, currentStyleId, mapStyles } from '$lib/stores/mapStore';
  import { showLayersPanel, toggleLayersPanel } from '$lib/stores/layerStore';

  function zoomIn() {
    const map = getMapInstance();
    if (map) map.zoomIn();
  }

  function zoomOut() {
    const map = getMapInstance();
    if (map) map.zoomOut();
  }

  function resetBearing() {
    const map = getMapInstance();
    if (map) {
      map.easeTo({ bearing: 0, pitch: 0 });
      mapStore.resetBearing();
    }
  }

  function geolocate() {
    if (!navigator.geolocation) {
      console.warn('Geolocation not supported');
      return;
    }

    isLocating.set(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { longitude, latitude } = position.coords;
        userLocation.set([longitude, latitude]);

        const map = getMapInstance();
        if (map) {
          map.flyTo({
            center: [longitude, latitude],
            zoom: 15,
            duration: 1500
          });
        }

        isLocating.set(false);
      },
      (error) => {
        console.warn('Geolocation error:', error.message);
        isLocating.set(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000
      }
    );
  }

  function cycleStyle() {
    const currentIndex = mapStyles.findIndex(s => s.id === $currentStyleId);
    const nextIndex = (currentIndex + 1) % mapStyles.length;
    currentStyleId.set(mapStyles[nextIndex].id);
  }

  // Calculate bearing rotation for compass
  let bearingStyle = '';
  $: bearingStyle = `--bearing: ${-$mapStore.bearing}deg`;
</script>

<div class="map-controls">
  <!-- Zoom controls -->
  <div class="map-control-group">
    <button
      class="map-control-btn"
      onclick={zoomIn}
      aria-label="Zoom in"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </button>
    <button
      class="map-control-btn"
      onclick={zoomOut}
      aria-label="Zoom out"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </button>
  </div>

  <!-- Compass -->
  <button
    class="map-compass"
    class:map-compass--rotated={$mapStore.bearing !== 0}
    style={bearingStyle}
    onclick={resetBearing}
    aria-label="Reset bearing to north"
  >
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L15 10L12 8L9 10L12 2Z"
        fill="#ef4444"
        stroke="currentColor"
        stroke-width="1"
      />
      <path
        d="M12 22L9 14L12 16L15 14L12 22Z"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="1"
      />
    </svg>
  </button>

  <!-- Geolocate -->
  <button
    class="geolocate-btn"
    class:geolocate-btn--tracking={$userLocation !== null}
    onclick={geolocate}
    aria-label="Find my location"
    disabled={$isLocating}
  >
    {#if $isLocating}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="16">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 12 12"
            to="360 12 12"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    {:else}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    {/if}
  </button>

  <!-- Layers toggle -->
  <button
    class="map-control-btn map-control-btn--standalone"
    class:map-control-btn--active={$showLayersPanel}
    onclick={toggleLayersPanel}
    aria-label="Toggle layers panel"
  >
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  </button>

  <!-- Style toggle -->
  <button
    class="map-control-btn map-control-btn--standalone"
    onclick={cycleStyle}
    aria-label="Change map style"
  >
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  </button>
</div>
