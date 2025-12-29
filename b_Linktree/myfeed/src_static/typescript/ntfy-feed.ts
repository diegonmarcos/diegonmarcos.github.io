// ntfy Feed Module (CloudFeed)
// ====================================

interface NtfyMessage {
  id: string;
  time: number;
  expires: number;
  event: string;
  topic: string;
  title?: string;
  message?: string;
  priority?: number;
  tags?: string[];
}

interface Channel {
  id: string;
  name: string;
  color: string;
  description: string;
}

const NTFY_BASE = 'https://rss.diegonmarcos.com';

const CORS_PROXIES = [
  'https://api.allorigins.win/raw?url=',
  'https://corsproxy.io/?',
];

const appsChannels: Channel[] = [
  { id: 'github', name: 'GitHub', color: '#238636', description: 'Repository activity, commits, PRs' }
];

const jornaldChannels: Channel[] = [
  { id: 'system', name: 'System', color: '#d29922', description: 'Health What/How' },
  { id: 'auth', name: 'Auth', color: '#a371f7', description: 'Security Who' },
  { id: 'sauron', name: 'Sauron', color: '#f85149', description: 'Security scans' },
  { id: 'public', name: 'Public', color: '#58a6ff', description: 'General' }
];

const allChannels = [...appsChannels, ...jornaldChannels];

const messages = new Map<string, NtfyMessage[]>();
let lastUpdate: Date | null = null;
let refreshInterval: ReturnType<typeof setInterval> | null = null;

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

async function fetchChannel(channel: Channel): Promise<NtfyMessage[]> {
  const url = `${NTFY_BASE}/${channel.id}/json?poll=1`;
  try {
    const text = await fetchWithProxy(url);
    if (!text) return [];
    const lines = text.trim().split('\n').filter(l => l);
    const msgs: NtfyMessage[] = [];
    for (const line of lines) {
      try {
        const msg = JSON.parse(line) as NtfyMessage;
        if (msg.event === 'message') msgs.push(msg);
      } catch (e) {}
    }
    return msgs.sort((a, b) => b.time - a.time).slice(0, 50);
  } catch (e) {
    console.warn(`Failed to fetch ${channel.id}:`, e);
    return [];
  }
}

async function fetchAll(): Promise<void> {
  showLoading(true);
  hideError();

  const results = await Promise.allSettled(
    allChannels.map(async (ch) => {
      const msgs = await fetchChannel(ch);
      return { id: ch.id, msgs };
    })
  );

  messages.clear();
  let totalFetched = 0;

  for (const result of results) {
    if (result.status === 'fulfilled') {
      messages.set(result.value.id, result.value.msgs);
      totalFetched += result.value.msgs.length;
    }
  }

  lastUpdate = new Date();
  showLoading(false);

  if (totalFetched === 0) {
    showError('No messages fetched. Check network or CORS.');
  }

  renderChannels();
  updateLastUpdate();
  updateCounts();
}

function formatTime(timestamp: number): string {
  const date = new Date(timestamp * 1000);
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

function getPriorityClass(priority?: number): string {
  if (!priority || priority <= 2) return 'priority-low';
  if (priority === 3) return 'priority-default';
  if (priority === 4) return 'priority-high';
  return 'priority-urgent';
}

function renderMessage(msg: NtfyMessage): string {
  return `
    <div class="message-item ${getPriorityClass(msg.priority)}">
      <div class="message-header">
        <span class="message-topic">${msg.topic}</span>
        <span class="message-time">${formatTime(msg.time)}</span>
      </div>
      <div class="message-title">${msg.title || 'Notification'}</div>
      ${msg.message ? `<div class="message-body">${msg.message}</div>` : ''}
    </div>
  `;
}

function renderChannelCard(channel: Channel): string {
  const channelMsgs = messages.get(channel.id) || [];
  const msgCount = channelMsgs.length;

  let messagesHtml: string;
  if (msgCount === 0) {
    messagesHtml = '<div class="empty-state">No messages</div>';
  } else {
    messagesHtml = channelMsgs.map(renderMessage).join('');
  }

  return `
    <div class="channel-card">
      <div class="channel-header" style="border-color: ${channel.color}">
        <div class="channel-info">
          <h3>${channel.name}</h3>
          <span class="channel-desc">${channel.description}</span>
        </div>
        <span class="channel-count" style="background: ${channel.color}">${msgCount}</span>
      </div>
      <div class="messages-container">${messagesHtml}</div>
      <div class="channel-footer">
        <a href="${NTFY_BASE}/${channel.id}/json?poll=1" target="_blank">JSON</a>
        <a href="${NTFY_BASE}/${channel.id}" target="_blank">ntfy</a>
      </div>
    </div>
  `;
}

function renderChannels(): void {
  const appsContainer = document.getElementById('apps-channels');
  const jornaldContainer = document.getElementById('jornald-channels');

  if (appsContainer) {
    appsContainer.innerHTML = appsChannels.map(renderChannelCard).join('');
  }

  if (jornaldContainer) {
    jornaldContainer.innerHTML = jornaldChannels.map(renderChannelCard).join('');
  }

  renderChannelsTable();
}

function renderChannelsTable(): void {
  const tbody = document.getElementById('channels-table-body');
  if (!tbody) return;

  tbody.innerHTML = allChannels.map(channel => `
    <tr>
      <td><span class="channel-badge" style="background: ${channel.color}">${channel.name}</span></td>
      <td class="desc-cell">${channel.description}</td>
      <td><a href="${NTFY_BASE}/${channel.id}/json?poll=1" target="_blank">json</a></td>
      <td><a href="${NTFY_BASE}/${channel.id}/sse" target="_blank">sse</a></td>
      <td><a href="${NTFY_BASE}/${channel.id}/ws" target="_blank">ws</a></td>
    </tr>
  `).join('');
}

function updateLastUpdate(): void {
  const el = document.getElementById('last-update');
  if (el && lastUpdate) {
    el.textContent = formatTime(lastUpdate.getTime() / 1000);
  }
}

function updateCounts(): void {
  let appsCount = 0;
  let jornaldCount = 0;

  appsChannels.forEach(ch => {
    appsCount += messages.get(ch.id)?.length || 0;
  });

  jornaldChannels.forEach(ch => {
    jornaldCount += messages.get(ch.id)?.length || 0;
  });

  const appsCountEl = document.getElementById('apps-count');
  const jornaldCountEl = document.getElementById('jornald-count');

  if (appsCountEl) appsCountEl.textContent = String(appsCount);
  if (jornaldCountEl) jornaldCountEl.textContent = String(jornaldCount);
}

function showLoading(loading: boolean): void {
  const refreshIcon = document.getElementById('refresh-icon');
  if (refreshIcon) {
    if (loading) {
      refreshIcon.classList.add('spinning');
    } else {
      refreshIcon.classList.remove('spinning');
    }
  }
}

function showError(message: string): void {
  const banner = document.getElementById('error-banner');
  if (banner) {
    banner.textContent = message;
    banner.style.display = 'block';
  }
}

function hideError(): void {
  const banner = document.getElementById('error-banner');
  if (banner) {
    banner.style.display = 'none';
  }
}

export function initNtfyFeed(): void {
  fetchAll();

  refreshInterval = setInterval(fetchAll, 60000);

  const refreshBtn = document.getElementById('cloudfeed-refresh');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', fetchAll);
  }

  window.addEventListener('beforeunload', () => {
    if (refreshInterval) clearInterval(refreshInterval);
  });
}
