import { el } from '../shell/dom';
import type { ScreenContext } from './registry';

export function renderEconomics(host: HTMLElement, _ctx: ScreenContext): void {
  host.appendChild(el('h2', {}, ['Economics']));
  host.appendChild(el('p', { class: 't-amber' }, ['Macro indicators across FRED, World Bank, OECD.']));
  host.appendChild(el('p', { class: 't-muted u-mt' }, ['Phase 2 — wire to /api/v1/mcp/tools/economics_data.']));
}
