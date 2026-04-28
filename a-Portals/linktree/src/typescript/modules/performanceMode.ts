// Lite mode module - reduces GPU-intensive effects for low-end devices

import { getElementById, addClass, removeClass } from '../utils/dom';

let isLiteMode = false;

/**
 * Enable lite mode - solid background, stops video
 */
function enableLiteMode(): void {
  document.body.classList.add('lite-mode');
  isLiteMode = true;
  // The .lite-mode CSS hides #background-video with display:none, so the
  // browser stops decoding it. We also pause the element directly here in
  // case the user toggles back; that releases any decoder threads.
  const video = document.getElementById('background-video') as HTMLVideoElement | null;
  if (video && !video.paused) video.pause();
}

/**
 * Disable lite mode - restores blur effects and plays video
 */
function disableLiteMode(): void {
  document.body.classList.remove('lite-mode');
  isLiteMode = false;
  const video = document.getElementById('background-video') as HTMLVideoElement | null;
  if (video && video.paused) video.play().catch(() => { /* autoplay can be blocked */ });
}

/**
 * Check if user prefers reduced motion
 */
function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Initialize lite mode toggle control
 */
export function initPerformanceMode(): void {
  const toggle = getElementById<HTMLButtonElement>('lite-toggle');

  // Auto-enable for users who prefer reduced motion
  if (prefersReducedMotion()) {
    enableLiteMode();
    if (toggle) addClass(toggle, 'active');
    return;
  }

  if (!toggle) return;

  // Load saved preference
  const savedPref = localStorage.getItem('liteMode');
  if (savedPref === 'true') {
    isLiteMode = true;
    addClass(toggle, 'active');
    enableLiteMode();
  }

  toggle.addEventListener('click', () => {
    if (isLiteMode) {
      disableLiteMode();
      removeClass(toggle, 'active');
    } else {
      enableLiteMode();
      addClass(toggle, 'active');
    }
    localStorage.setItem('liteMode', String(isLiteMode));
  });

  // Listen for OS preference changes
  window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
    if (e.matches && !isLiteMode) {
      enableLiteMode();
      addClass(toggle, 'active');
    }
  });
}
