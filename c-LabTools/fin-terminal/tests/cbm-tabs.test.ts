import { describe, it, expect, beforeEach } from 'vitest';
import { renderCentralBankModelling } from '../src/typescript/screens/central-bank-modelling';
import { ApiClient } from '../src/typescript/api/client';
import { WsClient } from '../src/typescript/api/ws';
import cbm from '../src/typescript/data/central-bank-modelling.json';
import type { ScreenContext } from '../src/typescript/screens/registry';

function ctx(): ScreenContext {
  const api = new ApiClient({ base: 'http://test/fin-api', ws: 'ws://test/' });
  const ws = new WsClient('ws://test/');
  return { api, ws, cycleTheme: () => {}, currentThemeName: () => 'Bloomberg Dark' };
}

describe('central-bank-modelling tabs', () => {
  beforeEach(() => { document.body.innerHTML = ''; });

  it('renders a tab strip with both DSGE and ML-ABM tabs', () => {
    const host = document.createElement('div'); document.body.appendChild(host);
    renderCentralBankModelling(host, ctx());
    const tabs = host.querySelectorAll('.tabs__btn');
    expect(tabs.length).toBe(2);
    const labels = Array.from(tabs).map(t => t.textContent);
    expect(labels).toContain('DSGE');
    expect(labels).toContain('ML-ABM');
  });

  it('DSGE tab is active by default and renders KPI grid + parameter sections + chart', () => {
    const host = document.createElement('div'); document.body.appendChild(host);
    renderCentralBankModelling(host, ctx());
    const active = host.querySelector('.tabs__btn--active');
    expect(active?.textContent).toBe('DSGE');
    expect(host.querySelector('.kpi-grid'), 'kpi grid').not.toBeNull();
    expect(host.querySelectorAll('.mkt-section__title').length).toBeGreaterThan(0);
    expect(host.querySelector('.chart'), 'chart container').not.toBeNull();
  });

  it('clicking ML-ABM swaps active tab and re-renders content', () => {
    const host = document.createElement('div'); document.body.appendChild(host);
    renderCentralBankModelling(host, ctx());
    const tabs = host.querySelectorAll<HTMLButtonElement>('.tabs__btn');
    const mlAbm = Array.from(tabs).find(t => t.textContent === 'ML-ABM')!;
    mlAbm.click();
    const activeAfter = host.querySelector('.tabs__btn--active');
    expect(activeAfter?.textContent).toBe('ML-ABM');
    // ML-ABM model defines the NOWCASTS section title
    const titles = Array.from(host.querySelectorAll('.mkt-section__title')).map(n => n.textContent);
    expect(titles).toContain('NOWCASTS');
  });

  it('scenario selector cycles available presets for the active tab', () => {
    const host = document.createElement('div'); document.body.appendChild(host);
    renderCentralBankModelling(host, ctx());
    const select = host.querySelector<HTMLSelectElement>('.field__select');
    expect(select).not.toBeNull();
    const dsgeScenarios = Object.keys((cbm as { models: { dsge: { scenarios: Record<string, unknown> } } }).models.dsge.scenarios);
    expect(select!.options.length).toBe(dsgeScenarios.length);
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
