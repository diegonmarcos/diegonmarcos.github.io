import { el } from '../shell/dom';
import { renderKpiGrid } from '../widgets/kpi';
import { renderLoadingOverlay, renderError } from '../widgets/loading-overlay';
import type { ScreenContext } from './registry';

export function renderAuthProfile(host: HTMLElement, ctx: ScreenContext): void {
  host.appendChild(el('h2', {}, ['Profile & Sessions']));
  host.appendChild(el('p', { class: 't-muted u-mb-s' }, ['live: GET /api/v1/info']));

  const loading = renderLoadingOverlay('FETCHING SERVER INFO…');
  host.appendChild(loading);

  void ctx.api.info().then((info) => {
    loading.remove();
    host.appendChild(renderKpiGrid([
      { label: 'API VERSION',  value: info.version, tone: 'info' },
      { label: 'PERSONAS',     value: String(info.personas) },
      { label: 'MCP TOOLS',    value: String(info.mcp_tools) },
      { label: 'HUB TOPICS',   value: String(info.hub_topics) },
    ]));
    host.appendChild(el('p', { class: 't-muted u-mt' }, ['Auth is delegated to Caddy + Authelia upstream — server itself is unauthenticated.']));
  }).catch((err: unknown) => {
    loading.remove();
    host.appendChild(renderError((err as Error).message));
  });
}
