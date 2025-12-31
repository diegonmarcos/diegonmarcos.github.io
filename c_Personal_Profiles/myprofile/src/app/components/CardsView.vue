<script setup lang="ts">
import type { DataItem } from '~/types'

const props = defineProps<{
  data: DataItem[]
}>()

// Auto-cycling hover effect
const activeCardIndex = ref(0)
let cycleInterval: ReturnType<typeof setInterval> | null = null

const startCycle = () => {
  cycleInterval = setInterval(() => {
    activeCardIndex.value = (activeCardIndex.value + 1) % props.data.length
  }, 2500)
}

const stopCycle = () => {
  if (cycleInterval) {
    clearInterval(cycleInterval)
    cycleInterval = null
  }
}

onMounted(() => {
  startCycle()
})

onUnmounted(() => {
  stopCycle()
})
</script>

<template>
  <div class="shard-grid fade-in-up">
    <div
      v-for="(shard, index) in data"
      :key="shard.id"
      class="shard-card"
      :class="['type-' + shard.type, { 'auto-hover': index === activeCardIndex }]"
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
