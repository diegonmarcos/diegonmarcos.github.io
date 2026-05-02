// ============================================
// Data loader — reads from globalThis.PORTAL_DATA
// ============================================
import type { Dataset, NavTree } from './types';

const DATA_KEY = 'mock';
const NAV_KEY  = 'nav';

declare const globalThis: { PORTAL_DATA?: Record<string, unknown> };

function readPortalData<T>(key: string): T {
  const bag = globalThis.PORTAL_DATA;
  console.info('[loader] PORTAL_DATA bag keys =', bag ? Object.keys(bag) : '(undefined)');
  if (!bag || !(key in bag)) {
    const msg = `PORTAL_DATA["${key}"] not found. Loaded keys: ${bag ? Object.keys(bag).join(', ') : 'none'}`;
    console.error('[loader]', msg);
    throw new Error(msg);
  }
  const value = bag[key];
  console.info(`[loader] PORTAL_DATA["${key}"] type=`, typeof value, 'isArray=', Array.isArray(value), 'topKeys=', value && typeof value === 'object' ? Object.keys(value as object).slice(0, 10) : value);
  return value as T;
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
