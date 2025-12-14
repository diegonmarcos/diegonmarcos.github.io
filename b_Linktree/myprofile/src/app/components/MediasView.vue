<script setup lang="ts">
import type { MediaItem } from '~/types'

defineProps<{
  mediaLinks: MediaItem[]
}>()
</script>

<template>
  <div class="medias-container fade-in">
    <div class="medias-header">
      <Icon name="lucide:share-2" class="anim-icon" />
      CONNECT // SOCIAL NETWORKS
    </div>
    <div class="medias-grid">
      <a
        v-for="media in mediaLinks"
        :key="media.id"
        :href="media.url"
        target="_blank"
        rel="noopener noreferrer"
        class="media-item"
        :style="{
          '--media-color': media.accentColor,
          '--media-glow': media.accentColor + '40'
        }"
      >
        <div class="media-icon">
          <Icon :name="'lucide:' + media.icon" :size="28" />
        </div>
        <span class="media-label">{{ media.platform }}</span>
      </a>
    </div>
  </div>
</template>
