// ============================================
// Hash-based router — myID
// ============================================
import type { NavTree, Route } from './types';

export function parseHash(hash: string): Route {
  const raw = hash.replace(/^#\/?/, '');
  const [path, qs] = raw.split('?');
  const params: Record<string, string> = {};
  if (qs) {
    qs.split('&').forEach((kv) => {
      const [k, v] = kv.split('=');
      if (k) params[decodeURIComponent(k)] = decodeURIComponent(v ?? '');
    });
  }
  return { path: path || '', params };
}

export function navigate(path: string, params: Record<string, string> = {}) {
  const qs = Object.entries(params)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');
  location.hash = `#/${path}${qs ? '?' + qs : ''}`;
}

export function onRouteChange(nav: NavTree, cb: (r: Route) => void) {
  const apply = () => {
    let r = parseHash(location.hash);
    if (!r.path) r = { path: nav.default, params: {} };
    cb(r);
  };
  window.addEventListener('hashchange', apply);
  apply();
}
