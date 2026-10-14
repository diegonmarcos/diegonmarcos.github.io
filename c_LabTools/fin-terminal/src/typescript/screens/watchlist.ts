import { el } from '../shell/dom';
import { renderDataTable } from '../widgets/data-table';
import type { ScreenContext } from './registry';

export function renderWatchlist(host: HTMLElement, _ctx: ScreenContext): void {
  host.appendChild(el('h2', {}, ['Watchlist']));
  host.appendChild(renderDataTable({
    columns: [
      { key: 'symbol', label: 'Symbol' },
      { key: 'price',  label: 'Price', numeric: true },
    ],
    rows: [
      { symbol: 'AAPL', price: 187.50 },
      { symbol: 'MSFT', price: 421.80 },
      { symbol: 'NVDA', price: 932.10 },
    ],
    sort: { key: 'symbol', dir: 'asc' },
  }));
}
