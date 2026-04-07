import { ActivityType, type DateRange } from './types';

// Premium elite palette — matches SCSS settings/_colors.scss
export const COLORS: Record<ActivityType, string> = {
  [ActivityType.Swim]: '#4a9eff',
  [ActivityType.Cycle]: '#ff7849',
  [ActivityType.Run]: '#42d97c',
  [ActivityType.Hike]: '#b88aff',
  [ActivityType.Walk]: '#e8c95a',
};

export const HR_ZONE_COLORS = ['#3b8bdb', '#3bba6e', '#d4c84a', '#e87040', '#e8384a'];

export const GOLD = '#c9a84c';
export const GOLD_BRIGHT = '#e8c95a';
export const PLATINUM = '#a8b8cc';
export const BG_CARD = '#13161d';
export const BG_ELEVATED = '#1e2230';
export const BORDER_COLOR = '#1f2433';
export const BORDER_ACCENT = '#3a4560';
export const TEXT_PRIMARY = '#eaf0f6';
export const TEXT_SECONDARY = '#b8c4d4';
export const TEXT_MUTED = '#7088a4';
export const TEXT_DIM = '#4a5d74';
export const GRID_COLOR = '#1a1e28';

export const HEATMAP_COLORS = ['#13161d', '#2a2318', '#4a3a1a', '#8a6a28', '#c9a84c'];

export const ACTIVITY_LABELS: Record<ActivityType, string> = {
  [ActivityType.Swim]: 'Swim',
  [ActivityType.Cycle]: 'Cycle',
  [ActivityType.Run]: 'Run',
  [ActivityType.Hike]: 'Hike',
  [ActivityType.Walk]: 'Walk',
};

export const FEELING_EMOJI: Record<number, string> = {
  1: '\u{1F629}',
  2: '\u{1F615}',
  3: '\u{1F642}',
  4: '\u{1F60A}',
  5: '\u{1F929}',
};

export const FONT = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
export const FONT_MONO = "'JetBrains Mono', 'SF Mono', monospace";

export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${Math.round(minutes)}m`;
  const h = Math.floor(minutes / 60);
  const m = Math.round(minutes % 60);
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
}

export function formatPace(minPerKm: number): string {
  const mins = Math.floor(minPerKm);
  const secs = Math.round((minPerKm - mins) * 60);
  return `${mins}:${secs.toString().padStart(2, '0')}/km`;
}

export function formatSpeed(kmh: number): string {
  return `${kmh.toFixed(1)} km/h`;
}

export function formatDistance(km: number): string {
  if (km < 1) return `${Math.round(km * 1000)} m`;
  return `${km.toFixed(1)} km`;
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}

export function formatDateShort(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export function formatNumber(n: number): string {
  return n.toLocaleString('en-US');
}

export function toISODate(d: Date): string {
  return d.toISOString().split('T')[0];
}

export function getWeekStart(d: Date): Date {
  const result = new Date(d);
  const day = result.getDay();
  const diff = day === 0 ? 6 : day - 1;
  result.setDate(result.getDate() - diff);
  result.setHours(0, 0, 0, 0);
  return result;
}

export function getWeekRange(d: Date): DateRange {
  const start = getWeekStart(d);
  const end = new Date(start);
  end.setDate(end.getDate() + 6);
  end.setHours(23, 59, 59, 999);
  return { start, end };
}

export function getMonthRange(d: Date): DateRange {
  const start = new Date(d.getFullYear(), d.getMonth(), 1);
  const end = new Date(d.getFullYear(), d.getMonth() + 1, 0, 23, 59, 59, 999);
  return { start, end };
}

export function getQuarterRange(d: Date): DateRange {
  const quarterStart = Math.floor(d.getMonth() / 3) * 3;
  const start = new Date(d.getFullYear(), quarterStart, 1);
  const end = new Date(d.getFullYear(), quarterStart + 3, 0, 23, 59, 59, 999);
  return { start, end };
}

export function getRangeForTimeframe(d: Date, tf: 'week' | 'month' | 'quarter'): DateRange {
  switch (tf) {
    case 'week': return getWeekRange(d);
    case 'month': return getMonthRange(d);
    case 'quarter': return getQuarterRange(d);
  }
}

export function shiftDate(d: Date, tf: 'week' | 'month' | 'quarter', direction: -1 | 1): Date {
  const result = new Date(d);
  switch (tf) {
    case 'week': result.setDate(result.getDate() + 7 * direction); break;
    case 'month': result.setMonth(result.getMonth() + direction); break;
    case 'quarter': result.setMonth(result.getMonth() + 3 * direction); break;
  }
  return result;
}

export function formatRangeLabel(range: DateRange): string {
  const opts: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
  const s = range.start.toLocaleDateString('en-US', opts);
  const e = range.end.toLocaleDateString('en-US', { ...opts, year: 'numeric' });
  return `${s} \u2014 ${e}`;
}

export function activityIcon(type: ActivityType): string {
  switch (type) {
    case ActivityType.Swim: return '\u{1F3CA}';
    case ActivityType.Cycle: return '\u{1F6B4}';
    case ActivityType.Run: return '\u{1F3C3}';
    case ActivityType.Hike: return '\u26F0\uFE0F';
    case ActivityType.Walk: return '\u{1F6B6}';
  }
}

export function setupCanvas(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  const ctx = canvas.getContext('2d')!;
  ctx.scale(dpr, dpr);
  return ctx;
}

export function daysBetween(a: Date, b: Date): number {
  return Math.floor((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));
}
