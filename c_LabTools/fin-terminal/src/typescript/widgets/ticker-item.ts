import { el } from '../shell/dom';

export interface TickerData {
  symbol: string;
  price: number;
  change_percent: number;
}

export function renderTickerItem(t: TickerData): HTMLElement {
  const sign = t.change_percent >= 0 ? 't-pos' : 't-neg';
  const arrow = t.change_percent >= 0 ? '▲' : '▼';
  return el('span', { class: 'ticker-item' }, [
    el('span', { class: 'ticker-item__symbol' }, [t.symbol]),
    el('span', { class: 'ticker-item__price' }, [fmt(t.price)]),
    el('span', { class: `ticker-item__change ${sign}` }, [`${arrow} ${pct(t.change_percent)}`]),
  ]);
}

function fmt(n: number): string {
  return n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function pct(n: number): string {
  const v = (n * 100).toFixed(2);
  return `${n >= 0 ? '+' : ''}${v}%`;
}
