<script setup lang="ts">
import type { DataItem } from '~/types'

defineProps<{
  data: DataItem[]
}>()
</script>

<template>
  <div class="shard-grid fade-in-up">
    <div
      v-for="shard in data"
      :key="shard.id"
      class="shard-card"
      :class="'type-' + shard.type"
      :style="{ '--accent': shard.accentColor }"
    >
      <div
        class="shard-bg-layer"
        :style="{ backgroundImage: 'url(' + shard.image + ')' }"
      />
      <div class="static-noise" />
      <div class="shard-content mono">
        <div class="shard-meta">
          <div class="platform-tag">
            <Icon :name="'lucide:' + shard.icon" :size="14" />
            <span>{{ shard.platform }}</span>
          </div>
          <Icon name="lucide:eye" :size="14" class="view-icon" />
        </div>
        <div class="shard-info">
          <h3 class="shard-title">{{ shard.title }}</h3>
          <div class="shard-sub">{{ shard.subtitle }}</div>
          <div class="shard-metric">
            <span class="bracket">[</span>{{ shard.metric }}<span class="bracket">]</span>
          </div>
        </div>
        <div class="hover-reveal-btn">INITIALIZE LINK ></div>
      </div>
      <div class="border-line top" />
      <div class="border-line bottom" />
      <div class="border-line left" />
      <div class="border-line right" />
    </div>
  </div>
</template>
