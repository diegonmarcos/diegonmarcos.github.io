import type {
  ApiConfig, Health, Info, Persona, ScoreRequest, ScoreResponse,
  TopicSummary, ToolSpec,
} from './types';

export class ApiClient {
  constructor(private readonly cfg: ApiConfig) {}

  private async get<T>(path: string): Promise<T> {
    const r = await fetch(`${this.cfg.base}${path}`, { headers: { Accept: 'application/json' } });
    if (!r.ok) throw new ApiError(r.status, await r.text().catch(() => r.statusText), path);
    return r.json() as Promise<T>;
  }

  private async post<T>(path: string, body: unknown): Promise<T | null> {
    const r = await fetch(`${this.cfg.base}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(body),
    });
    if (!r.ok) throw new ApiError(r.status, await r.text().catch(() => r.statusText), path);
    if (r.status === 204) return null;
    return r.json() as Promise<T>;
  }

  health(): Promise<Health>                 { return this.get('/health'); }
  info():   Promise<Info>                   { return this.get('/api/v1/info'); }
  personas(): Promise<Persona[]>            { return this.get('/api/v1/personas'); }
  scorePersona(id: string, body: ScoreRequest): Promise<ScoreResponse> {
    return this.post<ScoreResponse>(`/api/v1/personas/${encodeURIComponent(id)}/score`, body) as Promise<ScoreResponse>;
  }
  topics(): Promise<TopicSummary[]>         { return this.get('/api/v1/topics'); }
  publishTopic(topic: string, value: unknown): Promise<null> {
    return this.post<null>(`/api/v1/topics/${encodeURIComponent(topic)}/publish`, value);
  }
  peekTopic(topic: string): Promise<unknown> {
    return this.get(`/api/v1/topics/${encodeURIComponent(topic)}/peek`);
  }
  mcpTools(): Promise<ToolSpec[]>           { return this.get('/api/v1/mcp/tools'); }
  callMcpTool(name: string, args: unknown): Promise<unknown> {
    return this.post(`/api/v1/mcp/tools/${encodeURIComponent(name)}/call`, args);
  }
}

export class ApiError extends Error {
  constructor(public status: number, public body: string, public path: string) {
    super(`fin-api ${status} ${path}: ${body}`);
  }
}
