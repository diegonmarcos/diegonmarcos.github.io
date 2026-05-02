// ============================================
// B1 — Portfolio NAV
// ============================================
import type { Dataset, NavItem } from '../modules/types';
import { store } from '../modules/state';
import { formatMoney, formatPercent } from '../modules/format';
import {
  portfolioValue, portfolioCost, holdingValue, holdingPnl, bucketByAssetClass,
} from '../modules/aggregate';
import { renderDonut } from '../modules/charts';
import { ASSET_CLASS_META, svgIcon } from '../modules/meta';
import { renderTabbar, bindTabbar } from '../modules/tabs';

export function renderAssetsPortfolio(root: HTMLElement, data: Dataset, item: NavItem, tab: string) {
  const { reportingCurrency } = store.get();
  const total = portfolioValue(data.holdings, reportingCurrency, data);
  const cost = portfolioCost(data.holdings, reportingCurrency, data);
  const pnl = total - cost;
  const pnlPct = cost > 0 ? (pnl / cost) * 100 : 0;
  const classes = bucketByAssetClass(data.holdings, reportingCurrency, data);

  root.innerHTML = `
    <div class="view fade-in">
      <header class="view__head">
        <div class="view__title">
          <span class="t-eyebrow">B · Assets & Incomes</span>
          <h1 class="t-display">${item.label}</h1>
        </div>
        <div class="view__actions">
          <button class="btn btn--ghost">${svgIcon('download')} Export</button>
          <button class="btn btn--secondary">${svgIcon('plus')} New holding</button>
        </div>
      </header>

      ${renderTabbar(item, tab)}

      <section class="grid-4">
        ${kpi('brand', 'Net worth', formatMoney(total, reportingCurrency, { decimals: 0 }), `${data.holdings.length} positions`)}
        ${kpi(pnl >= 0 ? 'positive' : 'gold', 'P&L', formatMoney(pnl, reportingCurrency, { decimals: 0, signed: true }), formatPercent(pnlPct, 1) + ' unrealised')}
        ${kpi('violet', 'Cost basis', formatMoney(cost, reportingCurrency, { decimals: 0, compact: true }), 'Aggregate book value')}
        ${kpi('gold', 'Cash', formatMoney(classes.find((c) => c.assetClass === 'cash')?.amount || 0, reportingCurrency, { decimals: 0, compact: true }), 'USD/EUR/GBP/BRL')}
      </section>

      <section id="tab-content"></section>
    </div>
  `;

  const tabRoot = root.querySelector('#tab-content') as HTMLElement;

  if (tab === 'allocation') {
    tabRoot.innerHTML = `
      <article class="card">
        <header class="card__head"><div><h2 class="card__title">Asset allocation</h2><p class="card__subtitle">By class · ${reportingCurrency}</p></div></header>
        <div style="display:grid; grid-template-columns: 240px 1fr; gap: 32px; align-items: center">
          <div id="alloc" class="donut-wrap" style="height: 240px"></div>
          <div class="chart-legend" style="flex-direction:column; gap: 12px">
            ${classes.map((c) => `
              <div class="chart-legend__item" style="display:flex; justify-content:space-between; width:100%">
                <span style="display:flex; align-items:center; gap:8px">
                  <span class="chart-legend__item-dot" style="background:${ASSET_CLASS_META[c.assetClass as keyof typeof ASSET_CLASS_META].color}"></span>
                  <span class="chart-legend__item-label">${ASSET_CLASS_META[c.assetClass as keyof typeof ASSET_CLASS_META].label}</span>
                </span>
                <span style="display:flex; align-items:center; gap:10px">
                  <span class="t-meta">${(c.share * 100).toFixed(1)}%</span>
                  <span class="chart-legend__item-value">${formatMoney(c.amount, reportingCurrency, { decimals: 0, compact: true })}</span>
                </span>
              </div>
            `).join('')}
          </div>
        </div>
      </article>
    `;
    const allocWrap = tabRoot.querySelector('#alloc') as HTMLElement;
    allocWrap.appendChild(renderDonut({
      segments: classes.map((c) => ({ label: ASSET_CLASS_META[c.assetClass as keyof typeof ASSET_CLASS_META].label, value: c.amount, color: ASSET_CLASS_META[c.assetClass as keyof typeof ASSET_CLASS_META].color })),
      size: 220, thickness: 32,
    }));
    allocWrap.insertAdjacentHTML('beforeend', `<div class="donut-wrap__center"><div class="donut-wrap__label">Total</div><div class="donut-wrap__value">${formatMoney(total, reportingCurrency, { decimals: 0, compact: true })}</div></div>`);
  } else if (tab === 'holdings') {
    const sorted = [...data.holdings].sort((a, b) => holdingValue(b, reportingCurrency, data) - holdingValue(a, reportingCurrency, data));
    tabRoot.innerHTML = `
      <article class="card card--flush">
        <header class="card__head card__head--bordered"><div><h2 class="card__title">Holdings</h2><p class="card__subtitle">${data.holdings.length} positions</p></div></header>
        <div style="overflow:auto">
          <table class="tbl">
            <thead><tr><th>Holding</th><th>Class</th><th class="num">Qty</th><th class="num">Price</th><th class="num">Value</th><th class="num">P&amp;L</th><th class="num">Allocation</th></tr></thead>
            <tbody>
              ${sorted.map((h) => {
                const cls = ASSET_CLASS_META[h.assetClass];
                const v = holdingValue(h, reportingCurrency, data);
                const { value: pnlVal, pct: pnlPct } = holdingPnl(h, reportingCurrency, data);
                const alloc = total > 0 ? (v / total) * 100 : 0;
                const isCash = h.assetClass === 'cash';
                return `<tr>
                  <td><div class="tbl-cell"><span class="tbl-cell__icon" style="--cell-color:${cls.color}; --cell-bg:${cls.color}22">${svgIcon('portfolio')}</span><span class="tbl-cell__main"><span class="tbl-cell__title">${h.ticker}</span><span class="tbl-cell__meta">${h.name} <span class="fx-tag" style="margin-left:4px">${h.currency}</span></span></span></div></td>
                  <td><span class="tag" style="--tag-color:${cls.color}"><span class="tag__dot"></span>${cls.label}</span></td>
                  <td class="num">${isCash ? '—' : h.quantity.toLocaleString()}</td>
                  <td class="num">${isCash ? '—' : formatMoney(h.currentPrice, h.currency)}</td>
                  <td class="num"><div class="dual-amount"><span class="dual-amount__primary">${formatMoney(v, reportingCurrency, { decimals: 0 })}</span>${h.currency !== reportingCurrency ? `<span class="dual-amount__native">${formatMoney(isCash ? h.avgCost : h.quantity * h.currentPrice, h.currency, { decimals: 0 })}</span>` : ''}</div></td>
                  <td class="num">${isCash ? '<span class="t-dim">—</span>' : `<span class="${pnlVal >= 0 ? 't-pos' : 't-neg'}">${formatMoney(pnlVal, reportingCurrency, { decimals: 0, signed: true })}</span><div class="t-meta">${formatPercent(pnlPct, 1)}</div>`}</td>
                  <td class="num"><div style="display:flex;align-items:center;gap:8px;justify-content:flex-end"><span>${alloc.toFixed(1)}%</span><div style="width:60px;height:4px;background:rgba(255,255,255,0.06);border-radius:2px;overflow:hidden"><div style="height:100%;width:${alloc.toFixed(1)}%;background:${cls.color};opacity:0.85"></div></div></div></td>
                </tr>`;
              }).join('')}
            </tbody>
          </table>
        </div>
      </article>
    `;
  } else if (tab === 'currency') {
    const byCurrency: Record<string, number> = {};
    for (const h of data.holdings) {
      const v = holdingValue(h, reportingCurrency, data);
      byCurrency[h.currency] = (byCurrency[h.currency] || 0) + v;
    }
    const t = Object.values(byCurrency).reduce((s, v) => s + v, 0) || 1;
    tabRoot.innerHTML = `
      <article class="card">
        <header class="card__head"><div><h2 class="card__title">Currency exposure</h2><p class="card__subtitle">Native currency of each holding</p></div></header>
        <div>
          ${Object.entries(byCurrency).sort((a, b) => b[1] - a[1]).map(([cur, v]) => {
            const pct = (v / t) * 100;
            return `
              <div style="display:flex; flex-direction:column; gap:6px; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04)">
                <div style="display:flex; justify-content: space-between">
                  <span><span class="fx-tag" style="margin-right:8px">${cur}</span><span class="t-meta">${pct.toFixed(1)}%</span></span>
                  <span class="t-num">${formatMoney(v, reportingCurrency, { decimals: 0 })}</span>
                </div>
                <div style="height: 6px; border-radius: 3px; background: rgba(255,255,255,0.04); overflow: hidden">
                  <div style="height:100%; width:${pct.toFixed(1)}%; background: linear-gradient(90deg, #5B8CFF, #C084FC); border-radius: 3px"></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </article>
    `;
  }

  bindTabbar(root, item.route);
}

function kpi(accent: string, label: string, value: string, caption = ''): string {
  return `<div class="kpi kpi--${accent}"><div class="kpi__label">${label}</div><div class="kpi__value">${value}</div>${caption ? `<div class="kpi__caption">${caption}</div>` : ''}</div>`;
}
