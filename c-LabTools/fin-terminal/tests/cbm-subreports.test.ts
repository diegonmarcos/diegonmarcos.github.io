import { describe, it, expect, beforeEach } from 'vitest';
import { renderMacroReport, listSubreports } from '../src/typescript/screens/_macro-report';
import { ApiClient } from '../src/typescript/api/client';
import { WsClient } from '../src/typescript/api/ws';
import customRegistry from '../src/typescript/data/screen-registry.json';
import type { ScreenContext } from '../src/typescript/screens/registry';

function ctx(): ScreenContext {
  const api = new ApiClient({ base: 'http://test/fin-api', ws: 'ws://test/' });
  const ws = new WsClient('ws://test/');
  return { api, ws, cycleTheme: () => {}, currentThemeName: () => 'Bloomberg Dark' };
}

describe('CBM subreports — declarative + complete', () => {
  it('exposes exactly 10 subreports', () => {
    expect(listSubreports().length).toBe(10);
  });

  it('each subreport has id starting with "cbm-" and the required schema', () => {
    for (const r of listSubreports()) {
      expect(r.id.startsWith('cbm-'), `id ${r.id}`).toBe(true);
      expect(r.title).toBeTruthy();
      expect(r.summary).toBeTruthy();
      expect(r.indicators.length).toBeGreaterThan(0);
      expect(r.components.columns.length).toBeGreaterThan(0);
      expect(r.components.rows.length).toBeGreaterThan(0);
      expect(r.chart.points).toBeGreaterThan(0);
      // Every row must have all column keys defined (so the table renders consistently)
      for (const row of r.components.rows) {
        for (const c of r.components.columns) {
          expect(c.key in row, `${r.id} row missing key ${c.key}`).toBe(true);
        }
      }
    }
  });

  it('every subreport id is registered in screen-registry.json under category "central-bank-modelling"', () => {
    const customs = (customRegistry as { custom: Array<{ id: string; category: string }> }).custom;
    const registeredIds = new Set(customs.filter(c => c.category === 'central-bank-modelling').map(c => c.id));
    for (const r of listSubreports()) {
      expect(registeredIds.has(r.id), `subreport ${r.id} not registered`).toBe(true);
    }
  });

  it('each subreport renders a heading + KPI grid + components title + chart', () => {
    for (const r of listSubreports()) {
      const host = document.createElement('div'); document.body.appendChild(host);
      renderMacroReport(host, ctx(), r.id);
      expect(host.querySelector('h2'), `${r.id}: heading`).not.toBeNull();
      expect(host.querySelector('.kpi-grid'), `${r.id}: kpi grid`).not.toBeNull();
      const titles = Array.from(host.querySelectorAll('.mkt-section__title')).map(n => n.textContent);
      expect(titles, `${r.id}: components title`).toContain(r.components.title);
      expect(host.querySelector('.chart'), `${r.id}: chart`).not.toBeNull();
      host.remove();
    }
  });

  it('unknown id renders a clear error message rather than throwing', () => {
    const host = document.createElement('div'); document.body.appendChild(host);
    expect(() => renderMacroReport(host, ctx(), 'cbm-nope')).not.toThrow();
    expect(host.textContent ?? '').toContain('unknown report');
  });
});
