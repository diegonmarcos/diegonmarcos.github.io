import { el, clear } from '../shell/dom';
import { renderDataTable, type Column } from '../widgets/data-table';
import { renderKpiGrid } from '../widgets/kpi';
import { renderLoadingOverlay, renderError } from '../widgets/loading-overlay';
import newsCfg from '../data/news-config.json';
import type { ScreenContext } from './registry';

interface Topic { topic: string; label: string; }
interface Cfg { api_base: string; max_articles: number; refresh_ms: number; topics: Topic[]; }
const cfg = newsCfg as Cfg;

interface GdeltArticle {
  url: string; title: string; seendate: string; socialimage: string;
  domain: string; language: string; sourcecountry: string; tone: number;
}
interface ArticlesResponse { query: string; count: number; articles: GdeltArticle[]; }

const ARTICLE_COLUMNS: Column[] = [
  { key: 'when',   label: 'When' },
  { key: 'tone',   label: 'Tone',   numeric: true, signed: true,
    format: (v) => (v as number).toFixed(2) },
  { key: 'title',  label: 'Headline',
    format: (_v, row) => {
      const r = row as { title: string; url: string };
      return `${r.title}`;
    } },
  { key: 'domain', label: 'Source' },
  { key: 'lang',   label: 'Lang' },
];

function fmtDate(seendate: string): string {
  // GDELT seendate format: "20260426T120000Z"
  if (seendate.length < 15) return seendate;
  return `${seendate.slice(0, 4)}-${seendate.slice(4, 6)}-${seendate.slice(6, 8)} ${seendate.slice(9, 11)}:${seendate.slice(11, 13)}`;
}

export function renderNews(host: HTMLElement, _ctx: ScreenContext): void {
  let activeTopic: string = cfg.topics[0]!.topic;
  let timer: ReturnType<typeof setInterval> | null = null;

  host.appendChild(el('h2', {}, ['News']));
  host.appendChild(el('p', { class: 't-muted u-mb-s' }, [`Live: GDELT via ${cfg.api_base} — refresh every ${(cfg.refresh_ms / 1000).toFixed(0)}s`]));

  // Topic filter strip — uses tabs SCSS for amber-underline active state.
  const tabs = el('nav', { class: 'tabs', role: 'tablist' });
  host.appendChild(tabs);
  const body = el('div');
  host.appendChild(body);

  const refreshTopicBar = () => {
    clear(tabs);
    for (const t of cfg.topics) {
      const btn = el<HTMLButtonElement>('button', {
        class: `tabs__btn${t.topic === activeTopic ? ' tabs__btn--active' : ''}`,
        type: 'button',
      }, [t.label.toUpperCase()]);
      btn.addEventListener('click', () => {
        activeTopic = t.topic;
        refreshTopicBar();
        void load();
      });
      tabs.appendChild(btn);
    }
  };

  const load = async () => {
    clear(body);
    const loading = renderLoadingOverlay(`FETCHING ${activeTopic.toUpperCase()}…`);
    body.appendChild(loading);
    try {
      const url = `${cfg.api_base}/articles?q=${encodeURIComponent(activeTopic)}&limit=${cfg.max_articles}`;
      const r = await fetch(url, { headers: { Accept: 'application/json' } });
      if (!r.ok) throw new Error(`GDELT HTTP ${r.status}`);
      const data = await r.json() as ArticlesResponse;
      loading.remove();
      if (!data.articles || data.articles.length === 0) {
        body.appendChild(el('p', { class: 't-amber' }, ['(no articles for this topic)']));
        return;
      }
      const tones = data.articles.map(a => a.tone).filter(Number.isFinite);
      const avgTone = tones.reduce((s, n) => s + n, 0) / Math.max(1, tones.length);
      const positive = tones.filter(t => t >  1).length;
      const negative = tones.filter(t => t < -1).length;
      const neutral  = tones.length - positive - negative;

      body.appendChild(renderKpiGrid([
        { label: 'ARTICLES',     value: String(data.count) },
        { label: 'AVG TONE',     value: avgTone.toFixed(2),
          tone: avgTone > 0.5 ? 'pos' : avgTone < -0.5 ? 'neg' : 'neutral' },
        { label: 'POS / NEU / NEG', value: `${positive} / ${neutral} / ${negative}` },
        { label: 'TOPIC',        value: activeTopic.toUpperCase(), tone: 'info' },
      ]));

      const rows = data.articles.map(a => ({
        when:   fmtDate(a.seendate),
        tone:   a.tone,
        title:  a.title,
        url:    a.url,
        domain: a.domain,
        lang:   a.language,
      }));
      body.appendChild(el('div', { class: 'mkt-section__title u-mt' }, [`${activeTopic.toUpperCase()} — TOP ${data.articles.length}`]));
      const table = renderDataTable({
        columns: ARTICLE_COLUMNS,
        rows: rows as unknown as Array<Record<string, unknown>>,
      });
      // Make every row clickable → opens the article in a new tab.
      const trList = table.querySelectorAll('tbody tr');
      trList.forEach((tr, i) => {
        tr.classList.add('is-clickable');
        (tr as HTMLElement).style.cursor = 'pointer';
        tr.addEventListener('click', () => {
          const r = rows[i];
          if (r?.url) window.open(r.url, '_blank', 'noopener');
        });
      });
      // Color tone cell by sign — leverages perf-cell convention.
      const tdList = table.querySelectorAll('tbody tr');
      tdList.forEach((tr, i) => {
        const r = rows[i];
        const toneCell = tr.children[1] as HTMLElement | undefined;
        if (toneCell && r) {
          if (r.tone >  1) toneCell.classList.add('t-pos');
          else if (r.tone < -1) toneCell.classList.add('t-neg');
          else toneCell.classList.add('t-muted');
        }
      });
      body.appendChild(table);
    } catch (err: unknown) {
      loading.remove();
      body.appendChild(renderError(`GDELT fetch failed — ${(err as Error).message}`));
    }
  };

  // Auto-refresh while screen is mounted. Cleared by the panel mount-cycle
  // when another screen takes over (DOM cleared → timer untouched but
  // harmless; for now we don't have a destroy hook).
  const start = () => {
    if (timer) clearInterval(timer);
    timer = setInterval(() => void load(), cfg.refresh_ms);
  };

  refreshTopicBar();
  void load().then(start);
}
