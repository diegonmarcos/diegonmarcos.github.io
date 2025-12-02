<script setup lang="ts">
import type { Movie } from '@/types/movie'

defineProps<{
  movie: Movie
}>()

const emit = defineEmits<{
  watch: [movie: Movie]
}>()

const getImageUrl = (posterUrl: string): string => {
  return posterUrl && posterUrl !== 'N/A'
    ? posterUrl
    : 'https://via.placeholder.com/300x450?text=No+Poster'
}

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.src = 'https://via.placeholder.com/300x450?text=No+Poster'
}
</script>

<template>
  <div class="card">
    <img
      :src="getImageUrl(movie.Poster)"
      @error="handleImageError"
      class="poster"
      :alt="movie.Title"
    />
    <div class="card-content">
      <h3 class="card-title">{{ movie.Title }}</h3>
      <div class="card-meta">
        <span class="type-badge">{{ movie.Type === 'series' ? 'Series' : 'Movie' }}</span>
        <span>{{ movie.Year }}</span>
        <span v-if="movie.imdbRating && movie.imdbRating !== 'N/A'">
          ⭐ {{ movie.imdbRating }}
        </span>
      </div>
      <button class="watch-btn" @click="emit('watch', movie)">
        <span>▶ Watch Now</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: var(--card-bg);
  border-radius: var(--border-radius);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  }
}

.poster {
  width: 100%;
  aspect-ratio: 2/3;
  object-fit: cover;
  background-color: #000;
}

.card-content {
  padding: 15px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 1.1em;
  margin: 0 0 5px 0;
  font-weight: 600;
}

.card-meta {
  font-size: 0.9em;
  color: var(--text-secondary);
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

.type-badge {
  text-transform: uppercase;
  font-size: 0.7em;
  padding: 2px 6px;
  background: #333;
  border-radius: 4px;
}

.watch-btn {
  margin-top: auto;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: var(--accent-color);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  font-weight: bold;
  transition: background 0.2s;

  &:hover {
    background-color: var(--accent-hover);
  }
}
</style>
