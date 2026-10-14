import { el } from '../shell/dom';
import { loadThemesIndex } from '../shell/theme';
import { API_CONFIG } from '../api/config';
import type { ScreenContext } from './registry';

export function renderSettings(host: HTMLElement, ctx: ScreenContext): void {
  host.appendChild(el('h2', {}, ['Settings']));

  const themes = loadThemesIndex();
  host.appendChild(el('div', { class: 'field' }, [
    el('span', { class: 'field__label' }, ['THEME']),
    el('div', { class: 'u-row' }, [
      el('span', { class: 't-amber' }, [`current: `]),
      el('span', { class: 't-white' }, [ctx.currentThemeName()]),
      el('span', { class: 'u-pad-s' }),
      ((): HTMLElement => {
        const btn = el<HTMLButtonElement>('button', { class: 'btn', type: 'button' }, ['CYCLE THEME (CTRL+T)']);
        btn.addEventListener('click', ctx.cycleTheme);
        return btn;
      })(),
    ]),
    el('p', { class: 't-muted t-small u-mt-s' }, [
      `available: ${themes.themes.map(t => t.name).join('   |   ')}`,
    ]),
  ]));

  host.appendChild(el('div', { class: 'field' }, [
    el('span', { class: 'field__label' }, ['API (from build.json)']),
    el('div', { class: 'code-block' }, [JSON.stringify(API_CONFIG, null, 2)]),
  ]));

  host.appendChild(el('p', { class: 't-muted u-mt' }, ['F1 = HELP returns to this screen.']));
}
