import { ActivityType, type DateRange, type TimeFrame, type HeartRateZones } from './types';
import {
  getActivities,
  getActivitiesExcludeWalks,
  getWeeklySummaries,
  getPersonalRecords,
  getCalendarData,
} from './database';
import { renderBarChart, renderDonutChart, renderLineChart, renderHRZoneChart, renderCalendarHeatmap } from './charts';
import {
  COLORS,
  ACTIVITY_LABELS,
  FEELING_EMOJI,
  activityIcon,
  formatDuration,
  formatDistance,
  formatPace,
  formatSpeed,
  formatDate,
  formatDateShort,
  formatNumber,
  formatRangeLabel,
  getRangeForTimeframe,
  shiftDate,
  toISODate,
  getWeekStart,
} from './utils';

let currentDate = new Date();
let currentTimeFrame: TimeFrame = 'month';

function getCurrentRange(): DateRange {
  return getRangeForTimeframe(currentDate, currentTimeFrame);
}

function el(tag: string, className?: string, text?: string): HTMLElement {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (text) e.textContent = text;
  return e;
}

// ─── HEADER NAV ─────────────────────────────────────────────────────────────

export function renderNav(): void {
  const nav = document.getElementById('date-nav');
  if (!nav) return;
  nav.innerHTML = '';

  const range = getCurrentRange();

  // Timeframe buttons
  const tfGroup = el('div', 'nav-tf-group');
  (['week', 'month', 'quarter'] as TimeFrame[]).forEach(tf => {
    const btn = el('button', `tf-btn${tf === currentTimeFrame ? ' tf-btn--active' : ''}`, tf.charAt(0).toUpperCase() + tf.slice(1));
    btn.addEventListener('click', () => {
      currentTimeFrame = tf;
      renderAll();
    });
    tfGroup.appendChild(btn);
  });
  nav.appendChild(tfGroup);

  // Prev button
  const prevBtn = el('button', 'nav-btn', '\u2039');
  prevBtn.addEventListener('click', () => {
    currentDate = shiftDate(currentDate, currentTimeFrame, -1);
    renderAll();
  });
  nav.appendChild(prevBtn);

  // Range label
  const label = el('span', 'nav-label', formatRangeLabel(range));
  nav.appendChild(label);

  // Next button
  const nextBtn = el('button', 'nav-btn', '\u203A');
  nextBtn.addEventListener('click', () => {
    currentDate = shiftDate(currentDate, currentTimeFrame, 1);
    renderAll();
  });
  nav.appendChild(nextBtn);
}

// ─── SUMMARY CARDS ──────────────────────────────────────────────────────────

export function renderSummaryCards(): void {
  const container = document.getElementById('summary-cards');
  if (!container) return;
  container.innerHTML = '';

  const range = getCurrentRange();
  const activities = getActivitiesExcludeWalks(range);
  const totalDuration = activities.reduce((s, a) => s + a.durationMinutes, 0);
  const totalDistance = activities.reduce((s, a) => s + a.distanceKm, 0);
  const totalCalories = activities.reduce((s, a) => s + a.calories, 0);
  const totalElevation = activities.reduce((s, a) => s + a.elevationM, 0);

  const cards = [
    { icon: '\u23F1\uFE0F', label: 'Duration', value: formatDuration(totalDuration), mod: 'duration' },
    { icon: '\u{1F4CF}', label: 'Distance', value: formatDistance(totalDistance), mod: 'distance' },
    { icon: '\u{1F3AF}', label: 'Activities', value: `${activities.length}`, mod: 'activities' },
    { icon: '\u{1F525}', label: 'Calories', value: formatNumber(totalCalories), mod: 'calories' },
    { icon: '\u26F0\uFE0F', label: 'Elevation', value: `${formatNumber(totalElevation)} m`, mod: 'elevation' },
  ];

  cards.forEach(c => {
    const card = el('div', `summary-card summary-card--${c.mod} fade-in`);
    card.appendChild(el('div', 'summary-card__icon', c.icon));
    card.appendChild(el('div', 'summary-card__value', c.value));
    card.appendChild(el('div', 'summary-card__label', c.label));
    container.appendChild(card);
  });
}

// ─── CHARTS ─────────────────────────────────────────────────────────────────

export function renderCharts(): void {
  const range = getCurrentRange();

  // Bar chart — weekly volume
  const barCanvas = document.getElementById('chart-bar') as HTMLCanvasElement;
  if (barCanvas) {
    const summaries = getWeeklySummaries(range);
    const barData = summaries.map(ws => ({
      label: formatDateShort(ws.weekStart),
      value: ws.totalDuration,
      color: COLORS[ActivityType.Run],
    }));
    renderBarChart(barCanvas, barData);
  }

  // Donut chart — activity type distribution
  const donutCanvas = document.getElementById('chart-donut') as HTMLCanvasElement;
  if (donutCanvas) {
    const activities = getActivitiesExcludeWalks(range);
    const typeCounts = new Map<ActivityType, number>();
    activities.forEach(a => typeCounts.set(a.type, (typeCounts.get(a.type) ?? 0) + 1));
    const segments = Object.values(ActivityType)
      .filter(t => t !== ActivityType.Walk)
      .map(t => ({
        label: ACTIVITY_LABELS[t],
        value: typeCounts.get(t) ?? 0,
        color: COLORS[t],
      }))
      .filter(s => s.value > 0);
    renderDonutChart(donutCanvas, segments);
  }

  // Line chart — pace trends (running) and speed trends (cycling)
  const lineCanvas = document.getElementById('chart-line') as HTMLCanvasElement;
  if (lineCanvas) {
    const runs = getActivities(range, ActivityType.Run)
      .filter(a => a.avgPaceMinPerKm)
      .sort((a, b) => a.date.localeCompare(b.date));
    const cycles = getActivities(range, ActivityType.Cycle)
      .filter(a => a.avgSpeedKmh)
      .sort((a, b) => a.date.localeCompare(b.date));

    const series = [];
    if (runs.length > 0) {
      series.push({
        label: 'Run Pace (min/km)',
        points: runs.map((r, i) => ({
          x: i,
          y: r.avgPaceMinPerKm!,
          label: formatDateShort(r.date),
        })),
        color: COLORS[ActivityType.Run],
      });
    }
    if (cycles.length > 0) {
      series.push({
        label: 'Cycle Speed (km/h)',
        points: cycles.map((c, i) => ({
          x: i,
          y: c.avgSpeedKmh!,
          label: formatDateShort(c.date),
        })),
        color: COLORS[ActivityType.Cycle],
      });
    }
    renderLineChart(lineCanvas, series);
  }

  // HR Zone chart — aggregated across all activities in range
  const zonesCanvas = document.getElementById('chart-zones') as HTMLCanvasElement;
  if (zonesCanvas) {
    const activities = getActivitiesExcludeWalks(range);
    const aggregated: HeartRateZones = { zone1: 0, zone2: 0, zone3: 0, zone4: 0, zone5: 0 };
    activities.forEach(a => {
      aggregated.zone1 += a.hrZones.zone1;
      aggregated.zone2 += a.hrZones.zone2;
      aggregated.zone3 += a.hrZones.zone3;
      aggregated.zone4 += a.hrZones.zone4;
      aggregated.zone5 += a.hrZones.zone5;
    });
    renderHRZoneChart(zonesCanvas, aggregated);
  }

  // Calendar heatmap
  const calCanvas = document.getElementById('calendar-heatmap') as HTMLCanvasElement;
  if (calCanvas) {
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
    const fullRange: DateRange = { start: threeMonthsAgo, end: new Date() };
    const calData = getCalendarData(fullRange);
    renderCalendarHeatmap(calCanvas, calData, threeMonthsAgo);
  }
}

// ─── ACTIVITY FEED ──────────────────────────────────────────────────────────

export function renderActivityFeed(): void {
  const container = document.getElementById('activity-feed');
  if (!container) return;

  // Keep the h2 title
  const title = container.querySelector('.section-title');
  container.innerHTML = '';
  if (title) container.appendChild(title);

  const range = getCurrentRange();
  const activities = getActivitiesExcludeWalks(range).slice(0, 20);

  if (activities.length === 0) {
    container.appendChild(el('p', 'text-muted', 'No activities in this period'));
    return;
  }

  const list = el('ul', 'feed-list');

  activities.forEach(a => {
    const item = el('li', 'feed-item fade-in');

    // Icon
    const icon = el('div', `feed-item__icon feed-item__icon--${a.type}`, activityIcon(a.type));
    item.appendChild(icon);

    // Body
    const body = el('div', 'feed-item__body');
    body.appendChild(el('div', 'feed-item__title', a.title));

    const stats = el('div', 'feed-item__stats');
    stats.appendChild(el('span', 'feed-item__stat', formatDistance(a.distanceKm)));
    stats.appendChild(el('span', 'feed-item__stat', formatDuration(a.durationMinutes)));

    if (a.avgPaceMinPerKm) stats.appendChild(el('span', 'feed-item__stat', formatPace(a.avgPaceMinPerKm)));
    if (a.avgSpeedKmh) stats.appendChild(el('span', 'feed-item__stat', formatSpeed(a.avgSpeedKmh)));
    if (a.elevationM > 0) stats.appendChild(el('span', 'feed-item__stat', `\u2B06 ${a.elevationM}m`));
    if (a.powerWatts) stats.appendChild(el('span', 'feed-item__stat', `${a.powerWatts}W`));

    body.appendChild(stats);
    body.appendChild(el('div', 'feed-item__date', formatDate(a.date)));
    item.appendChild(body);

    // Feeling
    item.appendChild(el('div', 'feed-item__feeling', FEELING_EMOJI[a.feeling]));

    list.appendChild(item);
  });

  container.appendChild(list);
}

// ─── PERSONAL RECORDS ───────────────────────────────────────────────────────

export function renderRecords(): void {
  const container = document.getElementById('records');
  if (!container) return;

  const title = container.querySelector('.section-title');
  container.innerHTML = '';
  if (title) container.appendChild(title);

  const records = getPersonalRecords();
  const grid = el('div', 'records-grid');

  records.forEach(r => {
    const card = el('div', 'record-card fade-in');
    card.appendChild(el('div', 'record-card__icon', activityIcon(r.type)));

    const body = el('div', 'record-card__body');
    body.appendChild(el('div', 'record-card__category', r.category));

    let valueStr: string;
    if (r.unit === '/km') valueStr = formatPace(r.value);
    else if (r.unit === 'km') valueStr = formatDistance(r.value);
    else if (r.unit === 'min') valueStr = formatDuration(r.value);
    else valueStr = `${r.value} ${r.unit}`;

    body.appendChild(el('div', 'record-card__value', valueStr));
    body.appendChild(el('div', 'record-card__date', formatDate(r.date)));
    card.appendChild(body);

    grid.appendChild(card);
  });

  container.appendChild(grid);
}

// ─── RENDER ALL ─────────────────────────────────────────────────────────────

function renderAll(): void {
  renderNav();
  renderSummaryCards();
  renderCharts();
  renderActivityFeed();
  renderRecords();
}

export function initDashboard(): void {
  renderAll();

  // Re-render charts on resize
  let resizeTimer: number;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => renderCharts(), 200);
  });
}
