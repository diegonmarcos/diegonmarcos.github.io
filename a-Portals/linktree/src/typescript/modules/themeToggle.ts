// Light / Dark theme toggle for the linktree page. Persists in localStorage,
// auto-detects `prefers-color-scheme: light` on first visit, listens for OS
// changes. Adds/removes `light-theme` on <body>; the actual color swap is
// fully declarative in scss/components/_theme-light.scss.

import { getElementById, addClass, removeClass } from '../utils/dom';

const STORAGE_KEY = 'theme';
const LIGHT_CLASS = 'light-theme';

// Wrap a class-toggle in `document.startViewTransition` when supported.
// Native cross-fade between states, GPU-accelerated. Falls through to a
// plain mutation where unsupported (Firefox today, Safari < 18).
type StartViewTransition = (cb: () => void) => unknown;
function withTransition(mutate: () => void): void {
  const sv = (document as unknown as { startViewTransition?: StartViewTransition }).startViewTransition;
  if (typeof sv === 'function') sv.call(document, mutate);
  else mutate();
}

function applyLight(): void {
  withTransition(() => document.body.classList.add(LIGHT_CLASS));
}
function applyDark(): void {
  withTransition(() => document.body.classList.remove(LIGHT_CLASS));
}
function isLight(): boolean {
  return document.body.classList.contains(LIGHT_CLASS);
}

export function initThemeToggle(): void {
  const toggle = getElementById<HTMLButtonElement>('theme-toggle');

  // 1. Resolve initial theme: localStorage > OS preference > dark default.
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'light') {
    applyLight();
    if (toggle) addClass(toggle, 'active');
  } else if (saved === 'dark') {
    applyDark();
    if (toggle) removeClass(toggle, 'active');
  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    applyLight();
    if (toggle) addClass(toggle, 'active');
  }

  if (!toggle) return;

  // 2. Manual toggle.
  toggle.addEventListener('click', () => {
    if (isLight()) {
      applyDark();
      removeClass(toggle, 'active');
      localStorage.setItem(STORAGE_KEY, 'dark');
    } else {
      applyLight();
      addClass(toggle, 'active');
      localStorage.setItem(STORAGE_KEY, 'light');
    }
  });

  // 3. React to OS preference changes only when user hasn't explicitly chosen.
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
    if (localStorage.getItem(STORAGE_KEY)) return;  // user has a saved choice; respect it
    if (e.matches) {
      applyLight();
      addClass(toggle, 'active');
    } else {
      applyDark();
      removeClass(toggle, 'active');
    }
  });
}
