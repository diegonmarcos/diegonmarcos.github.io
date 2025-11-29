<script setup lang="ts">
import type { ViewType } from '~/types'

// State
const view = ref<ViewType>('cards')
const booting = ref(true)

// Matrix canvas ref
const matrixCanvas = ref<HTMLCanvasElement | null>(null)

// Composables
const { initMatrixRain, handleResize } = useMatrixRain()
const { data } = useData()
const { rotation, calculateSpherePoints, onMouseDown, onMouseMove, onMouseUp } = useSphere()

// Computed
const spherePoints = computed(() => calculateSpherePoints(data))

// Lifecycle
onMounted(() => {
  // Boot sequence
  setTimeout(() => {
    booting.value = false
  }, 1500)

  // Initialize matrix rain
  if (matrixCanvas.value) {
    initMatrixRain(matrixCanvas.value)
  }

  // Resize handler
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})

// Methods
const onResize = () => {
  if (matrixCanvas.value) {
    handleResize(matrixCanvas.value)
  }
}
</script>

<template>
  <div class="matrix-container">
    <!-- Matrix Background -->
    <canvas ref="matrixCanvas" class="matrix-canvas" />
    <div class="vignette" />
    <div class="scanlines" />

    <!-- Boot Screen -->
    <div v-if="booting" class="boot-screen">
      <div class="terminal-text">
        <div class="typewriter mono">LOADING VUE SYSTEM...</div>
        <div class="typewriter mono">INITIALIZING NUXT ENGINE...</div>
        <div class="typewriter mono">CONNECTING DATA STREAMS...</div>
      </div>
    </div>

    <!-- Main HUD -->
    <main v-else class="hud-interface fade-in">
      <!-- Header -->
      <header class="tactical-header">
        <h1 class="logo-text mono">
          DIEGO N. MARCOS <span class="green">//</span> PROFILE
        </h1>
        <nav class="view-tabs">
          <button
            class="tab-btn"
            :class="{ active: view === 'cards' }"
            @click="view = 'cards'"
          >
            <Icon name="lucide:layers" :size="14" />
            CARDS
          </button>
          <button
            class="tab-btn"
            :class="{ active: view === 'player' }"
            @click="view = 'player'"
          >
            <Icon name="lucide:user" :size="14" />
            PLAYER
          </button>
          <button
            class="tab-btn"
            :class="{ active: view === 'sphere' }"
            @click="view = 'sphere'"
          >
            <Icon name="lucide:box" :size="14" />
            SPHERE
          </button>
        </nav>
      </header>

      <!-- Content Views -->
      <div class="view-content-area">
        <!-- Cards View -->
        <CardsView v-if="view === 'cards'" :data="data" />

        <!-- Player View -->
        <PlayerView v-else-if="view === 'player'" :data="data" />

        <!-- Sphere View -->
        <SphereView
          v-else-if="view === 'sphere'"
          :sphere-points="spherePoints"
          :rotation="rotation"
          @mousedown="onMouseDown"
          @mousemove="onMouseMove"
          @mouseup="onMouseUp"
          @mouseleave="onMouseUp"
        />
      </div>
    </main>

    <!-- Footer -->
    <footer class="terminal-dock mono">
      <div class="dock-content">
        <span class="prompt">root@nova:~/views/{{ view }}#</span>
        <span class="cursor blink">█</span>
        <div class="dock-actions">
          <Icon name="lucide:wifi" :size="16" class="green" />
          <span class="dim">PING: 24ms</span>
        </div>
      </div>
    </footer>
  </div>
</template>
