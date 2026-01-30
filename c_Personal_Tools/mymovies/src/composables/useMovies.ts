import { ref, computed } from 'vue'
import axios from 'axios'
import { debounce } from 'lodash-es'
import type { Movie, OmdbSearchResponse, OmdbDetailResponse, ViewType } from '@/types/movie'


// Films 2025 - Merged trending and upcoming (home view)
const FILMS_2025_IDS = [
  'tt3566834',  // A Minecraft Movie
  'tt12299608', // Mickey 17
  'tt31193180', // Sinners
  'tt10954718', // Dog Man
  'tt27714946', // The Monkey
  'tt14107334', // The Running Man
  'tt7181546',  // Ballerina
  'tt20969586', // Thunderbolts
  'tt11655566', // Lilo & Stitch
  'tt10676052', // Fantastic Four
  'tt14539740', // Blue Moon (Linklater)
  'tt21064584', // One Battle After Another (PTA)
  'tt14921174', // Warfare (Garland)
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
  'tt9253284',  // Andor S2
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

// European Cinema Masterpieces
const EUROPEAN_IDS = [
  'tt0211915', // Amélie
  'tt0118799', // Life Is Beautiful
  'tt0095765', // Cinema Paradiso
  'tt0082096', // Das Boot
  'tt0317248', // City of God
  'tt0405094', // The Lives of Others
  'tt0381681', // Before Sunset
  'tt1255953', // Incendies
  'tt2278388', // The Grand Budapest Hotel
  'tt0986264', // Like Stars on Earth (Taare Zameen Par)
  'tt0338013', // Eternal Sunshine
  'tt0467406', // Juno
  'tt0120663', // Eyes Wide Shut
  'tt0101414', // Delicatessen
  'tt0113247'  // La Haine
]

// Neo-Noir / Modern Noir Films
const NEWNOIRS_IDS = [
  'tt0114369', // Se7en
  'tt0209144', // Memento
  'tt0169547', // American Beauty
  'tt0144084', // American Psycho
  'tt0137523', // Fight Club
  'tt0110912', // Pulp Fiction
  'tt0266697', // Kill Bill: Vol. 1
  'tt1853728', // Django Unchained
  'tt0816692', // Interstellar
  'tt1130884', // Shutter Island
  'tt0482571', // The Prestige
  'tt0993846', // The Wolf of Wall Street
  'tt2267998', // Gone Girl
  'tt7286456', // Joker
  'tt1950186'  // Ford v Ferrari
]

// Sci-Fi Essentials (20 films)
const SCIFI_IDS = [
  'tt0816692', // Interstellar
  'tt0133093', // The Matrix
  'tt0062622', // 2001: A Space Odyssey
  'tt0083658', // Blade Runner
  'tt0078748', // Alien
  'tt0090605', // Aliens
  'tt0088763', // Back to the Future
  'tt0103064', // Terminator 2: Judgment Day
  'tt0076759', // Star Wars: Episode IV
  'tt0080684', // The Empire Strikes Back
  'tt0117731', // The Fifth Element
  'tt0181689', // Minority Report
  'tt0470752', // Ex Machina
  'tt1856101', // Blade Runner 2049
  'tt0499549', // Avatar
  'tt1392190', // Mad Max: Fury Road
  'tt2543164', // Arrival
  'tt1160419', // Dune
  'tt15239678', // Dune: Part Two
  'tt0118929'  // Dark City
]

// === WATCH BEFORE YOU DIE ===

// Epic Cinema - Grand Scale Masterpieces
const EPICS_IDS = [
  'tt0056172', // Lawrence of Arabia
  'tt0052618', // Ben-Hur
  'tt0112573', // Braveheart
  'tt0172495', // Gladiator
  'tt0167260', // Lord of the Rings: Return of the King
  'tt0120737', // Lord of the Rings: Fellowship
  'tt0167261', // Lord of the Rings: Two Towers
  'tt0108052', // Schindler's List
  'tt0120815', // Saving Private Ryan
  'tt0816692', // Interstellar
  'tt1375666', // Inception
  'tt0082971', // Raiders of the Lost Ark
  'tt0047396', // Rear Window
  'tt0033467', // Citizen Kane
  'tt0043014'  // Sunset Boulevard
]

// Must-See Thrillers
const THRILLERS_IDS = [
  'tt0102926', // The Silence of the Lambs
  'tt0114369', // Se7en
  'tt0081505', // The Shining
  'tt0078748', // Alien
  'tt0054215', // Psycho
  'tt0209144', // Memento
  'tt0482571', // The Prestige
  'tt1130884', // Shutter Island
  'tt0114814', // The Usual Suspects
  'tt0110413', // Léon: The Professional
  'tt0071562', // The Godfather Part II
  'tt0068646', // The Godfather
  'tt0099685', // Goodfellas
  'tt0105236', // Reservoir Dogs
  'tt0317248'  // City of God
]

// Epic Series - Must Watch Before You Die
const EPIC_SERIES_IDS = [
  'tt0903747', // Breaking Bad
  'tt0306414', // The Wire
  'tt0141842', // The Sopranos
  'tt0944947', // Game of Thrones
  'tt5491994', // Planet Earth II
  'tt0804503', // Mad Men
  'tt1475582', // Sherlock
  'tt0386676', // The Office (US)
  'tt0098904', // Seinfeld
  'tt0108778', // Friends
  'tt2356777', // True Detective
  'tt2861424', // Rick and Morty
  'tt4574334', // Stranger Things
  'tt0475784', // Westworld
  'tt7366338', // Chernobyl
  'tt0412142', // House M.D.
  'tt0185906', // Band of Brothers
  'tt5180504', // The Witcher
  'tt2442560', // Peaky Blinders
  'tt8111088', // The Mandalorian
  'tt1856010', // House of Cards
  'tt0413573', // Grey's Anatomy
  'tt0460649', // How I Met Your Mother
  'tt1520211', // The Walking Dead
  'tt0773262'  // Dexter
]

// === DIRECTORS LEGENDS ===

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

// Al Pacino (1 Oscar - Actor)
const ALPACINO_IDS = [
  'tt0068646', // The Godfather
  'tt0071562', // The Godfather Part II
  'tt0099685', // Goodfellas
  'tt0110413', // Scent of a Woman
  'tt0071315', // Serpico
  'tt0072890', // Dog Day Afternoon
  'tt0057565', // Scarface
  'tt0119217', // Heat
  'tt0087089', // Carlito's Way
  'tt0099348'  // The Irishman
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

// Stanley Kubrick (Master filmmaker)
const KUBRICK_IDS = [
  'tt0081505', // The Shining
  'tt0062622', // 2001: A Space Odyssey
  'tt0066921', // A Clockwork Orange
  'tt0093058', // Full Metal Jacket
  'tt0057012', // Dr. Strangelove
  'tt0120663', // Eyes Wide Shut
  'tt0069293', // Barry Lyndon
  'tt0056193', // Lolita
  'tt0055630', // Spartacus
  'tt0049406'  // The Killing
]

// Christopher Nolan (Modern visionary)
const NOLAN_IDS = [
  'tt1375666', // Inception
  'tt0468569', // The Dark Knight
  'tt0816692', // Interstellar
  'tt0209144', // Memento
  'tt0482571', // The Prestige
  'tt1345836', // The Dark Knight Rises
  'tt0372784', // Batman Begins
  'tt5013056', // Dunkirk
  'tt6723592', // Tenet
  'tt15398776' // Oppenheimer
]

// Quentin Tarantino (Iconic storyteller)
const TARANTINO_IDS = [
  'tt0110912', // Pulp Fiction
  'tt0105236', // Reservoir Dogs
  'tt0266697', // Kill Bill: Vol. 1
  'tt0378194', // Kill Bill: Vol. 2
  'tt0361748', // Inglourious Basterds
  'tt1853728', // Django Unchained
  'tt3460252', // The Hateful Eight
  'tt7131622', // Once Upon a Time in Hollywood
  'tt0116367', // From Dusk Till Dawn
  'tt0119396'  // Jackie Brown
]

// === ACTOR/ESS LEGENDS ===

// Robert De Niro (2 Oscars - Actor)
const DENIRO_IDS = [
  'tt0071562', // The Godfather Part II
  'tt0081398', // Raging Bull
  'tt0075314', // Taxi Driver
  'tt0099685', // Goodfellas
  'tt0112641', // Casino
  'tt0119217', // Heat
  'tt1302006', // The Irishman
  'tt0088944', // Once Upon a Time in America
  'tt0082979', // The Deer Hunter
  'tt0317248'  // The King of Comedy
]

// Tom Hanks (2 Oscars - Actor)
const HANKS_IDS = [
  'tt0109830', // Forrest Gump
  'tt0107818', // Philadelphia
  'tt0108160', // Saving Private Ryan
  'tt0120815', // Saving Private Ryan
  'tt0112384', // Apollo 13
  'tt0120689', // The Green Mile
  'tt0162222', // Cast Away
  'tt0338751', // Catch Me If You Can
  'tt0096463', // Big
  'tt0862846'  // Toy Story 3
]

// Leonardo DiCaprio (1 Oscar - Actor)
const DICAPRIO_IDS = [
  'tt1663202', // The Wolf of Wall Street
  'tt1375666', // Inception
  'tt0407887', // The Departed
  'tt0993846', // The Wolf of Wall Street
  'tt3659388', // The Revenant
  'tt1130884', // Shutter Island
  'tt0363163', // Catch Me If You Can
  'tt1355644', // Django Unchained
  'tt0119217', // Titanic
  'tt5537002'  // Killers of the Flower Moon
]

// === OSCAR NOMINEES BY YEAR ===

// 97th Academy Awards (2025) - Best Picture Nominees (films from 2024)
const OSCARS_2025_IDS = [
  'tt28607951', // Anora
  'tt8999762',  // The Brutalist
  'tt11563598', // A Complete Unknown
  'tt20215234', // Conclave
  'tt15239678', // Dune: Part Two
  'tt20221436', // Emilia Pérez
  'tt14745616', // I'm Still Here
  'tt23055660', // Nickel Boys
  'tt17526714', // The Substance
  'tt1262426'   // Wicked
]

// 96th Academy Awards (2024) - Best Picture Nominees (films from 2023)
const OSCARS_2024_IDS = [
  'tt15398776', // Oppenheimer (WINNER)
  'tt23561236', // American Fiction
  'tt17009710', // Anatomy of a Fall
  'tt1517268',  // Barbie
  'tt14849194', // The Holdovers
  'tt5537002',  // Killers of the Flower Moon
  'tt5535276',  // Maestro
  'tt13238346', // Past Lives
  'tt14230458', // Poor Things
  'tt7160372'   // The Zone of Interest
]

// 95th Academy Awards (2023) - Best Picture Nominees (films from 2022)
const OSCARS_2023_IDS = [
  'tt6710474',  // Everything Everywhere All at Once (WINNER)
  'tt1016150',  // All Quiet on the Western Front
  'tt1630029',  // Avatar: The Way of Water
  'tt11813216', // The Banshees of Inisherin
  'tt3704428',  // Elvis
  'tt14208870', // The Fabelmans
  'tt14444726', // Tár
  'tt1745960',  // Top Gun: Maverick
  'tt7322224',  // Triangle of Sadness
  'tt13669038'  // Women Talking
]

// 94th Academy Awards (2022) - Best Picture Nominees (films from 2021)
const OSCARS_2022_IDS = [
  'tt10366460', // CODA (WINNER)
  'tt12789558', // Belfast
  'tt11286314', // Don't Look Up
  'tt14039582', // Drive My Car
  'tt1160419',  // Dune
  'tt9620288',  // King Richard
  'tt11271038', // Licorice Pizza
  'tt7740496',  // Nightmare Alley
  'tt10293406', // The Power of the Dog
  'tt3581652'   // West Side Story
]

// 93rd Academy Awards (2021) - Best Picture Nominees (films from 2020)
const OSCARS_2021_IDS = [
  'tt9770150',  // Nomadland (WINNER)
  'tt10272386', // The Father
  'tt9784798',  // Judas and the Black Messiah
  'tt10618286', // Mank
  'tt10633456', // Minari
  'tt9620292',  // Promising Young Woman
  'tt5363618',  // Sound of Metal
  'tt1070874'   // The Trial of the Chicago 7
]

// 92nd Academy Awards (2020) - Best Picture Nominees (films from 2019)
const OSCARS_2020_IDS = [
  'tt6751668',  // Parasite (WINNER)
  'tt8579674',  // 1917
  'tt1950186',  // Ford v Ferrari
  'tt1302006',  // The Irishman
  'tt2584384',  // Jojo Rabbit
  'tt7286456',  // Joker
  'tt3281548',  // Little Women
  'tt7653254',  // Marriage Story
  'tt7131622'   // Once Upon a Time in Hollywood
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
    series2025: [],
    ghibli: [],
    european: [],
    newnoirs: [],
    scifi: [],
    staffpicks: [],
    epics: [],
    thrillers: [],
    epicseries: [],
    oscars2025: [],
    oscars2024: [],
    oscars2023: [],
    oscars2022: [],
    oscars2021: [],
    oscars2020: [],
    spielberg: [],
    scorsese: [],
    eastwood: [],
    kubrick: [],
    nolan: [],
    tarantino: [],
    streep: [],
    nicholson: [],
    alpacino: [],
    deniro: [],
    hanks: [],
    dicaprio: [],
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
      series2025: [],
      ghibli: [],
      european: [],
      newnoirs: [],
      scifi: [],
      staffpicks: [],
      epics: [],
      thrillers: [],
      epicseries: [],
      oscars2025: [],
      oscars2024: [],
      oscars2023: [],
      oscars2022: [],
      oscars2021: [],
      oscars2020: [],
      spielberg: [],
      scorsese: [],
      eastwood: [],
      kubrick: [],
      nolan: [],
      tarantino: [],
      streep: [],
      nicholson: [],
      alpacino: [],
      deniro: [],
      hanks: [],
      dicaprio: [],
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
      const [
        home, series2025, ghibli, european, newnoirs, scifi,
        staffpicks, epics, thrillers, epicseries,
        oscars2025, oscars2024, oscars2023, oscars2022, oscars2021, oscars2020,
        spielberg, scorsese, eastwood, kubrick, nolan, tarantino,
        streep, nicholson, alpacino, deniro, hanks, dicaprio
      ] = await Promise.all([
        fetchByIds(FILMS_2025_IDS),
        fetchByIds(SERIES_2025_IDS),
        fetchByIds(GHIBLI_IDS),
        fetchByIds(EUROPEAN_IDS),
        fetchByIds(NEWNOIRS_IDS),
        fetchByIds(SCIFI_IDS),
        fetchByIds(STAFF_PICKS_IDS),
        fetchByIds(EPICS_IDS),
        fetchByIds(THRILLERS_IDS),
        fetchByIds(EPIC_SERIES_IDS),
        fetchByIds(OSCARS_2025_IDS),
        fetchByIds(OSCARS_2024_IDS),
        fetchByIds(OSCARS_2023_IDS),
        fetchByIds(OSCARS_2022_IDS),
        fetchByIds(OSCARS_2021_IDS),
        fetchByIds(OSCARS_2020_IDS),
        fetchByIds(SPIELBERG_IDS),
        fetchByIds(SCORSESE_IDS),
        fetchByIds(EASTWOOD_IDS),
        fetchByIds(KUBRICK_IDS),
        fetchByIds(NOLAN_IDS),
        fetchByIds(TARANTINO_IDS),
        fetchByIds(STREEP_IDS),
        fetchByIds(NICHOLSON_IDS),
        fetchByIds(ALPACINO_IDS),
        fetchByIds(DENIRO_IDS),
        fetchByIds(HANKS_IDS),
        fetchByIds(DICAPRIO_IDS)
      ])

      // Store in cache
      cache.value = {
        home,
        series2025,
        ghibli,
        european,
        newnoirs,
        scifi,
        staffpicks,
        epics,
        thrillers,
        epicseries,
        oscars2025,
        oscars2024,
        oscars2023,
        oscars2022,
        oscars2021,
        oscars2020,
        spielberg,
        scorsese,
        eastwood,
        kubrick,
        nolan,
        tarantino,
        streep,
        nicholson,
        alpacino,
        deniro,
        hanks,
        dicaprio
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
