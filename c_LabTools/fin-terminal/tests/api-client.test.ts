import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ApiClient, ApiError } from '../src/typescript/api/client';

const BASE = 'http://test/fin-api';

function mockFetch(handler: (req: Request) => Response | Promise<Response>) {
  return vi.fn().mockImplementation((input: Request | string, init?: RequestInit) => {
    const req = input instanceof Request ? input : new Request(input, init);
    return Promise.resolve(handler(req));
  });
}

describe('ApiClient', () => {
  let client: ApiClient;
  beforeEach(() => { client = new ApiClient({ base: BASE, ws: 'ws://test/' }); });

  it('GET /health', async () => {
    globalThis.fetch = mockFetch(() => new Response(JSON.stringify({ status: 'ok', version: '0.1.0' }), { status: 200 }));
    const r = await client.health();
    expect(r.status).toBe('ok');
    expect(r.version).toBe('0.1.0');
  });

  it('GET /api/v1/info', async () => {
    globalThis.fetch = mockFetch(() => new Response(JSON.stringify({ version: '0.1.0', personas: 6, mcp_tools: 5, hub_topics: 3 }), { status: 200 }));
    const r = await client.info();
    expect(r.personas).toBe(6);
    expect(r.mcp_tools).toBe(5);
  });

  it('GET /api/v1/personas returns 6 personas', async () => {
    const data = [
      { id: 'buffett', name: 'Buffett', style: 'quality-value' },
      { id: 'graham',  name: 'Graham',  style: 'deep-value' },
      { id: 'klarman', name: 'Klarman', style: 'distressed-value' },
      { id: 'lynch',   name: 'Lynch',   style: 'growth-at-reasonable-price' },
      { id: 'marks',   name: 'Marks',   style: 'second-level-cycles' },
      { id: 'munger',  name: 'Munger',  style: 'quality-at-any-reasonable-price' },
    ];
    globalThis.fetch = mockFetch(() => new Response(JSON.stringify(data), { status: 200 }));
    const r = await client.personas();
    expect(r.length).toBe(6);
    expect(r.map(p => p.id)).toContain('buffett');
  });

  it('POST /api/v1/personas/:id/score sends body and returns score', async () => {
    let captured: { url: string; body: string } | null = null;
    globalThis.fetch = mockFetch(async (req) => {
      captured = { url: req.url, body: await req.text() };
      return new Response(JSON.stringify({ persona: 'Buffett', symbol: 'AAPL', score: 75.5, recommendation: 'strong_buy' }), { status: 200 });
    });
    const r = await client.scorePersona('buffett', { stock: { symbol: 'AAPL', pe_ratio: 12, roe: 0.25, debt_to_equity: 0.3, fcf_yield: 0.08, moat_score: 0.9 } });
    expect(captured!.url).toContain('/api/v1/personas/buffett/score');
    expect(JSON.parse(captured!.body).stock.symbol).toBe('AAPL');
    expect(r.recommendation).toBe('strong_buy');
  });

  it('GET /api/v1/topics', async () => {
    globalThis.fetch = mockFetch(() => new Response(JSON.stringify([{ topic: 'market:quote:AAPL', subscriber_count: 1, total_publishes: 5, in_flight: false }]), { status: 200 }));
    const r = await client.topics();
    expect(r[0]!.topic).toBe('market:quote:AAPL');
  });

  it('POST /api/v1/topics/:topic/publish returns null on 204', async () => {
    globalThis.fetch = mockFetch(() => new Response(null, { status: 204 }));
    const r = await client.publishTopic('market:quote:AAPL', { price: 100 });
    expect(r).toBeNull();
  });

  it('GET /api/v1/mcp/tools', async () => {
    globalThis.fetch = mockFetch(() => new Response(JSON.stringify([{ name: 'market_data', description: 'x', input_schema: {} }]), { status: 200 }));
    const r = await client.mcpTools();
    expect(r[0]!.name).toBe('market_data');
  });

  it('throws ApiError on non-2xx', async () => {
    globalThis.fetch = mockFetch(() => new Response('persona not found', { status: 404 }));
    await expect(client.scorePersona('nope', { stock: { symbol: 'X', pe_ratio: 1, roe: 1, debt_to_equity: 1, fcf_yield: 1, moat_score: 1 } }))
      .rejects.toBeInstanceOf(ApiError);
  });
});
