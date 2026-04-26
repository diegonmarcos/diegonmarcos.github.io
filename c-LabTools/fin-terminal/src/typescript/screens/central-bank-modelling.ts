import { el, clear } from '../shell/dom';
import { renderKpiGrid, type Kpi } from '../widgets/kpi';
import { renderDataTable, type Column } from '../widgets/data-table';
import { renderLineChart } from '../charts/line';
import cbmData from '../data/central-bank-modelling.json';
import type { ScreenContext } from './registry';

interface Indicator { label: string; value: number; unit: string; change: number; trend: 'up' | 'down' | 'stable'; }
interface Param { key: string; label: string; value: number; range: number[]; }
interface ParamGroup { title: string; params: Param[]; }
interface ChartSpec { id: string; title: string; base: number; volatility: number; points: number; y_unit?: string; }
interface Model {
  indicators: Indicator[];
  param_groups: ParamGroup[];
  scenarios: Record<string, Record<string, number>>;
  charts: ChartSpec[];
  nowcasts?: Array<{ indicator: string; actual: number | null; nowcast: number; confidence: number; sources: string; updated: string }>;
}
interface Tab { id: string; label: string; title: string; }
interface CBM { tabs: Tab[]; models: Record<string, Model>; }

const data = cbmData as CBM;

// --- helpers ---------------------------------------------------------------

function indicatorToKpi(i: Indicator): Kpi {
  const tone: Kpi['tone'] = i.trend === 'up' ? 'pos' : i.trend === 'down' ? 'neg' : 'neutral';
  const value = `${formatNum(i.value)}${i.unit ? ' ' + i.unit : ''}`;
  const sign = i.change >= 0 ? '+' : '';
  const hint = i.change !== 0 ? `${sign}${formatNum(i.change)}${i.unit}` : '—';
  return { label: i.label, value, tone, hint };
}

function formatNum(n: number): string {
  if (Math.abs(n) >= 1000) return n.toLocaleString('en-US', { maximumFractionDigits: 1 });
  if (Math.abs(n) >= 1)    return n.toFixed(2);
  return n.toFixed(4);
}

function applyScenario(model: Model, scenarioKey: string): ParamGroup[] {
  const overrides = model.scenarios[scenarioKey] ?? {};
  return model.param_groups.map(g => ({
    title: g.title,
    params: g.params.map(p => p.key in overrides ? { ...p, value: overrides[p.key]! } : p),
  }));
}

function syntheticSeries(spec: ChartSpec): { x: number; y: number }[] {
  const out: { x: number; y: number }[] = [];
  let v = spec.base;
  // Deterministic so re-renders are stable per chart id (no random flicker).
  let seed = hashStr(spec.id) >>> 0;
  for (let i = 0; i < spec.points; i++) {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    const r = ((seed / 0xffffffff) - 0.5) * spec.volatility;
    v = v + r;
    out.push({ x: i, y: parseFloat(v.toFixed(3)) });
  }
  return out;
}
function hashStr(s: string): number { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h; }

const PARAM_COLUMNS: Column[] = [
  { key: 'label', label: 'Parameter' },
  { key: 'value', label: 'Value', numeric: true,
    format: (v) => formatNum(v as number) },
  { key: 'range', label: 'Range', numeric: true,
    format: (v) => { const r = v as number[]; return `${formatNum(r[0]!)} … ${formatNum(r[1]!)}`; } },
  { key: 'key',   label: 'Symbol' },
];

const NOWCAST_COLUMNS: Column[] = [
  { key: 'indicator',  label: 'Indicator' },
  { key: 'actual',     label: 'Actual',     numeric: true,
    format: (v) => v === null || v === undefined ? '—' : (v as number).toFixed(2) },
  { key: 'nowcast',    label: 'Nowcast',    numeric: true,
    format: (v) => (v as number).toFixed(2) },
  { key: 'confidence', label: 'Confidence', numeric: true,
    format: (v) => `${((v as number) * 100).toFixed(0)}%` },
  { key: 'sources',    label: 'Sources' },
  { key: 'updated',    label: 'Updated' },
];

// --- main render -----------------------------------------------------------

export function renderCentralBankModelling(host: HTMLElement, _ctx: ScreenContext): void {
  let activeTabId: string = data.tabs[0]!.id;
  let activeScenarioByTab: Record<string, string> = {};
  for (const t of data.tabs) activeScenarioByTab[t.id] = 'baseline';

  const tabsBar = el('nav', { class: 'tabs', role: 'tablist' });
  const body = el('div');

  const renderTabContent = () => {
    clear(body);
    const tab = data.tabs.find(t => t.id === activeTabId)!;
    const model = data.models[activeTabId]!;
    const scenarioKey = activeScenarioByTab[activeTabId] ?? 'baseline';

    body.appendChild(el('p', { class: 't-muted u-mb-s' }, [tab.title]));

    // KPI indicators row
    body.appendChild(renderKpiGrid(model.indicators.map(indicatorToKpi)));

    // Scenario selector
    const select = el<HTMLSelectElement>('select', { class: 'field__select' });
    for (const key of Object.keys(model.scenarios)) {
      const opt = document.createElement('option');
      opt.value = key;
      opt.textContent = key.replace(/_/g, ' ').toUpperCase();
      if (key === scenarioKey) opt.selected = true;
      select.appendChild(opt);
    }
    select.addEventListener('change', () => {
      activeScenarioByTab[activeTabId] = select.value;
      renderTabContent();
    });
    body.appendChild(el('div', { class: 'field' }, [
      el('span', { class: 'field__label' }, ['SCENARIO']),
      select,
    ]));

    // Parameters — grouped tables
    const groups = applyScenario(model, scenarioKey);
    for (const g of groups) {
      body.appendChild(el('div', { class: 'mkt-section__title u-mt' }, [g.title]));
      body.appendChild(renderDataTable({
        columns: PARAM_COLUMNS,
        rows: g.params as unknown as Array<Record<string, unknown>>,
      }));
    }

    // Nowcasts table (ML-ABM only)
    if (model.nowcasts && model.nowcasts.length > 0) {
      body.appendChild(el('div', { class: 'mkt-section__title u-mt' }, ['NOWCASTS']));
      body.appendChild(renderDataTable({
        columns: NOWCAST_COLUMNS,
        rows: model.nowcasts as unknown as Array<Record<string, unknown>>,
      }));
    }

    // Charts
    body.appendChild(el('div', { class: 'u-mt' }));
    for (const c of model.charts) {
      body.appendChild(renderLineChart({
        points: syntheticSeries(c),
        label: c.title,
      }));
      body.appendChild(el('div', { class: 'u-mb' }));
    }
  };

  const renderTabsBar = () => {
    clear(tabsBar);
    for (const t of data.tabs) {
      const btn = el<HTMLButtonElement>('button', {
        class: `tabs__btn${t.id === activeTabId ? ' tabs__btn--active' : ''}`,
        type: 'button',
        role: 'tab',
        'aria-selected': t.id === activeTabId ? 'true' : 'false',
        'data-tab': t.id,
      }, [t.label]);
      btn.addEventListener('click', () => {
        activeTabId = t.id;
        renderTabsBar();
        renderTabContent();
      });
      tabsBar.appendChild(btn);
    }
  };

  host.appendChild(tabsBar);
  host.appendChild(body);
  renderTabsBar();
  renderTabContent();
}
