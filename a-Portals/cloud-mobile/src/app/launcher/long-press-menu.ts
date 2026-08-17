// src/app/launcher/long-press-menu.ts — app-tile long-press context menu.
//
// Real Android launcher: holding a home-screen or drawer app icon opens a
// small PopupMenu (Open / App info / Pin-Unpin / Add to Home). This reuses
// the same long-press timing fan-menu.ts already established for the
// bottom-nav (380ms, 10px move-cancel threshold), but delegates from the
// document instead of one fixed container, since app tiles (`.tile`,
// `.tile--app`) are spread across every generated page. The menu is built
// once, lazily, and appended to `.shell` — the same absolute-positioning
// contract the drawer and fan-menu already use — rather than depending on
// markup the page generator would need to ship.

const LONG_PRESS_MS = 380;
const MOVE_THRESHOLD_PX = 10;
const PIN_STORAGE_KEY = 'cloud-mobile-pins';

function readPins(): Set<string> {
  try {
    const raw = window.localStorage.getItem(PIN_STORAGE_KEY);
    return new Set(raw ? (JSON.parse(raw) as string[]) : []);
  } catch {
    return new Set();
  }
}

function writePins(pins: Set<string>): void {
  try {
    window.localStorage.setItem(PIN_STORAGE_KEY, JSON.stringify([...pins]));
  } catch {
    /* localStorage unavailable (private mode, etc.) — pin state just won't persist */
  }
}

// Generated tiles carry no stable id, so the href (unique per destination)
// doubles as the pin key; inert tiles (no href) fall back to their label.
function tileKey(tileEl: HTMLElement): string {
  if (tileEl instanceof HTMLAnchorElement) return tileEl.href;
  return tileEl.querySelector('.tile__label')?.textContent?.trim() ?? '';
}

function applyPinBadge(tileEl: HTMLElement, pinned: boolean): void {
  const existing = tileEl.querySelector<HTMLElement>('.tile__pin-badge');
  if (!pinned) {
    existing?.remove();
    return;
  }
  if (existing) return;
  const badge = document.createElement('span');
  badge.className = 'tile__pin-badge';
  badge.textContent = '★';
  tileEl.appendChild(badge);
}

export function initLongPressMenu(): void {
  const pins = readPins();

  // Paint persisted pin badges on whatever tiles this page rendered.
  document.querySelectorAll<HTMLElement>('.tile').forEach((tileEl) => {
    if (pins.has(tileKey(tileEl))) applyPinBadge(tileEl, true);
  });

  const shellEl = document.querySelector<HTMLElement>('.shell');
  const hostEl: HTMLElement = shellEl ?? document.body;

  const menuEl = document.createElement('div');
  menuEl.className = 'long-press-menu';
  menuEl.hidden = true;
  menuEl.setAttribute('aria-hidden', 'true');

  const scrimEl = document.createElement('div');
  scrimEl.className = 'long-press-menu-scrim';
  scrimEl.hidden = true;

  hostEl.appendChild(scrimEl);
  hostEl.appendChild(menuEl);

  let menuOpen = false;

  // Long-press-timer state for the pointer currently pressing a tile.
  let pressTimer: number | null = null;
  let longPressFired = false;
  let pressTileEl: HTMLElement | null = null;
  let activePointerId: number | null = null;
  let startX = 0;
  let startY = 0;

  function clearPressTimer(): void {
    if (pressTimer === null) return;
    window.clearTimeout(pressTimer);
    pressTimer = null;
  }

  function closeMenu(): void {
    menuOpen = false;
    menuEl.classList.remove('is-open');
    menuEl.setAttribute('aria-hidden', 'true');
    menuEl.hidden = true;
    menuEl.innerHTML = '';
    scrimEl.classList.remove('is-open');
    scrimEl.hidden = true;
  }

  function buildRow(label: string, disabled: boolean, onSelect?: () => void): HTMLElement {
    const row = document.createElement('button');
    row.type = 'button';
    row.className = 'long-press-menu__row';
    row.textContent = label;
    if (disabled) {
      row.disabled = true;
      row.classList.add('long-press-menu__row--inert');
    } else if (onSelect) {
      row.addEventListener('click', onSelect);
    }
    return row;
  }

  function openMenu(tileEl: HTMLElement): void {
    closeMenu();

    const inert = tileEl.classList.contains('tile--inert');
    const href = !inert && tileEl instanceof HTMLAnchorElement ? tileEl.href : null;
    const key = tileKey(tileEl);
    const pinned = pins.has(key);

    menuEl.appendChild(buildRow('Open', !href, () => {
      if (href) location.href = href;
    }));
    menuEl.appendChild(buildRow('App info', true));
    menuEl.appendChild(buildRow(pinned ? 'Unpin' : 'Pin', false, () => {
      const nowPinned = !pins.has(key);
      if (nowPinned) pins.add(key); else pins.delete(key);
      writePins(pins);
      applyPinBadge(tileEl, nowPinned);
      closeMenu();
    }));
    menuEl.appendChild(buildRow('Add to Home', true));

    // Anchored just below the tile, host-relative — same shell-offset
    // correction fan-menu.ts uses for its own popup.
    const rect = tileEl.getBoundingClientRect();
    const hostRect = hostEl.getBoundingClientRect();
    menuEl.style.left = `${rect.left - hostRect.left}px`;
    menuEl.style.top = `${rect.bottom - hostRect.top + 6}px`;

    menuEl.hidden = false;
    scrimEl.hidden = false;
    menuEl.classList.add('is-open');
    scrimEl.classList.add('is-open');
    menuEl.setAttribute('aria-hidden', 'false');
    menuOpen = true;
  }

  function onPointerDown(event: PointerEvent): void {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const tileEl = target.closest<HTMLElement>('.tile, .tile--app');
    if (!tileEl) return;

    // Never preventDefault here — a plain quick tap must still navigate via
    // the tile's real <a href> exactly as before.
    clearPressTimer();
    pressTileEl = tileEl;
    activePointerId = event.pointerId;
    startX = event.clientX;
    startY = event.clientY;
    longPressFired = false;

    pressTimer = window.setTimeout(() => {
      pressTimer = null;
      longPressFired = true;
      if (pressTileEl) openMenu(pressTileEl);
    }, LONG_PRESS_MS);
  }

  function onPointerMove(event: PointerEvent): void {
    if (pressTimer === null || event.pointerId !== activePointerId) return;
    const dx = event.clientX - startX;
    const dy = event.clientY - startY;
    if (Math.hypot(dx, dy) > MOVE_THRESHOLD_PX) clearPressTimer();
  }

  function onPointerEnd(event: PointerEvent): void {
    if (event.pointerId !== activePointerId) return;
    clearPressTimer(); // no-op if the long-press already fired
    activePointerId = null;
  }

  // Cancels navigation only for the click that follows an already-fired
  // long-press on the pressed tile — every other tile click proceeds to its
  // real href exactly as before (same contract as fan-menu.ts). Capture
  // phase, since the click's default navigation must be stopped before it
  // reaches the anchor.
  function onDocumentClickCapture(event: MouseEvent): void {
    if (!longPressFired) return;
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (target.closest('.tile, .tile--app') !== pressTileEl) return;
    longPressFired = false;
    event.preventDefault();
    event.stopPropagation();
  }

  function onDocumentKeydown(event: KeyboardEvent): void {
    if (menuOpen && event.key === 'Escape') closeMenu();
  }

  document.addEventListener('pointerdown', onPointerDown);
  document.addEventListener('pointermove', onPointerMove);
  document.addEventListener('pointerup', onPointerEnd);
  document.addEventListener('pointercancel', onPointerEnd);
  document.addEventListener('click', onDocumentClickCapture, true);
  scrimEl.addEventListener('click', closeMenu);
  document.addEventListener('keydown', onDocumentKeydown);
}
