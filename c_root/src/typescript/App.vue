<template>
  <div class="app-container">
    <!-- Controls -->
    <div class="c-controls">
      <button
        class="c-menu-toggle"
        :class="{ 'c-menu-toggle--open': menuOpen }"
        @click="toggleMenu"
      >
        <span class="c-hamburger-line"></span>
        <span class="c-hamburger-line"></span>
        <span class="c-hamburger-line"></span>
      </button>
      <div class="c-menu-panel" :class="{ 'c-menu-panel--visible': menuOpen }">
        <div class="c-controls-row">
          <select
            class="c-fractal-select"
            @change="onModeChange"
            :value="fractalMode"
          >
            <option
              v-for="ft in fractalTypes"
              :key="ft.value"
              :value="ft.value"
            >
              {{ ft.label }}
            </option>
          </select>
          <button class="c-fractal-toggle" @click="toggleFractal">
            {{ showFractal ? 'ON' : 'OFF' }}
          </button>
        </div>
        <div class="c-slider-container" v-if="showFractal">
          <span class="c-slider-label">Intensity</span>
          <input
            type="range"
            class="c-brightness-slider"
            min="10"
            max="100"
            :value="brightness"
            @input="onBrightnessChange"
          />
          <span class="c-slider-label">{{ brightness }}%</span>
        </div>
      </div>
    </div>

    <!-- Background Fractal Layer -->
    <div
      class="c-background-layer"
      :class="{ 'c-background-layer--hidden': !showFractal }"
      :style="backgroundStyle"
    >
      <BioFractalViewer
        v-if="showFractal"
        :mode="fractalMode"
      />
    </div>

    <!-- Foreground Wave Layer -->
    <div class="c-foreground-layer">
      <ComplexWaveVisualization />
    </div>

    <!-- Navigation Buttons - Fixed at Bottom -->
    <div class="c-nav-footer" @mouseenter="handleHover" @mouseleave="startAutoHide">
      <button
        class="c-nav-toggle"
        :class="{ 'c-nav-toggle--open': navOpen }"
        @click="toggleNav"
      >
        <span class="c-nav-arrow">↑</span>
      </button>
      <div class="c-nav-menu" :class="{ 'c-nav-menu--visible': navOpen }">
        <a href="https://diegonmarcos.github.io/myprofile/" class="c-nav-button" target="_blank" rel="noopener noreferrer">
          Profile
        </a>
        <a href="https://diegonmarcos.github.io/linktree/" class="c-nav-button" target="_blank" rel="noopener noreferrer">
          Linktree
        </a>
        <a href="https://diegonmarcos.github.io/landpage/" class="c-nav-button" target="_blank" rel="noopener noreferrer">
          Landpage
        </a>
      </div>
    </div>

    <!-- Cube / Close toggle button (top-right, above overlay) -->
    <button
      class="c-cube-toggle"
      :class="{ 'c-cube-toggle--active': showCube }"
      @click="toggleCube"
      :title="showCube ? 'Close cube view' : 'Open cube view'"
    >
      <!-- 3D Cube icon -->
      <svg class="c-cube-toggle__cube" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round">
        <path d="M12 2L20 7L12 12L4 7Z" fill="rgba(255,255,255,0.15)"/>
        <path d="M20 7V17L12 22V12Z" fill="rgba(255,255,255,0.08)"/>
        <path d="M4 7V17L12 22V12Z" fill="rgba(255,255,255,0.03)"/>
      </svg>
      <!-- X icon -->
      <svg class="c-cube-toggle__close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 6L6 18M6 6l12 12"/>
      </svg>
    </button>

    <!-- 3D Cube View -->
    <CubeView :active="showCube" @close="closeCube" @navigate="onCubeNavigate" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, defineAsyncComponent } from 'vue';
import BioFractalViewer from './components/BioFractalViewer.vue';
import ComplexWaveVisualization from './components/ComplexWaveVisualization.vue';

// Lazy load CubeView - only loaded when first opened
const CubeView = defineAsyncComponent(() => import('./components/CubeView.vue'));

const showFractal = ref(true);
const showCube = ref(true); // Cube view is default

// Keyboard shortcut: 'Q' to toggle cube view
const handleGlobalKeydown = (e: KeyboardEvent) => {
  // Skip if typing in an input
  if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

  // 'Q' key to toggle cube view
  if (e.key.toLowerCase() === 'q' && !e.ctrlKey && !e.metaKey && !e.altKey) {
    e.preventDefault();
    showCube.value = !showCube.value;
  }
};

const closeCube = () => {
  console.log('[App] closeCube called — hiding cube view');
  showCube.value = false;
};

// Store the URL CubeView wants to navigate to
let pendingNavigateUrl: string | null = null;

const onCubeNavigate = (url: string) => {
  console.log('[App] CubeView wants to navigate to:', url);
  pendingNavigateUrl = url;
};

const toggleCube = () => {
  if (showCube.value) {
    // Closing cube — if CubeView has a pending URL for the current face, navigate
    if (pendingNavigateUrl) {
      console.log('[App] Toggle close — navigating to:', pendingNavigateUrl);
      window.location.href = pendingNavigateUrl;
    } else {
      showCube.value = false;
    }
  } else {
    showCube.value = true;
  }
  pendingNavigateUrl = null;
};

onMounted(() => {
  window.addEventListener('keydown', handleGlobalKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleGlobalKeydown);
});
const fractalMode = ref(23);
const brightness = ref(50);
const menuOpen = ref(false);
const navOpen = ref(false);

let autoHideTimer: number | null = null;

// Detect touch device
const isTouchDevice = ref(false);

const checkTouchDevice = () => {
  isTouchDevice.value = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

// Call on mount
checkTouchDevice();

const handleHover = () => {
  // Only open on hover for non-touch devices
  if (isTouchDevice.value) return;

  if (autoHideTimer) {
    clearTimeout(autoHideTimer);
    autoHideTimer = null;
  }
  navOpen.value = true;
};

const startAutoHide = () => {
  // Only auto-hide on hover for non-touch devices
  if (isTouchDevice.value) return;

  // Set 1-second timer to auto-collapse
  autoHideTimer = window.setTimeout(() => {
    navOpen.value = false;
    autoHideTimer = null;
  }, 1000);
};

const closeNav = () => {
  // Immediately close the menu and cancel any timer
  if (autoHideTimer) {
    clearTimeout(autoHideTimer);
    autoHideTimer = null;
  }
  navOpen.value = false;
};

const toggleNav = () => {
  // Toggle nav open/close (works on mobile tap and desktop click)
  if (autoHideTimer) {
    clearTimeout(autoHideTimer);
    autoHideTimer = null;
  }
  navOpen.value = !navOpen.value;
};

interface FractalType {
  value: number;
  label: string;
}

const fractalTypes: FractalType[] = [
  // Original 3D Fractals (0-6)
  { value: 0, label: 'Mandelbulb' },
  { value: 1, label: 'Mandelbox' },
  { value: 2, label: 'Menger Sponge' },
  { value: 3, label: 'Sierpinski' },
  { value: 4, label: 'Kaleidoscope 3D' },
  { value: 5, label: 'Organic Hybrid' },
  { value: 6, label: 'Fractal Land' },
  // 2D Effects (7-14)
  { value: 7, label: '+ Galaxy Nebula' },
  { value: 8, label: '+ Infinite Tunnel' },
  { value: 9, label: '+ Plasma Fractal' },
  { value: 10, label: '+ Circuits' },
  { value: 11, label: '+ Metaballs' },
  { value: 12, label: '+ Volumetric Lines' },
  { value: 13, label: '+ Disco Tunnel' },
  { value: 14, label: '+ Speed Drive' },
  // 3D Fractals (15-19)
  { value: 15, label: '+ Hot Rocks' },
  { value: 16, label: '+ Server Room' },
  { value: 17, label: '+ Remnant X' },
  { value: 18, label: '+ Kali Set' },
  { value: 19, label: '+ Generators' },
  // Shadertoy Collection (20-49)
  { value: 20, label: '+ Simplicity Galaxy' },
  { value: 21, label: '+ Ribbons' },
  { value: 22, label: '+ Twisted Rings' },
  { value: 23, label: '+ Waves Remix' },
  { value: 24, label: '+ Dancing Metalights' },
  { value: 25, label: '+ IO Blocks' },
  { value: 26, label: '+ Beating Circles' },
  { value: 27, label: '+ Circle Wave' },
  { value: 28, label: '+ Soundflower' },
  { value: 29, label: '+ Polar Beats' },
  { value: 30, label: '+ Undulant Spectre' },
  { value: 31, label: '+ Revision 2015' },
  { value: 32, label: '+ Gameboy Style' },
  { value: 33, label: '+ Electric Storm' },
  { value: 34, label: '+ Vortex' },
  { value: 35, label: '+ Neon Grid' },
  { value: 36, label: '+ Matrix Rain' },
  { value: 37, label: '+ Fire' },
  { value: 38, label: '+ Aurora' },
  { value: 39, label: '+ Wormhole' },
  { value: 40, label: '+ Hexagons' },
  { value: 41, label: '+ Bubbles' },
  { value: 42, label: '+ Lightning' },
  { value: 43, label: '+ Kaleidoscope 2D' },
  { value: 44, label: '+ Starfield' },
  { value: 45, label: '+ Liquid Metal' },
  { value: 46, label: '+ Fractal Tree' },
  { value: 47, label: '+ Voronoi' },
  { value: 48, label: '+ Psychedelic' },
  { value: 49, label: '+ Energy Field' }
];

const backgroundStyle = computed(() => ({
  opacity: brightness.value / 100,
  filter: `brightness(${0.3 + (brightness.value / 100) * 0.7})`
}));

const toggleFractal = () => {
  showFractal.value = !showFractal.value;
};

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const onModeChange = (e: Event) => {
  const target = e.target as HTMLSelectElement;
  fractalMode.value = parseInt(target.value);
};

const onBrightnessChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  brightness.value = parseInt(target.value);
};
</script>
