import { el } from '../shell/dom';
import { renderLineChart } from '../charts/line';
import type { ScreenContext } from './registry';

export function renderPortfolio(host: HTMLElement, _ctx: ScreenContext): void {
  host.appendChild(el('h2', {}, ['Portfolio']));
  // Synthetic equity curve — same shape as egui PortfolioScreen.
  const points = Array.from({ length: 30 }, (_, i) => ({
    x: i,
    y: 100_000 + i * 850 + Math.sin(i * 0.6) * 1200,
  }));
  host.appendChild(renderLineChart({ points, label: 'EQUITY CURVE — synthetic' }));
}
