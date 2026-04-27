import { describe, it, expect } from 'vitest';
import news from '../src/typescript/data/news-config.json';

interface Topic { topic: string; label: string; }
const cfg = news as { api_base: string; max_articles: number; refresh_ms: number; topics: Topic[] };

describe('news-config.json — full GDELT sections', () => {
  it('points at api.diegonmarcos.com/news (cloud-data declared base_url)', () => {
    expect(cfg.api_base).toBe('https://api.diegonmarcos.com/news');
  });

  it('exposes at least 25 topics (full GDELT-section coverage)', () => {
    expect(cfg.topics.length).toBeGreaterThanOrEqual(25);
  });

  it('topic ids are unique', () => {
    const seen = new Set<string>();
    for (const t of cfg.topics) {
      expect(seen.has(t.topic), `dup topic ${t.topic}`).toBe(false);
      seen.add(t.topic);
    }
  });

  it('every topic has a non-empty label', () => {
    for (const t of cfg.topics) {
      expect(t.label, `topic ${t.topic} missing label`).toBeTruthy();
    }
  });

  it('includes the canonical macro/markets/tech/geo/energy/health topics', () => {
    const ids = new Set(cfg.topics.map(t => t.topic));
    for (const id of [
      'economy', 'finance markets', 'central bank', 'mergers acquisitions',
      'technology', 'artificial intelligence', 'geopolitics', 'energy',
      'climate change', 'health',
    ]) {
      expect(ids.has(id), `missing canonical topic "${id}"`).toBe(true);
    }
  });
});
