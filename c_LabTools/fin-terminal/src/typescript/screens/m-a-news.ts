import { el } from '../shell/dom';
import { renderTopicArticles } from './_news-shared';
import type { ScreenContext } from './registry';

// M&A Deals — single-topic GDELT news view locked to "mergers acquisitions".
// Lives under the A3) M&A DEALS nav group. No topic strip (it's already a
// single topic); for the broader multi-topic browser see screens/news.ts.
export function renderMaNews(host: HTMLElement, _ctx: ScreenContext): void {
  host.appendChild(el('h2', {}, ['M&A Deals']));
  host.appendChild(el('p', { class: 't-muted u-mb-s' }, [
    'Live GDELT feed locked to "mergers acquisitions" — fold-overs, takeovers, divestitures.',
  ]));
  const body = el('div');
  host.appendChild(body);
  renderTopicArticles(body, { topic: 'mergers acquisitions', label: 'M&A Deals' });
}
