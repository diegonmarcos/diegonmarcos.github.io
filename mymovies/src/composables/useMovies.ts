import { ref, computed } from 'vue'
import axios from 'axios'
import { debounce } from 'lodash-es'
import type { Movie, OmdbSearchResponse, OmdbDetailResponse, ViewType } from '@/types/movie'


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

// IMDb Staff's Favorite Movies of 2025 (ls4153451747)
const MOVIES_2025_IDS = [
  'tt27714946', // The Monkey
  'tt14539740', // Blue Moon (Linklater)
  'tt21064584', // One Battle After Another (PTA)
  'tt14921174', // Warfare (Garland)
  'tt12299608', // Mickey 17
  'tt31193180', // Sinners
  'tt3566834',  // A Minecraft Movie
  'tt7181546',  // Ballerina
  'tt20969586', // Thunderbolts
  'tt10676052', // Fantastic Four
  'tt14107334', // The Running Man
  'tt11655566', // Lilo & Stitch
  'tt6263850',  // The Gorge
  'tt13622970', // Mission: Impossible 8
  'tt10146532'  // Wicked Part 2
]

// IMDb Staff's Favorite Series of 2025 (ls4153258550)
const SERIES_2025_IDS = [
  'tt26669477', // Paradise
  'tt14452776', // The Studio
  'tt21216156', // The Chair Company
  'tt5753856',  // The Rehearsal S2
  'tt14681924', // Severance S2
  'tt13622776', // The White Lotus S3
  'tt11280740', // Squid Game S2
  'tt2560140',  // Stranger Things S5
  'tt14688458', // Daredevil: Born Again
  'tt6468322',  // The Last of Us S2
  'tt1190634',  // The Boys S5
  'tt15398776', // Andor S2
  'tt9288030',  // Reacher S3
  'tt14452590', // The Penguin
  'tt12809988'  // Cobra Kai S6
]

// Staff Picks - All-time favorites
const STAFF_PICKS_IDS = [
  'tt0111161', // The Shawshank Redemption
  'tt0068646', // The Godfather
  'tt0468569', // The Dark Knight
  'tt0108052', // Schindler's List
  'tt0167260', // Lord of the Rings: Return of the King
  'tt0110912', // Pulp Fiction
  'tt0137523', // Fight Club
  'tt0109830', // Forrest Gump
  'tt0080684', // The Empire Strikes Back
  'tt0133093', // The Matrix
  'tt0099685', // Goodfellas
  'tt0816692', // Interstellar
  'tt0120737', // Lord of the Rings: Fellowship
  'tt0073486', // One Flew Over the Cuckoo's Nest
  'tt1375666'  // Inception
]

// Studio Ghibli Films
const GHIBLI_IDS = [
  'tt0245429', // Spirited Away
  'tt0096283', // My Neighbor Totoro
  'tt0212205', // Howl's Moving Castle
  'tt0119698', // Princess Mononoke
  'tt0097814', // Kiki's Delivery Service
  'tt0092067', // Castle in the Sky
  'tt0087544', // Nausicaä of the Valley of the Wind
  'tt0104652', // Porco Rosso
  'tt0095327', // Grave of the Fireflies
  'tt2013293', // The Wind Rises
  'tt0876563', // Ponyo
  'tt1568921'  // Arrietty
]

export function useMovies() {
  const apiKey = ref(localStorage.getItem('omdb_api_key') || '')
  const tempApiKey = ref('')
  const movies = ref<Movie[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  const searchQuery = ref('')
  const view = ref<ViewType>('home')

  // Cache for all lists - stores fetched movies by list name
  const cache = ref<Record<string, Movie[]>>({
    home: [],
    movies2025: [],
    series2025: [],
    staffpicks: [],
    ghibli: []
  })

  const isCacheLoaded = ref(false)

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

    apiKey.value = tempApiKey.value.trim()
    localStorage.setItem('omdb_api_key', apiKey.value)
    tempApiKey.value = ''

    // Fetch all lists once
    fetchAllLists()
  }

  const clearApiKey = () => {
    apiKey.value = ''
    localStorage.removeItem('omdb_api_key')
    movies.value = []
    cache.value = {
      home: [],
      movies2025: [],
      series2025: [],
      staffpicks: [],
      ghibli: []
    }
    isCacheLoaded.value = false
  }

  const setView = (newView: ViewType) => {
    view.value = newView
    error.value = null
    searchQuery.value = ''

    // If cache is loaded and it's not search view, use cached data
    if (isCacheLoaded.value && newView !== 'search') {
      movies.value = cache.value[newView] || []
      return
    }

    // Otherwise fetch (this shouldn't happen for list views after initial load)
    switch (newView) {
      case 'home':
        movies.value = cache.value.home
        break
      case 'movies2025':
        movies.value = cache.value.movies2025
        break
      case 'series2025':
        movies.value = cache.value.series2025
        break
      case 'staffpicks':
        movies.value = cache.value.staffpicks
        break
      case 'ghibli':
        movies.value = cache.value.ghibli
        break
    }
  }

  const fetchByIds = async (ids: string[]): Promise<Movie[]> => {
    if (!apiKey.value) return []

    try {
      const results: Movie[] = []

      for (const id of ids) {
        try {
          const res = await api.get<OmdbDetailResponse>('', { params: { i: id } })
          if (res.data.Response === 'True') {
            results.push(res.data)
          }
        } catch (e) {
          console.error(`Error fetching ${id}:`, e)
        }
      }

      return results
    } catch (err) {
      console.error('Error fetching by IDs:', err)
      return []
    }
  }

  const fetchAllLists = async () => {
    if (!apiKey.value) return

    loading.value = true
    error.value = null

    try {
      // Fetch all lists in parallel
      const [home, movies2025, series2025, staffpicks, ghibli] = await Promise.all([
        fetchByIds(CURATED_IDS),
        fetchByIds(MOVIES_2025_IDS),
        fetchByIds(SERIES_2025_IDS),
        fetchByIds(STAFF_PICKS_IDS),
        fetchByIds(GHIBLI_IDS)
      ])

      // Store in cache
      cache.value = {
        home,
        movies2025,
        series2025,
        staffpicks,
        ghibli
      }

      isCacheLoaded.value = true

      // Display home by default
      movies.value = cache.value.home
    } catch (err) {
      error.value = 'Failed to load content. Check your API key.'
      console.error('Error fetching all lists:', err)
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

  // If API key exists on load, fetch all lists
  if (apiKey.value && !isCacheLoaded.value) {
    fetchAllLists()
  }

  return {
    apiKey,
    tempApiKey,
    hasApiKey,
    movies,
    loading,
    error,
    searchQuery,
    view,
    isCacheLoaded,
    saveApiKey,
    clearApiKey,
    setView,
    searchMovies,
    debouncedSearch
  }
}
