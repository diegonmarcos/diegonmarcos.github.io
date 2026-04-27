import { describe, it, expect, beforeEach } from 'vitest';
import data from '../src/data/personal-tools.json';
import { initPortalRender, listSlideIds, getSlide, renderSlide } from '../src/typescript/modules/portal-render';

interface Link    { label: string; url: string; icon: string; }
interface Column  { header: string; links: Link[]; }
interface Slide   { id: string; kind: string; title: string; columns: Column[]; }
const cfg = data as unknown as { section: { id: string; title: string }; slides: Slide[] };

describe('personal-tools.json — declarative source of truth', () => {
  it('declares the Personal Tools section', () => {
    expect(cfg.section.id).toBe('personal-tools');
    expect(cfg.section.title).toBe('Personal Tools');
  });

  it('lab-tools slide has the 4 expected columns in the right order', () => {
    const labTools = cfg.slides.find(s => s.id === 'lab-tools')!;
    expect(labTools).toBeDefined();
    expect(labTools.columns.map(c => c.header)).toEqual(['Data Science', 'Quantum', 'Markets', 'Engineer']);
  });

  it('Markets column has Fin Terminal as its first entry pointing at github.io/fin-terminal', () => {
    const labTools = cfg.slides.find(s => s.id === 'lab-tools')!;
    const markets = labTools.columns.find(c => c.header === 'Markets')!;
    expect(markets.links[0]!.label).toBe('Fin Terminal');
    expect(markets.links[0]!.url).toBe('https://diegonmarcos.github.io/fin-terminal');
  });

  it('every link has a non-empty label, https URL, and icon filename', () => {
    for (const slide of cfg.slides) {
      for (const col of slide.columns) {
        for (const lk of col.links) {
          expect(lk.label, `slide ${slide.id} column ${col.header}`).toBeTruthy();
          expect(lk.url.startsWith('http'), `link ${lk.label} URL must be absolute`).toBe(true);
          expect(lk.icon, `link ${lk.label} icon`).toMatch(/\.svg$/);
        }
      }
    }
  });

  it('listSlideIds() exposes every slide id', () => {
    expect(listSlideIds()).toEqual(cfg.slides.map(s => s.id));
  });

  it('getSlide() round-trips for a known id', () => {
    expect(getSlide('lab-tools')?.title).toBe('LAB TOOLS');
    expect(getSlide('does-not-exist')).toBeUndefined();
  });
});

describe('portal-render — DOM output matches hand-coded markup', () => {
  it('renderSlide("lab-tools") produces .swiper-slide > .link-section > h2 + img + .links-container > .tools-dashboard with 4 .tools-column children', () => {
    const tree = renderSlide('lab-tools')!;
    expect(tree).not.toBeNull();
    expect(tree.classList.contains('swiper-slide')).toBe(true);
    const linkSection = tree.querySelector('.link-section')!;
    expect(linkSection).not.toBeNull();
    expect(linkSection.querySelector('h2.section-title')?.textContent).toBe('LAB TOOLS');
    expect(linkSection.querySelector('img.featured-image')).not.toBeNull();
    const dashboard = linkSection.querySelector('.tools-dashboard')!;
    expect(dashboard).not.toBeNull();
    expect(dashboard.classList.contains('tools-dashboard--4')).toBe(true);
    const columns = dashboard.querySelectorAll('.tools-column');
    expect(columns.length).toBe(4);
  });

  it('every .tools-column has the right .tools-column__header + .tools-column__links structure', () => {
    const tree = renderSlide('lab-tools')!;
    const cols = tree.querySelectorAll('.tools-column');
    for (const col of cols) {
      expect(col.querySelector('.tools-column__header'), 'header').not.toBeNull();
      expect(col.querySelector('.tools-column__links'), 'links wrapper').not.toBeNull();
    }
  });

  it('every rendered .tool-link has class, target=_blank, an icon, and the link label as text', () => {
    const tree = renderSlide('lab-tools')!;
    const links = tree.querySelectorAll('a.tool-link');
    expect(links.length).toBeGreaterThan(0);
    for (const a of Array.from(links)) {
      expect(a.getAttribute('target')).toBe('_blank');
      expect(a.querySelector('img.icon')).not.toBeNull();
      expect(a.textContent?.trim().length).toBeGreaterThan(0);
    }
  });

  it('Fin Terminal link is present and clicks through to the right URL', () => {
    const tree = renderSlide('lab-tools')!;
    const finLink = Array.from(tree.querySelectorAll<HTMLAnchorElement>('a.tool-link')).find(a => a.textContent?.includes('Fin Terminal'));
    expect(finLink).toBeDefined();
    expect(finLink!.href).toBe('https://diegonmarcos.github.io/fin-terminal');
  });
});

describe('portal-render — initPortalRender hydrates the data-portal-mount placeholder', () => {
  beforeEach(() => { document.body.innerHTML = ''; });

  it('replaces the placeholder element with the rendered slide', () => {
    document.body.innerHTML = '<div id="parent"><div data-portal-mount="lab-tools"></div></div>';
    initPortalRender();
    const parent = document.getElementById('parent')!;
    expect(parent.querySelector('[data-portal-mount]'), 'placeholder gone').toBeNull();
    expect(parent.querySelector('.swiper-slide'), 'slide present').not.toBeNull();
    expect(parent.querySelector('.section-title')?.textContent).toBe('LAB TOOLS');
  });

  it('skips placeholders pointing at unknown slide ids without throwing', () => {
    document.body.innerHTML = '<div id="parent"><div data-portal-mount="bogus"></div></div>';
    expect(() => initPortalRender()).not.toThrow();
    // Placeholder remains untouched (no matching slide in the JSON).
    expect(document.querySelector('[data-portal-mount="bogus"]')).not.toBeNull();
  });
});
