import { el } from '../shell/dom';
import { renderKpiGrid, type Kpi } from '../widgets/kpi';
import { renderDataTable, type Column } from '../widgets/data-table';
import { renderLineChart } from '../charts/line';
import cbmSubreports from '../data/cbm-subreports.json';
import valuationTypes from '../data/valuation-types.json';
import type { ScreenContext } from './registry';

interface Indicator { label: string; value: number; unit: string; change: number; trend: 'up' | 'down' | 'stable'; }
interface ColumnSpec { key: string; label: string; numeric?: boolean; signed?: boolean; }
interface Components { title: string; columns: ColumnSpec[]; rows: Array<Record<string, unknown>>; }
interface ChartSpec { title: string; base: number; volatility: number; points: number; y_unit?: string; }
export interface Subreport {
  id: string;
  title: string;
  summary: string;
  indicators: Indicator[];
  components: Components;
  chart: ChartSpec;
}

const SUBREPORTS: Subreport[] = [
  ...((cbmSubreports as { subreports: Subreport[] }).subreports),
  ...((valuationTypes as { types: Subreport[] }).types),
];
const BY_ID: Map<string, Subreport> = new Map(SUBREPORTS.map(r => [r.id, r]));

export function listSubreports(): Subreport[] { return (cbmSubreports as { subreports: Subreport[] }).subreports; }
export function listValuationTypes(): Subreport[] { return (valuationTypes as { types: Subreport[] }).types; }

function indicatorToKpi(i: Indicator): Kpi {
  const tone: Kpi['tone'] = i.trend === 'up' ? 'pos' : i.trend === 'down' ? 'neg' : 'neutral';
  const value = `${formatNum(i.value)}${i.unit ? ' ' + i.unit : ''}`;
  const sign = i.change >= 0 ? '+' : '';
  const hint = i.change === 0 ? '—' : `${sign}${formatNum(i.change)}${i.unit ?? ''}`;
  return { label: i.label, value, tone, hint };
}

function formatNum(n: number): string {
  if (Math.abs(n) >= 1000) return n.toLocaleString('en-US', { maximumFractionDigits: 1 });
  if (Math.abs(n) >= 1)    return n.toFixed(2);
  return n.toFixed(3);
}

function deterministicSeries(spec: ChartSpec, seedKey: string): { x: number; y: number }[] {
  let v = spec.base;
  let seed = hashStr(seedKey) >>> 0;
  const out: { x: number; y: number }[] = [];
  for (let i = 0; i < spec.points; i++) {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    const r = ((seed / 0xffffffff) - 0.5) * spec.volatility;
    v = v + r;
    out.push({ x: i, y: parseFloat(v.toFixed(3)) });
  }
  return out;
}
function hashStr(s: string): number { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h; }

function toColumn(c: ColumnSpec): Column {
  const col: Column = { key: c.key, label: c.label };
  if (c.numeric) col.numeric = true;
  if (c.signed)  col.signed  = true;
  if (c.numeric) col.format = (v) => v === null || v === undefined ? '—' : formatNum(v as number);
  return col;
}

// Generic renderer used by every CBM macro subreport AND every valuation
// type. Both share the (indicators + components + chart) shape, so one
// renderer covers them all.
export function renderMacroReport(host: HTMLElement, _ctx: ScreenContext, reportId: string): void {
  const r = BY_ID.get(reportId);
  if (!r) {
    host.appendChild(el('p', { class: 't-neg' }, [`unknown report: ${reportId}`]));
    return;
  }

  host.appendChild(el('h2', {}, [r.title]));
  host.appendChild(el('p', { class: 't-muted u-mb-s' }, [r.summary]));

  host.appendChild(renderKpiGrid(r.indicators.map(indicatorToKpi)));

  host.appendChild(el('div', { class: 'mkt-section__title u-mt' }, [r.components.title]));
  host.appendChild(renderDataTable({
    columns: r.components.columns.map(toColumn),
    rows: r.components.rows,
  }));

  host.appendChild(el('div', { class: 'u-mt' }));
  host.appendChild(renderLineChart({
    points: deterministicSeries(r.chart, r.id),
    label: r.chart.title,
  }));
}
