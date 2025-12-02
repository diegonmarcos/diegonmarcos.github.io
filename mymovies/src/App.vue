<script setup lang="ts">
import { onMounted } from 'vue'
import { useMovies } from '@/composables/useMovies'
import { usePlayer } from '@/composables/usePlayer'
import AppHeader from '@/components/AppHeader.vue'
import MovieCard from '@/components/MovieCard.vue'
import type { Movie } from '@/types/movie'

const {
  tempApiKey,
  hasApiKey,
  movies,
  loading,
  error,
  searchQuery,
  view,
  saveApiKey,
  clearApiKey,
  setView,
  fetchHomeContent,
  debouncedSearch
} = useMovies()

const { openTrailer } = usePlayer()

const handleWatch = (movie: Movie) => {
  openTrailer(movie)
}

onMounted(() => {
  if (hasApiKey.value) {
    fetchHomeContent()
  }
})
</script>

<template>
  <div id="app">
    <AppHeader
      :hasApiKey="hasApiKey"
      :tempApiKey="tempApiKey"
      :view="view"
      :searchQuery="searchQuery"
      @update:tempApiKey="tempApiKey = $event"
      @update:searchQuery="searchQuery = $event"
      @saveKey="saveApiKey"
      @clearKey="clearApiKey"
      @setView="setView"
      @search="debouncedSearch"
    />

    <main>
      <!-- Missing API Key State -->
      <div v-if="!hasApiKey" class="status-msg access-restricted">
        <h2>🔑 API Key Required</h2>
        <p>Please enter your OMDb API Key above.</p>
        <p class="hint">
          Get a free API key at <a href="https://www.omdbapi.com/apikey.aspx" target="_blank">omdbapi.com</a>
        </p>
      </div>

      <!-- Loading State -->
      <div v-else-if="loading" class="status-msg">
        <div class="spinner"></div>
        <p>Fetching data...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="status-msg error">
        {{ error }}
      </div>

      <!-- Empty State -->
      <div v-else-if="movies.length === 0 && !loading" class="status-msg">
        No results found.
      </div>

      <!-- Content Grid -->
      <div v-else class="media-grid">
        <MovieCard
          v-for="movie in movies"
          :key="movie.imdbID"
          :movie="movie"
          @watch="handleWatch"
        />
      </div>
    </main>
  </div>
</template>

<style lang="scss">
// Global styles imported in main.ts
</style>

<style lang="scss" scoped>
#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

main {
  min-height: 50vh;
}

.media-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 25px;
}

.status-msg {
  text-align: center;
  padding: 50px;
  font-size: 1.2em;
  color: var(--text-secondary);

  &.access-restricted {
    color: var(--accent-color);

    .hint {
      font-style: italic;
      color: var(--text-secondary);
      margin-top: 20px;

      a {
        color: var(--accent-color);
        text-decoration: underline;
      }
    }
  }

  &.error {
    color: #ff6b6b;
  }
}

.spinner {
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-left-color: var(--accent-color);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
  margin: 20px auto;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
