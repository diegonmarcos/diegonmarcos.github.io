import type { AstroData, FormData, City, PlanetInfo, ZodiacInfo } from '../types';
import { ZODIAC_DATA } from '../astro-data';
import { openModal } from './modal';
import { renderMap } from './map';
import { initGlobe, updateGlobe } from './globe';

// ── Tiny DOM helpers ─────────────────────────────────
function el<K extends keyof HTMLElementTagNameMap>(
  tag: K, cls = '', text?: string
): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

function svgIcon(path: string): SVGSVGElement {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('stroke-width', '2');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  svg.innerHTML = path;
  return svg;
}

const ICONS = {
  user:    '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  cal:     '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  clock:   '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  pin:     '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  info:    '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
  flame:   '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  activity:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
  star:    '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  link:    '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  repeat:  '<polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',
  trend:   '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
  map:     '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>',
  x:       '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
};

function icon(name: keyof typeof ICONS): SVGSVGElement {
  return svgIcon(ICONS[name]);
}

// ── Element color helpers ────────────────────────────
const ELEM_COLOR: Record<string, string>  = { fire: '#fb923c', earth: '#4ade80', air: '#22d3ee', water: '#60a5fa' };
const ELEM_BG_CLS: Record<string, string> = { fire: 'progress-bar__fill--fire', earth: 'progress-bar__fill--earth', air: 'progress-bar__fill--air', water: 'progress-bar__fill--water' };
const MOD_DESC: Record<string, string>    = { cardinal: 'Initiator, leader', fixed: 'Stabilizer, persistent', mutable: 'Adapter, flexible' };

// ── Section builders ─────────────────────────────────

function buildProfileCard(data: AstroData, formData: FormData, city: City): HTMLElement {
  const card = el('div', 'card');

  // Meta row
  const meta = el('div', 'profile-meta');
  const avatar = el('div', 'profile-avatar');
  avatar.appendChild(icon('user'));
  meta.appendChild(avatar);

  const info = el('div', '');
  info.appendChild(el('h2', 'profile-info__name', formData.name));
  const metaRow = el('div', 'profile-info__meta');
  [[icon('cal'),   formData.date],
   [icon('clock'), formData.time],
   [icon('pin'),   city.name]].forEach(([ico, txt]) => {
    const s = el('span', '');
    s.appendChild(ico as SVGSVGElement);
    s.appendChild(document.createTextNode(txt as string));
    metaRow.appendChild(s);
  });
  info.appendChild(metaRow);
  meta.appendChild(info);
  card.appendChild(meta);

  // Big 3 + Chinese
  const grid = el('div', 'grid-4');
  grid.style.marginTop = '1.5rem';

  [
    { cls: 'sign-btn--sun',     label: 'Sun',     value: data.sunSign,     color: '#fde047', obj: ZODIAC_DATA.find(z => z.name === data.sunSign)! },
    { cls: 'sign-btn--moon',    label: 'Moon',    value: data.moonSign,    color: '#e2e8f0', obj: ZODIAC_DATA.find(z => z.name === data.moonSign)! },
    { cls: 'sign-btn--rising',  label: 'Rising',  value: data.risingApprox, color: '#c084fc', obj: ZODIAC_DATA.find(z => z.name === data.risingApprox)! },
    { cls: 'sign-btn--chinese', label: 'Chinese', value: `${data.chineseData.emoji} ${data.chinese}`, color: '#ef4444', obj: null },
  ].forEach(({ cls, label, value, color, obj }) => {
    const btn = el('button', `sign-btn ${cls}`);
    const lbl = el('div', 'sign-btn__label');
    lbl.appendChild(document.createTextNode(label + ' '));
    lbl.appendChild(icon('info'));
    const val = el('div', 'sign-btn__value', value);
    val.style.color = color;
    btn.appendChild(lbl);
    btn.appendChild(val);
    btn.addEventListener('click', () => {
      if (label === 'Chinese') {
        openModal(data.chineseData.animal, data.chineseData.emoji, '#ef4444', data.chineseData, 'chinese');
      } else if (obj) {
        openModal(obj.name, obj.symbol, obj.cssColor, obj, 'zodiac');
      }
    });
    grid.appendChild(btn);
  });
  card.appendChild(grid);

  return card;
}

function buildLunarCard(data: AstroData): HTMLElement {
  if (!data.lunar) return el('div', 'hidden');
  const { lunar } = data;

  const card = el('div', 'card');
  const hdr = el('div', '');
  hdr.style.cssText = 'display:flex;align-items:center;gap:.5rem;margin-bottom:1rem;font-weight:700;color:#e2e8f0';
  hdr.appendChild(el('span', '', lunar.phase.emoji));
  hdr.appendChild(document.createTextNode('Lunar Analysis'));
  card.appendChild(hdr);

  const grid = el('div', 'lunar-grid');

  // Current phase
  const curr = el('div', 'info-box');
  curr.appendChild(el('div', 'info-box__label', 'Current Phase'));
  curr.appendChild(el('div', 'info-box__value', lunar.phase.name));
  curr.appendChild(el('div', 'info-box__desc', lunar.phase.description));
  const kwWrap = el('div', 'keywords');
  lunar.phase.keywords.forEach(kw => kwWrap.appendChild(el('span', 'keyword-tag', kw)));
  curr.appendChild(kwWrap);
  grid.appendChild(curr);

  // Birth phase
  const birth = el('div', 'info-box');
  birth.appendChild(el('div', 'info-box__label', 'Birth Moon Phase'));
  birth.appendChild(el('div', 'info-box__value', `${lunar.birthMoonPhase.emoji} ${lunar.birthMoonPhase.name}`));
  birth.appendChild(el('div', 'info-box__desc', `You were born during a ${lunar.birthMoonPhase.name.toLowerCase()}, influencing your emotional nature.`));
  grid.appendChild(birth);

  // Nodes
  const nodes = el('div', 'info-box');
  nodes.appendChild(el('div', 'info-box__label', 'Lunar Nodes (Destiny)'));
  const north = el('div', 'node-row');
  north.innerHTML = `<span class="node-row__label" style="color:#34d399">North Node:</span><span class="node-row__sign">${lunar.northNodeSign}</span><div class="node-row__desc">Your soul's growth direction</div>`;
  nodes.appendChild(north);
  const south = el('div', 'node-row');
  south.innerHTML = `<span class="node-row__label" style="color:#fb923c">South Node:</span><span class="node-row__sign">${lunar.southNodeSign}</span><div class="node-row__desc">Past life talents &amp; comfort zone</div>`;
  nodes.appendChild(south);
  grid.appendChild(nodes);

  card.appendChild(grid);
  return card;
}

function buildElementModality(data: AstroData): HTMLElement {
  const wrapper = el('div', 'element-grid');

  // Elements
  if (data.elements) {
    const card = el('div', 'card');
    const hdr = el('div', '');
    hdr.style.cssText = 'display:flex;align-items:center;gap:.5rem;margin-bottom:1rem;font-weight:700;color:#fb923c';
    hdr.appendChild(icon('flame'));
    hdr.appendChild(document.createTextNode('Element Balance'));
    card.appendChild(hdr);

    (['fire', 'earth', 'air', 'water'] as const).forEach(elem => {
      const count = data.elements![elem];
      const row = el('div', 'progress-row');
      const label = el('span', 'progress-label', elem);
      label.style.color = ELEM_COLOR[elem];
      const bar = el('div', 'progress-bar');
      const fill = el('div', `progress-bar__fill ${ELEM_BG_CLS[elem]}`);
      fill.style.width = `${(count / 10) * 100}%`;
      bar.appendChild(fill);
      const cnt = el('span', 'progress-count', String(count));
      row.appendChild(label); row.appendChild(bar); row.appendChild(cnt);
      card.appendChild(row);
    });

    const summary = el('div', 'dominant-summary');
    summary.innerHTML = `<span class="dominant-label">Dominant: </span><span class="dominant-value" style="color:${ELEM_COLOR[data.elements.dominant]}">${data.elements.dominant}</span><span class="divider">|</span><span class="dominant-label">Lacking: </span><span class="dominant-value" style="color:${ELEM_COLOR[data.elements.lacking]}">${data.elements.lacking}</span>`;
    card.appendChild(summary);
    wrapper.appendChild(card);
  }

  // Modalities
  if (data.modalities) {
    const card = el('div', 'card');
    const hdr = el('div', '');
    hdr.style.cssText = 'display:flex;align-items:center;gap:.5rem;margin-bottom:1rem;font-weight:700;color:#22d3ee';
    hdr.appendChild(icon('activity'));
    hdr.appendChild(document.createTextNode('Modality Balance'));
    card.appendChild(hdr);

    (['cardinal', 'fixed', 'mutable'] as const).forEach(mod => {
      const count = data.modalities![mod];
      const row = el('div', 'progress-row');
      const label = el('span', 'progress-label', mod);
      label.style.color = '#cbd5e1';
      const bar = el('div', 'progress-bar');
      const fill = el('div', 'progress-bar__fill progress-bar__fill--cardinal');
      fill.style.width = `${(count / 10) * 100}%`;
      bar.appendChild(fill);
      const cnt = el('span', 'progress-count', String(count));
      row.appendChild(label); row.appendChild(bar); row.appendChild(cnt);
      card.appendChild(row);
    });

    const summary = el('div', 'dominant-summary');
    summary.innerHTML = `<span class="dominant-label">Dominant: </span><span class="dominant-value" style="color:#67e8f9">${data.modalities.dominant}</span><span class="divider">–</span><span style="color:#64748b">${MOD_DESC[data.modalities.dominant] || ''}</span>`;
    card.appendChild(summary);
    wrapper.appendChild(card);
  }

  return wrapper;
}

function buildNatalPositions(data: AstroData): HTMLElement {
  const card = el('div', 'data-card');
  const hdr = el('div', 'data-card__header');
  hdr.style.color = '#facc15';
  hdr.appendChild(icon('star'));
  hdr.appendChild(document.createTextNode('Natal Positions'));
  hdr.appendChild(el('span', 'header-note', 'Click planet for details'));
  card.appendChild(hdr);

  const wrap = el('div', 'data-table');
  const table = el('table', '');
  table.innerHTML = `<thead><tr><th>Planet</th><th>Position</th><th>Sign</th><th>Meaning</th></tr></thead>`;
  const tbody = el('tbody', '');

  data.natal.forEach(item => {
    const tr = el('tr', 'cursor-pointer');
    tr.addEventListener('click', () => openModal(item.planet.name, item.planet.symbol, item.planet.cssColor, item.planet, 'planet'));

    const planetTd = el('td', '');
    const planetCell = el('div', 'planet-cell');
    planetCell.style.color = item.planet.cssColor;
    planetCell.appendChild(document.createTextNode(`${item.planet.symbol} ${item.planet.name} `));
    planetCell.appendChild(icon('info'));
    planetTd.appendChild(planetCell);
    tr.appendChild(planetTd);

    const posTd = el('td', 'position-cell', item.position);
    tr.appendChild(posTd);

    const signTd = el('td', '');
    const signBtn = el('button', 'sign-cell');
    signBtn.style.color = item.sign.cssColor;
    signBtn.textContent = `${item.sign.symbol} ${item.sign.name}`;
    signBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const z = ZODIAC_DATA.find(z => z.name === item.sign.name);
      if (z) openModal(z.name, z.symbol, z.cssColor, z, 'zodiac');
    });
    signTd.appendChild(signBtn);
    tr.appendChild(signTd);

    tr.appendChild(el('td', 'meaning-cell', item.synthesis));
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  wrap.appendChild(table);
  card.appendChild(wrap);
  return card;
}

function buildNatalAspects(data: AstroData): HTMLElement | null {
  if (!data.natalAspects?.length) return null;

  const card = el('div', 'data-card');
  const hdr = el('div', 'data-card__header');
  hdr.style.color = '#a78bfa';
  hdr.appendChild(icon('link'));
  hdr.appendChild(document.createTextNode('Natal Aspects'));
  hdr.appendChild(el('span', 'header-note', 'Planetary relationships at birth'));
  card.appendChild(hdr);

  const grid = el('div', 'aspect-grid');
  data.natalAspects.forEach(asp => {
    const nature = asp.aspectInfo?.nature;
    const cls = nature === 'Harmonious' ? 'aspect-card aspect-card--harmonious'
              : nature === 'Challenging' ? 'aspect-card aspect-card--challenging'
              : 'aspect-card';
    const item = el('div', cls);

    const hdr2 = el('div', 'aspect-card__header');
    const p1 = el('span', '');
    p1.style.color = asp.planet1.cssColor;
    p1.textContent = asp.planet1.symbol;
    const sym = el('span', 'aspect-card__symbols', asp.aspectInfo?.symbol || '');
    const p2 = el('span', '');
    p2.style.color = asp.planet2.cssColor;
    p2.textContent = asp.planet2.symbol;

    const badgeCls = nature === 'Harmonious' ? 'aspect-badge aspect-badge--harmonious'
                   : nature === 'Challenging' ? 'aspect-badge aspect-badge--challenging'
                   : 'aspect-badge';
    const badge = el('span', badgeCls, asp.aspect);
    hdr2.appendChild(p1); hdr2.appendChild(sym); hdr2.appendChild(p2); hdr2.appendChild(badge);
    item.appendChild(hdr2);
    item.appendChild(el('div', 'aspect-card__planets', `${asp.planet1.name} – ${asp.planet2.name}`));
    grid.appendChild(item);
  });
  card.appendChild(grid);
  return card;
}

function buildTransits(data: AstroData): HTMLElement {
  const card = el('div', 'data-card');
  const hdr = el('div', 'data-card__header');
  hdr.style.color = '#34d399';
  hdr.appendChild(icon('repeat'));
  hdr.appendChild(document.createTextNode('Active Transits'));
  hdr.appendChild(el('span', 'header-note', "Today's planetary influences"));
  card.appendChild(hdr);

  const wrap = el('div', 'data-table');
  const table = el('table', '');
  table.innerHTML = `<thead><tr><th>Transit Planet</th><th>Aspect</th><th>Natal Planet</th><th>Effect</th></tr></thead>`;
  const tbody = el('tbody', '');

  if (!data.transits?.length) {
    const tr = el('tr', '');
    const td = el('td', 'meaning-cell');
    td.setAttribute('colspan', '4');
    td.style.textAlign = 'center';
    td.style.padding = '1rem';
    td.textContent = 'No major aspects today';
    tr.appendChild(td);
    tbody.appendChild(tr);
  } else {
    data.transits.forEach(t => {
      const tr = el('tr', '');
      const pTd = el('td', '');
      const pCell = el('div', 'planet-cell');
      pCell.style.color = t.planet.cssColor;
      pCell.textContent = `${t.planet.symbol} ${t.planet.name}`;
      pTd.appendChild(pCell);
      tr.appendChild(pTd);

      const aspTd = el('td', '');
      const badgeCls = t.insight === 'Harmonious' ? 'transit-badge transit-badge--harmonious'
                     : t.insight === 'Challenging' ? 'transit-badge transit-badge--challenging'
                     : 'transit-badge';
      aspTd.appendChild(el('span', badgeCls, t.aspect));
      tr.appendChild(aspTd);

      const tgtTd = el('td', '');
      tgtTd.style.color = '#cbd5e1';
      tgtTd.textContent = `${t.target.symbol} ${t.target.name}`;
      tr.appendChild(tgtTd);

      tr.appendChild(el('td', 'meaning-cell', t.insight));
      tbody.appendChild(tr);
    });
  }

  table.appendChild(tbody);
  wrap.appendChild(table);
  card.appendChild(wrap);
  return card;
}

function buildFutureCities(data: AstroData): HTMLElement {
  const wrapper = el('div', 'grid-2');

  // Future predictions
  const futCard = el('div', 'future-card');
  const futHdr = el('div', '');
  futHdr.style.cssText = 'display:flex;align-items:center;gap:.5rem;margin-bottom:1rem;font-weight:700;color:#60a5fa';
  futHdr.appendChild(icon('trend'));
  futHdr.appendChild(document.createTextNode('Future Transits'));
  futCard.appendChild(futHdr);

  data.future.forEach(f => {
    const item = el('div', 'future-item');
    item.appendChild(el('span', 'future-item__time', f.time));
    item.appendChild(el('span', 'future-item__pred', f.pred));
    futCard.appendChild(item);
  });
  wrapper.appendChild(futCard);

  // Power cities
  const citiesCard = el('div', 'card');
  const citiesHdr = el('div', '');
  citiesHdr.style.cssText = 'display:flex;align-items:center;gap:.5rem;margin-bottom:1rem;font-weight:700;color:#f472b6';
  citiesHdr.appendChild(icon('pin'));
  citiesHdr.appendChild(document.createTextNode('Power Cities'));
  citiesCard.appendChild(citiesHdr);

  const scroll = el('div', 'cities-scroll custom-scrollbar');
  data.matches.forEach(m => {
    const group = el('div', 'cities-planet-group');
    const lbl = el('span', 'cities-planet-label');
    lbl.style.color = m.line.planet.cssColor;
    lbl.textContent = `${m.line.planet.symbol} ${m.line.planet.name} Line:`;
    group.appendChild(lbl);
    const tags = el('div', '');
    m.cities.forEach(c => tags.appendChild(el('span', 'city-tag', c.name.split(',')[0])));
    group.appendChild(tags);
    scroll.appendChild(group);
  });
  citiesCard.appendChild(scroll);
  wrapper.appendChild(citiesCard);

  return wrapper;
}

function buildMapSection(data: AstroData): HTMLElement {
  const flat = data.matches.flatMap(m => m.cities);
  const section = el('div', 'map-section');
  const lbl = el('div', 'map-label');
  lbl.appendChild(icon('map'));
  lbl.appendChild(document.createTextNode('Astrocartography Map'));
  section.appendChild(lbl);

  const mapContainer = el('div', 'astro-map-container');
  section.appendChild(mapContainer);
  renderMap(mapContainer, data.lines, flat);

  return section;
}

// ── Public API ───────────────────────────────────────
let globeInitialized = false;

export function renderDashboard(data: AstroData, formData: FormData, city: City): void {
  const results = document.getElementById('results-section')!;
  results.innerHTML = '';

  const sections: (HTMLElement | null)[] = [
    buildProfileCard(data, formData, city),
    buildLunarCard(data),
    buildElementModality(data),
    buildNatalPositions(data),
    buildNatalAspects(data),
    buildTransits(data),
    buildFutureCities(data),
    buildMapSection(data),
    (() => { const n = el('p', 'footer-note', 'Astronomical Engine v2.0 - Real Planetary Calculations'); return n; })(),
  ];

  sections.forEach(s => { if (s) results.appendChild(s); });
  results.classList.remove('hidden');
  results.classList.add('results', 'results-animate');

  // Globe (below map)
  initGlobeSection(data);
}

function initGlobeSection(data: AstroData): void {
  const container = document.getElementById('globe-container');
  if (!container) return;
  const flat = data.matches.flatMap(m => m.cities);
  if (!globeInitialized) {
    initGlobe(container);
    globeInitialized = true;
  }
  updateGlobe(data.lines, flat);
}

export function hideDashboard(): void {
  const results = document.getElementById('results-section')!;
  results.classList.add('hidden');
  results.innerHTML = '';
  globeInitialized = false;
}
