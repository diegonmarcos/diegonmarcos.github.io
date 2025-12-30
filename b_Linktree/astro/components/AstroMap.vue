<template>
  <div class="relative w-full h-[400px] bg-slate-900 rounded-xl border border-slate-700 overflow-hidden">
    <svg
      viewBox="-180 -90 360 180"
      class="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <!-- Background -->
      <rect x="-180" y="-90" width="360" height="180" fill="#0f172a" />

      <!-- Grid lines -->
      <g stroke="#334155" stroke-width="0.3" opacity="0.5">
        <!-- Latitude lines -->
        <line v-for="lat in [-60, -30, 0, 30, 60]" :key="'lat'+lat"
              x1="-180" :y1="-lat" x2="180" :y2="-lat" />
        <!-- Longitude lines -->
        <line v-for="lng in [-150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150]" :key="'lng'+lng"
              :x1="lng" y1="-90" :x2="lng" y2="90" />
      </g>

      <!-- Simplified continents -->
      <g fill="#1e293b" stroke="#475569" stroke-width="0.5">
        <!-- North America -->
        <path d="M-160,10 L-130,10 L-100,30 L-80,50 L-60,45 L-50,30 L-80,20 L-100,25 L-130,40 L-160,35 Z" />
        <!-- South America -->
        <path d="M-80,-10 L-60,-5 L-40,-30 L-35,-55 L-55,-55 L-70,-35 L-80,-20 Z" />
        <!-- Europe -->
        <path d="M-10,35 L10,40 L30,55 L50,55 L40,45 L20,40 L0,35 Z" />
        <!-- Africa -->
        <path d="M-20,30 L20,30 L35,0 L30,-35 L10,-35 L-10,-20 L-20,10 Z" />
        <!-- Asia -->
        <path d="M40,55 L80,70 L130,65 L150,50 L140,30 L100,20 L60,25 L50,40 Z" />
        <!-- Australia -->
        <path d="M110,-15 L150,-20 L155,-40 L130,-45 L110,-35 Z" />
      </g>

      <!-- Astro lines -->
      <g v-for="line in linesData" :key="line.id">
        <line
          :x1="line.longitudeDegrees"
          y1="-90"
          :x2="line.longitudeDegrees"
          y2="90"
          :stroke="line.planet.cssColor"
          stroke-width="1.5"
          opacity="0.6"
        />
        <!-- Line label -->
        <text
          :x="line.longitudeDegrees"
          y="-80"
          :fill="line.planet.cssColor"
          font-size="6"
          text-anchor="middle"
          class="font-bold"
        >
          {{ line.planet.symbol }}
        </text>
      </g>

      <!-- City pins -->
      <g v-for="(city, i) in cityPins" :key="'city'+i">
        <circle
          :cx="city.lng"
          :cy="-city.lat"
          r="3"
          fill="#ffffff"
          stroke="#a855f7"
          stroke-width="1"
        />
        <text
          :x="city.lng + 4"
          :y="-city.lat + 2"
          fill="#e2e8f0"
          font-size="4"
        >
          {{ city.name.split(',')[0] }}
        </text>
      </g>
    </svg>

    <!-- Legend -->
    <div class="absolute bottom-2 left-2 bg-slate-950/80 rounded-lg px-3 py-2 text-xs">
      <div class="flex flex-wrap gap-2">
        <span
          v-for="line in linesData?.slice(0, 5)"
          :key="'legend'+line.id"
          class="flex items-center gap-1"
        >
          <span
            class="w-2 h-2 rounded-full"
            :style="{ backgroundColor: line.planet.cssColor }"
          ></span>
          <span class="text-slate-400">{{ line.planet.name }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AstroLine, City } from '~/types/astro';

interface Props {
  linesData?: AstroLine[];
  cityPins?: City[];
}

defineProps<Props>();
</script>
