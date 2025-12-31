<script setup lang="ts">
import type { MediaItem, DataItem } from '~/types'

defineProps<{
  mediaLinks: MediaItem[]
  trackedApps: DataItem[]
}>()
</script>

<template>
  <div class="footer-links">
    <!-- Social Media Icons -->
    <a
      v-for="media in mediaLinks"
      :key="media.id"
      :href="media.url"
      target="_blank"
      rel="noopener noreferrer"
      class="footer-link-item"
      :style="{ '--link-color': media.accentColor }"
      :title="media.platform"
    >
      <Icon :name="'lucide:' + media.icon" :size="20" />
    </a>

    <span class="footer-divider">//</span>

    <!-- Tracked Apps Icons -->
    <div
      v-for="app in trackedApps"
      :key="app.id"
      class="footer-link-item app-item"
      :style="{ '--link-color': app.accentColor }"
      :title="app.platform"
    >
      <Icon :name="'lucide:' + app.icon" :size="20" />
    </div>
  </div>
</template>
