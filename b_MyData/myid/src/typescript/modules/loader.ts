// ============================================
// Data loader — reads from globalThis.PORTAL_DATA
// ============================================
import type { Dataset, NavTree } from './types';

const DATA_KEY = 'mock';
const NAV_KEY  = 'nav';

declare const globalThis: { PORTAL_DATA?: Record<string, unknown> };

function readPortalData<T>(key: string): T {
  const bag = globalThis.PORTAL_DATA;
  console.info('[myid]', 'loader.readPortalData', {
    key,
    bagKeys: bag ? Object.keys(bag) : null,
    valueType: bag && key in bag ? (Array.isArray(bag[key]) ? 'array' : typeof bag[key]) : 'missing',
  });
  if (!bag || !(key in bag)) {
    throw new Error(`PORTAL_DATA["${key}"] not found. Make sure data-${key}.json.js is loaded BEFORE script.js in index.html.`);
  }
  return bag[key] as T;
}

let cachedData: Dataset | null = null;
let cachedNav:  NavTree | null = null;

export async function loadDataset(): Promise<Dataset> {
  if (!cachedData) cachedData = readPortalData<Dataset>(DATA_KEY);
  return cachedData;
}

export async function loadNav(): Promise<NavTree> {
  if (!cachedNav) cachedNav = readPortalData<NavTree>(NAV_KEY);
  return cachedNav;
}
