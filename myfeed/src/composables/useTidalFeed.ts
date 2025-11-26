import { ref, onMounted } from 'vue'

// Tidal track/album item for the feed
export interface TidalItem {
  id: string
  type: 'tidal'
  _type: 'tidalTrack'
  _createdAt: string

  title: string
  artist: string
  album?: string
  duration?: string
  coverUrl?: string
  tidalUrl: string

  likes: number
  isLiked: boolean
  isBookmarked: boolean
}

export interface TidalFeedOptions {
  username: string
  maxItems?: number
  autoFetch?: boolean
  label?: string
}

const DEFAULT_OPTIONS: TidalFeedOptions = {
  username: 'diegonmarcos',
  maxItems: 10,
  autoFetch: true,
  label: '🎧 TIDAL'
}

// CORS proxies to try
const CORS_PROXIES = [
  'https://api.allorigins.win/raw?url=',
  'https://corsproxy.io/?',
]

export function useTidalFeed(options: TidalFeedOptions = { username: 'diegonmarcos' }) {
  const config = { ...DEFAULT_OPTIONS, ...options }

  const tracks = ref<TidalItem[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // Parse Tidal profile page for track data
  function parseTidalPage(html: string): TidalItem[] {
    const items: TidalItem[] = []

    try {
      // Try to find JSON-LD data
      const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)
      if (jsonLdMatch) {
        for (const match of jsonLdMatch) {
          try {
            const jsonStr = match.replace(/<script type="application\/ld\+json">/, '').replace(/<\/script>/, '')
            const data = JSON.parse(jsonStr)
            if (data.track || data.tracks || data['@type'] === 'MusicPlaylist') {
              console.log('Found Tidal JSON-LD:', data)
            }
          } catch (e) {
            // Continue
          }
        }
      }

      // Try to find __NEXT_DATA__ (Next.js initial state)
      const nextDataMatch = html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/)
      if (nextDataMatch) {
        try {
          const nextData = JSON.parse(nextDataMatch[1])
          const pageProps = nextData?.props?.pageProps

          // Extract tracks from various possible locations
          const tracksData = pageProps?.tracks ||
                           pageProps?.playlist?.tracks ||
                           pageProps?.favorites?.tracks ||
                           pageProps?.user?.favorites?.tracks ||
                           []

          if (Array.isArray(tracksData)) {
            for (const track of tracksData.slice(0, config.maxItems)) {
              items.push(convertToFeedItem(track))
            }
          }

          // Also check for albums
          const albumsData = pageProps?.albums || pageProps?.favorites?.albums || []
          if (Array.isArray(albumsData) && items.length < (config.maxItems || 10)) {
            for (const album of albumsData.slice(0, (config.maxItems || 10) - items.length)) {
              items.push(convertAlbumToFeedItem(album))
            }
          }
        } catch (e) {
          console.warn('Failed to parse __NEXT_DATA__:', e)
        }
      }

      // Fallback: Try to extract from meta tags
      if (items.length === 0) {
        const titleMatch = html.match(/<meta property="og:title" content="([^"]+)"/)
        const descMatch = html.match(/<meta property="og:description" content="([^"]+)"/)
        const imageMatch = html.match(/<meta property="og:image" content="([^"]+)"/)

        if (titleMatch) {
          items.push({
            id: `tidal-profile-${config.username}`,
            type: 'tidal',
            _type: 'tidalTrack',
            _createdAt: new Date().toISOString(),
            title: titleMatch[1],
            artist: config.username,
            album: descMatch?.[1] || undefined,
            coverUrl: imageMatch?.[1] || undefined,
            tidalUrl: `https://tidal.com/@${config.username}`,
            likes: 0,
            isLiked: false,
            isBookmarked: false,
          })
        }
      }
    } catch (e) {
      console.error('Failed to parse Tidal page:', e)
    }

    return items
  }

  // Convert Tidal track data to feed item
  function convertToFeedItem(track: any): TidalItem {
    return {
      id: `tidal-${track.id || track.uuid || Math.random().toString(36)}`,
      type: 'tidal',
      _type: 'tidalTrack',
      _createdAt: track.dateAdded || track.streamStartDate || new Date().toISOString(),
      title: track.title || track.name || 'Unknown Track',
      artist: track.artist?.name || track.artists?.[0]?.name || 'Unknown Artist',
      album: track.album?.title || track.album?.name || undefined,
      duration: track.duration ? formatDuration(track.duration) : undefined,
      coverUrl: track.album?.cover
        ? `https://resources.tidal.com/images/${track.album.cover.replace(/-/g, '/')}/320x320.jpg`
        : undefined,
      tidalUrl: track.url || `https://tidal.com/track/${track.id}`,
      likes: 0,
      isLiked: false,
      isBookmarked: false,
    }
  }

  // Convert Tidal album data to feed item
  function convertAlbumToFeedItem(album: any): TidalItem {
    return {
      id: `tidal-album-${album.id || album.uuid || Math.random().toString(36)}`,
      type: 'tidal',
      _type: 'tidalTrack',
      _createdAt: album.releaseDate || album.streamStartDate || new Date().toISOString(),
      title: album.title || album.name || 'Unknown Album',
      artist: album.artist?.name || album.artists?.[0]?.name || 'Unknown Artist',
      album: 'Album',
      coverUrl: album.cover
        ? `https://resources.tidal.com/images/${album.cover.replace(/-/g, '/')}/320x320.jpg`
        : undefined,
      tidalUrl: album.url || `https://tidal.com/album/${album.id}`,
      likes: 0,
      isLiked: false,
      isBookmarked: false,
    }
  }

  // Format duration from seconds
  function formatDuration(seconds: number): string {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  // Fetch Tidal profile
  async function fetchTidalFeed() {
    isLoading.value = true
    error.value = null

    const profileUrl = `https://tidal.com/@${config.username}`

    try {
      let html: string | null = null

      for (const proxy of CORS_PROXIES) {
        try {
          const response = await fetch(proxy + encodeURIComponent(profileUrl))
          if (response.ok) {
            html = await response.text()
            break
          }
        } catch (e) {
          console.warn(`Failed with proxy ${proxy}:`, e)
          continue
        }
      }

      if (!html) {
        throw new Error('Failed to fetch Tidal profile from all proxies')
      }

      const items = parseTidalPage(html)

      if (items.length > 0) {
        tracks.value = items
      } else {
        // Use fallback data
        useFallbackData()
      }
    } catch (e) {
      console.error('Failed to fetch Tidal feed:', e)
      error.value = 'Could not fetch Tidal profile'
      useFallbackData()
    } finally {
      isLoading.value = false
    }
  }

  // Fallback data
  function useFallbackData() {
    tracks.value = [
      {
        id: 'tidal-fallback-001',
        type: 'tidal',
        _type: 'tidalTrack',
        _createdAt: new Date().toISOString(),
        title: `${config.label || 'Tidal'} Profile`,
        artist: config.username,
        album: 'Check out my music on Tidal',
        tidalUrl: `https://tidal.com/@${config.username}`,
        likes: 0,
        isLiked: false,
        isBookmarked: false,
      }
    ]
  }

  // Auto-fetch on mount
  onMounted(() => {
    if (config.autoFetch) {
      fetchTidalFeed()
    }
  })

  return {
    tracks,
    isLoading,
    error,
    fetchTidalFeed,
    config
  }
}
