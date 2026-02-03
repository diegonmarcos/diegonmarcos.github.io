<script lang="ts">
  import { onMount } from 'svelte';
  import MapCanvas from '$lib/components/Map/MapCanvas.svelte';
  import MapControls from '$lib/components/Map/MapControls.svelte';
  import SearchBar from '$lib/components/Search/SearchBar.svelte';
  import DirectionsPanel from '$lib/components/Panels/DirectionsPanel.svelte';
  import LayersPanel from '$lib/components/Panels/LayersPanel.svelte';
  import PlacePanel from '$lib/components/Panels/PlacePanel.svelte';
  import SideMenu from '$lib/components/Menu/SideMenu.svelte';

  onMount(() => {
    // Add Matomo tracking
    const _mtm = (window as unknown as { _mtm: unknown[] })._mtm || [];
    _mtm.push({ 'mtm.startTime': new Date().getTime(), event: 'mtm.Start' });

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://analytics.diegonmarcos.com/js/container_odwLIyPV.js';
    document.head.appendChild(script);
  });
</script>

<svelte:head>
  <title>MyMaps Pro - Interactive Maps</title>
</svelte:head>

<div id="app">
  <!-- Map Layer -->
  <div class="app-map">
    <MapCanvas />
  </div>

  <!-- UI Overlay -->
  <div class="app-ui">
    <SideMenu />
    <SearchBar />
    <MapControls />
    <PlacePanel />
    <DirectionsPanel />
    <LayersPanel />
  </div>
</div>
