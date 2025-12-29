<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 font-sans pb-20 p-4">
    <!-- HEADER -->
    <header class="max-w-5xl mx-auto flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
      <div class="flex items-center gap-2">
        <Icon name="lucide:sparkles" class="text-purple-500" />
        <h1 class="font-bold text-xl">
          AstroLife <span class="text-purple-400">Full Analysis</span>
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
      <h2 class="text-xl font-bold mb-4 text-center">Birth Chart Configuration</h2>
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
          Generate Full Analysis
        </button>
      </form>
    </div>

    <!-- LOADING STATE -->
    <div v-if="loading" class="h-[60vh] flex flex-col items-center justify-center text-purple-400">
      <Icon name="lucide:loader" class="animate-spin mb-4" :size="48" />
      <p class="text-slate-400 text-sm animate-pulse">Calculating Planetary Positions...</p>
    </div>

    <!-- RESULTS DASHBOARD -->
    <div v-if="astroData && !loading" class="max-w-5xl mx-auto space-y-6 results-animate">

      <!-- ===== PROFILE CARD ===== -->
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
        <div class="flex flex-wrap gap-6 items-center">
          <div class="bg-slate-800 p-4 rounded-full">
            <Icon name="lucide:user" class="text-purple-400" :size="24" />
          </div>
          <div class="flex-1">
            <h2 class="text-2xl font-bold text-white">{{ formData.name }}</h2>
            <div class="flex flex-wrap gap-4 text-xs text-slate-400 mt-1">
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
        </div>

        <!-- Big 3 + Chinese -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
          <button @click="showSignInfo(astroData.sunSign)" class="bg-slate-950/50 p-3 rounded-lg border border-slate-800 hover:border-yellow-500/50 transition-colors text-center group">
            <div class="text-[10px] uppercase text-slate-500 font-bold flex items-center justify-center gap-1">
              Sun <Icon name="lucide:info" :size="10" class="opacity-0 group-hover:opacity-100" />
            </div>
            <div class="text-lg font-semibold text-yellow-300">{{ astroData.sunSign }}</div>
          </button>
          <button @click="showSignInfo(astroData.moonSign)" class="bg-slate-950/50 p-3 rounded-lg border border-slate-800 hover:border-slate-500/50 transition-colors text-center group">
            <div class="text-[10px] uppercase text-slate-500 font-bold flex items-center justify-center gap-1">
              Moon <Icon name="lucide:info" :size="10" class="opacity-0 group-hover:opacity-100" />
            </div>
            <div class="text-lg font-semibold text-slate-200">{{ astroData.moonSign }}</div>
          </button>
          <button @click="showSignInfo(astroData.risingApprox)" class="bg-slate-950/50 p-3 rounded-lg border border-slate-800 hover:border-purple-500/50 transition-colors text-center group">
            <div class="text-[10px] uppercase text-slate-500 font-bold flex items-center justify-center gap-1">
              Rising <Icon name="lucide:info" :size="10" class="opacity-0 group-hover:opacity-100" />
            </div>
            <div class="text-lg font-semibold text-purple-300">{{ astroData.risingApprox }}</div>
          </button>
          <button @click="showChineseInfo()" class="bg-slate-950/50 p-3 rounded-lg border border-slate-800 hover:border-red-500/50 transition-colors text-center group">
            <div class="text-[10px] uppercase text-slate-500 font-bold flex items-center justify-center gap-1">
              Chinese <Icon name="lucide:info" :size="10" class="opacity-0 group-hover:opacity-100" />
            </div>
            <div class="text-lg font-semibold text-red-300">{{ astroData.chineseData?.emoji }} {{ astroData.chinese }}</div>
          </button>
        </div>
      </div>

      <!-- ===== LUNAR ANALYSIS ===== -->
      <div v-if="astroData.lunar" class="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg">
        <div class="flex items-center gap-2 mb-4 font-bold text-slate-200">
          <span class="text-2xl">{{ astroData.lunar.phase.emoji }}</span>
          Lunar Analysis
        </div>
        <div class="grid sm:grid-cols-3 gap-4">
          <!-- Current Moon Phase -->
          <div class="bg-slate-950/50 p-4 rounded-lg border border-slate-800">
            <div class="text-xs text-slate-500 uppercase mb-1">Current Phase</div>
            <div class="text-lg font-bold text-slate-200">{{ astroData.lunar.phase.name }}</div>
            <div class="text-xs text-slate-400 mt-2">{{ astroData.lunar.phase.description }}</div>
            <div class="flex flex-wrap gap-1 mt-2">
              <span v-for="kw in astroData.lunar.phase.keywords" :key="kw" class="text-[10px] bg-slate-800 px-2 py-0.5 rounded">{{ kw }}</span>
            </div>
          </div>
          <!-- Birth Moon Phase -->
          <div v-if="astroData.lunar.birthMoonPhase" class="bg-slate-950/50 p-4 rounded-lg border border-slate-800">
            <div class="text-xs text-slate-500 uppercase mb-1">Birth Moon Phase</div>
            <div class="text-lg font-bold text-slate-200">{{ astroData.lunar.birthMoonPhase.emoji }} {{ astroData.lunar.birthMoonPhase.name }}</div>
            <div class="text-xs text-slate-400 mt-2">You were born during a {{ astroData.lunar.birthMoonPhase.name.toLowerCase() }}, influencing your emotional nature.</div>
          </div>
          <!-- Lunar Nodes -->
          <div class="bg-slate-950/50 p-4 rounded-lg border border-slate-800">
            <div class="text-xs text-slate-500 uppercase mb-1">Lunar Nodes (Destiny)</div>
            <div class="space-y-2 text-sm">
              <div>
                <span class="text-emerald-400 font-bold">North Node:</span>
                <span class="text-slate-300 ml-2">{{ astroData.lunar.northNodeSign }}</span>
                <div class="text-[10px] text-slate-500">Your soul's growth direction</div>
              </div>
              <div>
                <span class="text-orange-400 font-bold">South Node:</span>
                <span class="text-slate-300 ml-2">{{ astroData.lunar.southNodeSign }}</span>
                <div class="text-[10px] text-slate-500">Past life talents & comfort zone</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== ELEMENT & MODALITY BALANCE ===== -->
      <div class="grid sm:grid-cols-2 gap-6">
        <!-- Elements -->
        <div v-if="astroData.elements" class="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg">
          <div class="flex items-center gap-2 mb-4 font-bold text-orange-400">
            <Icon name="lucide:flame" :size="16" /> Element Balance
          </div>
          <div class="space-y-2">
            <div v-for="(count, elem) in { fire: astroData.elements.fire, earth: astroData.elements.earth, air: astroData.elements.air, water: astroData.elements.water }" :key="elem" class="flex items-center gap-3">
              <span class="w-16 text-xs capitalize" :class="getElementColor(elem as string)">{{ elem }}</span>
              <div class="flex-1 bg-slate-800 rounded-full h-2 overflow-hidden">
                <div class="h-full rounded-full transition-all" :class="getElementBg(elem as string)" :style="{ width: `${(count / 10) * 100}%` }"></div>
              </div>
              <span class="text-xs text-slate-500 w-6">{{ count }}</span>
            </div>
          </div>
          <div class="mt-4 p-3 bg-slate-950/50 rounded-lg text-xs">
            <span class="text-slate-400">Dominant: </span>
            <span class="font-bold capitalize" :class="getElementColor(astroData.elements.dominant)">{{ astroData.elements.dominant }}</span>
            <span class="text-slate-500 mx-2">|</span>
            <span class="text-slate-400">Lacking: </span>
            <span class="font-bold capitalize" :class="getElementColor(astroData.elements.lacking)">{{ astroData.elements.lacking }}</span>
          </div>
        </div>

        <!-- Modalities -->
        <div v-if="astroData.modalities" class="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg">
          <div class="flex items-center gap-2 mb-4 font-bold text-cyan-400">
            <Icon name="lucide:activity" :size="16" /> Modality Balance
          </div>
          <div class="space-y-2">
            <div v-for="(count, mod) in { cardinal: astroData.modalities.cardinal, fixed: astroData.modalities.fixed, mutable: astroData.modalities.mutable }" :key="mod" class="flex items-center gap-3">
              <span class="w-16 text-xs capitalize text-slate-300">{{ mod }}</span>
              <div class="flex-1 bg-slate-800 rounded-full h-2 overflow-hidden">
                <div class="h-full bg-cyan-500 rounded-full transition-all" :style="{ width: `${(count / 10) * 100}%` }"></div>
              </div>
              <span class="text-xs text-slate-500 w-6">{{ count }}</span>
            </div>
          </div>
          <div class="mt-4 p-3 bg-slate-950/50 rounded-lg text-xs">
            <span class="text-slate-400">Dominant: </span>
            <span class="font-bold capitalize text-cyan-300">{{ astroData.modalities.dominant }}</span>
            <span class="text-slate-500 ml-2">- {{ getModalityDesc(astroData.modalities.dominant) }}</span>
          </div>
        </div>
      </div>

      <!-- ===== NATAL POSITIONS ===== -->
      <div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
        <div class="p-4 bg-slate-950/50 border-b border-slate-800 flex items-center gap-2 font-bold text-yellow-400">
          <Icon name="lucide:star" :size="16" /> Natal Positions
          <span class="text-xs text-slate-500 font-normal ml-2">Click planet for details</span>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-xs text-left">
            <thead class="bg-slate-950/50 text-slate-500 uppercase text-[10px]">
              <tr>
                <th class="p-2">Planet</th>
                <th class="p-2">Position</th>
                <th class="p-2">Sign</th>
                <th class="p-2">Meaning</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800">
              <tr v-for="(item, i) in astroData.natal" :key="i" class="hover:bg-slate-800/50 cursor-pointer" @click="showPlanetInfo(item.planet)">
                <td class="p-3 font-bold" :style="{ color: item.planet.cssColor }">
                  <span class="flex items-center gap-2">
                    {{ item.planet.symbol }} {{ item.planet.name }}
                    <Icon name="lucide:info" :size="12" class="text-slate-600" />
                  </span>
                </td>
                <td class="p-3 text-slate-300 font-mono text-[11px]">{{ item.position }}</td>
                <td class="p-3">
                  <button @click.stop="showSignInfo(item.sign.name)" class="hover:underline" :style="{ color: item.sign.cssColor }">
                    {{ item.sign.symbol }} {{ item.sign.name }}
                  </button>
                </td>
                <td class="p-3 italic text-slate-500">{{ item.synthesis }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- ===== NATAL ASPECTS ===== -->
      <div v-if="astroData.natalAspects?.length" class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
        <div class="p-4 bg-slate-950/50 border-b border-slate-800 flex items-center gap-2 font-bold text-violet-400">
          <Icon name="lucide:link" :size="16" /> Natal Aspects
          <span class="text-xs text-slate-500 font-normal ml-2">Planetary relationships at birth</span>
        </div>
        <div class="p-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div v-for="(asp, i) in astroData.natalAspects" :key="i"
            class="p-3 rounded-lg border text-xs"
            :class="asp.aspectInfo?.nature === 'Harmonious' ? 'bg-emerald-950/30 border-emerald-800' : asp.aspectInfo?.nature === 'Challenging' ? 'bg-red-950/30 border-red-800' : 'bg-slate-800 border-slate-700'"
          >
            <div class="flex items-center gap-2 mb-1">
              <span :style="{ color: asp.planet1.cssColor }">{{ asp.planet1.symbol }}</span>
              <span class="text-slate-400">{{ asp.aspectInfo?.symbol }}</span>
              <span :style="{ color: asp.planet2.cssColor }">{{ asp.planet2.symbol }}</span>
              <span class="ml-auto text-[10px] px-2 py-0.5 rounded"
                :class="asp.aspectInfo?.nature === 'Harmonious' ? 'bg-emerald-900 text-emerald-200' : asp.aspectInfo?.nature === 'Challenging' ? 'bg-red-900 text-red-200' : 'bg-slate-700 text-slate-300'"
              >{{ asp.aspect }}</span>
            </div>
            <div class="text-slate-400">{{ asp.planet1.name }} - {{ asp.planet2.name }}</div>
          </div>
        </div>
      </div>

      <!-- ===== TRANSITS ===== -->
      <div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
        <div class="p-4 bg-slate-950/50 border-b border-slate-800 flex items-center gap-2 font-bold text-emerald-400">
          <Icon name="lucide:repeat" :size="16" /> Active Transits
          <span class="text-xs text-slate-500 font-normal ml-2">Today's planetary influences</span>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-xs text-left">
            <thead class="bg-slate-950/50 text-slate-500 uppercase text-[10px]">
              <tr>
                <th class="p-2">Transit Planet</th>
                <th class="p-2">Aspect</th>
                <th class="p-2">Natal Planet</th>
                <th class="p-2">Effect</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800">
              <tr v-for="(item, i) in astroData.transits" :key="i" class="hover:bg-slate-800/50">
                <td class="p-3 font-bold" :style="{ color: item.planet.cssColor }">
                  {{ item.planet.symbol }} {{ item.planet.name }}
                </td>
                <td class="p-3">
                  <span
                    class="px-2 py-0.5 rounded text-[10px] font-bold"
                    :class="{
                      'bg-emerald-900 text-emerald-200': item.insight === 'Harmonious',
                      'bg-red-900 text-red-200': item.insight === 'Challenging'
                    }"
                  >{{ item.aspect }}</span>
                </td>
                <td class="p-3 text-slate-300">{{ item.target.symbol }} {{ item.target.name }}</td>
                <td class="p-3 text-slate-500 italic">{{ item.insight }}</td>
              </tr>
              <tr v-if="!astroData.transits?.length">
                <td colspan="4" class="p-4 text-center text-slate-500">No major aspects today</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- ===== FUTURE & POWER CITIES ===== -->
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Future Predictions -->
        <div class="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-lg border-l-4 border-l-blue-500">
          <div class="flex items-center gap-2 mb-4 font-bold text-blue-400">
            <Icon name="lucide:trending-up" :size="16" /> Future Transits
          </div>
          <div class="space-y-3">
            <div
              v-for="(f, i) in astroData.future"
              :key="i"
              class="flex justify-between items-start text-sm border-b border-slate-800 pb-2 last:border-0"
            >
              <span class="text-blue-200 font-bold">{{ f.time }}</span>
              <span class="text-slate-400 text-right text-xs">{{ f.pred }}</span>
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
              <span class="font-bold block mb-1" :style="{ color: m.line.planet.cssColor }">{{ m.line.planet.symbol }} {{ m.line.planet.name }} Line:</span>
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

      <!-- ===== ASTROCARTOGRAPHY MAP ===== -->
      <div class="bg-[#0f172a] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative">
        <div class="absolute top-4 left-4 flex items-center gap-2 text-purple-400 font-bold text-sm bg-black/50 px-3 py-1 rounded-full pointer-events-none z-10">
          <Icon name="lucide:map" :size="14" /> Astrocartography Map
        </div>
        <AstroMap :linesData="astroData.lines" :cityPins="flatCities" />
      </div>

      <div class="text-center text-xs text-slate-600">
        <p>Astronomical Engine v2.0 - Real Planetary Calculations</p>
      </div>
    </div>

    <!-- ===== INFO MODAL ===== -->
    <InfoModal :show="showModal" :title="modalTitle" :icon="modalIcon" :color="modalColor" @close="showModal = false">
      <div v-if="modalContent" class="space-y-4">
        <!-- Description -->
        <p class="text-slate-300 text-sm">{{ modalContent.description }}</p>

        <!-- Keywords -->
        <div v-if="modalContent.keywords?.length">
          <div class="text-xs text-slate-500 uppercase mb-2">Keywords</div>
          <div class="flex flex-wrap gap-2">
            <span v-for="kw in modalContent.keywords" :key="kw" class="text-xs bg-slate-800 px-2 py-1 rounded">{{ kw }}</span>
          </div>
        </div>

        <!-- Planet specific -->
        <div v-if="modalContent.rules" class="grid grid-cols-2 gap-3 text-xs">
          <div><span class="text-slate-500">Rules:</span> <span class="text-slate-300">{{ modalContent.rules?.join(', ') }}</span></div>
          <div><span class="text-slate-500">Exalted:</span> <span class="text-emerald-400">{{ modalContent.exalted }}</span></div>
          <div><span class="text-slate-500">Detriment:</span> <span class="text-orange-400">{{ modalContent.detriment }}</span></div>
          <div><span class="text-slate-500">Fall:</span> <span class="text-red-400">{{ modalContent.fall }}</span></div>
        </div>

        <!-- Zodiac specific -->
        <div v-if="modalContent.strengths" class="space-y-3">
          <div>
            <div class="text-xs text-slate-500 uppercase mb-1">Strengths</div>
            <div class="flex flex-wrap gap-1">
              <span v-for="s in modalContent.strengths" :key="s" class="text-xs bg-emerald-900/50 text-emerald-300 px-2 py-0.5 rounded">{{ s }}</span>
            </div>
          </div>
          <div>
            <div class="text-xs text-slate-500 uppercase mb-1">Challenges</div>
            <div class="flex flex-wrap gap-1">
              <span v-for="c in modalContent.challenges" :key="c" class="text-xs bg-red-900/50 text-red-300 px-2 py-0.5 rounded">{{ c }}</span>
            </div>
          </div>
          <div v-if="modalContent.compatibility">
            <div class="text-xs text-slate-500 uppercase mb-1">Compatible with</div>
            <div class="text-sm text-slate-300">{{ modalContent.compatibility?.join(', ') }}</div>
          </div>
        </div>

        <!-- Chinese specific -->
        <div v-if="modalContent.yinYang" class="space-y-3">
          <div class="grid grid-cols-2 gap-3 text-xs">
            <div><span class="text-slate-500">Element:</span> <span class="text-slate-300">{{ modalContent.element }}</span></div>
            <div><span class="text-slate-500">Polarity:</span> <span class="text-slate-300">{{ modalContent.yinYang }}</span></div>
          </div>
          <div>
            <div class="text-xs text-slate-500 uppercase mb-1">Traits</div>
            <div class="flex flex-wrap gap-1">
              <span v-for="t in modalContent.traits" :key="t" class="text-xs bg-slate-800 px-2 py-0.5 rounded">{{ t }}</span>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <div class="text-xs text-slate-500 uppercase mb-1">Compatible</div>
              <div class="text-xs text-emerald-300">{{ modalContent.compatible?.join(', ') }}</div>
            </div>
            <div>
              <div class="text-xs text-slate-500 uppercase mb-1">Challenging</div>
              <div class="text-xs text-red-300">{{ modalContent.incompatible?.join(', ') }}</div>
            </div>
          </div>
          <div v-if="modalContent.luckyColors">
            <div class="text-xs text-slate-500 uppercase mb-1">Lucky Colors</div>
            <div class="text-xs text-slate-300">{{ modalContent.luckyColors?.join(', ') }}</div>
          </div>
        </div>
      </div>
    </InfoModal>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { AstroData, City, Planet, ZodiacSign } from '~/types/astro';
import {
  CITIES_DB,
  PLANETS,
  ZODIAC_DATA,
  normalizeLng,
  dateToJD,
  gmst,
  calculatePlanetaryPositions,
  mcLineLongitude,
  longitudeToSignIndex,
  calculateAspect,
  normalizeAngle,
  calculateMoonPhase,
  calculateLunarNodes,
  analyzeElements,
  analyzeModalities,
  getChineseZodiac,
  getChineseElement,
  ASPECTS
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

// Modal state
const showModal = ref(false);
const modalTitle = ref('');
const modalIcon = ref('');
const modalColor = ref('');
const modalContent = ref<any>(null);

const flatCities = computed(() => {
  if (!astroData.value) return [];
  return astroData.value.matches.flatMap(m => m.cities);
});

// Helper functions
const getElementColor = (elem: string) => {
  const colors: Record<string, string> = {
    fire: 'text-orange-400',
    earth: 'text-green-400',
    air: 'text-cyan-400',
    water: 'text-blue-400'
  };
  return colors[elem] || 'text-slate-400';
};

const getElementBg = (elem: string) => {
  const colors: Record<string, string> = {
    fire: 'bg-orange-500',
    earth: 'bg-green-500',
    air: 'bg-cyan-500',
    water: 'bg-blue-500'
  };
  return colors[elem] || 'bg-slate-500';
};

const getModalityDesc = (mod: string) => {
  const descs: Record<string, string> = {
    cardinal: 'Initiator, leader',
    fixed: 'Stabilizer, persistent',
    mutable: 'Adapter, flexible'
  };
  return descs[mod] || '';
};

// Modal functions
const showPlanetInfo = (planet: Planet) => {
  modalTitle.value = planet.name;
  modalIcon.value = planet.symbol;
  modalColor.value = planet.cssColor;
  modalContent.value = planet;
  showModal.value = true;
};

const showSignInfo = (signName: string) => {
  const sign = ZODIAC_DATA.find(z => z.name === signName);
  if (sign) {
    modalTitle.value = sign.name;
    modalIcon.value = sign.symbol || '';
    modalColor.value = sign.cssColor || '#a855f7';
    modalContent.value = sign;
    showModal.value = true;
  }
};

const showChineseInfo = () => {
  if (astroData.value?.chineseData) {
    const data = astroData.value.chineseData;
    modalTitle.value = data.animal;
    modalIcon.value = data.emoji;
    modalColor.value = '#ef4444';
    modalContent.value = data;
    showModal.value = true;
  }
};

// Form handlers
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

// Format degrees
const formatDegrees = (deg: number): string => {
  const d = Math.floor(deg);
  const m = Math.floor((deg - d) * 60);
  return `${d}°${m.toString().padStart(2, '0')}'`;
};

const getSignPosition = (longitude: number): string => {
  const sign = ZODIAC_DATA[longitudeToSignIndex(longitude)];
  const degInSign = normalizeAngle(longitude) % 30;
  return `${formatDegrees(degInSign)} ${sign.name}`;
};

// Main calculation
const handleSubmit = () => {
  loading.value = true;

  setTimeout(() => {
    try {
      const [year, month, day] = formData.value.date.split('-').map(Number);
      const [hour, minute] = formData.value.time.split(':').map(Number);
      const hourDecimal = hour + minute / 60;

      const birthJD = dateToJD(year, month, day, hourDecimal);
      const birthGMST = gmst(birthJD);
      const natalPositions = calculatePlanetaryPositions(birthJD);

      const today = new Date();
      const todayJD = dateToJD(today.getFullYear(), today.getMonth() + 1, today.getDate(), 12);
      const transitPositions = calculatePlanetaryPositions(todayJD);

      // Astrocartography Lines
      const lines = PLANETS.map((p, i) => {
        const planetLng = natalPositions[p.id];
        const mcLng = mcLineLongitude(planetLng, birthGMST);
        return {
          id: i,
          planet: p,
          type: 'MC',
          longitudeAngle: (planetLng * Math.PI) / 180,
          longitudeDegrees: mcLng,
          eclipticLongitude: planetLng,
          signPosition: getSignPosition(planetLng)
        };
      });

      // Natal Chart
      const natal = PLANETS.map(p => {
        const longitude = natalPositions[p.id];
        const signIndex = longitudeToSignIndex(longitude);
        const sign = ZODIAC_DATA[signIndex];
        const degInSign = normalizeAngle(longitude) % 30;
        const words = p.question.split(' ');
        const synthesis = `I ${words[2]} ${words[3]?.replace('?', '') || ''} ${sign.answer.toLowerCase()}`;
        return {
          planet: p,
          sign,
          synthesis,
          longitude,
          degInSign,
          position: getSignPosition(longitude)
        };
      });

      // Natal Aspects
      const natalAspects: any[] = [];
      for (let i = 0; i < PLANETS.length; i++) {
        for (let j = i + 1; j < PLANETS.length; j++) {
          const p1 = PLANETS[i];
          const p2 = PLANETS[j];
          const aspect = calculateAspect(natalPositions[p1.id], natalPositions[p2.id], 8);
          if (aspect) {
            natalAspects.push({
              planet1: p1,
              planet2: p2,
              aspect,
              aspectInfo: ASPECTS[aspect]
            });
          }
        }
      }

      // Transits
      const transits: any[] = [];
      const transitPlanets = PLANETS.slice(0, 5);
      for (const tPlanet of transitPlanets) {
        const tPos = transitPositions[tPlanet.id];
        for (const nPlanet of PLANETS) {
          if (tPlanet.id === nPlanet.id) continue;
          const nPos = natalPositions[nPlanet.id];
          const aspect = calculateAspect(tPos, nPos, 8);
          if (aspect) {
            transits.push({
              planet: tPlanet,
              aspect,
              target: nPlanet,
              transitPos: getSignPosition(tPos),
              natalPos: getSignPosition(nPos),
              insight: ['Conjunction', 'Trine', 'Sextile'].includes(aspect) ? "Harmonious" : "Challenging"
            });
          }
        }
      }

      // Future
      const future = [
        { time: "Next Month", planet: PLANETS[1], pred: `Moon cycle brings ${ZODIAC_DATA[longitudeToSignIndex(transitPositions.moon + 30)].name} energy.` },
        { time: "In 6 Months", planet: PLANETS[4], pred: `Mars enters ${ZODIAC_DATA[longitudeToSignIndex(transitPositions.mars + 90)].name} - action time.` },
        { time: "In 1 Year", planet: PLANETS[5], pred: `Jupiter in ${ZODIAC_DATA[longitudeToSignIndex(transitPositions.jupiter + 30)].name} expands horizons.` }
      ];

      // City Matches
      const matches = lines
        .map(line => ({
          line,
          cities: CITIES_DB.filter(c => Math.abs(normalizeLng(c.lng - line.longitudeDegrees)) < 15).slice(0, 4)
        }))
        .filter(m => m.cities.length > 0);

      // Lunar Analysis
      const nodes = calculateLunarNodes(birthJD);
      const currentPhase = calculateMoonPhase(transitPositions.sun, transitPositions.moon);
      const birthPhase = calculateMoonPhase(natalPositions.sun, natalPositions.moon);

      const lunar = {
        phase: currentPhase,
        age: 0,
        northNode: nodes.north,
        southNode: nodes.south,
        northNodeSign: ZODIAC_DATA[longitudeToSignIndex(nodes.north)].name,
        southNodeSign: ZODIAC_DATA[longitudeToSignIndex(nodes.south)].name,
        birthMoonPhase: birthPhase
      };

      // Element/Modality Analysis
      const signNames = natal.map(n => n.sign.name);
      const elements = analyzeElements(signNames);
      const modalities = analyzeModalities(signNames);

      // Chinese Zodiac
      const chineseZodiac = getChineseZodiac(year);
      const chineseElement = getChineseElement(year);

      astroData.value = {
        lines,
        natal,
        natalAspects,
        transits: transits.slice(0, 8),
        future,
        matches,
        chinese: chineseZodiac.name,
        chineseData: {
          animal: chineseZodiac.name,
          emoji: chineseZodiac.emoji,
          element: chineseElement,
          yinYang: chineseZodiac.yinYang,
          traits: chineseZodiac.traits,
          compatible: chineseZodiac.compatible,
          incompatible: chineseZodiac.incompatible,
          luckyNumbers: chineseZodiac.luckyNumbers,
          luckyColors: chineseZodiac.luckyColors,
          description: chineseZodiac.description
        },
        lunar,
        elements,
        modalities,
        birthJD,
        sunSign: ZODIAC_DATA[longitudeToSignIndex(natalPositions.sun)].name,
        moonSign: ZODIAC_DATA[longitudeToSignIndex(natalPositions.moon)].name,
        risingApprox: ZODIAC_DATA[longitudeToSignIndex(birthGMST + selectedCity.value.lng)].name
      };

      loading.value = false;
    } catch (err) {
      console.error('Error generating astro data:', err);
      loading.value = false;
    }
  }, 500);
};

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

.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: #1e293b;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #475569;
  border-radius: 2px;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes zoom-in {
  from { transform: scale(0.95); }
  to { transform: scale(1); }
}

@keyframes slide-in-from-bottom {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
</style>
