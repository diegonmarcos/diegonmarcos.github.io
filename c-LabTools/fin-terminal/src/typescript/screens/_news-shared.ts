import { el, clear } from '../shell/dom';
import { renderDataTable, type Column } from '../widgets/data-table';
import { renderKpiGrid } from '../widgets/kpi';
import { renderLoadingOverlay, renderError } from '../widgets/loading-overlay';
import newsCfg from '../data/news-config.json';

interface Cfg { api_base: string; max_articles: number; refresh_ms: number; topics: Array<{ topic: string; label: string }>; }
export const NEWS_CFG = newsCfg as Cfg;

interface GdeltArticle {
  url: string; title: string; seendate: string; socialimage: string;
  domain: string; language: string; sourcecountry: string; tone: number;
}
interface ArticlesResponse { query: string; count: number; articles: GdeltArticle[]; }

const ARTICLE_COLUMNS: Column[] = [
  { key: 'when',   label: 'When' },
  { key: 'tone',   label: 'Tone',   numeric: true, signed: true,
    format: (v) => (v as number).toFixed(2) },
  { key: 'title',  label: 'Headline' },
  { key: 'domain', label: 'Source' },
  { key: 'lang',   label: 'Lang' },
];

export function fmtGdeltDate(seendate: string): string {
  if (seendate.length < 15) return seendate;
  return `${seendate.slice(0, 4)}-${seendate.slice(4, 6)}-${seendate.slice(6, 8)} ${seendate.slice(9, 11)}:${seendate.slice(11, 13)}`;
}

// Single-topic article fetch + render. Returns a `dispose()` to stop the
// auto-refresh timer when the screen is replaced. Used by the multi-topic
// news.ts and by topical screens (M&A Deals, etc.) that want a fixed query.
export interface RenderTopicArticlesOptions {
  topic: string;
  /** Topic display label (defaults to UPPER topic). */
  label?: string;
  /** Override fetch limit (defaults to news-config max_articles). */
  limit?: number;
  /** When false, skips the auto-refresh timer (useful in tests). */
  autoRefresh?: boolean;
}

export function renderTopicArticles(host: HTMLElement, opts: RenderTopicArticlesOptions): () => void {
  const limit = opts.limit ?? NEWS_CFG.max_articles;
  const label = (opts.label ?? opts.topic).toUpperCase();
  let timer: ReturnType<typeof setInterval> | null = null;

  const load = async () => {
    clear(host);
    const loading = renderLoadingOverlay(`FETCHING ${label}…`);
    host.appendChild(loading);
    try {
      const url = `${NEWS_CFG.api_base}/articles?q=${encodeURIComponent(opts.topic)}&limit=${limit}`;
      const r = await fetch(url, { headers: { Accept: 'application/json' } });
      if (!r.ok) throw new Error(`GDELT HTTP ${r.status}`);
      const data = await r.json() as ArticlesResponse;
      loading.remove();

      if (!data.articles || data.articles.length === 0) {
        host.appendChild(el('p', { class: 't-amber' }, [`(no articles for "${opts.topic}")`]));
        return;
      }

      const tones = data.articles.map(a => a.tone).filter(Number.isFinite);
      const avgTone = tones.reduce((s, n) => s + n, 0) / Math.max(1, tones.length);
      const positive = tones.filter(t => t >  1).length;
      const negative = tones.filter(t => t < -1).length;
      const neutral  = tones.length - positive - negative;

      host.appendChild(renderKpiGrid([
        { label: 'ARTICLES',         value: String(data.count) },
        { label: 'AVG TONE',         value: avgTone.toFixed(2),
          tone: avgTone > 0.5 ? 'pos' : avgTone < -0.5 ? 'neg' : 'neutral' },
        { label: 'POS / NEU / NEG',  value: `${positive} / ${neutral} / ${negative}` },
        { label: 'TOPIC',            value: label, tone: 'info' },
      ]));

      const rows = data.articles.map(a => ({
        when:   fmtGdeltDate(a.seendate),
        tone:   a.tone,
        title:  a.title,
        url:    a.url,
        domain: a.domain,
        lang:   a.language,
      }));
      host.appendChild(el('div', { class: 'mkt-section__title u-mt' }, [`${label} — TOP ${data.articles.length}`]));
      const table = renderDataTable({
        columns: ARTICLE_COLUMNS,
        rows: rows as unknown as Array<Record<string, unknown>>,
      });
      // Each row is a click-through to the article.
      const trList = table.querySelectorAll('tbody tr');
      trList.forEach((tr, i) => {
        (tr as HTMLElement).style.cursor = 'pointer';
        tr.addEventListener('click', () => {
          const r = rows[i];
          if (r?.url) window.open(r.url, '_blank', 'noopener');
        });
        // Tone cell color-by-sign.
        const r = rows[i];
        const toneCell = tr.children[1] as HTMLElement | undefined;
        if (toneCell && r) {
          if (r.tone >  1) toneCell.classList.add('t-pos');
          else if (r.tone < -1) toneCell.classList.add('t-neg');
          else toneCell.classList.add('t-muted');
        }
      });
      host.appendChild(table);
    } catch (err: unknown) {
      loading.remove();
      host.appendChild(renderError(`GDELT fetch failed — ${(err as Error).message}`));
    }
  };

  void load();
  if (opts.autoRefresh !== false) {
    timer = setInterval(() => void load(), NEWS_CFG.refresh_ms);
  }
  return () => { if (timer) clearInterval(timer); };
}
