import type { PlanetInfo, ZodiacInfo, ChineseZodiacData } from '../types';

type ModalContent = PlanetInfo | ZodiacInfo | ChineseZodiacData;

let overlay: HTMLElement | null = null;

function getOverlay(): HTMLElement {
  if (!overlay) overlay = document.getElementById('modal-overlay')!;
  return overlay;
}

function el(tag: string, cls: string, text?: string): HTMLElement {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

function tags(items: string[], cls: string): DocumentFragment {
  const f = document.createDocumentFragment();
  items.forEach(t => f.appendChild(el('span', cls, t)));
  return f;
}

function renderPlanetContent(p: PlanetInfo): DocumentFragment {
  const f = document.createDocumentFragment();

  const desc = el('p', '', p.description);
  desc.style.cssText = 'color:#cbd5e1;font-size:.875rem;margin-bottom:1rem';
  f.appendChild(desc);

  const kwSec = el('div', 'modal-section');
  kwSec.appendChild(el('div', 'modal-section__label', 'Keywords'));
  const kwWrap = el('div', 'flex-wrap-gap');
  kwWrap.appendChild(tags(p.keywords, 'keyword-tag'));
  kwSec.appendChild(kwWrap);
  f.appendChild(kwSec);

  const grid = el('div', 'modal-grid-2');
  [
    ['Rules:', p.rules.join(', '), ''],
    ['Exalted:', p.exalted, 'grid-value--exalted'],
    ['Detriment:', p.detriment, 'grid-value--detriment'],
    ['Fall:', p.fall, 'grid-value--fall'],
  ].forEach(([label, value, cls]) => {
    const row = el('div', '');
    const l = el('span', 'grid-label', label as string);
    const v = el('span', `grid-value ${cls}`, ` ${value}`);
    row.appendChild(l);
    row.appendChild(v);
    grid.appendChild(row);
  });
  f.appendChild(grid);

  return f;
}

function renderZodiacContent(z: ZodiacInfo): DocumentFragment {
  const f = document.createDocumentFragment();

  const desc = el('p', '', z.description);
  desc.style.cssText = 'color:#cbd5e1;font-size:.875rem;margin-bottom:1rem';
  f.appendChild(desc);

  const kwSec = el('div', 'modal-section');
  kwSec.appendChild(el('div', 'modal-section__label', 'Keywords'));
  const kwWrap = el('div', 'flex-wrap-gap');
  kwWrap.appendChild(tags(z.keywords, 'keyword-tag'));
  kwSec.appendChild(kwWrap);
  f.appendChild(kwSec);

  const strSec = el('div', 'modal-section');
  strSec.appendChild(el('div', 'modal-section__label', 'Strengths'));
  const strWrap = el('div', 'flex-wrap-gap');
  strWrap.appendChild(tags(z.strengths, 'strength-tag'));
  strSec.appendChild(strWrap);
  f.appendChild(strSec);

  const chalSec = el('div', 'modal-section');
  chalSec.appendChild(el('div', 'modal-section__label', 'Challenges'));
  const chalWrap = el('div', 'flex-wrap-gap');
  chalWrap.appendChild(tags(z.challenges, 'challenge-tag'));
  chalSec.appendChild(chalWrap);
  f.appendChild(chalSec);

  if (z.compatibility.length) {
    const compat = el('div', 'modal-section');
    compat.appendChild(el('div', 'modal-section__label', 'Compatible with'));
    compat.appendChild(el('div', '', z.compatibility.join(', ')));
    (compat.lastChild as HTMLElement).style.cssText = 'color:#cbd5e1;font-size:.875rem';
    f.appendChild(compat);
  }

  return f;
}

function renderChineseContent(c: ChineseZodiacData): DocumentFragment {
  const f = document.createDocumentFragment();

  const desc = el('p', '', c.description);
  desc.style.cssText = 'color:#cbd5e1;font-size:.875rem;margin-bottom:1rem';
  f.appendChild(desc);

  const grid = el('div', 'modal-grid-2');
  [['Element:', c.element], ['Polarity:', c.yinYang]].forEach(([l, v]) => {
    const row = el('div', '');
    row.innerHTML = `<span class="grid-label">${l}</span> <span class="grid-value">${v}</span>`;
    grid.appendChild(row);
  });
  f.appendChild(grid);

  const traitSec = el('div', 'modal-section');
  traitSec.appendChild(el('div', 'modal-section__label', 'Traits'));
  const traitWrap = el('div', 'flex-wrap-gap');
  traitWrap.appendChild(tags(c.traits, 'keyword-tag'));
  traitSec.appendChild(traitWrap);
  f.appendChild(traitSec);

  const compatGrid = el('div', 'modal-grid-2');

  const compSec = el('div', '');
  compSec.appendChild(el('div', 'modal-section__label', 'Compatible'));
  compSec.appendChild(el('div', 'grid-value--exalted', c.compatible.join(', ')));
  compatGrid.appendChild(compSec);

  const incompSec = el('div', '');
  incompSec.appendChild(el('div', 'modal-section__label', 'Challenging'));
  incompSec.appendChild(el('div', 'grid-value--fall', c.incompatible.join(', ')));
  compatGrid.appendChild(incompSec);
  f.appendChild(compatGrid);

  if (c.luckyColors.length) {
    const lucky = el('div', 'modal-section');
    lucky.appendChild(el('div', 'modal-section__label', 'Lucky Colors'));
    lucky.appendChild(el('div', '', c.luckyColors.join(', ')));
    (lucky.lastChild as HTMLElement).style.cssText = 'color:#cbd5e1;font-size:.875rem';
    f.appendChild(lucky);
  }

  return f;
}

export function openModal(title: string, icon: string, color: string, content: ModalContent, type: 'planet' | 'zodiac' | 'chinese'): void {
  const ov = getOverlay();
  ov.classList.remove('hidden');

  const titleEl = document.getElementById('modal-title')!;
  const iconEl  = document.getElementById('modal-icon')!;
  const bodyEl  = document.getElementById('modal-body')!;

  titleEl.textContent = title;
  titleEl.style.color = color;
  iconEl.textContent  = icon;
  bodyEl.innerHTML    = '';

  let frag: DocumentFragment;
  if (type === 'planet')  frag = renderPlanetContent(content as PlanetInfo);
  else if (type === 'zodiac') frag = renderZodiacContent(content as ZodiacInfo);
  else frag = renderChineseContent(content as ChineseZodiacData);

  bodyEl.appendChild(frag);
}

export function closeModal(): void {
  getOverlay()?.classList.add('hidden');
}

export function initModal(): void {
  const ov = document.getElementById('modal-overlay')!;
  const backdrop = document.getElementById('modal-backdrop')!;
  const closeBtn = document.getElementById('modal-close')!;

  backdrop.addEventListener('click', closeModal);
  closeBtn.addEventListener('click', closeModal);
  ov.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
  });
}
