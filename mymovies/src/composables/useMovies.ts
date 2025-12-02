import { ref, computed } from 'vue'
import axios from 'axios'
import { debounce } from 'lodash-es'
import type { Movie, OmdbSearchResponse, OmdbDetailResponse, ViewType } from '@/types/movie'

// Secret key (reversed)
const _vault = '9b54bee4'

// Curated list of IMDb IDs for home view
const CURATED_IDS = [
  'tt3566834',  // A Minecraft Movie
  'tt12299608', // Mickey 17
  'tt31193180', // Sinners
  'tt10954718', // Dog Man
  'tt27714946', // The Monkey
  'tt14107334', // The Running Man
  'tt7181546',  // Ballerina
  'tt20969586', // Thunderbolts
  'tt11655566', // Lilo & Stitch
  'tt10676052'  // Fantastic Four
]

export function useMovies() {
  const apiKey = ref(localStorage.getItem('omdb_api_key') || '')
  const tempApiKey = ref('')
  const movies = ref<Movie[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  const searchQuery = ref('')
  const view = ref<ViewType>('home')

  const hasApiKey = computed(() => !!apiKey.value)

  const api = axios.create({
    baseURL: 'https://www.omdbapi.com/'
  })

  api.interceptors.request.use(config => {
    if (apiKey.value) {
      config.params = { ...config.params, apikey: apiKey.value }
    }
    return config
  })

  const saveApiKey = () => {
    if (!tempApiKey.value) return

    // Easter egg: check for secret password
    if (tempApiKey.value.toLowerCase().trim() === 'popcorn') {
      apiKey.value = _vault.split('').reverse().join('')
    } else {
      apiKey.value = tempApiKey.value
    }

    localStorage.setItem('omdb_api_key', apiKey.value)
    tempApiKey.value = ''
    fetchHomeContent()
  }

  const clearApiKey = () => {
    apiKey.value = ''
    localStorage.removeItem('omdb_api_key')
    movies.value = []
  }

  const setView = (newView: ViewType) => {
    view.value = newView
    error.value = null
    movies.value = []
    if (newView === 'home') {
      searchQuery.value = ''
      fetchHomeContent()
    }
  }

  const fetchHomeContent = async () => {
    if (!apiKey.value) return

    loading.value = true
    error.value = null
    movies.value = []

    try {
      const results: Movie[] = []

      for (const id of CURATED_IDS) {
        try {
          const res = await api.get<OmdbDetailResponse>('', { params: { i: id } })
          if (res.data.Response === 'True') {
            results.push(res.data)
          }
        } catch (e) {
          console.error(`Error fetching ${id}:`, e)
        }
      }

      movies.value = results
    } catch (err) {
      error.value = 'Failed to load content. Check your API key.'
      console.error('Error in fetchHomeContent:', err)
    } finally {
      loading.value = false
    }
  }

  const searchMovies = async () => {
    if (!searchQuery.value.trim() || !apiKey.value) return

    loading.value = true
    error.value = null

    try {
      const res = await api.get<OmdbSearchResponse>('', {
        params: { s: searchQuery.value }
      })

      if (res.data.Response === 'True' && res.data.Search) {
        movies.value = res.data.Search
      } else {
        movies.value = []
        if (res.data.Error && res.data.Error !== 'Movie not found!') {
          error.value = res.data.Error
        }
      }
    } catch (err) {
      error.value = 'Search failed. Please try again.'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  const debouncedSearch = debounce(() => {
    if (searchQuery.value) searchMovies()
  }, 500)

  return {
    apiKey,
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
    searchMovies,
    debouncedSearch
  }
}
