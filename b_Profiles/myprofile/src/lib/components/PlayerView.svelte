<script lang="ts">
  import Icon from './Icon.svelte';
</script>

<div class="player-view-container fade-in">
  <!-- Avatar Center Only -->
  <div class="player-avatar-section">
    <div class="avatar-hologram">
      <div class="scan-ring"></div>
      <div class="scan-ring delay"></div>
      <Icon name="user" size={140} class="silhouette" />
    </div>
    <div class="player-identity">
      <h2>DIEGO N. MARCOS</h2>
      <div class="player-subtitle mono">SOFTWARE ENGINEER // CLOUD ARCHITECT</div>
    </div>
  </div>
</div>
