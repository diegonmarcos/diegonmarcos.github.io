<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import type { GraphNode, GraphEdge, LayoutMode } from '@/types/json'
import { processGraph } from '@/composables/useGraph'
import GraphNodeCard from './GraphNodeCard.vue'
import GraphEdgeLine from './GraphEdgeLine.vue'

const props = defineProps<{
  data: unknown
  layoutMode: LayoutMode
}>()

const emit = defineEmits<{
  copyPath: [path: string]
  edit: [path: string, key: string, value: unknown]
  'update:layoutMode': [value: LayoutMode]
}>()

const graphNodes = ref<GraphNode[]>([])
const graphEdges = ref<GraphEdge[]>([])
const pan = ref({ x: 0, y: 0 })
const scale = ref(1)
const isDraggingCanvas = ref(false)
const draggedNodeId = ref<string | null>(null)
const graphContainer = ref<HTMLDivElement | null>(null)

const dragStart = { x: 0, y: 0 }
const itemStart = { x: 0, y: 0 }

watch([() => props.data, () => props.layoutMode], () => {
  if (props.data && !draggedNodeId.value) {
    const { nodes, edges } = processGraph(props.data, props.layoutMode)
    graphNodes.value = nodes
    graphEdges.value = edges
  }
}, { immediate: true })

const handleMouseDown = (e: MouseEvent, nodeId: string | null = null) => {
  if (e.button !== 0) return
  e.preventDefault()
  dragStart.x = e.clientX
  dragStart.y = e.clientY

  if (nodeId) {
    draggedNodeId.value = nodeId
    const node = graphNodes.value.find(n => n.id === nodeId)
    if (node) {
      itemStart.x = node.x
      itemStart.y = node.y
    }
  } else {
    isDraggingCanvas.value = true
    itemStart.x = pan.value.x
    itemStart.y = pan.value.y
  }
}

const handleMouseMove = (e: MouseEvent) => {
  if (isDraggingCanvas.value) {
    pan.value = { x: itemStart.x + (e.clientX - dragStart.x), y: itemStart.y + (e.clientY - dragStart.y) }
  } else if (draggedNodeId.value) {
    const dx = (e.clientX - dragStart.x) / scale.value
    const dy = (e.clientY - dragStart.y) / scale.value
    graphNodes.value = graphNodes.value.map(n =>
      n.id === draggedNodeId.value ? { ...n, x: itemStart.x + dx, y: itemStart.y + dy } : n
    )
  }
}

const handleMouseUp = () => {
  isDraggingCanvas.value = false
  draggedNodeId.value = null
}

const handleWheel = (e: WheelEvent) => {
  e.preventDefault()
  if (e.ctrlKey || e.metaKey) {
    const delta = -e.deltaY * 0.002
    const newScale = Math.min(Math.max(0.1, scale.value + delta), 5)
    const rect = graphContainer.value?.getBoundingClientRect()
    if (rect) {
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top
      const worldX = (mouseX - pan.value.x) / scale.value
      const worldY = (mouseY - pan.value.y) / scale.value
      pan.value = { x: mouseX - worldX * newScale, y: mouseY - worldY * newScale }
    }
    scale.value = newScale
  } else {
    pan.value = { x: pan.value.x - e.deltaX, y: pan.value.y - e.deltaY }
  }
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseup', handleMouseUp)
  graphContainer.value?.addEventListener('wheel', handleWheel, { passive: false })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseup', handleMouseUp)
})

const transformStyle = computed(() => ({
  transform: `translate(${pan.value.x}px, ${pan.value.y}px) scale(${scale.value})`,
  transformOrigin: '0 0'
}))
</script>

<template>
  <div ref="graphContainer" :class="['graph-container', { grabbing: isDraggingCanvas }]" @mousedown="handleMouseDown($event, null)">
    <div class="graph-controls">
      <button class="layout-btn" @click.stop="emit('update:layoutMode', layoutMode === 'vertical' ? 'horizontal' : 'vertical')">
        Layout: {{ layoutMode === 'vertical' ? 'Vertical' : 'Horizontal' }}
      </button>
    </div>
    <div class="watermark">
      <div class="watermark-content">
        <div class="watermark-logo"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/></svg></div>
        <div class="watermark-text"><div class="watermark-title">JSON Vision</div><div class="watermark-subtitle">diegonmarcos.dev</div></div>
      </div>
      <a href="https://linktree.diegonmarcos.com" target="_blank" rel="noopener noreferrer" class="watermark-link">linktree.diegonmarcos.com</a>
    </div>
    <div class="transform-layer" :style="transformStyle">
      <svg class="edges-svg">
        <GraphEdgeLine v-for="(edge, idx) in graphEdges" :key="idx" :edge="edge" :nodes="graphNodes" :layout="layoutMode"/>
      </svg>
      <GraphNodeCard v-for="node in graphNodes" :key="node.id" :node="node" @copy-path="emit('copyPath', $event)" @mousedown="handleMouseDown($event, node.id)" @edit="emit('edit', $event.path, $event.key, $event.value)"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.graph-container { width: 100%; height: 100%; position: relative; overflow: hidden; cursor: grab; background: var(--color-bg-primary); &.grabbing { cursor: grabbing; } }
.graph-controls { position: absolute; top: 16px; left: 16px; z-index: 50; }
.layout-btn { background: var(--color-bg-tertiary); border: 1px solid var(--color-border); color: white; padding: 8px 12px; border-radius: 6px; font-size: 12px; font-weight: 500; cursor: pointer; &:hover { background: var(--color-border); } }
.watermark { position: absolute; bottom: 24px; right: 24px; z-index: 50; display: flex; flex-direction: column; align-items: flex-end; gap: 8px; }
.watermark-content { display: flex; align-items: center; gap: 8px; background: rgba(15, 23, 42, 0.8); backdrop-filter: blur(4px); padding: 8px 16px; border-radius: 8px; border: 1px solid rgba(51, 65, 85, 0.5); }
.watermark-logo { background: linear-gradient(135deg, var(--color-accent), #9333ea); padding: 6px; border-radius: 6px; color: white; display: flex; }
.watermark-title { font-weight: 700; color: white; }
.watermark-subtitle { font-size: 10px; color: var(--color-text-muted); }
.watermark-link { font-size: 10px; color: var(--color-text-muted); background: rgba(15, 23, 42, 0.5); padding: 4px 8px; border-radius: 4px; text-decoration: none; &:hover { color: var(--color-accent); } }
.transform-layer { width: 100%; height: 100%; position: absolute; top: 0; left: 0; will-change: transform; }
.edges-svg { position: absolute; top: 0; left: 0; width: 4000px; height: 4000px; pointer-events: none; overflow: visible; }
</style>
