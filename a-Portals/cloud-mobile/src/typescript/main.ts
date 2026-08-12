// Main entry point for the Cloud Mobile application

import { getData } from './data';
import { initRouter } from './router';
import { initDrawer } from './drawer';

function initApp(): void {
  const data = getData();
  initRouter(data);
  initDrawer(data);
}

document.addEventListener('DOMContentLoaded', () => {
  initApp();

  // Register the Service Worker after first paint — never blocks startup.
  // Skipped on file:// (no SW support) so local verification stays simple.
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    requestAnimationFrame(() => {
      navigator.serviceWorker.register('./script-service-worker.js').catch(() => undefined);
    });
  }
});

export { initApp };
