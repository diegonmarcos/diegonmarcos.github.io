<script setup lang="ts">
import type { DataItem } from '~/types'

defineProps<{
  data: DataItem[]
}>()
</script>

<template>
  <div class="player-view-container fade-in">
    <!-- Avatar Center Only -->
    <div class="player-avatar-section">
      <div class="avatar-hologram">
        <div class="scan-ring" />
        <div class="scan-ring delay" />
        <Icon name="lucide:user" :size="140" class="silhouette" />
      </div>
      <div class="player-identity">
        <h2>DIEGO N. MARCOS</h2>
        <div class="player-subtitle mono">SOFTWARE ENGINEER // CLOUD ARCHITECT</div>
      </div>
      <div class="player-stats-mini">
        <div v-for="item in data.slice(0, 4)" :key="item.id" class="stat-chip" :style="{ '--chip-color': item.accentColor }">
          <Icon :name="'lucide:' + item.icon" :size="14" />
          <span>{{ item.statType }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
