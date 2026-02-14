// Render functions for Market Watch Terminal
import { MarketRow, YieldData, PerformanceType } from './types';
import { US_CURVE, BR_CURVE, CURVE_TENORS } from './data';

// Get performance class based on value
export const getPerfClass = (val: number): PerformanceType => {
  if (val > 0) return 'positive';
  if (val < 0) return 'negative';
  return 'neutral';
};

// Format performance value with sign
export const formatPerf = (val: number): string => {
  const sign = val > 0 ? '+' : '';
  return `${sign}${val.toFixed(2)}%`;
};

// Render performance cell
export const perfCell = (val: number): string => {
  const perfClass = getPerfClass(val);
  return `<span class="perf-cell ${perfClass}">${formatPerf(val)}</span>`;
};

// Render a data table
export const renderTable = (data: MarketRow[], title: string): string => {
  const rows = data.map(row => `
    <tr>
      <td class="ticker-cell">${row.ticker}</td>
      <td class="price-cell">${row.last.toFixed(2)}</td>
      <td>${perfCell(row.daily)}</td>
      <td>${perfCell(row.w1)}</td>
      <td>${perfCell(row.m1)}</td>
      <td>${perfCell(row.ytd)}</td>
      <td class="hidden-mobile">${perfCell(row.y1)}</td>
      <td class="hidden-mobile">${perfCell(row.y3)}</td>
    </tr>
  `).join('');

  return `
    <div class="data-table__section">
      ${title ? `<div class="data-table__title">${title}</div>` : ''}
      <div class="table-wrapper custom-scrollbar">
        <table class="data-table">
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Last</th>
              <th>Dly%</th>
              <th>1W%</th>
              <th>1M%</th>
              <th>YTD%</th>
              <th class="hidden-mobile">1Y%</th>
              <th class="hidden-mobile">3Y%</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>
  `;
};

// Render yield table
export const renderYieldTable = (data: YieldData[], title: string): string => {
  const rows = data.map(d => {
    const chgClass = getPerfClass(d.chg);
    const sign = d.chg > 0 ? '+' : '';
    return `
      <tr>
        <td>${d.tenor}</td>
        <td>${d.last.toFixed(2)}</td>
        <td class="perf-cell ${chgClass}">${sign}${d.chg.toFixed(2)}</td>
      </tr>
    `;
  }).join('');

  return `
    <div class="yield-table">
      <div class="yield-table__title">${title}</div>
      <table>
        <thead>
          <tr>
            <th>Tenor</th>
            <th>Yld</th>
            <th>Chg</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
};

// Render yield curve SVG chart
export const renderYieldChart = (): string => {
  const width = 400;
  const height = 160;
  const padding = { top: 25, right: 30, bottom: 20, left: 30 };
  const minRate = 3;
  const maxRate = 13;

  const getX = (i: number): number =>
    padding.left + (i / (CURVE_TENORS.length - 1)) * (width - padding.left - padding.right);

  const getY = (r: number): number =>
    height - padding.bottom - ((r - minRate) / (maxRate - minRate)) * (height - padding.top - padding.bottom);

  const makePath = (data: number[]): string =>
    `M ${data.map((d, i) => `${getX(i)},${getY(d)}`).join(' L ')}`;

  // Grid lines
  const gridLines = [4, 6, 8, 10, 12].map(r => {
    const y = getY(r);
    return `
      <line class="grid-line" x1="${padding.left}" y1="${y}" x2="${width - padding.right}" y2="${y}" />
      <text class="grid-label" x="${padding.left - 4}" y="${y + 2}" text-anchor="end">${r}</text>
    `;
  }).join('');

  // Data points
  const usPoints = US_CURVE.map((r, i) =>
    `<rect class="point-us" x="${getX(i) - 1.5}" y="${getY(r) - 1.5}" width="3" height="3" />`
  ).join('');

  const brPoints = BR_CURVE.map((r, i) =>
    `<rect class="point-br" x="${getX(i) - 1.5}" y="${getY(r) - 1.5}" width="3" height="3" />`
  ).join('');

  // X-axis labels
  const xLabels = CURVE_TENORS.map((t, i) =>
    `<text class="axis-label" x="${getX(i)}" y="${height - 5}" text-anchor="middle">${t}</text>`
  ).join('');

  return `
    <div class="yield-chart">
      <div class="yield-chart__title">GC I 25: US (Y) vs BRAZIL (G)</div>
      <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid meet">
        ${gridLines}
        <path class="line-br" d="${makePath(BR_CURVE)}" />
        ${brPoints}
        <path class="line-us" d="${makePath(US_CURVE)}" />
        ${usPoints}
        ${xLabels}
      </svg>
    </div>
  `;
};

// Render footer keys - Bloomberg keyboard style
export const renderFooterKeys = (keys: { label: string; color: string }[]): string => {
  return keys.map((k, i) => {
    const colorClass = k.color === 'green' ? 'footer__key--green' :
                       k.color === 'red' ? 'footer__key--red' : '';
    return `
      <div class="footer__key ${colorClass}">
        <span class="key-number">F${i + 1}</span>
        <span class="key-label">${k.label}</span>
      </div>
    `;
  }).join('');
};
