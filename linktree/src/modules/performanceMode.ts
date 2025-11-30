// Lite mode module - reduces GPU-intensive effects for low-end devices

import { getElementById, addClass, removeClass } from '../utils/dom';

let isLiteMode = false;

/**
 * Enable lite mode - solid background, stops video
 */
function enableLiteMode(): void {
  document.body.classList.add('lite-mode');
  isLiteMode = true;

  // Stop video if playing
  const videoToggle = getElementById<HTMLButtonElement>('video-toggle');
  if (videoToggle && videoToggle.classList.contains('active')) {
    videoToggle.click();
  }
}

/**
 * Disable lite mode - restores blur effects and plays video
 */
function disableLiteMode(): void {
  document.body.classList.remove('lite-mode');
  isLiteMode = false;

  // Play video if stopped
  const videoToggle = getElementById<HTMLButtonElement>('video-toggle');
  if (videoToggle && !videoToggle.classList.contains('active')) {
    videoToggle.click();
  }
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
