// src/typescript/drawer.ts — slide-in nav drawer.
//
// The real Android app's drawer is exactly 2 tabs: "Home" (every top-level
// destination) and the current section (that section's own tiles/pages) —
// never a flat combined list. This module only populates and wires the
// drawer markup the generated HTML shell already contains (see
// scripts/generate-pages.mjs); it never creates that markup itself, and it
// never navigates on its own — every link it builds is a real <a href>.

import type { PageEntry, PortalData, Section } from './types';
import { resolveTarget, routeHref } from './nav';

// The shared script.js runs unmodified on every page regardless of nesting
// depth, so — unlike the build-time generator's per-page relative `rel`
// prefix — icons here always use this absolute, root-anchored path.
function iconSrc(icon: string): string {
  return `/cloud-mobile/public/icons/${icon}.svg`;
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// One drawer row: a real <a> when href resolves, otherwise a non-navigating
// <span> — mirrors the tile/page-list inert pattern used across the
// generated pages themselves.
function buildNavRow(href: string | null, label: string, icon?: string): HTMLElement {
  let row: HTMLElement;
  if (href) {
    const anchor = document.createElement('a');
    anchor.href = href;
    row = anchor;
  } else {
    row = document.createElement('span');
  }
  row.classList.add('drawer__nav-item');
  if (!href) {
    row.classList.add('drawer__nav-item--inert');
    row.setAttribute('aria-disabled', 'true');
  }

  if (icon) {
    const iconEl = document.createElement('img');
    iconEl.src = iconSrc(icon);
    iconEl.alt = '';
    row.appendChild(iconEl);
  }

  const labelEl = document.createElement('span');
  labelEl.textContent = label;
  row.appendChild(labelEl);

  return row;
}

const MODE_STORAGE_KEY = 'cloud-mobile-mode';

// The real app's user banner is tappable to flip a persistent Apps/Admin
// mode. This site doesn't (yet) render separate admin content per section,
// but the toggle affordance itself — tap, flip, persist across visits — is
// part of the real UI and is replicated faithfully here rather than left as
// a dead button.
function readMode(fallback: string): string {
  try {
    return window.localStorage.getItem(MODE_STORAGE_KEY) ?? fallback;
  } catch {
    return fallback;
  }
}

function writeMode(mode: string): void {
  try {
    window.localStorage.setItem(MODE_STORAGE_KEY, mode);
  } catch {
    /* localStorage unavailable (private mode, etc.) — mode just won't persist */
  }
}

function fillBanner(data: PortalData): void {
  const setText = (id: string, text: string): void => {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = text;
  };
  setText('drawer-app-name', data.app.name);
  setText('drawer-app-build', data.app.build);
  setText('drawer-user-avatar', data.app.user.initials);
  setText('drawer-user-name', data.app.user.name);
  setText('drawer-user-email', data.app.user.email);

  const modeEl = document.getElementById('drawer-user-mode');
  const bannerBtn = document.getElementById('drawer-user-banner');
  if (!modeEl || !bannerBtn) return;

  let mode = readMode(data.app.user.mode);
  modeEl.textContent = `Mode: ${mode}`;

  bannerBtn.addEventListener('click', () => {
    mode = mode === 'Apps' ? 'Admin' : 'Apps';
    writeMode(mode);
    modeEl.textContent = `Mode: ${mode}`;
  });
}

// Home tab: every bottomNav destination first (in order), then every other
// section (order doesn't matter) — i.e. all sections, deduplicated.
function fillHomeNav(container: HTMLElement, data: PortalData): void {
  container.innerHTML = '';
  const remainingIds = Object.keys(data.sections).filter((id) => !data.bottomNav.includes(id));
  const orderedIds = [...data.bottomNav, ...remainingIds];

  orderedIds.forEach((id) => {
    const section: Section | undefined = data.sections[id];
    if (!section) return;
    container.appendChild(buildNavRow(routeHref([id]), section.label, section.icon));
  });
}

// Section tab: the current section's own tiles (aggregators) or pages
// (content-only sections). Left empty for 'home' — its own tab covers that.
function fillSectionNav(container: HTMLElement, sectionId: string, section: Section): void {
  container.innerHTML = '';

  if (section.tiles) {
    section.tiles.forEach((tile) => {
      container.appendChild(buildNavRow(resolveTarget(tile.target).href, tile.label, tile.icon));
    });
    if (sectionId === 'suite') {
      container.appendChild(buildNavRow(routeHref(['suite', 'cloud', 'quickmarks']), 'Cloud', 'suite'));
      container.appendChild(buildNavRow(routeHref(['suite', 'phone', 'quickmarks']), 'Phone', 'phone'));
    }
    return;
  }

  if (section.pages) {
    section.pages.forEach((page: PageEntry) => {
      const label = typeof page === 'string' ? page : page.label;
      const id = typeof page === 'string' ? slugify(page) : page.id;
      const href = typeof page === 'object' && page.target
        ? resolveTarget(page.target).href
        : routeHref([sectionId, id]);
      container.appendChild(buildNavRow(href, label));
    });
  }
}

// Pure UI state: exactly one of the two <nav> lists is visible at a time,
// driven by which of the two tab buttons is active. Never navigates.
function wireTabs(): void {
  const tabsEl = document.getElementById('drawer-tabs');
  const homeNavEl = document.getElementById('drawer-nav-home');
  const sectionNavEl = document.getElementById('drawer-nav-section');
  if (!tabsEl || !homeNavEl || !sectionNavEl) return;

  const homeTabBtn = tabsEl.querySelector<HTMLButtonElement>('[data-tab="home"]');
  const sectionTabBtn = tabsEl.querySelector<HTMLButtonElement>('[data-tab="section"]');
  if (!homeTabBtn || !sectionTabBtn) return;

  homeTabBtn.addEventListener('click', () => {
    homeTabBtn.classList.add('is-active');
    sectionTabBtn.classList.remove('is-active');
    homeNavEl.hidden = false;
    sectionNavEl.hidden = true;
  });

  sectionTabBtn.addEventListener('click', () => {
    sectionTabBtn.classList.add('is-active');
    homeTabBtn.classList.remove('is-active');
    homeNavEl.hidden = true;
    sectionNavEl.hidden = false;
  });
}

// Open/close mechanics. Note: the Sirius star no longer opens the drawer —
// it now drives its own radial menu (see stars.ts) — so it is not wired here.
function wireOpenClose(): void {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const drawerEl = document.getElementById('drawer');
  const scrimEl = document.getElementById('drawer-scrim');
  if (!hamburgerBtn || !drawerEl || !scrimEl) return;

  const open = (): void => {
    drawerEl.classList.add('is-open');
    scrimEl.classList.add('is-open');
    drawerEl.setAttribute('aria-hidden', 'false');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
  };

  const close = (): void => {
    drawerEl.classList.remove('is-open');
    scrimEl.classList.remove('is-open');
    drawerEl.setAttribute('aria-hidden', 'true');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  };

  hamburgerBtn.addEventListener('click', open);
  scrimEl.addEventListener('click', close);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });
}

export function initDrawer(data: PortalData): void {
  const sectionId = document.body.dataset['section'] ?? 'home';

  fillBanner(data);

  const homeNavEl = document.getElementById('drawer-nav-home');
  if (homeNavEl) fillHomeNav(homeNavEl, data);

  const sectionNavEl = document.getElementById('drawer-nav-section');
  const section = data.sections[sectionId];
  if (sectionNavEl && section && sectionId !== 'home') {
    fillSectionNav(sectionNavEl, sectionId, section);
  }

  wireTabs();
  wireOpenClose();
}
