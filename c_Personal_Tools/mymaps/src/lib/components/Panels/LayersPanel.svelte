<script lang="ts">
  import { layerStore, showLayersPanel, toggleLayersPanel, visibleLayers } from '$lib/stores/layerStore';
  import { currentStyleId, mapStyles, currentStyle, is3DTerrain, toggle3DTerrain } from '$lib/stores/mapStore';
  import { createLayerFromKML, getBounds } from '$lib/services/layers/kml';
  import { fitBounds, getMapInstance } from '$lib/stores/mapStore';
  import type { CustomLayer } from '$lib/services/api/types';
  import maplibregl from 'maplibre-gl';

  let fileInput: HTMLInputElement;

  async function handleFileSelect(e: Event) {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    if (!file) return;

    try {
      const layer = await createLayerFromKML(file);
      const id = layerStore.add(layer);

      // Fit to layer bounds
      if (layer.data) {
        const bounds = getBounds(layer.data);
        if (bounds) {
          fitBounds(bounds, 50);
        }

        // Add layer to map
        addLayerToMap(id, layer.data);
      }
    } catch (error) {
      console.error('Failed to load KML:', error);
      alert('Failed to load KML file. Please check the format.');
    }

    // Reset input
    target.value = '';
  }

  function addLayerToMap(id: string, data: GeoJSON.FeatureCollection) {
    const map = getMapInstance();
    if (!map) return;

    const sourceId = `layer-${id}`;

    // Add source
    map.addSource(sourceId, { type: 'geojson', data });

    // Add point layer
    map.addLayer({
      id: `${sourceId}-points`,
      type: 'circle',
      source: sourceId,
      filter: ['==', ['geometry-type'], 'Point'],
      paint: {
        'circle-radius': 6,
        'circle-color': '#3b82f6',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff'
      }
    });

    // Add line layer
    map.addLayer({
      id: `${sourceId}-lines`,
      type: 'line',
      source: sourceId,
      filter: ['==', ['geometry-type'], 'LineString'],
      paint: {
        'line-color': '#3b82f6',
        'line-width': 3
      }
    });

    // Add polygon layer
    map.addLayer({
      id: `${sourceId}-polygons`,
      type: 'fill',
      source: sourceId,
      filter: ['==', ['geometry-type'], 'Polygon'],
      paint: {
        'fill-color': '#3b82f6',
        'fill-opacity': 0.3
      }
    });

    // Add polygon outline
    map.addLayer({
      id: `${sourceId}-polygon-outlines`,
      type: 'line',
      source: sourceId,
      filter: ['==', ['geometry-type'], 'Polygon'],
      paint: {
        'line-color': '#3b82f6',
        'line-width': 2
      }
    });
  }

  function removeLayerFromMap(id: string) {
    const map = getMapInstance();
    if (!map) return;

    const sourceId = `layer-${id}`;
    const layerIds = [
      `${sourceId}-points`,
      `${sourceId}-lines`,
      `${sourceId}-polygons`,
      `${sourceId}-polygon-outlines`
    ];

    for (const layerId of layerIds) {
      if (map.getLayer(layerId)) {
        map.removeLayer(layerId);
      }
    }

    if (map.getSource(sourceId)) {
      map.removeSource(sourceId);
    }
  }

  function toggleLayerVisibility(layer: CustomLayer) {
    const map = getMapInstance();
    if (!map) return;

    const sourceId = `layer-${layer.id}`;
    const layerIds = [
      `${sourceId}-points`,
      `${sourceId}-lines`,
      `${sourceId}-polygons`,
      `${sourceId}-polygon-outlines`
    ];

    const visibility = layer.visible ? 'none' : 'visible';

    for (const layerId of layerIds) {
      if (map.getLayer(layerId)) {
        map.setLayoutProperty(layerId, 'visibility', visibility);
      }
    }

    layerStore.toggleVisibility(layer.id);
  }

  function handleRemoveLayer(layer: CustomLayer) {
    removeLayerFromMap(layer.id);
    layerStore.remove(layer.id);
  }

  function handleStyleChange(styleId: string) {
    currentStyleId.set(styleId);
  }
</script>

{#if $showLayersPanel}
  <div class="layers-panel panel">
    <div class="panel-header">
      <h2 class="panel-title">Layers</h2>
      <button class="panel-close" onclick={toggleLayersPanel} aria-label="Close">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>

    <!-- Map Styles -->
    <div class="layers-section">
      <h3 class="layers-section-title">Map Style</h3>
      {#each mapStyles as style}
        <button
          class="layer-option"
          onclick={() => handleStyleChange(style.id)}
        >
          <div
            class="layer-preview"
            class:layer-preview--active={$currentStyleId === style.id}
          >
            {#if style.preview}
              <img src={style.preview} alt={style.name} />
            {:else}
              <div class="layer-preview-placeholder"></div>
            {/if}
          </div>
          <div class="layer-info">
            <div class="layer-name">{style.name}</div>
          </div>
        </button>
      {/each}
    </div>

    <!-- Map Features -->
    <div class="layers-section">
      <h3 class="layers-section-title">Map Features</h3>
      <div class="layer-toggle">
        <input
          type="checkbox"
          id="terrain-3d"
          checked={$is3DTerrain}
          onchange={toggle3DTerrain}
        />
        <span class="toggle-switch"></span>
        <span class="toggle-label">3D Terrain</span>
      </div>
    </div>

    <!-- Custom Layers -->
    <div class="layers-section">
      <h3 class="layers-section-title">Custom Layers</h3>

      {#each $layerStore as layer}
        <div class="layer-toggle">
          <input
            type="checkbox"
            id="layer-{layer.id}"
            checked={layer.visible}
            onchange={() => toggleLayerVisibility(layer)}
          />
          <span class="toggle-switch"></span>
          <span class="toggle-label">{layer.name}</span>
          <button
            class="layer-remove-btn"
            onclick={() => handleRemoveLayer(layer)}
            aria-label="Remove layer"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      {/each}

      {#if $layerStore.length === 0}
        <p class="layers-empty-text">No custom layers added</p>
      {/if}

      <!-- Add layer button -->
      <input
        type="file"
        accept=".kml,.kmz"
        bind:this={fileInput}
        onchange={handleFileSelect}
        class="sr-only"
      />
      <button
        class="glass-button layers-import-btn"
        onclick={() => fileInput.click()}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
        Import KML/KMZ
      </button>
    </div>
  </div>
{/if}
