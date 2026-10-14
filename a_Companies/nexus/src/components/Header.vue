<template>
  <header class="fixed top-0 w-full z-50 transition-all duration-300" :class="navClasses">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <!-- Logo -->
      <div
        @click="emit('changePage', 'landing')"
        class="cursor-pointer text-xl font-bold tracking-widest uppercase"
        :class="logoColor"
      >
        NEXUS<span class="opacity-50">HOLDINGS</span>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-8 text-sm font-semibold tracking-wide" :class="navTextColor">
        <button @click="emit('changePage', 'vc')" class="hover:opacity-60 transition">Ventures</button>
        <button @click="emit('changePage', 'advisory')" class="hover:opacity-60 transition">Advisory</button>
        <button @click="emit('changePage', 'consulting')" class="hover:opacity-60 transition">Consulting</button>
      </nav>

      <!-- Mobile Menu Button -->
      <button @click="emit('changePage', 'landing')" class="md:hidden">
        <PhHouse :size="24" :class="navTextColor" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { PhHouse } from '@phosphor-icons/vue'
import type { PageType } from '../types'

interface Props {
  currentPage: PageType
}

const props = defineProps<Props>()
const emit = defineEmits<{
  changePage: [page: PageType]
}>()

const navClasses = computed(() => {
  switch (props.currentPage) {
    case 'vc':
      return 'bg-[#0A0E27]/90 backdrop-blur border-b border-indigo-500/20'
    case 'advisory':
      return 'bg-[#0A1628]/90 backdrop-blur border-b border-advisory-gold/20'
    case 'consulting':
      return 'bg-[#1C1C1C]/90 backdrop-blur border-b border-emerald-500/20'
    default:
      return 'bg-transparent text-white' // Landing
  }
})

const navTextColor = computed(() => {
  return 'text-white'
})

const logoColor = computed(() => {
  return 'text-white'
})
</script>
