import type { BarChartData, DonutSegment, HeartRateZones, LineSeries } from './types';
import {
  setupCanvas, HR_ZONE_COLORS, HEATMAP_COLORS,
  FONT, FONT_MONO, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_MUTED, TEXT_DIM,
  GRID_COLOR, BG_CARD, BG_ELEVATED, BORDER_COLOR, GOLD, GOLD_BRIGHT,
} from './utils';

function clearCanvas(ctx: CanvasRenderingContext2D, w: number, h: number): void {
  ctx.fillStyle = BG_CARD;
  ctx.fillRect(0, 0, w, h);
}

// ─── BAR CHART ──────────────────────────────────────────────────────────────

export function renderBarChart(canvas: HTMLCanvasElement, data: BarChartData[]): void {
  if (data.length === 0) return;
  const ctx = setupCanvas(canvas);
  const rect = canvas.getBoundingClientRect();
  const w = rect.width;
  const h = rect.height;
  clearCanvas(ctx, w, h);

  const padding = { top: 24, right: 24, bottom: 44, left: 56 };
  const chartW = w - padding.left - padding.right;
  const chartH = h - padding.top - padding.bottom;
  const maxVal = Math.max(...data.map(d => d.value), 1);
  const barWidth = Math.min(36, (chartW / data.length) * 0.55);
  const gap = (chartW - barWidth * data.length) / (data.length + 1);

  // Grid lines — subtle
  const gridSteps = 4;
  for (let i = 0; i <= gridSteps; i++) {
    const y = padding.top + (chartH / gridSteps) * i;
    ctx.strokeStyle = GRID_COLOR;
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 4]);
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(w - padding.right, y);
    ctx.stroke();
    ctx.setLineDash([]);

    const val = Math.round(maxVal * (1 - i / gridSteps));
    ctx.fillStyle = TEXT_DIM;
    ctx.font = `500 10px ${FONT_MONO}`;
    ctx.textAlign = 'right';
    ctx.fillText(`${val}`, padding.left - 10, y + 3);
  }

  // Bars with gradient fills
  data.forEach((d, i) => {
    const x = padding.left + gap + i * (barWidth + gap);
    const barH = (d.value / maxVal) * chartH;
    const y = padding.top + chartH - barH;
    const radius = Math.min(5, barWidth / 3);

    // Bar gradient
    const grad = ctx.createLinearGradient(x, y, x, padding.top + chartH);
    grad.addColorStop(0, d.color);
    grad.addColorStop(1, d.color + '40');

    ctx.fillStyle = grad;
    roundedRect(ctx, x, y, barWidth, barH, radius, true);
    ctx.fill();

    // Glow effect at top
    ctx.shadowColor = d.color;
    ctx.shadowBlur = 8;
    ctx.fillStyle = d.color;
    ctx.fillRect(x, y, barWidth, 2);
    ctx.shadowBlur = 0;

    // X-axis labels
    ctx.fillStyle = TEXT_DIM;
    ctx.font = `500 9px ${FONT}`;
    ctx.textAlign = 'center';
    ctx.fillText(d.label, x + barWidth / 2, h - padding.bottom + 18);
  });

  // Y-axis unit
  ctx.save();
  ctx.translate(14, padding.top + chartH / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillStyle = TEXT_DIM;
  ctx.font = `600 8px ${FONT}`;
  ctx.letterSpacing = '0.1em';
  ctx.textAlign = 'center';
  ctx.fillText('MINUTES', 0, 0);
  ctx.restore();
}

// ─── DONUT CHART ────────────────────────────────────────────────────────────

export function renderDonutChart(canvas: HTMLCanvasElement, segments: DonutSegment[]): void {
  const ctx = setupCanvas(canvas);
  const rect = canvas.getBoundingClientRect();
  const w = rect.width;
  const h = rect.height;
  clearCanvas(ctx, w, h);

  const total = segments.reduce((s, seg) => s + seg.value, 0);
  if (total === 0) return;

  const cx = w / 2;
  const cy = h / 2 - 16;
  const outerR = Math.min(cx, cy) - 16;
  const innerR = outerR * 0.65;
  const segGap = 0.03; // Radians gap between segments

  let startAngle = -Math.PI / 2;

  segments.forEach(seg => {
    const sliceAngle = (seg.value / total) * Math.PI * 2 - segGap;
    if (sliceAngle <= 0) return;

    // Segment shadow/glow
    ctx.shadowColor = seg.color;
    ctx.shadowBlur = 12;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

    ctx.beginPath();
    ctx.arc(cx, cy, outerR, startAngle, startAngle + sliceAngle);
    ctx.arc(cx, cy, innerR, startAngle + sliceAngle, startAngle, true);
    ctx.closePath();
    ctx.fillStyle = seg.color;
    ctx.fill();

    ctx.shadowBlur = 0;
    startAngle += sliceAngle + segGap;
  });

  // Center content
  ctx.fillStyle = TEXT_PRIMARY;
  ctx.font = `700 28px ${FONT_MONO}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(`${total}`, cx, cy - 4);

  ctx.fillStyle = TEXT_DIM;
  ctx.font = `600 8px ${FONT}`;
  ctx.letterSpacing = '0.12em';
  ctx.fillText('ACTIVITIES', cx, cy + 16);

  // Legend
  const legendY = cy + outerR + 24;
  const legendW = Math.min(w - 20, segments.length * 90);
  const startX = (w - legendW) / 2;

  segments.forEach((seg, i) => {
    const lx = startX + (legendW / segments.length) * i;
    const pct = Math.round((seg.value / total) * 100);

    // Color dot
    ctx.beginPath();
    ctx.arc(lx + 5, legendY + 4, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = seg.color;
    ctx.fill();

    ctx.fillStyle = TEXT_MUTED;
    ctx.font = `500 9px ${FONT}`;
    ctx.textAlign = 'left';
    ctx.fillText(`${seg.label}`, lx + 14, legendY + 4);

    ctx.fillStyle = TEXT_DIM;
    ctx.font = `500 9px ${FONT_MONO}`;
    ctx.fillText(`${pct}%`, lx + 14, legendY + 18);
  });
}

// ─── LINE CHART ─────────────────────────────────────────────────────────────

export function renderLineChart(canvas: HTMLCanvasElement, series: LineSeries[]): void {
  const ctx = setupCanvas(canvas);
  const rect = canvas.getBoundingClientRect();
  const w = rect.width;
  const h = rect.height;
  clearCanvas(ctx, w, h);

  if (series.length === 0 || series.every(s => s.points.length === 0)) return;

  const padding = { top: 24, right: 24, bottom: 52, left: 56 };
  const chartW = w - padding.left - padding.right;
  const chartH = h - padding.top - padding.bottom;

  const allPoints = series.flatMap(s => s.points);
  const minX = Math.min(...allPoints.map(p => p.x));
  const maxX = Math.max(...allPoints.map(p => p.x));
  const minY = Math.min(...allPoints.map(p => p.y)) * 0.9;
  const maxY = Math.max(...allPoints.map(p => p.y)) * 1.1;
  const rangeX = maxX - minX || 1;
  const rangeY = maxY - minY || 1;

  const toX = (x: number): number => padding.left + ((x - minX) / rangeX) * chartW;
  const toY = (y: number): number => padding.top + chartH - ((y - minY) / rangeY) * chartH;

  // Grid
  ctx.setLineDash([2, 4]);
  for (let i = 0; i <= 4; i++) {
    const y = padding.top + (chartH / 4) * i;
    ctx.strokeStyle = GRID_COLOR;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(w - padding.right, y);
    ctx.stroke();

    const val = maxY - (i / 4) * rangeY;
    ctx.fillStyle = TEXT_DIM;
    ctx.font = `500 10px ${FONT_MONO}`;
    ctx.textAlign = 'right';
    ctx.fillText(val.toFixed(1), padding.left - 10, y + 3);
  }
  ctx.setLineDash([]);

  // Series
  series.forEach(s => {
    if (s.points.length < 2) return;
    const pts = [...s.points].sort((a, b) => a.x - b.x);

    // Gradient fill under curve
    const gradient = ctx.createLinearGradient(0, padding.top, 0, padding.top + chartH);
    gradient.addColorStop(0, s.color + '25');
    gradient.addColorStop(0.6, s.color + '08');
    gradient.addColorStop(1, s.color + '00');

    // Build path
    const path = new Path2D();
    path.moveTo(toX(pts[0].x), toY(pts[0].y));
    for (let i = 1; i < pts.length; i++) {
      const cpx = (toX(pts[i - 1].x) + toX(pts[i].x)) / 2;
      path.bezierCurveTo(cpx, toY(pts[i - 1].y), cpx, toY(pts[i].y), toX(pts[i].x), toY(pts[i].y));
    }

    // Fill
    const fillPath = new Path2D();
    fillPath.moveTo(toX(pts[0].x), toY(pts[0].y));
    for (let i = 1; i < pts.length; i++) {
      const cpx = (toX(pts[i - 1].x) + toX(pts[i].x)) / 2;
      fillPath.bezierCurveTo(cpx, toY(pts[i - 1].y), cpx, toY(pts[i].y), toX(pts[i].x), toY(pts[i].y));
    }
    fillPath.lineTo(toX(pts[pts.length - 1].x), padding.top + chartH);
    fillPath.lineTo(toX(pts[0].x), padding.top + chartH);
    fillPath.closePath();
    ctx.fillStyle = gradient;
    ctx.fill(fillPath);

    // Line with glow
    ctx.shadowColor = s.color;
    ctx.shadowBlur = 6;
    ctx.strokeStyle = s.color;
    ctx.lineWidth = 2.5;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.stroke(path);
    ctx.shadowBlur = 0;

    // Data points
    pts.forEach(p => {
      ctx.fillStyle = BG_CARD;
      ctx.beginPath();
      ctx.arc(toX(p.x), toY(p.y), 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = s.color;
      ctx.lineWidth = 2;
      ctx.stroke();
    });
  });

  // X-axis labels
  const pts0 = [...(series[0]?.points ?? [])].sort((a, b) => a.x - b.x);
  const step = Math.max(1, Math.floor(pts0.length / 8));
  pts0.forEach((p, i) => {
    if (i % step !== 0) return;
    ctx.fillStyle = TEXT_DIM;
    ctx.font = `500 9px ${FONT}`;
    ctx.textAlign = 'center';
    ctx.fillText(p.label ?? '', toX(p.x), h - padding.bottom + 18);
  });

  // Legend
  series.forEach((s, i) => {
    const lx = padding.left + i * 140;
    const ly = h - 10;
    ctx.beginPath();
    ctx.arc(lx + 4, ly - 2, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = s.color;
    ctx.fill();
    ctx.fillStyle = TEXT_MUTED;
    ctx.font = `500 9px ${FONT}`;
    ctx.textAlign = 'left';
    ctx.fillText(s.label, lx + 14, ly);
  });
}

// ─── HR ZONE CHART ──────────────────────────────────────────────────────────

export function renderHRZoneChart(canvas: HTMLCanvasElement, zones: HeartRateZones): void {
  const ctx = setupCanvas(canvas);
  const rect = canvas.getBoundingClientRect();
  const w = rect.width;
  const h = rect.height;
  clearCanvas(ctx, w, h);

  const zoneData = [
    { label: 'Z1 RECOVERY', value: zones.zone1, color: HR_ZONE_COLORS[0] },
    { label: 'Z2 EASY', value: zones.zone2, color: HR_ZONE_COLORS[1] },
    { label: 'Z3 AEROBIC', value: zones.zone3, color: HR_ZONE_COLORS[2] },
    { label: 'Z4 THRESHOLD', value: zones.zone4, color: HR_ZONE_COLORS[3] },
    { label: 'Z5 ANAEROBIC', value: zones.zone5, color: HR_ZONE_COLORS[4] },
  ];

  const total = zoneData.reduce((s, z) => s + z.value, 0);
  if (total === 0) return;

  const padding = { top: 16, left: 120, right: 70, bottom: 16 };
  const barH = 24;
  const gap = 14;
  const maxBarW = w - padding.left - padding.right;

  zoneData.forEach((zone, i) => {
    const y = padding.top + i * (barH + gap);
    const barW = (zone.value / total) * maxBarW;
    const pct = Math.round((zone.value / total) * 100);

    // Label
    ctx.fillStyle = TEXT_DIM;
    ctx.font = `600 8px ${FONT}`;
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    ctx.fillText(zone.label, padding.left - 14, y + barH / 2);

    // Bar background
    ctx.fillStyle = BG_ELEVATED;
    roundedRect(ctx, padding.left, y, maxBarW, barH, 4);
    ctx.fill();

    // Bar fill with gradient
    if (barW > 0) {
      const grad = ctx.createLinearGradient(padding.left, y, padding.left + barW, y);
      grad.addColorStop(0, zone.color + '90');
      grad.addColorStop(1, zone.color);
      ctx.fillStyle = grad;
      roundedRect(ctx, padding.left, y, Math.max(barW, 8), barH, 4);
      ctx.fill();

      // Glow at tip
      ctx.shadowColor = zone.color;
      ctx.shadowBlur = 8;
      ctx.fillStyle = zone.color;
      ctx.fillRect(padding.left + barW - 2, y, 2, barH);
      ctx.shadowBlur = 0;
    }

    // Percentage
    ctx.fillStyle = TEXT_SECONDARY;
    ctx.font = `600 11px ${FONT_MONO}`;
    ctx.textAlign = 'left';
    ctx.fillText(`${pct}%`, padding.left + maxBarW + 10, y + barH / 2 + 1);
  });
}

// ─── CALENDAR HEATMAP ───────────────────────────────────────────────────────

export function renderCalendarHeatmap(canvas: HTMLCanvasElement, data: Map<string, number>, startDate: Date): void {
  const ctx = setupCanvas(canvas);
  const rect = canvas.getBoundingClientRect();
  const w = rect.width;
  const h = rect.height;
  clearCanvas(ctx, w, h);

  const cellSize = 13;
  const cellGap = 3;
  const leftPad = 32;
  const topPad = 24;
  const dayLabels = ['M', '', 'W', '', 'F', '', 'S'];

  // Day labels
  ctx.fillStyle = TEXT_DIM;
  ctx.font = `500 8px ${FONT}`;
  ctx.textAlign = 'right';
  dayLabels.forEach((label, i) => {
    if (label) {
      ctx.fillText(label, leftPad - 6, topPad + i * (cellSize + cellGap) + cellSize - 3);
    }
  });

  const weekStart = new Date(startDate);
  const dayOfWeek = weekStart.getDay();
  const mondayOffset = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  weekStart.setDate(weekStart.getDate() - mondayOffset);

  const today = new Date();
  let col = 0;
  let lastMonth = -1;

  const cursor = new Date(weekStart);
  while (cursor <= today) {
    const row = (cursor.getDay() + 6) % 7;
    const dateStr = cursor.toISOString().split('T')[0];
    const level = data.get(dateStr) ?? 0;
    const x = leftPad + col * (cellSize + cellGap);
    const y = topPad + row * (cellSize + cellGap);

    // Month label
    if (cursor.getMonth() !== lastMonth && cursor.getDate() <= 7) {
      ctx.fillStyle = TEXT_DIM;
      ctx.font = `600 8px ${FONT}`;
      ctx.textAlign = 'left';
      ctx.fillText(cursor.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(), x, topPad - 8);
      lastMonth = cursor.getMonth();
    }

    // Cell with subtle glow for high activity
    if (level >= 3) {
      ctx.shadowColor = GOLD;
      ctx.shadowBlur = 4;
    }
    ctx.fillStyle = HEATMAP_COLORS[level];
    roundedRect(ctx, x, y, cellSize, cellSize, 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Border for empty cells
    if (level === 0) {
      ctx.strokeStyle = BORDER_COLOR;
      ctx.lineWidth = 0.5;
      roundedRect(ctx, x, y, cellSize, cellSize, 2);
      ctx.stroke();
    }

    if (row === 6) col++;
    cursor.setDate(cursor.getDate() + 1);
  }
}

// ─── HELPER ─────────────────────────────────────────────────────────────────

function roundedRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number, topOnly = false): void {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  if (topOnly) {
    ctx.lineTo(x + w, y + h);
    ctx.lineTo(x, y + h);
  } else {
    ctx.lineTo(x + w, y + h - r);
    ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
    ctx.lineTo(x + r, y + h);
    ctx.arcTo(x, y + h, x, y + h - r, r);
  }
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
}
