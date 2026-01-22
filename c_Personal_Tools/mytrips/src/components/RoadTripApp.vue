<template>
  <div id="app">
    <!-- Loader -->
    <div v-if="loading" id="loader" class="fixed inset-0 flex justify-center items-center flex-col bg-[#1a1a1a] z-[9999]">
      <div class="loader-spinner"></div>
      <h2 class="text-xl font-semibold mb-2">Loading Terrain Map</h2>
      <p class="text-slate-500 text-sm">Generating topography...</p>
    </div>

    <!-- Controls -->
    <div class="fixed top-4 left-4 z-50 flex gap-2">
      <button @click="toggleSidebar" class="menu-btn" title="Toggle Menu (M)">☰</button>
      <a href="./index.html" class="menu-btn flex items-center justify-center no-underline" title="Back to MyTrips">←</a>
    </div>

    <!-- Sidebar -->
    <aside :class="['sidebar', { collapsed: sidebarCollapsed }]" id="sidebar">
      <header class="p-5 px-6 border-b border-white/5 flex justify-between items-center">
        <h1 class="text-xs font-bold uppercase tracking-wider flex items-center gap-2.5 text-slate-100">
          🗺️ Cultural Regions
        </h1>
        <button @click="sidebarCollapsed = true" class="close-btn" title="Close">×</button>
      </header>

      <div class="p-3.5 px-6 border-b border-white/5">
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            class="search-input w-full py-2.5 px-3.5 pl-9 bg-black/30 border border-white/5 rounded-lg text-slate-100 text-xs"
            placeholder="Search countries or regions..."
          >
        </div>
      </div>

      <div class="flex p-3.5 px-6 gap-2.5 border-b border-white/5 bg-black/20">
        <div class="flex-1 text-center">
          <div class="text-xl font-bold text-slate-100 leading-none">{{ stats.countries }}</div>
          <div class="text-[9px] text-slate-500 uppercase tracking-wider mt-1 font-medium">Countries</div>
        </div>
        <div class="flex-1 text-center">
          <div class="text-xl font-bold text-slate-100 leading-none">{{ stats.regions }}</div>
          <div class="text-[9px] text-slate-500 uppercase tracking-wider mt-1 font-medium">Continents</div>
        </div>
        <div class="flex-1 text-center">
          <div class="text-xl font-bold text-slate-100 leading-none">{{ stats.groups }}</div>
          <div class="text-[9px] text-slate-500 uppercase tracking-wider mt-1 font-medium">Groups</div>
        </div>
      </div>

      <div class="flex-1 overflow-y-auto pb-12" id="sidebar-content">
        <div class="text-center text-slate-500 py-8 text-sm">Map data will load here</div>
      </div>
    </aside>

    <!-- Main Map -->
    <main class="map-wrapper absolute inset-0 bg-[#1a2634] z-[1] cursor-pointer" id="map-wrapper">
      <svg id="world-map" class="w-full h-full block">
        <defs>
          <filter id="terrain-texture" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="8" seed="3" result="noise"/>
            <feDiffuseLighting in="noise" lighting-color="white" surfaceScale="12" result="light">
              <feDistantLight azimuth="315" elevation="45"/>
            </feDiffuseLighting>
            <feBlend in="SourceGraphic" in2="light" mode="overlay" result="textured"/>
            <feComposite in="textured" in2="SourceGraphic" operator="in"/>
          </filter>
          <filter id="terrain-mountains" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.008" numOctaves="6" seed="7" result="mountains"/>
            <feColorMatrix type="matrix" in="mountains" result="mono"
              values="0.5 0.5 0.5 0 0
                      0.5 0.5 0.5 0 0
                      0.5 0.5 0.5 0 0
                      0 0 0 1 0"/>
            <feDiffuseLighting in="mono" lighting-color="white" surfaceScale="15" result="ridges">
              <feDistantLight azimuth="300" elevation="50"/>
            </feDiffuseLighting>
            <feBlend in="SourceGraphic" in2="ridges" mode="soft-light" result="terrain"/>
            <feComposite in="terrain" in2="SourceGraphic" operator="in"/>
          </filter>
        </defs>
      </svg>

      <!-- Zoom Controls -->
      <div class="fixed bottom-5 right-5 flex flex-col gap-1.5 z-50">
        <button class="zoom-btn w-9 h-9" title="Zoom In">+</button>
        <button class="zoom-btn w-9 h-9" title="Zoom Out">−</button>
        <button class="zoom-btn w-9 h-9" title="Reset (Esc)">⟲</button>
      </div>

      <!-- Legend -->
      <div class="fixed bottom-5 left-5 bg-[rgba(15,15,20,0.9)] backdrop-blur-xl border border-white/5 rounded-xl p-3.5 z-50 max-w-xs">
        <div class="text-[9px] text-slate-500 uppercase tracking-wider mb-2.5 font-semibold">Continents</div>
        <div class="flex flex-wrap gap-1.5" id="legend-items">
          <div class="text-slate-500 text-xs">Map loading...</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const loading = ref(true);
const sidebarCollapsed = ref(false);
const searchQuery = ref('');

const stats = ref({
  countries: 0,
  regions: 0,
  groups: 0
});

const toggleSidebar = () => {
  sidebarCollapsed.value = !sidebarCollapsed.value;
};

onMounted(() => {
  // Simulate map loading
  setTimeout(() => {
    loading.value = false;
    stats.value = {
      countries: 195,
      regions: 5,
      groups: 19
    };
  }, 1500);

  // Note: Full D3.js integration would go here
  // For now, this is a placeholder that maintains the structure
});
</script>

<style scoped>
.menu-btn {
  background: rgba(15, 15, 20, 0.9);
  backdrop-filter: blur(12px);
  border: 1px solid hsla(0, 0%, 100%, 0.06);
  width: 44px;
  height: 44px;
  border-radius: 12px;
  color: #f1f5f9;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s;
}

.menu-btn:hover {
  background: rgba(30, 30, 40, 0.95);
  border-color: hsla(0, 0%, 100%, 0.12);
  transform: scale(1.04);
}

.close-btn {
  background: none;
  border: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
  color: #64748b;
  font-size: 1.1rem;
  border-radius: 6px;
  transition: all 0.2s;
}

.close-btn:hover {
  color: #f1f5f9;
  background: hsla(0, 0%, 100%, 0.08);
}

.zoom-btn {
  background: rgba(15, 15, 20, 0.9);
  backdrop-filter: blur(12px);
  border: 1px solid hsla(0, 0%, 100%, 0.06);
  border-radius: 10px;
  color: #f1f5f9;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s;
}

.zoom-btn:hover {
  background: rgba(30, 30, 40, 0.95);
  border-color: hsla(0, 0%, 100%, 0.12);
}
</style>
