<template>
  <div id="app">
    <Header :current-page="currentPage" @change-page="handlePageChange" />

    <Transition name="fade" mode="out-in">
      <LandingPage v-if="currentPage === 'landing'" key="landing" @change-page="handlePageChange" />
      <VCPage v-else-if="currentPage === 'vc'" key="vc" />
      <AdvisoryPage v-else-if="currentPage === 'advisory'" key="advisory" />
      <ConsultingPage v-else-if="currentPage === 'consulting'" key="consulting" />
    </Transition>

    <Footer :current-page="currentPage" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import LandingPage from './views/LandingPage.vue'
import VCPage from './views/VCPage.vue'
import AdvisoryPage from './views/AdvisoryPage.vue'
import ConsultingPage from './views/ConsultingPage.vue'
import type { PageType } from './types'

const validPages: PageType[] = ['landing', 'vc', 'advisory', 'consulting']

const getPageFromHash = (): PageType => {
  const hash = window.location.hash.slice(1)
  return validPages.includes(hash as PageType) ? (hash as PageType) : 'landing'
}

const currentPage = ref<PageType>(getPageFromHash())

const handlePageChange = (page: PageType) => {
  if (page !== currentPage.value) {
    currentPage.value = page
    window.history.pushState({ page }, '', `#${page}`)
  }
}

const handlePopState = (event: PopStateEvent) => {
  if (event.state?.page && validPages.includes(event.state.page)) {
    currentPage.value = event.state.page
  } else {
    currentPage.value = getPageFromHash()
  }
}

onMounted(() => {
  // Set initial state
  window.history.replaceState({ page: currentPage.value }, '', `#${currentPage.value}`)
  window.addEventListener('popstate', handlePopState)
})

onUnmounted(() => {
  window.removeEventListener('popstate', handlePopState)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
