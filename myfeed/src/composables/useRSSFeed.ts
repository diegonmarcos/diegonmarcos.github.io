import { ref, computed } from 'vue'

export interface NewsItem {
  id: string
  title: string
  description?: string
  source: string
  sourceUrl?: string
  url: string
  publishedAt: string
  category?: string
}

// CORS proxies for fetching RSS feeds
const CORS_PROXIES = [
  'https://api.allorigins.win/raw?url=',
  'https://corsproxy.io/?',
]

// Google News RSS URLs
const GOOGLE_NEWS_FEEDS: Record<string, string> = {
  headlines: 'https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en',
  world: 'https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx1YlY4U0FtVnVHZ0pWVXlnQVAB?hl=en-US&gl=US&ceid=US:en',
  tech: 'https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGRqTVhZU0FtVnVHZ0pWVXlnQVAB?hl=en-US&gl=US&ceid=US:en',
  science: 'https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp0Y1RjU0FtVnVHZ0pWVXlnQVAB?hl=en-US&gl=US&ceid=US:en',
  markets: 'https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx6TVdZU0FtVnVHZ0pWVXlnQVAB?hl=en-US&gl=US&ceid=US:en',
}

// Cache for RSS feeds
const cache = new Map<string, { data: NewsItem[]; timestamp: number }>()
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

async function fetchWithProxy(url: string): Promise<string | null> {
  for (const proxy of CORS_PROXIES) {
    try {
      const response = await fetch(proxy + encodeURIComponent(url))
      if (response.ok) {
        return await response.text()
      }
    } catch (e) {
      console.warn(`Proxy ${proxy} failed for ${url}`)
    }
  }
  return null
}

function parseRSSItem(item: Element, source: string): NewsItem {
  const title = item.querySelector('title')?.textContent || 'No title'
  const link = item.querySelector('link')?.textContent || ''
  const description = item.querySelector('description')?.textContent || ''
  const pubDate = item.querySelector('pubDate')?.textContent || new Date().toISOString()
  const guid = item.querySelector('guid')?.textContent || link

  // Clean up Google News title (remove source suffix)
  const cleanTitle = title.replace(/ - [^-]+$/, '')

  // Extract source from Google News title if available
  const sourceMatch = title.match(/ - ([^-]+)$/)
  const itemSource = sourceMatch ? sourceMatch[1] : source

  // Clean description (remove HTML)
  const cleanDescription = description
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim()
    .slice(0, 200)

  return {
    id: guid || `${link}-${Date.now()}`,
    title: cleanTitle,
    description: cleanDescription || undefined,
    source: itemSource,
    url: link,
    publishedAt: pubDate,
  }
}

async function fetchRSSFeed(category: string): Promise<NewsItem[]> {
  const url = GOOGLE_NEWS_FEEDS[category]
  if (!url) {
    console.warn(`Unknown category: ${category}`)
    return []
  }

  // Check cache
  const cached = cache.get(category)
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data
  }

  try {
    const xml = await fetchWithProxy(url)
    if (!xml) {
      console.warn(`Failed to fetch RSS for ${category}`)
      return cached?.data || []
    }

    const parser = new DOMParser()
    const doc = parser.parseFromString(xml, 'text/xml')
    const items = doc.querySelectorAll('item')

    const newsItems: NewsItem[] = []
    items.forEach((item, index) => {
      if (index < 30) { // Limit to 30 items
        newsItems.push(parseRSSItem(item, 'Google News'))
      }
    })

    // Update cache
    cache.set(category, { data: newsItems, timestamp: Date.now() })

    return newsItems
  } catch (e) {
    console.error(`Error fetching RSS for ${category}:`, e)
    return cached?.data || []
  }
}

export function useRSSFeed(initialCategory: string = 'headlines') {
  const category = ref(initialCategory)
  const items = ref<NewsItem[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const categories = [
    { id: 'headlines', label: 'Headlines' },
    { id: 'world', label: 'World' },
    { id: 'tech', label: 'Tech' },
    { id: 'science', label: 'Science' },
    { id: 'markets', label: 'Markets' },
  ]

  async function loadFeed(cat?: string) {
    if (cat) {
      category.value = cat
    }

    loading.value = true
    error.value = null

    try {
      items.value = await fetchRSSFeed(category.value)
    } catch (e) {
      error.value = 'Failed to load news feed'
      console.error(e)
    } finally {
      loading.value = false
    }
  }

  // Group items by time
  const groupedItems = computed(() => {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const yesterday = new Date(today.getTime() - 86400000)

    const groups: { label: string; items: NewsItem[] }[] = [
      { label: 'Today', items: [] },
      { label: 'Yesterday', items: [] },
      { label: 'Earlier', items: [] },
    ]

    items.value.forEach((item) => {
      const itemDate = new Date(item.publishedAt)
      if (itemDate >= today) {
        groups[0].items.push(item)
      } else if (itemDate >= yesterday) {
        groups[1].items.push(item)
      } else {
        groups[2].items.push(item)
      }
    })

    return groups.filter((g) => g.items.length > 0)
  })

  // Load initial feed
  loadFeed()

  return {
    category,
    categories,
    items,
    groupedItems,
    loading,
    error,
    loadFeed,
  }
}
