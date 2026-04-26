// Wire-level types for the fin-api REST + WebSocket surface.
// Source of truth: ~/git/cloud/a_solutions/ac-fin_fin-api/src/code/crates/server/src/

export type ISO = string;

export interface Health { status: 'ok' | string; version: string; }

export interface Info {
  version: string;
  personas: number;
  mcp_tools: number;
  hub_topics: number;
}

export interface Persona { id: string; name: string; style: string; }

export interface StockMetrics {
  symbol: string;
  pe_ratio: number;
  roe: number;
  debt_to_equity: number;
  fcf_yield: number;
  moat_score: number;
}

export interface ScoreRequest { stock: StockMetrics; }
export interface ScoreResponse {
  persona: string;
  symbol: string;
  score: number;
  recommendation: 'strong_buy' | 'buy' | 'hold' | 'reduce' | 'sell';
}

export interface TopicSummary {
  topic: string;
  subscriber_count: number;
  total_publishes: number;
  in_flight: boolean;
}

export interface ToolSpec {
  name: string;
  description: string;
  input_schema: Record<string, unknown>;
}

export type WsClientMessage =
  | { op: 'subscribe'; pattern: string }
  | { op: 'publish';   topic: string; value: unknown }
  | { op: 'ping' };

export type WsServerMessage =
  | { event: 'subscribed'; pattern: string }
  | { event: 'publish'; topic: string; value: unknown }
  | { event: 'pong' }
  | { event: 'error'; message: string };

export interface ApiConfig { base: string; ws: string; }
