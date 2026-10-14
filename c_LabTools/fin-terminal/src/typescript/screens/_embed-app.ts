import { el } from '../shell/dom';
import type { ScreenContext } from './registry';

export interface EmbedAppOptions {
  /** Title shown in the panel chrome and embed header. */
  title: string;
  /** Iframe URL. If empty, a placeholder is shown instead. */
  url: string;
  /** Section name (category) — surfaced in placeholder text. */
  section: string;
}

// Generic factory used by every "<Topic> Modelling" section. Each section is a
// thin iframe wrapper around an external app (its own build.sh / build.json).
// URL is bundled at build time from build.json `apps.<key>.url`, so swapping
// the deployment target is a one-field change + rebuild.
export function makeEmbedAppScreen(opts: EmbedAppOptions) {
  return function render(host: HTMLElement, _ctx: ScreenContext): void {
    host.style.padding = '0';
    if (!opts.url) {
      host.appendChild(el('h2', {}, [opts.title]));
      host.appendChild(el('p', { class: 't-amber u-mt' }, [
        `Section "${opts.section}" is wired but no app URL is configured.`,
      ]));
      host.appendChild(el('p', { class: 't-muted u-mt-s' }, [
        `Set apps.${opts.section}.url in build.json to point at the external app.`,
      ]));
      return;
    }
    const wrap = el('div', { class: 'embed' });
    wrap.appendChild(el('div', { class: 'embed__header' }, [
      el('span', {}, [`${opts.title.toUpperCase()} — ${opts.url}`]),
      el<HTMLAnchorElement>('a', {
        class: 'embed__open',
        href: opts.url,
        target: '_blank',
        rel: 'noopener',
      }, ['↗ open in new tab']),
    ]));
    wrap.appendChild(el<HTMLIFrameElement>('iframe', {
      src: opts.url,
      title: opts.title,
      loading: 'lazy',
      referrerpolicy: 'no-referrer',
    }));
    host.appendChild(wrap);
  };
}
