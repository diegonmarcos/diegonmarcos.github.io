// View settings module - desktop/mobile toggle, font size control

import { getElementById, querySelector } from '../utils/dom';

const DESKTOP_WIDTH = 1024;

/**
 * Initialize desktop/mobile view toggle
 */
export function initDesktopViewToggle(): void {
  const desktopViewToggle = getElementById<HTMLAnchorElement>('desktop-view-toggle');
  const viewport = querySelector<HTMLMetaElement>('meta[name="viewport"]');

  if (!desktopViewToggle || !viewport) return;

  let isDesktopView = false;

  desktopViewToggle.addEventListener('click', (event) => {
    event.preventDefault();
    isDesktopView = !isDesktopView;

    if (isDesktopView) {
      const mobileWidth = window.screen.width;
      const scale = mobileWidth / DESKTOP_WIDTH;
      viewport.setAttribute('content', `width=${DESKTOP_WIDTH}, initial-scale=${scale}`);
      desktopViewToggle.innerHTML = '<i class="fas fa-mobile-alt"></i>';
    } else {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
      desktopViewToggle.innerHTML = '<i class="fas fa-desktop"></i>';
    }
  });
}

/**
 * Initialize font size controls
 */
export function initFontSizeControls(): void {
  const increaseFontSizeBtn = getElementById<HTMLAnchorElement>('increase-font-size-btn');
  const resetFontSizeBtn = getElementById<HTMLAnchorElement>('reset-font-size-btn');
  const body = document.body;
  const initialFontSize = getComputedStyle(body).fontSize;

  if (increaseFontSizeBtn) {
    increaseFontSizeBtn.addEventListener('click', (event) => {
      event.preventDefault();
      const currentFontSize = parseFloat(getComputedStyle(body).fontSize);
      body.style.fontSize = `${currentFontSize * 1.2}px`;
    });
  }

  if (resetFontSizeBtn) {
    resetFontSizeBtn.addEventListener('click', (event) => {
      event.preventDefault();
      body.style.fontSize = initialFontSize;
    });
  }
}
