<script setup lang="ts">
import type { ViewType } from '@/types/movie'

defineProps<{
  hasApiKey: boolean
  tempApiKey: string
  view: ViewType
  searchQuery: string
}>()

const emit = defineEmits<{
  'update:tempApiKey': [value: string]
  'update:searchQuery': [value: string]
  saveKey: []
  clearKey: []
  setView: [view: ViewType]
  search: []
}>()
</script>

<template>
  <header>
    <div class="top-bar">
      <h1>🎬 MyMovies</h1>
      <div class="api-key-container">
        <input
          v-if="!hasApiKey"
          :value="tempApiKey"
          @input="emit('update:tempApiKey', ($event.target as HTMLInputElement).value)"
          type="text"
          placeholder="Enter OMDb API Key"
        />
        <button v-if="!hasApiKey" @click="emit('saveKey')">Save Key</button>
        <button v-else class="secondary" @click="emit('clearKey')">Change Key</button>
      </div>
    </div>

    <div class="controls">
      <div class="view-buttons">
        <button
          :class="['secondary', { active: view === 'home' }]"
          @click="emit('setView', 'home')"
        >
          🔥 Hot
        </button>
        <button
          :class="['secondary', { active: view === 'search' }]"
          @click="emit('setView', 'search')"
        >
          🔍 Search
        </button>
      </div>
      <input
        v-if="view === 'search'"
        :value="searchQuery"
        @input="emit('update:searchQuery', ($event.target as HTMLInputElement).value); emit('search')"
        class="search-box"
        placeholder="Search for movies or TV series..."
        autofocus
      />
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #333;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
}

h1 {
  margin: 0;
  color: var(--accent-color);
}

.api-key-container {
  display: flex;
  gap: 10px;
  align-items: center;
}

input[type='text'] {
  background: var(--input-bg);
  border: 1px solid #444;
  color: white;
  padding: 8px 12px;
  border-radius: var(--border-radius);
  outline: none;

  &:focus {
    border-color: var(--accent-color);
  }
}

button {
  background-color: var(--accent-color);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: var(--border-radius);
  cursor: pointer;
  font-weight: bold;
  transition: background 0.2s;

  &:hover {
    background-color: var(--accent-hover);
  }

  &.secondary {
    background-color: #444;

    &.active {
      background-color: var(--text-primary);
      color: black;
    }
  }
}

.controls {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.view-buttons {
  display: flex;
  gap: 10px;
}

.search-box {
  flex-grow: 1;
  padding: 12px;
  font-size: 16px;
  background: #2a2a2a;
  border: 1px solid #444;
  border-radius: var(--border-radius);
  color: white;
  outline: none;

  &:focus {
    border-color: var(--accent-color);
  }
}
</style>
