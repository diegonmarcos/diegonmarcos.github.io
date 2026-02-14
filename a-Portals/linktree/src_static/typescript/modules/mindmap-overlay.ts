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
  const backgroundVideo = getElementById<HTMLVideoElement>('background-video');

  if (!mindmapBtn || !overlay || !closeBtn || !iframe) return;

  const mindmapUrl = mindmapBtn.href;
  let hoverTimeout: number | null = null;
  let iframeLoaded = false;

  const openOverlay = () => {
    // Load iframe src only once (don't reload every time)
    if (!iframeLoaded) {
      iframe.src = mindmapUrl;
      iframeLoaded = true;
      console.log('Loading mindmap iframe for first time:', mindmapUrl);
    }

    // CRITICAL GPU FIX #1: Pause background video to free GPU resources
    if (backgroundVideo) {
      backgroundVideo.pause();
      console.log('Paused background video (GPU optimization)');
    }

    addClass(overlay, 'active');
    // Hide mindmap button when overlay is open
    addClass(mindmapBtn, 'hidden');
  };

  const closeOverlay = () => {
    removeClass(overlay, 'active');
    // Show mindmap button when overlay is closed
    removeClass(mindmapBtn, 'hidden');

    // Resume background video when overlay closes
    if (backgroundVideo) {
      backgroundVideo.play().catch(err => {
        console.warn('Could not resume background video:', err);
      });
    }
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
