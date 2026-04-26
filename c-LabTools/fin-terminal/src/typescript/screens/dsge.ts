import { renderCbmModel } from './_cbm-model';
import type { ScreenContext } from './registry';

export function renderDsge(host: HTMLElement, ctx: ScreenContext): void {
  renderCbmModel(host, ctx, 'dsge');
}
