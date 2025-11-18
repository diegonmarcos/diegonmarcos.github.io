<script setup lang="ts">
import { useAutoAnimate } from '@formkit/auto-animate/vue'
import { useFeedStore } from '@/stores/feedStore'
import { sampleFeed } from '@/data/sampleFeed'
import type { FeedItem } from '@/types/feed'
import MarkdownCard from '../cards/MarkdownCard.vue'
import YouTubeCard from '../cards/YouTubeCard.vue'
import ArticleCard from '../cards/ArticleCard.vue'
import TweetCard from '../cards/TweetCard.vue'
import RSSCard from '../cards/RSSCard.vue'

const feedStore = useFeedStore()

// Auto-animate container
const [parent] = useAutoAnimate()

// Feed items
const items = ref<FeedItem[]>(sampleFeed)

// Filtered and sorted items
const filteredItems = computed(() => {
  return feedStore.filterItems(items.value)
})

// Handle likes and bookmarks
function handleLike(item: FeedItem) {
  feedStore.toggleLike(item.id)
  // Update item likes count
  const index = items.value.findIndex(i => i.id === item.id)
  if (index !== -1) {
    items.value[index].likes += feedStore.isLiked(item.id) ? 1 : -1
    items.value[index].isLiked = feedStore.isLiked(item.id)
  }
}

function handleBookmark(item: FeedItem) {
  feedStore.toggleBookmark(item.id)
  const index = items.value.findIndex(i => i.id === item.id)
  if (index !== -1) {
    items.value[index].isBookmarked = feedStore.isBookmarked(item.id)
  }
}

// Get component for feed item type
function getCardComponent(type: string) {
  const components = {
    markdown: MarkdownCard,
    youtube: YouTubeCard,
    article: ArticleCard,
    tweet: TweetCard,
    rss: RSSCard,
  }
  return components[type as keyof typeof components]
}

// Get props name for component
function getPropsName(type: string) {
  const propsNames = {
    markdown: 'article',
    youtube: 'video',
    article: 'article',
    tweet: 'tweet',
    rss: 'item',
  }
  return propsNames[type as keyof typeof propsNames]
}
</script>

<template>
  <div class="max-w-[900px] mx-auto px-4 py-8">
    <!-- Empty State -->
    <div
      v-if="filteredItems.length === 0"
      class="glass-card p-12 text-center"
    >
      <div class="text-6xl mb-4">
        📭
      </div>
      <h3 class="text-2xl font-bold mb-2">
        No items found
      </h3>
      <p class="text-white/60 mb-6">
        Try adjusting your filters or search query
      </p>
      <button
        class="btn-primary"
        @click="feedStore.setFilterType('all')"
      >
        View All Items
      </button>
    </div>

    <!-- Feed Items with Auto-Animate -->
    <div
      v-else
      ref="parent"
      class="space-y-6"
    >
      <component
        :is="getCardComponent(item.type)"
        v-for="item in filteredItems"
        :key="item.id"
        v-bind="{ [getPropsName(item.type)]: item }"
        @like="handleLike(item)"
        @bookmark="handleBookmark(item)"
      />
    </div>

    <!-- Load More (Future) -->
    <!-- <div v-if="hasMore" class="text-center mt-8">
      <button class="btn-glass">
        Load More
      </button>
    </div> -->
  </div>
</template>
