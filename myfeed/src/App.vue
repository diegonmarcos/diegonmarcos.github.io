<script setup lang="ts">
import { onMounted } from 'vue'
import { onCLS, onFID, onLCP } from 'web-vitals'
import Header from './layouts/Header.vue'
import FeedContainer from './components/features/feed/FeedContainer.vue'

// Track Core Web Vitals
onMounted(() => {
  onCLS((metric) => console.log('CLS:', metric))
  onFID((metric) => console.log('FID:', metric))
  onLCP((metric) => console.log('LCP:', metric))
})
</script>

<template>
  <div class="min-h-screen">
    <!-- Toast Notifications -->
    <Toaster
      position="top-right"
      :theme="'dark'"
      :duration="2000"
    />

    <!-- Header -->
    <Header />

    <!-- Main Feed -->
    <main>
      <FeedContainer />
    </main>

    <!-- Footer -->
    <footer class="mt-20 py-8 border-t border-white/10">
      <div class="max-w-[900px] mx-auto px-4 text-center">
        <div class="flex items-center justify-center gap-2 mb-4">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-accent to-obsidian-600 flex items-center justify-center">
            <span class="text-lg">🌟</span>
          </div>
          <span class="text-lg font-semibold text-gradient-purple">MyFeed</span>
        </div>

        <p class="text-sm text-white/50 mb-4">
          Your modern content aggregation platform
        </p>

        <div class="flex items-center justify-center gap-6 text-xs text-white/40">
          <span>Vue 3 + TypeScript</span>
          <span>•</span>
          <span>Tailwind CSS</span>
          <span>•</span>
          <span>Sanity.io Ready</span>
        </div>

        <div class="mt-6 space-x-2">
          <span class="badge badge-purple">v1.0.0</span>
          <span class="badge badge-purple">All Phases Complete ✅</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Additional component-specific styles if needed */
</style>
