import type { Movie } from '@/types/movie'

export function usePlayer() {
  const openTrailer = (item: Movie) => {
    if (!item.imdbID) {
      alert('Cannot find trailer: No IMDb ID found.')
      return
    }

    // Open IMDB video gallery page for this title
    // This shows all available trailers and clips on IMDB
    const imdbVideoUrl = `https://www.imdb.com/title/${item.imdbID}/videogallery/`
    window.open(imdbVideoUrl, '_blank')
  }

  return {
    openTrailer
  }
}
