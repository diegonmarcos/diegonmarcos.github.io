// MyFeed - Multi-Page App Entry Point
// ====================================

import { initAppsFeed } from './apps-feed';
import { initRSSFeed } from './rss-feed';
import { initNtfyFeed } from './ntfy-feed';

// Detect current page
function getCurrentPage(): string {
  const path = window.location.pathname;
  if (path.includes('appsfeed.html')) return 'appsfeed';
  if (path.includes('newsfeed.html')) return 'newsfeed';
  if (path.includes('cloudfeed.html')) return 'cloudfeed';
  return 'index';
}

// Initialize based on current page
document.addEventListener('DOMContentLoaded', () => {
  const page = getCurrentPage();

  switch (page) {
    case 'appsfeed':
      initAppsFeed();
      break;

    case 'newsfeed':
      initRSSFeed();
      break;

    case 'cloudfeed':
      initNtfyFeed();
      initModeToggle();
      break;

    default:
      // Index page - no special initialization needed
      break;
  }
});

// CloudFeed mode toggle
function initModeToggle(): void {
  const modeButtons = document.querySelectorAll('.mode-btn');
  const apiMode = document.getElementById('api-mode');
  const rssMode = document.getElementById('rss-mode');

  modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = (btn as HTMLButtonElement).dataset.mode;

      modeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (mode === 'api') {
        apiMode?.style.setProperty('display', 'block');
        rssMode?.style.setProperty('display', 'none');
      } else {
        apiMode?.style.setProperty('display', 'none');
        rssMode?.style.setProperty('display', 'block');
      }
    });
  });
}
