// ============================================
// B0 — Incomes by sources
// ============================================
import type { Dataset, NavItem } from '../modules/types';
import { store } from '../modules/state';
import { formatMoney } from '../modules/format';
import { txInPeriod, txAmount, isIncome } from '../modules/aggregate';
import { renderDonut } from '../modules/charts';
import { svgIcon } from '../modules/meta';
import { renderTabbar, bindTabbar } from '../modules/tabs';

const SOURCE_COLORS: Record<string, string> = {
  Salary: '#34D399',
  '13th salary': '#22D3EE',
  'US ETF distributions': '#5B8CFF',
  'EU ETF distributions': '#C084FC',
  'BR ETF distributions': '#F472B6',
  Other: '#5E6884',
};

export function renderAssetsSources(root: HTMLElement, data: Dataset, item: NavItem, tab: string) {
  const { reportingCurrency, period } = store.get();
  const txs = txInPeriod(data, period.months).filter(isIncome);

  const classify = (merchant: string, category: string): string => {
    if (category === 'income' && merchant.includes('13º')) return '13th salary';
    if (category === 'income') return 'Salary';
    if (merchant.includes('VTI') || merchant.includes('VOO') || merchant.includes('BND')) return 'US ETF distributions';
    if (merchant.includes('VWCE') || merchant.includes('IWDA')) return 'EU ETF distributions';
    if (merchant.includes('IVVB') || merchant.includes('BOVA') || merchant.includes('HASH')) return 'BR ETF distributions';
    return 'Other';
  };

  const buckets = new Map<string, { label: string; amount: number; count: number }>();
  for (const t of txs) {
    const src = classify(t.merchant, t.category);
    if (!buckets.has(src)) buckets.set(src, { label: src, amount: 0, count: 0 });
    const b = buckets.get(src)!;
    b.amount += txAmount(t, reportingCurrency, data);
    b.count += 1;
  }
  const sources = [...buckets.values()].sort((a, b) => b.amount - a.amount);
  const total = sources.reduce((s, x) => s + x.amount, 0);

  const active = sources.filter((s) => s.label === 'Salary' || s.label === '13th salary');
  const passive = sources.filter((s) => s.label !== 'Salary' && s.label !== '13th salary');

  let visible = sources;
  if (tab === 'active') visible = active;
  else if (tab === 'passive') visible = passive;

  root.innerHTML = `
    <div class="view fade-in">
      <header class="view__head">
        <div class="view__title">
          <span class="t-eyebrow">B · Assets & Incomes</span>
          <h1 class="t-display">${item.label}</h1>
        </div>
      </header>

      ${renderTabbar(item, tab)}

      <section class="grid-3">
        ${kpi('positive', 'Total income', formatMoney(total, reportingCurrency, { decimals: 0 }), `${txs.length} entries`)}
        ${kpi('brand', 'Active', formatMoney(active.reduce((s, x) => s + x.amount, 0), reportingCurrency, { decimals: 0 }), `${(active.reduce((s, x) => s + x.amount, 0) / total * 100).toFixed(1)}% of total`)}
        ${kpi('violet', 'Passive', formatMoney(passive.reduce((s, x) => s + x.amount, 0), reportingCurrency, { decimals: 0 }), `${(passive.reduce((s, x) => s + x.amount, 0) / total * 100).toFixed(1)}% of total`)}
      </section>

      <article class="card">
        <header class="card__head"><div><h2 class="card__title">Income sources</h2><p class="card__subtitle">${tab === 'donut' ? 'All sources' : (tab === 'active' ? 'Active only' : 'Passive only')}</p></div></header>
        <div style="display:grid; grid-template-columns: 240px 1fr; gap: 32px; align-items: center">
          <div id="donut" class="donut-wrap" style="height: 240px"></div>
          <div id="leg" class="chart-legend" style="flex-direction:column; gap: 12px"></div>
        </div>
      </article>
    </div>
  `;

  const donutWrap = root.querySelector('#donut') as HTMLElement;
  const segs = visible.map((s) => ({ label: s.label, value: s.amount, color: SOURCE_COLORS[s.label] || '#5E6884' }));
  donutWrap.appendChild(renderDonut({ segments: segs, size: 220, thickness: 32 }));
  donutWrap.insertAdjacentHTML('beforeend', `<div class="donut-wrap__center"><div class="donut-wrap__label">Total</div><div class="donut-wrap__value">${formatMoney(visible.reduce((s, x) => s + x.amount, 0), reportingCurrency, { decimals: 0, compact: true })}</div></div>`);

  root.querySelector('#leg')!.innerHTML = visible.map((s) => `
    <div class="chart-legend__item" style="display:flex; align-items:center; justify-content:space-between; width:100%">
      <span style="display:flex; align-items:center; gap:8px">
        <span class="chart-legend__item-dot" style="background:${SOURCE_COLORS[s.label] || '#5E6884'}"></span>
        <span class="chart-legend__item-label">${s.label}</span>
      </span>
      <span style="display:flex; align-items:center; gap:10px">
        <span class="t-meta">${s.count} entries</span>
        <span class="chart-legend__item-value">${formatMoney(s.amount, reportingCurrency, { decimals: 0 })}</span>
      </span>
    </div>
  `).join('');

  bindTabbar(root, item.route);
}

function kpi(accent: string, label: string, value: string, caption = ''): string {
  return `<div class="kpi kpi--${accent}"><div class="kpi__label">${label}</div><div class="kpi__value">${value}</div>${caption ? `<div class="kpi__caption">${caption}</div>` : ''}</div>`;
}
