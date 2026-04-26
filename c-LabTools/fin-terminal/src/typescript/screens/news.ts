import { el } from '../shell/dom';
import { renderLoadingOverlay } from '../widgets/loading-overlay';
import type { ScreenContext } from './registry';

export function renderNews(host: HTMLElement, _ctx: ScreenContext): void {
  host.appendChild(el('h2', {}, ['News']));
  host.appendChild(renderLoadingOverlay('LOADING NEWS FEED…'));
  host.appendChild(el('p', { class: 't-muted u-mt' }, ['Wire to /api/v1/topics on news:* in Phase 2.']));
}
