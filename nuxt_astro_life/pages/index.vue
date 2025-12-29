<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 font-sans pb-20 p-4">
    <!-- HEADER -->
    <header class="max-w-5xl mx-auto flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
      <div class="flex items-center gap-2">
        <Icon name="lucide:sparkles" class="text-purple-500" />
        <h1 class="font-bold text-xl">
          AstroLife <span class="text-purple-400">Production</span>
        </h1>
      </div>
      <button
        v-if="!loading && astroData"
        @click="resetForm"
        class="text-xs bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-full flex items-center gap-1 transition-all"
      >
        <Icon name="lucide:x" :size="12" /> Edit Inputs
      </button>
    </header>

    <!-- INPUTS FORM -->
    <div
      v-if="!astroData && !loading"
      class="max-w-md mx-auto bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl form-animate"
    >
      <h2 class="text-xl font-bold mb-4 text-center">Chart Configuration</h2>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <input
          v-model="formData.name"
          required
          class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2"
          placeholder="Name"
        />
        <div class="grid grid-cols-2 gap-4">
          <input
            v-model="formData.date"
            required
            type="date"
            class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2"
          />
          <input
            v-model="formData.time"
            required
            type="time"
            class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2"
          />
        </div>
        <div class="relative">
          <input
            v-model="cityInput"
            @input="handleCityInput"
            @focus="handleCityFocus"
            required
            class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2"
            placeholder="City"
          />
          <ul
            v-if="showCityDropdown && filteredCities.length > 0"
            class="absolute z-50 w-full mt-1 bg-slate-800 border border-slate-700 rounded-lg max-h-48 overflow-y-auto shadow-xl"
          >
            <li
              v-for="(city, i) in filteredCities"
              :key="i"
              @click="selectCity(city)"
              class="px-3 py-2 hover:bg-slate-700 cursor-pointer text-sm"
            >
              {{ city.name }}
            </li>
          </ul>
        </div>
        <button
          type="submit"
          class="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-lg mt-2 transition-colors"
        >
          Generate Analysis
        </button>
      </form>
    </div>

    <!-- LOADING STATE -->
    <div v-if="loading" class="h-[60vh] flex flex-col items-center justify-center text-purple-400">
      <Icon name="lucide:loader" class="animate-spin mb-4" :size="48" />
      <p class="text-slate-400 text-sm animate-pulse">Calculating Planetary Positions...</p>
    </div>

    <!-- RESULTS DASHBOARD -->
    <div v-if="astroData && !loading" class="max-w-5xl mx-auto space-y-8 results-animate">
      <!-- Profile Card -->
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-wrap gap-6 items-center shadow-xl">
        <div class="bg-slate-800 p-4 rounded-full">
          <Icon name="lucide:user" class="text-purple-400" :size="24" />
        </div>
        <div class="flex-1">
          <h2 class="text-2xl font-bold text-white">{{ formData.name }}</h2>
          <div class="flex gap-4 text-xs text-slate-400 mt-1">
            <span class="flex items-center gap-1">
              <Icon name="lucide:calendar" :size="12" /> {{ formData.date }}
            </span>
            <span class="flex items-center gap-1">
              <Icon name="lucide:clock" :size="12" /> {{ formData.time }}
            </span>
            <span class="flex items-center gap-1">
              <Icon name="lucide:map-pin" :size="12" /> {{ selectedCity.name }}
            </span>
          </div>
        </div>
        <div class="flex gap-8 text-center bg-slate-950/50 p-3 rounded-lg border border-slate-800">
          <div>
            <div class="text-[10px] uppercase text-slate-500 font-bold">Sun Sign</div>
            <div class="text-lg font-semibold text-purple-200">{{ astroData.natal[0]?.sign.name }}</div>
          </div>
          <div class="w-px bg-slate-800"></div>
          <div>
            <div class="text-[10px] uppercase text-slate-500 font-bold">Chinese</div>
            <div class="text-lg font-semibold text-purple-200">{{ astroData.chinese }}</div>
          </div>
        </div>
      </div>

      <!-- Natal & Transits Tables -->
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Natal Chart -->
        <div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
          <div class="p-4 bg-slate-950/50 border-b border-slate-800 flex items-center gap-2 font-bold text-yellow-400">
            <Icon name="lucide:star" :size="16" /> Natal Picture
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left">
              <tbody class="divide-y divide-slate-800">
                <tr v-for="(item, i) in astroData.natal" :key="i" class="hover:bg-slate-800/50">
                  <td class="p-3 text-slate-200 font-bold">{{ item.planet.name }}</td>
                  <td class="p-3 text-slate-400">{{ item.sign.name }}</td>
                  <td class="p-3 italic text-slate-500">{{ item.synthesis }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Transits -->
        <div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
          <div class="p-4 bg-slate-950/50 border-b border-slate-800 flex items-center gap-2 font-bold text-emerald-400">
            <Icon name="lucide:repeat" :size="16" /> Today's Transits
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left">
              <tbody class="divide-y divide-slate-800">
                <tr v-for="(item, i) in astroData.transits" :key="i" class="hover:bg-slate-800/50">
                  <td class="p-3 text-emerald-200 font-bold">{{ item.planet.name }}</td>
                  <td class="p-3 text-white bg-slate-800 rounded text-center">{{ item.aspect }}</td>
                  <td class="p-3 text-slate-300">to {{ item.target.name }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Future & Cities -->
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Future Predictions -->
        <div class="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-lg border-l-4 border-l-blue-500">
          <div class="flex items-center gap-2 mb-4 font-bold text-blue-400">
            <Icon name="lucide:trending-up" :size="16" /> Future Predictions
          </div>
          <div class="space-y-3">
            <div
              v-for="(f, i) in astroData.future"
              :key="i"
              class="flex justify-between items-center text-sm border-b border-slate-800 pb-2 last:border-0"
            >
              <span class="text-blue-200 font-bold">{{ f.time }}</span>
              <span class="text-slate-400">{{ f.pred }}</span>
            </div>
          </div>
        </div>

        <!-- Power Cities -->
        <div class="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-lg">
          <div class="flex items-center gap-2 mb-4 font-bold text-pink-400">
            <Icon name="lucide:map-pin" :size="16" /> Power Cities
          </div>
          <div class="space-y-3 max-h-48 overflow-y-auto custom-scrollbar">
            <div v-for="(m, i) in astroData.matches" :key="i" class="text-xs">
              <span class="text-pink-200 font-bold block mb-1">{{ m.line.planet.name }} Line:</span>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(c, j) in m.cities"
                  :key="j"
                  class="bg-slate-800 px-2 py-1 rounded border border-slate-700"
                >
                  {{ c.name.split(',')[0] }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Globe -->
      <div class="bg-[#0f172a] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative">
        <div class="absolute top-4 left-4 flex items-center gap-2 text-purple-400 font-bold text-sm bg-black/50 px-3 py-1 rounded-full pointer-events-none z-10">
          <Icon name="lucide:globe" :size="14" /> Interactive Map
        </div>
        <AstroGlobe :linesData="astroData.lines" :cityPins="flatCities" />
      </div>

      <div class="text-center text-xs text-slate-600">
        <p>Simulation Engine • Mobile Optimized</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { AstroData, City } from '~/types/astro';
import {
  CITIES_DB,
  PLANETS,
  ZODIAC_DATA,
  CHINESE_ZODIAC_YEARS,
  mulberry32,
  normalizeLng
} from '~/composables/useAstroData';

// Form data
const formData = ref({
  name: 'Diego',
  date: '1987-07-18',
  time: '23:05',
});

// City selection
const cityInput = ref('São Paulo, Brazil');
const selectedCity = ref<City>(CITIES_DB[0]);
const filteredCities = ref<City[]>([]);
const showCityDropdown = ref(false);

// State
const loading = ref(true);
const astroData = ref<AstroData | null>(null);

const flatCities = computed(() => {
  if (!astroData.value) return [];
  return astroData.value.matches.flatMap(m => m.cities);
});

const handleCityInput = () => {
  if (cityInput.value.length > 0) {
    filteredCities.value = CITIES_DB.filter(c =>
      c.name.toLowerCase().includes(cityInput.value.toLowerCase())
    );
    showCityDropdown.value = true;
  } else {
    showCityDropdown.value = false;
  }
};

const handleCityFocus = () => {
  if (cityInput.value) {
    showCityDropdown.value = true;
  }
};

const selectCity = (city: City) => {
  cityInput.value = city.name;
  selectedCity.value = city;
  showCityDropdown.value = false;
};

const resetForm = () => {
  astroData.value = null;
  loading.value = false;
};

const handleSubmit = () => {
  loading.value = true;

  // Use timeout to ensure Loader renders before heavy logic
  setTimeout(() => {
    try {
      // 1. Generate Deterministic Seed
      const seedStr = `${formData.value.name}${formData.value.date}${formData.value.time}${selectedCity.value.name}`;
      let seedVal = 0;
      for (let i = 0; i < seedStr.length; i++) {
        seedVal += seedStr.charCodeAt(i);
      }

      // 2. Init Safe Randomizers
      const rand = mulberry32(seedVal);
      const randToday = mulberry32(seedVal + new Date().getDate());

      // 3. Generate Lines (Astrocartography)
      const lines = PLANETS.map((p, i) => {
        const angle = rand() * Math.PI * 2;
        return {
          id: i,
          planet: p,
          type: 'MC',
          longitudeAngle: angle,
          longitudeDegrees: normalizeLng((angle / Math.PI) * 180)
        };
      });

      // 4. Generate Natal Chart
      const natal = PLANETS.map(p => {
        const idx = Math.floor(rand() * ZODIAC_DATA.length) % ZODIAC_DATA.length;
        const sign = ZODIAC_DATA[idx];
        const words = p.question.split(' ');
        const synthesis = `I ${words[2]} ${words[3]?.replace('?', '') || ''} ${sign.answer.toLowerCase()}`;
        return { planet: p, sign, synthesis };
      });

      // 5. Generate Transits
      const transits = PLANETS.slice(0, 4).map(p => {
        const aspects = ['Conjunction', 'Opposition', 'Trine', 'Square'];
        const asp = aspects[Math.floor(randToday() * aspects.length) % aspects.length];
        const target = PLANETS[Math.floor(randToday() * PLANETS.length) % PLANETS.length];
        return {
          planet: p,
          aspect: asp,
          target,
          insight: asp === 'Trine' || asp === 'Conjunction' ? "Positive Flow" : "Growth Test"
        };
      });

      // 6. Future Predictions
      const future = [
        { time: "Next Month", planet: PLANETS[1], pred: "Emotional clarity arrives." },
        { time: "In 6 Months", planet: PLANETS[5], pred: "Career expansion likely." },
        { time: "In 1 Year", planet: PLANETS[6], pred: "Structure pays off." }
      ];

      // 7. City Matches
      const matches = lines
        .map(line => ({
          line,
          cities: CITIES_DB.filter(c =>
            Math.abs(normalizeLng(c.lng - line.longitudeDegrees)) < 12
          ).slice(0, 3)
        }))
        .filter(m => m.cities.length > 0);

      // 8. Chinese Zodiac
      const y = parseInt(formData.value.date.split('-')[0]) || 2000;
      const chinese = CHINESE_ZODIAC_YEARS[y % 12];

      astroData.value = { lines, natal, transits, future, matches, chinese };
      loading.value = false;
    } catch (err) {
      console.error('Error generating astro data:', err);
      loading.value = false;
    }
  }, 500);
};

// Auto-run on mount
onMounted(() => {
  handleSubmit();
});
</script>

<style scoped lang="scss">
.form-animate {
  animation: fade-in 0.3s ease-out, zoom-in 0.3s ease-out;
}

.results-animate {
  animation: fade-in 0.7s ease-out, slide-in-from-bottom 0.7s ease-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes zoom-in {
  from {
    transform: scale(0.95);
  }
  to {
    transform: scale(1);
  }
}

@keyframes slide-in-from-bottom {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
