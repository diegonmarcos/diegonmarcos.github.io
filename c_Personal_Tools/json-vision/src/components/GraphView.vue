<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
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

const NODE_WIDTH = 320
const NODE_HEIGHT_EST = 120
const FIT_PADDING = 40

const graphNodes = ref<GraphNode[]>([])
const graphEdges = ref<GraphEdge[]>([])
const pan = ref({ x: 0, y: 0 })
const scale = ref(1)
const isDraggingCanvas = ref(false)
const draggedNodeId = ref<string | null>(null)
const graphContainer = ref<HTMLDivElement | null>(null)

const dragStart = { x: 0, y: 0 }
const itemStart = { x: 0, y: 0 }

// Auto-fit: compute bounding box and set scale/pan to fit all nodes in viewport
const fitToView = () => {
  const container = graphContainer.value
  if (!container || graphNodes.value.length === 0) return

  const rect = container.getBoundingClientRect()
  const cw = rect.width
  const ch = rect.height
  if (cw === 0 || ch === 0) return

  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
  for (const node of graphNodes.value) {
    minX = Math.min(minX, node.x)
    minY = Math.min(minY, node.y)
    maxX = Math.max(maxX, node.x + NODE_WIDTH)
    maxY = Math.max(maxY, node.y + NODE_HEIGHT_EST)
  }

  const graphW = maxX - minX
  const graphH = maxY - minY
  if (graphW === 0 || graphH === 0) return

  const scaleX = (cw - FIT_PADDING * 2) / graphW
  const scaleY = (ch - FIT_PADDING * 2) / graphH
  const newScale = Math.min(scaleX, scaleY, 1.5) // don't over-zoom

  const centerX = (minX + maxX) / 2
  const centerY = (minY + maxY) / 2

  scale.value = Math.max(0.05, newScale)
  pan.value = {
    x: cw / 2 - centerX * scale.value,
    y: ch / 2 - centerY * scale.value
  }
}

watch([() => props.data, () => props.layoutMode], () => {
  if (props.data && !draggedNodeId.value) {
    const { nodes, edges } = processGraph(props.data, props.layoutMode)
    graphNodes.value = nodes
    graphEdges.value = edges
    nextTick(fitToView)
  }
}, { immediate: true })

// Mouse drag — canvas pan or node drag
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

// Wheel zoom — no Ctrl required, zooms toward cursor
const handleWheel = (e: WheelEvent) => {
  e.preventDefault()
  const rect = graphContainer.value?.getBoundingClientRect()
  if (!rect) return

  const mouseX = e.clientX - rect.left
  const mouseY = e.clientY - rect.top

  // Pinch gesture (ctrlKey set by trackpad pinch) or regular scroll = zoom
  const delta = -e.deltaY * (e.ctrlKey ? 0.01 : 0.002)
  const newScale = Math.min(Math.max(0.05, scale.value * (1 + delta)), 5)

  // Zoom toward cursor position
  const worldX = (mouseX - pan.value.x) / scale.value
  const worldY = (mouseY - pan.value.y) / scale.value
  pan.value = { x: mouseX - worldX * newScale, y: mouseY - worldY * newScale }
  scale.value = newScale
}

// Touch support — pinch to zoom, single finger to pan
let lastTouches: Touch[] = []
let lastPinchDist = 0
let touchPanning = false

const getTouchDist = (t1: Touch, t2: Touch) =>
  Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY)

const getTouchCenter = (t1: Touch, t2: Touch) => ({
  x: (t1.clientX + t2.clientX) / 2,
  y: (t1.clientY + t2.clientY) / 2,
})

const handleTouchStart = (e: TouchEvent) => {
  if (e.touches.length === 1) {
    touchPanning = true
    dragStart.x = e.touches[0].clientX
    dragStart.y = e.touches[0].clientY
    itemStart.x = pan.value.x
    itemStart.y = pan.value.y
  } else if (e.touches.length === 2) {
    touchPanning = false
    lastTouches = [e.touches[0], e.touches[1]]
    lastPinchDist = getTouchDist(e.touches[0], e.touches[1])
  }
}

const handleTouchMove = (e: TouchEvent) => {
  e.preventDefault()
  if (e.touches.length === 1 && touchPanning) {
    pan.value = {
      x: itemStart.x + (e.touches[0].clientX - dragStart.x),
      y: itemStart.y + (e.touches[0].clientY - dragStart.y),
    }
  } else if (e.touches.length === 2) {
    const dist = getTouchDist(e.touches[0], e.touches[1])
    const center = getTouchCenter(e.touches[0], e.touches[1])
    const rect = graphContainer.value?.getBoundingClientRect()
    if (!rect) return

    const ratio = dist / lastPinchDist
    const newScale = Math.min(Math.max(0.05, scale.value * ratio), 5)

    const cx = center.x - rect.left
    const cy = center.y - rect.top
    const worldX = (cx - pan.value.x) / scale.value
    const worldY = (cy - pan.value.y) / scale.value
    pan.value = { x: cx - worldX * newScale, y: cy - worldY * newScale }
    scale.value = newScale

    lastPinchDist = dist
    lastTouches = [e.touches[0], e.touches[1]]
  }
}

const handleTouchEnd = () => {
  touchPanning = false
  lastPinchDist = 0
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseup', handleMouseUp)
  const el = graphContainer.value
  if (el) {
    el.addEventListener('wheel', handleWheel, { passive: false })
    el.addEventListener('touchstart', handleTouchStart, { passive: false })
    el.addEventListener('touchmove', handleTouchMove, { passive: false })
    el.addEventListener('touchend', handleTouchEnd)
  }
  nextTick(fitToView)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseup', handleMouseUp)
})

// Zoom toward viewport center (for +/- buttons)
const zoomBy = (factor: number) => {
  const rect = graphContainer.value?.getBoundingClientRect()
  if (!rect) { scale.value = Math.min(Math.max(0.05, scale.value * factor), 5); return }
  const cx = rect.width / 2
  const cy = rect.height / 2
  const newScale = Math.min(Math.max(0.05, scale.value * factor), 5)
  const worldX = (cx - pan.value.x) / scale.value
  const worldY = (cy - pan.value.y) / scale.value
  pan.value = { x: cx - worldX * newScale, y: cy - worldY * newScale }
  scale.value = newScale
}

const transformStyle = computed(() => ({
  transform: `translate(${pan.value.x}px, ${pan.value.y}px) scale(${scale.value})`,
  transformOrigin: '0 0'
}))
</script>

<template>
  <div ref="graphContainer" :class="['graph-container', { grabbing: isDraggingCanvas }]" @mousedown="handleMouseDown($event, null)">
    <div class="graph-controls">
      <button class="ctrl-btn" @click.stop="zoomBy(1.4)">+</button>
      <button class="ctrl-btn" @click.stop="zoomBy(0.6)">-</button>
      <button class="ctrl-btn" @click.stop="fitToView()">Fit</button>
      <button class="ctrl-btn" @click.stop="emit('update:layoutMode', layoutMode === 'vertical' ? 'horizontal' : 'vertical')">
        {{ layoutMode === 'vertical' ? 'H' : 'V' }}
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
.graph-container { width: 100%; height: 100%; position: relative; overflow: hidden; cursor: grab; background: var(--color-bg-primary); touch-action: none; &.grabbing { cursor: grabbing; } }
.graph-controls { position: absolute; top: 8px; left: 8px; z-index: 50; display: flex; gap: 4px; }
.ctrl-btn { background: var(--color-bg-tertiary); border: 1px solid var(--color-border); color: white; min-width: 40px; height: 40px; padding: 0 8px; border-radius: 6px; font-size: 15px; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; -webkit-tap-highlight-color: transparent; &:hover, &:active { background: var(--color-border); } }
.watermark { position: absolute; bottom: 24px; right: 24px; z-index: 50; display: flex; flex-direction: column; align-items: flex-end; gap: 8px; }
.watermark-content { display: flex; align-items: center; gap: 8px; background: rgba(15, 23, 42, 0.8); backdrop-filter: blur(4px); padding: 8px 16px; border-radius: 8px; border: 1px solid rgba(51, 65, 85, 0.5); }
.watermark-logo { background: linear-gradient(135deg, var(--color-accent), #9333ea); padding: 6px; border-radius: 6px; color: white; display: flex; }
.watermark-title { font-weight: 700; color: white; }
.watermark-subtitle { font-size: 10px; color: var(--color-text-muted); }
.watermark-link { font-size: 10px; color: var(--color-text-muted); background: rgba(15, 23, 42, 0.5); padding: 4px 8px; border-radius: 4px; text-decoration: none; &:hover { color: var(--color-accent); } }
.transform-layer { width: 100%; height: 100%; position: absolute; top: 0; left: 0; will-change: transform; }
.edges-svg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; overflow: visible; }
</style>
