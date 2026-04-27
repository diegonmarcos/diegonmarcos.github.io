// Declarative renderer for Personal Tools slides. Reads
// src/data/personal-tools.json and replaces any element marked with
// `data-portal-mount="<slide-id>"` with the rendered DOM tree.
// Output HTML is byte-equivalent to the hand-coded markup so SCSS keeps
// matching without changes. New tool? Edit the JSON, no HTML edit.

import personalTools from '../../data/personal-tools.json';

interface Link    { label: string; url: string; icon: string; }
interface Column  { header: string; header_url?: string | null; links: Link[]; }
interface SlideTools {
  id: string;
  kind: 'tools';
  title: string;
  image?: { src: string; alt?: string };
  dashboard_modifier?: string;
  columns: Column[];
}
type Slide = SlideTools;
interface PersonalToolsCfg {
  section: { id: string; title: string; swiper_class: string };
  slides: Slide[];
}

const CFG = personalTools as unknown as PersonalToolsCfg;

function el(tag: string, attrs: Record<string, string> = {}, children: Array<HTMLElement | string> = []): HTMLElement {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') node.className = v;
    else node.setAttribute(k, v);
  }
  for (const c of children) {
    node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
  }
  return node;
}

function renderToolLink(link: Link): HTMLElement {
  const a = el('a', { class: 'tool-link', href: link.url, target: '_blank' });
  a.appendChild(el('img', { class: 'icon', src: `public/icons/${link.icon}` }));
  a.appendChild(document.createTextNode(link.label));
  return a;
}

function renderColumn(col: Column): HTMLElement {
  const headerEl = col.header_url
    ? (() => {
        const a = el('a', { class: 'tools-column__header', href: col.header_url, target: '_blank' });
        a.appendChild(document.createTextNode(col.header));
        return a;
      })()
    : el('div', { class: 'tools-column__header' }, [col.header]);
  const linksWrap = el('div', { class: 'tools-column__links' });
  for (const lk of col.links) linksWrap.appendChild(renderToolLink(lk));
  return el('div', { class: 'tools-column' }, [headerEl, linksWrap]);
}

function renderToolsSlide(slide: SlideTools): HTMLElement {
  const linkSection = el('div', { class: 'link-section' });
  linkSection.appendChild(el('h2', { class: 'section-title' }, [slide.title]));
  if (slide.image) {
    linkSection.appendChild(el('img', {
      src: slide.image.src,
      alt: slide.image.alt ?? slide.title,
      class: 'featured-image',
    }));
  }
  const dashClass = `tools-dashboard${slide.dashboard_modifier ? ' ' + slide.dashboard_modifier : ''}`;
  const dashboard = el('div', { class: dashClass });
  for (const col of slide.columns) dashboard.appendChild(renderColumn(col));
  linkSection.appendChild(el('div', { class: 'links-container' }, [dashboard]));
  return el('div', { class: 'swiper-slide' }, [linkSection]);
}

export function renderSlide(id: string): HTMLElement | null {
  const slide = CFG.slides.find(s => s.id === id);
  if (!slide) return null;
  if (slide.kind === 'tools') return renderToolsSlide(slide);
  return null;
}

// Mounts every `[data-portal-mount="<slide-id>"]` placeholder. Idempotent
// (re-mounting the same id replaces the previous render).
export function initPortalRender(): void {
  const mounts = document.querySelectorAll<HTMLElement>('[data-portal-mount]');
  for (const m of mounts) {
    const id = m.dataset['portalMount'];
    if (!id) continue;
    const tree = renderSlide(id);
    if (tree) {
      m.parentElement?.replaceChild(tree, m);
    }
  }
}

// Test/inspection helpers
export function listSlideIds(): string[] { return CFG.slides.map(s => s.id); }
export function getSlide(id: string): Slide | undefined { return CFG.slides.find(s => s.id === id); }
