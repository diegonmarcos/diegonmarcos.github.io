import type { GdeltArticle, TopicSummary } from "./types";

function toneClass(tone: number): string {
  if (tone > 1) return "positive";
  if (tone < -1) return "negative";
  return "neutral";
}

function formatDate(seendate: string): string {
  if (!seendate) return "";
  // GDELT format: "20260408T120000Z" → "2026-04-08 12:00"
  const y = seendate.slice(0, 4);
  const m = seendate.slice(4, 6);
  const d = seendate.slice(6, 8);
  const h = seendate.slice(9, 11);
  const min = seendate.slice(11, 13);
  return `${y}-${m}-${d} ${h}:${min}`;
}

export function renderArticleTable(articles: GdeltArticle[]): string {
  if (articles.length === 0) {
    return '<div class="article-empty">No articles — select a topic or search</div>';
  }

  const rows = articles.map((a) => {
    const tc = toneClass(a.tone);
    return `<tr class="article-row" onclick="window.open('${a.url}','_blank')">
      <td class="article-row__cell article-row__title">${escapeHtml(a.title)}</td>
      <td class="article-row__cell article-row__source">${escapeHtml(a.domain)}</td>
      <td class="article-row__cell article-row__date">${formatDate(a.seendate)}</td>
      <td class="article-row__cell article-row__tone article-row__tone--${tc}">${a.tone.toFixed(1)}</td>
    </tr>`;
  }).join("");

  return `<table class="article-table">
    <thead><tr>
      <th class="article-row__cell">Title</th>
      <th class="article-row__cell">Source</th>
      <th class="article-row__cell">Date</th>
      <th class="article-row__cell">Tone</th>
    </tr></thead>
    <tbody>${rows}</tbody>
  </table>`;
}

export function renderTopicPills(topics: TopicSummary[], active: string): string {
  return topics.map((t) => {
    const cls = t.topic === active ? "topic-pill topic-pill--active" : "topic-pill";
    return `<span class="${cls}" data-topic="${escapeHtml(t.topic)}">${escapeHtml(t.label)}</span>`;
  }).join("");
}

export function renderTopicCards(topics: TopicSummary[]): string {
  if (topics.length === 0) {
    return '<div class="article-empty">Loading topics...</div>';
  }

  return `<div class="topic-grid">${topics.map((t) => {
    const tc = toneClass(t.avgTone);
    return `<div class="topic-card" data-topic="${escapeHtml(t.topic)}">
      <div class="topic-card__label">${escapeHtml(t.label)}</div>
      <div class="topic-card__count">${t.articleCount}</div>
      <div class="topic-card__articles">articles</div>
      <div class="topic-card__tone topic-card__tone--${tc}">avg tone: ${t.avgTone.toFixed(2)}</div>
    </div>`;
  }).join("")}</div>`;
}

function escapeHtml(str: string): string {
  const el = document.createElement("span");
  el.textContent = str;
  return el.innerHTML;
}
