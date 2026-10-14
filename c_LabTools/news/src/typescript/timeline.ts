import type { TimelinePoint } from "./types";

const PADDING = { top: 10, right: 10, bottom: 20, left: 40 };

export function renderTimeline(container: HTMLElement, points: TimelinePoint[]): void {
  if (points.length === 0) {
    container.innerHTML = '<div class="timeline-empty">No timeline data</div>';
    return;
  }

  const rect = container.getBoundingClientRect();
  const w = rect.width || 400;
  const h = rect.height || 200;
  const plotW = w - PADDING.left - PADDING.right;
  const plotH = h - PADDING.top - PADDING.bottom;

  const values = points.map((p) => p.value);
  const maxVal = Math.max(...values, 1);
  const minVal = Math.min(...values, 0);
  const range = maxVal - minVal || 1;

  const xScale = (i: number): number => PADDING.left + (i / (points.length - 1)) * plotW;
  const yScale = (v: number): number => PADDING.top + plotH - ((v - minVal) / range) * plotH;

  // Build path
  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"}${xScale(i).toFixed(1)},${yScale(p.value).toFixed(1)}`).join(" ");
  const areaPath = linePath + ` L${xScale(points.length - 1).toFixed(1)},${(PADDING.top + plotH).toFixed(1)} L${PADDING.left},${(PADDING.top + plotH).toFixed(1)} Z`;

  // Grid lines
  const gridCount = 4;
  const gridLines = Array.from({ length: gridCount }, (_, i) => {
    const y = PADDING.top + (i / (gridCount - 1)) * plotH;
    const val = maxVal - (i / (gridCount - 1)) * range;
    return `<line class="timeline-grid-line" x1="${PADDING.left}" y1="${y.toFixed(1)}" x2="${(w - PADDING.right).toFixed(1)}" y2="${y.toFixed(1)}"/>
      <text class="timeline-axis-label" x="${(PADDING.left - 4).toFixed(1)}" y="${(y + 3).toFixed(1)}" text-anchor="end">${val.toFixed(0)}</text>`;
  }).join("");

  // X-axis labels (show ~5 labels)
  const labelStep = Math.max(1, Math.floor(points.length / 5));
  const xLabels = points
    .filter((_, i) => i % labelStep === 0)
    .map((p, idx) => {
      const i = idx * labelStep;
      const label = p.date.length >= 8 ? `${p.date.slice(4, 6)}/${p.date.slice(6, 8)}` : p.date;
      return `<text class="timeline-axis-label" x="${xScale(i).toFixed(1)}" y="${(h - 2).toFixed(1)}" text-anchor="middle">${label}</text>`;
    }).join("");

  container.innerHTML = `<svg class="timeline-svg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
    ${gridLines}
    <path class="timeline-area" d="${areaPath}"/>
    <path class="timeline-line" d="${linePath}"/>
    ${xLabels}
  </svg>`;
}
