// src/lib/onehand/edge-menu.ts — the one-hand "Sirius" edge-handle swipe
// menus (left + right vertical grab bars, 5 sectors each, swipe inward to
// fan open a small arc menu). Entirely self-mounting: unlike stars.ts's
// #radial-menu (baked into every generated page), no build-time HTML exists
// for this yet, so this module builds its own DOM and appends it to .shell
// on init instead of looking up pre-rendered elements.
import type { PortalData } from '../core/types';
import { getOnehandConfig, type OnehandHandle, type OnehandSector, type OnehandSectorKey } from './config';

const SECTOR_KEYS: OnehandSectorKey[] = ['top', 'top_middle', 'center', 'down_middle', 'down'];
const SWIPE_THRESHOLD_PX = 24;
const ARC_RADIUS_PX = 130;
const ARC_SPREAD_DEG = 45;
const DEAD_ZONE_PX = 20;
const FLASH_MS = 220;
const ARROW_HEAD_LENGTH_PX = 10;
const ARROW_HEAD_ANGLE_RAD = Math.PI / 7;
const SVG_NS = 'http://www.w3.org/2000/svg';

interface ArcItem {
  key: OnehandSectorKey;
  label: string;
  action?: 'back';
}

function toArcItem(key: OnehandSectorKey, sector: OnehandSector): ArcItem {
  return { key, label: sector.label, action: sector.action };
}

// Center sector opens with its own two vertical neighbors (3-item arc);
// the two end sectors (top/down) only have one neighbor each, so those
// open a 2-item arc instead of reusing a neighbor twice.
function arcItemsFor(sectors: Partial<Record<OnehandSectorKey, OnehandSector>>, key: OnehandSectorKey): ArcItem[] {
  const self = sectors[key];
  if (!self) return [];
  const idx = SECTOR_KEYS.indexOf(key);
  const prevKey = SECTOR_KEYS[idx - 1];
  const nextKey = SECTOR_KEYS[idx + 1];
  const prev = prevKey ? sectors[prevKey] : undefined;
  const next = nextKey ? sectors[nextKey] : undefined;
  const items: ArcItem[] = [];
  if (prev && prevKey) items.push(toArcItem(prevKey, prev));
  items.push(toArcItem(key, self));
  if (next && nextKey) items.push(toArcItem(nextKey, next));
  return items;
}

function offsetsFor(count: number): number[] {
  if (count === 3) return [-ARC_SPREAD_DEG, 0, ARC_SPREAD_DEG];
  if (count === 2) return [-ARC_SPREAD_DEG, ARC_SPREAD_DEG];
  return [0];
}

function polar(angle: number, radius: number): { tx: number; ty: number } {
  return { tx: Math.cos(angle) * radius, ty: Math.sin(angle) * radius };
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

export function initEdgeMenu(data: PortalData): void {
  const config = getOnehandConfig(data);
  if (!config) return;
  const shellRoot = document.querySelector<HTMLElement>('.shell');
  if (!shellRoot) return;
  // Non-nullable alias so every closure below (shellOffset() in particular)
  // sees HTMLElement directly — narrowing from the guard above doesn't
  // cross into nested function declarations (same pattern as stars.ts's
  // own menuEl hoist).
  const shellEl: HTMLElement = shellRoot;

  const handlesRoot = document.createElement('div');
  handlesRoot.className = 'edge-menu-handles';
  shellEl.appendChild(handlesRoot);

  const menuEl = document.createElement('div');
  menuEl.className = 'edge-menu';
  menuEl.hidden = true;
  menuEl.setAttribute('aria-hidden', 'true');
  shellEl.appendChild(menuEl);

  let isOpen = false;
  let originX = 0;
  let originY = 0;
  let currentItems: ArcItem[] = [];
  let currentAngles: number[] = [];
  let nodeEls: HTMLDivElement[] = [];
  let highlightIndex = -1;
  let arrowLineEl: SVGLineElement | null = null;
  let arrowHeadEl: SVGPolygonElement | null = null;

  function shellOffset(): { x: number; y: number } {
    const rect = shellEl.getBoundingClientRect();
    return { x: rect.left, y: rect.top };
  }

  function setHighlight(index: number): void {
    if (index === highlightIndex) return;
    const prev = nodeEls[highlightIndex];
    if (prev) prev.classList.remove('is-highlighted');
    highlightIndex = index;
    const next = nodeEls[highlightIndex];
    if (next) next.classList.add('is-highlighted');
  }

  function closeMenu(): void {
    isOpen = false;
    currentItems = [];
    currentAngles = [];
    nodeEls = [];
    highlightIndex = -1;
    arrowLineEl = null;
    arrowHeadEl = null;
    menuEl.classList.remove('is-open');
    menuEl.setAttribute('aria-hidden', 'true');
    menuEl.hidden = true;
    menuEl.innerHTML = '';
  }

  // No web destination for this sector — leave the pill highlighted for a
  // beat (same "flash" treatment stars.ts uses for its own inert leaves)
  // instead of vanishing instantly, then close without navigating.
  function flashThenClose(): void {
    window.setTimeout(() => closeMenu(), FLASH_MS);
  }

  function openArc(originEl: HTMLElement, items: ArcItem[], swipeAngle: number): void {
    currentItems = items;
    const offsets = offsetsFor(items.length);
    currentAngles = offsets.map((deg) => swipeAngle + (deg * Math.PI) / 180);
    nodeEls = [];
    arrowLineEl = null;
    arrowHeadEl = null;

    menuEl.innerHTML = '';

    const rect = originEl.getBoundingClientRect();
    originX = rect.left + rect.width / 2;
    originY = rect.top + rect.height / 2;
    highlightIndex = 0;

    const scrim = document.createElement('div');
    scrim.className = 'edge-menu__scrim';
    menuEl.appendChild(scrim);

    const offset = shellOffset();
    const center = document.createElement('div');
    center.className = 'edge-menu__center';
    center.style.left = `${originX - offset.x}px`;
    center.style.top = `${originY - offset.y}px`;

    items.forEach((item, i) => {
      const { tx, ty } = polar(currentAngles[i] ?? 0, ARC_RADIUS_PX);
      const nodeEl = document.createElement('div');
      nodeEl.className = `edge-menu__node${i === highlightIndex ? ' is-highlighted' : ''}`;
      nodeEl.dataset.index = String(i);
      nodeEl.style.setProperty('--tx', `${tx}px`);
      nodeEl.style.setProperty('--ty', `${ty}px`);

      const labelEl = document.createElement('span');
      labelEl.className = 'edge-menu__node-label';
      labelEl.textContent = item.label;
      nodeEl.appendChild(labelEl);

      center.appendChild(nodeEl);
      nodeEls.push(nodeEl);
    });

    menuEl.appendChild(center);

    const arrowSvg = document.createElementNS(SVG_NS, 'svg');
    arrowSvg.setAttribute('class', 'edge-menu__arrow');
    const line = document.createElementNS(SVG_NS, 'line');
    line.setAttribute('class', 'edge-menu__arrow-line');
    const head = document.createElementNS(SVG_NS, 'polygon');
    head.setAttribute('class', 'edge-menu__arrow-head');
    arrowSvg.appendChild(line);
    arrowSvg.appendChild(head);
    menuEl.appendChild(arrowSvg);
    arrowLineEl = line;
    arrowHeadEl = head;

    menuEl.hidden = false;
    menuEl.classList.add('is-open');
    menuEl.setAttribute('aria-hidden', 'false');
    isOpen = true;
  }

  function updateArrow(clientX: number, clientY: number): void {
    if (!arrowLineEl || !arrowHeadEl) return;
    const offset = shellOffset();
    const x1 = originX - offset.x;
    const y1 = originY - offset.y;
    const x2 = clientX - offset.x;
    const y2 = clientY - offset.y;
    arrowLineEl.setAttribute('x1', String(x1));
    arrowLineEl.setAttribute('y1', String(y1));
    arrowLineEl.setAttribute('x2', String(x2));
    arrowLineEl.setAttribute('y2', String(y2));

    const angle = Math.atan2(y2 - y1, x2 - x1);
    const hx1 = x2 - ARROW_HEAD_LENGTH_PX * Math.cos(angle - ARROW_HEAD_ANGLE_RAD);
    const hy1 = y2 - ARROW_HEAD_LENGTH_PX * Math.sin(angle - ARROW_HEAD_ANGLE_RAD);
    const hx2 = x2 - ARROW_HEAD_LENGTH_PX * Math.cos(angle + ARROW_HEAD_ANGLE_RAD);
    const hy2 = y2 - ARROW_HEAD_LENGTH_PX * Math.sin(angle + ARROW_HEAD_ANGLE_RAD);
    arrowHeadEl.setAttribute('points', `${x2},${y2} ${hx1},${hy1} ${hx2},${hy2}`);
  }

  function updateHighlightFromPointer(clientX: number, clientY: number): void {
    const dx = clientX - originX;
    const dy = clientY - originY;
    if (Math.hypot(dx, dy) < DEAD_ZONE_PX) return;
    setHighlight(nearestIndexByAngle(Math.atan2(dy, dx), currentAngles));
  }

  function commitIndex(index: number): void {
    if (!isOpen) return;
    const item = currentItems[index];
    if (!item) {
      closeMenu();
      return;
    }
    if (item.action === 'back') {
      closeMenu();
      history.back();
      return;
    }
    flashThenClose();
  }

  function attachSector(sectorEl: HTMLElement, handle: OnehandHandle, key: OnehandSectorKey): void {
    let pointerId: number | null = null;
    let startX = 0;
    let startY = 0;
    let opened = false;

    sectorEl.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      closeMenu();
      pointerId = e.pointerId;
      startX = e.clientX;
      startY = e.clientY;
      opened = false;
      sectorEl.setPointerCapture(e.pointerId);
    });

    sectorEl.addEventListener('pointermove', (e) => {
      if (pointerId === null || e.pointerId !== pointerId) return;
      if (!opened) {
        const dx = e.clientX - startX;
        const inward = handle.edge === 'left' ? dx : -dx;
        if (inward < SWIPE_THRESHOLD_PX) return;
        const items = arcItemsFor(handle.sectors, key);
        if (items.length === 0) return;
        opened = true;
        const swipeAngle = Math.atan2(e.clientY - startY, e.clientX - startX);
        openArc(sectorEl, items, swipeAngle);
        updateArrow(e.clientX, e.clientY);
        return;
      }
      if (!isOpen) return;
      updateHighlightFromPointer(e.clientX, e.clientY);
      updateArrow(e.clientX, e.clientY);
    });

    sectorEl.addEventListener('pointerup', (e) => {
      if (pointerId === null || e.pointerId !== pointerId) return;
      if (sectorEl.hasPointerCapture(pointerId)) sectorEl.releasePointerCapture(pointerId);
      pointerId = null;
      if (!opened || !isOpen) return;
      if (Math.hypot(e.clientX - originX, e.clientY - originY) < DEAD_ZONE_PX) {
        closeMenu();
        return;
      }
      commitIndex(highlightIndex);
    });

    sectorEl.addEventListener('pointercancel', (e) => {
      if (pointerId === null || e.pointerId !== pointerId) return;
      pointerId = null;
      if (opened) closeMenu();
    });
  }

  function buildHandle(handle: OnehandHandle): void {
    const handleEl = document.createElement('div');
    handleEl.className = `edge-menu__handle edge-menu__handle--${handle.edge}`;
    handlesRoot.appendChild(handleEl);
    SECTOR_KEYS.forEach((key) => {
      const sectorEl = document.createElement('div');
      sectorEl.className = 'edge-menu__sector';
      sectorEl.dataset.sector = key;
      handleEl.appendChild(sectorEl);
      if (handle.sectors[key]) attachSector(sectorEl, handle, key);
    });
  }

  config.handles.forEach((handle) => buildHandle(handle));

  menuEl.addEventListener('click', (e) => {
    if (!isOpen) return;
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.closest('.edge-menu__scrim')) closeMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (isOpen && e.key === 'Escape') closeMenu();
  });
}
