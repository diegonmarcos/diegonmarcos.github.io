import { el, clear } from '../shell/dom';
import { NEWS_CFG, renderTopicArticles } from './_news-shared';
import type { ScreenContext } from './registry';

export function renderNews(host: HTMLElement, _ctx: ScreenContext): void {
  let activeTopic: string = NEWS_CFG.topics[0]!.topic;
  let stopRefresh: (() => void) | null = null;

  host.appendChild(el('h2', {}, ['News by Topic']));
  host.appendChild(el('p', { class: 't-muted u-mb-s' }, [
    `Live: GDELT via ${NEWS_CFG.api_base} — ${NEWS_CFG.topics.length} topics, refresh every ${(NEWS_CFG.refresh_ms / 1000).toFixed(0)}s`,
  ]));

  // Topic filter strip — uses tabs SCSS for amber-underline active state.
  const tabs = el('nav', { class: 'tabs', role: 'tablist' });
  host.appendChild(tabs);
  const body = el('div');
  host.appendChild(body);

  const refreshTopicBar = () => {
    clear(tabs);
    for (const t of NEWS_CFG.topics) {
      const btn = el<HTMLButtonElement>('button', {
        class: `tabs__btn${t.topic === activeTopic ? ' tabs__btn--active' : ''}`,
        type: 'button',
      }, [t.label.toUpperCase()]);
      btn.addEventListener('click', () => {
        activeTopic = t.topic;
        refreshTopicBar();
        if (stopRefresh) stopRefresh();
        const meta = NEWS_CFG.topics.find(x => x.topic === activeTopic);
        stopRefresh = renderTopicArticles(body, { topic: activeTopic, label: meta?.label });
      });
      tabs.appendChild(btn);
    }
  };

  refreshTopicBar();
  const meta = NEWS_CFG.topics.find(x => x.topic === activeTopic);
  stopRefresh = renderTopicArticles(body, { topic: activeTopic, label: meta?.label });
}
