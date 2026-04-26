import { el } from '../shell/dom';
import { renderCandleChart } from '../charts/candlestick';
import type { ScreenContext } from './registry';

export function renderCrypto(host: HTMLElement, _ctx: ScreenContext): void {
  host.appendChild(el('h2', {}, ['Crypto']));
  // 20 synthetic OHLC bars with ±$10 drift, like egui CryptoScreen.
  const bars: { time: number; open: number; high: number; low: number; close: number }[] = [];
  let last = 67_000;
  const start = Math.floor(Date.now() / 1000) - 20 * 60;
  for (let i = 0; i < 20; i++) {
    const drift = (Math.random() - 0.5) * 20;
    const open = last;
    const close = open + drift;
    const high = Math.max(open, close) + Math.random() * 5;
    const low  = Math.min(open, close) - Math.random() * 5;
    bars.push({ time: start + i * 60, open, high, low, close });
    last = close;
  }
  host.appendChild(renderCandleChart({ bars, label: 'BTC/USD — synthetic 1m' }));
}
