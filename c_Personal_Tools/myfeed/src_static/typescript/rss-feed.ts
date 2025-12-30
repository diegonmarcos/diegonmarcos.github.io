// RSS Feed Module (News)
// ====================================

interface NewsItem {
  id: string;
  title: string;
  source: string;
  url: string;
  publishedAt: Date;
}

const CORS_PROXIES = [
  'https://api.allorigins.win/raw?url=',
  'https://corsproxy.io/?',
];

const NEWS_FEEDS: Record<string, { url: string; source: string }> = {
  world: {
    url: 'https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx1YlY4U0FtVnVHZ0pWVXlnQVAB?hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
  },
  tech: {
    url: 'https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGRqTVhZU0FtVnVHZ0pWVXlnQVAB?hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
  },
  science: {
    url: 'https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp0Y1RjU0FtVnVHZ0pWVXlnQVAB?hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
  },
  markets: {
    url: 'https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx6TVdZU0FtVnVHZ0pWVXlnQVAB?hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
  },
  hn: {
    url: 'https://hnrss.org/newest?points=50',
    source: 'Hacker News',
  },
};

const cache = new Map<string, { data: NewsItem[]; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000;

async function fetchWithProxy(url: string): Promise<string | null> {
  for (const proxy of CORS_PROXIES) {
    try {
      const response = await fetch(proxy + encodeURIComponent(url));
      if (response.ok) {
        return await response.text();
      }
    } catch (e) {
      console.warn(`Proxy ${proxy} failed for ${url}`);
    }
  }
  return null;
}

function parseRSSItem(item: Element, source: string, index: number): NewsItem {
  const title = item.querySelector('title')?.textContent || 'No title';
  const link = item.querySelector('link')?.textContent || '';
  const pubDate = item.querySelector('pubDate')?.textContent || new Date().toISOString();

  // Clean Google News title (remove source suffix)
  const cleanTitle = title.replace(/ - [^-]+$/, '');

  return {
    id: `news-${index}`,
    title: cleanTitle,
    source,
    url: link,
    publishedAt: new Date(pubDate),
  };
}

async function fetchRSSFeed(category: string): Promise<NewsItem[]> {
  const feed = NEWS_FEEDS[category];
  if (!feed) return [];

  const cached = cache.get(category);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }

  try {
    const xml = await fetchWithProxy(feed.url);
    if (!xml) return cached?.data || [];

    const parser = new DOMParser();
    const doc = parser.parseFromString(xml, 'text/xml');
    const items = doc.querySelectorAll('item');

    const newsItems: NewsItem[] = [];
    items.forEach((item, index) => {
      if (index < 15) {
        newsItems.push(parseRSSItem(item, feed.source, index));
      }
    });

    cache.set(category, { data: newsItems, timestamp: Date.now() });
    return newsItems;
  } catch (e) {
    console.error(`Error fetching RSS for ${category}:`, e);
    return cached?.data || [];
  }
}

function formatTime(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const mins = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (mins < 1) return 'now';
  if (mins < 60) return `${mins}m`;
  if (hours < 24) return `${hours}h`;
  if (days < 7) return `${days}d`;
  return date.toLocaleDateString();
}

function renderMessageItem(item: NewsItem): string {
  return `
    <div class="message-item">
      <div class="message-header">
        <span class="message-topic">${item.source}</span>
        <span class="message-time">${formatTime(item.publishedAt)}</span>
      </div>
      <a href="${item.url}" target="_blank" class="message-title">${item.title}</a>
    </div>
  `;
}

function renderLoading(): string {
  return `<div class="loading-state"><div class="skeleton-row"></div><div class="skeleton-row"></div></div>`;
}

function renderEmpty(): string {
  return `<div class="empty-state">No news available</div>`;
}

export async function initRSSFeed(): Promise<void> {
  const categories = ['world', 'tech', 'science', 'markets', 'hn'];

  // Show loading in all containers
  categories.forEach(cat => {
    const el = document.getElementById(`${cat}-feed`);
    if (el) el.innerHTML = renderLoading();
  });

  // Fetch all categories in parallel
  const results = await Promise.all(
    categories.map(async cat => {
      const items = await fetchRSSFeed(cat);
      return { category: cat, items };
    })
  );

  // Render to containers
  results.forEach(({ category, items }) => {
    const container = document.getElementById(`${category}-feed`);
    const countEl = document.getElementById(`${category}-count`);

    if (!container) return;

    if (items.length === 0) {
      container.innerHTML = renderEmpty();
    } else {
      container.innerHTML = items.map(renderMessageItem).join('');
    }

    if (countEl) countEl.textContent = String(items.length);
  });

  // Update last update time
  const lastUpdateEl = document.getElementById('news-last-update');
  if (lastUpdateEl) {
    lastUpdateEl.textContent = `Updated ${formatTime(new Date())}`;
  }

  // Refresh button
  const refreshBtn = document.getElementById('newsfeed-refresh');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', async () => {
      cache.clear();
      await initRSSFeed();
    });
  }
}
