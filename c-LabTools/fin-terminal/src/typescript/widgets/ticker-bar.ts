import { el } from '../shell/dom';
import { renderTickerItem, type TickerData } from './ticker-item';

export function renderTickerBar(items: TickerData[]): HTMLElement {
  const bar = el('div', { class: 'ticker-bar', role: 'marquee' });
  for (const t of items) bar.appendChild(renderTickerItem(t));
  return bar;
}
