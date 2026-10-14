import { el, clear } from '../shell/dom';
import { renderKpiGrid, type Kpi } from '../widgets/kpi';
import { renderDataTable, type Column } from '../widgets/data-table';
import { renderError, renderLoadingOverlay } from '../widgets/loading-overlay';
import { renderMultiLineChart } from '../charts/multi-line';
import { computeHedge, ema, classicPivots, type HedgeInputs } from '../lib/fx-math';
import fxHedge from '../data/fx-hedge.json';
import type { ScreenContext } from './registry';

interface Tab { id: string; label: string; }
interface Defaults extends HedgeInputs {}
interface RangeSpec { step: number; min: number; }
interface Cfg {
  tabs: Tab[];
  defaults: Defaults;
  ranges: Record<keyof Defaults, RangeSpec>;
  endpoints: {
    yahoo_chart: { proxy: string; target: string };
    spot_fallback: string;
    bacen_focus: { url: string };
  };
  ema_periods: number[];
  labels: { options: Array<{ id: string; tag: string; title: string; desc: string }> };
}
const cfg = fxHedge as unknown as Cfg;

const fmtBRL = (v: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v);
const fmtUSD = (v: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(v);
const fmtRate = (v: number) => `R$ ${v.toFixed(4)}`;

// --- main render ---------------------------------------------------------

export function renderFxHedgeCost(host: HTMLElement, _ctx: ScreenContext): void {
  let activeTabId: string = cfg.tabs[0]!.id;
  const inputs: HedgeInputs = { ...cfg.defaults };

  const tabsBar = el('nav', { class: 'tabs', role: 'tablist' });
  const body = el('div');
  host.appendChild(el('h2', {}, ['FX Hedge Cost']));
  host.appendChild(el('p', { class: 't-muted u-mb-s' }, ['Treasury FX Suite — options hedging, EMA technical chart, BACEN Focus expectations.']));
  host.appendChild(tabsBar);
  host.appendChild(body);

  const renderTabsBar = () => {
    clear(tabsBar);
    for (const t of cfg.tabs) {
      const btn = el<HTMLButtonElement>('button', {
        class: `tabs__btn${t.id === activeTabId ? ' tabs__btn--active' : ''}`,
        type: 'button',
        role: 'tab',
        'data-tab': t.id,
      }, [t.label]);
      btn.addEventListener('click', () => {
        activeTabId = t.id;
        renderTabsBar();
        renderTabBody();
      });
      tabsBar.appendChild(btn);
    }
  };

  const renderTabBody = () => {
    clear(body);
    if (activeTabId === 'hedge') renderHedgeTab(body, inputs);
    else if (activeTabId === 'tech')  renderTechTab(body);
    else if (activeTabId === 'bacen') renderBacenTab(body);
  };

  renderTabsBar();
  renderTabBody();
}

// --- Tab 1: HEDGE MODELS -------------------------------------------------

function renderHedgeTab(host: HTMLElement, inputs: HedgeInputs): void {
  const wrap = el('div');
  const inputsCol = el('div', { class: 'u-col u-pad u-mb' });
  const outputsCol = el('div');
  const out = computeHedge(inputs);

  inputsCol.appendChild(el('div', { class: 'mkt-section__title' }, ['HEDGE INPUTS']));

  const fieldsSpec: Array<{ key: keyof HedgeInputs; label: string }> = [
    { key: 'spot',      label: 'Spot Rate' },
    { key: 'targetBRL', label: 'Target Notional (BRL)' },
    { key: 'ceiling',   label: 'Ceiling (Risk)' },
    { key: 'cap',       label: 'Spread Cap' },
    { key: 'rBRL',      label: 'Selic (%)' },
    { key: 'rUSD',      label: 'US Rate (%)' },
    { key: 'vol',       label: 'Implied Vol (%)' },
    { key: 't',         label: 'Maturity (Yrs)' },
  ];

  const refresh = () => {
    const newOut = computeHedge(inputs);
    clear(outputsCol);
    outputsCol.appendChild(renderKpiGrid([
      { label: 'USD TARGET',          value: fmtUSD(newOut.targetUSD), tone: 'info' },
      { label: 'PURE CALL PREMIUM',   value: fmtBRL(newOut.callPremiumTotal),   hint: `${newOut.callPremiumPct.toFixed(2)}% of notional`,   tone: 'warn' },
      { label: 'CALL SPREAD PREMIUM', value: fmtBRL(newOut.spreadPremiumTotal), hint: `${newOut.spreadPremiumPct.toFixed(2)}% of notional`, tone: 'warn' },
      { label: 'COLLAR FLOOR',        value: fmtRate(newOut.collarFloor),       hint: 'put strike where premium = call premium', tone: 'pos' },
    ]));
    outputsCol.appendChild(el('div', { class: 'mkt-section__title u-mt' }, ['HEDGE OPTIONS — DETAIL']));
    outputsCol.appendChild(renderOptionsTable(inputs, newOut));
    outputsCol.appendChild(el('div', { class: 'mkt-section__title u-mt' }, ['EXACT BREAKEVENS — OPPORTUNITY COST']));
    outputsCol.appendChild(renderBreakevensTable(newOut));
  };

  for (const f of fieldsSpec) {
    const range = cfg.ranges[f.key];
    const input = el<HTMLInputElement>('input', {
      class: 'field__input',
      type: 'number',
      step: String(range.step),
      min:  String(range.min),
      value: String(inputs[f.key]),
      'data-field': String(f.key),
    });
    input.addEventListener('input', () => {
      const v = parseFloat(input.value);
      if (!isNaN(v) && v > 0) {
        inputs[f.key] = v;
        refresh();
      }
    });
    inputsCol.appendChild(el('div', { class: 'field' }, [
      el('span', { class: 'field__label' }, [f.label]),
      input,
    ]));
  }

  wrap.appendChild(inputsCol);
  wrap.appendChild(outputsCol);
  host.appendChild(wrap);
  refresh();

  // Keep inputs/outputs side-by-side on wide screens.
  // Inline minimal style — the layout is local to this tab and not worth a global class.
  inputsCol.style.maxWidth = '420px';
  inputsCol.style.borderRight = '1px solid var(--color-border)';
  inputsCol.style.float = 'left';
  outputsCol.style.marginLeft = '440px';
  outputsCol.style.minWidth = '0';
  // Suppress in narrow layouts: collapse to stacked.
  if (window.innerWidth < 1100) {
    inputsCol.style.maxWidth = '';
    inputsCol.style.borderRight = '';
    inputsCol.style.float = '';
    outputsCol.style.marginLeft = '';
  }
  // Initial output mounted by refresh()
  void out;
}

const OPTIONS_COLUMNS: Column[] = [
  { key: 'tag',     label: 'Tag' },
  { key: 'title',   label: 'Strategy' },
  { key: 'strikes', label: 'Strikes' },
  { key: 'premium', label: 'Premium (BRL)', numeric: true },
  { key: 'pct',     label: '% Notional',    numeric: true,
    format: (v) => `${(v as number).toFixed(2)}%` },
  { key: 'desc',    label: 'Description' },
];

function renderOptionsTable(i: HedgeInputs, o: ReturnType<typeof computeHedge>): HTMLElement {
  const opt = cfg.labels.options;
  const rows: Array<Record<string, unknown>> = [
    {
      tag:     opt[0]!.tag,
      title:   opt[0]!.title,
      strikes: `K = ${i.ceiling.toFixed(2)}`,
      premium: fmtBRL(o.callPremiumTotal),
      pct:     o.callPremiumPct,
      desc:    opt[0]!.desc,
    },
    {
      tag:     opt[1]!.tag,
      title:   opt[1]!.title,
      strikes: `K1=${i.ceiling.toFixed(2)} / K2=${i.cap.toFixed(2)}`,
      premium: fmtBRL(o.spreadPremiumTotal),
      pct:     o.spreadPremiumPct,
      desc:    opt[1]!.desc,
    },
    {
      tag:     opt[2]!.tag,
      title:   opt[2]!.title,
      strikes: `Floor = ${o.collarFloor.toFixed(4)}, Ceiling = ${i.ceiling.toFixed(2)}`,
      premium: fmtBRL(0),
      pct:     0,
      desc:    opt[2]!.desc,
    },
  ];
  return renderDataTable({ columns: OPTIONS_COLUMNS, rows });
}

const BREAKEVEN_COLUMNS: Column[] = [
  { key: 'vs',         label: 'Compared with' },
  { key: 'breakeven',  label: 'Breakeven Spot', numeric: true },
  { key: 'note',       label: 'Interpretation' },
];

function renderBreakevensTable(o: ReturnType<typeof computeHedge>): HTMLElement {
  const rows: Array<Record<string, unknown>> = [
    {
      vs: 'OPT 1 — Pure Call',
      breakeven: fmtRate(o.beVsCall),
      note: 'If real USD/BRL drops below this, the Collar hurts more than paying Opt 1 premium.',
    },
    {
      vs: 'OPT 2 — Call Spread',
      breakeven: fmtRate(o.beVsSpread),
      note: 'If real USD/BRL drops below this, the Collar hurts more than paying Opt 2 premium.',
    },
  ];
  return renderDataTable({ columns: BREAKEVEN_COLUMNS, rows });
}

// --- Tab 2: TECH CHART ---------------------------------------------------

function renderTechTab(host: HTMLElement): void {
  host.appendChild(el('div', { class: 'mkt-section__title' }, ['USD/BRL — DAILY CLOSE + EMA + PIVOTS']));
  const status = el('p', { class: 't-muted u-mb-s' }, ['Live: Yahoo Finance via allorigins proxy.']);
  host.appendChild(status);
  const loading = renderLoadingOverlay('FETCHING USD/BRL HISTORY…');
  host.appendChild(loading);

  void fetchYahooSeries().then((series) => {
    loading.remove();
    if (!series) {
      host.appendChild(renderError('Yahoo / allorigins unreachable.'));
      return;
    }
    const closes = series.closes;
    const periods = cfg.ema_periods;
    const ema5  = ema(closes, periods[0] ?? 5);
    const ema10 = ema(closes, periods[1] ?? 10);
    const yHigh = series.highs[series.highs.length - 2] ?? closes[closes.length - 1]!;
    const yLow  = series.lows [series.lows.length  - 2] ?? closes[closes.length - 1]!;
    const yClose= closes[closes.length - 2] ?? closes[closes.length - 1]!;
    const piv = classicPivots(yHigh, yLow, yClose);

    host.appendChild(renderKpiGrid([
      { label: 'LATEST CLOSE',  value: fmtRate(closes[closes.length - 1]!), tone: 'info' },
      { label: 'PIVOT (P)',     value: fmtRate(piv.P) },
      { label: 'R1 / R2 / R3',  value: `${piv.R1.toFixed(3)} / ${piv.R2.toFixed(3)} / ${piv.R3.toFixed(3)}`, tone: 'warn' },
      { label: 'S1 / S2 / S3',  value: `${piv.S1.toFixed(3)} / ${piv.S2.toFixed(3)} / ${piv.S3.toFixed(3)}`, tone: 'pos' },
    ]));

    host.appendChild(renderMultiLineChart({
      label: 'USD/BRL — Close + EMA + Pivots',
      labels: series.dates,
      series: [
        { name: 'Close', values: closes,                       color: 'var(--color-info)',     width: 2 },
        { name: `EMA${periods[0] ?? 5}`,  values: ema5,        color: 'var(--color-warning)',  width: 1.25 },
        { name: `EMA${periods[1] ?? 10}`, values: ema10,       color: 'var(--color-accent)',   width: 1.25 },
      ],
      hLines: [
        { value: piv.R3, label: 'R3', color: 'var(--color-negative)', dash: [4, 4] },
        { value: piv.R2, label: 'R2', color: 'var(--color-negative)', dash: [4, 4] },
        { value: piv.R1, label: 'R1', color: 'var(--color-negative)', dash: [4, 4] },
        { value: piv.P,  label: 'P',  color: 'var(--color-text-muted)', dash: [2, 2] },
        { value: piv.S1, label: 'S1', color: 'var(--color-positive)', dash: [4, 4] },
        { value: piv.S2, label: 'S2', color: 'var(--color-positive)', dash: [4, 4] },
        { value: piv.S3, label: 'S3', color: 'var(--color-positive)', dash: [4, 4] },
      ],
    }));
  }).catch((err: unknown) => {
    loading.remove();
    host.appendChild(renderError((err as Error).message));
  });
}

interface YahooSeries { dates: string[]; closes: number[]; highs: number[]; lows: number[]; }

async function fetchYahooSeries(): Promise<YahooSeries | null> {
  try {
    const target = encodeURIComponent(cfg.endpoints.yahoo_chart.target);
    const proxyUrl = `${cfg.endpoints.yahoo_chart.proxy}${target}`;
    const r = await fetch(proxyUrl);
    const wrapper = await r.json() as { contents?: string };
    if (!wrapper.contents) return null;
    const data = JSON.parse(wrapper.contents);
    const result = data?.chart?.result?.[0];
    if (!result) return null;
    const ts = result.timestamp as number[];
    const q  = result.indicators.quote[0] as { close: (number | null)[]; high: (number | null)[]; low: (number | null)[] };
    const dates: string[] = []; const closes: number[] = []; const highs: number[] = []; const lows: number[] = [];
    for (let i = 0; i < ts.length; i++) {
      if (q.close[i] != null && q.high[i] != null && q.low[i] != null) {
        const d = new Date(ts[i]! * 1000);
        dates.push(`${d.getDate()}/${d.getMonth() + 1}`);
        closes.push(q.close[i] as number);
        highs.push(q.high[i] as number);
        lows.push(q.low[i] as number);
      }
    }
    return closes.length ? { dates, closes, highs, lows } : null;
  } catch {
    return null;
  }
}

// --- Tab 3: BACEN FOCUS --------------------------------------------------

const BACEN_COLUMNS: Column[] = [
  { key: 'year',     label: 'Year' },
  { key: 'base',     label: 'Calc Base' },
  { key: 'max',      label: 'Max',    numeric: true,
    format: (v) => v === null || v === undefined ? '—' : `R$ ${(v as number).toFixed(2)}` },
  { key: 'median',   label: 'Median', numeric: true,
    format: (v) => v === null || v === undefined ? '—' : `R$ ${(v as number).toFixed(2)}` },
  { key: 'min',      label: 'Min',    numeric: true,
    format: (v) => v === null || v === undefined ? '—' : `R$ ${(v as number).toFixed(2)}` },
];

function renderBacenTab(host: HTMLElement): void {
  host.appendChild(el('div', { class: 'mkt-section__title' }, ['BACEN FOCUS — CÂMBIO USD/BRL ANNUAL EXPECTATIONS']));
  host.appendChild(el('p', { class: 't-muted u-mb-s' }, ['Live: Olinda OData (Banco Central do Brasil).']));
  const loading = renderLoadingOverlay('FETCHING BACEN…');
  host.appendChild(loading);

  void fetch(cfg.endpoints.bacen_focus.url).then(r => {
    if (!r.ok) throw new Error('BACEN HTTP ' + r.status);
    return r.json() as Promise<{ value: Array<{ Data: string; DataReferencia: string; baseCalculo: number; Maximo: number | null; Mediana: number | null; Minimo: number | null }> }>;
  }).then(json => {
    loading.remove();
    if (!json.value || json.value.length === 0) {
      host.appendChild(el('p', { class: 't-amber' }, ['(no records returned)']));
      return;
    }
    const latestDate = json.value[0]!.Data;
    const latest = json.value.filter(r => r.Data === latestDate);
    latest.sort((a, b) => a.DataReferencia === b.DataReferencia ? a.baseCalculo - b.baseCalculo : a.DataReferencia.localeCompare(b.DataReferencia));
    const rows = latest.map(r => ({
      year:   r.DataReferencia,
      base:   r.baseCalculo === 0 ? 'Broad Market' : 'Top 5 Instituições',
      max:    r.Maximo,
      median: r.Mediana,
      min:    r.Minimo,
    }));
    host.appendChild(renderDataTable({ columns: BACEN_COLUMNS, rows: rows as unknown as Array<Record<string, unknown>> }));
    host.appendChild(el('p', { class: 't-muted u-mt' }, [`Latest report Data = ${latestDate}`]));
  }).catch((err: unknown) => {
    loading.remove();
    host.appendChild(renderError((err as Error).message));
  });
}
