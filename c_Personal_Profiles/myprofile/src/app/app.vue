<script setup lang="ts">
// State
const booting = ref(true)

// Matrix canvas ref
const matrixCanvas = ref<HTMLCanvasElement | null>(null)

// Composables
const { initMatrixRain, handleResize } = useMatrixRain()
const { data, mediaLinks } = useData()
const { statsData } = useStatsData()
const { rotation, onMouseDown, onMouseMove, onMouseUp, onTouchStart, onTouchMove, onTouchEnd } = useSphere()

// Note: SphereView now uses its own planet data internally

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
            href="#stats"
            @click.prevent="scrollToSection('stats')"
          >
            <Icon name="lucide:bar-chart-3" :size="14" />
            STATS
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
            href="#terminal"
            @click.prevent="scrollToSection('terminal')"
          >
            <Icon name="lucide:terminal" :size="14" />
            TERMINAL
          </a>
          <a
            class="tab-btn"
            href="#solar"
            @click.prevent="scrollToSection('solar')"
          >
            <Icon name="lucide:sun" :size="14" />
            SOLAR
          </a>
        </nav>
      </header>

      <!-- Content Views - All on same page -->
      <div class="view-content-area">
        <!-- Cards Section -->
        <section id="cards" class="view-section">
          <CardsView :data="data" />
        </section>

        <!-- Stats Dashboard Section -->
        <section id="stats" class="view-section">
          <StatsView :stats-data="statsData" />
        </section>

        <!-- Player Section -->
        <section id="player" class="view-section">
          <PlayerView :data="data" />
        </section>

        <!-- Terminal Section -->
        <section id="terminal" class="view-section">
          <TerminalAI />
        </section>

        <!-- Solar System Section -->
        <section id="solar" class="view-section">
          <SphereView
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

        <!-- Linktree CTA -->
        <section class="linktree-cta">
          <a
            href="https://linktree.diegonmarcos.com"
            target="_blank"
            rel="noopener noreferrer"
            class="linktree-btn shimmer"
          >
            <Icon name="lucide:link" :size="20" />
            <span>LINKTREE</span>
            <Icon name="lucide:external-link" :size="16" />
          </a>
        </section>
      </div>
    </main>

    <!-- Footer with Social Links -->
    <footer class="terminal-dock mono">
      <MediasView :media-links="mediaLinks" :tracked-apps="data" />
      <div class="dock-content">
        <span class="prompt">root@dnm:~/profile#</span>
        <span class="cursor blink">█</span>
      </div>
    </footer>
  </div>
</template>
