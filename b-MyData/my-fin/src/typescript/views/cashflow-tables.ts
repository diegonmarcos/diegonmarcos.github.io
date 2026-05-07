// ============================================
// A2 — Income & Expense Tables
// ============================================
import type { Dataset, NavItem } from '../modules/types';
import { store } from '../modules/state';
import { formatMoney, formatDate } from '../modules/format';
import { txInPeriod, txAmount, isIncome } from '../modules/aggregate';
import { CATEGORY_META, svgIcon } from '../modules/meta';
import { renderTabbar, bindTabbar } from '../modules/tabs';

export function renderCashflowTables(root: HTMLElement, data: Dataset, item: NavItem, tab: string) {
  const { reportingCurrency, period } = store.get();
  const txs = txInPeriod(data, period.months);
  const accountById = new Map(data.accounts.map((a) => [a.id, a]));

  let filtered = txs;
  if (tab === 'expenses') filtered = txs.filter((t) => !isIncome(t));
  else if (tab === 'incomes') filtered = txs.filter((t) => isIncome(t));

  const sorted = [...filtered].sort((a, b) => b.date.localeCompare(a.date));

  const totalIncome = filtered.filter(isIncome).reduce((s, t) => s + txAmount(t, reportingCurrency, data), 0);
  const totalExpense = filtered.filter((t) => !isIncome(t)).reduce((s, t) => s + Math.abs(txAmount(t, reportingCurrency, data)), 0);

  root.innerHTML = `
    <div class="view fade-in">
      <header class="view__head">
        <div class="view__title">
          <span class="t-eyebrow">A · Cashflow</span>
          <h1 class="t-display">${item.label}</h1>
        </div>
        <div class="view__actions">
          <button class="btn btn--secondary">${svgIcon('download')} Export CSV</button>
          <button class="btn btn--primary">${svgIcon('plus')} New transaction</button>
        </div>
      </header>

      ${renderTabbar(item, tab)}

      <section class="grid-3">
        ${kpi('positive', 'Total income', formatMoney(totalIncome, reportingCurrency, { decimals: 0 }), `${filtered.filter(isIncome).length} entries`)}
        ${kpi('brand', 'Total expense', formatMoney(totalExpense, reportingCurrency, { decimals: 0 }), `${filtered.filter((t) => !isIncome(t)).length} entries`)}
        ${kpi('gold', 'Net', formatMoney(totalIncome - totalExpense, reportingCurrency, { decimals: 0, signed: true }), 'income − expense')}
      </section>

      <article class="card card--flush">
        <header class="card__head card__head--bordered">
          <div><h2 class="card__title">${tabTitle(tab)}</h2><p class="card__subtitle">${sorted.length.toLocaleString()} entries · showing ${Math.min(120, sorted.length)}</p></div>
        </header>
        <div style="overflow:auto; padding: 8px 0 12px">
          <table class="tbl">
            <thead>
              <tr>
                <th>Date</th>
                <th>Merchant</th>
                <th>Category</th>
                <th>Location</th>
                <th>Account</th>
                <th class="num">Native</th>
                <th class="num">${reportingCurrency}</th>
              </tr>
            </thead>
            <tbody>
              ${sorted.slice(0, 120).map((t) => {
                const meta = CATEGORY_META[t.category];
                const acc = accountById.get(t.accountId);
                const native = formatMoney(t.amount, t.currency, { abs: true });
                const reported = formatMoney(Math.abs(txAmount(t, reportingCurrency, data)), reportingCurrency, { abs: true });
                const incomeFlag = isIncome(t);
                return `
                  <tr>
                    <td class="dim">${formatDate(t.date, reportingCurrency)}</td>
                    <td>
                      <div class="tbl-cell">
                        <span class="tbl-cell__icon" style="--cell-color:${meta.color}; --cell-bg:${meta.color}22">${svgIcon(meta.icon)}</span>
                        <span class="tbl-cell__main">
                          <span class="tbl-cell__title">${escapeHtml(t.merchant)}</span>
                          <span class="tbl-cell__meta">${t.note ? escapeHtml(t.note) : ''}</span>
                        </span>
                      </div>
                    </td>
                    <td><span class="tag" style="--tag-color:${meta.color}"><span class="tag__dot"></span>${meta.label}</span></td>
                    <td class="dim">${t.location && t.location.cc !== '--' ? `${escapeHtml(t.location.city)} <span class="t-dim">· ${t.location.cc}</span>` : '<span class="t-dim">—</span>'}</td>
                    <td class="dim">${acc ? escapeHtml(acc.institution) : ''}</td>
                    <td class="num"><span class="${incomeFlag ? 't-pos' : 't-neg'}">${incomeFlag ? '+' : '−'}${native}</span> <span class="fx-tag">${t.currency}</span></td>
                    <td class="num dim">${reported}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </article>
    </div>
  `;
  bindTabbar(root, item.route);
}

function tabTitle(tab: string): string {
  if (tab === 'expenses') return 'Expense ledger';
  if (tab === 'incomes')  return 'Income ledger';
  return 'All transactions';
}

function kpi(accent: string, label: string, value: string, caption = ''): string {
  return `<div class="kpi kpi--${accent}"><div class="kpi__label">${label}</div><div class="kpi__value">${value}</div>${caption ? `<div class="kpi__caption">${caption}</div>` : ''}</div>`;
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}
