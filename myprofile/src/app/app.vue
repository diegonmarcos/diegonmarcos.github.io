<script setup lang="ts">
// State
const booting = ref(true)

// Matrix canvas ref
const matrixCanvas = ref<HTMLCanvasElement | null>(null)

// Composables
const { initMatrixRain, handleResize } = useMatrixRain()
const { data, mediaLinks } = useData()
const { rotation, calculateSpherePoints, onMouseDown, onMouseMove, onMouseUp, onTouchStart, onTouchMove, onTouchEnd } = useSphere()

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

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
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
          <a
            class="tab-btn"
            href="#cards"
            @click.prevent="scrollToSection('cards')"
          >
            <Icon name="lucide:layers" :size="14" />
            CARDS
          </a>
          <a
            class="tab-btn"
            href="#player"
            @click.prevent="scrollToSection('player')"
          >
            <Icon name="lucide:user" :size="14" />
            PLAYER
          </a>
          <a
            class="tab-btn"
            href="#sphere"
            @click.prevent="scrollToSection('sphere')"
          >
            <Icon name="lucide:box" :size="14" />
            SPHERE
          </a>
          <a
            class="tab-btn"
            href="#medias"
            @click.prevent="scrollToSection('medias')"
          >
            <Icon name="lucide:share-2" :size="14" />
            MEDIAS
          </a>
        </nav>
      </header>

      <!-- Content Views - All on same page -->
      <div class="view-content-area">
        <!-- Cards Section -->
        <section id="cards" class="view-section">
          <CardsView :data="data" />
        </section>

        <!-- Player Section -->
        <section id="player" class="view-section">
          <PlayerView :data="data" />
        </section>

        <!-- Sphere Section -->
        <section id="sphere" class="view-section">
          <SphereView
            :sphere-points="spherePoints"
            :rotation="rotation"
            @mousedown="onMouseDown"
            @mousemove="onMouseMove"
            @mouseup="onMouseUp"
            @mouseleave="onMouseUp"
            @touchstart="onTouchStart"
            @touchmove="onTouchMove"
            @touchend="onTouchEnd"
          />
        </section>

        <!-- Medias Section -->
        <section id="medias" class="view-section">
          <MediasView :media-links="mediaLinks" />
        </section>
      </div>
    </main>

    <!-- Footer -->
    <footer class="terminal-dock mono">
      <div class="dock-content">
        <span class="prompt">root@dnm:~/profile#</span>
        <span class="cursor blink">█</span>
        <div class="dock-actions">
          <Icon name="lucide:wifi" :size="16" class="green" />
          <span class="dim">PING: 24ms</span>
        </div>
      </div>
    </footer>
  </div>
</template>
