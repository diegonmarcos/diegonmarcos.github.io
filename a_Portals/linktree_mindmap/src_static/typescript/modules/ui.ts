// ==========================================================================
// UI Module - Linktree Mindmap (Enhanced UX)
// ==========================================================================

import type { GraphNode, LinkData, ViewState } from '../types';
import { zoomIn, zoomOut, resetView, focusOnNode } from './graph';

// -----------------------------------------------------------------------------
// DOM Elements
// -----------------------------------------------------------------------------

let tooltip: HTMLElement | null = null;
let tooltipTitle: HTMLElement | null = null;
let tooltipSubtitle: HTMLElement | null = null;
let tooltipBadge: HTMLElement | null = null;
let linkPanel: HTMLElement | null = null;
let linkPanelIcon: HTMLElement | null = null;
let linkPanelTitle: HTMLElement | null = null;
let linkPanelLinks: HTMLElement | null = null;
let linkPanelClose: HTMLElement | null = null;
let btnBack: HTMLElement | null = null;
let btnHome: HTMLElement | null = null;
let btnReset: HTMLElement | null = null;
let btnZoomIn: HTMLElement | null = null;
let btnZoomOut: HTMLElement | null = null;
let btnFullscreen: HTMLElement | null = null;
let zoomIndicator: HTMLElement | null = null;
let loading: HTMLElement | null = null;
let searchContainer: HTMLElement | null = null;
let searchInput: HTMLInputElement | null = null;
let searchResults: HTMLElement | null = null;
let breadcrumb: HTMLElement | null = null;
let breadcrumbNav: HTMLElement | null = null;
let minimapCanvas: HTMLCanvasElement | null = null;
let minimapViewport: HTMLElement | null = null;
let keyboardHints: HTMLElement | null = null;
let hintsClose: HTMLElement | null = null;

let backdrop: HTMLElement | null = null;
let view: ViewState | null = null;
let canvasWidth = 0;
let canvasHeight = 0;
let allNodes: GraphNode[] = [];
let currentNode: GraphNode | null = null;

// Callbacks
let onBack: (() => void) | null = null;
let onNodeSelect: ((node: GraphNode) => void) | null = null;
let onRenderNeeded: (() => void) | null = null;

// -----------------------------------------------------------------------------
// Initialize
// -----------------------------------------------------------------------------

export function initUI(
  viewState: ViewState,
  width: number,
  height: number
): void {
  view = viewState;
  canvasWidth = width;
  canvasHeight = height;

  // Get elements
  tooltip = document.getElementById('tooltip');
  tooltipTitle = document.getElementById('tooltip-title');
  tooltipSubtitle = document.getElementById('tooltip-subtitle');
  tooltipBadge = document.getElementById('tooltip-badge');
  linkPanel = document.getElementById('link-panel');
  linkPanelIcon = document.getElementById('link-panel-icon');
  linkPanelTitle = document.getElementById('link-panel-title');
  linkPanelLinks = document.getElementById('link-panel-links');
  linkPanelClose = document.getElementById('link-panel-close');
  btnBack = document.getElementById('btn-back');
  btnHome = document.getElementById('btn-home');
  btnReset = document.getElementById('btn-reset');
  btnZoomIn = document.getElementById('btn-zoom-in');
  btnZoomOut = document.getElementById('btn-zoom-out');
  btnFullscreen = document.getElementById('btn-fullscreen');
  zoomIndicator = document.getElementById('zoom-indicator');
  loading = document.getElementById('loading');
  searchContainer = document.getElementById('search-container');
  searchInput = document.getElementById('search-input') as HTMLInputElement;
  searchResults = document.getElementById('search-results');
  breadcrumb = document.getElementById('breadcrumb');
  breadcrumbNav = document.getElementById('breadcrumb-nav');
  minimapCanvas = document.getElementById('minimap-canvas') as HTMLCanvasElement;
  minimapViewport = document.getElementById('minimap-viewport');
  keyboardHints = document.getElementById('keyboard-hints');
  hintsClose = document.getElementById('hints-close');

  // Create backdrop
  backdrop = document.createElement('div');
  backdrop.className = 'panel-backdrop';
  document.getElementById('ui-overlay')?.appendChild(backdrop);

  // Bind events
  linkPanelClose?.addEventListener('click', hideLinkPanel);
  backdrop?.addEventListener('click', hideLinkPanel);
  btnReset?.addEventListener('click', handleReset);
  btnHome?.addEventListener('click', handleReset);
  btnZoomIn?.addEventListener('click', handleZoomIn);
  btnZoomOut?.addEventListener('click', handleZoomOut);
  btnFullscreen?.addEventListener('click', handleFullscreen);
  btnBack?.addEventListener('click', handleBack);
  hintsClose?.addEventListener('click', hideKeyboardHints);

  // Search events
  searchInput?.addEventListener('input', handleSearchInput);
  searchInput?.addEventListener('focus', () => searchContainer?.classList.add('focused'));
  searchInput?.addEventListener('blur', () => {
    setTimeout(() => {
      searchContainer?.classList.remove('focused');
      if (searchResults) searchResults.hidden = true;
    }, 200);
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', handleKeydown);

  // Initial zoom indicator
  updateZoomIndicator();
}

export function setNodes(nodes: GraphNode[]): void {
  allNodes = nodes;
}

export function setOnBack(callback: () => void): void {
  onBack = callback;
}

export function setOnNodeSelect(callback: (node: GraphNode) => void): void {
  onNodeSelect = callback;
}

export function setRenderCallback(callback: () => void): void {
  onRenderNeeded = callback;
}

export function updateCanvasSize(width: number, height: number): void {
  canvasWidth = width;
  canvasHeight = height;
}

// -----------------------------------------------------------------------------
// Loading
// -----------------------------------------------------------------------------

export function showLoading(): void {
  if (loading) loading.hidden = false;
}

export function hideLoading(): void {
  if (loading) loading.hidden = true;
}

// -----------------------------------------------------------------------------
// Zoom Indicator
// -----------------------------------------------------------------------------

export function updateZoomIndicator(): void {
  if (zoomIndicator && view) {
    const percent = Math.round(view.scale * 100);
    zoomIndicator.textContent = `${percent}%`;
  }
}

// -----------------------------------------------------------------------------
// Tooltip
// -----------------------------------------------------------------------------

export function showTooltip(node: GraphNode, screenX: number, screenY: number): void {
  if (!tooltip || !tooltipTitle || !tooltipSubtitle) return;

  tooltipTitle.textContent = node.fullLabel || node.label;

  // Show link count or depth info
  if (node.links.length > 0) {
    tooltipSubtitle.textContent = `${node.links.length} link${node.links.length > 1 ? 's' : ''} - Click to open`;
  } else if (node.children.length > 0) {
    tooltipSubtitle.textContent = `${node.children.length} item${node.children.length > 1 ? 's' : ''}`;
  } else {
    tooltipSubtitle.textContent = '';
  }

  // Show badge with total descendants
  if (tooltipBadge) {
    const totalDescendants = countDescendants(node);
    if (totalDescendants > 0) {
      tooltipBadge.textContent = `${totalDescendants} total`;
      tooltipBadge.hidden = false;
      tooltipBadge.style.backgroundColor = node.color;
    } else {
      tooltipBadge.hidden = true;
    }
  }

  // Position tooltip
  const padding = 15;
  let x = screenX + padding;
  let y = screenY + padding;

  // Keep within viewport
  if (x + 200 > window.innerWidth) {
    x = screenX - 200 - padding;
  }
  if (y + 100 > window.innerHeight) {
    y = screenY - 100 - padding;
  }

  tooltip.style.left = `${x}px`;
  tooltip.style.top = `${y}px`;
  tooltip.hidden = false;
  tooltip.classList.add('visible');
}

function countDescendants(node: GraphNode): number {
  let count = 0;
  function traverse(n: GraphNode) {
    count += n.children.length;
    n.children.forEach(traverse);
  }
  traverse(node);
  return count;
}

export function hideTooltip(): void {
  if (!tooltip) return;
  tooltip.classList.remove('visible');
  setTimeout(() => {
    if (tooltip && !tooltip.classList.contains('visible')) {
      tooltip.hidden = true;
    }
  }, 150);
}

// -----------------------------------------------------------------------------
// Breadcrumb
// -----------------------------------------------------------------------------

export function updateBreadcrumb(node: GraphNode | null): void {
  if (!breadcrumb || !breadcrumbNav) return;

  if (!node) {
    breadcrumb.hidden = true;
    return;
  }

  // Build path from root to node
  const path: GraphNode[] = [];
  let current: GraphNode | null = node;
  while (current) {
    path.unshift(current);
    current = current.parent;
  }

  // Create breadcrumb HTML
  breadcrumbNav.innerHTML = path
    .map((n, i) => {
      const isLast = i === path.length - 1;
      const label = n.label;
      if (isLast) {
        return `<span class="breadcrumb-current" style="color: ${n.color}">${label}</span>`;
      }
      return `<button class="breadcrumb-item" data-node-id="${n.id}" style="--accent: ${n.color}">${label}</button><span class="breadcrumb-sep">›</span>`;
    })
    .join('');

  // Add click handlers
  breadcrumbNav.querySelectorAll('.breadcrumb-item').forEach((btn) => {
    btn.addEventListener('click', () => {
      const nodeId = (btn as HTMLElement).dataset.nodeId;
      const targetNode = allNodes.find((n) => n.id === nodeId);
      if (targetNode && onNodeSelect) {
        onNodeSelect(targetNode);
      }
    });
  });

  breadcrumb.hidden = false;
}

// -----------------------------------------------------------------------------
// Link Panel
// -----------------------------------------------------------------------------

export function showLinkPanel(node: GraphNode): void {
  if (!linkPanel || !linkPanelTitle || !linkPanelLinks || !backdrop) return;

  currentNode = node;

  // Set accent color
  linkPanel.style.setProperty('--panel-accent', node.color);

  // Set icon
  if (linkPanelIcon) {
    linkPanelIcon.innerHTML = `<img src="public/icons/${node.icon}.svg" alt="">`;
    linkPanelIcon.style.backgroundColor = node.color;
  }

  linkPanelTitle.textContent = node.fullLabel || node.label;
  linkPanelLinks.innerHTML = '';

  // Group links by type
  const grouped = groupLinks(node.links);

  // Create link cards
  Object.entries(grouped).forEach(([group, links]) => {
    if (Object.keys(grouped).length > 1 && links.length > 0) {
      const groupHeader = document.createElement('div');
      groupHeader.className = 'link-group-header';
      groupHeader.textContent = group;
      linkPanelLinks!.appendChild(groupHeader);
    }

    links.forEach((link) => {
      const card = createLinkCard(link, node.color);
      linkPanelLinks!.appendChild(card);
    });
  });

  // Show panel and backdrop
  backdrop.classList.add('visible');
  linkPanel.hidden = false;
  requestAnimationFrame(() => {
    linkPanel?.classList.add('visible');
  });

  // Update breadcrumb
  updateBreadcrumb(node);
}

function groupLinks(links: LinkData[]): Record<string, LinkData[]> {
  const groups: Record<string, LinkData[]> = {};

  links.forEach((link) => {
    let group = 'Links';
    const url = link.url.toLowerCase();

    if (url.includes('mailto:') || url.includes('linkedin') || url.includes('telegram') || url.includes('whatsapp')) {
      group = 'Contact';
    } else if (url.includes('github')) {
      group = 'Code';
    } else if (link.download || url.includes('.pdf') || url.includes('.vcf')) {
      group = 'Downloads';
    }

    if (!groups[group]) groups[group] = [];
    groups[group].push(link);
  });

  return groups;
}

export function hideLinkPanel(): void {
  if (!linkPanel || !backdrop) return;

  linkPanel.classList.remove('visible');
  backdrop.classList.remove('visible');

  setTimeout(() => {
    if (linkPanel && !linkPanel.classList.contains('visible')) {
      linkPanel.hidden = true;
    }
  }, 300);
}

function createLinkCard(link: LinkData, accentColor: string): HTMLElement {
  const card = document.createElement('a');
  card.className = 'link-card';
  card.href = link.url;
  card.target = '_blank';
  card.rel = 'noopener noreferrer';
  card.style.setProperty('--link-accent', accentColor);

  if (link.download) {
    card.download = '';
  }

  card.innerHTML = `
    <div class="link-icon">
      <img src="public/icons/${link.icon}.svg" alt="${link.label}">
    </div>
    <span class="link-label">${link.label}</span>
    <svg class="link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M7 17L17 7M17 7H7M17 7v10"/>
    </svg>
  `;

  // Add ripple effect
  card.addEventListener('click', (e) => {
    const rect = card.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    card.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });

  return card;
}

// -----------------------------------------------------------------------------
// Search
// -----------------------------------------------------------------------------

function handleSearchInput(): void {
  if (!searchInput || !searchResults) return;

  const query = searchInput.value.toLowerCase().trim();

  if (query.length < 2) {
    searchResults.hidden = true;
    return;
  }

  // Find matching nodes
  const matches = allNodes.filter(
    (n) =>
      n.label.toLowerCase().includes(query) ||
      (n.fullLabel && n.fullLabel.toLowerCase().includes(query))
  );

  if (matches.length === 0) {
    searchResults.innerHTML = '<div class="search-empty">No results found</div>';
    searchResults.hidden = false;
    return;
  }

  // Show results (max 8)
  searchResults.innerHTML = matches
    .slice(0, 8)
    .map(
      (node) => `
      <button class="search-result" data-node-id="${node.id}">
        <span class="search-result-dot" style="background: ${node.color}"></span>
        <span class="search-result-label">${node.fullLabel || node.label}</span>
        <span class="search-result-path">${getNodePath(node)}</span>
      </button>
    `
    )
    .join('');

  // Add click handlers
  searchResults.querySelectorAll('.search-result').forEach((btn) => {
    btn.addEventListener('click', () => {
      const nodeId = (btn as HTMLElement).dataset.nodeId;
      const node = allNodes.find((n) => n.id === nodeId);
      if (node && onNodeSelect) {
        onNodeSelect(node);
        searchInput!.value = '';
        searchResults!.hidden = true;
        searchInput!.blur();
      }
    });
  });

  searchResults.hidden = false;
}

function getNodePath(node: GraphNode): string {
  const path: string[] = [];
  let current = node.parent;
  while (current) {
    path.unshift(current.label);
    current = current.parent;
  }
  return path.join(' › ');
}

// -----------------------------------------------------------------------------
// Minimap
// -----------------------------------------------------------------------------

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 255, g: 255, b: 255 };
}

export function updateMinimap(nodes: GraphNode[], edges: any[]): void {
  if (!minimapCanvas || !minimapViewport || !view) return;

  const ctx = minimapCanvas.getContext('2d');
  if (!ctx) return;

  const w = minimapCanvas.width;
  const h = minimapCanvas.height;

  // Clear
  ctx.clearRect(0, 0, w, h);

  // Find bounds
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  nodes.forEach((n) => {
    minX = Math.min(minX, n.x);
    maxX = Math.max(maxX, n.x);
    minY = Math.min(minY, n.y);
    maxY = Math.max(maxY, n.y);
  });

  const padding = 20;
  const graphW = maxX - minX + padding * 2;
  const graphH = maxY - minY + padding * 2;
  const scale = Math.min(w / graphW, h / graphH);

  const offsetX = (w - graphW * scale) / 2 - minX * scale + padding * scale;
  const offsetY = (h - graphH * scale) / 2 - minY * scale + padding * scale;

  // Draw edges with highlighting (highlighted vs dimmed)
  const hasHighlights = edges.some(e => e.highlighted);

  edges.forEach((e) => {
    // Set color based on highlight state
    if (e.highlighted) {
      // Create gradient for highlighted edges
      const gradient = ctx.createLinearGradient(
        e.source.x * scale + offsetX,
        e.source.y * scale + offsetY,
        e.target.x * scale + offsetX,
        e.target.y * scale + offsetY
      );
      gradient.addColorStop(0, e.source.color);
      gradient.addColorStop(1, e.target.color);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1.0;
    } else if (hasHighlights) {
      // Dim non-highlighted edges when something is selected
      ctx.strokeStyle = 'rgba(100,100,100,0.15)';
      ctx.lineWidth = 0.4;
    } else {
      // Default state - all edges normal
      ctx.strokeStyle = 'rgba(255,255,255,0.2)';
      ctx.lineWidth = 0.5;
    }

    ctx.beginPath();
    ctx.moveTo(e.source.x * scale + offsetX, e.source.y * scale + offsetY);
    ctx.lineTo(e.target.x * scale + offsetX, e.target.y * scale + offsetY);
    ctx.stroke();
  });

  // Draw nodes (with colors matching main graph)
  nodes.forEach((n) => {
    const x = n.x * scale + offsetX;
    const y = n.y * scale + offsetY;
    const r = Math.max(2, n.radius * scale * 0.3);

    // Always use node color, with glow effect for highlighted nodes
    if (n.highlighted) {
      // Glow effect for highlighted nodes
      ctx.shadowBlur = 8;
      ctx.shadowColor = n.color;
      ctx.fillStyle = n.color;
    } else {
      ctx.shadowBlur = 0;
      // Use node color with some transparency for non-highlighted nodes
      const rgb = hexToRgb(n.color);
      ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.8)`;
    }

    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  });

  // Update viewport indicator
  const vpW = (canvasWidth / view.scale) * scale;
  const vpH = (canvasHeight / view.scale) * scale;
  const vpX = (-view.x / view.scale + canvasWidth / 2 / view.scale) * scale + offsetX - vpW / 2;
  const vpY = (-view.y / view.scale + canvasHeight / 2 / view.scale) * scale + offsetY - vpH / 2;

  minimapViewport.style.width = `${Math.min(w, vpW)}px`;
  minimapViewport.style.height = `${Math.min(h, vpH)}px`;
  minimapViewport.style.left = `${Math.max(0, Math.min(w - vpW, vpX))}px`;
  minimapViewport.style.top = `${Math.max(0, Math.min(h - vpH, vpY))}px`;
}

// -----------------------------------------------------------------------------
// Keyboard Hints
// -----------------------------------------------------------------------------

function showKeyboardHints(): void {
  if (keyboardHints) {
    keyboardHints.hidden = false;
    requestAnimationFrame(() => keyboardHints?.classList.add('visible'));
  }
}

function hideKeyboardHints(): void {
  if (keyboardHints) {
    keyboardHints.classList.remove('visible');
    setTimeout(() => {
      if (keyboardHints) keyboardHints.hidden = true;
    }, 300);
    localStorage.setItem('mindmap-hints-shown', 'true');
  }
}

// -----------------------------------------------------------------------------
// Back Button
// -----------------------------------------------------------------------------

export function showBackButton(): void {
  if (btnBack) btnBack.hidden = false;
}

export function hideBackButton(): void {
  if (btnBack) btnBack.hidden = true;
}

// -----------------------------------------------------------------------------
// Control Handlers
// -----------------------------------------------------------------------------

function handleReset(): void {
  if (view) {
    resetView(view);
    // Sync actual values with targets
    view.x = view.targetX;
    view.y = view.targetY;
    view.scale = view.targetScale;
    hideBackButton();
    updateBreadcrumb(null);
    updateZoomIndicator();
    if (onBack) onBack();
    if (onRenderNeeded) onRenderNeeded();
  }
}

function handleZoomIn(): void {
  if (view) {
    zoomIn(view);
    // Sync actual scale with target
    view.scale = view.targetScale;
    updateZoomIndicator();
    if (onRenderNeeded) onRenderNeeded();
  }
}

function handleZoomOut(): void {
  if (view) {
    zoomOut(view);
    // Sync actual scale with target
    view.scale = view.targetScale;
    updateZoomIndicator();
    if (onRenderNeeded) onRenderNeeded();
  }
}

function handleFullscreen(): void {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    btnFullscreen?.classList.add('active');
  } else {
    document.exitFullscreen();
    btnFullscreen?.classList.remove('active');
  }
}

function handleBack(): void {
  if (view) {
    resetView(view);
    // Sync actual values with targets
    view.x = view.targetX;
    view.y = view.targetY;
    view.scale = view.targetScale;
    hideBackButton();
    updateBreadcrumb(null);
    updateZoomIndicator();
    if (onBack) onBack();
    if (onRenderNeeded) onRenderNeeded();
  }
}

// -----------------------------------------------------------------------------
// Keyboard Navigation
// -----------------------------------------------------------------------------

let selectedNodeIndex = -1;

function handleKeydown(e: KeyboardEvent): void {
  // Ignore if typing in search
  if (document.activeElement === searchInput) {
    if (e.key === 'Escape') {
      searchInput?.blur();
      if (searchResults) searchResults.hidden = true;
    }
    return;
  }

  // Focus search with /
  if (e.key === '/' || e.key === 's') {
    e.preventDefault();
    searchInput?.focus();
    return;
  }

  // Fullscreen with f
  if (e.key === 'f') {
    handleFullscreen();
    return;
  }

  // Escape to close panel or reset view
  if (e.key === 'Escape') {
    if (linkPanel && !linkPanel.hidden) {
      hideLinkPanel();
    } else if (keyboardHints && !keyboardHints.hidden) {
      hideKeyboardHints();
    } else if (view) {
      handleReset();
    }
  }

  // Zoom with +/-
  if (e.key === '+' || e.key === '=') {
    handleZoomIn();
  }
  if (e.key === '-' || e.key === '_') {
    handleZoomOut();
  }

  // Reset with 0 or r
  if (e.key === '0' || e.key === 'r') {
    handleReset();
  }

  // Arrow navigation
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
    e.preventDefault();
    handleArrowNavigation(e.key);
  }

  // Enter to open links
  if (e.key === 'Enter' && currentNode) {
    if (currentNode.links.length > 0) {
      showLinkPanel(currentNode);
    }
  }

  // Show help with ?
  if (e.key === '?') {
    showKeyboardHints();
  }
}

function handleArrowNavigation(key: string): void {
  if (allNodes.length === 0) return;

  // If no node selected, select root
  if (selectedNodeIndex < 0) {
    selectedNodeIndex = 0;
    selectNode(allNodes[0]);
    return;
  }

  const current = allNodes[selectedNodeIndex];
  let next: GraphNode | null = null;

  switch (key) {
    case 'ArrowUp':
      // Go to parent
      if (current.parent) {
        next = current.parent;
      }
      break;
    case 'ArrowDown':
      // Go to first child
      if (current.children.length > 0) {
        next = current.children[0];
      }
      break;
    case 'ArrowLeft':
    case 'ArrowRight':
      // Go to sibling
      if (current.parent) {
        const siblings = current.parent.children;
        const idx = siblings.indexOf(current);
        const dir = key === 'ArrowRight' ? 1 : -1;
        const newIdx = (idx + dir + siblings.length) % siblings.length;
        next = siblings[newIdx];
      }
      break;
  }

  if (next) {
    selectedNodeIndex = allNodes.indexOf(next);
    selectNode(next);
  }
}

function selectNode(node: GraphNode): void {
  currentNode = node;
  updateBreadcrumb(node);

  if (onNodeSelect) {
    onNodeSelect(node);
  }
}

export function setCurrentNode(node: GraphNode | null): void {
  currentNode = node;
  if (node) {
    selectedNodeIndex = allNodes.indexOf(node);
    updateBreadcrumb(node);
  }
}

// -----------------------------------------------------------------------------
// Focus on Node (with UI updates)
// -----------------------------------------------------------------------------

export function focusOnNodeWithUI(node: GraphNode): void {
  if (!view) return;

  focusOnNode(node, view, canvasWidth, canvasHeight);
  // Sync actual values with targets
  view.x = view.targetX;
  view.y = view.targetY;
  view.scale = view.targetScale;
  showBackButton();
  updateBreadcrumb(node);
  updateZoomIndicator();
  setCurrentNode(node);

  // If node has links, show panel
  if (node.links.length > 0) {
    showLinkPanel(node);
  }

  if (onRenderNeeded) onRenderNeeded();
}

// -----------------------------------------------------------------------------
// Cleanup
// -----------------------------------------------------------------------------

export function destroyUI(): void {
  linkPanelClose?.removeEventListener('click', hideLinkPanel);
  backdrop?.removeEventListener('click', hideLinkPanel);
  btnReset?.removeEventListener('click', handleReset);
  btnHome?.removeEventListener('click', handleReset);
  btnZoomIn?.removeEventListener('click', handleZoomIn);
  btnZoomOut?.removeEventListener('click', handleZoomOut);
  btnFullscreen?.removeEventListener('click', handleFullscreen);
  btnBack?.removeEventListener('click', handleBack);
  hintsClose?.removeEventListener('click', hideKeyboardHints);
  document.removeEventListener('keydown', handleKeydown);

  backdrop?.remove();
}
