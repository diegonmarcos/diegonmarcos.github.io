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

// Calculate orbit radius for each planet (concentric rings)
const getOrbitRadius = (index: number, total: number) => {
  const minRadius = 100
  const maxRadius = 280
  return minRadius + ((index / (total - 1)) * (maxRadius - minRadius))
}

// Get orbit tilt angle for varied orbital planes
const getOrbitTilt = (index: number) => {
  // Each orbit has different tilt for 3D effect
  const tilts = [75, 70, 80, 65, 85, 72]
  return tilts[index % tilts.length]
}

// Get orbit animation speed (inner planets faster)
const getOrbitSpeed = (index: number) => {
  return 12 + index * 4
}

// Get starting rotation offset for each planet
const getOrbitOffset = (index: number) => {
  // Spread planets around their orbits
  return index * 60
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

      <!-- Orbital Rings -->
      <div
        v-for="(pt, index) in spherePoints"
        :key="'orbit-' + pt.id"
        class="orbit-ring"
        :style="{
          width: getOrbitRadius(index, spherePoints.length) * 2 + 'px',
          height: getOrbitRadius(index, spherePoints.length) * 2 + 'px',
          transform: 'translate(-50%, -50%) rotateX(' + getOrbitTilt(index) + 'deg)',
          '--ring-color': pt.accentColor
        }"
      />

      <!-- Planets in orbit -->
      <div
        v-for="(pt, index) in spherePoints"
        :key="pt.id"
        class="planet-orbit"
        :style="{
          animationDuration: getOrbitSpeed(index) + 's',
          transform: 'rotateX(' + getOrbitTilt(index) + 'deg) rotateZ(' + getOrbitOffset(index) + 'deg)'
        }"
      >
        <div
          class="planet"
          :style="{
            transform: 'translateX(' + getOrbitRadius(index, spherePoints.length) + 'px)',
            '--planet-color': pt.accentColor,
            '--planet-glow': pt.accentColor + '60'
          }"
        >
          <div
            class="planet-face"
            :style="{
              transform: 'rotateZ(' + (-getOrbitOffset(index)) + 'deg) rotateX(' + (-getOrbitTilt(index)) + 'deg) rotateX(' + (-rotation.x) + 'deg) rotateY(' + (-rotation.y) + 'deg)'
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
