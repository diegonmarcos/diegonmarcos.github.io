/**
 * Central Alert System - CloudFeed
 * Fetches from Alerts API (primary) or ntfy (fallback)
 */

// ============ TYPES ============

interface Alert {
  id: number;
  timestamp: string;
  vm: string;
  service: string;
  topic: string;
  title: string;
  message: string;
  priority: string;
  tags: string;
  log_cmd: string;
  log_path: string;
  acknowledged: number;
  ntfy_id: string;
}

interface NtfyMessage {
  id: string;
  time: number;
  event: string;
  topic: string;
  title?: string;
  message?: string;
  priority?: number;
  tags?: string[];
}

interface Stats {
  total: number;
  by_priority: Record<string, number>;
  by_service: Record<string, number>;
  by_vm: Record<string, number>;
}

interface VM {
  name: string;
  status: string;
  last_seen: string;
}

interface Service {
  name: string;
  vm: string;
  status: string;
  last_seen: string;
}

// ============ CONFIG ============

const API_URL = 'https://alerts.diegonmarcos.com';
const NTFY_URL = 'https://rss.diegonmarcos.com';
const CORS_PROXIES = [
  'https://api.allorigins.win/raw?url=',
  'https://corsproxy.io/?',
];

// Service category mapping
const SECURITY_SERVICES = ['ssh', 'auth', 'sauron', 'authelia'];
const HEALTH_SERVICES = ['system', 'docker', 'npm', 'mailu', 'collector'];

// Known VMs (for status display when API not available)
const KNOWN_VMS = [
  { name: 'gcp-arch', ip: '34.55.55.234' },
  { name: 'oci-flex', ip: '84.235.234.87' },
  { name: 'oci-micro-1', ip: '130.110.251.193' },
  { name: 'oci-micro-2', ip: '129.151.228.66' },
];

// Known Services
const KNOWN_SERVICES = ['ssh', 'docker', 'system', 'sauron', 'collector', 'npm', 'authelia', 'mailu'];

// ============ STATE ============

let alerts: Alert[] = [];
let stats: Stats | null = null;
let vms: VM[] = [];
let services: Service[] = [];
let currentCategory = 'all';
let currentTimeFilter = '24h';
let searchQuery = '';
let vmFilter = '';
let serviceFilter = '';
let refreshInterval: ReturnType<typeof setInterval> | null = null;
let useApiMode = true;
let useDemoMode = false;

// Demo data when no API/ntfy available
const DEMO_ALERTS: Alert[] = [
  {
    id: 1,
    timestamp: new Date(Date.now() - 5 * 60000).toISOString(),
    vm: 'gcp-arch',
    service: 'ssh',
    topic: 'auth',
    title: 'SSH: 3 failed logins',
    message: '[gcp-arch] 3 failed SSH login attempts from 192.168.1.100',
    priority: 'high',
    tags: 'warning,lock',
    log_cmd: "journalctl -u sshd --since '30s ago' --no-pager",
    log_path: '',
    acknowledged: 0,
    ntfy_id: 'demo-1',
  },
  {
    id: 2,
    timestamp: new Date(Date.now() - 15 * 60000).toISOString(),
    vm: 'oci-flex',
    service: 'docker',
    topic: 'system',
    title: 'Docker: container crash',
    message: '[oci-flex] Container photoprism exited with code 137 (OOM)',
    priority: 'high',
    tags: 'whale,warning',
    log_cmd: "journalctl -u docker --since '5m ago' | grep -E 'died|killed|OOM'",
    log_path: '',
    acknowledged: 0,
    ntfy_id: 'demo-2',
  },
  {
    id: 3,
    timestamp: new Date(Date.now() - 30 * 60000).toISOString(),
    vm: 'gcp-arch',
    service: 'collector',
    topic: 'system',
    title: 'Collector started',
    message: '[gcp-arch] Log collector is now active',
    priority: 'low',
    tags: 'rocket',
    log_cmd: '',
    log_path: '',
    acknowledged: 0,
    ntfy_id: 'demo-3',
  },
  {
    id: 4,
    timestamp: new Date(Date.now() - 45 * 60000).toISOString(),
    vm: 'oci-micro-1',
    service: 'mailu',
    topic: 'system',
    title: 'Mail queue warning',
    message: '[oci-micro-1] Mail queue has 15 pending messages',
    priority: 'default',
    tags: 'email',
    log_cmd: "docker logs mailu-front --since '1h' | grep -i queue",
    log_path: '',
    acknowledged: 0,
    ntfy_id: 'demo-4',
  },
  {
    id: 5,
    timestamp: new Date(Date.now() - 2 * 3600000).toISOString(),
    vm: 'oci-flex',
    service: 'sauron',
    topic: 'sauron',
    title: 'Malware detected: oci-flex',
    message: 'YARA rule webshell_php matched in /watch/docker-volumes/uploads/shell.php',
    priority: 'urgent',
    tags: 'biohazard,skull',
    log_cmd: "docker logs sauron --since '1h'",
    log_path: '',
    acknowledged: 0,
    ntfy_id: 'demo-5',
  },
  {
    id: 6,
    timestamp: new Date(Date.now() - 3 * 3600000).toISOString(),
    vm: 'gcp-arch',
    service: 'authelia',
    topic: 'auth',
    title: 'Authelia: 2FA bypass attempt',
    message: '[gcp-arch] Failed 2FA verification for user admin from 10.0.0.55',
    priority: 'high',
    tags: 'warning,shield',
    log_cmd: "docker logs authelia --since '1h' | grep -i failed",
    log_path: '',
    acknowledged: 0,
    ntfy_id: 'demo-6',
  },
  {
    id: 7,
    timestamp: new Date(Date.now() - 60000).toISOString(),
    vm: 'gcp-arch',
    service: 'npm',
    topic: 'system',
    title: 'NPM: SSL certificate renewed',
    message: '[gcp-arch] Let\'s Encrypt certificate renewed for *.diegonmarcos.com',
    priority: 'default',
    tags: 'certificate,check',
    log_cmd: '',
    log_path: '',
    acknowledged: 0,
    ntfy_id: 'demo-7',
  },
  {
    id: 8,
    timestamp: new Date(Date.now() - 10 * 60000).toISOString(),
    vm: 'oci-micro-2',
    service: 'system',
    topic: 'system',
    title: 'Critical: Disk space low',
    message: '[oci-micro-2] Root partition at 95% capacity',
    priority: 'urgent',
    tags: 'rotating_light',
    log_cmd: "df -h / && du -sh /var/log/*",
    log_path: '',
    acknowledged: 0,
    ntfy_id: 'demo-8',
  },
];

// ============ HELPERS ============

async function fetchWithProxy(url: string): Promise<string | null> {
  // Try direct fetch first
  try {
    const response = await fetch(url, { mode: 'cors' });
    if (response.ok) return await response.text();
  } catch (e) {}

  // Try proxies
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

function formatTime(timestamp: string | number): string {
  const date = typeof timestamp === 'string' ? new Date(timestamp) : new Date(timestamp * 1000);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const mins = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (mins < 1) return 'now';
  if (mins < 60) return `${mins}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  return date.toLocaleDateString();
}

function formatFullTime(timestamp: string): string {
  const date = new Date(timestamp);
  return date.toLocaleString();
}

function getPriorityClass(priority: string | number): string {
  const p = typeof priority === 'number' ? priority :
    priority === 'urgent' ? 5 :
    priority === 'critical' ? 5 :
    priority === 'high' ? 4 :
    priority === 'default' ? 3 : 2;

  if (p >= 5) return 'priority-urgent';
  if (p >= 4) return 'priority-high';
  if (p >= 3) return 'priority-default';
  return 'priority-low';
}

function getServiceColor(service: string): string {
  const colors: Record<string, string> = {
    ssh: '#3fb950',
    auth: '#a371f7',
    sauron: '#f85149',
    docker: '#2496ed',
    system: '#8b949e',
    npm: '#f85149',
    mailu: '#d29922',
    authelia: '#a371f7',
    collector: '#58a6ff',
  };
  return colors[service] || '#8b949e';
}

function getCategory(service: string, topic: string): string {
  if (SECURITY_SERVICES.includes(service) || topic === 'auth' || topic === 'sauron') {
    return 'security';
  }
  if (HEALTH_SERVICES.includes(service) || topic === 'system') {
    return 'health';
  }
  return 'debug';
}

function showToast(message: string, duration = 3000): void {
  const toast = document.getElementById('toast');
  const toastMsg = toast?.querySelector('.toast-message');
  if (toast && toastMsg) {
    toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), duration);
  }
}

async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
    showToast('Copied to clipboard!');
  } catch (err) {
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast('Copied to clipboard!');
  }
}

// ============ API FETCHING ============

async function fetchFromApi(): Promise<boolean> {
  try {
    // Fetch alerts
    const alertsUrl = `${API_URL}/api/alerts?since=${currentTimeFilter}&limit=200`;
    const alertsResp = await fetchWithProxy(alertsUrl);
    if (alertsResp) {
      const data = JSON.parse(alertsResp);
      alerts = data.alerts || [];
    }

    // Fetch stats
    const statsUrl = `${API_URL}/api/stats?since=${currentTimeFilter}`;
    const statsResp = await fetchWithProxy(statsUrl);
    if (statsResp) {
      stats = JSON.parse(statsResp);
    }

    // Fetch VMs
    const vmsUrl = `${API_URL}/api/vms`;
    const vmsResp = await fetchWithProxy(vmsUrl);
    if (vmsResp) {
      const data = JSON.parse(vmsResp);
      vms = data.vms || [];
    }

    // Fetch services
    const servicesUrl = `${API_URL}/api/services`;
    const servicesResp = await fetchWithProxy(servicesUrl);
    if (servicesResp) {
      const data = JSON.parse(servicesResp);
      services = data.services || [];
    }

    return true;
  } catch (error) {
    console.warn('API fetch failed, falling back to ntfy:', error);
    return false;
  }
}

async function fetchFromNtfy(): Promise<boolean> {
  const topics = ['system', 'auth', 'sauron'];
  const allMessages: NtfyMessage[] = [];

  for (const topic of topics) {
    try {
      const url = `${NTFY_URL}/${topic}/json?poll=1`;
      const text = await fetchWithProxy(url);
      if (text) {
        const lines = text.trim().split('\n').filter(l => l);
        for (const line of lines) {
          try {
            const msg = JSON.parse(line) as NtfyMessage;
            if (msg.event === 'message') {
              allMessages.push(msg);
            }
          } catch (e) {}
        }
      }
    } catch (e) {
      console.warn(`Failed to fetch ntfy topic ${topic}`);
    }
  }

  // If no messages found, return false to trigger demo mode
  if (allMessages.length === 0) {
    return false;
  }

  // Convert ntfy messages to alerts format
  alerts = allMessages.map((msg, index) => ({
    id: index,
    timestamp: new Date(msg.time * 1000).toISOString(),
    vm: extractVmFromMessage(msg.message || msg.title || ''),
    service: guessServiceFromTopic(msg.topic),
    topic: msg.topic,
    title: msg.title || 'Notification',
    message: msg.message || '',
    priority: msg.priority?.toString() || 'default',
    tags: msg.tags?.join(',') || '',
    log_cmd: '',
    log_path: '',
    acknowledged: 0,
    ntfy_id: msg.id,
  })).sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

  generateStatsFromAlerts();
  return true;
}

function loadDemoData(): void {
  useDemoMode = true;
  alerts = DEMO_ALERTS;
  generateStatsFromAlerts();
  console.log('CloudFeed: Loaded demo data (API/ntfy unavailable)');
}

function generateStatsFromAlerts(): void {
  // Generate stats from alerts
  stats = {
    total: alerts.length,
    by_priority: {},
    by_service: {},
    by_vm: {},
  };

  alerts.forEach(alert => {
    stats!.by_priority[alert.priority] = (stats!.by_priority[alert.priority] || 0) + 1;
    stats!.by_service[alert.service] = (stats!.by_service[alert.service] || 0) + 1;
    stats!.by_vm[alert.vm] = (stats!.by_vm[alert.vm] || 0) + 1;
  });

  // Use known VMs/services
  vms = KNOWN_VMS.map(v => ({ name: v.name, status: 'unknown', last_seen: '' }));
  services = KNOWN_SERVICES.map(s => ({ name: s, vm: '', status: 'unknown', last_seen: '' }));
}

function extractVmFromMessage(message: string): string {
  const match = message.match(/\[([\w-]+)\]/);
  return match ? match[1] : 'unknown';
}

function guessServiceFromTopic(topic: string): string {
  if (topic === 'auth') return 'ssh';
  if (topic === 'sauron') return 'sauron';
  return 'system';
}

// ============ RENDERING ============

function renderCounters(): void {
  const criticalEl = document.querySelector('#counter-critical .counter-value');
  const highEl = document.querySelector('#counter-high .counter-value');
  const defaultEl = document.querySelector('#counter-default .counter-value');
  const totalEl = document.querySelector('#counter-total .counter-value');

  if (stats) {
    const critical = (stats.by_priority['urgent'] || 0) + (stats.by_priority['critical'] || 0) + (stats.by_priority['5'] || 0);
    const high = (stats.by_priority['high'] || 0) + (stats.by_priority['4'] || 0);
    const defaultCount = (stats.by_priority['default'] || 0) + (stats.by_priority['3'] || 0);

    if (criticalEl) criticalEl.textContent = String(critical);
    if (highEl) highEl.textContent = String(high);
    if (defaultEl) defaultEl.textContent = String(defaultCount);
    if (totalEl) totalEl.textContent = String(stats.total);
  }
}

function renderVmStatus(): void {
  const container = document.getElementById('vm-status');
  if (!container) return;

  const vmList = vms.length > 0 ? vms : KNOWN_VMS.map(v => ({ name: v.name, status: 'unknown', last_seen: '' }));

  container.innerHTML = vmList.map(vm => {
    const statusClass = vm.status === 'online' ? 'online' : vm.status === 'offline' ? 'offline' : 'unknown';
    const alertCount = stats?.by_vm[vm.name] || 0;
    return `
      <div class="status-card ${statusClass}">
        <div class="status-indicator"></div>
        <div class="status-info">
          <span class="status-name">${vm.name}</span>
          <span class="status-detail">${alertCount} alerts</span>
        </div>
      </div>
    `;
  }).join('');
}

function renderServiceStatus(): void {
  const container = document.getElementById('service-status');
  if (!container) return;

  const serviceList = services.length > 0 ? services : KNOWN_SERVICES.map(s => ({ name: s, vm: '', status: 'unknown', last_seen: '' }));

  container.innerHTML = serviceList.map(svc => {
    const color = getServiceColor(svc.name);
    const alertCount = stats?.by_service[svc.name] || 0;
    const statusClass = svc.status === 'active' ? 'online' : svc.status === 'error' ? 'offline' : 'unknown';
    return `
      <div class="status-card service ${statusClass}" style="--service-color: ${color}">
        <div class="status-indicator" style="background: ${color}"></div>
        <div class="status-info">
          <span class="status-name">${svc.name}</span>
          <span class="status-detail">${alertCount} alerts</span>
        </div>
      </div>
    `;
  }).join('');
}

function renderAlertFeed(): void {
  const container = document.getElementById('alert-feed');
  if (!container) return;

  // Filter alerts
  let filtered = alerts.filter(alert => {
    // Category filter
    if (currentCategory !== 'all') {
      const category = getCategory(alert.service, alert.topic);
      if (category !== currentCategory) return false;
    }

    // VM filter
    if (vmFilter && alert.vm !== vmFilter) return false;

    // Service filter
    if (serviceFilter && alert.service !== serviceFilter) return false;

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const searchable = `${alert.title} ${alert.message} ${alert.vm} ${alert.service}`.toLowerCase();
      if (!searchable.includes(query)) return false;
    }

    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">&#128269;</div>
        <p>No alerts found</p>
        <span>Try adjusting your filters or time range</span>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(alert => renderAlertCard(alert)).join('');

  // Attach copy button handlers
  container.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget as HTMLElement;
      const text = target.dataset.copy || '';
      copyToClipboard(text);
    });
  });

  // Attach ack button handlers
  container.querySelectorAll('.ack-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const target = e.currentTarget as HTMLElement;
      const alertId = target.dataset.alertId;
      if (alertId && useApiMode) {
        try {
          await fetch(`${API_URL}/api/alerts/${alertId}/ack`, { method: 'POST' });
          target.closest('.alert-card')?.classList.add('acknowledged');
          showToast('Alert acknowledged');
        } catch (err) {
          showToast('Failed to acknowledge');
        }
      }
    });
  });
}

function renderAlertCard(alert: Alert): string {
  const priorityClass = getPriorityClass(alert.priority);
  const serviceColor = getServiceColor(alert.service);
  const category = getCategory(alert.service, alert.topic);
  const categoryIcon = category === 'security' ? '&#128274;' : category === 'health' ? '&#128153;' : '&#128736;';
  const ackClass = alert.acknowledged ? 'acknowledged' : '';

  return `
    <div class="alert-card ${priorityClass} ${ackClass}" data-category="${category}">
      <div class="alert-header">
        <div class="alert-meta">
          <span class="alert-category" title="${category}">${categoryIcon}</span>
          <span class="alert-service" style="background: ${serviceColor}">${alert.service}</span>
          <span class="alert-vm">${alert.vm}</span>
          <span class="alert-topic">${alert.topic}</span>
        </div>
        <div class="alert-time" title="${formatFullTime(alert.timestamp)}">
          ${formatTime(alert.timestamp)}
        </div>
      </div>

      <div class="alert-body">
        <div class="alert-title">${alert.title}</div>
        ${alert.message ? `<div class="alert-message">${alert.message}</div>` : ''}
      </div>

      ${alert.log_cmd ? `
        <div class="alert-log-cmd">
          <code>${alert.log_cmd}</code>
          <button class="copy-btn" data-copy="${escapeHtml(alert.log_cmd)}" title="Copy command">
            &#128203;
          </button>
        </div>
      ` : ''}

      <div class="alert-actions">
        ${alert.tags ? `<span class="alert-tags">${formatTags(alert.tags)}</span>` : ''}
        <div class="alert-buttons">
          ${!alert.acknowledged && useApiMode ? `
            <button class="ack-btn" data-alert-id="${alert.id}" title="Acknowledge">
              &#10003;
            </button>
          ` : ''}
          ${alert.log_cmd ? `
            <button class="copy-btn" data-copy="ssh ${getVmSshTarget(alert.vm)} '${escapeHtml(alert.log_cmd)}'" title="Copy SSH command">
              &#128187;
            </button>
          ` : ''}
        </div>
      </div>
    </div>
  `;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatTags(tags: string): string {
  if (!tags) return '';
  return tags.split(',').map(tag => `<span class="tag">${tag.trim()}</span>`).join('');
}

function getVmSshTarget(vm: string): string {
  const vmMap: Record<string, string> = {
    'gcp-arch': 'diego@34.55.55.234',
    'oci-flex': 'ubuntu@84.235.234.87',
    'oci-micro-1': 'ubuntu@130.110.251.193',
    'oci-micro-2': 'ubuntu@129.151.228.66',
  };
  return vmMap[vm] || `user@${vm}`;
}

function populateFilters(): void {
  const vmSelect = document.getElementById('vm-filter') as HTMLSelectElement;
  const serviceSelect = document.getElementById('service-filter') as HTMLSelectElement;

  if (vmSelect) {
    const uniqueVms = [...new Set(alerts.map(a => a.vm))].filter(Boolean);
    vmSelect.innerHTML = '<option value="">All VMs</option>' +
      uniqueVms.map(vm => `<option value="${vm}">${vm}</option>`).join('');
  }

  if (serviceSelect) {
    const uniqueServices = [...new Set(alerts.map(a => a.service))].filter(Boolean);
    serviceSelect.innerHTML = '<option value="">All Services</option>' +
      uniqueServices.map(s => `<option value="${s}">${s}</option>`).join('');
  }
}

function updateLastUpdate(): void {
  const el = document.getElementById('last-update');
  if (el) {
    const modeIndicator = useDemoMode ? ' [DEMO]' : useApiMode ? '' : ' [ntfy]';
    el.textContent = `Updated ${formatTime(new Date().toISOString())}${modeIndicator}`;
  }

  // Update live indicator for demo mode
  const liveIndicator = document.getElementById('live-indicator');
  if (liveIndicator && useDemoMode) {
    liveIndicator.innerHTML = '<span class="pulse"></span> DEMO';
    liveIndicator.classList.add('demo');
  }
}

function setLoading(loading: boolean): void {
  const indicator = document.getElementById('live-indicator');
  const refreshIcon = document.getElementById('refresh-icon');

  if (indicator) {
    indicator.classList.toggle('loading', loading);
  }
  if (refreshIcon) {
    refreshIcon.classList.toggle('spinning', loading);
  }
}

// ============ MAIN FUNCTIONS ============

async function fetchAll(): Promise<void> {
  setLoading(true);

  // If running from file://, skip network requests and use demo data
  if (window.location.protocol === 'file:') {
    loadDemoData();
  } else {
    // Try API first
    const apiSuccess = await fetchFromApi();

    if (apiSuccess) {
      useApiMode = true;
      useDemoMode = false;
    } else {
      // Fallback to ntfy
      useApiMode = false;
      const ntfySuccess = await fetchFromNtfy();

      if (!ntfySuccess) {
        // Fallback to demo data
        loadDemoData();
      }
    }
  }

  // Render everything
  renderCounters();
  renderVmStatus();
  renderServiceStatus();
  renderAlertFeed();
  populateFilters();
  updateLastUpdate();

  setLoading(false);
}

function setupEventListeners(): void {
  // Refresh button
  const refreshBtn = document.getElementById('refresh-btn');
  refreshBtn?.addEventListener('click', fetchAll);

  // Time filter
  const timeFilter = document.getElementById('time-filter') as HTMLSelectElement;
  timeFilter?.addEventListener('change', () => {
    currentTimeFilter = timeFilter.value;
    fetchAll();
  });

  // Category tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = (btn as HTMLElement).dataset.category || 'all';
      renderAlertFeed();
    });
  });

  // Search
  const searchInput = document.getElementById('search-input') as HTMLInputElement;
  let searchTimeout: ReturnType<typeof setTimeout>;
  searchInput?.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      searchQuery = searchInput.value;
      renderAlertFeed();
    }, 300);
  });

  // VM filter
  const vmSelect = document.getElementById('vm-filter') as HTMLSelectElement;
  vmSelect?.addEventListener('change', () => {
    vmFilter = vmSelect.value;
    renderAlertFeed();
  });

  // Service filter
  const serviceSelect = document.getElementById('service-filter') as HTMLSelectElement;
  serviceSelect?.addEventListener('change', () => {
    serviceFilter = serviceSelect.value;
    renderAlertFeed();
  });
}

export function initNtfyFeed(): void {
  fetchAll();
  setupEventListeners();

  // Auto-refresh every 30 seconds
  refreshInterval = setInterval(fetchAll, 30000);

  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    if (refreshInterval) clearInterval(refreshInterval);
  });
}
