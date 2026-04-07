import type { AstroLine, City } from '../types';

const NS = 'http://www.w3.org/2000/svg';

function svgEl(tag: string, attrs: Record<string, string | number>): SVGElement {
  const el = document.createElementNS(NS, tag);
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, String(v)));
  return el;
}

const CONTINENT_PATHS = [
  'M-160,10 L-130,10 L-100,30 L-80,50 L-60,45 L-50,30 L-80,20 L-100,25 L-130,40 L-160,35 Z',
  'M-80,-10 L-60,-5 L-40,-30 L-35,-55 L-55,-55 L-70,-35 L-80,-20 Z',
  'M-10,35 L10,40 L30,55 L50,55 L40,45 L20,40 L0,35 Z',
  'M-20,30 L20,30 L35,0 L30,-35 L10,-35 L-10,-20 L-20,10 Z',
  'M40,55 L80,70 L130,65 L150,50 L140,30 L100,20 L60,25 L50,40 Z',
  'M110,-15 L150,-20 L155,-40 L130,-45 L110,-35 Z',
];

export function renderMap(container: HTMLElement, linesData: AstroLine[], cityPins: City[]): void {
  container.innerHTML = '';

  const svg = svgEl('svg', {
    viewBox: '-180 -90 360 180',
    preserveAspectRatio: 'xMidYMid meet',
    class: 'astro-map-svg'
  });

  // Background
  svg.appendChild(svgEl('rect', { x: -180, y: -90, width: 360, height: 180, fill: '#0f172a' }));

  // Grid
  const grid = svgEl('g', { stroke: '#334155', 'stroke-width': '0.3', opacity: '0.5' });
  [-60, -30, 0, 30, 60].forEach(lat => {
    grid.appendChild(svgEl('line', { x1: -180, y1: -lat, x2: 180, y2: -lat }));
  });
  [-150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150].forEach(lng => {
    grid.appendChild(svgEl('line', { x1: lng, y1: -90, x2: lng, y2: 90 }));
  });
  svg.appendChild(grid);

  // Continents
  const continents = svgEl('g', { fill: '#1e293b', stroke: '#475569', 'stroke-width': '0.5' });
  CONTINENT_PATHS.forEach(d => {
    continents.appendChild(svgEl('path', { d }));
  });
  svg.appendChild(continents);

  // Astro lines
  linesData.forEach(line => {
    const g = svgEl('g', {});
    g.appendChild(svgEl('line', {
      x1: line.longitudeDegrees, y1: -90,
      x2: line.longitudeDegrees, y2: 90,
      stroke: line.planet.cssColor,
      'stroke-width': '1.5',
      opacity: '0.6'
    }));
    const label = svgEl('text', {
      x: line.longitudeDegrees, y: -80,
      fill: line.planet.cssColor,
      'font-size': '6',
      'text-anchor': 'middle',
      'font-weight': 'bold'
    });
    label.textContent = line.planet.symbol;
    g.appendChild(label);
    svg.appendChild(g);
  });

  // City pins
  cityPins.forEach((city, i) => {
    const g = svgEl('g', { key: `city${i}` });
    g.appendChild(svgEl('circle', {
      cx: city.lng, cy: -city.lat, r: 3,
      fill: '#ffffff', stroke: '#a855f7', 'stroke-width': '1'
    }));
    const txt = svgEl('text', {
      x: city.lng + 4, y: -city.lat + 2,
      fill: '#e2e8f0', 'font-size': '4'
    });
    txt.textContent = city.name.split(',')[0];
    g.appendChild(txt);
    svg.appendChild(g);
  });

  container.appendChild(svg);

  // Legend
  const legend = document.createElement('div');
  legend.className = 'map-legend';
  linesData.slice(0, 5).forEach(line => {
    const item = document.createElement('div');
    item.className = 'map-legend__item';
    const dot = document.createElement('div');
    dot.className = 'map-legend__dot';
    dot.style.backgroundColor = line.planet.cssColor;
    const name = document.createElement('span');
    name.textContent = line.planet.name;
    item.appendChild(dot);
    item.appendChild(name);
    legend.appendChild(item);
  });
  container.appendChild(legend);
}
