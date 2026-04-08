import { API_BASE, MAX_ARTICLES } from "./config";
import type {
  ArticlesResponse,
  TimelineResponse,
  ToneResponse,
  TopicsResponse,
} from "./types";

async function fetchJSON<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export function fetchArticles(query: string, limit: number = MAX_ARTICLES): Promise<ArticlesResponse | null> {
  return fetchJSON<ArticlesResponse>(
    `${API_BASE}/articles?q=${encodeURIComponent(query)}&limit=${limit}`
  );
}

export function fetchTimeline(query: string): Promise<TimelineResponse | null> {
  return fetchJSON<TimelineResponse>(
    `${API_BASE}/timeline?q=${encodeURIComponent(query)}`
  );
}

export function fetchTone(query: string): Promise<ToneResponse | null> {
  return fetchJSON<ToneResponse>(
    `${API_BASE}/tone?q=${encodeURIComponent(query)}`
  );
}

export function fetchTopics(): Promise<TopicsResponse | null> {
  return fetchJSON<TopicsResponse>(`${API_BASE}/topics`);
}
