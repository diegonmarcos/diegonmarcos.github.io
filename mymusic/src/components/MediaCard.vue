<script setup lang="ts">
import { IMusicItem } from '../types';
import { defineProps } from 'vue';

defineProps<{
  item: IMusicItem;
  mode?: 'list' | 'card'; // Default to 'list' if not provided
}>();

const getSubtitle = (item: IMusicItem) => {
  if (item.type === 'album' && 'artistName' in item) return item.artistName;
  if (item.type === 'track' && 'artistName' in item) return item.artistName;
  if (item.type === 'artist' && 'genre' in item) return item.genre;
  return item.description || 'Unknown'; 
};

// --- Card Mode Logic ---
const PLACEHOLDER_IMAGE = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjIyIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGRvbS1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMDA2NjAwIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjE0Ij5XSU5BTVA8L3RleHQ+PC9zdmc+`;
</script>

<template>
  <!-- List Mode (Playlist Style) -->
  <div v-if="mode === 'list' || !mode" class="pl-entry">
    <div class="pl-track-num">1.</div>
    <div class="pl-track-info">
      <span class="pl-title">{{ item.name }}</span>
      <span class="pl-dash"> - </span>
      <span class="pl-artist">{{ getSubtitle(item) }}</span>
    </div>
    <div class="pl-time">3:45</div>
  </div>

  <!-- Card Mode (Library Style) -->
  <div v-else class="media-card">
    <div class="image-wrapper">
      <img 
        :src="item.image || PLACEHOLDER_IMAGE" 
        :alt="item.name" 
        class="media-image" 
        loading="lazy" 
      />
      <div class="scanline"></div>
    </div>
    <div class="media-info">
      <h3 class="media-title" :title="item.name">{{ item.name }}</h3>
      <p class="media-subtitle">{{ getSubtitle(item) }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* List Mode Styles */
.pl-entry {
  width: 100%;
  display: flex;
  font-family: var(--wa-font-nums);
  font-size: 11px;
  color: var(--wa-green);
  cursor: pointer;
  padding: 1px 2px;
  
  &:hover {
    background-color: #000080;
    color: #fff;
  }
}
.pl-track-num { width: 25px; text-align: right; margin-right: 5px; color: var(--wa-gold); }
.pl-track-info { flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.pl-time { width: 40px; text-align: right; color: var(--wa-gold); }

/* Card Mode Styles */
.media-card {
  display: flex;
  flex-direction: column;
  width: 140px;
  min-width: 140px;
  border: 1px solid var(--skin-border-color, #4a4a4a);
  background-color: #111;
  cursor: pointer;
  position: relative;

  &:hover {
    border-color: var(--skin-accent-color, #00ff00);
    .media-title { color: var(--skin-accent-color, #00ff00); }
  }

  .image-wrapper {
    position: relative;
    width: 100%;
    height: 140px;
    overflow: hidden;
    background: #000;
  }
  .media-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: contrast(1.1) brightness(0.9);
  }
  .media-info {
    padding: 6px;
    border-top: 1px solid #333;
    background: #1a1a1a;
  }
  .media-title {
    font-family: var(--skin-font-family, monospace);
    font-size: 11px;
    font-weight: bold;
    margin: 0 0 2px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #ddd;
  }
  .media-subtitle {
    font-family: var(--skin-font-family, monospace);
    font-size: 9px;
    color: #888;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
