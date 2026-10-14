import { el } from '../shell/dom';
import type { ScreenContext } from './registry';

export function renderEquityResearch(host: HTMLElement, _ctx: ScreenContext): void {
  host.appendChild(el('h2', {}, ['Equity Research']));
  host.appendChild(el('p', { class: 't-amber' }, ['Type a symbol in the command bar to pull fundamentals + persona scoring.']));
  host.appendChild(el('p', { class: 't-muted u-mt' }, ['Wired to /api/v1/personas/:id/score in Phase 2.']));
}
