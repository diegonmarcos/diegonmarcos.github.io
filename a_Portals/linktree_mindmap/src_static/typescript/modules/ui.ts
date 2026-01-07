// ==========================================================================
// UI Module - Linktree Mindmap
// ==========================================================================

import type { GraphNode, LinkData, ViewState } from '../types';
import { zoomIn, zoomOut, resetView, focusOnNode } from './graph';

// -----------------------------------------------------------------------------
// DOM Elements
// -----------------------------------------------------------------------------

let tooltip: HTMLElement | null = null;
let tooltipTitle: HTMLElement | null = null;
let tooltipSubtitle: HTMLElement | null = null;
let linkPanel: HTMLElement | null = null;
let linkPanelTitle: HTMLElement | null = null;
let linkPanelLinks: HTMLElement | null = null;
let linkPanelClose: HTMLElement | null = null;
let btnBack: HTMLElement | null = null;
let btnReset: HTMLElement | null = null;
let btnZoomIn: HTMLElement | null = null;
let btnZoomOut: HTMLElement | null = null;
let loading: HTMLElement | null = null;

let backdrop: HTMLElement | null = null;
let view: ViewState | null = null;
let canvasWidth = 0;
let canvasHeight = 0;

// Callbacks
let onBack: (() => void) | null = null;

// -----------------------------------------------------------------------------
// Initialize
// -----------------------------------------------------------------------------

export function initUI(viewState: ViewState, width: number, height: number): void {
  view = viewState;
  canvasWidth = width;
  canvasHeight = height;

  // Get elements
  tooltip = document.getElementById('tooltip');
  tooltipTitle = document.getElementById('tooltip-title');
  tooltipSubtitle = document.getElementById('tooltip-subtitle');
  linkPanel = document.getElementById('link-panel');
  linkPanelTitle = document.getElementById('link-panel-title');
  linkPanelLinks = document.getElementById('link-panel-links');
  linkPanelClose = document.getElementById('link-panel-close');
  btnBack = document.getElementById('btn-back');
  btnReset = document.getElementById('btn-reset');
  btnZoomIn = document.getElementById('btn-zoom-in');
  btnZoomOut = document.getElementById('btn-zoom-out');
  loading = document.getElementById('loading');

  // Create backdrop
  backdrop = document.createElement('div');
  backdrop.className = 'panel-backdrop';
  document.getElementById('ui-overlay')?.appendChild(backdrop);

  // Bind events
  linkPanelClose?.addEventListener('click', hideLinkPanel);
  backdrop?.addEventListener('click', hideLinkPanel);
  btnReset?.addEventListener('click', handleReset);
  btnZoomIn?.addEventListener('click', handleZoomIn);
  btnZoomOut?.addEventListener('click', handleZoomOut);
  btnBack?.addEventListener('click', handleBack);

  // Keyboard shortcuts
  document.addEventListener('keydown', handleKeydown);
}

export function setOnBack(callback: () => void): void {
  onBack = callback;
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
// Tooltip
// -----------------------------------------------------------------------------

export function showTooltip(node: GraphNode, screenX: number, screenY: number): void {
  if (!tooltip || !tooltipTitle || !tooltipSubtitle) return;

  tooltipTitle.textContent = node.fullLabel || node.label;

  // Show link count or depth info
  if (node.links.length > 0) {
    tooltipSubtitle.textContent = `${node.links.length} link${node.links.length > 1 ? 's' : ''}`;
  } else if (node.children.length > 0) {
    tooltipSubtitle.textContent = `${node.children.length} item${node.children.length > 1 ? 's' : ''}`;
  } else {
    tooltipSubtitle.textContent = '';
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
// Link Panel
// -----------------------------------------------------------------------------

export function showLinkPanel(node: GraphNode): void {
  if (!linkPanel || !linkPanelTitle || !linkPanelLinks || !backdrop) return;

  linkPanelTitle.textContent = node.fullLabel || node.label;
  linkPanelLinks.innerHTML = '';

  // Create link cards
  node.links.forEach((link) => {
    const card = createLinkCard(link);
    linkPanelLinks!.appendChild(card);
  });

  // Show panel and backdrop
  backdrop.classList.add('visible');
  linkPanel.hidden = false;
  requestAnimationFrame(() => {
    linkPanel?.classList.add('visible');
  });
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

function createLinkCard(link: LinkData): HTMLElement {
  const card = document.createElement('a');
  card.className = 'link-card';
  card.href = link.url;
  card.target = '_blank';
  card.rel = 'noopener noreferrer';

  if (link.download) {
    card.download = '';
  }

  card.innerHTML = `
    <div class="link-icon">
      <img src="public/icons/${link.icon}.svg" alt="${link.label}">
    </div>
    <span class="link-label">${link.label}</span>
  `;

  return card;
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
    hideBackButton();
    if (onBack) onBack();
  }
}

function handleZoomIn(): void {
  if (view) zoomIn(view);
}

function handleZoomOut(): void {
  if (view) zoomOut(view);
}

function handleBack(): void {
  if (view) {
    resetView(view);
    hideBackButton();
    if (onBack) onBack();
  }
}

function handleKeydown(e: KeyboardEvent): void {
  // Escape to close panel or reset view
  if (e.key === 'Escape') {
    if (linkPanel && !linkPanel.hidden) {
      hideLinkPanel();
    } else if (view) {
      resetView(view);
      hideBackButton();
      if (onBack) onBack();
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
}

// -----------------------------------------------------------------------------
// Focus on Node (with UI updates)
// -----------------------------------------------------------------------------

export function focusOnNodeWithUI(node: GraphNode): void {
  if (!view) return;

  focusOnNode(node, view, canvasWidth, canvasHeight);
  showBackButton();

  // If node has links, show panel
  if (node.links.length > 0) {
    showLinkPanel(node);
  }
}

// -----------------------------------------------------------------------------
// Cleanup
// -----------------------------------------------------------------------------

export function destroyUI(): void {
  linkPanelClose?.removeEventListener('click', hideLinkPanel);
  backdrop?.removeEventListener('click', hideLinkPanel);
  btnReset?.removeEventListener('click', handleReset);
  btnZoomIn?.removeEventListener('click', handleZoomIn);
  btnZoomOut?.removeEventListener('click', handleZoomOut);
  btnBack?.removeEventListener('click', handleBack);
  document.removeEventListener('keydown', handleKeydown);

  backdrop?.remove();
}
