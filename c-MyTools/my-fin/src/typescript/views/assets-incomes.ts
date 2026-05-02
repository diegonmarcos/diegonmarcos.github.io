// ============================================
// B2 — Incomes detail
// ============================================
import type { Dataset, NavItem } from '../modules/types';
import { store } from '../modules/state';
import { formatMoney, formatDate } from '../modules/format';
import { txInPeriod, txAmount, isIncome } from '../modules/aggregate';
import { CATEGORY_META, svgIcon } from '../modules/meta';
import { renderTabbar, bindTabbar } from '../modules/tabs';

export function renderAssetsIncomes(root: HTMLElement, data: Dataset, item: NavItem, tab: string) {
  const { reportingCurrency, period } = store.get();
  const txs = txInPeriod(data, period.months).filter(isIncome);

  let visible = txs;
  if (tab === 'salary')    visible = txs.filter((t) => t.category === 'income');
  else if (tab === 'dividends') visible = txs.filter((t) => t.category === 'investment_income');

  const sorted = [...visible].sort((a, b) => b.date.localeCompare(a.date));
  const total = visible.reduce((s, t) => s + txAmount(t, reportingCurrency, data), 0);
  const accountById = new Map(data.accounts.map((a) => [a.id, a]));

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
        ${kpi('positive', 'Total', formatMoney(total, reportingCurrency, { decimals: 0 }), `${visible.length} entries`)}
        ${kpi('brand', 'Average', formatMoney(visible.length > 0 ? total / visible.length : 0, reportingCurrency, { decimals: 0 }), 'per entry')}
        ${kpi('gold', 'Latest', sorted[0] ? formatDate(sorted[0].date, reportingCurrency) : '—', sorted[0] ? formatMoney(Math.abs(txAmount(sorted[0], reportingCurrency, data)), reportingCurrency, { decimals: 0 }) : '')}
      </section>

      <article class="card card--flush">
        <header class="card__head card__head--bordered"><div><h2 class="card__title">${tab === 'salary' ? 'Salary inflows' : tab === 'dividends' ? 'Dividend / distribution events' : 'All income'}</h2><p class="card__subtitle">${visible.length} entries</p></div></header>
        <div style="overflow:auto">
          <table class="tbl">
            <thead><tr><th>Date</th><th>Source</th><th>Type</th><th>Account</th><th class="num">Native</th><th class="num">${reportingCurrency}</th></tr></thead>
            <tbody>
              ${sorted.map((t) => {
                const meta = CATEGORY_META[t.category];
                const acc = accountById.get(t.accountId);
                return `<tr>
                  <td class="dim">${formatDate(t.date, reportingCurrency)}</td>
                  <td><div class="tbl-cell"><span class="tbl-cell__icon" style="--cell-color:${meta.color}; --cell-bg:${meta.color}22">${svgIcon(meta.icon)}</span><span class="tbl-cell__main"><span class="tbl-cell__title">${escapeHtml(t.merchant)}</span><span class="tbl-cell__meta">${t.note ? escapeHtml(t.note) : ''}</span></span></div></td>
                  <td><span class="tag" style="--tag-color:${meta.color}"><span class="tag__dot"></span>${meta.label}</span></td>
                  <td class="dim">${acc ? escapeHtml(acc.institution) : ''}</td>
                  <td class="num"><span class="t-pos">+${formatMoney(t.amount, t.currency, { abs: true })}</span> <span class="fx-tag">${t.currency}</span></td>
                  <td class="num">${formatMoney(txAmount(t, reportingCurrency, data), reportingCurrency)}</td>
                </tr>`;
              }).join('')}
            </tbody>
          </table>
        </div>
      </article>
    </div>
  `;

  bindTabbar(root, item.route);
}

function kpi(accent: string, label: string, value: string, caption = ''): string {
  return `<div class="kpi kpi--${accent}"><div class="kpi__label">${label}</div><div class="kpi__value">${value}</div>${caption ? `<div class="kpi__caption">${caption}</div>` : ''}</div>`;
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}
