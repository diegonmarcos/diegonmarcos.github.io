<template>
  <div id="app" class="h-screen w-screen flex selection:bg-cyan-500 selection:text-white font-sans">
    <!-- SIDEBAR -->
    <aside class="w-72 h-full glass-panel flex flex-col z-50 flex-shrink-0">
      <div class="h-24 flex items-center px-8 gap-4 border-b border-white/5 bg-slate-900/50">
        <div class="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
          <i class="ph-fill ph-globe-stand text-2xl"></i>
        </div>
        <div>
          <h1 class="font-bold text-xl tracking-wider text-white">MYTRIPS</h1>
          <p class="text-[10px] text-cyan-400 font-bold tracking-widest mt-0.5 uppercase">Ultimate</p>
        </div>
      </div>

      <nav class="flex-1 px-4 py-8 space-y-2">
        <div class="px-4 text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Main Views</div>
        <button
          v-for="view in views"
          :key="view.id"
          @click="currentView = view.id as ViewType"
          :id="`nav-${view.id}`"
          class="nav-item w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all"
          :class="currentView === view.id ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'"
        >
          <i :class="`ph ph-${view.icon} text-xl`"></i>
          <span class="font-medium">{{ view.label }}</span>
          <span v-if="view.badge" class="ml-auto text-[10px] bg-white/10 px-2 rounded-full">{{ view.badge }}</span>
        </button>

        <div class="px-4 text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 mt-8">Other Tools</div>
        <a href="./myroadtrip.html" class="nav-item w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-slate-400 hover:bg-white/5 hover:text-white">
          <i class="ph ph-globe-hemisphere-west text-xl"></i>
          <span class="font-medium">Cultural Regions Map</span>
        </a>
      </nav>
    </aside>

    <!-- MAIN CONTENT -->
    <main class="flex-1 relative h-full bg-slate-950 flex flex-col">
      <!-- Header -->
      <header class="h-20 flex-none flex items-center justify-between px-10 border-b border-white/5 bg-slate-950/80 backdrop-blur z-40">
        <div>
          <h2 id="page-title" class="text-2xl font-light text-white tracking-tight">{{ currentViewTitle }}</h2>
          <p class="text-xs text-slate-400 mt-1">
            <span id="system-clock">{{ currentTime }}</span> • 170 Cities Loaded
          </p>
        </div>
        <div class="glass px-4 py-2 rounded-full flex items-center gap-3 text-sm text-slate-400 w-80">
          <i class="ph ph-magnifying-glass text-lg"></i>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search database..."
            class="bg-transparent border-none focus:outline-none w-full text-white placeholder-slate-600"
          >
        </div>
      </header>

      <!-- Dynamic Viewport -->
      <div id="content-viewport" class="flex-1 overflow-y-auto p-10">
        <!-- Dashboard View -->
        <div v-if="currentView === 'dashboard'" class="view-section fade-in space-y-8">
          <div class="grid grid-cols-4 gap-6">
            <div class="glass p-6 rounded-2xl hover:-translate-y-1 transition-transform border-t-4 border-cyan-500">
              <div class="text-slate-400 text-xs uppercase font-bold mb-2">Total Cities</div>
              <div class="text-4xl font-light text-white mb-1">170</div>
              <div class="text-xs text-cyan-400 flex items-center gap-1"><i class="ph-bold ph-trend-up"></i> +12 this year</div>
            </div>
            <div class="glass p-6 rounded-2xl hover:-translate-y-1 transition-transform border-t-4 border-purple-500">
              <div class="text-slate-400 text-xs uppercase font-bold mb-2">Countries</div>
              <div class="text-4xl font-light text-white mb-1">40</div>
              <div class="text-xs text-purple-400">19% of World</div>
            </div>
            <div class="glass p-6 rounded-2xl hover:-translate-y-1 transition-transform border-t-4 border-amber-500">
              <div class="text-slate-400 text-xs uppercase font-bold mb-2">Time Abroad</div>
              <div class="text-4xl font-light text-white mb-1">842d</div>
              <div class="text-xs text-amber-400">~2.3 Years</div>
            </div>
            <div class="glass p-6 rounded-2xl hover:-translate-y-1 transition-transform border-t-4 border-rose-500">
              <div class="text-slate-400 text-xs uppercase font-bold mb-2">Longest Streak</div>
              <div class="text-4xl font-light text-white mb-1">45d</div>
              <div class="text-xs text-rose-400">Asia 2018</div>
            </div>
          </div>

          <!-- Charts Area -->
          <div class="grid grid-cols-3 gap-6 h-80">
            <div class="col-span-2 glass p-6 rounded-2xl">
              <h3 class="text-xs font-bold text-slate-400 uppercase mb-4">Travel Velocity</h3>
              <div class="h-60 w-full"><canvas ref="chartVelocity"></canvas></div>
            </div>
            <div class="col-span-1 glass p-6 rounded-2xl">
              <h3 class="text-xs font-bold text-slate-400 uppercase mb-4">Regional Split</h3>
              <div class="h-60 w-full flex justify-center"><canvas ref="chartContinents"></canvas></div>
            </div>
          </div>

          <!-- Recent Activity -->
          <div class="glass p-6 rounded-2xl">
            <h3 class="text-xs font-bold text-slate-400 uppercase mb-4">Recent Expeditions</h3>
            <div class="space-y-3">
              <div
                v-for="city in filteredCities.slice(0, 5)"
                :key="city.id"
                class="flex justify-between items-center py-2 border-b border-white/5 cursor-pointer hover:bg-white/5 transition-colors rounded px-2 group"
              >
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-cyan-400">
                    <i class="ph-fill ph-airplane-tilt"></i>
                  </div>
                  <div>
                    <div class="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">{{ city.name }}</div>
                    <div class="text-xs text-slate-400">{{ city.year }} Expedition</div>
                  </div>
                </div>
                <div class="text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  Fly to <i class="ph-bold ph-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Other views would go here -->
        <div v-if="currentView === 'atlas'" class="text-white">Atlas View - Map Integration Coming Soon</div>
        <div v-if="currentView === 'themes'" class="text-white">Themes View - Collections Coming Soon</div>
        <div v-if="currentView === 'analytics'" class="text-white">Analytics View - Stats Coming Soon</div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue';
import type { City, ViewType } from '@/types/mytrips';
import { initData } from '@/utils/mytrips-data';
import Chart from 'chart.js/auto';

const currentView = ref<ViewType>('dashboard');
const searchQuery = ref('');
const currentTime = ref('Initializing Clock...');
const DB = ref<City[]>([]);
const chartVelocity = ref<HTMLCanvasElement | null>(null);
const chartContinents = ref<HTMLCanvasElement | null>(null);

const views = [
  { id: 'dashboard', label: 'Home', icon: 'squares-four' },
  { id: 'atlas', label: 'The Atlas', icon: 'map-trifold' },
  { id: 'themes', label: 'Collections', icon: 'cards', badge: '16' },
  { id: 'analytics', label: 'Stats', icon: 'chart-polar' }
];

const currentViewTitle = computed(() => {
  const titles: Record<ViewType, string> = {
    dashboard: 'Mission Control',
    atlas: 'World Atlas',
    themes: 'Curated Collections',
    analytics: 'Deep Analytics'
  };
  return titles[currentView.value];
});

const filteredCities = computed(() => {
  if (!searchQuery.value) return DB.value;
  const q = searchQuery.value.toLowerCase();
  return DB.value.filter(c => c.name.toLowerCase().includes(q));
});

let clockCleanup: (() => void) | null = null;
let charts: Record<string, Chart> = {};

onMounted(async () => {
  DB.value = initData();

  // Start clock
  const interval = setInterval(() => {
    const now = new Date();
    currentTime.value = now.toISOString().split('T')[1].split('.')[0] + ' UTC';
  }, 1000);
  clockCleanup = () => clearInterval(interval);

  // Initialize charts
  await nextTick();
  initCharts();
});

onUnmounted(() => {
  if (clockCleanup) clockCleanup();
  Object.values(charts).forEach(chart => chart.destroy());
});

watch(currentView, async () => {
  if (currentView.value === 'dashboard') {
    await nextTick();
    initCharts();
  }
});

function initCharts() {
  if (!chartVelocity.value || !chartContinents.value) return;

  // Velocity Chart
  const years: Record<number, number> = {};
  DB.value.forEach(c => years[c.year] = (years[c.year] || 0) + 1);

  if (charts.vel) charts.vel.destroy();
  charts.vel = new Chart(chartVelocity.value, {
    type: 'bar',
    data: {
      labels: Object.keys(years).sort(),
      datasets: [{
        label: 'Cities',
        data: Object.values(years),
        backgroundColor: '#06b6d4',
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { grid: { color: '#334155' } },
        x: { grid: { display: false } }
      }
    }
  });

  // Continents Chart
  if (charts.cont) charts.cont.destroy();
  charts.cont = new Chart(chartContinents.value, {
    type: 'doughnut',
    data: {
      labels: ['Europe', 'Asia', 'Americas', 'Others'],
      datasets: [{
        data: [45, 30, 20, 5],
        backgroundColor: ['#60a5fa', '#f59e0b', '#f472b6', '#34d399'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '80%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: { color: '#94a3b8' }
        }
      }
    }
  });
}
</script>
