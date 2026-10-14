// ============================================
// Hash router — path + tab + arbitrary params
//   #/<section>/<leaf>?tab=<id>&<k>=<v>
// ============================================
import type { Route, NavTree } from './types';

export function parseHash(nav: NavTree): Route {
  const raw = window.location.hash.replace(/^#\/?/, '');
  if (!raw) return { path: nav.default, tab: defaultTab(nav, nav.default), params: {} };

  const [path, query = ''] = raw.split('?');
  const usp = new URLSearchParams(query);
  const tab = usp.get('tab');

  const params: Record<string, string> = {};
  for (const [k, v] of usp.entries()) if (k !== 'tab') params[k] = v;

  if (!isKnownPath(nav, path)) {
    return { path: nav.default, tab: defaultTab(nav, nav.default), params: {} };
  }
  return { path, tab: tab ?? defaultTab(nav, path), params };
}

function buildHash(path: string, tab: string | null, params: Record<string, string>): string {
  const usp = new URLSearchParams();
  if (tab) usp.set('tab', tab);
  for (const [k, v] of Object.entries(params)) usp.set(k, v);
  const q = usp.toString();
  return q ? `#/${path}?${q}` : `#/${path}`;
}

export function navigate(path: string, tab: string | null = null, params: Record<string, string> = {}) {
  window.location.hash = buildHash(path, tab, params);
}

// Change the tab while preserving the current params on the same path
export function setTab(currentPath: string, tab: string) {
  const current = parseCurrent();
  if (current.path !== currentPath) {
    navigate(currentPath, tab);
    return;
  }
  window.location.hash = buildHash(currentPath, tab, current.params);
}

// Set / update a single param while preserving path + tab + other params
export function setParam(key: string, value: string) {
  const current = parseCurrent();
  const next = { ...current.params, [key]: value };
  window.location.hash = buildHash(current.path, current.tab, next);
}

export function onRouteChange(nav: NavTree, handler: (r: Route) => void): () => void {
  const fn = () => handler(parseHash(nav));
  window.addEventListener('hashchange', fn);
  fn();
  return () => window.removeEventListener('hashchange', fn);
}

function isKnownPath(nav: NavTree, path: string): boolean {
  return nav.sections.some((s) => s.items.some((i) => i.route === path));
}

function defaultTab(nav: NavTree, path: string): string | null {
  for (const s of nav.sections) {
    for (const i of s.items) {
      if (i.route === path) return i.tabs && i.tabs.length > 0 ? i.tabs[0].id : null;
    }
  }
  return null;
}

export function findItem(nav: NavTree, path: string) {
  for (const s of nav.sections) {
    for (const i of s.items) if (i.route === path) return { section: s, item: i };
  }
  return null;
}

// Lightweight current-state read (no nav validation)
function parseCurrent(): { path: string; tab: string | null; params: Record<string, string> } {
  const raw = window.location.hash.replace(/^#\/?/, '');
  const [path, query = ''] = raw.split('?');
  const usp = new URLSearchParams(query);
  const tab = usp.get('tab');
  const params: Record<string, string> = {};
  for (const [k, v] of usp.entries()) if (k !== 'tab') params[k] = v;
  return { path, tab, params };
}
