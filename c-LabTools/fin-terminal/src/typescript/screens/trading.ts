import { el } from '../shell/dom';
import type { ScreenContext } from './registry';

export function renderTrading(host: HTMLElement, _ctx: ScreenContext): void {
  host.appendChild(el('h2', {}, ['Trading']));
  host.appendChild(el('p', { class: 't-amber' }, ['Order routing across 17 brokers (paper + live).']));
  host.appendChild(el('p', { class: 't-muted u-mt' }, ['Phase 2 — wire to fin-api broker registry.']));
}
