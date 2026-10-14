// ============================================
// D3 — Tax calendar
// ============================================
import type { Dataset, NavItem } from '../modules/types';
import { formatMoney, formatDate } from '../modules/format';
import { svgIcon } from '../modules/meta';
import { renderTabbar, bindTabbar } from '../modules/tabs';

interface TaxEvent {
  id: string;
  date: string;
  label: string;
  type: 'TAX-RETURN' | 'CAPGAINS' | 'PROPERTY' | 'VEHICLE' | 'CBE' | 'FOREIGN';
  amountBrl: number;
  status: 'paid' | 'pending' | 'scheduled';
}

export function renderAccountingTaxes(root: HTMLElement, data: Dataset, item: NavItem, tab: string) {
  // Build tax events from DARFs + IPTU transactions + scheduled IRPF dates
  const events: TaxEvent[] = [];
  for (const d of data.darfs) {
    events.push({
      id: d.id,
      date: d.dueDate,
      label: `Capital-gains voucher · ${d.type === 'swing_trade' ? 'Equities' : d.type === 'reit' ? 'REIT' : 'Day trade'} · ${d.yearMonth}`,
      type: 'CAPGAINS',
      amountBrl: d.taxOwed,
      status: d.paid ? 'paid' : 'pending',
    });
  }
  // Property tax events
  const propertyTxs = data.transactions.filter((t) => t.merchant.startsWith('Property Tax'));
  for (const t of propertyTxs) {
    events.push({
      id: t.id,
      date: t.date,
      label: t.merchant,
      type: 'PROPERTY',
      amountBrl: Math.abs(t.amount),
      status: 'paid',
    });
  }
  // Tax-return milestones
  events.push({ id: 'tr-2025-deadline', date: '2026-05-31', label: 'Personal tax return 2025 · filing deadline',  type: 'TAX-RETURN', amountBrl: 0, status: 'scheduled' });
  events.push({ id: 'tr-2025-quota1',   date: '2026-04-30', label: 'Personal tax return 2025 · 1st installment',  type: 'TAX-RETURN', amountBrl: 0, status: 'scheduled' });

  events.sort((a, b) => a.date.localeCompare(b.date));

  const totalDue = events.filter((e) => e.status === 'pending').reduce((s, e) => s + e.amountBrl, 0);

  root.innerHTML = `
    <div class="view fade-in">
      <header class="view__head">
        <div class="view__title">
          <span class="t-eyebrow">D · Accounting</span>
          <h1 class="t-display">${item.label}</h1>
        </div>
        <div class="view__actions">
          <button class="btn btn--secondary">${svgIcon('download')} Export ICS</button>
        </div>
      </header>
      ${renderTabbar(item, tab)}

      <section class="grid-3">
        ${kpi('warning', 'Pending', formatMoney(totalDue, 'BRL', { decimals: 0 }), `${events.filter((e) => e.status === 'pending').length} obligations`)}
        ${kpi('positive', 'Paid YTD', formatMoney(events.filter((e) => e.status === 'paid').reduce((s, e) => s + e.amountBrl, 0), 'BRL', { decimals: 0 }), `${events.filter((e) => e.status === 'paid').length} payments`)}
        ${kpi('brand', 'Upcoming events', String(events.filter((e) => e.status === 'scheduled').length), 'in calendar')}
      </section>

      <section id="tab-content"></section>
    </div>
  `;
  const tabRoot = root.querySelector('#tab-content') as HTMLElement;

  if (tab === 'calendar') {
    tabRoot.innerHTML = renderCalendar(events);
  } else if (tab === 'vouchers') {
    tabRoot.innerHTML = renderEventsTable(events.filter((e) => e.type === 'CAPGAINS'));
  } else if (tab === 'property') {
    tabRoot.innerHTML = renderEventsTable(events.filter((e) => e.type === 'PROPERTY'));
  }

  bindTabbar(root, item.route);
}

function renderCalendar(events: TaxEvent[]): string {
  return `
    <article class="card card--flush">
      <header class="card__head card__head--bordered"><div><h2 class="card__title">Tax calendar</h2><p class="card__subtitle">Chronological view</p></div></header>
      <div style="overflow:auto">
        <table class="tbl">
          <thead><tr><th>Date</th><th>Event</th><th>Type</th><th class="num">Amount</th><th>Status</th></tr></thead>
          <tbody>
            ${events.map((e) => `<tr>
              <td class="dim">${formatDate(e.date, 'BRL')} <span class="t-meta">· ${e.date.slice(0, 4)}</span></td>
              <td>${e.label}</td>
              <td><span class="fx-tag">${e.type}</span></td>
              <td class="num">${e.amountBrl > 0 ? formatMoney(e.amountBrl, 'BRL', { decimals: 2 }) : '<span class="t-dim">—</span>'}</td>
              <td>${statusBadge(e.status)}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </article>
  `;
}

function renderEventsTable(events: TaxEvent[]): string {
  if (events.length === 0) {
    return `<article class="card"><div class="empty-state">${svgIcon('receipt')}<h3 class="t-h2">No events in this category yet</h3></div></article>`;
  }
  return renderCalendar(events);
}

function statusBadge(s: 'paid' | 'pending' | 'scheduled'): string {
  if (s === 'paid')      return '<span class="badge badge--positive"><span class="badge__dot"></span>Paid</span>';
  if (s === 'pending')   return '<span class="badge badge--warning"><span class="badge__dot"></span>Pending</span>';
  return '<span class="badge badge--neutral"><span class="badge__dot"></span>Scheduled</span>';
}

function kpi(accent: string, label: string, value: string, caption = ''): string {
  return `<div class="kpi kpi--${accent}"><div class="kpi__label">${label}</div><div class="kpi__value">${value}</div>${caption ? `<div class="kpi__caption">${caption}</div>` : ''}</div>`;
}
