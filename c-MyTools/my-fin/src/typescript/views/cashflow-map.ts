// ============================================
// A1 — Expenses · Map
// ============================================
import type { Dataset, NavItem } from '../modules/types';
import { store } from '../modules/state';
import { formatMoney } from '../modules/format';
import { txInPeriod, bucketByCity } from '../modules/aggregate';
import { svgIcon } from '../modules/meta';
import { renderTabbar, bindTabbar } from '../modules/tabs';

declare const L: any;
let mapInstance: any = null;

export function renderCashflowMap(root: HTMLElement, data: Dataset, item: NavItem, tab: string) {
  const { reportingCurrency, period } = store.get();
  const txs = txInPeriod(data, period.months);
  const cities = bucketByCity(txs, reportingCurrency, data);
  const totalSpend = cities.reduce((s, c) => s + c.amount, 0);

  // Group by country
  const byCountry = new Map<string, { country: string; cc: string; amount: number; count: number; cities: number }>();
  for (const c of cities) {
    if (!byCountry.has(c.country)) byCountry.set(c.country, { country: c.country, cc: c.cc, amount: 0, count: 0, cities: 0 });
    const b = byCountry.get(c.country)!;
    b.amount += c.amount; b.count += c.count; b.cities += 1;
  }
  const countries = [...byCountry.values()].sort((a, b) => b.amount - a.amount);

  root.innerHTML = `
    <div class="view fade-in">
      <header class="view__head">
        <div class="view__title">
          <span class="t-eyebrow">A · Cashflow</span>
          <h1 class="t-display">${item.label}</h1>
        </div>
        <div class="view__actions">
          <span class="badge badge--gold"><span class="badge__dot"></span>${cities.length} cities · ${countries.length} countries</span>
          <button class="btn btn--secondary">${svgIcon('download')} Export GPX</button>
        </div>
      </header>

      ${renderTabbar(item, tab)}

      <section id="tab-content"></section>
    </div>
  `;

  const tabRoot = root.querySelector('#tab-content') as HTMLElement;

  if (tab === 'cities') {
    tabRoot.innerHTML = `
      <section class="grid-3">
        ${kpi('brand', 'Total spent abroad', formatMoney(totalSpend, reportingCurrency, { decimals: 0 }))}
        ${kpi('violet', 'Cities visited', String(cities.length), `${countries.length} countries`)}
        ${kpi('gold', 'Top destination', cities[0] ? cities[0].city : '—', cities[0] ? formatMoney(cities[0].amount, reportingCurrency, { decimals: 0 }) : '')}
      </section>
      <section class="map-shell">
        <article class="card card--flush">
          <div id="leaflet-map" class="map-canvas"></div>
        </article>
        <aside class="map-side">
          <article class="card card--compact">
            <header class="card__head"><div><h2 class="card__title">Top destinations</h2><p class="card__subtitle">By spend</p></div></header>
            <div class="city-list" id="city-list"></div>
          </article>
        </aside>
      </section>
    `;
    const list = tabRoot.querySelector('#city-list')!;
    const max = cities[0]?.amount || 1;
    list.innerHTML = cities.map((c, i) => `
      <div class="city-row" data-idx="${i}">
        <div class="city-row__main">
          <span class="city-row__city">${escapeHtml(c.city)}</span>
          <span class="city-row__meta">${escapeHtml(c.country)} · ${c.count} tx</span>
        </div>
        <span class="city-row__amount">${formatMoney(c.amount, reportingCurrency, { decimals: 0, compact: true })}</span>
        <span class="city-row__bar" style="opacity:${0.30 + 0.70 * (c.amount / max)}"></span>
      </div>
    `).join('');
    list.addEventListener('click', (e) => {
      const row = (e.target as HTMLElement).closest('[data-idx]') as HTMLElement | null;
      if (!row) return;
      const c = cities[parseInt(row.dataset.idx!, 10)];
      if (mapInstance && c) mapInstance.flyTo([c.lat, c.lng], 7, { duration: 0.9 });
      list.querySelectorAll('.is-active').forEach((el) => el.classList.remove('is-active'));
      row.classList.add('is-active');
    });
    requestAnimationFrame(() => initMap(cities, reportingCurrency, max));
  } else if (tab === 'countries') {
    tabRoot.innerHTML = `
      <section class="grid-3">
        ${kpi('brand', 'Countries visited', String(countries.length))}
        ${kpi('violet', 'Top country', countries[0] ? countries[0].country : '—', countries[0] ? formatMoney(countries[0].amount, reportingCurrency, { decimals: 0 }) : '')}
        ${kpi('gold', 'Avg per country', formatMoney(totalSpend / Math.max(1, countries.length), reportingCurrency, { decimals: 0 }))}
      </section>
      <article class="card card--flush">
        <header class="card__head card__head--bordered"><div><h2 class="card__title">By country</h2><p class="card__subtitle">${countries.length} countries</p></div></header>
        <div style="overflow:auto">
          <table class="tbl">
            <thead><tr><th>Country</th><th class="num">Cities</th><th class="num">Transactions</th><th class="num">Spent</th><th class="num">Share</th></tr></thead>
            <tbody>
              ${countries.map((c) => {
                const share = totalSpend > 0 ? (c.amount / totalSpend) * 100 : 0;
                return `<tr>
                  <td><span class="fx-tag" style="margin-right:8px">${c.cc}</span>${escapeHtml(c.country)}</td>
                  <td class="num">${c.cities}</td>
                  <td class="num">${c.count}</td>
                  <td class="num">${formatMoney(c.amount, reportingCurrency, { decimals: 0 })}</td>
                  <td class="num"><div style="display:flex;align-items:center;gap:8px;justify-content:flex-end"><span>${share.toFixed(1)}%</span><div style="width:60px;height:4px;background:rgba(255,255,255,0.06);border-radius:2px;overflow:hidden"><div style="height:100%;width:${share.toFixed(1)}%;background:#5B8CFF"></div></div></div></td>
                </tr>`;
              }).join('')}
            </tbody>
          </table>
        </div>
      </article>
    `;
  }

  bindTabbar(root, item.route);
}

function initMap(cities: any[], reporting: any, maxAmount: number) {
  if (typeof L === 'undefined') return;
  if (mapInstance) { mapInstance.remove(); mapInstance = null; }
  mapInstance = L.map('leaflet-map', { zoomControl: true, worldCopyJump: true, minZoom: 2 }).setView([47, 5], 4);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap', maxZoom: 18 }).addTo(mapInstance);
  for (const c of cities) {
    const radius = 10 + Math.round((c.amount / maxAmount) * 18);
    const sizeClass = radius > 20 ? 'map-pin--lg' : radius > 14 ? 'map-pin--md' : '';
    const icon = L.divIcon({ html: `<div class="map-pin ${sizeClass}"></div>`, className: 'map-pin-wrap', iconSize: [radius, radius], iconAnchor: [radius / 2, radius / 2] });
    L.marker([c.lat, c.lng], { icon }).bindPopup(`
      <div class="map-popup">
        <div class="map-popup__city">${escapeHtml(c.city)}</div>
        <div class="map-popup__country">${escapeHtml(c.country)} · ${c.cc}</div>
        <div class="map-popup__amount">${formatMoney(c.amount, reporting, { decimals: 0 })}</div>
        <div class="map-popup__count">${c.count} transactions</div>
      </div>
    `).addTo(mapInstance);
  }
}

function kpi(accent: string, label: string, value: string, caption = ''): string {
  return `<div class="kpi kpi--${accent}"><div class="kpi__label">${label}</div><div class="kpi__value">${value}</div>${caption ? `<div class="kpi__caption">${caption}</div>` : ''}</div>`;
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}
