// Mindmap Overlay Module

import { getElementById, addClass, removeClass } from '../utils/dom';

/**
 * Initialize mindmap overlay
 * Opens overlay on hover, loads mindmap in iframe
 */
export function initMindmapOverlay(): void {
  const mindmapBtn = getElementById<HTMLAnchorElement>('mindmap-btn');
  const mindmapControlBtn = getElementById<HTMLElement>('btn-mindmap');
  const overlay = getElementById<HTMLElement>('mindmap-overlay');
  const closeBtn = getElementById<HTMLButtonElement>('mindmap-overlay-close');
  const iframe = getElementById<HTMLIFrameElement>('mindmap-iframe');

  if (!mindmapBtn || !overlay || !closeBtn || !iframe) return;

  const mindmapUrl = mindmapBtn.href;
  let hoverTimeout: number | null = null;

  const openOverlay = () => {
    // Always load iframe src to ensure it loads
    iframe.src = mindmapUrl;
    console.log('Opening mindmap overlay with URL:', mindmapUrl);
    addClass(overlay, 'active');
    // Hide mindmap button when overlay is open
    addClass(mindmapBtn, 'hidden');
  };

  const closeOverlay = () => {
    removeClass(overlay, 'active');
    // Show mindmap button when overlay is closed
    removeClass(mindmapBtn, 'hidden');
  };

  // Hover to open (with delay to prevent accidental triggers)
  mindmapBtn.addEventListener('mouseenter', () => {
    hoverTimeout = window.setTimeout(() => {
      openOverlay();
    }, 500); // 500ms delay
  });

  // Cancel open if mouse leaves before delay
  mindmapBtn.addEventListener('mouseleave', () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      hoverTimeout = null;
    }
  });

  // Prevent default link behavior
  mindmapBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openOverlay();
  });

  // Control button opens mindmap
  if (mindmapControlBtn) {
    mindmapControlBtn.addEventListener('click', () => {
      openOverlay();
    });
  }

  // Close button
  closeBtn.addEventListener('click', () => {
    closeOverlay();
  });

  // Close on overlay background click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeOverlay();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeOverlay();
    }
  });
}
