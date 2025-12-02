<script setup lang="ts">
import TabBar from '../common/TabBar.vue'
import NewsRow from './NewsRow.vue'
import { useRSSFeed } from '../../composables/useRSSFeed'
import { Newspaper, RefreshCw } from 'lucide-vue-next'

const { category, categories, groupedItems, loading, error, loadFeed } = useRSSFeed('headlines')

function onTabChange(newCategory: string) {
  loadFeed(newCategory)
}

const tabs = categories.map((c) => ({ id: c.id, label: c.label }))
</script>

<template>
  <div class="newsfeed">
    <div class="newsfeed__header">
      <TabBar :tabs="tabs" :active-tab="category" @update:active-tab="onTabChange" />
      <button class="btn btn--ghost btn--icon" @click="loadFeed()" title="Refresh">
        <RefreshCw class="w-4 h-4" :class="{ 'animate-spin': loading }" />
      </button>
    </div>

    <div v-if="loading && groupedItems.length === 0" class="p-4 text-text-tertiary text-sm">
      Loading news...
    </div>

    <div v-else-if="error" class="error-state m-4">
      <p class="error-state__message">{{ error }}</p>
    </div>

    <div v-else-if="groupedItems.length > 0" class="feed-list">
      <template v-for="group in groupedItems" :key="group.label">
        <div class="time-group">{{ group.label }}</div>
        <NewsRow
          v-for="item in group.items"
          :key="item.id"
          :item="item"
        />
      </template>
    </div>

    <div v-else class="empty-state">
      <Newspaper class="empty-state__icon" />
      <p class="empty-state__title">No news available</p>
      <p class="empty-state__description">Try refreshing or selecting another category</p>
    </div>
  </div>
</template>

<style scoped>
.newsfeed__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--bg-surface, #161b22);
}

.newsfeed__header .tab-bar {
  flex: 1;
  border-bottom: none;
}
</style>
