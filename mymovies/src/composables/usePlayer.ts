import { ref } from 'vue'
import type { Movie } from '@/types/movie'

export function usePlayer() {
  const showPlayer = ref(false)
  const currentStreamUrl = ref('')

  const openPlayer = (item: Movie) => {
    if (!item.imdbID) {
      alert('Cannot watch: No IMDb ID found.')
      return
    }

    // Map OMDb 'Type' to Vidsrc 'type'
    // OMDb: 'movie', 'series', 'episode'
    // Vidsrc: 'movie', 'tv'
    let type = 'movie'
    if (item.Type === 'series' || item.Type === 'episode') {
      type = 'tv'
    }

    currentStreamUrl.value = `https://vidsrc.cc/v2/embed/${type}/${item.imdbID}`
    showPlayer.value = true
  }

  const closePlayer = () => {
    showPlayer.value = false
    currentStreamUrl.value = ''
  }

  return {
    showPlayer,
    currentStreamUrl,
    openPlayer,
    closePlayer
  }
}
