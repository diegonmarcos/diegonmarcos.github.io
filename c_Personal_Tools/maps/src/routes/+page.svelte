<script lang="ts">
  import { base } from '$app/paths';
  import GlobeCanvas from '$lib/components/GlobeCanvas.svelte';
  import {
    projections,
    currentProjectionType,
    currentProjectionConfig,
    autoRotate,
    isGlobe,
    scale,
    rotation
  } from '$lib/stores/projectionStore';

  let showProjectionList = $state(false);

  function selectProjection(id: string) {
    currentProjectionType.set(id as any);
    showProjectionList = false;

    // Reset view when changing projection
    scale.set(1);
    if (id === 'orthographic') {
      rotation.set([0, -20, 0]);
      autoRotate.set(true);
    }
  }

  function toggleAutoRotate() {
    autoRotate.update(v => !v);
  }

  function zoomIn() {
    scale.update(s => Math.min(5, s * 1.2));
  }

  function zoomOut() {
    scale.update(s => Math.max(0.5, s / 1.2));
  }

  function resetView() {
    scale.set(1);
    rotation.set([0, -20, 0]);
    if ($isGlobe) {
      autoRotate.set(true);
    }
  }
</script>

<svelte:head>
  <title>Maps - {$currentProjectionConfig.name} View</title>
</svelte:head>

<!-- Globe/Map Canvas -->
<GlobeCanvas />

<!-- Link to MyMaps -->
<a href="/mymaps" class="nav-link">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M15 19l-7-7 7-7" />
  </svg>
  <span>MyMaps</span>
</a>

<!-- Controls -->
<div class="controls">
  <!-- Zoom controls -->
  <div class="control-group">
    <button class="control-btn" onclick={zoomIn} title="Zoom in">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </button>
    <button class="control-btn" onclick={zoomOut} title="Zoom out">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </button>
    <button class="control-btn" onclick={resetView} title="Reset view">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
      </svg>
    </button>
  </div>

  <!-- Globe-specific controls -->
  {#if $isGlobe}
    <div class="control-group">
      <button
        class="control-btn"
        class:active={$autoRotate}
        onclick={toggleAutoRotate}
        title={$autoRotate ? 'Stop rotation' : 'Auto-rotate'}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
          <path d="M21 3v5h-5" />
        </svg>
      </button>
    </div>
  {/if}

  <!-- Projection selector toggle -->
  <div class="control-group">
    <button
      class="control-btn"
      class:active={showProjectionList}
      onclick={() => showProjectionList = !showProjectionList}
      title="Change projection"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    </button>
  </div>

  <!-- Projection list -->
  {#if showProjectionList}
    <div class="projection-selector">
      <div class="projection-label">Projection</div>
      <ul class="projection-list">
        {#each projections as proj}
          <li
            class="projection-item"
            class:active={$currentProjectionType === proj.id}
            onclick={() => selectProjection(proj.id)}
            onkeydown={(e) => e.key === 'Enter' && selectProjection(proj.id)}
            role="button"
            tabindex="0"
          >
            {proj.name}
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

<!-- Info panel -->
<div class="info-panel">
  <h2 class="info-title">{$currentProjectionConfig.name}</h2>
  <p class="info-subtitle">
    {$currentProjectionConfig.description}<br />
    <strong>Preserves:</strong> {$currentProjectionConfig.preserves}
  </p>
</div>
