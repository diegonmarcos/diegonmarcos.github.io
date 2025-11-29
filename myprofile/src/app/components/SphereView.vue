<script setup lang="ts">
import type { SpherePoint, Rotation } from '~/types'

defineProps<{
  spherePoints: SpherePoint[]
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

// Golden angle for Fibonacci sphere distribution
const PHI = Math.PI * (3 - Math.sqrt(5))

// Calculate 3D spherical position for each planet using Fibonacci sphere
const getPlanetPosition = (index: number, total: number) => {
  const radius = 200 // Base sphere radius

  // Fibonacci sphere distribution for even spacing
  const y = 1 - (index / (total - 1)) * 2 // Range from 1 to -1
  const radiusAtY = Math.sqrt(1 - y * y)
  const theta = PHI * index

  const x = Math.cos(theta) * radiusAtY * radius
  const z = Math.sin(theta) * radiusAtY * radius
  const yPos = y * radius

  return { x, y: yPos, z }
}

// Get orbit tilt angle based on position (varied orbital planes)
const getOrbitTilt = (index: number) => {
  // Vary tilt between 60-85 degrees for visual interest
  return 65 + (index % 3) * 8
}

// Get orbit animation speed (different speeds for variety)
const getOrbitSpeed = (index: number) => {
  return 20 + (index * 7) % 15
}
</script>

<template>
  <div
    class="sphere-viewport fade-in"
    @mousedown="$emit('mousedown', $event)"
    @mousemove="$emit('mousemove', $event)"
    @mouseup="$emit('mouseup')"
    @mouseleave="$emit('mouseleave')"
    @touchstart="$emit('touchstart', $event)"
    @touchmove.prevent="$emit('touchmove', $event)"
    @touchend="$emit('touchend')"
  >
    <div class="sphere-instruction">
      <Icon name="lucide:orbit" class="anim-icon" />
      DRAG TO EXPLORE THE UNIVERSE
    </div>
    <div
      class="sphere-scene solar-system"
      :style="{
        transform: 'rotateX(' + rotation.x + 'deg) rotateY(' + rotation.y + 'deg)'
      }"
    >
      <!-- Central Sun -->
      <div class="sun">
        <div class="sun-core" />
        <div class="sun-corona" />
        <div class="sun-flare" />
      </div>

      <!-- Planets positioned in 3D space using Fibonacci sphere -->
      <div
        v-for="(pt, index) in spherePoints"
        :key="pt.id"
        class="planet-3d"
        :style="{
          transform: `translate3d(${getPlanetPosition(index, spherePoints.length).x}px, ${getPlanetPosition(index, spherePoints.length).y}px, ${getPlanetPosition(index, spherePoints.length).z}px)`,
          '--planet-color': pt.accentColor,
          '--planet-glow': pt.accentColor + '60',
          animationDuration: getOrbitSpeed(index) + 's',
          animationDelay: (index * -3) + 's'
        }"
      >
        <div
          class="planet-face"
          :style="{
            transform: 'rotateY(' + (-rotation.y) + 'deg) rotateX(' + (-rotation.x) + 'deg)'
          }"
        >
          <div class="planet-body" :style="{ borderColor: pt.accentColor, boxShadow: '0 0 20px ' + pt.accentColor + ', inset 0 0 15px ' + pt.accentColor + '40' }">
            <Icon
              :name="'lucide:' + pt.icon"
              :size="22"
              :style="{ color: pt.accentColor }"
            />
          </div>
          <span class="planet-label" :style="{ color: pt.accentColor }">
            {{ pt.platform }}
          </span>
        </div>
      </div>

      <!-- Starfield background particles -->
      <div class="starfield">
        <div v-for="n in 50" :key="'star-' + n" class="star" :style="{
          '--x': Math.random() * 600 - 300 + 'px',
          '--y': Math.random() * 600 - 300 + 'px',
          '--z': Math.random() * 400 - 200 + 'px',
          '--delay': Math.random() * 3 + 's',
          '--size': Math.random() * 2 + 1 + 'px'
        }" />
      </div>
    </div>
  </div>
</template>
