import { el } from '../shell/dom';
import { renderDataTable } from '../widgets/data-table';
import { renderLoadingOverlay, renderError } from '../widgets/loading-overlay';
import type { ScreenContext } from './registry';

export function renderDeveloperDataHub(host: HTMLElement, ctx: ScreenContext): void {
  host.appendChild(el('h2', {}, ['DataHub Inspector']));
  const status = el('p', { class: 't-muted u-mb-s' }, ['live: GET /api/v1/topics']);
  host.appendChild(status);
  const loading = renderLoadingOverlay('FETCHING TOPICS…');
  host.appendChild(loading);

  void ctx.api.topics().then((topics) => {
    loading.remove();
    if (topics.length === 0) {
      host.appendChild(el('p', { class: 't-amber' }, ['(no topics in cache yet — publish via /topics/:topic/publish)']));
      return;
    }
    host.appendChild(renderDataTable({
      columns: [
        { key: 'topic', label: 'Topic' },
        { key: 'subscriber_count', label: 'Subs', numeric: true },
        { key: 'total_publishes',  label: 'Publishes', numeric: true },
        { key: 'in_flight', label: 'In-flight', format: (v) => v ? '●' : '—' },
      ],
      rows: topics as unknown as Array<Record<string, unknown>>,
      sort: { key: 'topic', dir: 'asc' },
    }));
  }).catch((err: unknown) => {
    loading.remove();
    host.appendChild(renderError((err as Error).message));
  });
}
