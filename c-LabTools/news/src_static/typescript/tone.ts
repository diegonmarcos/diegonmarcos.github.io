import type { ToneEntry } from "./types";

export function renderToneChart(container: HTMLElement, entries: ToneEntry[]): void {
  if (entries.length === 0) {
    container.innerHTML = '<div class="tone-empty">No sentiment data</div>';
    return;
  }

  // Sort by absolute tone (most extreme first)
  const sorted = [...entries].sort((a, b) => Math.abs(b.tone) - Math.abs(a.tone)).slice(0, 30);
  const maxAbsTone = Math.max(...sorted.map((e) => Math.abs(e.tone)), 1);

  const bars = sorted.map((entry) => {
    const pct = (Math.abs(entry.tone) / maxAbsTone) * 50; // 50% = half the track
    const cls = entry.tone > 1 ? "positive" : entry.tone < -1 ? "negative" : "neutral";
    const fillCls = entry.tone >= 0 ? "positive" : "negative";
    const label = entry.domain || entry.title.slice(0, 20);

    return `<div class="tone-bar">
      <span class="tone-bar__label">${escapeHtml(label)}</span>
      <div class="tone-bar__track">
        <div class="tone-bar__center"></div>
        <div class="tone-bar__fill tone-bar__fill--${fillCls}" style="width:${pct.toFixed(1)}%"></div>
      </div>
      <span class="tone-bar__value tone-bar__value--${cls}">${entry.tone.toFixed(1)}</span>
    </div>`;
  }).join("");

  container.innerHTML = `<div class="tone-bars">${bars}</div>`;
}

function escapeHtml(str: string): string {
  const el = document.createElement("span");
  el.textContent = str;
  return el.innerHTML;
}
