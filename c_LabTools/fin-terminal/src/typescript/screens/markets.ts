import { el } from '../shell/dom';
import { renderDataTable } from '../widgets/data-table';
import type { ScreenContext } from './registry';

export function renderMarkets(host: HTMLElement, _ctx: ScreenContext): void {
  host.appendChild(el('h2', {}, ['Markets']));
  host.appendChild(renderDataTable({
    columns: [
      { key: 'symbol', label: 'Symbol' },
      { key: 'last',   label: 'Last',  numeric: true },
      { key: 'chg',    label: 'Chg %', numeric: true, signed: true,
        format: (v) => `${(v as number) >= 0 ? '+' : ''}${((v as number) * 100).toFixed(2)}%` },
    ],
    rows: [
      { symbol: '^SPX', last: 5283.40, chg:  0.0042 },
      { symbol: '^NDX', last: 18321.10, chg: 0.0078 },
      { symbol: '^VIX', last: 14.25,    chg: -0.0210 },
      { symbol: '^DJI', last: 39281.20, chg:  0.0021 },
      { symbol: '^FTSE', last: 8224.50,  chg:  0.0011 },
      { symbol: '^N225', last: 38911.00, chg: -0.0047 },
    ],
    sort: { key: 'symbol', dir: 'asc' },
  }));
}
