import { el } from '../shell/dom';

export function renderLoadingOverlay(message = 'LOADING…'): HTMLElement {
  return el('div', { class: 'loading-overlay', role: 'status' }, [
    el('span', { class: 'loading-overlay__spinner', 'aria-hidden': 'true' }),
    el('span', { class: 'u-pad-s' }, [message]),
  ]);
}

export function renderError(message: string): HTMLElement {
  return el('div', { class: 'loading-overlay t-neg', role: 'alert' }, [
    el('span', {}, [`ERROR — ${message}`]),
  ]);
}
