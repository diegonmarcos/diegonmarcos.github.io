// ============================================
// C2 — Capital markets leverage
// ============================================
import type { Dataset, NavItem, LeveragePosition } from '../modules/types';
import { store } from '../modules/state';
import { formatMoney, formatDate, fxConvert } from '../modules/format';
import { svgIcon } from '../modules/meta';
import { renderTabbar, bindTabbar } from '../modules/tabs';

const TYPE_LABEL: Record<string, string> = {
  margin_loan:              'Margin loan',
  securities_backed_credit: 'Securities-backed credit',
  derivative_notional:      'Derivative notional',
  fx_forward:               'FX forward',
};

export function renderLiabilitiesLeverage(root: HTMLElement, data: Dataset, item: NavItem, tab: string) {
  const { reportingCurrency } = store.get();
  const lev: LeveragePosition[] = data.leverage || [];

  const totalNotional = lev.reduce((s, p) => s + fxConvert(p.notional, p.currency, reportingCurrency, data.fx), 0);
  const totalCollateral = lev.reduce((s, p) => s + fxConvert(p.collateralValue, p.collateralCurrency, reportingCurrency, data.fx), 0);
  const blendedLtv = totalCollateral > 0 ? (totalNotional / totalCollateral) * 100 : 0;
  const monthlyCarry = lev.reduce((s, p) => s + fxConvert(p.monthlyCost, p.currency, reportingCurrency, data.fx), 0);
  const ratesPositions = lev.filter((p) => p.rate !== null);
  const blendedRate = ratesPositions.length > 0
    ? ratesPositions.reduce((s, p) => s + (p.rate || 0) * fxConvert(p.notional, p.currency, reportingCurrency, data.fx), 0) /
      ratesPositions.reduce((s, p) => s + fxConvert(p.notional, p.currency, reportingCurrency, data.fx), 0)
    : 0;

  root.innerHTML = `
    <div class="view fade-in">
      <header class="view__head">
        <div class="view__title">
          <div class="crumbs"><span>C · Liabilities</span><span class="crumbs__sep">›</span><span class="fx-tag">C2</span><span class="crumbs__current">${item.label}</span></div>
          <h1 class="t-display">${item.label}</h1>
        </div>
        <div class="view__actions">
          <button class="btn btn--secondary">${svgIcon('download')} Export risk report</button>
        </div>
      </header>

      ${renderTabbar(item, tab)}

      <section class="grid-4">
        ${kpi('Aggregate notional', formatMoney(totalNotional, reportingCurrency, { decimals: 0, compact: true }), `${lev.length} positions`)}
        ${kpi('Collateral value', formatMoney(totalCollateral, reportingCurrency, { decimals: 0, compact: true }))}
        ${kpi('Blended LTV', blendedLtv.toFixed(1) + '%', 'Aggregate exposure')}
        ${kpi('Monthly carry', formatMoney(monthlyCarry, reportingCurrency, { decimals: 0 }), `Blended rate ${blendedRate.toFixed(2)}%`)}
      </section>

      <section id="tab-content"></section>
    </div>
  `;

  const tabRoot = root.querySelector('#tab-content') as HTMLElement;

  if (tab === 'positions') {
    tabRoot.innerHTML = `
      <article class="card card--flush">
        <header class="card__head card__head--bordered"><div><h2 class="card__title">Open positions</h2><p class="card__subtitle">Margin · SBL · derivatives · FX hedges</p></div></header>
        <div style="overflow:auto">
          <table class="tbl">
            <thead><tr><th>Type</th><th>Counterparty</th><th class="num">Notional</th><th class="num">Rate</th><th class="num">Collateral</th><th class="num">LTV</th><th>Maturity</th><th>Opened</th></tr></thead>
            <tbody>
              ${lev.map((p) => `
                <tr>
                  <td><span class="badge badge--gold">${TYPE_LABEL[p.type] || p.type}</span></td>
                  <td>${escapeHtml(p.counterparty)}</td>
                  <td class="num">${formatMoney(p.notional, p.currency, { decimals: 0 })} <span class="fx-tag">${p.currency}</span></td>
                  <td class="num">${p.rate !== null ? p.rate.toFixed(2) + '%' : '<span class="t-dim">—</span>'}</td>
                  <td class="num dim">${formatMoney(p.collateralValue, p.collateralCurrency, { decimals: 0 })}</td>
                  <td class="num">${p.currentLtv > 0 ? p.currentLtv.toFixed(1) + '%' : '<span class="t-dim">—</span>'}</td>
                  <td class="dim">${p.maturity ? formatDate(p.maturity, reportingCurrency) : 'open-ended'}</td>
                  <td class="dim">${formatDate(p.openedAt, reportingCurrency)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </article>
    `;
  } else if (tab === 'ltv') {
    tabRoot.innerHTML = `
      <article class="card card--flush">
        <header class="card__head card__head--bordered"><div><h2 class="card__title">Loan-to-value monitor</h2><p class="card__subtitle">Margin call thresholds & headroom</p></div></header>
        <div style="overflow:auto">
          <table class="tbl">
            <thead><tr><th>Type</th><th>Counterparty</th><th class="num">Notional</th><th class="num">Collateral</th><th class="num">Current LTV</th><th class="num">Margin call</th><th class="num">Headroom</th><th>Status</th></tr></thead>
            <tbody>
              ${lev.filter((p) => p.marginCallThreshold > 0).map((p) => {
                const headroom = p.marginCallThreshold - p.currentLtv;
                const status = headroom > 20 ? 'safe' : headroom > 10 ? 'monitor' : 'risk';
                return `<tr>
                  <td><span class="badge badge--gold">${TYPE_LABEL[p.type] || p.type}</span></td>
                  <td>${escapeHtml(p.counterparty)}</td>
                  <td class="num">${formatMoney(p.notional, p.currency, { decimals: 0 })}</td>
                  <td class="num">${formatMoney(p.collateralValue, p.collateralCurrency, { decimals: 0 })}</td>
                  <td class="num"><strong>${p.currentLtv.toFixed(1)}%</strong></td>
                  <td class="num dim">${p.marginCallThreshold.toFixed(1)}%</td>
                  <td class="num"><span class="${status === 'safe' ? 't-pos' : status === 'monitor' ? 't-warn' : 't-neg'}">${headroom.toFixed(1)} pts</span></td>
                  <td>${
                    status === 'safe'    ? '<span class="badge badge--positive"><span class="badge__dot"></span>Safe</span>' :
                    status === 'monitor' ? '<span class="badge badge--warning"><span class="badge__dot"></span>Monitor</span>' :
                                           '<span class="badge badge--negative"><span class="badge__dot"></span>At risk</span>'
                  }</td>
                </tr>`;
              }).join('')}
            </tbody>
          </table>
        </div>
      </article>
    `;
  } else if (tab === 'cost') {
    tabRoot.innerHTML = `
      <article class="card card--flush">
        <header class="card__head card__head--bordered"><div><h2 class="card__title">Carry cost</h2><p class="card__subtitle">Monthly interest expense by position</p></div></header>
        <div style="overflow:auto">
          <table class="tbl">
            <thead><tr><th>Type</th><th>Counterparty</th><th class="num">Notional</th><th class="num">Rate</th><th class="num">Monthly cost (${reportingCurrency})</th><th class="num">Annualised</th></tr></thead>
            <tbody>
              ${lev.map((p) => {
                const monthly = fxConvert(p.monthlyCost, p.currency, reportingCurrency, data.fx);
                return `<tr>
                  <td><span class="badge badge--gold">${TYPE_LABEL[p.type] || p.type}</span></td>
                  <td>${escapeHtml(p.counterparty)}</td>
                  <td class="num">${formatMoney(p.notional, p.currency, { decimals: 0 })}</td>
                  <td class="num">${p.rate !== null ? p.rate.toFixed(2) + '%' : '<span class="t-dim">—</span>'}</td>
                  <td class="num">${formatMoney(monthly, reportingCurrency, { decimals: 0 })}</td>
                  <td class="num dim">${formatMoney(monthly * 12, reportingCurrency, { decimals: 0 })}</td>
                </tr>`;
              }).join('')}
              <tr style="background: rgba(184,153,104,0.04)">
                <td colspan="4" class="dim" style="text-align:right; padding-right:16px"><strong>Aggregate carry</strong></td>
                <td class="num"><strong>${formatMoney(monthlyCarry, reportingCurrency, { decimals: 0 })}</strong></td>
                <td class="num"><strong>${formatMoney(monthlyCarry * 12, reportingCurrency, { decimals: 0 })}</strong></td>
              </tr>
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
