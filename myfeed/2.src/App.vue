<script setup lang="ts">
import { onMounted } from 'vue'
import { onCLS, onFID, onLCP } from 'web-vitals'

// Track Core Web Vitals
onMounted(() => {
  onCLS(console.log)
  onFID(console.log)
  onLCP(console.log)
})
</script>

<template>
  <div class="min-h-screen">
    <!-- Toaster for notifications -->
    <Toaster position="top-right" :theme="'dark'" />

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
      <!-- Hero Section -->
      <div class="text-center py-20">
        <h1 class="text-6xl font-bold mb-6 text-gradient-purple">
          MyFeed
        </h1>
        <p class="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
          Your modern content aggregation platform with obsidian purple theme
        </p>

        <!-- Glass Card Demo -->
        <div class="glass-card glass-hover max-w-2xl mx-auto p-8">
          <h2 class="text-2xl font-semibold mb-4">🎨 Glass Morphism Design</h2>
          <p class="text-white/80 mb-4">
            MyFeed combines the elegant obsidian purple palette with stunning glass-morphic effects.
          </p>

          <!-- Feature Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div class="glass-subtle p-4 rounded-xl">
              <div class="text-3xl mb-2">📝</div>
              <h3 class="font-semibold mb-1">Markdown</h3>
              <p class="text-sm text-white/60">Rich articles</p>
            </div>

            <div class="glass-subtle p-4 rounded-xl">
              <div class="text-3xl mb-2">📺</div>
              <h3 class="font-semibold mb-1">YouTube</h3>
              <p class="text-sm text-white/60">Video embeds</p>
            </div>

            <div class="glass-subtle p-4 rounded-xl">
              <div class="text-3xl mb-2">🌐</div>
              <h3 class="font-semibold mb-1">Articles</h3>
              <p class="text-sm text-white/60">External links</p>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex gap-4 justify-center mt-8">
            <button class="btn-primary">
              Get Started
            </button>
            <button class="btn-glass">
              Learn More
            </button>
          </div>
        </div>

        <!-- Status Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
          <!-- Stack Info -->
          <div class="glass-card p-6 text-left">
            <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
              <span class="text-2xl">⚡</span>
              Tech Stack
            </h3>
            <ul class="space-y-2 text-sm text-white/70">
              <li class="flex items-center gap-2">
                <span class="text-violet-accent">✓</span>
                Vue 3 + TypeScript
              </li>
              <li class="flex items-center gap-2">
                <span class="text-violet-accent">✓</span>
                Tailwind CSS + Glass Morphism
              </li>
              <li class="flex items-center gap-2">
                <span class="text-violet-accent">✓</span>
                Sanity.io Headless CMS
              </li>
              <li class="flex items-center gap-2">
                <span class="text-violet-accent">✓</span>
                Auto-Animate + Orama Search
              </li>
            </ul>
          </div>

          <!-- Features -->
          <div class="glass-card p-6 text-left">
            <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
              <span class="text-2xl">✨</span>
              Features
            </h3>
            <ul class="space-y-2 text-sm text-white/70">
              <li class="flex items-center gap-2">
                <span class="text-violet-accent">✓</span>
                Multi-platform publishing
              </li>
              <li class="flex items-center gap-2">
                <span class="text-violet-accent">✓</span>
                Full-text search
              </li>
              <li class="flex items-center gap-2">
                <span class="text-violet-accent">✓</span>
                Virtual scrolling
              </li>
              <li class="flex items-center gap-2">
                <span class="text-violet-accent">✓</span>
                Privacy-friendly analytics
              </li>
            </ul>
          </div>
        </div>

        <!-- Footer Status -->
        <div class="mt-12 text-sm text-white/50">
          <p>
            <span class="badge badge-purple">Phase 1: Foundation Complete</span>
          </p>
          <p class="mt-2">
            Next: Building feed components...
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Additional component-specific styles if needed */
</style>
