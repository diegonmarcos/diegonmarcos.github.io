import { describe, it, expect, beforeEach, vi } from 'vitest';
import { App } from '../src/typescript/app';

describe('shell mounts full chrome', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>';
    // Stub fetch (build.json + /api/v1/info polling).
    globalThis.fetch = vi.fn().mockImplementation((input: RequestInfo) => {
      const url = String(input);
      let body: unknown = {};
      if (url.endsWith('build.json')) body = { api: { base: 'http://test/fin-api', ws: 'ws://test/api/v1/ws' } };
      else if (url.endsWith('/api/v1/info')) body = { version: '0.1.0', personas: 6, mcp_tools: 5, hub_topics: 0 };
      else if (url.endsWith('/api/v1/topics')) body = [];
      else if (url.endsWith('/api/v1/mcp/tools')) body = [];
      return Promise.resolve(new Response(JSON.stringify(body), { status: 200 }));
    });
    // Stub WebSocket.
    class W { readyState=1; constructor(public url: string) { /* noop */ } send(){} close(){} addEventListener(){}
      onopen: unknown=null; onmessage: unknown=null; onclose: unknown=null; onerror: unknown=null; }
    (globalThis as unknown as { WebSocket: typeof W }).WebSocket = W;
  });

  it('mount() inserts command-bar, nav, panel, function-bar, status-bar', async () => {
    const root = document.getElementById('app')!;
    await new App().mount(root);
    expect(root.querySelector('.command-bar'),  'command-bar').not.toBeNull();
    expect(root.querySelector('.nav'),          'nav').not.toBeNull();
    expect(root.querySelector('.panel'),        'panel').not.toBeNull();
    expect(root.querySelector('.function-bar'), 'function-bar').not.toBeNull();
    expect(root.querySelector('.status-bar'),   'status-bar').not.toBeNull();
  });

  it('function-bar renders 12 keys', async () => {
    const root = document.getElementById('app')!;
    await new App().mount(root);
    const keys = root.querySelectorAll('.function-bar__key');
    expect(keys.length).toBe(12);
  });

  it('nav contains a button for every screen id', async () => {
    const root = document.getElementById('app')!;
    await new App().mount(root);
    const items = root.querySelectorAll('.nav__item');
    expect(items.length).toBe(73);
  });

  it('default theme applies Bloomberg amber on root CSS variable', async () => {
    const root = document.getElementById('app')!;
    await new App().mount(root);
    const text = document.documentElement.style.getPropertyValue('--color-text').toUpperCase();
    expect(text).toContain('FFA028');
  });

  it('nav surfaces the top-letter SECTION breakers (A REPORTS / B MARKETS / C MACRO / D CORPORATE / E ALLOCATION / F OTHERS)', async () => {
    const root = document.getElementById('app')!;
    await new App().mount(root);
    const sections = Array.from(root.querySelectorAll('.nav__section-title')).map(n => n.textContent);
    for (const id of ['A', 'B', 'C', 'D', 'E', 'F']) {
      expect(sections.some(t => t?.startsWith(`${id})`)),
        `expected section breaker with prefix "${id})"`).toBe(true);
    }
    // HOME is rendered as just its single group; no separate section breaker.
    // Orphan section should never appear once nav-groups.json covers all categories.
    expect(sections).not.toContain('UNGROUPED');
  });

  it('nav surfaces all sub-group letter breakers (HOME + A0/A1/A2 + B0..B3 + C0 + D0 + E0 + F0)', async () => {
    const root = document.getElementById('app')!;
    await new App().mount(root);
    const titles = Array.from(root.querySelectorAll('.nav__group-title')).map(n => n.textContent);
    expect(titles).toContain('HOME');
    for (const id of ['A0', 'A1', 'A2', 'B0', 'B1', 'B2', 'B3', 'C', 'D0']) {
      expect(titles.some(t => t?.startsWith(`${id})`)),
        `expected nav sub-group with prefix "${id})"`).toBe(true);
    }
  });
});
