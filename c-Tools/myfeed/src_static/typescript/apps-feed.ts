// Apps Feed Module - Personal App RSS Aggregator
// ================================================

interface FeedItem {
  id: string;
  title: string;
  link: string;
  date: Date;
  description?: string;
}

interface AppFeed {
  id: string;
  name: string;
  color: string;
  url: string;
  enabled: boolean;
}

// CORS Proxies for RSS fetching
const CORS_PROXIES = [
  'https://api.allorigins.win/raw?url=',
  'https://corsproxy.io/?',
];

// ============================================
// APP FEED CONFIGURATIONS
// Edit URLs with your usernames
// ============================================

const APP_FEEDS: AppFeed[] = [
  {
    id: 'github',
    name: 'GitHub',
    color: '#238636',
    url: 'https://github.com/diegonmarcos.atom',
    enabled: true,
  },
  {
    id: 'youtube',
    name: 'YouTube',
    color: '#ff0000',
    url: '', // Add: youtube.com/feeds/videos.xml?channel_id=YOUR_ID
    enabled: false,
  },
  {
    id: 'lastfm',
    name: 'Last.fm',
    color: '#d51007',
    url: '', // Add: last.fm/user/USERNAME/rss
    enabled: false,
  },
  {
    id: 'reddit',
    name: 'Reddit',
    color: '#ff4500',
    url: '', // Add: reddit.com/user/USERNAME/.rss
    enabled: false,
  },
  {
    id: 'letterboxd',
    name: 'Letterboxd',
    color: '#00d735',
    url: '', // Add: letterboxd.com/USERNAME/rss/
    enabled: false,
  },
  {
    id: 'mastodon',
    name: 'Mastodon',
    color: '#6364ff',
    url: '', // Add: instance/@USERNAME.rss
    enabled: false,
  },
  {
    id: 'goodreads',
    name: 'Goodreads',
    color: '#553b08',
    url: '', // Add: goodreads.com/user/updates_rss/USER_ID
    enabled: false,
  },
  {
    id: 'devto',
    name: 'DEV.to',
    color: '#0a0a0a',
    url: '', // Add: dev.to/feed/USERNAME
    enabled: false,
  },
];

// ============================================
// RSS/ATOM PARSING
// ============================================

async function fetchWithProxy(url: string): Promise<string | null> {
  try {
    const response = await fetch(url, { mode: 'cors' });
    if (response.ok) return await response.text();
  } catch (e) {}

  for (const proxy of CORS_PROXIES) {
    try {
      const response = await fetch(proxy + encodeURIComponent(url));
      if (response.ok) return await response.text();
    } catch (e) {
      console.warn(`Proxy ${proxy} failed`);
    }
  }
  return null;
}

function parseRSS(xml: string): FeedItem[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, 'text/xml');
  const items: FeedItem[] = [];

  // Try RSS format
  doc.querySelectorAll('item').forEach((item, index) => {
    if (index >= 15) return;
    const title = item.querySelector('title')?.textContent || '';
    const link = item.querySelector('link')?.textContent || '';
    const pubDate = item.querySelector('pubDate')?.textContent;
    const description = item.querySelector('description')?.textContent || '';

    items.push({
      id: `rss-${index}`,
      title: title.replace(/<!\[CDATA\[|\]\]>/g, '').trim(),
      link,
      date: pubDate ? new Date(pubDate) : new Date(),
      description: description.replace(/<[^>]*>/g, '').slice(0, 100),
    });
  });

  // Try Atom format if no RSS items
  if (items.length === 0) {
    doc.querySelectorAll('entry').forEach((entry, index) => {
      if (index >= 15) return;
      const title = entry.querySelector('title')?.textContent || '';
      const linkEl = entry.querySelector('link[href]');
      const link = linkEl?.getAttribute('href') || '';
      const updated = entry.querySelector('updated')?.textContent ||
                     entry.querySelector('published')?.textContent;

      items.push({
        id: `atom-${index}`,
        title: title.trim(),
        link,
        date: updated ? new Date(updated) : new Date(),
      });
    });
  }

  return items;
}

// ============================================
// CACHING
// ============================================

const CACHE_KEY = 'apps-feed-cache';
const CACHE_DURATION = 5 * 60 * 1000;

interface CacheData {
  [feedId: string]: { items: FeedItem[]; timestamp: number };
}

function getCache(feedId: string): FeedItem[] | null {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const data = JSON.parse(cached) as CacheData;
      if (data[feedId] && Date.now() - data[feedId].timestamp < CACHE_DURATION) {
        return data[feedId].items.map(i => ({ ...i, date: new Date(i.date) }));
      }
    }
  } catch (e) {}
  return null;
}

function setCache(feedId: string, items: FeedItem[]): void {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    const data: CacheData = cached ? JSON.parse(cached) : {};
    data[feedId] = { items, timestamp: Date.now() };
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch (e) {}
}

function clearCache(): void {
  localStorage.removeItem(CACHE_KEY);
}

// ============================================
// RENDERING
// ============================================

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

function renderMessageItem(item: FeedItem): string {
  return `
    <div class="message-item">
      <div class="message-header">
        <span class="message-time">${formatTime(item.date)}</span>
      </div>
      <a href="${item.link}" target="_blank" class="message-title">${item.title}</a>
      ${item.description ? `<div class="message-body">${item.description}</div>` : ''}
    </div>
  `;
}

function renderLoading(): string {
  return `<div class="loading-state"><div class="skeleton-row"></div><div class="skeleton-row"></div></div>`;
}

function renderEmpty(message = 'No items'): string {
  return `<div class="empty-state">${message}</div>`;
}

// ============================================
// FEED FETCHING
// ============================================

async function fetchFeed(feed: AppFeed): Promise<FeedItem[]> {
  if (!feed.enabled || !feed.url) return [];

  const cached = getCache(feed.id);
  if (cached) return cached;

  try {
    const xml = await fetchWithProxy(feed.url);
    if (!xml) return [];
    const items = parseRSS(xml);
    setCache(feed.id, items);
    return items;
  } catch (e) {
    console.warn(`Failed to fetch ${feed.name}:`, e);
    return [];
  }
}

async function loadFeed(feed: AppFeed): Promise<void> {
  const container = document.getElementById(`${feed.id}-feed`);
  const countEl = document.getElementById(`${feed.id}-count`);

  if (!container) return;

  if (!feed.enabled || !feed.url) {
    container.innerHTML = renderEmpty('Configure in apps-feed.ts');
    if (countEl) countEl.textContent = '0';
    return;
  }

  container.innerHTML = renderLoading();

  const items = await fetchFeed(feed);

  if (items.length === 0) {
    container.innerHTML = renderEmpty('No items');
  } else {
    container.innerHTML = items.map(renderMessageItem).join('');
  }

  if (countEl) countEl.textContent = String(items.length);
}

// ============================================
// INITIALIZATION
// ============================================

export async function initAppsFeed(): Promise<void> {
  // Load all feeds in parallel
  await Promise.all(APP_FEEDS.map(loadFeed));

  // Update last update time
  const lastUpdateEl = document.getElementById('apps-last-update');
  if (lastUpdateEl) {
    lastUpdateEl.textContent = `Updated ${formatTime(new Date())}`;
  }

  // Refresh button
  const refreshBtn = document.getElementById('appsfeed-refresh');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', async () => {
      clearCache();
      await Promise.all(APP_FEEDS.map(loadFeed));
      if (lastUpdateEl) {
        lastUpdateEl.textContent = `Updated ${formatTime(new Date())}`;
      }
    });
  }
}
