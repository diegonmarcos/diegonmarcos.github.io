import { el } from '../shell/dom';
import { renderDataTable, type Column } from '../widgets/data-table';
import marketsData from '../data/markets-data.json';
import type { ScreenContext } from './registry';

interface Section { title: string; panel: string; rows: Array<{ ticker: string; name: string }>; }
interface YieldRow { tenor: string; last: number; chg: number; }
interface YieldTable { title: string; rows: YieldRow[]; }
interface Curves { tenors: string[]; us: number[]; br: number[]; }
interface MarketsData {
  sections: Record<string, Section>;
  yields: Record<string, YieldTable>;
  yield_curves: Curves;
}

const data = marketsData as MarketsData;

// Synthetic market row enrichment — bridges the data file to live values.
// Keeps row shape consistent regardless of source. Replace with DataHub
// subscription per-ticker when /api/v1/topics market:quote:* is wired.
interface MarketRow extends Record<string, unknown> {
  ticker: string;
  name: string;
  last: number;
  daily: number;
  w1: number;
  m1: number;
  ytd: number;
  y1: number;
  y3: number;
}
const r = (min: number, max: number) => parseFloat((Math.random() * (max - min) + min).toFixed(2));
function enrich(rows: Section['rows']): MarketRow[] {
  return rows.map(row => ({
    ticker: row.ticker, name: row.name,
    last: r(10, 1000), daily: r(-2, 2), w1: r(-4, 4),
    m1: r(-8, 8), ytd: r(-15, 25), y1: r(-20, 30), y3: r(-40, 60),
  }));
}

const PERF_FORMAT = (v: unknown) => `${(v as number) >= 0 ? '+' : ''}${(v as number).toFixed(2)}%`;

const COLUMNS: Column[] = [
  { key: 'ticker', label: 'Ticker' },
  { key: 'last',   label: 'Last',  numeric: true,
    format: (v) => (v as number).toFixed(2) },
  { key: 'daily',  label: 'Dly%',  numeric: true, signed: true, format: PERF_FORMAT },
  { key: 'w1',     label: '1W%',   numeric: true, signed: true, format: PERF_FORMAT },
  { key: 'm1',     label: '1M%',   numeric: true, signed: true, format: PERF_FORMAT },
  { key: 'ytd',    label: 'YTD%',  numeric: true, signed: true, format: PERF_FORMAT },
];

const YIELD_COLUMNS: Column[] = [
  { key: 'tenor', label: 'Tenor' },
  { key: 'last',  label: 'Yld', numeric: true, format: (v) => (v as number).toFixed(2) },
  { key: 'chg',   label: 'Chg', numeric: true, signed: true,
    format: (v) => `${(v as number) >= 0 ? '+' : ''}${(v as number).toFixed(2)}` },
];

export function renderMarketsDashboard(host: HTMLElement, _ctx: ScreenContext): void {
  const grid = el('div', { class: 'mkt-grid' });
  grid.appendChild(renderPanel(1, 'GLOBAL EQUITY INDICES', 'WEI', [
    section(data.sections['dm_indexes']!),
    section(data.sections['em_indexes']!),
  ]));
  grid.appendChild(renderPanel(2, 'FOREIGN EXCHANGE', 'FX', [
    section(data.sections['dm_currencies']!),
    section(data.sections['em_currencies']!),
  ]));
  grid.appendChild(renderPanel(3, 'PORTFOLIO & COMMODITIES', 'PORT', [
    section(data.sections['commodities']!),
    section(data.sections['buffett_portfolio']!),
    section(data.sections['personal_watchlist']!),
  ]));
  grid.appendChild(renderPanel(4, 'RATES & CURVES', 'GC',
    [renderRatesBody()],
    /*flatBody=*/ true,
  ));
  host.appendChild(grid);
}

function renderPanel(num: number, name: string, cmd: string, children: HTMLElement[], flatBody = false): HTMLElement {
  const head = el('div', { class: 'mkt-panel__head' }, [
    el('span', { class: 'mkt-panel__num' }, [String(num)]),
    el('span', { class: 'mkt-panel__name' }, [name]),
    el('span', { class: 'mkt-panel__cmd' }, [cmd]),
  ]);
  const body = el('div', { class: 'mkt-panel__body' });
  if (flatBody) body.style.display = 'flex';
  if (flatBody) body.style.flexDirection = 'column';
  for (const c of children) body.appendChild(c);
  return el('div', { class: 'mkt-panel' }, [head, body]);
}

function section(s: Section): HTMLElement {
  const wrap = el('div', { class: 'mkt-section' });
  wrap.appendChild(el('div', { class: 'mkt-section__title' }, [s.title]));
  wrap.appendChild(renderDataTable({
    columns: COLUMNS,
    rows: enrich(s.rows),
    sort: { key: 'ticker', dir: 'asc' },
  }));
  return wrap;
}

function renderRatesBody(): HTMLElement {
  const wrap = el('div', { style: 'display:flex; flex-direction:column; height:100%;' });
  wrap.appendChild(renderYieldCurve(data.yield_curves));
  const tables = el('div', { class: 'mkt-yield-tables' });
  for (const k of Object.keys(data.yields)) {
    const y = data.yields[k]!;
    const cell = el('div');
    cell.appendChild(el('div', { class: 'mkt-section__title' }, [y.title]));
    cell.appendChild(renderDataTable({ columns: YIELD_COLUMNS, rows: y.rows as unknown as Array<Record<string, unknown>> }));
    tables.appendChild(cell);
  }
  wrap.appendChild(tables);
  return wrap;
}

// Inline SVG yield curve — declarative, theme-driven via CSS custom properties.
function renderYieldCurve(c: Curves): HTMLElement {
  const wrap = el('div', { class: 'mkt-yield-chart' });
  wrap.appendChild(el('span', { class: 'mkt-yield-chart__title' }, ['GC: US (amber) vs BRAZIL (cyan)']));
  const legend = el('span', { class: 'mkt-yield-chart__legend' });
  legend.innerHTML = `<span class="t-amber"><span class="swatch" style="background:var(--color-accent)"></span>US</span>` +
                     `<span class="t-pos"><span class="swatch" style="background:var(--color-positive)"></span>BR</span>`;
  wrap.appendChild(legend);

  const W = 400, H = 160;
  const padL = 30, padR = 30, padT = 25, padB = 20;
  const minR = 3, maxR = 13;
  const xs = (i: number) => padL + (i / (c.tenors.length - 1)) * (W - padL - padR);
  const ys = (v: number) => H - padB - ((v - minR) / (maxR - minR)) * (H - padT - padB);
  const path = (vs: number[]) => 'M ' + vs.map((v, i) => `${xs(i)},${ys(v)}`).join(' L ');

  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

  // Grid
  for (const yv of [4, 6, 8, 10, 12]) {
    const y = ys(yv);
    const ln = document.createElementNS(svgNS, 'line');
    ln.setAttribute('x1', String(padL)); ln.setAttribute('x2', String(W - padR));
    ln.setAttribute('y1', String(y));    ln.setAttribute('y2', String(y));
    ln.setAttribute('stroke', 'var(--color-grid)'); ln.setAttribute('stroke-dasharray', '2 2'); ln.setAttribute('stroke-width', '0.5');
    svg.appendChild(ln);
    const tx = document.createElementNS(svgNS, 'text');
    tx.setAttribute('x', String(padL - 4)); tx.setAttribute('y', String(y + 2));
    tx.setAttribute('text-anchor', 'end'); tx.setAttribute('fill', 'var(--color-text-muted)');
    tx.setAttribute('font-size', '9'); tx.textContent = String(yv);
    svg.appendChild(tx);
  }

  // Lines
  for (const [vals, color] of [[c.br, 'var(--color-positive)'], [c.us, 'var(--color-accent)']] as const) {
    const p = document.createElementNS(svgNS, 'path');
    p.setAttribute('d', path(vals)); p.setAttribute('fill', 'none');
    p.setAttribute('stroke', color); p.setAttribute('stroke-width', '2');
    svg.appendChild(p);
    for (let i = 0; i < vals.length; i++) {
      const rect = document.createElementNS(svgNS, 'rect');
      rect.setAttribute('x', String(xs(i) - 1.5)); rect.setAttribute('y', String(ys(vals[i]!) - 1.5));
      rect.setAttribute('width', '3'); rect.setAttribute('height', '3'); rect.setAttribute('fill', color);
      svg.appendChild(rect);
    }
  }

  // X-axis labels
  for (let i = 0; i < c.tenors.length; i++) {
    const tx = document.createElementNS(svgNS, 'text');
    tx.setAttribute('x', String(xs(i))); tx.setAttribute('y', String(H - 5));
    tx.setAttribute('text-anchor', 'middle'); tx.setAttribute('fill', 'var(--color-accent)');
    tx.setAttribute('font-size', '10'); tx.setAttribute('font-weight', '700'); tx.textContent = c.tenors[i]!;
    svg.appendChild(tx);
  }

  wrap.appendChild(svg);
  return wrap;
}
