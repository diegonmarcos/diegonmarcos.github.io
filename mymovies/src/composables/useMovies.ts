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

// === OSCAR LEGENDS ===

// Steven Spielberg (3 Oscars - Director)
const SPIELBERG_IDS = [
  'tt0108052', // Schindler's List
  'tt0120815', // Saving Private Ryan
  'tt0082971', // Raiders of the Lost Ark
  'tt0107290', // Jurassic Park
  'tt0078723', // Jaws
  'tt0083866', // E.T.
  'tt0116209', // The Color Purple
  'tt0093779', // Empire of the Sun
  'tt0118607', // Amistad
  'tt0102057'  // Hook
]

// Martin Scorsese (1 Oscar - Director)
const SCORSESE_IDS = [
  'tt0407887', // The Departed
  'tt0099685', // Goodfellas
  'tt0081398', // Raging Bull
  'tt0075314', // Taxi Driver
  'tt0112641', // Casino
  'tt1663202', // Wolf of Wall Street
  'tt1302006', // The Irishman
  'tt0364569', // The Aviator
  'tt0070379', // Mean Streets
  'tt0319061'  // Killers of the Flower Moon
]

// Meryl Streep (3 Oscars - Actress)
const STREEP_IDS = [
  'tt0079522', // Kramer vs. Kramer
  'tt0084707', // Sophie's Choice
  'tt1454029', // The Iron Lady
  'tt0477348', // The Devil Wears Prada
  'tt0093822', // Out of Africa
  'tt0082979', // The Deer Hunter
  'tt0112579', // Bridges of Madison County
  'tt0118749', // Adaptation
  'tt1020072', // Julie & Julia
  'tt1663662'  // August: Osage County
]

// Jack Nicholson (3 Oscars - Actor)
const NICHOLSON_IDS = [
  'tt0073486', // One Flew Over the Cuckoo's Nest
  'tt0118799', // As Good as It Gets
  'tt0086425', // Terms of Endearment
  'tt0071315', // Chinatown
  'tt0081505', // The Shining
  'tt0099348', // Batman
  'tt0112573', // A Few Good Men
  'tt0361748', // The Departed
  'tt0338135', // About Schmidt
  'tt0093773'  // Witches of Eastwick
]

// Katharine Hepburn (4 Oscars - Most acting wins)
const HEPBURN_IDS = [
  'tt0082511', // On Golden Pond
  'tt0065134', // The Lion in Winter
  'tt0061184', // Guess Who's Coming to Dinner
  'tt0031381', // The Philadelphia Story
  'tt0044081', // Adam's Rib
  'tt0044257', // The African Queen
  'tt0024034', // Morning Glory
  'tt0032599', // Bringing Up Baby
  'tt0053137', // Suddenly Last Summer
  'tt0046876'  // Roman Holiday
]

// Clint Eastwood (4 Oscars - Director/Producer)
const EASTWOOD_IDS = [
  'tt0105695', // Unforgiven
  'tt0327056', // Million Dollar Baby
  'tt0405159', // Gran Torino
  'tt1205489', // American Sniper
  'tt0064116', // A Fistful of Dollars
  'tt0060196', // The Good Bad and Ugly
  'tt0066999', // Dirty Harry
  'tt0097576', // Heartbreak Ridge
  'tt0107206', // In the Line of Fire
  'tt1057500'  // Invictus
]

// Secret key (reversed)
const _vault = '96e992d2'

export function useMovies() {
  const apiKey = ref(localStorage.getItem('omdb_api_key') || '')
  const tempApiKey = ref('')
  const movies = ref<Movie[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  const searchQuery = ref('')
  const view = ref<ViewType>('home')
  const bulkInput = ref('')
  const showBulkInput = ref(false)

  // Cache for all lists - stores fetched movies by list name
  const cache = ref<Record<string, Movie[]>>({
    home: [],
    movies2025: [],
    series2025: [],
    staffpicks: [],
    ghibli: [],
    spielberg: [],
    scorsese: [],
    streep: [],
    nicholson: [],
    hepburn: [],
    eastwood: [],
    bulk: []
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

    // Easter egg: check for secret password
    if (tempApiKey.value.toLowerCase().trim() === 'popcorn') {
      apiKey.value = _vault.split('').reverse().join('')
    } else {
      apiKey.value = tempApiKey.value.trim()
    }

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
      ghibli: [],
      spielberg: [],
      scorsese: [],
      streep: [],
      nicholson: [],
      hepburn: [],
      eastwood: [],
      bulk: []
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
      const [home, movies2025, series2025, staffpicks, ghibli, spielberg, scorsese, streep, nicholson, hepburn, eastwood] = await Promise.all([
        fetchByIds(CURATED_IDS),
        fetchByIds(MOVIES_2025_IDS),
        fetchByIds(SERIES_2025_IDS),
        fetchByIds(STAFF_PICKS_IDS),
        fetchByIds(GHIBLI_IDS),
        fetchByIds(SPIELBERG_IDS),
        fetchByIds(SCORSESE_IDS),
        fetchByIds(STREEP_IDS),
        fetchByIds(NICHOLSON_IDS),
        fetchByIds(HEPBURN_IDS),
        fetchByIds(EASTWOOD_IDS)
      ])

      // Store in cache
      cache.value = {
        home,
        movies2025,
        series2025,
        staffpicks,
        ghibli,
        spielberg,
        scorsese,
        streep,
        nicholson,
        hepburn,
        eastwood
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

  const toggleBulkInput = () => {
    showBulkInput.value = !showBulkInput.value
    if (!showBulkInput.value) {
      bulkInput.value = ''
    }
  }

  const fetchBulk = async () => {
    if (!bulkInput.value.trim() || !apiKey.value) return

    // Parse comma-separated IMDb IDs
    const ids = bulkInput.value
      .split(',')
      .map(id => id.trim())
      .filter(id => id.startsWith('tt') || /^\d+$/.test(id))
      .map(id => id.startsWith('tt') ? id : `tt${id}`)

    if (ids.length === 0) {
      error.value = 'No valid IMDb IDs found. Use format: tt1234567, tt7654321'
      return
    }

    loading.value = true
    error.value = null
    view.value = 'bulk'
    showBulkInput.value = false

    try {
      const results = await fetchByIds(ids)
      cache.value.bulk = results
      movies.value = results

      if (results.length === 0) {
        error.value = 'No movies found for the provided IDs'
      }
    } catch (err) {
      error.value = 'Failed to fetch movies. Please try again.'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

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
    bulkInput,
    showBulkInput,
    saveApiKey,
    clearApiKey,
    setView,
    searchMovies,
    debouncedSearch,
    toggleBulkInput,
    fetchBulk
  }
}
