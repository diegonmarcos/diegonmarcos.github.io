// ============================================
// Data loader — fetches mock.json + nav.json
// ============================================
import type { Dataset, NavTree } from './types';

const DATA_ENDPOINT = 'mock.json';
const NAV_ENDPOINT  = 'nav.json';

let cachedData: Dataset | null = null;
let cachedNav: NavTree | null = null;

export async function loadDataset(): Promise<Dataset> {
  if (cachedData) return cachedData;
  const r = await fetch(DATA_ENDPOINT, { cache: 'no-cache' });
  if (!r.ok) throw new Error(`Failed to load ${DATA_ENDPOINT}: ${r.status}`);
  cachedData = (await r.json()) as Dataset;
  return cachedData;
}

export async function loadNav(): Promise<NavTree> {
  if (cachedNav) return cachedNav;
  const r = await fetch(NAV_ENDPOINT, { cache: 'no-cache' });
  if (!r.ok) throw new Error(`Failed to load ${NAV_ENDPOINT}: ${r.status}`);
  cachedNav = (await r.json()) as NavTree;
  return cachedNav;
}
