// Main entry point for the Cloud Mobile application.
//
// Every route is now a real, independent, server-rendered (build-time
// generated) HTML page — see scripts/generate-pages.mjs. This script is
// pure progressive enhancement: it never owns navigation. It only wires
// UI-state widgets (drawer open/close, the three radial star menus) and
// registers the service worker.

import { getData } from './data';
import { initDrawer } from './drawer';
import { initStars } from './stars';

// document.currentScript is only valid synchronously while this script is
// the one executing — capture it now, before any async boundary, for use
// inside the deferred SW-registration callback below.
const SELF_SCRIPT_URL = (document.currentScript as HTMLScriptElement | null)?.src ?? '';

function initApp(): void {
  const data = getData();
  initDrawer(data);
  initStars(data);
}

document.addEventListener('DOMContentLoaded', () => {
  initApp();

  // Register the Service Worker after first paint — never blocks startup.
  // Skipped on file:// (no SW support). The registration path is resolved
  // against THIS script's own URL (not the page's), because pages live at
  // arbitrary nesting depth (e.g. /suite/cloud/quickmarks/) while
  // script.js and script-service-worker.js both always sit at the site
  // root — a plain relative './script-service-worker.js' would resolve
  // against the *page* URL and 404 on any nested route.
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    requestAnimationFrame(() => {
      const swUrl = SELF_SCRIPT_URL ? new URL('script-service-worker.js', SELF_SCRIPT_URL).href : './script-service-worker.js';
      navigator.serviceWorker.register(swUrl).catch(() => undefined);
    });
  }
});

export { initApp };
