<script lang="ts">
  import type { MediaItem, DataItem } from '$lib/types';
  import Icon from './Icon.svelte';

  let { mediaLinks, trackedApps }: { mediaLinks: MediaItem[]; trackedApps: DataItem[] } = $props();
</script>

<div class="footer-links">
  <!-- Social Media Icons -->
  {#each mediaLinks as media}
    <a
      href={media.url}
      target="_blank"
      rel="noopener noreferrer"
      class="footer-link-item"
      style="--link-color: {media.accentColor}"
      title={media.platform}
    >
      <Icon name={media.icon} size={20} />
    </a>
  {/each}

  <span class="footer-divider">//</span>

  <!-- Tracked Apps Icons -->
  {#each trackedApps as app}
    <div
      class="footer-link-item app-item"
      style="--link-color: {app.accentColor}"
      title={app.platform}
    >
      <Icon name={app.icon} size={20} />
    </div>
  {/each}
</div>
