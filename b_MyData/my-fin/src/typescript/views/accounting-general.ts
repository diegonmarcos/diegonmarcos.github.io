// ============================================
// D0 — Accounting general report (Income statement / Balance sheet / Cash flow)
// ============================================
import type { Dataset, NavItem } from '../modules/types';
import { store } from '../modules/state';
import { formatMoney } from '../modules/format';
import { txInPeriod, bucketByMonth, bucketByCategory, txAmount, isIncome, portfolioValue } from '../modules/aggregate';
import { CATEGORY_META, svgIcon } from '../modules/meta';
import { renderTabbar, bindTabbar } from '../modules/tabs';

export function renderAccountingGeneral(root: HTMLElement, data: Dataset, item: NavItem, tab: string) {
  const { reportingCurrency, period } = store.get();
  const txs = txInPeriod(data, period.months);
  const months = bucketByMonth(txs, reportingCurrency, data);
  const categories = bucketByCategory(txs, reportingCurrency, data);

  const totalIncome  = months.reduce((s, m) => s + m.income, 0);
  const totalExpense = months.reduce((s, m) => s + m.expense, 0);
  const netIncome = totalIncome - totalExpense;

  const salary = txs.filter((t) => t.category === 'income').reduce((s, t) => s + txAmount(t, reportingCurrency, data), 0);
  const investmentIncome = txs.filter((t) => t.category === 'investment_income').reduce((s, t) => s + txAmount(t, reportingCurrency, data), 0);
  const portfolioVal = portfolioValue(data.holdings, reportingCurrency, data);

  root.innerHTML = `
    <div class="view fade-in">
      <header class="view__head">
        <div class="view__title">
          <span class="t-eyebrow">D · Accounting</span>
          <h1 class="t-display">${item.label}</h1>
        </div>
        <div class="view__actions">
          <button class="btn btn--secondary">${svgIcon('download')} Export PDF</button>
        </div>
      </header>
      ${renderTabbar(item, tab)}
      <section id="tab-content"></section>
    </div>
  `;

  const tabRoot = root.querySelector('#tab-content') as HTMLElement;

  if (tab === 'income-stmt') {
    tabRoot.innerHTML = `
      <article class="card">
        <header class="card__head"><div><h2 class="card__title">Income Statement</h2><p class="card__subtitle">Last ${period.months} months · ${reportingCurrency}</p></div></header>
        <table class="tbl">
          <tbody>
            ${row('Revenues', '', '', true)}
            ${row('Salary income', formatMoney(salary, reportingCurrency, { decimals: 0 }))}
            ${row('Investment income', formatMoney(investmentIncome, reportingCurrency, { decimals: 0 }))}
            ${row('Total revenue', formatMoney(totalIncome, reportingCurrency, { decimals: 0 }), '', false, true)}
            ${row('', '')}
            ${row('Expenses by category', '', '', true)}
            ${categories.map((c) => row(`  ${CATEGORY_META[c.category].label}`, formatMoney(c.amount, reportingCurrency, { decimals: 0 }))).join('')}
            ${row('Total expenses', formatMoney(totalExpense, reportingCurrency, { decimals: 0 }), '', false, true)}
            ${row('', '')}
            ${row('NET INCOME', formatMoney(netIncome, reportingCurrency, { decimals: 0, signed: true }), netIncome >= 0 ? 't-pos' : 't-neg', false, true)}
          </tbody>
        </table>
      </article>
    `;
  } else if (tab === 'balance') {
    const cashUsd = data.holdings.find((h) => h.ticker === 'CASH-USD')?.avgCost || 0;
    const cashEur = data.holdings.find((h) => h.ticker === 'CASH-EUR')?.avgCost || 0;
    const cashGbp = data.holdings.find((h) => h.ticker === 'CASH-GBP')?.avgCost || 0;
    const cashBrl = data.holdings.find((h) => h.ticker === 'CASH-BRL')?.avgCost || 0;
    const investments = portfolioVal - (data.holdings.filter((h) => h.assetClass === 'cash').reduce((s, h) => s + (h.avgCost * data.fx[h.currency] / data.fx[reportingCurrency]), 0));

    tabRoot.innerHTML = `
      <article class="card">
        <header class="card__head"><div><h2 class="card__title">Balance Sheet</h2><p class="card__subtitle">As of ${data.meta.period.to} · ${reportingCurrency}</p></div></header>
        <table class="tbl">
          <tbody>
            ${row('ASSETS', '', '', true)}
            ${row('  Cash · USD', formatMoney(cashUsd * data.fx.USD / data.fx[reportingCurrency], reportingCurrency, { decimals: 0 }))}
            ${row('  Cash · EUR', formatMoney(cashEur * data.fx.EUR / data.fx[reportingCurrency], reportingCurrency, { decimals: 0 }))}
            ${row('  Cash · GBP', formatMoney(cashGbp * data.fx.GBP / data.fx[reportingCurrency], reportingCurrency, { decimals: 0 }))}
            ${row('  Cash · BRL', formatMoney(cashBrl * data.fx.BRL / data.fx[reportingCurrency], reportingCurrency, { decimals: 0 }))}
            ${row('  Investments (ETFs)', formatMoney(investments, reportingCurrency, { decimals: 0 }))}
            ${row('Total assets', formatMoney(portfolioVal, reportingCurrency, { decimals: 0 }), '', false, true)}
            ${row('', '')}
            ${row('LIABILITIES', '', '', true)}
            ${row('  Credit-card pending', formatMoney(0, reportingCurrency, { decimals: 0 }))}
            ${row('  Loans', formatMoney(0, reportingCurrency, { decimals: 0 }))}
            ${row('Total liabilities', formatMoney(0, reportingCurrency, { decimals: 0 }), '', false, true)}
            ${row('', '')}
            ${row('NET WORTH', formatMoney(portfolioVal, reportingCurrency, { decimals: 0 }), 't-pos', false, true)}
          </tbody>
        </table>
      </article>
    `;
  } else if (tab === 'cashflow') {
    tabRoot.innerHTML = `
      <article class="card">
        <header class="card__head"><div><h2 class="card__title">Cash Flow Statement</h2><p class="card__subtitle">By month · ${reportingCurrency}</p></div></header>
        <table class="tbl">
          <thead><tr><th>Month</th><th class="num">Inflows</th><th class="num">Outflows</th><th class="num">Net</th></tr></thead>
          <tbody>
            ${months.map((m) => `<tr>
              <td>${m.yearMonth}</td>
              <td class="num t-pos">${formatMoney(m.income, reportingCurrency, { decimals: 0 })}</td>
              <td class="num t-neg">${formatMoney(m.expense, reportingCurrency, { decimals: 0 })}</td>
              <td class="num"><strong class="${m.net >= 0 ? 't-pos' : 't-neg'}">${formatMoney(m.net, reportingCurrency, { decimals: 0, signed: true })}</strong></td>
            </tr>`).join('')}
            <tr style="background: rgba(91,140,255,0.04)">
              <td><strong>Total · ${period.months}M</strong></td>
              <td class="num"><strong>${formatMoney(totalIncome, reportingCurrency, { decimals: 0 })}</strong></td>
              <td class="num"><strong>${formatMoney(totalExpense, reportingCurrency, { decimals: 0 })}</strong></td>
              <td class="num"><strong class="${netIncome >= 0 ? 't-pos' : 't-neg'}">${formatMoney(netIncome, reportingCurrency, { decimals: 0, signed: true })}</strong></td>
            </tr>
          </tbody>
        </table>
      </article>
    `;
  }

  bindTabbar(root, item.route);
}

function row(label: string, value: string, cssClass = '', isHeader = false, isTotal = false): string {
  if (isHeader) return `<tr style="background: rgba(255,255,255,0.02)"><td colspan="2"><strong style="text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.10em; color: var(--c-text-tertiary, #5E6884)">${label}</strong></td></tr>`;
  if (isTotal)  return `<tr style="border-top: 1px solid rgba(255,255,255,0.10)"><td><strong>${label}</strong></td><td class="num"><strong class="${cssClass}">${value}</strong></td></tr>`;
  return `<tr><td>${label}</td><td class="num ${cssClass}">${value}</td></tr>`;
}
