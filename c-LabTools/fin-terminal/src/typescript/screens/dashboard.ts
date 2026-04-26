import { el } from '../shell/dom';
import { renderTickerBar } from '../widgets/ticker-bar';
import { renderKpiGrid } from '../widgets/kpi';
import type { ScreenContext } from './registry';

// Mirrors egui DashboardScreen — synthetic placeholder data until DataHub wires.
export function renderDashboard(host: HTMLElement, _ctx: ScreenContext): void {
  host.appendChild(el('h2', {}, ['Dashboard']));
  host.appendChild(renderTickerBar([
    { symbol: 'AAPL', price: 187.50, change_percent:  0.0125 },
    { symbol: 'TSLA', price: 245.30, change_percent: -0.0083 },
    { symbol: 'BTC',  price: 67200,  change_percent:  0.0412 },
  ]));
  host.appendChild(el('div', { class: 'u-mt' }));
  host.appendChild(renderKpiGrid([
    { label: 'NET P&L',    value: '+$12,480',   tone: 'pos' },
    { label: 'EXPOSURE',   value: '$1,240,000', tone: 'info' },
    { label: 'CASH',       value: '$48,200',    tone: 'neutral' },
    { label: 'SHARPE 1Y',  value: '1.42',       tone: 'neutral' },
    { label: 'VAR (95%)',  value: '$8,450',     tone: 'warn' },
    { label: 'DRAWDOWN',   value: '-3.8%',      tone: 'neg' },
  ]));
  host.appendChild(el('p', { class: 't-muted u-mt' }, ['placeholder data — wire to DataHub topics in Phase 2.']));
}
