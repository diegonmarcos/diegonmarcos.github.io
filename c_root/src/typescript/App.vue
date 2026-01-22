<template>
  <div class="app-container">
    <!-- Controls -->
    <div class="c-controls">
      <button
        class="c-menu-toggle"
        :class="{ 'c-menu-toggle--open': menuOpen }"
        @click="toggleMenu"
      >
        ☰
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
        :key="fractalKey"
        :mode="fractalMode"
      />
    </div>

    <!-- Foreground Wave Layer -->
    <div class="c-foreground-layer">
      <ComplexWaveVisualization />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import BioFractalViewer from './components/BioFractalViewer.vue';
import ComplexWaveVisualization from './components/ComplexWaveVisualization.vue';

const showFractal = ref(true);
const fractalMode = ref(23);
const fractalKey = ref(0);
const brightness = ref(50);
const menuOpen = ref(false);

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
  fractalKey.value++;
};

const onBrightnessChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  brightness.value = parseInt(target.value);
};
</script>
