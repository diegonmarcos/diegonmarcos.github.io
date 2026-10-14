// ============================================
// Wallet grid view — renders one or more category sections
// ============================================
import type { Category, Dataset, DocumentItem } from '../modules/types';
import { svgIcon } from '../modules/icons';
import { fmtDate, flag, escapeHtml, statusClass, holderInitials } from '../modules/format';
import { store } from '../modules/state';

function renderHolderCard(data: Dataset): string {
  const h = data.holder;
  const score = data.meta.kycScore;
  const nat = h.nationality.map((c) => `${flag(c)} ${escapeHtml(c)}`).join(' · ');
  return `
    <div class="holder-card">
      <div class="holder-card__avatar">${holderInitials(h.fullName)}</div>
      <div>
        <div class="holder-card__name">${escapeHtml(h.fullName)}</div>
        <div class="holder-card__sub">${escapeHtml(h.placeOfBirth)} · ${fmtDate(h.dateOfBirth)} · resident in ${flag(h.residency.country)} ${escapeHtml(h.residency.country)}</div>
        <div class="holder-card__chips">
          <div class="holder-card__chip"><span>nat.</span>${nat}</div>
          ${h.taxIds.slice(0, 3).map((t) => `<div class="holder-card__chip"><span>${escapeHtml(t.type)}</span>${escapeHtml(t.value)}</div>`).join('')}
        </div>
      </div>
      ${score ? `
        <div class="holder-card__metrics">
          <div class="holder-card__score">${score.value}</div>
          <div class="holder-card__score-label">KYC · ${escapeHtml(score.rating)}</div>
        </div>
      ` : ''}
    </div>
  `;
}

function thumbHtml(doc: DocumentItem): string {
  const a = doc.assets ?? {};
  const src = a.front || a.thumb || a.back || a.alt || a.alt2010;
  if (src) {
    return `<img src="${escapeHtml(src)}" alt="${escapeHtml(doc.label)}" loading="lazy" />`;
  }
  // QR placeholder if QR is present, else generic doc icon
  if (a.qr) {
    return `<div class="doc-card__placeholder">${svgIcon('check', 48)}<span>${escapeHtml(doc.type)}</span></div>`;
  }
  return `<div class="doc-card__placeholder">${svgIcon('id-card', 48)}<span>${escapeHtml(doc.type)}</span></div>`;
}

function renderDocCard(doc: DocumentItem, accent: string): string {
  const tags = (doc.tags ?? []).slice(0, 3).map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join('');
  return `
    <article class="doc-card" data-doc-id="${escapeHtml(doc.id)}" style="--cat-accent:${escapeHtml(accent)}">
      <div class="doc-card__accent-bar"></div>
      <div class="doc-card__media">${thumbHtml(doc)}</div>
      <div class="doc-card__body">
        <div class="doc-card__head">
          <div class="doc-card__title">${escapeHtml(doc.label)}</div>
          <span class="pill ${statusClass(String(doc.status))}">${escapeHtml(String(doc.status))}</span>
        </div>
        <div class="doc-card__meta">${flag(doc.issuer.country)} ${escapeHtml(doc.issuer.name)}</div>
        ${doc.documentNumber ? `<div class="doc-card__row"><span class="lbl">no.</span><span class="val">${escapeHtml(String(doc.documentNumber))}</span></div>` : ''}
        ${doc.expiryDate ? `<div class="doc-card__row"><span class="lbl">exp.</span><span class="val">${fmtDate(doc.expiryDate as string)}</span></div>` : ''}
        <div class="doc-card__footer">
          <div class="doc-card__tags">${tags}</div>
        </div>
      </div>
    </article>
  `;
}

function renderSection(cat: Category): string {
  const accentBg = `--cat-bg: ${cat.color}22; --cat-fg: ${cat.color}`;
  return `
    <section class="cat-section" style="${accentBg}">
      <div class="cat-section__head">
        <div class="cat-section__title">
          <div class="cat-section__icon">${svgIcon(cat.icon)}</div>
          <h2>${escapeHtml(cat.label)}</h2>
        </div>
        <div class="cat-section__count">${cat.documents.length} document${cat.documents.length === 1 ? '' : 's'}</div>
      </div>
      <p class="cat-section__desc">${escapeHtml(cat.description)}</p>
      <div class="doc-grid">
        ${cat.documents.map((d) => renderDocCard(d, cat.color)).join('')}
      </div>
    </section>
  `;
}

export function renderWalletAll(host: HTMLElement, data: Dataset) {
  host.innerHTML = `
    <div class="view">
      <div class="view__head">
        <div class="view__title">
          <h1>All documents</h1>
          <p>${data.meta.counts.documents} items across ${data.meta.counts.categories} categories</p>
        </div>
        <div class="view__count">schema ${escapeHtml(data.meta.schemaVersion)}</div>
      </div>
      ${renderHolderCard(data)}
      ${data.categories.map(renderSection).join('')}
    </div>
  `;
  bindCardClicks(host, data);
}

export function renderWalletCategory(host: HTMLElement, data: Dataset, categoryId: string) {
  const cat = data.categories.find((c) => c.id === categoryId);
  if (!cat) {
    host.innerHTML = `<div class="view"><div class="empty-state"><h3 class="t-h2">Category not found</h3><p class="t-meta">${escapeHtml(categoryId)}</p></div></div>`;
    return;
  }
  host.innerHTML = `
    <div class="view">
      <div class="view__head">
        <div class="view__title">
          <h1>${escapeHtml(cat.label)}</h1>
          <p>${escapeHtml(cat.description)}</p>
        </div>
        <div class="view__count">${cat.documents.length} item${cat.documents.length === 1 ? '' : 's'}</div>
      </div>
      <div class="doc-grid">
        ${cat.documents.map((d) => `${(() => '')()}${renderCardWithAccent(d, cat.color)}`).join('')}
      </div>
    </div>
  `;
  bindCardClicks(host, data);
}

function renderCardWithAccent(doc: DocumentItem, accent: string): string {
  return renderDocCard(doc, accent);
}

function bindCardClicks(host: HTMLElement, data: Dataset) {
  host.addEventListener('click', (e) => {
    const card = (e.target as HTMLElement).closest('[data-doc-id]') as HTMLElement | null;
    if (!card) return;
    const id = card.dataset.docId;
    if (!id) return;
    const doc = findDoc(data, id);
    if (doc) store.set({ selectedDoc: doc });
  });
}

export function findDoc(data: Dataset, id: string): DocumentItem | null {
  for (const c of data.categories) {
    const f = c.documents.find((d) => d.id === id);
    if (f) return f;
  }
  return null;
}
