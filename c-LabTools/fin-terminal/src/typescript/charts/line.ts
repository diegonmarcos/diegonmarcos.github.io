import { el } from '../shell/dom';

export interface LinePoint { x: number; y: number; }
export interface LineChartOptions {
  points: LinePoint[];
  label?: string;
  height?: number;
}

// Hand-rolled canvas line chart — no deps. Reads palette from CSS custom
// properties, so it always matches the active theme.
export function renderLineChart(opts: LineChartOptions): HTMLElement {
  const wrap = el('div', { class: 'chart chart--line' });
  if (opts.label) wrap.appendChild(el('div', { class: 'chart__header' }, [opts.label, el('span', { class: 't-muted' }, [`${opts.points.length} pts`])]));
  const canvas = document.createElement('canvas');
  wrap.appendChild(canvas);

  // Defer paint until next frame so element is in DOM and sized.
  queueMicrotask(() => paint(canvas, opts.points));
  // Repaint on resize.
  if (typeof ResizeObserver !== 'undefined') {
    const ro = new ResizeObserver(() => paint(canvas, opts.points));
    ro.observe(wrap);
  }
  return wrap;
}

function cssVar(name: string, fallback: string): string {
  if (typeof document === 'undefined') return fallback;
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
}

function paint(canvas: HTMLCanvasElement, pts: LinePoint[]): void {
  const dpr = (typeof devicePixelRatio !== 'undefined') ? devicePixelRatio : 1;
  const w = canvas.clientWidth || 600, h = canvas.clientHeight || 320;
  canvas.width = w * dpr; canvas.height = h * dpr;
  const ctx = canvas.getContext('2d'); if (!ctx) return;
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, w, h);

  const bg = cssVar('--color-background', '#000');
  const grid = cssVar('--color-grid', '#1c1c1c');
  const accent = cssVar('--color-accent', '#FFA028');
  const muted = cssVar('--color-text-muted', '#8a6a30');

  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  if (pts.length === 0) return;

  const padL = 36, padR = 8, padT = 8, padB = 18;
  const innerW = w - padL - padR, innerH = h - padT - padB;
  const minX = pts[0]!.x, maxX = pts[pts.length - 1]!.x;
  let minY = pts[0]!.y, maxY = pts[0]!.y;
  for (const p of pts) { if (p.y < minY) minY = p.y; if (p.y > maxY) maxY = p.y; }
  if (minY === maxY) { minY -= 1; maxY += 1; }
  const xs = (x: number) => padL + ((x - minX) / Math.max(1e-9, maxX - minX)) * innerW;
  const ys = (y: number) => padT + (1 - (y - minY) / (maxY - minY)) * innerH;

  // grid
  ctx.strokeStyle = grid; ctx.lineWidth = 1; ctx.beginPath();
  for (let i = 0; i <= 4; i++) {
    const y = padT + (innerH * i) / 4;
    ctx.moveTo(padL, y); ctx.lineTo(w - padR, y);
  }
  ctx.stroke();

  // y-axis labels
  ctx.fillStyle = muted; ctx.font = `11px ${cssVar('--font-mono', 'monospace')}`;
  ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
  for (let i = 0; i <= 4; i++) {
    const y = padT + (innerH * i) / 4;
    const v = maxY - ((maxY - minY) * i) / 4;
    ctx.fillText(v.toFixed(2), padL - 4, y);
  }

  // line
  ctx.strokeStyle = accent; ctx.lineWidth = 1.25; ctx.beginPath();
  pts.forEach((p, i) => {
    const x = xs(p.x), y = ys(p.y);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.stroke();

  // last point dot
  const last = pts[pts.length - 1]!;
  ctx.fillStyle = accent;
  ctx.fillRect(xs(last.x) - 1, ys(last.y) - 1, 3, 3);
}
