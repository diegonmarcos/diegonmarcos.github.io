import { el, clear } from '../shell/dom';
import { renderKpiGrid } from '../widgets/kpi';
import { renderDataTable, type Column } from '../widgets/data-table';
import { renderLineChart } from '../charts/line';
import { renderLoadingOverlay, renderError } from '../widgets/loading-overlay';
import { NEWS_CFG } from './_news-shared';
import type { ScreenContext } from './registry';

interface ToneEntry { url: string; title: string; tone: number; domain: string; }
interface ToneResponse { query: string; count: number; tone: ToneEntry[]; }
interface TimelinePoint { date: string; value: number; }
interface TimelineResponse { query: string; points: number; timeline: TimelinePoint[]; }

const TONE_COLUMNS: Column[] = [
  { key: 'tone',   label: 'Tone',   numeric: true, signed: true,
    format: (v) => (v as number).toFixed(2) },
  { key: 'title',  label: 'Headline' },
  { key: 'domain', label: 'Source' },
];

// News Sentiment — wires GDELT /tone (sentiment per article) + /timeline
// (article volume per date) into one report. Replaces the placeholder
// SpecScreen for `news-sentiment`.
export function renderNewsSentiment(host: HTMLElement, _ctx: ScreenContext): void {
  let activeTopic = NEWS_CFG.topics[0]!.topic;

  host.appendChild(el('h2', {}, ['News Sentiment']));
  host.appendChild(el('p', { class: 't-muted u-mb-s' }, [
    `Live: GDELT /tone + /timeline via ${NEWS_CFG.api_base} — Adanos-style sentiment aggregator across ${NEWS_CFG.topics.length} topics.`,
  ]));

  const tabs = el('nav', { class: 'tabs', role: 'tablist' });
  host.appendChild(tabs);
  const body = el('div');
  host.appendChild(body);

  const refreshTopicBar = () => {
    clear(tabs);
    for (const t of NEWS_CFG.topics) {
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
    const loading = renderLoadingOverlay(`FETCHING ${activeTopic.toUpperCase()} SENTIMENT…`);
    body.appendChild(loading);
    try {
      const [toneRes, timelineRes] = await Promise.all([
        fetch(`${NEWS_CFG.api_base}/tone?q=${encodeURIComponent(activeTopic)}`,     { headers: { Accept: 'application/json' } }),
        fetch(`${NEWS_CFG.api_base}/timeline?q=${encodeURIComponent(activeTopic)}`, { headers: { Accept: 'application/json' } }),
      ]);
      if (!toneRes.ok)     throw new Error(`tone HTTP ${toneRes.status}`);
      if (!timelineRes.ok) throw new Error(`timeline HTTP ${timelineRes.status}`);
      const tone = await toneRes.json() as ToneResponse;
      const timeline = await timelineRes.json() as TimelineResponse;
      loading.remove();

      // ---- aggregates ----
      const tones = (tone.tone ?? []).map(t => t.tone).filter(Number.isFinite);
      const n = tones.length;
      const avg = n > 0 ? tones.reduce((s, x) => s + x, 0) / n : 0;
      const variance = n > 1 ? tones.reduce((s, x) => s + (x - avg) ** 2, 0) / (n - 1) : 0;
      const stddev = Math.sqrt(variance);
      const positive = tones.filter(t => t >  1).length;
      const negative = tones.filter(t => t < -1).length;
      const neutral  = n - positive - negative;
      const polarity = n > 0 ? ((positive - negative) / n) * 100 : 0;

      body.appendChild(renderKpiGrid([
        { label: 'TOPIC',       value: activeTopic.toUpperCase(), tone: 'info' },
        { label: 'ARTICLES',    value: String(tone.count) },
        { label: 'AVG TONE',    value: avg.toFixed(2),
          tone: avg > 0.5 ? 'pos' : avg < -0.5 ? 'neg' : 'neutral',
          hint: `σ=${stddev.toFixed(2)}` },
        { label: 'POLARITY',    value: `${polarity > 0 ? '+' : ''}${polarity.toFixed(0)}%`,
          tone: polarity > 10 ? 'pos' : polarity < -10 ? 'neg' : 'neutral',
          hint: `${positive} pos · ${neutral} neu · ${negative} neg` },
      ]));

      // ---- timeline (article volume by date) ----
      if (timeline.timeline.length > 0) {
        const points = timeline.timeline.map((p, i) => ({ x: i, y: p.value }));
        body.appendChild(el('div', { class: 'mkt-section__title u-mt' }, [`ARTICLE VOLUME — last ${timeline.points} buckets`]));
        body.appendChild(renderLineChart({
          points,
          label: `${activeTopic} — volume timeline`,
        }));
      }

      // ---- top positive + top negative ----
      const sorted = [...(tone.tone ?? [])].sort((a, b) => b.tone - a.tone);
      const top = sorted.slice(0, 10);
      const bottom = sorted.slice(-10).reverse();

      body.appendChild(el('div', { class: 'mkt-section__title u-mt' }, ['MOST POSITIVE — TOP 10']));
      body.appendChild(decorateClickable(renderDataTable({
        columns: TONE_COLUMNS,
        rows: top as unknown as Array<Record<string, unknown>>,
        sort: { key: 'tone', dir: 'desc' },
      }), top));

      body.appendChild(el('div', { class: 'mkt-section__title u-mt' }, ['MOST NEGATIVE — BOTTOM 10']));
      body.appendChild(decorateClickable(renderDataTable({
        columns: TONE_COLUMNS,
        rows: bottom as unknown as Array<Record<string, unknown>>,
        sort: { key: 'tone', dir: 'asc' },
      }), bottom));

      if (n === 0) {
        body.appendChild(el('p', { class: 't-amber u-mt' }, [
          '(no tone records — GDELT cache empty for this topic)',
        ]));
      }
    } catch (err: unknown) {
      loading.remove();
      body.appendChild(renderError(`GDELT fetch failed — ${(err as Error).message}`));
    }
  };

  refreshTopicBar();
  void load();
}

function decorateClickable(table: HTMLElement, rows: ToneEntry[]): HTMLElement {
  const trList = table.querySelectorAll('tbody tr');
  trList.forEach((tr, i) => {
    (tr as HTMLElement).style.cursor = 'pointer';
    tr.addEventListener('click', () => {
      const r = rows[i];
      if (r?.url) window.open(r.url, '_blank', 'noopener');
    });
    const r = rows[i];
    const toneCell = tr.children[0] as HTMLElement | undefined;
    if (toneCell && r) {
      if (r.tone >  1) toneCell.classList.add('t-pos');
      else if (r.tone < -1) toneCell.classList.add('t-neg');
      else toneCell.classList.add('t-muted');
    }
  });
  return table;
}
