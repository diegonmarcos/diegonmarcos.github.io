// ============================================
// C0 — Credit cards
// ============================================
import type { Dataset, NavItem } from '../modules/types';
import { store } from '../modules/state';
import { formatMoney, formatDate } from '../modules/format';
import { txInPeriod, txAmount, isIncome } from '../modules/aggregate';
import { CATEGORY_META, svgIcon } from '../modules/meta';
import { renderTabbar, bindTabbar } from '../modules/tabs';

export function renderLiabilitiesCreditCards(root: HTMLElement, data: Dataset, item: NavItem, tab: string) {
  const { reportingCurrency, period } = store.get();
  const ccAccounts = data.accounts.filter((a) => a.type === 'credit_card');

  const cutoff = new Date(); cutoff.setDate(cutoff.getDate() - 30);
  const cutoffIso = cutoff.toISOString().slice(0, 10);
  const ccTxs30 = data.transactions.filter((t) =>
    ccAccounts.some((a) => a.id === t.accountId) && t.date >= cutoffIso && !isIncome(t),
  );

  const periodTxs = txInPeriod(data, period.months).filter((t) =>
    ccAccounts.some((a) => a.id === t.accountId) && !isIncome(t),
  );

  const ccByAccount = new Map<string, { count: number; outstanding: number; ytd: number }>();
  for (const a of ccAccounts) ccByAccount.set(a.id, { count: 0, outstanding: 0, ytd: 0 });
  for (const t of ccTxs30) {
    const b = ccByAccount.get(t.accountId)!;
    b.outstanding += Math.abs(txAmount(t, reportingCurrency, data));
    b.count += 1;
  }
  for (const t of periodTxs) {
    const b = ccByAccount.get(t.accountId)!;
    b.ytd += Math.abs(txAmount(t, reportingCurrency, data));
  }

  const totalOutstanding = [...ccByAccount.values()].reduce((s, x) => s + x.outstanding, 0);
  const totalYtd = [...ccByAccount.values()].reduce((s, x) => s + x.ytd, 0);

  // Recurring (≥6 months in window) — credit-card only
  const monthsByMerchant = new Map<string, Set<string>>();
  const spendByMerchant = new Map<string, number>();
  for (const t of periodTxs) {
    const ym = t.date.slice(0, 7);
    if (!monthsByMerchant.has(t.merchant)) monthsByMerchant.set(t.merchant, new Set());
    monthsByMerchant.get(t.merchant)!.add(ym);
    spendByMerchant.set(t.merchant, (spendByMerchant.get(t.merchant) || 0) + Math.abs(txAmount(t, reportingCurrency, data)));
  }
  const recurring = [...monthsByMerchant.entries()]
    .filter(([_, ms]) => ms.size >= 6)
    .map(([merchant, ms]) => ({ merchant, months: ms.size, total: spendByMerchant.get(merchant)! }))
    .sort((a, b) => b.total - a.total);

  root.innerHTML = `
    <div class="view fade-in">
      <header class="view__head">
        <div class="view__title">
          <div class="crumbs"><span>C · Liabilities</span><span class="crumbs__sep">›</span><span class="fx-tag">C0</span><span class="crumbs__current">${item.label}</span></div>
          <h1 class="t-display">${item.label}</h1>
        </div>
      </header>

      ${renderTabbar(item, tab)}

      <section class="grid-3">
        ${kpi('Outstanding · 30d', formatMoney(totalOutstanding, reportingCurrency, { decimals: 0 }), `${ccTxs30.length} charges`, 'warning')}
        ${kpi('Spend · ' + period.label, formatMoney(totalYtd, reportingCurrency, { decimals: 0 }), `${periodTxs.length} entries`)}
        ${kpi('Recurring annual', formatMoney(recurring.reduce((s, r) => s + r.total, 0), reportingCurrency, { decimals: 0 }), `${recurring.length} subscriptions`)}
      </section>

      <section id="tab-content"></section>
    </div>
  `;

  const tabRoot = root.querySelector('#tab-content') as HTMLElement;

  if (tab === 'outstanding') {
    tabRoot.innerHTML = `
      <article class="card card--flush">
        <header class="card__head card__head--bordered"><div><h2 class="card__title">Outstanding balances</h2><p class="card__subtitle">Last 30 days · pre-statement</p></div></header>
        <div style="overflow:auto">
          <table class="tbl">
            <thead><tr><th>Card</th><th>Currency</th><th class="num">Charges</th><th class="num">Outstanding (${reportingCurrency})</th><th class="num">Spend · ${period.label}</th></tr></thead>
            <tbody>
              ${ccAccounts.map((a) => {
                const b = ccByAccount.get(a.id)!;
                return `<tr>
                  <td><div class="tbl-cell"><span class="tbl-cell__icon" style="--cell-color:#B89968">${svgIcon('credit-card')}</span><span class="tbl-cell__main"><span class="tbl-cell__title">${a.institution}</span><span class="tbl-cell__meta">${a.name}</span></span></div></td>
                  <td><span class="fx-tag">${a.currency}</span></td>
                  <td class="num">${b.count}</td>
                  <td class="num">${formatMoney(b.outstanding, reportingCurrency, { decimals: 0 })}</td>
                  <td class="num dim">${formatMoney(b.ytd, reportingCurrency, { decimals: 0 })}</td>
                </tr>`;
              }).join('')}
            </tbody>
          </table>
        </div>
      </article>
    `;
  } else if (tab === 'by-card') {
    tabRoot.innerHTML = ccAccounts.map((a) => {
      const cardTxs = ccTxs30.filter((t) => t.accountId === a.id).slice(0, 30);
      return `
        <article class="card card--flush" style="margin-bottom: 16px">
          <header class="card__head card__head--bordered">
            <div><h2 class="card__title">${a.institution}</h2><p class="card__subtitle">${a.name} · <span class="fx-tag" style="margin-left:4px">${a.currency}</span></p></div>
            <span class="badge badge--gold"><span class="badge__dot"></span>${cardTxs.length} charges</span>
          </header>
          <div style="overflow:auto">
            <table class="tbl">
              <thead><tr><th>Date</th><th>Merchant</th><th>Category</th><th class="num">Amount</th></tr></thead>
              <tbody>
                ${cardTxs.map((t) => {
                  const meta = CATEGORY_META[t.category];
                  return `<tr>
                    <td class="dim">${formatDate(t.date, reportingCurrency)}</td>
                    <td>${escapeHtml(t.merchant)}</td>
                    <td><span class="tag" style="--tag-color:${meta.color}"><span class="tag__dot"></span>${meta.label}</span></td>
                    <td class="num"><span class="t-neg">−${formatMoney(t.amount, t.currency, { abs: true })}</span></td>
                  </tr>`;
                }).join('')}
              </tbody>
            </table>
          </div>
        </article>`;
    }).join('');
  } else if (tab === 'recurring') {
    tabRoot.innerHTML = `
      <article class="card card--flush">
        <header class="card__head card__head--bordered"><div><h2 class="card__title">Recurring charges</h2><p class="card__subtitle">Detected in ≥ 6 of last ${period.months} months</p></div></header>
        <div style="overflow:auto">
          <table class="tbl">
            <thead><tr><th>Merchant</th><th class="num">Months active</th><th class="num">Avg / month</th><th class="num">Annual total</th></tr></thead>
            <tbody>
              ${recurring.map((r) => `<tr>
                <td><strong>${escapeHtml(r.merchant)}</strong></td>
                <td class="num">${r.months}/${period.months}</td>
                <td class="num">${formatMoney(r.total / r.months, reportingCurrency, { decimals: 0 })}</td>
                <td class="num">${formatMoney(r.total, reportingCurrency, { decimals: 0 })}</td>
              </tr>`).join('')}
            </tbody>
          </table>
        </div>
      </article>
    `;
  }

  bindTabbar(root, item.route);
}

function kpi(label: string, value: string, caption = '', _tone?: 'warning'): string {
  return `<div class="kpi"><div class="kpi__label">${label}</div><div class="kpi__value">${value}</div>${caption ? `<div class="kpi__caption">${caption}</div>` : ''}</div>`;
}
function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}
