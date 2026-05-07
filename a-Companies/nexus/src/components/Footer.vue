<template>
  <footer v-if="currentPage !== 'landing'" class="py-8 text-center text-xs opacity-50" :class="footerClasses">
    &copy; 2023 Nexus Holdings. All Rights Reserved.
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { PageType } from '../types'

interface Props {
  currentPage: PageType
}

const props = defineProps<Props>()

const footerClasses = computed(() => {
  if (props.currentPage === 'vc') return 'text-white bg-[#0A0E27]'
  if (props.currentPage === 'advisory') return 'text-white bg-[#0A1628]'
  return 'text-white bg-[#1C1C1C]'
})
</script>
