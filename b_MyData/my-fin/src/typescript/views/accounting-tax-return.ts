// ============================================
// D1 — Personal tax return (BR resident)
// ============================================
import type { Dataset, NavItem } from '../modules/types';
import { store } from '../modules/state';
import { formatMoney, formatDate, fxConvert } from '../modules/format';
import { svgIcon } from '../modules/meta';
import { renderTabbar, bindTabbar } from '../modules/tabs';
import { setParam } from '../modules/router';

export function renderAccountingTaxReturn(root: HTMLElement, data: Dataset, item: NavItem, tab: string) {
  const { route } = store.get();
  const fx = data.fx;

  // ─── Year selection — data-driven ────────────
  // Available years derived from the transaction set, plus an "in-progress"
  // marker for the most recent calendar year if it has any transactions.
  const txYears = new Set<number>();
  for (const t of data.transactions) txYears.add(parseInt(t.date.slice(0, 4), 10));
  const years = [...txYears].sort((a, b) => b - a);

  // Current calendar year per data window
  const today = new Date(data.meta.period.to);
  const currentYear = today.getFullYear();

  // Default: most recent fully-completed year (last full year worth of data)
  const defaultYear = years.find((y) => y < currentYear) ?? years[0] ?? currentYear;
  const selectedYear = parseInt(route.params.year || String(defaultYear), 10);

  const yearStart = `${selectedYear}-01-01`;
  const yearEnd = `${selectedYear}-12-31`;
  const yearTx = data.transactions.filter((t) => t.date >= yearStart && t.date <= yearEnd);

  const isInProgress = selectedYear === currentYear;
  const isHistorical = selectedYear < currentYear;
  const noData = yearTx.length === 0;

  // ─── Asset schedule (BRL) ────────────────────
  const schedule = data.holdings.map((h) => {
    const native = h.assetClass === 'cash' ? h.avgCost : h.quantity * h.currentPrice;
    const valBrl = fxConvert(native, h.currency, 'BRL', fx);
    return { holding: h, native, valBrl };
  }).sort((a, b) => b.valBrl - a.valBrl);
  const totalAssetsBrl = schedule.reduce((s, b) => s + b.valBrl, 0);

  // ─── Income classifications for selected year ─
  const taxableIncome  = yearTx.filter((t) => t.category === 'income' && t.amount > 0).reduce((s, t) => s + fxConvert(t.amount, t.currency, 'BRL', fx), 0);
  const exemptIncome   = yearTx.filter((t) => t.category === 'investment_income' && t.merchant.startsWith('Distribution · IVVB')).reduce((s, t) => s + fxConvert(t.amount, t.currency, 'BRL', fx), 0);
  const foreignIncome  = yearTx.filter((t) => t.category === 'investment_income' && !t.merchant.startsWith('Distribution · IVVB')).reduce((s, t) => s + fxConvert(t.amount, t.currency, 'BRL', fx), 0);

  const socialSecurity = Math.min(taxableIncome * 0.14, 9000);
  const taxableBase    = taxableIncome - socialSecurity;
  const taxDue         = Math.max(0, computeProgressive(taxableBase));
  const taxWithheld    = taxDue * 0.95;
  const refund         = taxWithheld - taxDue;

  // DARFs (all-time — filtering by year for vouchers tab)
  const yearDarfs = data.darfs.filter((d) => d.yearMonth.startsWith(String(selectedYear)));
  const totalVouchers = yearDarfs.reduce((s, d) => s + d.taxOwed, 0);
  const vouchersPaid  = yearDarfs.filter((d) => d.paid).reduce((s, d) => s + d.taxOwed, 0);

  root.innerHTML = `
    <div class="view fade-in">
      <header class="view__head">
        <div class="view__title">
          <div class="crumbs"><span>D · Accounting</span><span class="crumbs__sep">›</span><span class="fx-tag">D1</span><span class="crumbs__current">${item.label}</span></div>
          <h1 class="t-display">${item.label} · FY ${selectedYear}${isInProgress ? ' <span class="badge badge--warning" style="vertical-align:middle; font-size:0.5em">In progress</span>' : ''}</h1>
        </div>
        <div class="view__actions">
          <div class="seg-control" id="year-switcher">
            ${years.map((y) => {
              const status = y === currentYear ? 'in-progress' : (y < currentYear ? 'historical' : 'future');
              return `<span class="seg-control__btn ${y === selectedYear ? 'is-active' : ''}" data-year="${y}" title="${status}">${y}${y === currentYear ? ' ·' : ''}</span>`;
            }).join('')}
          </div>
          <button class="btn btn--secondary">${svgIcon('download')} Export filing package</button>
          <button class="btn btn--gold">${svgIcon('file-text')} Generate report</button>
        </div>
      </header>

      ${renderTabbar(item, tab)}

      <section id="tab-content"></section>
    </div>
  `;

  // Wire year switcher
  root.querySelector('#year-switcher')!.addEventListener('click', (e) => {
    const t = (e.target as HTMLElement).closest('[data-year]') as HTMLElement | null;
    if (!t) return;
    setParam('year', t.dataset.year!);
  });

  const tabRoot = root.querySelector('#tab-content') as HTMLElement;

  if (noData) {
    tabRoot.innerHTML = `
      <article class="card">
        <div class="empty-state">
          ${svgIcon('file-text')}
          <h3 class="t-h2">No data for FY ${selectedYear}</h3>
          <p class="t-meta">No transactions are recorded for the selected fiscal year. Pick another year above.</p>
        </div>
      </article>
    `;
    bindTabbar(root, item.route);
    return;
  }

  if (tab === 'summary') {
    tabRoot.innerHTML = `
      <section class="report-banner">
        <div class="report-banner__seal">${svgIcon('award')}</div>
        <div class="report-banner__body">
          <h3>Annual personal income tax return — FY ${selectedYear}${isInProgress ? ' (in progress)' : ''}</h3>
          <p>${isInProgress
              ? `Year-to-date estimate as of ${data.meta.period.to}. ${yearTx.length.toLocaleString()} transactions recorded so far. Final figures will populate once the calendar year closes.`
              : isHistorical
                ? `Final filing summary based on ${yearTx.length.toLocaleString()} transactions and ${data.holdings.length} positions held at year-end. Foreign assets and income translated to BRL at PTAX (${fx.asOf}).`
                : `Forward-looking estimate based on ${yearTx.length.toLocaleString()} projected transactions.`}</p>
        </div>
        <div class="report-banner__actions">
          <span class="badge ${refund > 0 ? 'badge--positive' : 'badge--warning'}"><span class="badge__dot"></span>${refund > 0 ? 'Estimated refund' : 'Tax due'}</span>
          <span class="t-num-lg ${refund > 0 ? 't-pos' : 't-neg'}">${formatMoney(Math.abs(refund), 'BRL', { decimals: 0 })}</span>
        </div>
      </section>
      <section class="kv-grid">
        <div class="kv"><div class="kv__label">Total assets</div><div class="kv__value">${formatMoney(totalAssetsBrl, 'BRL', { decimals: 0, compact: true })}</div><div class="kv__note">${schedule.length} positions · BRL · 12-31-${selectedYear}</div></div>
        <div class="kv"><div class="kv__label">Taxable income</div><div class="kv__value">${formatMoney(taxableIncome, 'BRL', { decimals: 0 })}</div><div class="kv__note">Employment compensation</div></div>
        <div class="kv"><div class="kv__label">Tax-exempt income</div><div class="kv__value">${formatMoney(exemptIncome, 'BRL', { decimals: 0 })}</div><div class="kv__note">Domestic ETF distributions</div></div>
        <div class="kv"><div class="kv__label">Foreign-source income</div><div class="kv__value">${formatMoney(foreignIncome, 'BRL', { decimals: 0 })}</div><div class="kv__note">Subject to monthly reporting</div></div>
        <div class="kv"><div class="kv__label">Social security withheld</div><div class="kv__value">${formatMoney(socialSecurity, 'BRL', { decimals: 0 })}</div><div class="kv__note">Deducted from base</div></div>
        <div class="kv"><div class="kv__label">Estimated tax due</div><div class="kv__value">${formatMoney(taxDue, 'BRL', { decimals: 0 })}</div><div class="kv__note">Progressive bracket · ${selectedYear}</div></div>
      </section>
      ${isInProgress ? `<p class="disclaim"><strong>Notice:</strong> FY ${selectedYear} is still in progress; numbers update as new transactions arrive.</p>` : ''}
    `;
  } else if (tab === 'assets') {
    tabRoot.innerHTML = `
      <article class="card report-section">
        <header class="report-section__title"><span class="num">1</span><h3>Asset schedule · 12-31-${selectedYear}</h3><span class="meta">PTAX ${fx.asOf}</span></header>
        <div style="overflow:auto">
          <table class="tbl">
            <thead><tr><th>Code</th><th>Description</th><th>Country</th><th class="num">Native value</th><th class="num">BRL value · 12-31</th></tr></thead>
            <tbody>
              ${schedule.map((b) => `<tr>
                <td><span class="fx-tag">${irpfCode(b.holding.assetClass)}</span></td>
                <td><div class="tbl-cell"><span class="tbl-cell__main"><span class="tbl-cell__title">${b.holding.ticker} · ${b.holding.name}</span><span class="tbl-cell__meta">${b.holding.assetClass === 'cash' ? 'Cash position' : b.holding.quantity.toLocaleString() + ' units'}</span></span></div></td>
                <td><span class="fx-tag">${b.holding.country}</span></td>
                <td class="num dim">${formatMoney(b.native, b.holding.currency, { decimals: 0 })}</td>
                <td class="num">${formatMoney(b.valBrl, 'BRL', { decimals: 0 })}</td>
              </tr>`).join('')}
              ${(data.realEstate || []).map((p) => `<tr>
                <td><span class="fx-tag">11</span></td>
                <td><div class="tbl-cell"><span class="tbl-cell__icon" style="--cell-color:#B89968">${svgIcon('building')}</span><span class="tbl-cell__main"><span class="tbl-cell__title">${escapeHtml(p.name)}</span><span class="tbl-cell__meta">${escapeHtml(p.address)} · ${p.ownershipPct}%</span></span></div></td>
                <td><span class="fx-tag">${p.cc}</span></td>
                <td class="num dim">${formatMoney(p.acquisitionCost * p.ownershipPct / 100, p.currency, { decimals: 0 })}</td>
                <td class="num">${formatMoney(fxConvert(p.acquisitionCost * p.ownershipPct / 100, p.currency, 'BRL', fx), 'BRL', { decimals: 0 })}</td>
              </tr>`).join('')}
              <tr style="background: rgba(184,153,104,0.04)"><td colspan="4" class="dim" style="text-align:right; padding-right:16px"><strong>Total</strong></td><td class="num"><strong>${formatMoney(totalAssetsBrl, 'BRL', { decimals: 0 })}</strong></td></tr>
            </tbody>
          </table>
        </div>
      </article>
    `;
  } else if (tab === 'income') {
    const exemptTxs  = yearTx.filter((t) => t.category === 'investment_income' && t.merchant.startsWith('Distribution · IVVB'));
    const foreignTxs = yearTx.filter((t) => t.category === 'investment_income' && !t.merchant.startsWith('Distribution · IVVB'));
    tabRoot.innerHTML = `
      <article class="card report-section">
        <header class="report-section__title"><span class="num">2</span><h3>Tax-exempt and non-taxable income · ${selectedYear}</h3></header>
        <div style="overflow:auto">
          <table class="tbl">
            <thead><tr><th>Date</th><th>Source</th><th class="num">Native amount</th><th class="num">BRL amount</th></tr></thead>
            <tbody>${exemptTxs.length === 0 ? `<tr><td colspan="4" class="dim center" style="text-align:center; padding: 24px">No entries for ${selectedYear}</td></tr>` : exemptTxs.map((t) => `<tr><td class="dim">${formatDate(t.date, 'BRL')}</td><td>${escapeHtml(t.merchant)}</td><td class="num dim">${formatMoney(t.amount, t.currency)}</td><td class="num">${formatMoney(fxConvert(t.amount, t.currency, 'BRL', fx), 'BRL')}</td></tr>`).join('')}</tbody>
          </table>
        </div>
      </article>
      <article class="card report-section">
        <header class="report-section__title"><span class="num">3</span><h3>Foreign-source income · ${selectedYear}</h3></header>
        <div style="overflow:auto">
          <table class="tbl">
            <thead><tr><th>Date</th><th>Source</th><th class="num">Native amount</th><th class="num">BRL amount</th></tr></thead>
            <tbody>${foreignTxs.length === 0 ? `<tr><td colspan="4" class="dim" style="text-align:center; padding: 24px">No entries for ${selectedYear}</td></tr>` : foreignTxs.map((t) => `<tr><td class="dim">${formatDate(t.date, 'BRL')}</td><td>${escapeHtml(t.merchant)}</td><td class="num dim">${formatMoney(t.amount, t.currency)}</td><td class="num">${formatMoney(fxConvert(t.amount, t.currency, 'BRL', fx), 'BRL')}</td></tr>`).join('')}</tbody>
          </table>
        </div>
      </article>
    `;
  } else if (tab === 'vouchers') {
    tabRoot.innerHTML = `
      <article class="card report-section">
        <header class="report-section__title"><span class="num">4</span><h3>Capital-gains tax vouchers · ${selectedYear}</h3><span class="meta">${yearDarfs.filter((d) => !d.paid).length} pending</span></header>
        <div style="overflow:auto">
          <table class="tbl">
            <thead><tr><th>Month</th><th>Type</th><th class="num">Tax base</th><th class="num">Rate</th><th class="num">Tax due</th><th>Due date</th><th>Status</th></tr></thead>
            <tbody>
              ${yearDarfs.length === 0
                ? `<tr><td colspan="7" class="dim" style="text-align:center; padding: 24px">No vouchers for ${selectedYear}</td></tr>`
                : yearDarfs.map((d) => `<tr>
                <td><span class="fx-tag">${d.yearMonth}</span></td>
                <td>${voucherType(d.type)}</td>
                <td class="num">${formatMoney(d.baseValue, 'BRL', { decimals: 0 })}</td>
                <td class="num dim">${(d.taxRate * 100).toFixed(0)}%</td>
                <td class="num">${formatMoney(d.taxOwed, 'BRL', { decimals: 2 })}</td>
                <td class="dim">${formatDate(d.dueDate, 'BRL')}</td>
                <td>${d.paid ? '<span class="badge badge--positive"><span class="badge__dot"></span>Paid</span>' : '<span class="badge badge--warning"><span class="badge__dot"></span>Pending</span>'}</td>
              </tr>`).join('')}
              ${yearDarfs.length > 0 ? `<tr style="background: rgba(184,153,104,0.04)"><td colspan="4" class="dim" style="text-align:right; padding-right:16px"><strong>Total due</strong></td><td class="num"><strong>${formatMoney(totalVouchers, 'BRL', { decimals: 0 })}</strong></td><td colspan="2" class="dim">${formatMoney(vouchersPaid, 'BRL', { decimals: 0 })} paid</td></tr>` : ''}
            </tbody>
          </table>
        </div>
        <p class="disclaim"><strong>Notice:</strong> Estimates only; final filing must be validated by a licensed accountant.</p>
      </article>
    `;
  }

  bindTabbar(root, item.route);
}

function computeProgressive(base: number): number {
  if (base <= 24511.92) return 0;
  if (base <= 33919.80) return base * 0.075 - 1838.39;
  if (base <= 45012.60) return base * 0.15  - 4382.38;
  if (base <= 55976.16) return base * 0.225 - 7758.32;
  return base * 0.275 - 10557.13;
}
function irpfCode(assetClass: string): string {
  if (assetClass === 'cash')        return '61';
  if (assetClass === 'etf_br')      return '74';
  if (assetClass === 'etf_intl')    return '74';
  if (assetClass === 'etf_bonds')   return '47';
  if (assetClass === 'etf_crypto')  return '81';
  return '99';
}
function voucherType(t: string): string {
  if (t === 'swing_trade') return 'Swing trade · equities';
  if (t === 'day_trade')   return 'Day trade';
  if (t === 'reit')        return 'REIT distribution';
  return t;
}
function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}
