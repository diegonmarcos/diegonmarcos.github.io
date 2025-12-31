<script setup lang="ts">
import type { Rotation } from '~/types'

defineProps<{
  rotation: Rotation
}>()

defineEmits<{
  (e: 'mousedown', event: MouseEvent): void
  (e: 'mousemove', event: MouseEvent): void
  (e: 'mouseup'): void
  (e: 'mouseleave'): void
  (e: 'touchstart', event: TouchEvent): void
  (e: 'touchmove', event: TouchEvent): void
  (e: 'touchend'): void
}>()

// Realistic Solar System Data
const planets = [
  { id: 'mercury', name: 'MERCURY', color: '#b5b5b5', size: 8, orbit: 60, speed: 8, tilt: 7 },
  { id: 'venus', name: 'VENUS', color: '#e6c87a', size: 12, orbit: 90, speed: 12, tilt: 3.4 },
  { id: 'earth', name: 'EARTH', color: '#6b93d6', size: 13, orbit: 120, speed: 16, tilt: 23.4 },
  { id: 'mars', name: 'MARS', color: '#c1440e', size: 10, orbit: 150, speed: 20, tilt: 25.2 },
  { id: 'jupiter', name: 'JUPITER', color: '#d8ca9d', size: 28, orbit: 195, speed: 28, tilt: 3.1 },
  { id: 'saturn', name: 'SATURN', color: '#f4d59e', size: 24, orbit: 245, speed: 36, tilt: 26.7, hasRings: true },
  { id: 'uranus', name: 'URANUS', color: '#d1e7e7', size: 16, orbit: 285, speed: 48, tilt: 97.8 },
  { id: 'neptune', name: 'NEPTUNE', color: '#5b5ddf', size: 15, orbit: 320, speed: 60, tilt: 28.3 }
]
</script>

<template>
  <div
    class="solar-viewport fade-in"
    @mousedown="$emit('mousedown', $event)"
    @mousemove="$emit('mousemove', $event)"
    @mouseup="$emit('mouseup')"
    @mouseleave="$emit('mouseleave')"
    @touchstart="$emit('touchstart', $event)"
    @touchmove.prevent="$emit('touchmove', $event)"
    @touchend="$emit('touchend')"
  >
    <div class="solar-instruction">
      <Icon name="lucide:rotate-3d" class="anim-icon" />
      DRAG TO EXPLORE THE SOLAR SYSTEM
    </div>

    <div
      class="solar-system-scene"
      :style="{
        transform: 'rotateX(' + (rotation.x + 60) + 'deg) rotateZ(' + rotation.y + 'deg)'
      }"
    >
      <!-- Sun -->
      <div class="sun-star">
        <div class="sun-surface" />
        <div class="sun-corona-1" />
        <div class="sun-corona-2" />
        <div class="sun-glow" />
      </div>

      <!-- Orbital Paths -->
      <div
        v-for="planet in planets"
        :key="'orbit-' + planet.id"
        class="orbital-path"
        :style="{
          width: planet.orbit * 2 + 'px',
          height: planet.orbit * 2 + 'px'
        }"
      />

      <!-- Planets -->
      <div
        v-for="planet in planets"
        :key="planet.id"
        class="planet-container"
        :style="{
          '--orbit-radius': planet.orbit + 'px',
          '--orbit-speed': planet.speed + 's',
          '--planet-size': planet.size + 'px',
          '--planet-color': planet.color,
          '--planet-tilt': planet.tilt + 'deg'
        }"
      >
        <div class="planet-orbit-wrapper">
          <div class="planet-body" :class="{ 'has-rings': planet.hasRings }">
            <div class="planet-sphere" />
            <div v-if="planet.hasRings" class="saturn-rings" />
            <span class="planet-name">{{ planet.name }}</span>
          </div>
        </div>
      </div>

      <!-- Asteroid Belt (between Mars and Jupiter) -->
      <div class="asteroid-belt">
        <div v-for="n in 40" :key="'asteroid-' + n" class="asteroid" :style="{
          '--angle': (n * 9) + 'deg',
          '--distance': (165 + Math.random() * 20) + 'px',
          '--size': (1 + Math.random() * 2) + 'px',
          '--delay': (Math.random() * 30) + 's'
        }" />
      </div>

      <!-- Stars Background -->
      <div class="star-field">
        <div v-for="n in 80" :key="'star-' + n" class="distant-star" :style="{
          '--x': (Math.random() * 800 - 400) + 'px',
          '--y': (Math.random() * 800 - 400) + 'px',
          '--z': (Math.random() * 300 - 150) + 'px',
          '--twinkle-delay': (Math.random() * 4) + 's',
          '--star-size': (Math.random() * 2 + 0.5) + 'px'
        }" />
      </div>
    </div>
  </div>
</template>
