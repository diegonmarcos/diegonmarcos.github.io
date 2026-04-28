// Main entry point for Linktree application

import { initLoader } from './modules/loader';
import { initStatusModal } from './modules/status/modal';
import { initCollapsibleSections, initControlsToggle } from './modules/collapsible';
import { initVideoBackground } from './modules/videoBackground';
import { initCarousels } from './modules/carousel';
import { initMobileScrollSelection } from './modules/mobileScroll';
import { initGalleryToggle } from './modules/gallery';
import { initPerformanceMode } from './modules/performanceMode';
import { initMindmapOverlay } from './modules/mindmap-overlay';
import { initVmControl } from './modules/vmControl';
import { initProfilePicSwiper } from './modules/profilePicSwiper';
import { initCardSwiper } from './modules/cardSwiper';
import { initPortalRender } from './modules/portal-render';
import { initThemeToggle } from './modules/themeToggle';
import { initTilt3d } from './modules/tilt3d';
import { initCanvasBackground } from './modules/canvas-bg';

// requestIdleCallback shim for Safari / older WebKit. Falls through to a
// 100 ms setTimeout — same yield discipline, slightly less efficient.
type IdleCb = (cb: () => void) => void;
const onIdle: IdleCb = (cb) =>
  ('requestIdleCallback' in window
    ? (window as unknown as { requestIdleCallback: (c: () => void, o?: { timeout: number }) => void }).requestIdleCallback(cb, { timeout: 800 })
    : setTimeout(cb, 100));

/**
 * Initialize all application modules
 */
function initApp(): void {
  // Hydrate declarative portal slides FIRST so subsequent modules
  // (Swiper carousels in particular) see the rendered DOM.
  initPortalRender();

  // Initialize collapsible sections
  initCollapsibleSections();

  initProfilePicSwiper();
  initCardSwiper();

  // Initialize controls toggle
  initControlsToggle();

  // Initialize mindmap overlay
  initMindmapOverlay();

  // Initialize random background video (or WebGL canvas if opted in).
  initVideoBackground();
  initCanvasBackground();

  // (video play/pause toggle removed — lite mode now controls the video directly)

  // Initialize Swiper carousels
  initCarousels();

  // Initialize light/dark theme toggle (FAB)
  initThemeToggle();

  // 3D mouse-tilt on link sections (compositor-only; no-ops in lite-mode).
  initTilt3d();

  // Initialize performance/fast mode toggle (gate keeps lite-mode authoritative)
  initPerformanceMode();

  // Defer non-critical, behind-FAB / off-screen init until the main thread
  // is idle. None of these are needed for first paint.
  onIdle(() => initStatusModal());
  onIdle(() => initMobileScrollSelection());
  onIdle(() => initGalleryToggle());
  onIdle(() => initVmControl());

  // Show FABs after everything is loaded and positioned
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const controlsFab = document.querySelector('.controls-fab-container') as HTMLElement;
      const mindmapBtn = document.getElementById('mindmap-btn') as HTMLElement;
      const pixelworldBtn = document.getElementById('pixelworld-btn') as HTMLElement;

      if (controlsFab) {
        controlsFab.style.visibility = 'visible';
      }
      if (mindmapBtn) {
        mindmapBtn.style.visibility = 'visible';
      }
      if (pixelworldBtn) {
        pixelworldBtn.style.visibility = 'visible';
      }
    });
  });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
  await initLoader();
  requestAnimationFrame(() => {
    requestAnimationFrame(initApp);
  });
  // Register the Service Worker after first paint — never blocks startup.
  // Skipped on file:// (no SW support) and during local dev to keep
  // hot-reload predictable.
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    onIdle(() => {
      navigator.serviceWorker.register('./script-service-worker.js').catch(() => undefined);
    });
  }
});

// Export for potential external use
export { initApp };
