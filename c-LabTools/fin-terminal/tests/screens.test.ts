import { describe, it, expect, beforeEach, vi } from 'vitest';
import { buildRegistry, type ScreenContext } from '../src/typescript/screens/registry';
import { ApiClient } from '../src/typescript/api/client';
import { WsClient } from '../src/typescript/api/ws';

function ctxStub(): ScreenContext {
  // Mock fetch that returns minimal valid payloads — so live-API screens don't blow up.
  globalThis.fetch = vi.fn().mockImplementation((input: RequestInfo) => {
    const url = String(input);
    let body: unknown = {};
    if (url.endsWith('/health')) body = { status: 'ok', version: '0.1.0' };
    else if (url.endsWith('/api/v1/info')) body = { version: '0.1.0', personas: 6, mcp_tools: 5, hub_topics: 0 };
    else if (url.endsWith('/api/v1/topics')) body = [];
    else if (url.endsWith('/api/v1/mcp/tools')) body = [];
    return Promise.resolve(new Response(JSON.stringify(body), { status: 200 }));
  });
  const api = new ApiClient({ base: 'http://test/fin-api', ws: 'ws://test/' });
  const ws = new WsClient('ws://test/');
  return { api, ws, cycleTheme: () => {}, currentThemeName: () => 'Bloomberg Dark' };
}

describe('screen registry', () => {
  it('buildRegistry produces 54 screens (13 custom + 41 spec)', () => {
    const reg = buildRegistry();
    expect(reg.length).toBe(54);
    expect(reg.filter(s => s.source === 'custom').length).toBe(13);
    expect(reg.filter(s => s.source === 'spec').length).toBe(41);
  });

  it('all screen ids are unique', () => {
    const reg = buildRegistry();
    const seen = new Set<string>();
    for (const s of reg) { expect(seen.has(s.id)).toBe(false); seen.add(s.id); }
  });
});

describe('screens render without throwing', () => {
  beforeEach(() => { document.body.innerHTML = ''; });

  const reg = buildRegistry();
  for (const s of reg) {
    it(`renders ${s.id} (${s.source})`, () => {
      const host = document.createElement('div');
      document.body.appendChild(host);
      const ctx = ctxStub();
      expect(() => s.render(host, ctx)).not.toThrow();
    });
  }
});
