import { el, replace } from '../shell/dom';
import { renderLoadingOverlay, renderError } from '../widgets/loading-overlay';
import type { ScreenContext } from './registry';
import type { ToolSpec } from '../api/types';

export function renderMcpInspector(host: HTMLElement, ctx: ScreenContext): void {
  host.appendChild(el('h2', {}, ['MCP Inspector']));
  host.appendChild(el('p', { class: 't-muted u-mb-s' }, ['live: GET /api/v1/mcp/tools  +  POST /api/v1/mcp/tools/:name/call']));
  const list = el('div', { class: 'u-col' });
  host.appendChild(list);
  const loading = renderLoadingOverlay('FETCHING MCP TOOLS…');
  list.appendChild(loading);

  void ctx.api.mcpTools().then((tools) => {
    loading.remove();
    if (tools.length === 0) {
      list.appendChild(el('p', { class: 't-amber' }, ['(no MCP tools registered)']));
      return;
    }
    for (const t of tools) list.appendChild(renderTool(t, ctx));
  }).catch((err: unknown) => {
    loading.remove();
    list.appendChild(renderError((err as Error).message));
  });
}

function renderTool(t: ToolSpec, ctx: ScreenContext): HTMLElement {
  const wrap = el('div', { class: 'u-col u-pad u-divider u-mb' });
  wrap.appendChild(el('span', { class: 't-amber t-strong u-uppercase' }, [t.name]));
  wrap.appendChild(el('span', { class: 't-muted u-mb-s' }, [t.description]));
  wrap.appendChild(el('span', { class: 't-small t-muted' }, ['INPUT SCHEMA']));
  wrap.appendChild(el('div', { class: 'code-block u-mb-s' }, [JSON.stringify(t.input_schema, null, 2)]));

  const argsField = el<HTMLTextAreaElement>('textarea', {
    class: 'field__textarea', rows: '3',
    placeholder: '{ "symbol": "AAPL" }',
  });
  argsField.value = defaultArgsFor(t);

  const out = el('div', { class: 'code-block' }, ['(no result yet)']);
  const callBtn = el<HTMLButtonElement>('button', { class: 'btn', type: 'button' }, ['CALL TOOL']);

  callBtn.addEventListener('click', () => {
    let args: unknown = {};
    try { args = JSON.parse(argsField.value || '{}'); }
    catch (e) { replace(out, `parse error: ${(e as Error).message}`); return; }
    replace(out, 'CALLING…');
    ctx.api.callMcpTool(t.name, args)
      .then((res) => replace(out, JSON.stringify(res, null, 2)))
      .catch((err: unknown) => replace(out, `error: ${(err as Error).message}`));
  });

  wrap.appendChild(el('span', { class: 't-small t-muted' }, ['ARGS (JSON)']));
  wrap.appendChild(argsField);
  wrap.appendChild(callBtn);
  wrap.appendChild(el('span', { class: 't-small t-muted u-mt' }, ['RESULT']));
  wrap.appendChild(out);
  return wrap;
}

function defaultArgsFor(t: ToolSpec): string {
  const examples: Record<string, unknown> = {
    market_data:     { symbol: 'AAPL' },
    financial_news:  { query: 'apple', limit: 5 },
    economics_data:  { series_id: 'GDP', country: 'US' },
    factor_backtest: { factor: 'value', universe: 'sp500', start: '2024-01-01', end: '2024-12-31' },
    symbol_search:   { query: 'apple' },
  };
  return JSON.stringify(examples[t.name] ?? {}, null, 2);
}
