// ============================================
// C1 — Real estate & mortgages
// ============================================
import type { Dataset, NavItem } from '../modules/types';
import { store } from '../modules/state';
import { formatMoney, formatDate, fxConvert } from '../modules/format';
import { svgIcon } from '../modules/meta';
import { renderTabbar, bindTabbar } from '../modules/tabs';

export function renderLiabilitiesRealEstate(root: HTMLElement, data: Dataset, item: NavItem, tab: string) {
  const { reportingCurrency } = store.get();
  const re = data.realEstate || [];

  const totalMarketValue = re.reduce((s, p) => s + fxConvert(p.marketValue * p.ownershipPct / 100, p.currency, reportingCurrency, data.fx), 0);
  const totalDebt        = re.reduce((s, p) => s + (p.mortgage ? fxConvert(p.mortgage.outstandingBalance * p.ownershipPct / 100, p.mortgage.currency, reportingCurrency, data.fx) : 0), 0);
  const totalEquity      = totalMarketValue - totalDebt;
  const aggregateLtv     = totalMarketValue > 0 ? (totalDebt / totalMarketValue) * 100 : 0;
  const totalRent        = re.reduce((s, p) => s + (p.monthlyRent ? fxConvert(p.monthlyRent, p.currency, reportingCurrency, data.fx) : 0), 0);
  const totalDebtService = re.reduce((s, p) => s + (p.mortgage ? fxConvert(p.mortgage.monthlyPayment, p.mortgage.currency, reportingCurrency, data.fx) : 0), 0);

  root.innerHTML = `
    <div class="view fade-in">
      <header class="view__head">
        <div class="view__title">
          <div class="crumbs"><span>C · Liabilities</span><span class="crumbs__sep">›</span><span class="fx-tag">C1</span><span class="crumbs__current">${item.label}</span></div>
          <h1 class="t-display">${item.label}</h1>
        </div>
        <div class="view__actions">
          <button class="btn btn--secondary">${svgIcon('download')} Export valuation</button>
          <button class="btn btn--primary">${svgIcon('plus')} New property</button>
        </div>
      </header>

      ${renderTabbar(item, tab)}

      <section class="grid-4">
        ${kpi('Aggregate market value', formatMoney(totalMarketValue, reportingCurrency, { decimals: 0, compact: true }), `${re.length} properties`)}
        ${kpi('Outstanding mortgage debt', formatMoney(totalDebt, reportingCurrency, { decimals: 0, compact: true }))}
        ${kpi('Net equity', formatMoney(totalEquity, reportingCurrency, { decimals: 0, compact: true }), `LTV ${aggregateLtv.toFixed(1)}%`)}
        ${kpi('Monthly rent / debt service', `${formatMoney(totalRent, reportingCurrency, { decimals: 0 })} / ${formatMoney(totalDebtService, reportingCurrency, { decimals: 0 })}`, `Net ${formatMoney(totalRent - totalDebtService, reportingCurrency, { decimals: 0, signed: true })}`)}
      </section>

      <section id="tab-content"></section>
    </div>
  `;

  const tabRoot = root.querySelector('#tab-content') as HTMLElement;

  if (tab === 'portfolio') {
    tabRoot.innerHTML = `
      <article class="card card--flush">
        <header class="card__head card__head--bordered"><div><h2 class="card__title">Property portfolio</h2><p class="card__subtitle">${re.length} positions across ${new Set(re.map((p) => p.country)).size} countries</p></div></header>
        <div style="overflow:auto">
          <table class="tbl">
            <thead><tr><th>Property</th><th>Location</th><th class="num">Market value</th><th class="num">Outstanding</th><th class="num">Equity</th><th class="num">LTV</th><th class="num">Yield</th></tr></thead>
            <tbody>
              ${re.map((p) => {
                const value = p.marketValue * p.ownershipPct / 100;
                const debt = p.mortgage ? p.mortgage.outstandingBalance * p.ownershipPct / 100 : 0;
                const equity = value - debt;
                const ltv = value > 0 ? (debt / value) * 100 : 0;
                const yieldPct = p.monthlyRent ? ((p.monthlyRent * 12) / value) * 100 : 0;
                return `<tr>
                  <td><div class="tbl-cell"><span class="tbl-cell__icon" style="--cell-color:#B89968">${svgIcon('building')}</span><span class="tbl-cell__main"><span class="tbl-cell__title">${escapeHtml(p.name)}</span><span class="tbl-cell__meta">${escapeHtml(p.address)} · ${p.ownershipPct}% ownership</span></span></div></td>
                  <td><span class="fx-tag">${p.cc}</span> ${escapeHtml(p.city)}</td>
                  <td class="num">${formatMoney(value, p.currency, { decimals: 0 })}</td>
                  <td class="num dim">${debt > 0 ? formatMoney(debt, p.mortgage!.currency, { decimals: 0 }) : '<span class="t-dim">—</span>'}</td>
                  <td class="num"><span class="t-pos">${formatMoney(equity, p.currency, { decimals: 0 })}</span></td>
                  <td class="num">${ltv > 0 ? ltv.toFixed(1) + '%' : '<span class="t-dim">—</span>'}</td>
                  <td class="num">${yieldPct > 0 ? yieldPct.toFixed(2) + '%' : '<span class="t-dim">—</span>'}</td>
                </tr>`;
              }).join('')}
              <tr style="background: rgba(184,153,104,0.04)">
                <td colspan="2" class="dim" style="text-align:right; padding-right:16px"><strong>Aggregate (${reportingCurrency})</strong></td>
                <td class="num"><strong>${formatMoney(totalMarketValue, reportingCurrency, { decimals: 0 })}</strong></td>
                <td class="num"><strong>${formatMoney(totalDebt, reportingCurrency, { decimals: 0 })}</strong></td>
                <td class="num"><strong class="t-pos">${formatMoney(totalEquity, reportingCurrency, { decimals: 0 })}</strong></td>
                <td class="num"><strong>${aggregateLtv.toFixed(1)}%</strong></td>
                <td class="num dim">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    `;
  } else if (tab === 'mortgages') {
    tabRoot.innerHTML = `
      <article class="card card--flush">
        <header class="card__head card__head--bordered"><div><h2 class="card__title">Mortgage schedule</h2><p class="card__subtitle">Outstanding loans · debt service</p></div></header>
        <div style="overflow:auto">
          <table class="tbl">
            <thead><tr><th>Property</th><th>Lender</th><th>Type</th><th class="num">Rate</th><th class="num">Outstanding</th><th class="num">Monthly payment</th><th>Term</th></tr></thead>
            <tbody>
              ${re.filter((p) => p.mortgage).map((p) => {
                const m = p.mortgage!;
                return `<tr>
                  <td><strong>${escapeHtml(p.name)}</strong><div class="t-meta">${escapeHtml(p.city)}, ${p.cc}</div></td>
                  <td>${escapeHtml(m.lender)}</td>
                  <td><span class="badge ${m.rateType === 'fixed' ? 'badge--positive' : 'badge--warning'}">${m.rateType}</span></td>
                  <td class="num">${m.rate.toFixed(2)}%</td>
                  <td class="num">${formatMoney(m.outstandingBalance, m.currency, { decimals: 0 })} <span class="fx-tag">${m.currency}</span></td>
                  <td class="num">${formatMoney(m.monthlyPayment, m.currency, { decimals: 0 })}</td>
                  <td class="dim">${m.termYears}y · from ${formatDate(m.startDate, m.currency)}</td>
                </tr>`;
              }).join('')}
            </tbody>
          </table>
        </div>
      </article>
    `;
  } else if (tab === 'yield') {
    tabRoot.innerHTML = `
      <article class="card card--flush">
        <header class="card__head card__head--bordered"><div><h2 class="card__title">Rental yield</h2><p class="card__subtitle">Gross & net yield · cap rate proxy</p></div></header>
        <div style="overflow:auto">
          <table class="tbl">
            <thead><tr><th>Property</th><th class="num">Monthly rent</th><th class="num">HOA</th><th class="num">Mortgage P&amp;I</th><th class="num">Net cashflow</th><th class="num">Gross yield</th><th class="num">Net yield</th></tr></thead>
            <tbody>
              ${re.filter((p) => p.monthlyRent).map((p) => {
                const value = p.marketValue * p.ownershipPct / 100;
                const rent = p.monthlyRent!;
                const hoa  = p.monthlyHoa  || 0;
                const debt = p.mortgage ? p.mortgage.monthlyPayment : 0;
                const net  = rent - hoa - debt;
                const grossYield = (rent * 12) / value * 100;
                const netYield   = (net  * 12) / value * 100;
                return `<tr>
                  <td><strong>${escapeHtml(p.name)}</strong></td>
                  <td class="num">${formatMoney(rent, p.currency, { decimals: 0 })}</td>
                  <td class="num dim">${formatMoney(hoa, p.currency, { decimals: 0 })}</td>
                  <td class="num dim">${formatMoney(debt, p.currency, { decimals: 0 })}</td>
                  <td class="num"><span class="${net >= 0 ? 't-pos' : 't-neg'}">${formatMoney(net, p.currency, { decimals: 0, signed: true })}</span></td>
                  <td class="num">${grossYield.toFixed(2)}%</td>
                  <td class="num"><span class="${netYield >= 0 ? 't-pos' : 't-neg'}">${netYield.toFixed(2)}%</span></td>
                </tr>`;
              }).join('')}
            </tbody>
          </table>
        </div>
      </article>
    `;
  }

  bindTabbar(root, item.route);
}

function kpi(label: string, value: string, caption = ''): string {
  return `<div class="kpi"><div class="kpi__label">${label}</div><div class="kpi__value">${value}</div>${caption ? `<div class="kpi__caption">${caption}</div>` : ''}</div>`;
}
function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}
