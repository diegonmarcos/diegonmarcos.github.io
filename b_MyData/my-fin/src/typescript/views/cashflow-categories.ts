// ============================================
// A0 — Cashflow by categories
// ============================================
import type { Dataset, NavItem } from '../modules/types';
import { store } from '../modules/state';
import { formatMoney, formatPercent, formatMonth, fxConvert } from '../modules/format';
import { txInPeriod, bucketByMonth, bucketByCategory, isIncome } from '../modules/aggregate';
import { renderBars, renderDonut, renderLine } from '../modules/charts';
import { CATEGORY_META, svgIcon } from '../modules/meta';
import { renderTabbar, bindTabbar } from '../modules/tabs';

export function renderCashflowCategories(root: HTMLElement, data: Dataset, item: NavItem, tab: string) {
  const { reportingCurrency, period } = store.get();
  const txs = txInPeriod(data, period.months);
  const months = bucketByMonth(txs, reportingCurrency, data);
  const categories = bucketByCategory(txs, reportingCurrency, data);

  const totalIncome = months.reduce((s, m) => s + m.income, 0);
  const totalExpense = months.reduce((s, m) => s + m.expense, 0);
  const fullMonths = months.filter((m) => m.expense > 100);
  const avgMonthly = fullMonths.length ? fullMonths.reduce((s, m) => s + m.expense, 0) / fullMonths.length : 0;
  const last = months[months.length - 1];
  const prev = months[months.length - 2];
  const monthDelta = prev && prev.expense > 0 ? ((last.expense - prev.expense) / prev.expense) * 100 : 0;
  const savingsRate = totalIncome > 0 ? ((totalIncome - totalExpense) / totalIncome) * 100 : 0;

  root.innerHTML = `
    <div class="view fade-in">
      <header class="view__head">
        <div class="view__title">
          <span class="t-eyebrow">A · Cashflow</span>
          <h1 class="t-display">${item.label}</h1>
        </div>
        <div class="view__actions">
          <button class="btn btn--secondary">${svgIcon('download')} Export CSV</button>
        </div>
      </header>

      ${renderTabbar(item, tab)}

      <section class="grid-4">
        ${kpi('positive', 'Net savings', formatMoney(totalIncome - totalExpense, reportingCurrency, { decimals: 0 }), formatPercent(savingsRate, 1) + ' rate')}
        ${kpi('brand', 'Avg monthly', formatMoney(avgMonthly, reportingCurrency, { decimals: 0 }), `${fullMonths.length} months`)}
        ${kpi('violet', 'This month', formatMoney(last?.expense || 0, reportingCurrency, { decimals: 0 }), formatPercent(monthDelta, 1) + ' vs last')}
        ${kpi('gold', 'Top category', categories[0] ? CATEGORY_META[categories[0].category].label : '—', categories[0] ? formatMoney(categories[0].amount, reportingCurrency, { decimals: 0 }) : '')}
      </section>

      <section id="tab-content"></section>
    </div>
  `;

  const tabRoot = root.querySelector('#tab-content') as HTMLElement;

  if (tab === 'overview') {
    tabRoot.innerHTML = `
      <div class="grid-2">
        <article class="card">
          <header class="card__head"><div><h2 class="card__title">Income vs expense</h2><p class="card__subtitle">Last ${months.length} months</p></div></header>
          <div id="bars"></div>
        </article>
        <article class="card">
          <header class="card__head"><div><h2 class="card__title">Category split</h2><p class="card__subtitle">Total spend</p></div></header>
          <div id="donut" class="donut-wrap" style="height: 220px"></div>
          <div id="leg" class="chart-legend" style="flex-direction:column; gap: 8px"></div>
        </article>
      </div>
    `;
    tabRoot.querySelector('#bars')!.appendChild(renderBars({
      data: months.map((m) => ({ label: formatMonth(m.yearMonth, reportingCurrency).split(' ')[0], income: m.income, expense: m.expense })),
      width: 720, height: 240,
      yLabel: (n) => formatMoney(n, reportingCurrency, { decimals: 0, compact: true }),
    }));
    const donutWrap = tabRoot.querySelector('#donut') as HTMLElement;
    donutWrap.appendChild(renderDonut({
      segments: categories.slice(0, 8).map((c) => ({ label: CATEGORY_META[c.category].label, value: c.amount, color: CATEGORY_META[c.category].color })),
      size: 200, thickness: 28,
    }));
    donutWrap.insertAdjacentHTML('beforeend', `<div class="donut-wrap__center"><div class="donut-wrap__label">Total</div><div class="donut-wrap__value">${formatMoney(totalExpense, reportingCurrency, { decimals: 0, compact: true })}</div></div>`);
    tabRoot.querySelector('#leg')!.innerHTML = categoryLegendHtml(categories.slice(0, 8), reportingCurrency);
  } else if (tab === 'donut') {
    tabRoot.innerHTML = `
      <article class="card">
        <header class="card__head"><div><h2 class="card__title">Categories</h2><p class="card__subtitle">${categories.length} active categories</p></div></header>
        <div style="display:grid; grid-template-columns: 280px 1fr; gap: 32px; align-items: center">
          <div id="big-donut" class="donut-wrap" style="height: 280px"></div>
          <div id="big-leg" class="chart-legend" style="flex-direction:column; gap: 12px"></div>
        </div>
      </article>
    `;
    const donutWrap = tabRoot.querySelector('#big-donut') as HTMLElement;
    donutWrap.appendChild(renderDonut({
      segments: categories.map((c) => ({ label: CATEGORY_META[c.category].label, value: c.amount, color: CATEGORY_META[c.category].color })),
      size: 260, thickness: 36,
    }));
    donutWrap.insertAdjacentHTML('beforeend', `<div class="donut-wrap__center"><div class="donut-wrap__label">Spend</div><div class="donut-wrap__value">${formatMoney(totalExpense, reportingCurrency, { decimals: 0, compact: true })}</div></div>`);
    tabRoot.querySelector('#big-leg')!.innerHTML = categoryLegendHtml(categories, reportingCurrency);
  } else if (tab === 'trend') {
    tabRoot.innerHTML = `
      <article class="card">
        <header class="card__head"><div><h2 class="card__title">Spend trend</h2><p class="card__subtitle">Total monthly expense over time</p></div></header>
        <div id="line"></div>
      </article>
      <article class="card">
        <header class="card__head"><div><h2 class="card__title">Category-by-month heat</h2><p class="card__subtitle">Concentration of spend per category</p></div></header>
        <div id="heat"></div>
      </article>
    `;
    tabRoot.querySelector('#line')!.appendChild(renderLine({
      values: months.map((m) => m.expense),
      labels: months.map((m) => formatMonth(m.yearMonth, reportingCurrency).split(' ')[0]),
      width: 1100, height: 260,
      yLabel: (n) => formatMoney(n, reportingCurrency, { decimals: 0, compact: true }),
    }));
    tabRoot.querySelector('#heat')!.innerHTML = renderHeatmap(txs, months, categories.slice(0, 8), reportingCurrency, data);
  }

  bindTabbar(root, item.route);
}

function categoryLegendHtml(cats: ReturnType<typeof bucketByCategory>, currency: any): string {
  return cats.map((c) => `
    <div class="chart-legend__item" style="display:flex; align-items:center; justify-content:space-between; width:100%">
      <span style="display:flex; align-items:center; gap:8px">
        <span class="chart-legend__item-dot" style="background:${CATEGORY_META[c.category].color}"></span>
        <span class="chart-legend__item-label">${CATEGORY_META[c.category].label}</span>
      </span>
      <span style="display:flex; align-items:center; gap:10px">
        <span class="t-meta">${(c.share * 100).toFixed(1)}%</span>
        <span class="chart-legend__item-value">${formatMoney(c.amount, currency, { decimals: 0 })}</span>
      </span>
    </div>
  `).join('');
}

function renderHeatmap(_txs: any[], months: any[], cats: any[], currency: any, data: any): string {
  return `<div style="overflow:auto"><table class="tbl">
    <thead><tr><th>Category</th>${months.map((m: any) => `<th class="num">${m.yearMonth.slice(5)}</th>`).join('')}</tr></thead>
    <tbody>
      ${cats.map((c: any) => {
        const meta = CATEGORY_META[c.category];
        return `<tr>
          <td><span class="tag" style="--tag-color:${meta.color}"><span class="tag__dot"></span>${meta.label}</span></td>
          ${months.map((m: any) => {
            const monthTxs = data.transactions.filter((t: any) => t.date.startsWith(m.yearMonth) && t.category === c.category && !isIncome(t));
            const sum = monthTxs.reduce((s: number, t: any) => s + Math.abs(fxConvert(t.amount, t.currency, currency, data.fx)), 0);
            const intensity = c.amount ? sum / (c.amount / months.length) : 0;
            const op = Math.min(0.9, 0.05 + intensity * 0.25);
            return `<td class="num" style="background:${meta.color}${Math.round(op*255).toString(16).padStart(2,'0')}">${formatMoney(sum, currency, { decimals: 0, compact: true })}</td>`;
          }).join('')}
        </tr>`;
      }).join('')}
    </tbody></table></div>`;
}

function kpi(accent: string, label: string, value: string, caption: string): string {
  return `<div class="kpi kpi--${accent}"><div class="kpi__label">${label}</div><div class="kpi__value">${value}</div><div class="kpi__caption">${caption}</div></div>`;
}
