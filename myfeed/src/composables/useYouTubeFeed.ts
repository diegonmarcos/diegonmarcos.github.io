import { ref, onMounted } from 'vue'
import type { YouTubeVideo } from '@/types/feed'

// Configuration options
export interface YouTubeFeedOptions {
  // Feed source (use one of these)
  channelHandle?: string      // e.g., 'diegonmarcos1' (without @)
  channelId?: string          // e.g., 'UCxxxxxx'
  playlistId?: string         // e.g., 'PLxxxxxx'

  // Display options
  maxItems?: number           // Limit number of videos
  autoFetch?: boolean         // Auto-fetch on mount (default: true)
  label?: string              // Custom label for the feed source (e.g., 'MUSIC', 'CS_NEWS')
}

// Default configuration
const DEFAULT_OPTIONS: YouTubeFeedOptions = {
  channelHandle: 'diegonmarcos1',
  maxItems: 15,
  autoFetch: true,
}

// CORS proxies to try (in order)
const CORS_PROXIES = [
  'https://api.allorigins.win/raw?url=',
  'https://corsproxy.io/?',
]

interface YouTubeRSSEntry {
  id: string
  videoId: string
  title: string
  published: string
  updated: string
  author: string
  description: string
  thumbnail: string
}

export function useYouTubeFeed(options: YouTubeFeedOptions = {}) {
  const config = { ...DEFAULT_OPTIONS, ...options }

  const videos = ref<YouTubeVideo[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const channelId = ref<string | null>(config.channelId || null)
  const playlistId = ref<string | null>(config.playlistId || null)

  // Extract channel ID from channel page (only needed if using channelHandle)
  async function getChannelId(): Promise<string | null> {
    if (!config.channelHandle) return null

    const channelUrl = `https://www.youtube.com/@${config.channelHandle}`

    for (const proxy of CORS_PROXIES) {
      try {
        const response = await fetch(proxy + encodeURIComponent(channelUrl))
        const html = await response.text()

        // Extract channel ID from page HTML
        const channelIdMatch = html.match(/channel_id=([a-zA-Z0-9_-]+)/)
        if (channelIdMatch) {
          return channelIdMatch[1]
        }

        // Alternative pattern
        const browseIdMatch = html.match(/"browseId":"(UC[a-zA-Z0-9_-]+)"/)
        if (browseIdMatch) {
          return browseIdMatch[1]
        }

        // Try external channel ID pattern
        const externalIdMatch = html.match(/"externalChannelId":"(UC[a-zA-Z0-9_-]+)"/)
        if (externalIdMatch) {
          return externalIdMatch[1]
        }
      } catch (e) {
        console.warn(`Failed to get channel ID via proxy ${proxy}:`, e)
        continue
      }
    }

    return null
  }

  // Build the RSS feed URL based on config
  function buildFeedUrl(): string | null {
    // Priority: playlist > channelId > channelHandle (requires lookup)
    if (config.playlistId) {
      return `https://www.youtube.com/feeds/videos.xml?playlist_id=${config.playlistId}`
    }

    if (channelId.value) {
      return `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId.value}`
    }

    return null
  }

  // Parse YouTube RSS XML
  function parseYouTubeRSS(xmlText: string): YouTubeRSSEntry[] {
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(xmlText, 'text/xml')
    const entries = xmlDoc.querySelectorAll('entry')
    const items: YouTubeRSSEntry[] = []

    entries.forEach((entry) => {
      const id = entry.querySelector('id')?.textContent || ''
      const videoId = entry.querySelector('yt\\:videoId, videoId')?.textContent ||
                      id.replace('yt:video:', '')
      const title = entry.querySelector('title')?.textContent || ''
      const published = entry.querySelector('published')?.textContent || ''
      const updated = entry.querySelector('updated')?.textContent || ''
      const author = entry.querySelector('author > name')?.textContent || ''

      // Get description from media:group > media:description
      const description = entry.querySelector('media\\:group media\\:description, group description')?.textContent || ''

      // Get thumbnail from media:group > media:thumbnail
      const thumbnailUrl = entry.querySelector('media\\:group media\\:thumbnail, group thumbnail')?.getAttribute('url') ||
                          `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`

      if (videoId) {
        items.push({
          id: videoId,
          videoId,
          title,
          published,
          updated,
          author,
          description,
          thumbnail: thumbnailUrl
        })
      }
    })

    return items
  }

  // Convert RSS entries to YouTubeVideo type
  function convertToFeedItems(entries: YouTubeRSSEntry[], channelName: string, channelIdVal: string): YouTubeVideo[] {
    // Use label if provided, otherwise use channel name
    const displayName = config.label
      ? `${config.label}`
      : channelName

    return entries.map((entry, index) => ({
      id: `yt-${config.playlistId || 'channel'}-${entry.videoId}`,
      type: 'youtube' as const,
      _type: 'youtubeVideo' as const,
      _createdAt: entry.published,

      videoId: entry.videoId,
      title: entry.title,
      description: entry.description.substring(0, 200) + (entry.description.length > 200 ? '...' : ''),

      channel: {
        name: displayName,
        id: channelIdVal,
        thumbnail: undefined
      },

      publishDate: entry.published,
      duration: '', // Not available from RSS

      likes: 0,
      isLiked: false,
      isBookmarked: false,
    }))
  }

  // Fetch YouTube RSS feed
  async function fetchYouTubeFeed() {
    isLoading.value = true
    error.value = null

    try {
      // If using playlist, we can fetch directly
      // If using channelHandle without channelId, we need to look it up first
      if (!config.playlistId && !channelId.value && config.channelHandle) {
        const cId = await getChannelId()
        if (cId) {
          channelId.value = cId
        }
      }

      const feedUrl = buildFeedUrl()

      if (!feedUrl) {
        error.value = 'Could not determine feed URL (no playlist, channel ID, or channel handle)'
        useFallbackData()
        return
      }

      let xmlText: string | null = null

      for (const proxy of CORS_PROXIES) {
        try {
          const response = await fetch(proxy + encodeURIComponent(feedUrl))
          if (response.ok) {
            xmlText = await response.text()
            break
          }
        } catch (e) {
          console.warn(`Failed with proxy ${proxy}:`, e)
          continue
        }
      }

      if (!xmlText) {
        throw new Error('Failed to fetch YouTube feed from all proxies')
      }

      let entries = parseYouTubeRSS(xmlText)

      // Apply maxItems limit
      if (config.maxItems && entries.length > config.maxItems) {
        entries = entries.slice(0, config.maxItems)
      }

      if (entries.length > 0) {
        const sourceName = config.playlistId
          ? `Playlist ${config.playlistId}`
          : entries[0].author || config.channelHandle || 'YouTube'
        const sourceId = config.playlistId || channelId.value || ''
        videos.value = convertToFeedItems(entries, sourceName, sourceId)
      } else {
        error.value = 'No videos found in feed'
        useFallbackData()
      }
    } catch (e) {
      console.error('Failed to fetch YouTube feed:', e)
      error.value = 'Could not fetch YouTube feed'
      useFallbackData()
    } finally {
      isLoading.value = false
    }
  }

  // Fallback data if fetch fails
  function useFallbackData() {
    const sourceName = config.playlistId
      ? `Playlist`
      : config.channelHandle || 'YouTube'

    videos.value = [
      {
        id: 'yt-fallback-001',
        type: 'youtube',
        _type: 'youtubeVideo',
        _createdAt: new Date().toISOString(),
        videoId: 'dQw4w9WgXcQ', // Placeholder
        title: `Latest Video from ${sourceName}`,
        description: 'Check out the YouTube channel/playlist for the latest updates!',
        channel: {
          name: sourceName,
          id: config.playlistId || channelId.value || '',
        },
        publishDate: new Date().toISOString(),
        duration: '',
        likes: 0,
        isLiked: false,
        isBookmarked: false,
      }
    ]
  }

  // Auto-fetch on mount (if enabled)
  onMounted(() => {
    if (config.autoFetch) {
      fetchYouTubeFeed()
    }
  })

  return {
    videos,
    isLoading,
    error,
    fetchYouTubeFeed,
    channelId,
    playlistId,
    config
  }
}
