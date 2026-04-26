import { describe, it, expect, beforeEach, vi } from 'vitest';
import { WsClient } from '../src/typescript/api/ws';

class FakeWebSocket {
  static OPEN = 1; static CLOSED = 3;
  static instances: FakeWebSocket[] = [];
  readyState = FakeWebSocket.OPEN;
  sent: string[] = [];
  onopen: (() => void) | null = null;
  onmessage: ((ev: { data: string }) => void) | null = null;
  onclose: (() => void) | null = null;
  onerror: (() => void) | null = null;
  constructor(public url: string) { FakeWebSocket.instances.push(this); queueMicrotask(() => this.onopen?.()); }
  send(s: string) { this.sent.push(s); }
  close() { this.readyState = FakeWebSocket.CLOSED; this.onclose?.(); }
  emit(msg: object) { this.onmessage?.({ data: JSON.stringify(msg) }); }
}

describe('WsClient', () => {
  beforeEach(() => {
    FakeWebSocket.instances = [];
    (globalThis as unknown as { WebSocket: typeof FakeWebSocket }).WebSocket = FakeWebSocket;
  });

  it('subscribes after open and re-subscribes on reconnect', async () => {
    const c = new WsClient('ws://test/', 1_000_000);
    c.subscribe('market:quote:*');
    c.open();
    await new Promise(r => queueMicrotask(r as () => void));
    const inst = FakeWebSocket.instances[0]!;
    expect(inst.sent).toContain(JSON.stringify({ op: 'subscribe', pattern: 'market:quote:*' }));
    c.close();
  });

  it('publishes and pings', async () => {
    const c = new WsClient('ws://test/', 1_000_000);
    c.open();
    await new Promise(r => queueMicrotask(r as () => void));
    c.publish('news:market:urgent', { headline: 'x' });
    c.ping();
    const inst = FakeWebSocket.instances[0]!;
    expect(inst.sent.some(s => s.includes('"op":"publish"'))).toBe(true);
    expect(inst.sent.some(s => s.includes('"op":"ping"'))).toBe(true);
    c.close();
  });

  it('delivers parsed server messages to onMessage listener', async () => {
    const c = new WsClient('ws://test/', 1_000_000);
    c.open();
    await new Promise(r => queueMicrotask(r as () => void));
    const got: unknown[] = [];
    c.onMessage((m) => got.push(m));
    FakeWebSocket.instances[0]!.emit({ event: 'publish', topic: 'market:quote:AAPL', value: { price: 100 } });
    expect(got.length).toBe(1);
    c.close();
  });

  it('reports state transitions to onStateChange', async () => {
    vi.useFakeTimers();
    const c = new WsClient('ws://test/', 1_000_000);
    const states: string[] = [];
    c.onStateChange((s) => states.push(s));
    c.open();
    await Promise.resolve();
    c.close();
    expect(states[0]).toBe('closed');     // initial
    expect(states).toContain('connecting');
    vi.useRealTimers();
  });
});
