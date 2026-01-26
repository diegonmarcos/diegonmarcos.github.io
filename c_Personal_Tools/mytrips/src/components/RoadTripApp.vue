<template>
  <div id="app" class="roadtrip-app">
    <!-- Loader -->
    <div v-if="loading" id="loader" class="roadtrip-loader">
      <div class="loader-spinner"></div>
      <h2>Loading Terrain Map</h2>
      <p>Generating topography...</p>
    </div>

    <!-- Controls -->
    <div class="controls">
      <a href="./index.html" class="menu-btn" title="Back to MyTrips">←</a>
      <button class="menu-btn" @click="toggleSidebar" title="Toggle Menu (M)">☰</button>
    </div>

    <!-- Sidebar -->
    <aside class="sidebar" :class="{ collapsed: sidebarCollapsed }">
      <header class="sidebar-header">
        <h1>Cultural Regions</h1>
        <button class="close-btn" @click="sidebarCollapsed = true" title="Close">×</button>
      </header>
      <div class="search-container">
        <div class="search-wrapper">
          <input
            type="text"
            class="search-input"
            v-model="searchQuery"
            @input="onSearch"
            placeholder="Search countries or regions..."
          >
        </div>
      </div>
      <div class="stats-bar">
        <div class="stat">
          <div class="stat-value">{{ totalCountries }}</div>
          <div class="stat-label">Countries</div>
        </div>
        <div class="stat">
          <div class="stat-value">{{ hierarchy.length }}</div>
          <div class="stat-label">Continents</div>
        </div>
        <div class="stat">
          <div class="stat-value">{{ totalGroups }}</div>
          <div class="stat-label">Groups</div>
        </div>
      </div>
      <div class="sidebar-content" ref="sidebarContent">
        <div v-for="region in hierarchy" :key="region.name" class="region-block">
          <div class="region-title">{{ region.element }} {{ region.name }}</div>
          <div
            v-for="group in region.groups"
            :key="group.id"
            class="group-block"
            :class="{ pinned: lockedGroupId === group.id }"
            :style="{ borderLeftColor: group.color }"
          >
            <div
              class="group-header"
              @click="toggleGroup(group.id)"
              @mouseenter="!lockedGroupId && highlightGroup(group.id)"
              @mouseleave="!lockedGroupId && resetOpacity()"
            >
              <div class="color-dot" :style="{ background: group.color }"></div>
              <span class="group-name">{{ group.name }}</span>
              <span class="group-count">{{ group.countryCount }}</span>
              <div class="pin-indicator">PIN</div>
            </div>
            <div class="subgroup-list" v-show="lockedGroupId === group.id">
              <div v-for="sub in group.subgroups" :key="sub.name" class="subgroup-item">
                <span class="subgroup-name">{{ sub.name }}</span>
                <span class="subgroup-flags">{{ sub.flags }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main Map -->
    <main class="map-wrapper" @click="onMapClick">
      <div ref="tooltip" class="tooltip" v-show="tooltipVisible" :style="tooltipStyle" v-html="tooltipContent"></div>
      <div class="zoom-controls">
        <button class="zoom-btn" @click="zoomIn" title="Zoom In">+</button>
        <button class="zoom-btn" @click="zoomOut" title="Zoom Out">−</button>
        <button class="zoom-btn" @click="resetZoom" title="Reset (Esc)">⟲</button>
      </div>
      <div class="legend">
        <div class="legend-title">Continents</div>
        <div class="legend-items">
          <div
            v-for="region in hierarchy"
            :key="region.name"
            class="legend-item"
            :class="{ active: activeRegion === region.name }"
            @click="toggleRegion(region.name)"
          >
            <div class="legend-dot" :style="{ background: region.baseColor }"></div>
            <span>{{ region.element }} {{ region.name }}</span>
          </div>
        </div>
      </div>
      <svg ref="worldMap" id="world-map">
        <defs>
          <filter id="terrain-mountains" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.008" numOctaves="6" seed="7" result="mountains"/>
            <feColorMatrix type="matrix" in="mountains" result="mono"
              values="0.5 0.5 0.5 0 0
                      0.5 0.5 0.5 0 0
                      0.5 0.5 0.5 0 0
                      0 0 0 1 0"/>
            <feDiffuseLighting in="mono" lighting-color="white" surfaceScale="15" result="ridges">
              <feDistantLight azimuth="300" elevation="50"/>
            </feDiffuseLighting>
            <feBlend in="SourceGraphic" in2="ridges" mode="soft-light" result="terrain"/>
            <feComposite in="terrain" in2="SourceGraphic" operator="in"/>
          </filter>
        </defs>
      </svg>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';

// ============================================================================
// 19 UNIQUE COLORS - HIGH CONTRAST WITHIN EACH CONTINENT
// ============================================================================
const COLORS: Record<string, string> = {
  "GERMANICS": "#1e3a8a",
  "GRECO-ROMANS": "#60a5fa",
  "SLAVS": "#a1a1aa",
  "EU_OTHERS": "#06b6d4",
  "AM_GERMANICS": "#881337",
  "SPANISH": "#eab308",
  "ROMANCE": "#15803d",
  "AUSTRALASIA": "#991b1b",
  "POLYNESIA": "#ea580c",
  "MICROMELANESIA": "#fbbf24",
  "ABRAHAMIC": "#581c87",
  "HINDUS": "#ec4899",
  "BUDDHIST": "#dc2626",
  "MAGHREB": "#451a03",
  "AF_ANGLOPHONE": "#92400e",
  "FRANCOPHONE": "#ea580c",
  "LUSO_OTHERS": "#fcd34d"
};

const REGION_COLORS: Record<string, string> = {
  "EUROPE": "#60a5fa",
  "AMERICAS": "#881337",
  "OCEANIA": "#ea580c",
  "ASIA": "#581c87",
  "AFRICA": "#92400e"
};

const REGION_ELEMENTS: Record<string, string> = {
  "EUROPE": "🔷",
  "AMERICAS": "🌎",
  "OCEANIA": "🔥",
  "ASIA": "🟣",
  "AFRICA": "🪨"
};

const NAME_TO_ISO: Record<string, string> = {
  "Germany": "DE", "Switzerland": "CH", "Netherlands": "NL", "Austria": "AT",
  "Liechtenstein": "LI", "Luxembourg": "LU", "United Kingdom": "GB", "Ireland": "IE",
  "Sweden": "SE", "Norway": "NO", "Denmark": "DK", "Iceland": "IS",
  "France": "FR", "Belgium": "BE", "Monaco": "MC", "Spain": "ES",
  "Portugal": "PT", "Andorra": "AD", "Italy": "IT", "Vatican": "VA",
  "Malta": "MT", "San Marino": "SM", "Greece": "GR", "Cyprus": "CY",
  "Romania": "RO", "Moldova": "MD", "Bulgaria": "BG", "Macedonia": "MK",
  "North Macedonia": "MK", "Serbia": "RS", "Bosnia and Herz.": "BA",
  "Montenegro": "ME", "Croatia": "HR", "Slovenia": "SI", "Poland": "PL",
  "Czechia": "CZ", "Czech Rep.": "CZ", "Slovakia": "SK", "Ukraine": "UA",
  "Belarus": "BY", "Russia": "RU", "Estonia": "EE", "Hungary": "HU",
  "Finland": "FI", "Lithuania": "LT", "Latvia": "LV", "Albania": "AL",
  "Kosovo": "XK", "Georgia": "GE", "Armenia": "AM", "Azerbaijan": "AZ",
  "United States": "US", "United States of America": "US", "Canada": "CA",
  "Haiti": "HT", "Mexico": "MX", "Guatemala": "GT", "Honduras": "HN",
  "El Salvador": "SV", "Nicaragua": "NI", "Costa Rica": "CR", "Panama": "PA",
  "Argentina": "AR", "Chile": "CL", "Peru": "PE", "Bolivia": "BO",
  "Ecuador": "EC", "Colombia": "CO", "Venezuela": "VE", "Paraguay": "PY",
  "Cuba": "CU", "Dominican Rep.": "DO", "Uruguay": "UY", "Brazil": "BR",
  "Australia": "AU", "New Zealand": "NZ", "Samoa": "WS", "Tonga": "TO",
  "Tuvalu": "TV", "Palau": "PW", "Micronesia": "FM", "Marshall Is.": "MH",
  "Nauru": "NR", "Kiribati": "KI", "Fiji": "FJ", "Papua New Guinea": "PG",
  "Solomon Is.": "SB", "Vanuatu": "VU",
  "Jordan": "JO", "Qatar": "QA", "Saudi Arabia": "SA", "United Arab Emirates": "AE",
  "Kuwait": "KW", "Bahrain": "BH", "Oman": "OM", "Yemen": "YE", "Iraq": "IQ",
  "Syria": "SY", "Lebanon": "LB", "Palestine": "PS", "Turkey": "TR",
  "Kazakhstan": "KZ", "Uzbekistan": "UZ", "Turkmenistan": "TM", "Kyrgyzstan": "KG",
  "Iran": "IR", "Afghanistan": "AF", "Pakistan": "PK", "Tajikistan": "TJ",
  "Indonesia": "ID", "Malaysia": "MY", "Bangladesh": "BD", "Brunei": "BN",
  "Maldives": "MV", "Philippines": "PH", "Timor-Leste": "TL", "Israel": "IL",
  "India": "IN", "Nepal": "NP", "Thailand": "TH", "Myanmar": "MM",
  "Cambodia": "KH", "Laos": "LA", "Sri Lanka": "LK", "Mongolia": "MN",
  "Bhutan": "BT", "Japan": "JP", "South Korea": "KR", "Korea": "KR",
  "Vietnam": "VN", "China": "CN", "Taiwan": "TW", "North Korea": "KP",
  "Dem. Rep. Korea": "KP",
  "Morocco": "MA", "Algeria": "DZ", "Tunisia": "TN", "Libya": "LY",
  "Mauritania": "MR", "Egypt": "EG", "Sudan": "SD",
  "Nigeria": "NG", "Ghana": "GH", "Sierra Leone": "SL", "Liberia": "LR",
  "Gambia": "GM", "Kenya": "KE", "Tanzania": "TZ", "Uganda": "UG",
  "Rwanda": "RW", "Burundi": "BI", "S. Sudan": "SS", "South Sudan": "SS",
  "South Africa": "ZA", "Zimbabwe": "ZW", "Zambia": "ZM", "Botswana": "BW",
  "Namibia": "NA", "Lesotho": "LS", "Swaziland": "SZ", "eSwatini": "SZ", "Malawi": "MW",
  "Senegal": "SN", "Mali": "ML", "Côte d'Ivoire": "CI", "Ivory Coast": "CI",
  "Burkina Faso": "BF", "Niger": "NE", "Togo": "TG", "Benin": "BJ", "Guinea": "GN",
  "Dem. Rep. Congo": "CD", "Congo": "CG", "Gabon": "GA", "Cameroon": "CM",
  "Chad": "TD", "Central African Rep.": "CF",
  "Angola": "AO", "Mozambique": "MZ", "Guinea-Bissau": "GW", "Cabo Verde": "CV",
  "Cape Verde": "CV", "São Tomé and Príncipe": "ST",
  "Ethiopia": "ET", "Somalia": "SO", "Eritrea": "ER", "Djibouti": "DJ",
  "Madagascar": "MG", "Mauritius": "MU", "Seychelles": "SC", "Comoros": "KM",
  "Eq. Guinea": "GQ", "Antarctica": "AQ", "N. Cyprus": "CY", "Greenland": "GL",
  "Singapore": "SG"
};

const REGIONS_CONFIG = [
  {
    region: "EUROPE",
    groups: [
      { name: "⚙️ GERMANICS", subgroups: [
        { name: "Central", countries: ["DE", "CH", "NL", "AT", "LI", "LU"] },
        { name: "Anglo", countries: ["GB", "IE"] },
        { name: "Norse-Scand", countries: ["SE", "NO", "DK", "IS"] }
      ]},
      { name: "🏛️ GRECO-ROMANS", subgroups: [
        { name: "Franco", countries: ["FR", "BE", "MC"] },
        { name: "Iberians", countries: ["ES", "PT", "AD"] },
        { name: "Italics", countries: ["IT", "VA", "MT", "SM"] },
        { name: "Hellenics", countries: ["GR", "CY"] },
        { name: "Romance", countries: ["RO", "MD"] }
      ]},
      { name: "🪆 SLAVS", subgroups: [
        { name: "Balkan Slavs", countries: ["BG", "MK", "RS", "BA", "ME", "HR", "SI"] },
        { name: "West Slavs", countries: ["PL", "CZ", "SK"] },
        { name: "East Slavs", countries: ["UA", "RU", "BY"] }
      ]},
      { name: "🪨 OTHERS", subgroups: [
        { name: "Finno-Ugric", countries: ["EE", "HU", "FI"] },
        { name: "Baltic", countries: ["LT", "LV"] },
        { name: "Uniq-Caucasu", countries: ["AL", "XK", "GE", "AM", "AZ"] }
      ]}
    ]
  },
  {
    region: "AMERICAS",
    groups: [
      { name: "🦅 GERMANICS", subgroups: [
        { name: "Anglo-America", countries: ["US", "CA"] },
        { name: "Francophone", countries: ["HT"] }
      ]},
      { name: "🪭 SPANISH", subgroups: [
        { name: "Aztec & Maya", countries: ["MX", "GT", "HN", "SV", "NI", "CR", "PA"] },
        { name: "Inca-Andeans", countries: ["AR", "CL", "PE", "BO", "EC", "CO", "VE"] },
        { name: "Caribbean&Other", countries: ["PY", "CU", "DO", "UY"] }
      ]},
      { name: "🦜 ROMANCE", subgroups: [
        { name: "Luso-African", countries: ["BR"] }
      ]}
    ]
  },
  {
    region: "OCEANIA",
    groups: [
      { name: "🦘 AUSTRALASIA", subgroups: [
        { name: "Anglo-Abo", countries: ["AU"] }
      ]},
      { name: "🪶 POLYNESIA", subgroups: [
        { name: "Anglo-Mao", countries: ["NZ"] },
        { name: "Island Polynesia", countries: ["WS", "TO", "TV"] }
      ]},
      { name: "🗿 MICROMELANESIA", subgroups: [
        { name: "Small Islands", countries: ["PW", "FM", "MH", "NR", "KI"] },
        { name: "Black Islands", countries: ["FJ", "PG", "SB", "VU"] }
      ]}
    ]
  },
  {
    region: "ASIA",
    groups: [
      { name: "🕯️ ABRAHAMIC", subgroups: [
        { name: "Muslims Arabs", countries: ["JO", "QA", "SA", "AE", "KW", "BH", "OM", "YE", "IQ", "SY", "LB", "PS"] },
        { name: "Muslims Turkish", countries: ["TR", "KZ", "UZ", "TM", "KG"] },
        { name: "Muslims Persians", countries: ["IR", "AF", "PK", "TJ"] },
        { name: "Muslims SE", countries: ["ID", "MY", "BD", "BN", "MV"] },
        { name: "Catholic", countries: ["PH", "TL"] },
        { name: "Jews", countries: ["IL"] }
      ]},
      { name: "🧘 HINDUS", subgroups: [
        { name: "Hindus", countries: ["IN", "NP"] }
      ]},
      { name: "🧘🏻‍♂️ BUDDHIST & TAO", subgroups: [
        { name: "Theravada Budd.", countries: ["TH", "MM", "KH", "LA", "LK"] },
        { name: "Vajrayana Budd.", countries: ["MN", "BT"] },
        { name: "Mahayana Budd.", countries: ["JP", "KR", "VN"] },
        { name: "Taoist, Conf.", countries: ["CN", "TW", "KP", "SG"] }
      ]}
    ]
  },
  {
    region: "AFRICA",
    groups: [
      { name: "🫖 MAGHREB & NORTH", subgroups: [
        { name: "Arab-Berber", countries: ["MA", "DZ", "TN", "LY", "MR"] },
        { name: "Nile Valley", countries: ["EG", "SD"] }
      ]},
      { name: "💎 ANGLOPHONE", subgroups: [
        { name: "West (English)", countries: ["NG", "GH", "SL", "LR", "GM"] },
        { name: "East (Swahili)", countries: ["KE", "TZ", "UG", "RW", "BI", "SS"] },
        { name: "Southern Africa", countries: ["ZA", "ZW", "ZM", "BW", "NA", "LS", "SZ", "MW"] }
      ]},
      { name: "🪘 FRANCOPHONE", subgroups: [
        { name: "West (French)", countries: ["SN", "ML", "CI", "BF", "NE", "TG", "BJ", "GN"] },
        { name: "Central Africa", countries: ["CD", "CG", "GA", "CM", "TD", "CF"] }
      ]},
      { name: "🥁 LUSO & OTHERS", subgroups: [
        { name: "Portuguese Speak", countries: ["AO", "MZ", "GW", "CV", "ST"] },
        { name: "Horn (Cushitic)", countries: ["ET", "SO", "ER", "DJ"] },
        { name: "Indian Ocean", countries: ["MG", "MU", "SC", "KM"] }
      ]}
    ]
  }
];

// Reactive state
const loading = ref(true);
const sidebarCollapsed = ref(false);
const searchQuery = ref('');
const lockedGroupId = ref<string | null>(null);
const activeRegion = ref<string | null>(null);
const tooltipVisible = ref(false);
const tooltipContent = ref('');
const tooltipStyle = ref({ left: '0px', top: '0px' });

// D3 refs
const worldMap = ref<SVGSVGElement | null>(null);
const sidebarContent = ref<HTMLElement | null>(null);
let svg: d3.Selection<SVGSVGElement, unknown, null, undefined>;
let g: d3.Selection<SVGGElement, unknown, null, undefined>;
let zoom: d3.ZoomBehavior<SVGSVGElement, unknown>;
let projection: d3.GeoProjection;
let path: d3.GeoPath;

// Data
interface CountryData {
  region: string;
  group: string;
  groupId: string;
  subgroup: string;
  color: string;
}
const countryMap = ref<Record<string, CountryData>>({});
const hierarchy = ref<any[]>([]);
const totalCountries = ref(0);

const totalGroups = computed(() => {
  return hierarchy.value.reduce((sum, r) => sum + r.groups.length, 0);
});

function getGroupColor(groupName: string): string {
  const n = groupName.toUpperCase();
  if (n.includes("GERMANIC") && !n.includes("AMERICA")) return COLORS["GERMANICS"];
  if (n.includes("GRECO") || n.includes("ROMAN")) return COLORS["GRECO-ROMANS"];
  if (n.includes("SLAV")) return COLORS["SLAVS"];
  if (n.includes("OTHER") && !n.includes("LUSO")) return COLORS["EU_OTHERS"];
  if (n.includes("GERMANIC") && n.includes("🦅")) return COLORS["AM_GERMANICS"];
  if (n.includes("ANGLO-AMERICA") || n.includes("🦅")) return COLORS["AM_GERMANICS"];
  if (n.includes("SPANISH") || n.includes("🪭")) return COLORS["SPANISH"];
  if (n.includes("ROMANCE") || n.includes("🦜") || n.includes("LUSO-AFRICAN")) return COLORS["ROMANCE"];
  if (n.includes("AUSTRALASIA") || n.includes("🦘")) return COLORS["AUSTRALASIA"];
  if (n.includes("POLYNESIA") || n.includes("🪶")) return COLORS["POLYNESIA"];
  if (n.includes("MICRO") || n.includes("MELANESIA") || n.includes("🗿")) return COLORS["MICROMELANESIA"];
  if (n.includes("ABRAHAMIC") || n.includes("🕯️")) return COLORS["ABRAHAMIC"];
  if (n.includes("HINDU") || n.includes("🧘 ")) return COLORS["HINDUS"];
  if (n.includes("BUDDHIST") || n.includes("TAO") || n.includes("🧘🏻")) return COLORS["BUDDHIST"];
  if (n.includes("MAGHREB") || n.includes("NORTH") || n.includes("🫖")) return COLORS["MAGHREB"];
  if (n.includes("ANGLOPHONE") || n.includes("💎")) return COLORS["AF_ANGLOPHONE"];
  if (n.includes("FRANCOPHONE") || n.includes("🪘")) return COLORS["FRANCOPHONE"];
  if (n.includes("LUSO") || n.includes("🥁")) return COLORS["LUSO_OTHERS"];
  return "#64748b";
}

function isoToFlag(iso: string): string {
  if (!iso || iso.length !== 2) return '';
  return String.fromCodePoint(iso.charCodeAt(0) - 65 + 0x1F1E6, iso.charCodeAt(1) - 65 + 0x1F1E6);
}

function buildData() {
  const newHierarchy: any[] = [];
  const newCountryMap: Record<string, CountryData> = {};
  let count = 0;
  let gid = 0;

  for (const rc of REGIONS_CONFIG) {
    const region = {
      name: rc.region,
      groups: [] as any[],
      baseColor: REGION_COLORS[rc.region],
      element: REGION_ELEMENTS[rc.region]
    };

    for (const gc of rc.groups) {
      gid++;
      const color = getGroupColor(gc.name);
      const group = { name: gc.name, id: 'g' + gid, color, subgroups: [] as any[], countryCount: 0 };

      for (const sc of gc.subgroups) {
        const sub = { name: sc.name, flags: sc.countries.map(isoToFlag).join(' '), count: sc.countries.length };
        for (const iso of sc.countries) {
          newCountryMap[iso] = {
            region: rc.region,
            group: gc.name,
            groupId: group.id,
            subgroup: sc.name,
            color
          };
          group.countryCount++;
          count++;
        }
        group.subgroups.push(sub);
      }
      region.groups.push(group);
    }
    newHierarchy.push(region);
  }

  hierarchy.value = newHierarchy;
  countryMap.value = newCountryMap;
  totalCountries.value = count;
}

function setupMap() {
  if (!worldMap.value) return;

  const wrapper = worldMap.value.parentElement;
  if (!wrapper) return;

  const w = wrapper.clientWidth;
  const h = wrapper.clientHeight;

  svg = d3.select(worldMap.value);
  g = svg.append('g');

  projection = d3.geoNaturalEarth1()
    .scale(w / 5.5)
    .translate([w / 2, h / 2]);

  path = d3.geoPath().projection(projection);

  zoom = d3.zoom<SVGSVGElement, unknown>()
    .scaleExtent([1, 8])
    .on('zoom', (e) => g.attr('transform', e.transform));

  svg.call(zoom);

  // Ocean background
  g.append('rect')
    .attr('x', -5000)
    .attr('y', -5000)
    .attr('width', 15000)
    .attr('height', 15000)
    .attr('fill', '#1a2634')
    .style('cursor', 'pointer');

  // Graticule
  const graticule = d3.geoGraticule();
  g.append('path')
    .datum(graticule())
    .attr('class', 'graticule')
    .attr('d', path)
    .attr('fill', 'none')
    .attr('stroke', 'rgba(255,255,255,0.08)')
    .attr('stroke-width', '0.3px');

  // Handle resize
  window.addEventListener('resize', () => {
    if (!wrapper) return;
    const nw = wrapper.clientWidth;
    const nh = wrapper.clientHeight;
    projection.translate([nw / 2, nh / 2]).scale(nw / 5.5);
    g.selectAll('path').attr('d', path as any);
  });
}

async function loadMap() {
  try {
    const response = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
    const world = await response.json();
    renderCountries(world);
  } catch (e) {
    console.error('Failed to load map:', e);
    loading.value = false;
  }
}

function renderCountries(world: any) {
  const featureCollection = topojson.feature(world, world.objects.countries as any) as any;
  const features = featureCollection.features;

  g.selectAll('.country')
    .data(features)
    .enter()
    .append('path')
    .attr('d', path as any)
    .attr('class', 'country')
    .attr('fill', (d: any) => {
      const iso = NAME_TO_ISO[d.properties?.name];
      const data = iso ? countryMap.value[iso] : null;
      return data ? data.color : '#2a3441';
    })
    .attr('stroke', 'rgba(0,0,0,0.6)')
    .attr('stroke-width', '0.3px')
    .attr('filter', 'url(#terrain-mountains)')
    .attr('data-gid', (d: any) => {
      const iso = NAME_TO_ISO[d.properties?.name];
      return (iso && countryMap.value[iso]) ? countryMap.value[iso].groupId : '';
    })
    .attr('data-region', (d: any) => {
      const iso = NAME_TO_ISO[d.properties?.name];
      return (iso && countryMap.value[iso]) ? countryMap.value[iso].region : '';
    })
    .style('cursor', 'pointer')
    .style('transition', 'opacity 0.3s ease, filter 0.2s ease')
    .on('click', onCountryClick)
    .on('mouseover', onCountryOver)
    .on('mousemove', onCountryMove)
    .on('mouseout', onCountryOut);

  loading.value = false;
}

function onCountryClick(event: MouseEvent, _d: any) {
  event.stopPropagation();
  const gid = d3.select(event.currentTarget as Element).attr('data-gid');
  if (!gid) return;

  if (lockedGroupId.value === gid) {
    lockedGroupId.value = null;
    resetOpacity();
  } else {
    lockedGroupId.value = gid;
    highlightGroup(gid);
  }
}

function onCountryOver(_event: MouseEvent, d: any) {
  const name = d.properties?.name || 'Unknown';
  const iso = NAME_TO_ISO[name];
  const data = iso ? countryMap.value[iso] : null;

  tooltipContent.value = `<div class="tooltip-title">${name}</div>` +
    (data
      ? `<div class="tooltip-region">${data.region}</div><div class="tooltip-group" style="color:${data.color}">${data.group}</div><div class="tooltip-subgroup">${data.subgroup}</div>`
      : '<div class="tooltip-unassigned">Not classified</div>');
  tooltipVisible.value = true;

  if (!lockedGroupId.value && data) {
    highlightGroup(data.groupId);
  }
}

function onCountryMove(event: MouseEvent) {
  tooltipStyle.value = {
    left: (event.pageX + 12) + 'px',
    top: (event.pageY + 12) + 'px'
  };
}

function onCountryOut() {
  tooltipVisible.value = false;
  if (!lockedGroupId.value) {
    resetOpacity();
  }
}

function highlightGroup(gid: string) {
  g.selectAll('.country')
    .style('opacity', function() {
      return d3.select(this).attr('data-gid') === gid ? 1 : 0.08;
    });
}

function highlightRegion(reg: string) {
  g.selectAll('.country')
    .style('opacity', function() {
      return d3.select(this).attr('data-region') === reg ? 1 : 0.08;
    });
}

function resetOpacity() {
  g.selectAll('.country').style('opacity', 1);
}

function toggleSidebar() {
  sidebarCollapsed.value = !sidebarCollapsed.value;
}

function toggleGroup(gid: string) {
  if (lockedGroupId.value === gid) {
    lockedGroupId.value = null;
    resetOpacity();
  } else {
    lockedGroupId.value = gid;
    highlightGroup(gid);
  }
}

function toggleRegion(name: string) {
  if (activeRegion.value === name) {
    activeRegion.value = null;
    lockedGroupId.value = null;
    resetOpacity();
  } else {
    activeRegion.value = name;
    lockedGroupId.value = null;
    highlightRegion(name);
  }
}

function onMapClick(event: MouseEvent) {
  if ((event.target as Element).tagName === 'svg' || (event.target as Element).tagName === 'rect') {
    lockedGroupId.value = null;
    activeRegion.value = null;
    resetOpacity();
  }
}

function zoomIn() {
  svg.transition().duration(300).call(zoom.scaleBy, 1.5);
}

function zoomOut() {
  svg.transition().duration(300).call(zoom.scaleBy, 0.67);
}

function resetZoom() {
  svg.transition().duration(500).call(zoom.transform, d3.zoomIdentity);
  lockedGroupId.value = null;
  activeRegion.value = null;
  resetOpacity();
}

function onSearch() {
  const q = searchQuery.value.toLowerCase().trim();
  if (!sidebarContent.value) return;

  const regionBlocks = sidebarContent.value.querySelectorAll('.region-block');
  regionBlocks.forEach((rb: Element) => {
    let regionMatch = false;
    const groupBlocks = rb.querySelectorAll('.group-block');

    groupBlocks.forEach((gb: Element) => {
      const groupName = gb.querySelector('.group-name')?.textContent?.toLowerCase() || '';
      let groupMatch = groupName.includes(q);

      const subItems = gb.querySelectorAll('.subgroup-item');
      subItems.forEach((si: Element) => {
        if (si.textContent?.toLowerCase().includes(q)) groupMatch = true;
      });

      (gb as HTMLElement).style.display = (!q || groupMatch) ? '' : 'none';
      if (groupMatch) regionMatch = true;
    });

    (rb as HTMLElement).style.display = (!q || regionMatch) ? '' : 'none';
  });
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    resetZoom();
  }
  if (e.key === 'm' || e.key === 'M') {
    toggleSidebar();
  }
}

onMounted(() => {
  buildData();
  setupMap();
  loadMap();
  document.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped>
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes fadeSlideIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }

.roadtrip-app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-family: "Inter", "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: #1a1a1a;
  color: #f1f5f9;
  line-height: 1.5;
}

.roadtrip-loader {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #1a1a1a;
  z-index: 9999;
  transition: opacity 0.5s;
}
.roadtrip-loader h2 { font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem; }
.roadtrip-loader p { color: #64748b; font-size: 0.875rem; }
.loader-spinner {
  width: 48px; height: 48px;
  border: 3px solid hsla(0,0%,100%,.12);
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-bottom: 24px;
}

.map-wrapper {
  position: absolute;
  inset: 0;
  background: #1a2634;
  z-index: 1;
  cursor: pointer;
}
#world-map { width: 100%; height: 100%; display: block; }

.sidebar {
  position: fixed;
  top: 0; left: 0; bottom: 0;
  width: 380px;
  background: rgba(15,15,20,.97);
  backdrop-filter: blur(16px);
  border-right: 1px solid hsla(0,0%,100%,.06);
  transform: translateX(0);
  transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
  z-index: 100;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 0 32px rgba(0,0,0,.5);
}
.sidebar.collapsed { transform: translateX(-100%); }

.sidebar-header {
  padding: 20px 24px;
  border-bottom: 1px solid hsla(0,0%,100%,.06);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sidebar-header h1 {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #f1f5f9;
}
.sidebar-header h1::before { content: "🗺️"; font-size: 1.1rem; }

.close-btn {
  background: none;
  border: none;
  cursor: pointer;
  width: 32px; height: 32px;
  color: #64748b;
  font-size: 1.1rem;
  border-radius: 6px;
  transition: all 0.2s;
}
.close-btn:hover { color: #f1f5f9; background: hsla(0,0%,100%,.08); }

.search-container { padding: 14px 24px; border-bottom: 1px solid hsla(0,0%,100%,.06); }
.search-wrapper { position: relative; }
.search-wrapper::before {
  content: "🔍";
  position: absolute;
  left: 12px; top: 50%;
  transform: translateY(-50%);
  font-size: 0.75rem;
  opacity: 0.4;
  pointer-events: none;
}
.search-input {
  width: 100%;
  padding: 10px 14px 10px 38px;
  background: rgba(0,0,0,.3);
  border: 1px solid hsla(0,0%,100%,.06);
  border-radius: 8px;
  color: #f1f5f9;
  font-size: 0.8rem;
  font-family: inherit;
  outline: none;
  transition: all 0.2s;
}
.search-input::placeholder { color: #64748b; }
.search-input:focus { border-color: hsla(220,70%,60%,.5); background: rgba(0,0,0,.4); }

.stats-bar {
  display: flex;
  padding: 14px 24px;
  gap: 10px;
  border-bottom: 1px solid hsla(0,0%,100%,.06);
  background: rgba(0,0,0,.2);
}
.stat { flex: 1; text-align: center; }
.stat-value { font-size: 1.3rem; font-weight: 700; color: #f1f5f9; line-height: 1; }
.stat-label { font-size: 0.55rem; color: #64748b; text-transform: uppercase; letter-spacing: 0.08em; margin-top: 4px; font-weight: 500; }

.sidebar-content {
  flex: 1;
  overflow-y: auto;
  padding-bottom: 48px;
  scrollbar-width: thin;
  scrollbar-color: #334155 transparent;
}

.region-block { animation: fadeSlideIn 0.4s ease-out backwards; }
.region-title {
  padding: 20px 24px 10px;
  font-size: 0.6rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  display: flex;
  align-items: center;
  gap: 10px;
}
.region-title::after {
  content: "";
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, hsla(0,0%,100%,.1) 0%, transparent 100%);
}

.group-block {
  border-left: 3px solid transparent;
  transition: all 0.2s;
  margin: 1px 0;
}
.group-block.pinned { background: hsla(0,0%,100%,.04); }
.group-block.pinned .pin-indicator { opacity: 1; }

.group-header {
  padding: 12px 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  color: #cbd5e1;
  transition: all 0.2s;
}
.group-header:hover { color: #f1f5f9; background: hsla(0,0%,100%,.03); }

.color-dot {
  width: 14px; height: 14px;
  border-radius: 3px;
  margin-right: 12px;
  flex-shrink: 0;
  box-shadow: 0 2px 6px rgba(0,0,0,.4), inset 0 1px 0 hsla(0,0%,100%,.2);
}
.group-name { flex: 1; font-weight: 500; }
.group-count {
  font-size: 0.65rem;
  color: #64748b;
  background: rgba(0,0,0,.3);
  padding: 3px 8px;
  border-radius: 10px;
  margin-right: 10px;
  font-weight: 600;
}
.pin-indicator {
  font-size: 0.5rem;
  opacity: 0;
  color: #f1f5f9;
  background: hsla(220,70%,50%,.25);
  border: 1px solid hsla(220,70%,50%,.4);
  border-radius: 3px;
  padding: 2px 6px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  transition: opacity 0.2s;
}

.subgroup-list {
  background: rgba(0,0,0,.25);
  padding: 6px 0;
  border-top: 1px solid hsla(0,0%,100%,.03);
}
.subgroup-item {
  padding: 8px 24px 8px 50px;
  font-size: 0.75rem;
  color: #64748b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s;
}
.subgroup-item:hover { background: hsla(0,0%,100%,.02); color: #cbd5e1; }
.subgroup-name { font-weight: 500; }
.subgroup-flags { opacity: 0.8; font-size: 0.85rem; letter-spacing: 1px; }

.controls {
  position: fixed;
  top: 16px; left: 16px;
  z-index: 50;
  display: flex;
  gap: 8px;
}
.menu-btn {
  background: rgba(15,15,20,.9);
  backdrop-filter: blur(12px);
  border: 1px solid hsla(0,0%,100%,.06);
  width: 44px; height: 44px;
  border-radius: 12px;
  color: #f1f5f9;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}
.menu-btn:hover {
  background: rgba(30,30,40,.95);
  border-color: hsla(0,0%,100%,.12);
  transform: scale(1.04);
}

.zoom-controls {
  position: fixed;
  bottom: 20px; right: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  z-index: 50;
}
.zoom-btn {
  background: rgba(15,15,20,.9);
  backdrop-filter: blur(12px);
  border: 1px solid hsla(0,0%,100%,.06);
  width: 38px; height: 38px;
  border-radius: 10px;
  color: #f1f5f9;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s;
}
.zoom-btn:hover { background: rgba(30,30,40,.95); border-color: hsla(0,0%,100%,.12); }

.tooltip {
  position: fixed;
  background: rgba(15,15,20,.96);
  backdrop-filter: blur(16px);
  border: 1px solid hsla(0,0%,100%,.1);
  padding: 12px 16px;
  border-radius: 10px;
  font-size: 0.8rem;
  pointer-events: none;
  z-index: 1000;
  box-shadow: 0 8px 32px rgba(0,0,0,.6);
  min-width: 160px;
  max-width: 240px;
}
:deep(.tooltip-title) {
  font-weight: 700;
  font-size: 0.95rem;
  border-bottom: 1px solid hsla(0,0%,100%,.08);
  padding-bottom: 6px;
  margin-bottom: 8px;
}
:deep(.tooltip-region) {
  font-size: 0.6rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 500;
}
:deep(.tooltip-group) { font-weight: 600; font-size: 0.85rem; margin: 4px 0 2px; }
:deep(.tooltip-subgroup) { font-size: 0.75rem; color: #cbd5e1; }
:deep(.tooltip-unassigned) { color: #64748b; font-style: italic; }

.legend {
  position: fixed;
  bottom: 20px; left: 20px;
  background: rgba(15,15,20,.9);
  backdrop-filter: blur(12px);
  border: 1px solid hsla(0,0%,100%,.06);
  border-radius: 12px;
  padding: 14px;
  z-index: 50;
  max-width: 300px;
}
.legend-title {
  font-size: 0.55rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 10px;
  font-weight: 600;
}
.legend-items { display: flex; flex-wrap: wrap; gap: 6px; }
.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  background: rgba(0,0,0,.3);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.7rem;
  color: #64748b;
  font-weight: 500;
}
.legend-item:hover { background: hsla(0,0%,100%,.06); color: #f1f5f9; }
.legend-item.active {
  outline: 2px solid;
  outline-offset: 2px;
  color: #f1f5f9;
  background: hsla(0,0%,100%,.08);
}
.legend-dot {
  width: 10px; height: 10px;
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(0,0,0,.4);
}

@media (max-width: 768px) {
  .sidebar { width: 100%; }
  .legend { display: none; }
  .controls { top: 10px; left: 10px; }
  .zoom-controls { bottom: 12px; right: 12px; }
  .menu-btn { width: 40px; height: 40px; }
  .zoom-btn { width: 36px; height: 36px; }
}
</style>
