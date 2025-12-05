import { ref, computed } from 'vue'
import database from '@/movies-database.json'

export interface Movie {
  id: number
  name: string
  year?: number
  description?: string
  imdbId: string
  category: string
  studio?: string
}

export interface MovieList {
  id: number
  name: string
  description: string
  movieIds: number[]
}

export function useMovieDatabase() {
  const currentListId = ref<number | null>(null)

  /**
   * Get all movies from the database
   */
  const getAllMovies = (): Movie[] => {
    return database.movies as Movie[]
  }

  /**
   * Get a specific movie by ID
   */
  const getMovieById = (id: number): Movie | undefined => {
    return database.movies.find(m => m.id === id) as Movie | undefined
  }

  /**
   * Get a specific movie by IMDb ID
   */
  const getMovieByImdbId = (imdbId: string): Movie | undefined => {
    return database.movies.find(m => m.imdbId === imdbId) as Movie | undefined
  }

  /**
   * Get all available lists
   */
  const getAllLists = (): MovieList[] => {
    return database.lists as MovieList[]
  }

  /**
   * Get a specific list by ID
   */
  const getListById = (listId: number): MovieList | undefined => {
    return database.lists.find(l => l.id === listId) as MovieList | undefined
  }

  /**
   * Get all movies in a specific list
   */
  const getMoviesInList = (listId: number): Movie[] => {
    const list = getListById(listId)
    if (!list) return []

    return list.movieIds
      .map(id => getMovieById(id))
      .filter(movie => movie !== undefined) as Movie[]
  }

  /**
   * Get movies by category
   */
  const getMoviesByCategory = (category: string): Movie[] => {
    return database.movies.filter(
      m => m.category.toLowerCase() === category.toLowerCase()
    ) as Movie[]
  }

  /**
   * Get movies by studio
   */
  const getMoviesByStudio = (studio: string): Movie[] => {
    return database.movies.filter(
      m => m.studio?.toLowerCase() === studio.toLowerCase()
    ) as Movie[]
  }

  /**
   * Search movies by name
   */
  const searchMovies = (query: string): Movie[] => {
    const lowerQuery = query.toLowerCase()
    return database.movies.filter(m =>
      m.name.toLowerCase().includes(lowerQuery)
    ) as Movie[]
  }

  /**
   * Get current list movies (computed)
   */
  const currentListMovies = computed(() => {
    if (currentListId.value === null) return []
    return getMoviesInList(currentListId.value)
  })

  /**
   * Get current list info (computed)
   */
  const currentList = computed(() => {
    if (currentListId.value === null) return null
    return getListById(currentListId.value)
  })

  /**
   * Set the current active list
   */
  const setCurrentList = (listId: number) => {
    currentListId.value = listId
  }

  /**
   * Clear the current list
   */
  const clearCurrentList = () => {
    currentListId.value = null
  }

  return {
    // Data access methods
    getAllMovies,
    getMovieById,
    getMovieByImdbId,
    getAllLists,
    getListById,
    getMoviesInList,
    getMoviesByCategory,
    getMoviesByStudio,
    searchMovies,

    // State management
    currentListId,
    currentList,
    currentListMovies,
    setCurrentList,
    clearCurrentList
  }
}
