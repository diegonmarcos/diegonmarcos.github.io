import type { WsClientMessage, WsServerMessage } from './types';

export type WsState = 'connecting' | 'open' | 'closed' | 'reconnecting';
export type WsListener = (msg: WsServerMessage) => void;
export type WsStateListener = (s: WsState) => void;

export class WsClient {
  private socket?: WebSocket;
  private state: WsState = 'closed';
  private msgListeners = new Set<WsListener>();
  private stateListeners = new Set<WsStateListener>();
  private patterns = new Set<string>();
  private heartbeat?: ReturnType<typeof setInterval>;
  private reconnectTimer?: ReturnType<typeof setTimeout>;
  private retry = 0;
  private explicitlyClosed = false;

  constructor(private readonly url: string, private readonly heartbeatMs = 25_000) {}

  open(): void {
    this.explicitlyClosed = false;
    this.connect();
  }

  close(): void {
    this.explicitlyClosed = true;
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer);
    if (this.heartbeat) clearInterval(this.heartbeat);
    this.socket?.close();
    this.setState('closed');
  }

  send(msg: WsClientMessage): void {
    if (msg.op === 'subscribe') this.patterns.add(msg.pattern);
    if (this.socket?.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(msg));
    }
  }

  subscribe(pattern: string): void { this.send({ op: 'subscribe', pattern }); }
  publish(topic: string, value: unknown): void { this.send({ op: 'publish', topic, value }); }
  ping(): void { this.send({ op: 'ping' }); }

  onMessage(l: WsListener): () => void {
    this.msgListeners.add(l);
    return () => this.msgListeners.delete(l);
  }
  onStateChange(l: WsStateListener): () => void {
    this.stateListeners.add(l);
    l(this.state);
    return () => this.stateListeners.delete(l);
  }

  getState(): WsState { return this.state; }

  private connect(): void {
    this.setState(this.retry === 0 ? 'connecting' : 'reconnecting');
    try {
      this.socket = new WebSocket(this.url);
    } catch {
      this.scheduleReconnect();
      return;
    }
    this.socket.onopen = () => {
      this.retry = 0;
      this.setState('open');
      for (const p of this.patterns) this.send({ op: 'subscribe', pattern: p });
      this.heartbeat = setInterval(() => this.ping(), this.heartbeatMs);
    };
    this.socket.onmessage = (ev) => {
      let parsed: WsServerMessage;
      try { parsed = JSON.parse(ev.data) as WsServerMessage; } catch { return; }
      for (const l of this.msgListeners) l(parsed);
    };
    this.socket.onclose = () => {
      if (this.heartbeat) clearInterval(this.heartbeat);
      if (this.explicitlyClosed) { this.setState('closed'); return; }
      this.scheduleReconnect();
    };
    this.socket.onerror = () => { /* close handler does the work */ };
  }

  private scheduleReconnect(): void {
    this.setState('reconnecting');
    const delay = Math.min(30_000, 500 * 2 ** Math.min(this.retry, 6));
    this.retry++;
    this.reconnectTimer = setTimeout(() => this.connect(), delay);
  }

  private setState(s: WsState): void {
    if (s === this.state) return;
    this.state = s;
    for (const l of this.stateListeners) l(s);
  }
}
