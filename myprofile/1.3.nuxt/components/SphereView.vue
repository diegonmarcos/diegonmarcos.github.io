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
}>()
</script>

<template>
  <div
    class="sphere-viewport fade-in"
    @mousedown="$emit('mousedown', $event)"
    @mousemove="$emit('mousemove', $event)"
    @mouseup="$emit('mouseup')"
    @mouseleave="$emit('mouseleave')"
  >
    <div class="sphere-instruction">
      <Icon name="lucide:box" class="anim-icon" />
      DRAG TO ROTATE
    </div>
    <div
      class="sphere-scene"
      :style="{
        transform: 'rotateX(' + rotation.x + 'deg) rotateY(' + rotation.y + 'deg)'
      }"
    >
      <div class="core-glow" />
      <div
        v-for="pt in spherePoints"
        :key="pt.id"
        class="sphere-node"
        :style="{
          transform: 'translate3d(' + (pt.pos[0] * 250) + 'px, ' + (pt.pos[1] * 250) + 'px, ' + (pt.pos[2] * 250) + 'px)',
          borderColor: pt.accentColor
        }"
      >
        <div
          class="node-face"
          :style="{
            transform: 'rotateY(' + (-rotation.y) + 'deg) rotateX(' + (-rotation.x) + 'deg)'
          }"
        >
          <Icon
            :name="'lucide:' + pt.icon"
            :size="20"
            :style="{ color: pt.accentColor }"
          />
          <span class="node-label" :style="{ color: pt.accentColor }">
            {{ pt.platform }}
          </span>
        </div>
      </div>
      <div class="holo-ring r1" />
      <div class="holo-ring r2" />
    </div>
  </div>
</template>
