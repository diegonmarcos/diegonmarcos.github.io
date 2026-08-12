// src/typescript/overlays.ts — the 2 shared ".overlay-sheet" modal chromes:
// Notification Center and the Update-progress overlay. Both live in the
// fixed, empty containers every generated page already carries
// (#notification-center / #update-overlay — see scripts/generate-pages.mjs);
// this module only populates and wires them, it never creates those
// containers itself.
//
// Notification Center owns its own trigger (#dynamic-island) directly. The
// Update overlay is instead opened from elsewhere entirely — the long-press
// fan menu and Sirius's radial menu, both driven by the special
// action:check_updates target string resolved by other modules — so it's
// exposed as a plain exported function for that other code to call:
//   import { openUpdateOverlay } from './overlays';

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

let updateOpener: (() => void) | null = null;

export function openUpdateOverlay(): void {
  if (updateOpener) updateOpener();
}

export function initOverlays(data: PortalData): void {
  buildNotificationCenter(data);
  updateOpener = buildUpdateOverlay(data);
}
