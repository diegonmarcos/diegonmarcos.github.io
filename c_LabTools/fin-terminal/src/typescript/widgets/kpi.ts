import { el } from '../shell/dom';

export interface Kpi {
  label: string;
  value: string;
  hint?: string;
  tone?: 'pos' | 'neg' | 'warn' | 'info' | 'neutral';
}

export function renderKpiGrid(items: Kpi[]): HTMLElement {
  const grid = el('div', { class: 'kpi-grid' });
  for (const k of items) grid.appendChild(renderKpi(k));
  return grid;
}

export function renderKpi(k: Kpi): HTMLElement {
  const toneClass =
    k.tone === 'pos' ? 't-pos' :
    k.tone === 'neg' ? 't-neg' :
    k.tone === 'warn' ? 't-warn' :
    k.tone === 'info' ? 't-info' : 't-white';
  return el('div', { class: 'kpi-tile' }, [
    el('span', { class: 'kpi-tile__label' }, [k.label]),
    el('span', { class: `kpi-tile__value ${toneClass}` }, [k.value]),
    ...(k.hint ? [el('span', { class: 't-muted t-small' }, [k.hint])] : []),
  ]);
}
