import themesIndex from '../data/themes.json';
import bloombergDark from '../data/palette-bloomberg-dark.json';
import eguiDark from '../data/palette-egui-dark.json';

export interface Palette {
  background: string;
  surface: string;
  surface_alt: string;
  border?: string;
  text: string;
  text_muted: string;
  text_primary?: string;
  accent: string;
  positive: string;
  negative: string;
  warning: string;
  info?: string;
  function_key?: string;
  action_key?: string;
  cancel_key?: string;
  grid: string;
}

export interface Theme {
  id: string;
  name: string;
  palette: Palette;
  fonts?: {
    monospace_family?: string;
    size_small?: number;
    size_body?: number;
    size_heading?: number;
    size_data?: number;
  };
}

interface ThemesIndex {
  default: string;
  themes: Array<{ id: string; name: string; file: string; description?: string }>;
}

// Inline payloads keyed by theme id — esbuild bundles them.
const PAYLOADS: Record<string, unknown> = {
  'bloomberg-dark': bloombergDark,
  'egui-dark': eguiDark,
};

const REQUIRED_PALETTE_KEYS = [
  'background', 'surface', 'surface_alt',
  'text', 'text_muted', 'accent',
  'positive', 'negative', 'warning', 'grid',
] as const;

export function loadThemesIndex(): ThemesIndex { return themesIndex as ThemesIndex; }

export function loadTheme(id: string): Theme {
  const idx = loadThemesIndex();
  const entry = idx.themes.find(t => t.id === id);
  if (!entry) throw new Error(`unknown theme: ${id}`);
  const raw = PAYLOADS[id];
  if (!raw) throw new Error(`no inline payload for theme: ${id}`);
  return normalize(entry.id, entry.name, raw as Record<string, unknown>);
}

function normalize(id: string, name: string, raw: Record<string, unknown>): Theme {
  const palette = (raw.palette ?? raw) as Record<string, string>;
  for (const k of REQUIRED_PALETTE_KEYS) {
    if (!palette[k]) throw new Error(`palette ${id} missing required key: ${k}`);
  }
  const fonts = (raw.fonts ?? {}) as Theme['fonts'];
  return { id, name, palette: palette as unknown as Palette, fonts };
}

export function applyTheme(t: Theme, root: HTMLElement = document.documentElement): void {
  const p = t.palette as unknown as Record<string, string>;
  const setVar = (k: string, v: string | undefined) => { if (v) root.style.setProperty(k, v); };

  setVar('--color-background',   p['background']);
  setVar('--color-surface',      p['surface']);
  setVar('--color-surface-alt',  p['surface_alt']);
  setVar('--color-border',       p['border'] ?? p['grid']);
  setVar('--color-text',         p['text']);
  setVar('--color-text-muted',   p['text_muted']);
  setVar('--color-text-primary', p['text_primary'] ?? p['text']);
  setVar('--color-accent',       p['accent']);
  setVar('--color-positive',     p['positive']);
  setVar('--color-negative',     p['negative']);
  setVar('--color-warning',      p['warning']);
  setVar('--color-info',         p['info'] ?? p['accent']);
  setVar('--color-function-key', p['function_key'] ?? p['warning']);
  setVar('--color-action-key',   p['action_key']   ?? p['positive']);
  setVar('--color-cancel-key',   p['cancel_key']   ?? p['negative']);
  setVar('--color-grid',         p['grid']);

  if (t.fonts?.monospace_family) setVar('--font-mono', t.fonts.monospace_family);
  if (t.fonts?.size_small)   setVar('--font-size-small',   `${t.fonts.size_small}px`);
  if (t.fonts?.size_body)    setVar('--font-size-body',    `${t.fonts.size_body}px`);
  if (t.fonts?.size_heading) setVar('--font-size-heading', `${t.fonts.size_heading}px`);
  if (t.fonts?.size_data)    setVar('--font-size-data',    `${t.fonts.size_data}px`);

  document.body.dataset['theme'] = t.id;
}

const STORAGE_KEY = 'fin-terminal:theme';

export function readSavedThemeId(): string | null {
  try { return localStorage.getItem(STORAGE_KEY); } catch { return null; }
}
export function saveThemeId(id: string): void {
  try { localStorage.setItem(STORAGE_KEY, id); } catch { /* noop */ }
}

export function nextThemeId(currentId: string): string {
  const idx = loadThemesIndex();
  const i = idx.themes.findIndex(t => t.id === currentId);
  return idx.themes[(i + 1) % idx.themes.length]!.id;
}
