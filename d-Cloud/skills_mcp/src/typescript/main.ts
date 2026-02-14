// ============================================
// SKILLS & MCP TOOLS DOCS - MAIN TS
// ============================================
// Data imported from generated file (built from docs/ markdown)
import { mcpTools, officialSkills, communitySkills, apiEndpoints, endpoints } from './data.generated';
type Endpoint = typeof endpoints[number];

// ============================================
// Debug Logger
// ============================================
const DEBUG = true;
function log(tag: string, ...args: any[]): void {
  if (!DEBUG) return;
  console.log(`[skills-mcp][${tag}]`, ...args);
}
function warn(tag: string, ...args: any[]): void {
  console.warn(`[skills-mcp][${tag}]`, ...args);
}
function error(tag: string, ...args: any[]): void {
  console.error(`[skills-mcp][${tag}]`, ...args);
}

// ============================================
// DOM Elements
// ============================================
function getEl<T extends HTMLElement>(selector: string, label: string): T | null {
  const el = document.querySelector<T>(selector);
  if (!el) warn('dom', `Missing element: ${label} (${selector})`);
  else log('dom', `Found: ${label}`);
  return el;
}

const sidebar = getEl<HTMLElement>('.sidebar', 'sidebar');
const sidebarToggle = getEl<HTMLElement>('.sidebar-toggle', 'sidebarToggle');
const sidebarOverlay = getEl<HTMLElement>('.sidebar-overlay', 'sidebarOverlay');
const searchInput = getEl<HTMLInputElement>('.search__input', 'searchInput');
const filterBtns = document.querySelectorAll<HTMLButtonElement>('.filter-btn');
const endpointList = getEl<HTMLElement>('.endpoint-list', 'endpointList');
const sidebarNav = getEl<HTMLElement>('.sidebar__nav', 'sidebarNav');

log('init', `Data loaded — MCP: ${mcpTools.length}, Official: ${officialSkills.length}, Community: ${communitySkills.length}, API: ${apiEndpoints.length}, Total: ${endpoints.length}`);
log('dom', `Filter buttons found: ${filterBtns.length}`);

// ============================================
// State
// ============================================
let activeFilter: 'all' | 'mcp' | 'skill' | 'api' = 'all';
let searchQuery = '';

// ============================================
// Functions
// ============================================

function toggleSidebar(): void {
  if (!sidebar || !sidebarOverlay) {
    warn('sidebar', 'Cannot toggle — sidebar or overlay element missing');
    return;
  }
  const willOpen = !sidebar.classList.contains('is-open');
  sidebar.classList.toggle('is-open');
  sidebarOverlay.classList.toggle('is-visible');
  log('sidebar', willOpen ? 'opened' : 'closed');
}

function closeSidebar(): void {
  if (!sidebar || !sidebarOverlay) return;
  const wasOpen = sidebar.classList.contains('is-open');
  sidebar.classList.remove('is-open');
  sidebarOverlay.classList.remove('is-visible');
  if (wasOpen) log('sidebar', 'closed');
}

function toggleEndpoint(element: HTMLElement): void {
  if (!element) {
    warn('endpoint', 'toggleEndpoint called with null element');
    return;
  }
  element.classList.toggle('is-open');
}

function filterEndpoints(): Endpoint[] {
  const filtered = endpoints.filter(ep => {
    const matchesFilter = activeFilter === 'all' || ep.type === activeFilter;
    const matchesSearch = searchQuery === '' ||
      ep.name.toLowerCase().includes(searchQuery) ||
      ep.summary.toLowerCase().includes(searchQuery) ||
      ep.path.toLowerCase().includes(searchQuery) ||
      ep.category.toLowerCase().includes(searchQuery) ||
      (ep.description && ep.description.toLowerCase().includes(searchQuery));
    return matchesFilter && matchesSearch;
  });
  log('filter', `filter="${activeFilter}" search="${searchQuery}" → ${filtered.length}/${endpoints.length} results`);
  return filtered;
}

function renderEndpoint(ep: Endpoint): string {
  try {
    const paramsHtml = ep.parameters && ep.parameters.length > 0 ? `
      <h4 class="endpoint__section-title">Parameters</h4>
      <table class="params-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Required</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          ${ep.parameters.map(p => `
            <tr>
              <td class="params-table__name">${p.name}</td>
              <td class="params-table__type">${p.type}</td>
              <td class="params-table__required">${p.required ? 'Yes' : 'No'}</td>
              <td>${p.description}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    ` : '';

    const mcpHtml = ep.requiredMcp && ep.requiredMcp.length > 0 ? `
      <h4 class="endpoint__section-title">Required MCP Tools</h4>
      <div class="tags">
        ${ep.requiredMcp.map(mcp => `<span class="badge badge--mcp">${mcp}</span>`).join('')}
      </div>
    ` : '';

    const sourceHtml = ep.source ? `
      <div class="mt-md text-xs text-muted">
        Source: <a href="https://github.com/${ep.source}" target="_blank">${ep.source}</a>
      </div>
    ` : '';

    const exampleHtml = ep.example ? `
      <h4 class="endpoint__section-title">Example</h4>
      <div class="code-block">
        <div class="code-block__header">
          <span class="code-block__lang">${ep.type === 'mcp' ? 'typescript' : 'prompt'}</span>
          <button class="code-block__copy" data-code="${encodeURIComponent(ep.example)}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
            </svg>
            Copy
          </button>
        </div>
        <div class="code-block__content">
          <code>${escapeHtml(ep.example)}</code>
        </div>
      </div>
    ` : '';

    return `
      <article class="endpoint endpoint--${ep.type}" id="${ep.id}" data-category="${ep.category}">
        <div class="endpoint__header" onclick="toggleEndpoint(this.parentElement)">
          <span class="endpoint__method endpoint__method--${ep.type === 'api' ? (ep.method || 'get').toLowerCase() : ep.type}">${ep.type === 'api' ? (ep.method || 'GET') : ep.type.toUpperCase()}</span>
          <span class="endpoint__path">${ep.path}</span>
          <span class="endpoint__summary">${ep.summary}</span>
          <span class="endpoint__toggle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </span>
        </div>
        <div class="endpoint__body">
          <p class="endpoint__description">${ep.description}</p>
          ${mcpHtml}
          ${paramsHtml}
          ${exampleHtml}
          ${sourceHtml}
        </div>
      </article>
    `;
  } catch (err) {
    error('renderEndpoint', `Failed to render "${ep.id || ep.name}"`, err);
    return `<article class="endpoint endpoint--error"><div class="endpoint__header"><span class="endpoint__summary">Error rendering: ${ep.name || 'unknown'}</span></div></article>`;
  }
}

function renderEndpoints(): void {
  if (!endpointList) {
    error('render', 'endpointList element not found — cannot render');
    return;
  }
  try {
    const filtered = filterEndpoints();
    const grouped = groupByCategory(filtered);

    let html = '';
    for (const [category, items] of Object.entries(grouped)) {
      const typeLabel = items[0].type === 'mcp' ? 'tools' : items[0].type === 'api' ? 'endpoints' : 'skills';
      html += `
        <section class="section" id="section-${slugify(category)}">
          <div class="section__title">
            <h2>${category}</h2>
            <span class="badge badge--${items[0].type}">${items.length} ${typeLabel}</span>
          </div>
          ${items.map(renderEndpoint).join('')}
        </section>
      `;
    }

    if (filtered.length === 0) {
      html = `
        <div class="text-center text-muted mt-lg">
          <p>No results found for "${searchQuery}"</p>
        </div>
      `;
    }

    endpointList.innerHTML = html;
    attachCopyHandlers();
    log('render', `Rendered ${filtered.length} endpoints in ${Object.keys(grouped).length} categories`);
  } catch (err) {
    error('render', 'renderEndpoints failed', err);
    endpointList.innerHTML = '<div class="text-center text-muted mt-lg"><p>Error rendering endpoints. Check console.</p></div>';
  }
}

function renderSidebarNav(): void {
  if (!sidebarNav) {
    error('sidebar', 'sidebarNav element not found — cannot render nav');
    return;
  }
  try {
    const mcpCategories = [...new Set(mcpTools.map(e => e.category))];
    const officialSkillCategories = [...new Set(officialSkills.map(e => e.category))];
    const communitySkillCategories = [...new Set(communitySkills.map(e => e.category))];
    const apiCategories = [...new Set(apiEndpoints.map(e => e.category))];

    log('sidebar', `Nav categories — official: ${officialSkillCategories.length}, community: ${communitySkillCategories.length}, mcp: ${mcpCategories.length}, api: ${apiCategories.length}`);

    let html = `
      <div class="sidebar__section sidebar__section--graph">
        <a href="#" class="sidebar__graph-link" data-view="graph">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="18" cy="5" r="3"/>
            <circle cx="6" cy="12" r="3"/>
            <circle cx="18" cy="19" r="3"/>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
          </svg>
          Graph View
        </a>
      </div>
      <div class="sidebar__section">
        <div class="sidebar__section-title">
          <span class="sidebar__icon sidebar__icon--skill">S</span>
          Official Skills
        </div>
        <div class="sidebar__subtitle">Anthropic</div>
        ${officialSkillCategories.map(cat => `
          <a href="#section-${slugify(cat)}" class="sidebar__link sidebar__link--skill">${cat}</a>
        `).join('')}
      </div>
      <div class="sidebar__section">
        <div class="sidebar__section-title">
          <span class="sidebar__icon sidebar__icon--community">C</span>
          Community Skills
        </div>
        <div class="sidebar__subtitle">Custom Agents</div>
        ${communitySkillCategories.map(cat => `
          <a href="#section-${slugify(cat)}" class="sidebar__link sidebar__link--community">${cat}</a>
        `).join('')}
      </div>
      <div class="sidebar__section">
        <div class="sidebar__section-title">
          <span class="sidebar__icon sidebar__icon--mcp">T</span>
          MCP Servers
        </div>
        <div class="sidebar__subtitle">Built-in Capabilities</div>
        ${mcpCategories.map(cat => `
          <a href="#section-${slugify(cat)}" class="sidebar__link sidebar__link--mcp">${cat}</a>
        `).join('')}
      </div>
      <div class="sidebar__section">
        <div class="sidebar__section-title">
          <span class="sidebar__icon sidebar__icon--api">A</span>
          API Endpoints
        </div>
        <div class="sidebar__subtitle">Rust API (api.diegonmarcos.com)</div>
        ${apiCategories.map(cat => `
          <a href="#section-${slugify(cat)}" class="sidebar__link sidebar__link--api">${cat}</a>
        `).join('')}
      </div>
    `;

    sidebarNav.innerHTML = html;

    // Add click handler for graph view link
    const graphLink = sidebarNav.querySelector('.sidebar__graph-link');
    graphLink?.addEventListener('click', (e) => {
      e.preventDefault();
      const graphTab = document.querySelector('[data-view="graph"]') as HTMLElement;
      if (graphTab) {
        graphTab.click();
      } else {
        warn('sidebar', 'Graph view tab button not found');
      }
    });

    log('sidebar', 'Nav rendered');
  } catch (err) {
    error('sidebar', 'renderSidebarNav failed', err);
  }
}

function groupByCategory(items: Endpoint[]): Record<string, Endpoint[]> {
  return items.reduce((acc, item) => {
    const cat = item.category || 'Uncategorized';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {} as Record<string, Endpoint[]>);
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/\n/g, '<br>');
}

function attachCopyHandlers(): void {
  document.querySelectorAll('.code-block__copy').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      try {
        const code = decodeURIComponent((btn as HTMLElement).dataset.code || '');
        await navigator.clipboard.writeText(code);
        btn.classList.add('is-copied');
        btn.textContent = 'Copied!';
        log('copy', `Copied ${code.length} chars to clipboard`);
        setTimeout(() => {
          btn.classList.remove('is-copied');
          btn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
            </svg>
            Copy
          `;
        }, 2000);
      } catch (err) {
        error('copy', 'Clipboard write failed', err);
        btn.textContent = 'Failed';
        setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
      }
    });
  });
}

// Make toggleEndpoint available globally
(window as any).toggleEndpoint = toggleEndpoint;

// ============================================
// Graph View
// ============================================
const listView = document.getElementById('list-view') as HTMLElement;
const graphView = document.getElementById('graph-view') as HTMLElement;
const graphSvg = document.getElementById('graph-svg') as SVGSVGElement;
const graphTooltip = document.getElementById('graph-tooltip') as HTMLElement;
const viewTabs = document.querySelectorAll<HTMLButtonElement>('.view-tab');
const filtersContainer = document.getElementById('filters-container') as HTMLElement;

log('dom', `Graph elements — listView: ${!!listView}, graphView: ${!!graphView}, graphSvg: ${!!graphSvg}, tooltip: ${!!graphTooltip}, viewTabs: ${viewTabs.length}, filters: ${!!filtersContainer}`);

let currentView: 'list' | 'graph' = 'list';

interface GraphNode {
  id: string;
  name: string;
  type: 'mcp' | 'skill';
  x: number;
  y: number;
  connections: string[];
}

function switchView(view: 'list' | 'graph'): void {
  log('view', `Switching to ${view} view`);
  currentView = view;
  viewTabs.forEach(tab => {
    tab.classList.toggle('is-active', tab.dataset.view === view);
  });

  if (view === 'list') {
    listView.classList.remove('hidden');
    graphView.classList.add('hidden');
    filtersContainer.style.display = 'flex';
  } else {
    listView.classList.add('hidden');
    graphView.classList.remove('hidden');
    filtersContainer.style.display = 'none';
    renderGraph();
  }
}

// Force simulation state
let simulation: any = null;
let transform = { x: 0, y: 0, k: 1 };
let graphAnimationId: number | null = null;

function renderGraph(): void {
  try {
    // Cancel previous animation frame
    if (graphAnimationId !== null) {
      cancelAnimationFrame(graphAnimationId);
      graphAnimationId = null;
    }

    const width = graphSvg.clientWidth || 900;
    const height = graphSvg.clientHeight || 600;
    const centerX = width / 2;
    const centerY = height / 2;

    log('graph', `Rendering graph ${width}x${height}, center=(${centerX},${centerY})`);

    // Build nodes with initial positions in a circular layout
    const mcpNodes: GraphNode[] = mcpTools.map((tool, i) => {
      const angle = (i / mcpTools.length) * Math.PI * 2;
      const radius = 120;
      return {
        id: tool.id,
        name: tool.name,
        type: 'mcp' as const,
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        connections: [],
        vx: 0,
        vy: 0,
        fx: null,
        fy: null
      };
    });

    const allSkills = [...officialSkills, ...communitySkills];
    const skillNodes: GraphNode[] = allSkills.map((skill, i) => {
      const angle = (i / allSkills.length) * Math.PI * 2 + Math.PI / 4;
      const radius = 280 + Math.random() * 80;
      return {
        id: skill.id,
        name: skill.name,
        type: 'skill' as const,
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        connections: skill.requiredMcp || [],
        vx: 0,
        vy: 0,
        fx: null,
        fy: null,
        isOfficial: officialSkills.includes(skill)
      };
    });

    const allNodes = [...mcpNodes, ...skillNodes];

    // Build edges
    interface Edge { from: GraphNode; to: GraphNode; strength: number }
    const edges: Edge[] = [];
    let unmatchedMcps: string[] = [];
    skillNodes.forEach(skill => {
      skill.connections.forEach(mcpName => {
        const mcpNode = mcpNodes.find(m =>
          m.name === mcpName ||
          m.name.toLowerCase() === mcpName.toLowerCase()
        );
        if (mcpNode) {
          edges.push({ from: skill, to: mcpNode, strength: 0.3 });
        } else {
          unmatchedMcps.push(`${skill.name} → ${mcpName}`);
        }
      });
    });

    log('graph', `Nodes: ${allNodes.length} (${mcpNodes.length} mcp + ${skillNodes.length} skills), Edges: ${edges.length}`);
    if (unmatchedMcps.length > 0) {
      warn('graph', `Unmatched MCP references: ${unmatchedMcps.join(', ')}`);
    }

    // Clear SVG
    graphSvg.innerHTML = '';

    // Create container group for zoom/pan
    const container = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    container.setAttribute('class', 'graph-container-inner');
    graphSvg.appendChild(container);

    // Create defs for gradients and filters
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    defs.innerHTML = `
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <radialGradient id="mcp-gradient" cx="30%" cy="30%">
        <stop offset="0%" stop-color="#67e8f9"/>
        <stop offset="100%" stop-color="#06b6d4"/>
      </radialGradient>
      <radialGradient id="skill-gradient" cx="30%" cy="30%">
        <stop offset="0%" stop-color="#c084fc"/>
        <stop offset="100%" stop-color="#a855f7"/>
      </radialGradient>
      <radialGradient id="community-gradient" cx="30%" cy="30%">
        <stop offset="0%" stop-color="#34d399"/>
        <stop offset="100%" stop-color="#10b981"/>
      </radialGradient>
    `;
    graphSvg.appendChild(defs);

    // Draw edges first (behind nodes)
    const edgeGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    edgeGroup.setAttribute('class', 'graph-edges');
    container.appendChild(edgeGroup);

    const edgeElements: SVGPathElement[] = [];
    edges.forEach(edge => {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      line.setAttribute('class', 'graph-edge');
      line.setAttribute('data-from', edge.from.id);
      line.setAttribute('data-to', edge.to.id);
      line.setAttribute('fill', 'none');
      line.setAttribute('stroke', 'rgba(148, 163, 184, 0.15)');
      line.setAttribute('stroke-width', '1');
      edgeGroup.appendChild(line);
      edgeElements.push(line);
    });

    // Draw nodes
    const nodeGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    nodeGroup.setAttribute('class', 'graph-nodes');
    container.appendChild(nodeGroup);

    const nodeElements: Map<string, SVGGElement> = new Map();
    allNodes.forEach(node => {
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      const isOfficial = (node as any).isOfficial !== false;
      const nodeClass = node.type === 'mcp' ? 'graph-node--mcp' :
                        (isOfficial ? 'graph-node--skill' : 'graph-node--community');
      g.setAttribute('class', `graph-node ${nodeClass}`);
      g.setAttribute('data-id', node.id);
      g.style.cursor = 'pointer';

      // Node circle
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      const radius = node.type === 'mcp' ? 24 : 18;
      circle.setAttribute('r', String(radius));
      circle.setAttribute('cx', '0');
      circle.setAttribute('cy', '0');

      if (node.type === 'mcp') {
        circle.setAttribute('fill', 'url(#mcp-gradient)');
      } else if (isOfficial) {
        circle.setAttribute('fill', 'url(#skill-gradient)');
      } else {
        circle.setAttribute('fill', 'url(#community-gradient)');
      }
      circle.setAttribute('filter', 'url(#glow)');

      // Node label
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('y', String(radius + 14));
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('fill', '#e2e8f0');
      text.setAttribute('font-size', '10');
      text.setAttribute('font-weight', '500');
      text.textContent = node.name.length > 12 ? node.name.substring(0, 11) + '\u2026' : node.name;

      g.appendChild(circle);
      g.appendChild(text);

      // Events
      g.addEventListener('mouseenter', (e) => showTooltip(e, node));
      g.addEventListener('mouseleave', hideTooltip);
      g.addEventListener('click', () => highlightConnections(node, edges));

      // Dragging
      g.addEventListener('mousedown', (e) => {
        (node as any).fx = node.x;
        (node as any).fy = node.y;
        e.stopPropagation();
      });

      nodeGroup.appendChild(g);
      nodeElements.set(node.id, g);
    });

    // Mouse move for dragging
    graphSvg.addEventListener('mousemove', (e) => {
      const rect = graphSvg.getBoundingClientRect();
      const mouseX = (e.clientX - rect.left - transform.x) / transform.k;
      const mouseY = (e.clientY - rect.top - transform.y) / transform.k;

      allNodes.forEach(node => {
        if ((node as any).fx !== null) {
          node.x = mouseX;
          node.y = mouseY;
          (node as any).fx = mouseX;
          (node as any).fy = mouseY;
        }
      });
    });

    graphSvg.addEventListener('mouseup', () => {
      allNodes.forEach(node => {
        (node as any).fx = null;
        (node as any).fy = null;
      });
    });

    // Zoom and pan
    let isPanning = false;
    let startX = 0, startY = 0;

    graphSvg.addEventListener('wheel', (e) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? 0.9 : 1.1;
      transform.k = Math.max(0.3, Math.min(3, transform.k * delta));
      container.setAttribute('transform', `translate(${transform.x}, ${transform.y}) scale(${transform.k})`);
    });

    graphSvg.addEventListener('mousedown', (e) => {
      if (e.target === graphSvg || (e.target as Element).classList.contains('graph-container-inner')) {
        isPanning = true;
        startX = e.clientX - transform.x;
        startY = e.clientY - transform.y;
      }
    });

    graphSvg.addEventListener('mousemove', (e) => {
      if (isPanning) {
        transform.x = e.clientX - startX;
        transform.y = e.clientY - startY;
        container.setAttribute('transform', `translate(${transform.x}, ${transform.y}) scale(${transform.k})`);
      }
    });

    graphSvg.addEventListener('mouseup', () => { isPanning = false; });
    graphSvg.addEventListener('mouseleave', () => { isPanning = false; });

    // Boundary padding
    const padding = 50;
    const minX = padding;
    const maxX = width - padding;
    const minY = padding;
    const maxY = height - padding;

    // Simple force simulation
    function tick() {
      try {
        // Apply forces
        allNodes.forEach(node => {
          if ((node as any).fx !== null) return;

          // Stronger center gravity to keep nodes together
          const dx = centerX - node.x;
          const dy = centerY - node.y;
          node.x += dx * 0.008;
          node.y += dy * 0.008;

          // Node repulsion (reduced force)
          allNodes.forEach(other => {
            if (node === other) return;
            const ddx = node.x - other.x;
            const ddy = node.y - other.y;
            const dist = Math.sqrt(ddx * ddx + ddy * ddy) || 1;
            const minDist = node.type === 'mcp' ? 60 : 45;
            if (dist < minDist) {
              const force = (minDist - dist) / dist * 0.3;
              node.x += ddx * force;
              node.y += ddy * force;
            }
          });

          // Boundary constraint - keep nodes within view
          node.x = Math.max(minX, Math.min(maxX, node.x));
          node.y = Math.max(minY, Math.min(maxY, node.y));
        });

        // Edge attraction (reduced)
        edges.forEach(edge => {
          const dx = edge.to.x - edge.from.x;
          const dy = edge.to.y - edge.from.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const targetDist = 120;
          const force = (dist - targetDist) / dist * 0.01;

          if ((edge.from as any).fx === null) {
            edge.from.x += dx * force;
            edge.from.y += dy * force;
          }
          if ((edge.to as any).fx === null) {
            edge.to.x -= dx * force * 0.1;
            edge.to.y -= dy * force * 0.1;
          }
        });

        // Update positions (with boundary enforcement)
        allNodes.forEach(node => {
          node.x = Math.max(minX, Math.min(maxX, node.x));
          node.y = Math.max(minY, Math.min(maxY, node.y));
          const g = nodeElements.get(node.id);
          if (g) {
            g.setAttribute('transform', `translate(${node.x}, ${node.y})`);
          }
        });

        // Update edges
        edges.forEach((edge, i) => {
          const line = edgeElements[i];
          if (!line) return;
          const dx = edge.to.x - edge.from.x;
          const dy = edge.to.y - edge.from.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const midX = (edge.from.x + edge.to.x) / 2;
          const midY = (edge.from.y + edge.to.y) / 2;
          const offset = Math.min(30, dist * 0.1);
          const perpX = -dy / dist * offset;
          const perpY = dx / dist * offset;

          line.setAttribute('d',
            `M ${edge.from.x} ${edge.from.y} Q ${midX + perpX} ${midY + perpY} ${edge.to.x} ${edge.to.y}`
          );
        });

        graphAnimationId = requestAnimationFrame(tick);
      } catch (err) {
        error('graph', 'Force simulation tick failed', err);
      }
    }

    tick();
    log('graph', 'Graph rendered and simulation started');
  } catch (err) {
    error('graph', 'renderGraph failed', err);
  }
}

function showTooltip(e: MouseEvent, node: GraphNode): void {
  if (!graphTooltip || !graphView) return;
  const endpoint = endpoints.find(ep => ep.id === node.id);
  if (!endpoint) {
    warn('tooltip', `No endpoint found for node "${node.id}"`);
    return;
  }

  let html = `<div class="graph-tooltip__type">${node.type.toUpperCase()}</div>`;
  html += `<div class="graph-tooltip__title">${endpoint.name}</div>`;
  html += `<div>${endpoint.summary}</div>`;

  if (endpoint.requiredMcp && endpoint.requiredMcp.length > 0) {
    html += `<div class="graph-tooltip__deps">Requires: ${endpoint.requiredMcp.join(', ')}</div>`;
  }

  graphTooltip.innerHTML = html;
  graphTooltip.classList.add('is-visible');

  const rect = graphView.getBoundingClientRect();
  const x = e.clientX - rect.left + 10;
  const y = e.clientY - rect.top + 10;
  graphTooltip.style.left = `${x}px`;
  graphTooltip.style.top = `${y}px`;
}

function hideTooltip(): void {
  graphTooltip?.classList.remove('is-visible');
}

function highlightConnections(node: GraphNode, edges: { from: GraphNode; to: GraphNode; strength?: number }[]): void {
  // Reset all
  document.querySelectorAll('.graph-node').forEach(n => {
    n.classList.remove('is-highlighted', 'is-dimmed');
  });
  document.querySelectorAll('.graph-edge').forEach(e => {
    e.classList.remove('is-highlighted');
    (e as SVGElement).style.stroke = 'rgba(148, 163, 184, 0.15)';
    (e as SVGElement).style.strokeWidth = '1';
  });

  // Find connected nodes
  const connectedIds = new Set<string>();
  connectedIds.add(node.id);

  edges.forEach(edge => {
    if (edge.from.id === node.id) {
      connectedIds.add(edge.to.id);
    } else if (edge.to.id === node.id) {
      connectedIds.add(edge.from.id);
    }
  });

  log('graph', `Highlight "${node.name}" — ${connectedIds.size - 1} connections`);

  // Highlight current node
  const currentNodeEl = document.querySelector(`[data-id="${node.id}"]`);
  currentNodeEl?.classList.add('is-highlighted');

  // Dim non-connected nodes, highlight connected
  document.querySelectorAll('.graph-node').forEach(n => {
    const nodeId = n.getAttribute('data-id');
    if (nodeId && !connectedIds.has(nodeId)) {
      n.classList.add('is-dimmed');
    } else if (nodeId && nodeId !== node.id) {
      n.classList.add('is-highlighted');
    }
  });

  // Highlight connected edges
  edges.forEach(edge => {
    if (edge.from.id === node.id || edge.to.id === node.id) {
      const edgeEl = document.querySelector(`[data-from="${edge.from.id}"][data-to="${edge.to.id}"]`) as SVGElement;
      if (edgeEl) {
        edgeEl.classList.add('is-highlighted');
        edgeEl.style.stroke = node.type === 'mcp' ? '#22d3ee' : '#a855f7';
        edgeEl.style.strokeWidth = '2';
      }
    }
  });
}

// ============================================
// Event Listeners
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  log('init', 'DOMContentLoaded fired — initializing app');
  const t0 = performance.now();

  try {
    renderSidebarNav();
    renderEndpoints();

    // Sidebar toggle
    sidebarToggle?.addEventListener('click', toggleSidebar);
    sidebarOverlay?.addEventListener('click', closeSidebar);

    // Search
    searchInput?.addEventListener('input', (e) => {
      searchQuery = (e.target as HTMLInputElement).value.toLowerCase();
      renderEndpoints();
    });

    // Keyboard shortcut for search
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInput?.focus();
      }
      if (e.key === 'Escape') {
        closeSidebar();
        searchInput?.blur();
      }
    });

    // Filter buttons
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        activeFilter = btn.dataset.filter as 'all' | 'mcp' | 'skill' | 'api';
        log('filter', `Active filter: ${activeFilter}`);
        renderEndpoints();
      });
    });

    // View tabs
    viewTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        switchView(tab.dataset.view as 'list' | 'graph');
      });
    });

    // Smooth scroll for sidebar links
    sidebarNav?.addEventListener('click', (e) => {
      const link = (e.target as HTMLElement).closest('.sidebar__link');
      if (link) {
        closeSidebar();
      }
    });

    // Resize handler for graph
    window.addEventListener('resize', () => {
      if (currentView === 'graph') {
        renderGraph();
      }
    });

    const elapsed = (performance.now() - t0).toFixed(1);
    log('init', `App initialized in ${elapsed}ms`);
  } catch (err) {
    error('init', 'Fatal error during initialization', err);
  }
});
