// ============================================
// Custom SVG charts — no library
// ============================================

const NS = 'http://www.w3.org/2000/svg';

const el = (name: string, attrs: Record<string, string | number> = {}, children: (Node | string)[] = []): SVGElement => {
  const n = document.createElementNS(NS, name);
  for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, String(v));
  children.forEach((c) => {
    if (typeof c === 'string') n.appendChild(document.createTextNode(c));
    else n.appendChild(c);
  });
  return n as SVGElement;
};

export interface BarSeries {
  label: string;       // x label (yyyy-mm or shortname)
  income: number;
  expense: number;
}

// ─── Bar chart: income vs expense per month ───
export function renderBars(opts: {
  data: BarSeries[];
  width: number;
  height: number;
  yLabel: (n: number) => string;
}): SVGElement {
  const { data, width, height, yLabel } = opts;
  const PAD = { l: 50, r: 12, t: 8, b: 26 };
  const W = width - PAD.l - PAD.r;
  const H = height - PAD.t - PAD.b;

  const max = Math.max(1, ...data.flatMap((d) => [d.income, d.expense]));
  const niceMax = niceCeil(max);
  const yToPx = (v: number) => PAD.t + H - (v / niceMax) * H;

  const svg = el('svg', { class: 'chart', viewBox: `0 0 ${width} ${height}`, preserveAspectRatio: 'xMidYMid meet' });

  // Grid + Y axis
  const gridLines = [0, 0.25, 0.5, 0.75, 1].map((p) => p * niceMax);
  for (const v of gridLines) {
    const y = yToPx(v);
    svg.appendChild(el('line', { class: 'chart__grid-line', x1: PAD.l, x2: width - PAD.r, y1: y, y2: y }));
    svg.appendChild(el('text', { x: PAD.l - 8, y: y + 3, 'text-anchor': 'end' }, [yLabel(v)]));
  }

  // Bars (paired)
  const slot = W / data.length;
  const barW = Math.min(14, slot / 3);
  data.forEach((d, i) => {
    const cx = PAD.l + slot * i + slot / 2;
    // income (left)
    const yi = yToPx(d.income);
    svg.appendChild(el('rect', {
      class: 'chart__bar chart__bar--income',
      x: cx - barW - 1, y: yi, width: barW, height: PAD.t + H - yi, rx: 2,
    }));
    // expense (right)
    const ye = yToPx(d.expense);
    svg.appendChild(el('rect', {
      class: 'chart__bar chart__bar--expense',
      x: cx + 1, y: ye, width: barW, height: PAD.t + H - ye, rx: 2,
    }));
    // X label (compact: skip every other if too many)
    if (data.length <= 8 || i % 2 === 0) {
      svg.appendChild(el('text', { x: cx, y: height - 8, 'text-anchor': 'middle' }, [d.label]));
    }
  });

  return svg;
}

function niceCeil(v: number): number {
  if (v <= 0) return 1;
  const exp = Math.pow(10, Math.floor(Math.log10(v)));
  const f = v / exp;
  const nf = f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10;
  return nf * exp;
}

// ─── Donut chart ──────────────────────────────
export interface DonutSegment {
  label: string;
  value: number;
  color: string;
}

export function renderDonut(opts: {
  segments: DonutSegment[];
  size: number;
  thickness?: number;
}): SVGElement {
  const { segments, size, thickness = 18 } = opts;
  const r = size / 2 - 4;
  const ir = r - thickness;
  const cx = size / 2;
  const cy = size / 2;
  const total = segments.reduce((s, x) => s + x.value, 0) || 1;

  const svg = el('svg', { class: 'chart', viewBox: `0 0 ${size} ${size}`, width: size, height: size });

  // background ring
  svg.appendChild(el('circle', { class: 'chart__donut-track', cx, cy, r: (r + ir) / 2, fill: 'none', 'stroke-width': thickness, stroke: 'rgba(255,255,255,0.04)' }));

  let acc = -Math.PI / 2;
  segments.forEach((seg) => {
    if (seg.value <= 0) return;
    const angle = (seg.value / total) * Math.PI * 2;
    const x1 = cx + r * Math.cos(acc);
    const y1 = cy + r * Math.sin(acc);
    const x2 = cx + r * Math.cos(acc + angle);
    const y2 = cy + r * Math.sin(acc + angle);
    const ix1 = cx + ir * Math.cos(acc);
    const iy1 = cy + ir * Math.sin(acc);
    const ix2 = cx + ir * Math.cos(acc + angle);
    const iy2 = cy + ir * Math.sin(acc + angle);
    const large = angle > Math.PI ? 1 : 0;

    const d = [
      `M ${x1} ${y1}`,
      `A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`,
      `L ${ix2} ${iy2}`,
      `A ${ir} ${ir} 0 ${large} 0 ${ix1} ${iy1}`,
      'Z',
    ].join(' ');
    svg.appendChild(el('path', { d, fill: seg.color, opacity: 0.92 }));
    acc += angle;
  });

  return svg;
}

// ─── Sparkline ────────────────────────────────
export function renderSparkline(opts: {
  values: number[];
  width: number;
  height: number;
  color: string;
}): SVGElement {
  const { values, width, height, color } = opts;
  const pad = 2;
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const W = width - pad * 2;
  const H = height - pad * 2;

  const points = values.map((v, i) => {
    const x = pad + (i / Math.max(1, values.length - 1)) * W;
    const y = pad + H - ((v - min) / range) * H;
    return [x, y];
  });
  const path = points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');
  const areaPath = `${path} L ${points[points.length - 1][0].toFixed(1)} ${height - pad} L ${pad} ${height - pad} Z`;

  const id = `spark-grad-${Math.random().toString(36).slice(2, 8)}`;
  const svg = el('svg', { class: 'chart', viewBox: `0 0 ${width} ${height}`, preserveAspectRatio: 'none' });
  const defs = el('defs');
  const grad = el('linearGradient', { id, x1: '0', x2: '0', y1: '0', y2: '1' });
  grad.appendChild(el('stop', { offset: '0%',   'stop-color': color, 'stop-opacity': '0.3' }));
  grad.appendChild(el('stop', { offset: '100%', 'stop-color': color, 'stop-opacity': '0' }));
  defs.appendChild(grad);
  svg.appendChild(defs);

  svg.appendChild(el('path', { class: 'chart__spark-area', d: areaPath, fill: `url(#${id})` }));
  svg.appendChild(el('path', { class: 'chart__spark', d: path, stroke: color, fill: 'none' }));
  return svg;
}

// ─── Line chart (portfolio performance) ───────
export function renderLine(opts: {
  values: number[];
  labels: string[];
  width: number;
  height: number;
  yLabel: (n: number) => string;
}): SVGElement {
  const { values, labels, width, height, yLabel } = opts;
  const PAD = { l: 60, r: 12, t: 12, b: 26 };
  const W = width - PAD.l - PAD.r;
  const H = height - PAD.t - PAD.b;

  const max = Math.max(...values);
  const min = Math.min(...values);
  const niceMax = niceCeil(max);
  const niceMin = Math.max(0, niceFloor(min));
  const range = (niceMax - niceMin) || 1;
  const yToPx = (v: number) => PAD.t + H - ((v - niceMin) / range) * H;

  const svg = el('svg', { class: 'chart', viewBox: `0 0 ${width} ${height}` });

  const grid = [0, 0.25, 0.5, 0.75, 1].map((p) => niceMin + p * (niceMax - niceMin));
  for (const v of grid) {
    const y = yToPx(v);
    svg.appendChild(el('line', { class: 'chart__grid-line', x1: PAD.l, x2: width - PAD.r, y1: y, y2: y }));
    svg.appendChild(el('text', { x: PAD.l - 8, y: y + 3, 'text-anchor': 'end' }, [yLabel(v)]));
  }

  const points = values.map((v, i) => {
    const x = PAD.l + (i / Math.max(1, values.length - 1)) * W;
    const y = yToPx(v);
    return [x, y];
  });
  const d = points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');
  const area = `${d} L ${points[points.length - 1][0].toFixed(1)} ${PAD.t + H} L ${PAD.l} ${PAD.t + H} Z`;

  const id = `area-${Math.random().toString(36).slice(2, 8)}`;
  const defs = el('defs');
  const grad = el('linearGradient', { id, x1: '0', x2: '0', y1: '0', y2: '1' });
  grad.appendChild(el('stop', { offset: '0%',   'stop-color': '#5B8CFF', 'stop-opacity': '0.20' }));
  grad.appendChild(el('stop', { offset: '100%', 'stop-color': '#5B8CFF', 'stop-opacity': '0' }));
  defs.appendChild(grad);
  svg.appendChild(defs);

  svg.appendChild(el('path', { class: 'chart__area', d: area, fill: `url(#${id})` }));
  svg.appendChild(el('path', { class: 'chart__line', d, fill: 'none' }));

  // X labels
  const step = Math.ceil(labels.length / 8);
  labels.forEach((lab, i) => {
    if (i % step !== 0 && i !== labels.length - 1) return;
    const x = PAD.l + (i / Math.max(1, labels.length - 1)) * W;
    svg.appendChild(el('text', { x, y: height - 8, 'text-anchor': 'middle' }, [lab]));
  });

  return svg;
}

function niceFloor(v: number): number {
  if (v <= 0) return 0;
  const exp = Math.pow(10, Math.floor(Math.log10(v)));
  const f = v / exp;
  const nf = f >= 5 ? 5 : f >= 2 ? 2 : 1;
  return nf * exp;
}
