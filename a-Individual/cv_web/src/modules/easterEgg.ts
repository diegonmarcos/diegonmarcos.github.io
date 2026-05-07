// Easter egg module

import { querySelector, createElement } from '../utils/dom';
import { createStarburst } from '../utils/animation';

interface EasterEggConfig {
  clickThreshold: number;
  resetTimeout: number;
  particleCount: number;
}

const DEFAULT_CONFIG: EasterEggConfig = {
  clickThreshold: 7,
  resetTimeout: 2000,
  particleCount: 50,
};

/**
 * Show dev mode toast notification
 */
function showDevModeToast(): void {
  const toast = createElement('div', { class: 'dev-mode-toast' }, 'Dev Mode Unlocked');
  document.body.appendChild(toast);

  // Fade in
  setTimeout(() => {
    toast.style.opacity = '1';
  }, 10);

  // Fade out and remove
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => {
      toast.remove();
    }, 500);
  }, 2500);
}

/**
 * Initialize easter egg on name title click
 */
export function initEasterEgg(config: EasterEggConfig = DEFAULT_CONFIG): void {
  const nameTitle = querySelector<HTMLHeadingElement>('.header-content h1');

  if (!nameTitle) return;

  let clickCount = 0;
  let clickTimer: ReturnType<typeof setTimeout> | null = null;

  nameTitle.addEventListener('click', () => {
    clickCount++;

    if (clickTimer) {
      clearTimeout(clickTimer);
    }

    clickTimer = setTimeout(() => {
      clickCount = 0; // Reset after timeout
    }, config.resetTimeout);

    if (clickCount === config.clickThreshold) {
      clickCount = 0;
      if (clickTimer) clearTimeout(clickTimer);
      showDevModeToast();
      createStarburst(config.particleCount);
    }
  });
}
