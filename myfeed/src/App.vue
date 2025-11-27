<script setup lang="ts">
import { onMounted } from 'vue'
import { onCLS, onFID, onLCP } from 'web-vitals'
import Header from './layouts/Header.vue'
import FeedContainer from './components/features/feed/FeedContainer.vue'
import RssSidebar from './components/features/feed/RssSidebar.vue'

// Track Core Web Vitals
onMounted(() => {
  onCLS((metric) => console.log('CLS:', metric))
  onFID((metric) => console.log('FID:', metric))
  onLCP((metric) => console.log('LCP:', metric))
})
</script>

<template>
  <div class="min-h-screen pixel-scanlines">
    <!-- Toast Notifications -->
    <Toaster
      position="top-right"
      :theme="'dark'"
      :duration="2000"
    />

    <!-- Header -->
    <Header />

    <!-- Linktree Button -->
    <div class="max-w-[1400px] mx-auto px-4 py-3">
      <a href="https://linktree.diegonmarcos.com" target="_blank" rel="noopener"
         class="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-accent/50 rounded-lg transition-all duration-300 hover:-translate-y-0.5 group">
        <span>🔗</span>
        <span class="text-sm font-pixel-body text-white/60 group-hover:text-violet-accent transition-colors">Diego Marcos</span>
        <svg class="w-3 h-3 text-white/30 group-hover:text-violet-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
        </svg>
      </a>
    </div>

    <!-- Two-Column Layout -->
    <main class="main-container">
      <div class="two-column-layout">
        <!-- Left Column: Main Feed (Videos, Images, Texts) -->
        <div class="main-feed-column">
          <FeedContainer :exclude-types="['rss']" />
        </div>

        <!-- Right Column: RSS Feed Updates -->
        <aside class="rss-sidebar-column">
          <RssSidebar />
        </aside>
      </div>
    </main>

    <!-- Footer -->
    <footer class="mt-12 py-8 border-t border-white/10 pixel-border-top">
      <div class="max-w-[1400px] mx-auto px-4 text-center">
        <div class="flex items-center justify-center gap-2 mb-4">
          <div class="pixel-logo w-10 h-10 rounded-lg bg-gradient-to-br from-violet-accent to-obsidian-600 flex items-center justify-center">
            <span class="text-xl">🍎</span>
          </div>
          <span class="text-lg font-pixel text-gradient-purple">MyFeed</span>
        </div>

        <p class="text-sm text-white/50 mb-4 font-pixel-body">
          Apple Glassy Pixel Art Edition
        </p>

        <div class="flex items-center justify-center gap-6 text-xs text-white/40 font-pixel-body">
          <span>Vue 3 + TypeScript</span>
          <span class="pixel-dot">◆</span>
          <span>Tailwind CSS</span>
          <span class="pixel-dot">◆</span>
          <span>RSS Ready</span>
        </div>

        <div class="mt-6 space-x-2">
          <span class="badge badge-pixel">v2.0.0</span>
          <span class="badge badge-pixel">Pixel Art ✨</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.main-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
}

.two-column-layout {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 2rem;
  align-items: start;
}

.main-feed-column {
  min-width: 0;
}

.rss-sidebar-column {
  /* No sticky - let it flow naturally to show all content */
}

/* Responsive: Stack on smaller screens */
@media (max-width: 1024px) {
  .two-column-layout {
    grid-template-columns: 1fr;
  }

  .rss-sidebar-column {
    position: relative;
    top: 0;
    max-height: none;
    order: -1;
    margin-bottom: 1rem;
  }
}
</style>
