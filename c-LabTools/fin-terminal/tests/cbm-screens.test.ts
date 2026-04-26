import { describe, it, expect, beforeEach } from 'vitest';
import { renderDsge } from '../src/typescript/screens/dsge';
import { renderMlAbm } from '../src/typescript/screens/ml-abm';
import { ApiClient } from '../src/typescript/api/client';
import { WsClient } from '../src/typescript/api/ws';
import cbm from '../src/typescript/data/central-bank-modelling.json';
import type { ScreenContext } from '../src/typescript/screens/registry';

function ctx(): ScreenContext {
  const api = new ApiClient({ base: 'http://test/fin-api', ws: 'ws://test/' });
  const ws = new WsClient('ws://test/');
  return { api, ws, cycleTheme: () => {}, currentThemeName: () => 'Bloomberg Dark' };
}

describe('Central Bank Modelling — separate DSGE + ML-ABM screens', () => {
  beforeEach(() => { document.body.innerHTML = ''; });

  it('DSGE screen renders KPI grid + parameter sections + chart, NO tab strip', () => {
    const host = document.createElement('div'); document.body.appendChild(host);
    renderDsge(host, ctx());
    expect(host.querySelector('.kpi-grid'), 'kpi grid').not.toBeNull();
    expect(host.querySelectorAll('.mkt-section__title').length).toBeGreaterThan(0);
    expect(host.querySelector('.chart'), 'chart container').not.toBeNull();
    // Per Diego: no tabs — section nav holds DSGE/ML-ABM as separate items
    expect(host.querySelectorAll('.tabs__btn').length).toBe(0);
  });

  it('ML-ABM screen renders KPI grid + NOWCASTS table, NO tab strip', () => {
    const host = document.createElement('div'); document.body.appendChild(host);
    renderMlAbm(host, ctx());
    expect(host.querySelector('.kpi-grid')).not.toBeNull();
    const titles = Array.from(host.querySelectorAll('.mkt-section__title')).map(n => n.textContent);
    expect(titles).toContain('NOWCASTS');
    expect(host.querySelectorAll('.tabs__btn').length).toBe(0);
  });

  it('every parameter referenced by every scenario across both models maps to a defined param', () => {
    const data = cbm as {
      models: Record<string, { param_groups: Array<{ params: Array<{ key: string }> }>; scenarios: Record<string, Record<string, unknown>> }>;
    };
    for (const [modelId, model] of Object.entries(data.models)) {
      const known = new Set(model.param_groups.flatMap(g => g.params.map(p => p.key)));
      for (const [scenario, overrides] of Object.entries(model.scenarios)) {
        for (const k of Object.keys(overrides)) {
          expect(known.has(k), `${modelId}.${scenario} references unknown param "${k}"`).toBe(true);
        }
      }
    }
  });
});
