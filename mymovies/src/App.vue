<script setup lang="ts">
import { useMovies } from '@/composables/useMovies'
import { usePlayer } from '@/composables/usePlayer'
import AppHeader from '@/components/AppHeader.vue'
import MovieCard from '@/components/MovieCard.vue'
import WebPlayer from '@/components/WebPlayer.vue'
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
  debouncedSearch
} = useMovies()

const {
  showPlayer,
  currentMovie,
  openTrailer,
  openWebPlayer,
  closeWebPlayer
} = usePlayer()

const handleWatch = (movie: Movie) => {
  openTrailer(movie)
}

const handleWebPlayer = (movie: Movie) => {
  openWebPlayer(movie)
}

// Popular movie IMDb IDs for random selection
const popularMovieIds = [
  'tt0111161', // The Shawshank Redemption
  'tt0068646', // The Godfather
  'tt0468569', // The Dark Knight
  'tt0071562', // The Godfather Part II
  'tt0050083', // 12 Angry Men
  'tt0108052', // Schindler's List
  'tt0167260', // The Lord of the Rings: The Return of the King
  'tt0110912', // Pulp Fiction
  'tt0120737', // The Lord of the Rings: The Fellowship of the Ring
  'tt0109830', // Forrest Gump
  'tt1375666', // Inception
  'tt0167261', // The Lord of the Rings: The Two Towers
  'tt0073486', // One Flew Over the Cuckoo's Nest
  'tt0099685', // Goodfellas
  'tt0133093', // The Matrix
  'tt0047478', // Seven Samurai
  'tt0114369', // Se7en
  'tt0317248', // City of God
  'tt0102926', // The Silence of the Lambs
  'tt0038650', // It's a Wonderful Life
]

const handleOpenWebPlayerFromHeader = () => {
  // Pick a random movie ID
  const randomId = popularMovieIds[Math.floor(Math.random() * popularMovieIds.length)]

  // Create a dummy movie object
  const dummyMovie: Movie = {
    imdbID: randomId,
    Title: 'Random Movie',
    Year: '2024',
    Type: 'movie',
    Poster: 'N/A'
  }

  openWebPlayer(dummyMovie)
}
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
      @openWebPlayer="handleOpenWebPlayerFromHeader"
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
          @webplayer="handleWebPlayer"
        />
      </div>
    </main>

    <!-- Web Player Overlay -->
    <WebPlayer
      v-if="showPlayer && currentMovie"
      :imdbId="currentMovie.imdbID"
      :movieType="currentMovie.Type"
      :title="currentMovie.Title"
      @close="closeWebPlayer"
    />
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
