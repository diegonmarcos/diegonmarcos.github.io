// src/typescript/overlays.ts — the 3 shared ".overlay-sheet" modal chromes:
// Notification Center, Search, and the Update-progress overlay. All three
// live in the fixed, empty containers every generated page already carries
// (#notification-center / #search-sheet / #update-overlay — see
// scripts/generate-pages.mjs); this module only populates and wires them,
// it never creates those containers itself.
//
// Notification Center owns its own trigger (#dynamic-island) directly.
// Search and the Update overlay are instead opened from elsewhere entirely
// — Sirius's "Home Apps" radial node and the long-press fan menu, both
// driven by the special action:open_search / action:open_update target
// strings resolved by other modules — so those two are exposed as plain
// exported functions for that other code to call:
//   import { openSearch, openUpdateOverlay } from './overlays';

import type { PortalData } from './types';

// Purely a visual demo timing (no real download to track) — see
// buildUpdateOverlay().
const UPDATE_DONE_DELAY_MS = 900;

// Closed state is native [hidden] (JS toggles the attribute), same
// contract as #radial-menu (see stars.ts + _radial-menu.scss's "Closed
// state is native [hidden]" comment) — .is-open alone would never become
// visible while [hidden] is still set, so both are always toggled together.
function show(el: HTMLElement): void {
  el.hidden = false;
  el.classList.add('is-open');
}

function hide(el: HTMLElement): void {
  el.classList.remove('is-open');
  el.hidden = true;
}

function buildScrim(): HTMLDivElement {
  const scrim = document.createElement('div');
  scrim.className = 'overlay-sheet__scrim';
  return scrim;
}

// Shared by all 3 sheets — just a title line, matching drawer.ts's own
// `<p class="drawer__title">` idiom for this kind of chrome label.
function buildHeader(title: string): HTMLDivElement {
  const header = document.createElement('div');
  header.className = 'overlay-sheet__header';
  const titleEl = document.createElement('p');
  titleEl.className = 'overlay-sheet__title';
  titleEl.textContent = title;
  header.appendChild(titleEl);
  return header;
}

// --- Notification Center ---------------------------------------------------
// Trigger lives here too (#dynamic-island) — nothing external ever needs to
// open this one, so unlike search/update there is no exported opener.

function buildNotificationCenter(data: PortalData): void {
  const root = document.getElementById('notification-center');
  const triggerBtn = document.getElementById('dynamic-island');
  if (!root || !triggerBtn) return;

  const scrim = buildScrim();
  const panel = document.createElement('div');
  panel.className = 'overlay-sheet__panel';
  panel.appendChild(buildHeader('Notifications'));

  // Bold-ish first line (emptyTitle) + the body below it. emptyBody carries
  // real \n line breaks and overlay-sheet__empty already has
  // white-space:pre-line in CSS, so a plain textContent assignment on the
  // body paragraph is enough — no manual <br> insertion.
  const empty = document.createElement('div');
  empty.className = 'overlay-sheet__empty';
  const titleLine = document.createElement('p');
  const titleStrong = document.createElement('strong');
  titleStrong.textContent = data.notificationCenter.emptyTitle;
  titleLine.appendChild(titleStrong);
  const bodyLine = document.createElement('p');
  bodyLine.textContent = data.notificationCenter.emptyBody;
  empty.appendChild(titleLine);
  empty.appendChild(bodyLine);
  panel.appendChild(empty);

  root.appendChild(scrim);
  root.appendChild(panel);

  const open = (): void => show(root);
  const close = (): void => hide(root);

  triggerBtn.addEventListener('click', open);
  scrim.addEventListener('click', close);

  document.addEventListener('keydown', (event) => {
    if (root.classList.contains('is-open') && event.key === 'Escape') close();
  });

  document.addEventListener('click', (event) => {
    if (!root.classList.contains('is-open')) return;
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (panel.contains(target) || triggerBtn.contains(target)) return;
    close();
  });
}

// --- Search ------------------------------------------------------------

// Returns the sheet's open() closure (or null if the container is missing)
// so initOverlays() can wire it up to the exported openSearch() below.
function buildSearchSheet(data: PortalData): (() => void) | null {
  const root = document.getElementById('search-sheet');
  if (!root) return null;

  const scrim = buildScrim();
  const panel = document.createElement('div');
  panel.className = 'overlay-sheet__panel';
  panel.appendChild(buildHeader('Search'));

  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'overlay-sheet__input';
  input.placeholder = data.search.placeholder;
  panel.appendChild(input);

  // Purely visual toggle — there's no live index behind these scopes.
  const scopes = document.createElement('div');
  scopes.className = 'overlay-sheet__scopes';
  data.search.scopes.forEach((scope) => {
    const pill = document.createElement('button');
    pill.type = 'button';
    pill.className = 'overlay-sheet__scope is-active';
    pill.textContent = scope.label;
    scopes.appendChild(pill);
  });
  scopes.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const pill = target.closest<HTMLElement>('.overlay-sheet__scope');
    if (!pill) return;
    pill.classList.toggle('is-active');
  });
  panel.appendChild(scopes);

  // No real search index to query — a single static placeholder row.
  const results = document.createElement('div');
  results.className = 'overlay-sheet__results';
  const placeholder = document.createElement('div');
  placeholder.className = 'overlay-sheet__result';
  placeholder.textContent = 'Type to search…';
  results.appendChild(placeholder);
  panel.appendChild(results);

  root.appendChild(scrim);
  root.appendChild(panel);

  const close = (): void => hide(root);
  scrim.addEventListener('click', close);
  document.addEventListener('keydown', (event) => {
    if (root.classList.contains('is-open') && event.key === 'Escape') close();
  });

  // Deliberately no document-level "click outside" listener here (unlike
  // Notification Center): openSearch() is invoked from other modules'
  // own click/pointerup handlers (radial menu, fan menu), and a generic
  // document click listener would see that same originating click bubble
  // past it right after opening and immediately close the sheet again.
  // Scrim-click + Escape (both scoped to elements this module owns) are
  // everything the spec asks for and neither has that problem.
  return (): void => {
    show(root);
    input.focus();
  };
}

// --- Update overlay ------------------------------------------------------

// Same "return an opener" shape as buildSearchSheet(), for the same reason
// (openUpdateOverlay() is called from other modules' event handlers).
function buildUpdateOverlay(data: PortalData): (() => void) | null {
  const root = document.getElementById('update-overlay');
  if (!root) return null;

  // Scrim is rendered for the dim backdrop only — intentionally never
  // wired to close, matching the real app not letting an in-progress
  // update be dismissed by an accidental outside tap.
  const scrim = buildScrim();
  const panel = document.createElement('div');
  panel.className = 'overlay-sheet__panel';
  panel.appendChild(buildHeader(data.updateOverlay.title));

  const progress = document.createElement('div');
  progress.className = 'overlay-sheet__progress';
  const progressBar = document.createElement('div');
  progressBar.className = 'overlay-sheet__progress-bar';
  progress.appendChild(progressBar);
  panel.appendChild(progress);

  const status = document.createElement('p');
  status.className = 'overlay-sheet__status';
  panel.appendChild(status);

  // Always present and functional from the start — no disabled-state
  // bookkeeping, there's no real update this could interrupt.
  const dismissBtn = document.createElement('button');
  dismissBtn.type = 'button';
  dismissBtn.className = 'overlay-sheet__action';
  dismissBtn.textContent = 'Dismiss';
  panel.appendChild(dismissBtn);

  root.appendChild(scrim);
  root.appendChild(panel);

  let doneTimer: number | null = null;

  const close = (): void => {
    if (doneTimer !== null) {
      window.clearTimeout(doneTimer);
      doneTimer = null;
    }
    hide(root);
  };
  dismissBtn.addEventListener('click', close);

  return (): void => {
    if (doneTimer !== null) window.clearTimeout(doneTimer);
    status.textContent = data.updateOverlay.states.checking;
    show(root);
    doneTimer = window.setTimeout(() => {
      status.textContent = data.updateOverlay.states.done;
      doneTimer = null;
    }, UPDATE_DONE_DELAY_MS);
  };
}

// --- Public entry points -------------------------------------------------

let searchOpener: (() => void) | null = null;
let updateOpener: (() => void) | null = null;

export function openSearch(): void {
  if (searchOpener) searchOpener();
}

export function openUpdateOverlay(): void {
  if (updateOpener) updateOpener();
}

export function initOverlays(data: PortalData): void {
  buildNotificationCenter(data);
  searchOpener = buildSearchSheet(data);
  updateOpener = buildUpdateOverlay(data);
}
