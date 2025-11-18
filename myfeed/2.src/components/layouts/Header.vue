<script setup lang="ts">
import { Search, SlidersHorizontal, Moon, Sun, Heart, Bookmark } from 'lucide-vue-next'
import { useFeedStore } from '@/stores/feedStore'
import type { FeedFilterType } from '@/types/feed'

const feedStore = useFeedStore()

const filterOptions: { value: FeedFilterType; label: string; emoji: string }[] = [
  { value: 'all', label: 'All', emoji: '📚' },
  { value: 'markdown', label: 'Articles', emoji: '📝' },
  { value: 'youtube', label: 'Videos', emoji: '📺' },
  { value: 'article', label: 'Links', emoji: '🌐' },
  { value: 'tweet', label: 'Tweets', emoji: '𝕏' },
  { value: 'rss', label: 'RSS', emoji: '📡' },
]

const searchQuery = computed({
  get: () => feedStore.searchQuery,
  set: (value) => feedStore.setSearchQuery(value),
})

function selectFilter(type: FeedFilterType) {
  feedStore.setFilterType(type)
}
</script>

<template>
  <header class="glass-strong sticky top-0 z-50 border-b border-white/10">
    <div class="max-w-[1200px] mx-auto px-4 py-4">
      <!-- Top Row: Logo and Actions -->
      <div class="flex items-center justify-between mb-4">
        <!-- Logo -->
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-accent to-obsidian-600 flex items-center justify-center">
            <span class="text-2xl">🌟</span>
          </div>
          <div>
            <h1 class="text-2xl font-bold text-gradient-purple">
              MyFeed
            </h1>
            <p class="text-xs text-white/50">
              Your Content Hub
            </p>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-3">
          <!-- Stats -->
          <div class="hidden md:flex items-center gap-4 text-sm text-white/60">
            <div class="flex items-center gap-1">
              <Heart class="w-4 h-4" />
              <span>{{ feedStore.likeCount }}</span>
            </div>
            <div class="flex items-center gap-1">
              <Bookmark class="w-4 h-4" />
              <span>{{ feedStore.bookmarkCount }}</span>
            </div>
          </div>

          <!-- Theme Toggle -->
          <button
            class="p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
            @click="feedStore.toggleTheme()"
          >
            <Moon
              v-if="feedStore.theme === 'dark'"
              class="w-5 h-5"
            />
            <Sun
              v-else
              class="w-5 h-5"
            />
          </button>
        </div>
      </div>

      <!-- Search Bar -->
      <div class="relative mb-4">
        <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search content..."
          class="input-glass w-full pl-10 pr-4"
        />
      </div>

      <!-- Filter Chips -->
      <div class="flex items-center gap-2 overflow-x-auto scrollbar-thin pb-2">
        <button
          v-for="filter in filterOptions"
          :key="filter.value"
          :class="[
            'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap',
            feedStore.selectedType === filter.value
              ? 'bg-violet-accent text-white shadow-glow-purple'
              : 'bg-white/10 text-white/70 hover:bg-white/15',
          ]"
          @click="selectFilter(filter.value)"
        >
          <span>{{ filter.emoji }}</span>
          <span>{{ filter.label }}</span>
        </button>
      </div>
    </div>
  </header>
</template>
