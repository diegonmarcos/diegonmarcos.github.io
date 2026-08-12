// Radial press-menus for the 3 decorative stars (#star-sirius/-canopus/-centauri).
//
// Replicates the real Android app's press-and-drag radial widgets:
//   - Sirius  -> CircularMenu: recursive drill-down (data.stars.sirius.nodes).
//   - Canopus -> ArcMenu: single-level fan built from a fixed section's .pages.
//   - Centauri -> ArcMenu: single-level fan of inert "recent app" labels.
//
// All three share one overlay (#radial-menu, see the DOM contract below) and
// one small interaction state machine. Pragmatic, not pixel-exact physics:
// Pointer Events alone (not a separate touch-event set) cover mouse/touch/pen
// uniformly in every supported browser, so a plain tap and a press-drag both
// funnel through the same pointerdown/pointermove/pointerup handlers.
import type { PageEntry, PortalData, RadialNode } from './types';
import { resolveTarget, routeHref } from './nav';
import { getData } from './data';

type StarKind = 'sirius' | 'canopus' | 'centauri';

interface RadialItem {
  id: string;
  label: string;
  href: string | null;
  inert: boolean;
  node?: RadialNode;
}

const RADIUS_PX = 126;
const DEAD_ZONE_PX = 24;
const MOVE_THRESHOLD_PX = 6;
const FLASH_MS = 220;
const TWO_PI = Math.PI * 2;

function polar(angle: number, radius: number): { tx: number; ty: number } {
  return { tx: Math.cos(angle) * radius, ty: Math.sin(angle) * radius };
}

// Sirius: full circle, n items 360°/n apart, starting straight up.
// Canopus/Centauri: half-moon arc from 180° to 360° (i.e. centered on "up"),
// so the fan opens away from the bottom-nav rather than into it.
function computeAngles(count: number, kind: StarKind): number[] {
  if (count <= 0) return [];
  if (kind === 'sirius') {
    const start = -Math.PI / 2;
    return Array.from({ length: count }, (_, i) => start + (i * TWO_PI) / count);
  }
  if (count === 1) return [Math.PI + Math.PI / 2];
  const step = Math.PI / (count - 1);
  return Array.from({ length: count }, (_, i) => Math.PI + i * step);
}

function angularDistance(a: number, b: number): number {
  return Math.abs(Math.atan2(Math.sin(a - b), Math.cos(a - b)));
}

function nearestIndexByAngle(angle: number, angles: number[]): number {
  let bestIndex = 0;
  let bestDelta = Infinity;
  for (let i = 0; i < angles.length; i++) {
    const delta = angularDistance(angle, angles[i]);
    if (delta < bestDelta) {
      bestDelta = delta;
      bestIndex = i;
    }
  }
  return bestIndex;
}

function siriusItems(nodes: RadialNode[]): RadialItem[] {
  return nodes.map((n): RadialItem => {
    if (n.children && n.children.length > 0) {
      return { id: n.id, label: n.label, href: null, inert: false, node: n };
    }
    const href = resolveTarget(n.target).href;
    // node is kept for leaf items too (not just parents) so commitIndex()
    // below can still see the raw target string — needed to recognize the
    // action:open_search / action:open_update special targets, which
    // resolveTarget() deliberately maps to a null href (see nav.ts).
    return { id: n.id, label: n.label, href, inert: href === null, node: n };
  });
}

function pageEntryItem(entry: PageEntry, sectionId: string): RadialItem {
  if (typeof entry === 'string') {
    return { id: entry, label: entry, href: routeHref([sectionId, entry]), inert: false };
  }
  const href = entry.target ? resolveTarget(entry.target).href : routeHref([sectionId, entry.id]);
  return { id: entry.id, label: entry.label, href, inert: href === null };
}

function canopusItems(): RadialItem[] {
  const live = getData();
  const sectionId = live.stars.canopus.fixedSection;
  const pages = live.sections[sectionId]?.pages ?? [];
  return pages.map((entry) => pageEntryItem(entry, sectionId));
}

function centauriItems(recentApps: string[]): RadialItem[] {
  return recentApps.map((label, i): RadialItem => ({ id: `recent-${i}`, label, href: null, inert: true }));
}

export function initStars(data: PortalData): void {
  const menuRoot = document.getElementById('radial-menu');
  if (!menuRoot) return;
  // Rebind to a non-nullable const: narrowing from the guard above doesn't
  // cross into the nested function declarations below, but a genuinely
  // non-nullable declared type does, so every closure sees HTMLElement
  // directly with no re-checking needed (matches drawer.ts's guard style,
  // just hoisted once instead of repeated in every helper).
  const menuEl: HTMLElement = menuRoot;

  const starEls: Array<{ el: HTMLElement; kind: StarKind }> = [];
  const siriusEl = document.getElementById('star-sirius');
  const canopusEl = document.getElementById('star-canopus');
  const centauriEl = document.getElementById('star-centauri');
  if (siriusEl) starEls.push({ el: siriusEl, kind: 'sirius' });
  if (canopusEl) starEls.push({ el: canopusEl, kind: 'canopus' });
  if (centauriEl) starEls.push({ el: centauriEl, kind: 'centauri' });
  if (starEls.length === 0) return;

  // Shared overlay state — only one menu (and one #radial-menu) exists at a
  // time, so this lives at initStars scope and every star funnels into it.
  let isOpen = false;
  let originX = 0;
  let originY = 0;
  let currentItems: RadialItem[] = [];
  let currentAngles: number[] = [];
  let nodeEls: HTMLDivElement[] = [];
  let highlightIndex = -1;
  let siriusStack: RadialNode[][] = [];

  function setHighlight(index: number): void {
    if (index === highlightIndex) return;
    const prev = nodeEls[highlightIndex];
    if (prev) prev.classList.remove('is-highlighted');
    highlightIndex = index;
    const next = nodeEls[highlightIndex];
    if (next) next.classList.add('is-highlighted');
  }

  function buildNodeClass(item: RadialItem, highlighted: boolean): string {
    let cls = 'radial-menu__node';
    if (highlighted) cls += ' is-highlighted';
    if (item.inert) cls += ' radial-menu__node--inert';
    return cls;
  }

  function renderItems(items: RadialItem[], depth: number, kind: StarKind): void {
    currentItems = items;
    currentAngles = computeAngles(items.length, kind);
    nodeEls = [];

    menuEl.innerHTML = '';

    const scrim = document.createElement('div');
    scrim.className = 'radial-menu__scrim';
    menuEl.appendChild(scrim);

    const center = document.createElement('div');
    center.className = 'radial-menu__center';
    center.style.left = `${originX}px`;
    center.style.top = `${originY}px`;

    if (depth > 0) {
      const back = document.createElement('button');
      back.type = 'button';
      back.className = 'radial-menu__back';
      back.textContent = '‹ Back';
      center.appendChild(back);
    }

    items.forEach((item, i) => {
      const { tx, ty } = polar(currentAngles[i] ?? 0, RADIUS_PX);
      const nodeEl = document.createElement('div');
      nodeEl.className = buildNodeClass(item, i === highlightIndex);
      nodeEl.dataset.id = item.id;
      nodeEl.dataset.index = String(i);
      nodeEl.style.setProperty('--tx', `${tx}px`);
      nodeEl.style.setProperty('--ty', `${ty}px`);

      const labelEl = document.createElement('span');
      labelEl.className = 'radial-menu__node-label';
      labelEl.textContent = item.label;
      nodeEl.appendChild(labelEl);

      center.appendChild(nodeEl);
      nodeEls.push(nodeEl);
    });

    menuEl.appendChild(center);
    menuEl.hidden = false;
    menuEl.classList.add('is-open');
    menuEl.setAttribute('aria-hidden', 'false');
    isOpen = true;
  }

  function renderSiriusLevel(): void {
    const level = siriusStack[siriusStack.length - 1] ?? [];
    renderItems(siriusItems(level), siriusStack.length - 1, 'sirius');
  }

  function closeMenu(): void {
    isOpen = false;
    siriusStack = [];
    currentItems = [];
    currentAngles = [];
    nodeEls = [];
    highlightIndex = -1;
    menuEl.classList.remove('is-open');
    menuEl.setAttribute('aria-hidden', 'true');
    menuEl.hidden = true;
    menuEl.innerHTML = '';
  }

  // No destination: leave the pill highlighted for a beat (its existing
  // .is-highlighted scale/color treatment reads as a "flash") instead of
  // vanishing instantly, then close without navigating.
  function flashThenClose(): void {
    window.setTimeout(() => closeMenu(), FLASH_MS);
  }

  function drillInto(children: RadialNode[]): void {
    siriusStack.push(children);
    highlightIndex = 0;
    renderSiriusLevel();
  }

  function goBack(): void {
    if (siriusStack.length <= 1) {
      closeMenu();
      return;
    }
    siriusStack.pop();
    highlightIndex = 0;
    renderSiriusLevel();
  }

  function commitIndex(index: number): void {
    if (!isOpen) return;
    const item = currentItems[index];
    if (!item) {
      closeMenu();
      return;
    }
    if (item.node?.children && item.node.children.length > 0) {
      drillInto(item.node.children);
      return;
    }
    // Sirius's "Home Apps" node (and any future sirius leaf) can carry the
    // same action:open_search / action:open_update targets the long-press
    // fan menu handles (see fan-menu.ts's handleSelect) — resolveTarget()
    // has no web href for these, so they must be special-cased here too,
    // ahead of the plain href branch below.
    const actionTarget = item.node?.target;
    if (actionTarget === 'action:open_search' || actionTarget === 'action:open_update') {
      closeMenu();
      import('./overlays').then((mod) => {
        if (actionTarget === 'action:open_search') mod.openSearch();
        else mod.openUpdateOverlay();
      });
      return;
    }
    if (item.href) {
      const href = item.href;
      closeMenu();
      location.href = href;
      return;
    }
    flashThenClose();
  }

  function openFor(kind: StarKind, starEl: HTMLElement): void {
    closeMenu();
    const rect = starEl.getBoundingClientRect();
    originX = rect.left + rect.width / 2;
    originY = rect.top + rect.height / 2;
    highlightIndex = 0;

    if (kind === 'sirius') {
      siriusStack = [data.stars.sirius.nodes];
      renderSiriusLevel();
    } else if (kind === 'canopus') {
      renderItems(canopusItems(), 0, 'canopus');
    } else {
      renderItems(centauriItems(data.stars.centauri.recentApps), 0, 'centauri');
    }
  }

  function updateHighlightFromPointer(clientX: number, clientY: number): void {
    const dx = clientX - originX;
    const dy = clientY - originY;
    if (Math.hypot(dx, dy) < DEAD_ZONE_PX) return;
    setHighlight(nearestIndexByAngle(Math.atan2(dy, dx), currentAngles));
  }

  function attachStar(starEl: HTMLElement, kind: StarKind): void {
    let pointerId: number | null = null;
    let moved = false;

    starEl.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      pointerId = e.pointerId;
      moved = false;
      starEl.setPointerCapture(e.pointerId);
      openFor(kind, starEl);
    });

    starEl.addEventListener('pointermove', (e) => {
      if (pointerId === null || e.pointerId !== pointerId || !isOpen) return;
      if (Math.hypot(e.clientX - originX, e.clientY - originY) > MOVE_THRESHOLD_PX) moved = true;
      updateHighlightFromPointer(e.clientX, e.clientY);
    });

    starEl.addEventListener('pointerup', (e) => {
      if (pointerId === null || e.pointerId !== pointerId) return;
      if (starEl.hasPointerCapture(pointerId)) starEl.releasePointerCapture(pointerId);
      pointerId = null;
      if (!isOpen) return;
      // A plain tap (press+release with no drag) only opens the menu — it
      // leaves it open for a discrete second tap on a node (see the click
      // delegation below), rather than immediately evaluating a commit.
      if (!moved) return;
      if (Math.hypot(e.clientX - originX, e.clientY - originY) < DEAD_ZONE_PX) {
        closeMenu();
        return;
      }
      commitIndex(highlightIndex);
    });

    starEl.addEventListener('pointercancel', (e) => {
      if (pointerId === null || e.pointerId !== pointerId) return;
      pointerId = null;
    });
  }

  starEls.forEach(({ el, kind }) => attachStar(el, kind));

  menuEl.addEventListener('click', (e) => {
    if (!isOpen) return;
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.closest('.radial-menu__scrim')) {
      closeMenu();
      return;
    }
    if (target.closest('.radial-menu__back')) {
      goBack();
      return;
    }
    const nodeEl = target.closest<HTMLElement>('.radial-menu__node');
    if (!nodeEl) return;
    const index = Number(nodeEl.dataset.index);
    if (!Number.isNaN(index)) commitIndex(index);
  });

  document.addEventListener('keydown', (e) => {
    if (isOpen && e.key === 'Escape') closeMenu();
  });
}
