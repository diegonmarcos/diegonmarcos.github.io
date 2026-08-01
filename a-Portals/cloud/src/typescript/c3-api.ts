/**
 * C3 Infra API Client
 * WireGuard-only backend (https://api.diegonmarcos.com/c3-infra-api) — a public browser
 * cannot reach it directly. Provides a mock/live toggle: mock reads bundled
 * PORTAL_DATA["c3-<key>"] JSON (data_wrap build mod), live attempts a real fetch
 * and falls back to mock on any failure (network error, non-2xx, timeout).
 */

export const C3_BASE = 'https://api.diegonmarcos.com/c3-infra-api';

const MODE_KEY = 'c3-mode';
const TIMEOUT_MS = 8000;

// key -> path (relative to C3_BASE)
export const REGISTRY: Record<string, string> = {
    'topology': '/cloud-data/topology',
    'topology-network': '/cloud-data/topology/network',
    'topology-drift': '/cloud-data/topology/drift',

    'health-declared': '/health/declared',
    'health-deployed': '/health/deployed',
    'health-drift': '/health/drift',
    'health-tier1': '/health/tier1',
    'up-all': '/v2/up/all-services',

    'container-resources': '/cloud-data/container-resources',
    'services': '/services',
    'front-apps': '/cloud-data/front-apps',
    'specs': '/services/all/specs',

    'profiling-all': '/v2/profiling/all-containers',

    'security-scan': '/security/scan',
    'security-docker': '/security/docker',
    'security-ssh': '/security/ssh',
    'security-tokens': '/security/tokens',
    'security-wireguard': '/security/wireguard',

    'cloud-summary': '/cloud/summary',
    'oci-costs': '/cloud/oci/costs',
    'gcp-costs': '/cloud/gcp/costs',

    'workflows': '/workflows',
    'workflows-dagu': '/workflows/dagu',

    'db-audit': '/db/audit',
    'db-deploy-history': '/db/deploy/history',
    'db-health-history': '/db/health/history',
    'db-uptime': '/db/uptime/report',

    'caddy-routes': '/cloud-data/caddy-routes',
    'cloudflare-dns': '/cloud-data/cloudflare-dns',
    'firewall-rules': '/cloud-data/firewall-rules',
    'wireguard-peers': '/cloud-data/wireguard-peers',
    'dns-services': '/cloud-data/dns-services',
    'backup-targets': '/cloud-data/backup-targets',
    'home-manager': '/cloud-data/home-manager',

    'metrics-top': '/metrics/top?by=cpu&limit=20',
    'metrics-series': '/metrics/series/oci-apps?metric=cpu',

    'alerts-active': '/alerts/active',
    'alerts-rules': '/alerts/rules',
    'alerts-history': '/alerts/history',

    'events': '/events',

    'slo': '/slo',
};

export const lastErrors: Record<string, string> = {};

const cache: Record<string, any> = {};

const target: EventTarget = new EventTarget();

export function onModeChange(cb: (mode: 'mock' | 'live') => void): void {
    target.addEventListener('modechange', () => cb(getMode()));
}

export function getMode(): 'mock' | 'live' {
    const m = localStorage.getItem(MODE_KEY);
    return m === 'live' ? 'live' : 'mock';
}

export function setMode(mode: 'mock' | 'live'): void {
    localStorage.setItem(MODE_KEY, mode === 'live' ? 'live' : 'mock');
    target.dispatchEvent(new Event('modechange'));
}

function mockValue(key: string): any {
    const data = (globalThis as any).PORTAL_DATA || {};
    return data['c3-' + key];
}

async function fetchWithTimeout(url: string, opts: RequestInit = {}): Promise<Response> {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
        return await fetch(url, { ...opts, signal: controller.signal });
    } finally {
        clearTimeout(timer);
    }
}

export async function c3(key: string): Promise<any> {
    const mock = mockValue(key);
    if (getMode() === 'mock') {
        return mock;
    }
    const path = REGISTRY[key];
    if (!path) {
        lastErrors[key] = 'unknown registry key';
        return mock;
    }
    try {
        const res = await fetchWithTimeout(C3_BASE + path);
        if (!res.ok) {
            lastErrors[key] = `HTTP ${res.status}`;
            return mock;
        }
        const data = await res.json();
        delete lastErrors[key];
        return data;
    } catch (err) {
        lastErrors[key] = err instanceof Error ? err.message : String(err);
        return mock;
    }
}

export async function c3All(): Promise<void> {
    const keys = Object.keys(REGISTRY);
    await Promise.all(keys.map(async (key) => {
        cache[key] = await c3(key);
    }));
}

export function getCached(key: string): any {
    if (key in cache) return cache[key];
    return mockValue(key);
}

export async function c3Post(path: string, body: any): Promise<any> {
    if (getMode() === 'mock') {
        return { ok: true, mock: true };
    }
    try {
        const res = await fetchWithTimeout(C3_BASE + path, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body ?? {}),
        });
        const data = await res.json().catch(() => ({}));
        return { ok: res.ok, status: res.status, ...data };
    } catch (err) {
        return { ok: false, error: err instanceof Error ? err.message : String(err) };
    }
}
