import { renderCbmModel } from './_cbm-model';
import type { ScreenContext } from './registry';

export function renderMlAbm(host: HTMLElement, ctx: ScreenContext): void {
  renderCbmModel(host, ctx, 'ml-abm');
}
