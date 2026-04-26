import { el } from '../shell/dom';

export interface Series { name: string; values: number[]; color?: string; width?: number; dash?: number[]; }
export interface HLine  { value: number; label?: string; color?: string; dash?: number[]; }

export interface MultiLineOptions {
  labels: string[];
  series: Series[];
  hLines?: HLine[];
  label?: string;
  height?: number;
}

// Multi-series canvas line chart with horizontal reference lines.
// Reads palette from CSS custom properties so colors track the active theme.
// Used by FX Hedge tech chart (Close + EMA + Pivot/R1..R3/S1..S3).
export function renderMultiLineChart(opts: MultiLineOptions): HTMLElement {
  const wrap = el('div', { class: 'chart chart--line' });
  if (opts.label) wrap.appendChild(el('div', { class: 'chart__header' }, [opts.label, el('span', { class: 't-muted' }, [`${opts.labels.length} pts`])]));
  const canvas = document.createElement('canvas');
  if (opts.height) wrap.style.height = `${opts.height}px`;
  wrap.appendChild(canvas);

  const repaint = () => paint(canvas, opts);
  queueMicrotask(repaint);
  if (typeof ResizeObserver !== 'undefined') {
    const ro = new ResizeObserver(repaint);
    ro.observe(wrap);
  }
  return wrap;
}

function cssVar(name: string, fallback: string): string {
  if (typeof document === 'undefined') return fallback;
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
}

function resolveColor(c: string | undefined, fallback: string): string {
  if (!c) return fallback;
  if (c.startsWith('var(') && c.endsWith(')')) {
    const name = c.slice(4, -1).trim();
    return cssVar(name, fallback);
  }
  return c;
}

function paint(canvas: HTMLCanvasElement, opts: MultiLineOptions): void {
  const dpr = (typeof devicePixelRatio !== 'undefined') ? devicePixelRatio : 1;
  const w = canvas.clientWidth || 600, h = canvas.clientHeight || 360;
  canvas.width = w * dpr; canvas.height = h * dpr;
  const ctx = canvas.getContext('2d'); if (!ctx) return;
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, w, h);

  const bg = cssVar('--color-background', '#000');
  const grid = cssVar('--color-grid', '#1c1c1c');
  const muted = cssVar('--color-text-muted', '#8a6a30');
  const fontMono = cssVar('--font-mono', 'monospace');

  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  if (opts.labels.length === 0 || opts.series.length === 0) return;

  const padL = 56, padR = 8, padT = 8, padB = 22;
  const innerW = w - padL - padR, innerH = h - padT - padB;
  const n = opts.labels.length;

  let minY = Infinity, maxY = -Infinity;
  for (const s of opts.series) for (const v of s.values) {
    if (Number.isFinite(v)) { if (v < minY) minY = v; if (v > maxY) maxY = v; }
  }
  for (const h of opts.hLines ?? []) {
    if (h.value < minY) minY = h.value;
    if (h.value > maxY) maxY = h.value;
  }
  if (!Number.isFinite(minY) || !Number.isFinite(maxY) || minY === maxY) { minY -= 1; maxY += 1; }
  // Pad y range slightly so labels and reference lines don't kiss the edges.
  const ypad = (maxY - minY) * 0.05;
  minY -= ypad; maxY += ypad;

  const xs = (i: number) => padL + (i / Math.max(1, n - 1)) * innerW;
  const ys = (v: number) => padT + (1 - (v - minY) / (maxY - minY)) * innerH;

  // Grid + y-axis labels
  ctx.strokeStyle = grid; ctx.lineWidth = 1; ctx.beginPath();
  for (let i = 0; i <= 4; i++) {
    const y = padT + (innerH * i) / 4;
    ctx.moveTo(padL, y); ctx.lineTo(w - padR, y);
  }
  ctx.stroke();
  ctx.fillStyle = muted; ctx.font = `11px ${fontMono}`;
  ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
  for (let i = 0; i <= 4; i++) {
    const y = padT + (innerH * i) / 4;
    const v = maxY - ((maxY - minY) * i) / 4;
    ctx.fillText(v.toFixed(3), padL - 4, y);
  }

  // X-axis labels (sparse — every nth)
  ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  const stride = Math.max(1, Math.floor(n / 8));
  for (let i = 0; i < n; i += stride) {
    ctx.fillText(opts.labels[i] ?? '', xs(i), h - padB + 4);
  }

  // Horizontal reference lines (drawn first so series sits on top)
  for (const ln of opts.hLines ?? []) {
    const y = ys(ln.value);
    ctx.strokeStyle = resolveColor(ln.color, muted);
    ctx.lineWidth = 1;
    if (ln.dash) ctx.setLineDash(ln.dash); else ctx.setLineDash([]);
    ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(w - padR, y); ctx.stroke();
    if (ln.label) {
      ctx.fillStyle = resolveColor(ln.color, muted);
      ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
      ctx.fillText(ln.label, w - padR + 2, y);
    }
  }
  ctx.setLineDash([]);

  // Series
  for (const s of opts.series) {
    const color = resolveColor(s.color, cssVar('--color-accent', '#FFA028'));
    ctx.strokeStyle = color;
    ctx.lineWidth = s.width ?? 1.25;
    if (s.dash) ctx.setLineDash(s.dash); else ctx.setLineDash([]);
    ctx.beginPath();
    s.values.forEach((v, i) => {
      const x = xs(i), y = ys(v);
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    });
    ctx.stroke();
  }
  ctx.setLineDash([]);

  // Legend (top-left, inside chart area)
  ctx.font = `11px ${fontMono}`;
  ctx.textAlign = 'left'; ctx.textBaseline = 'top';
  let lx = padL + 4, ly = padT + 4;
  for (const s of opts.series) {
    const color = resolveColor(s.color, cssVar('--color-accent', '#FFA028'));
    ctx.fillStyle = color;
    ctx.fillRect(lx, ly + 4, 10, 2);
    ctx.fillStyle = cssVar('--color-text-muted', '#8a6a30');
    ctx.fillText(s.name, lx + 14, ly);
    lx += 14 + ctx.measureText(s.name).width + 12;
  }
}
