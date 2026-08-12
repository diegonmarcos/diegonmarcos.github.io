// src/typescript/drawer.ts — slide-in nav drawer.
//
// The real Android app's drawer (HomeDrawerFragment) is a single
// NavigationView list, never tabs: a prepend row ("Home Apps"), then
// build.json's ui.home_groups rendered as titled submenus. Only the first
// group ("Home": Inboxes/Infos/Suite/Labs/Configs) is a plain nav list —
// the rest (Suite/Labs/Configs quick-tiles, 4 Linktree slides) are
// horizontal-scroll tile strips, a distinct pattern not yet replicated here.
// When a "Home" group tile is `section:X` and that section declares
// .pages, each page renders as an indented child row directly beneath it
// (real: "      └─── {label}"). This module only populates and wires the
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
// generated pages themselves. child=true is the real app's indented
// "└─── {label}" tree row (a section's own page, nested under its tile).
function buildNavRow(href: string | null, label: string, icon?: string, child = false): HTMLElement {
  let row: HTMLElement;
  if (href) {
    const anchor = document.createElement('a');
    anchor.href = href;
    row = anchor;
  } else {
    row = document.createElement('span');
  }
  row.classList.add('drawer__nav-item');
  if (child) row.classList.add('drawer__nav-item--child');
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

function buildGroupTitle(title: string): HTMLElement {
  const el = document.createElement('p');
  el.className = 'drawer__group-title';
  el.textContent = title;
  return el;
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

// Real app: HomeDrawerFragment prepends build.json's ui.home_drawer_prepend
// (one entry: "Home Apps") above the first titled group, then renders
// ui.home_groups as submenus. Only home_groups[0] ("Home") is a plain nav
// list; the rest are horizontal-scroll tile strips — a different pattern,
// not yet built here. "Home" itself is deliberately excluded (self-
// referential on a page reached from Home), matching how the real list
// never contains a tile back to itself either.
function fillDrawerList(container: HTMLElement, data: PortalData): void {
  container.innerHTML = '';

  const homeApps = data.longPress['home']?.find((item) => item.id === 'home-apps');
  if (homeApps) {
    const { href } = resolveTarget(homeApps.target);
    container.appendChild(buildNavRow(href, homeApps.label, homeApps.icon));
  }

  container.appendChild(buildGroupTitle('Home'));
  const groupIds = [...data.bottomNav.filter((id) => id !== 'home'), 'config'];
  groupIds.forEach((id) => {
    const section: Section | undefined = data.sections[id];
    if (!section) return;
    container.appendChild(buildNavRow(routeHref([id]), section.label, section.icon));

    // Real app: when a "Home" group tile is `section:X` and that section
    // declares .pages, each page renders as an indented child row directly
    // beneath it ("      └─── {label}") — currently only Configs has one.
    section.pages?.forEach((page: PageEntry) => {
      const label = typeof page === 'string' ? page : page.label;
      const pageId = typeof page === 'string' ? slugify(page) : page.id;
      const href = typeof page === 'object' && page.target
        ? resolveTarget(page.target).href
        : routeHref([id, pageId]);
      container.appendChild(buildNavRow(href, label, undefined, true));
    });
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
  fillBanner(data);

  const navEl = document.getElementById('drawer-nav');
  if (navEl) fillDrawerList(navEl, data);

  wireOpenClose();
}
