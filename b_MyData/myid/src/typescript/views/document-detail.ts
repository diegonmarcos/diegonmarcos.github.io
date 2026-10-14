// ============================================
// Document detail overlay — myID
// ============================================
import type { DocumentItem } from '../modules/types';
import { svgIcon } from '../modules/icons';
import { fmtDate, flag, escapeHtml, statusClass } from '../modules/format';
import { store } from '../modules/state';

const KNOWN_KEYS = new Set([
  'id', 'type', 'label', 'issuer', 'documentNumber',
  'issueDate', 'expiryDate', 'status', 'tags',
  'verifications', 'assets', 'notes', 'lastVerified', '_source',
]);

function row(label: string, value: string): string {
  return `<div class="detail__row"><span class="lbl">${escapeHtml(label)}</span><span class="val">${value}</span></div>`;
}

function mediaHtml(doc: DocumentItem): string {
  const a = doc.assets ?? {};
  const src = a.front || a.thumb || a.back || a.alt || a.alt2010 || a.qr;
  if (src) return `<img src="${escapeHtml(src)}" alt="${escapeHtml(doc.label)}" />`;
  return `<div class="doc-card__placeholder" style="opacity:0.7">${svgIcon('id-card', 96)}<span>${escapeHtml(doc.type)}</span></div>`;
}

export function renderDetail(host: HTMLElement, doc: DocumentItem | null) {
  let overlay = host.querySelector('#detail-overlay') as HTMLElement | null;
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'detail-overlay';
    overlay.className = 'detail-overlay';
    host.appendChild(overlay);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) store.set({ selectedDoc: null });
    });
  }

  if (!doc) {
    overlay.classList.remove('is-open');
    overlay.innerHTML = '';
    return;
  }

  const extras: string[] = [];
  for (const [k, v] of Object.entries(doc)) {
    if (KNOWN_KEYS.has(k)) continue;
    if (v == null) continue;
    let display: string;
    if (Array.isArray(v))      display = v.map((x) => (typeof x === 'object' ? JSON.stringify(x) : escapeHtml(String(x)))).join(', ');
    else if (typeof v === 'object') display = `<pre>${escapeHtml(JSON.stringify(v, null, 2))}</pre>`;
    else                            display = escapeHtml(String(v));
    extras.push(row(k, display));
  }

  const tagsHtml = (doc.tags ?? []).map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join(' ');
  const verHtml = (doc.verifications ?? [])
    .map((v) => `<div>${escapeHtml(v.type)}: <span class="u-mono">${escapeHtml(v.method)}</span></div>`).join('');

  overlay.innerHTML = `
    <div class="detail" role="dialog" aria-label="${escapeHtml(doc.label)}">
      <div class="detail__media">${mediaHtml(doc)}</div>
      <div class="detail__body">
        <button class="detail__close" id="detail-close">${svgIcon('x')}</button>
        <div class="detail__title">${escapeHtml(doc.label)}</div>
        <div class="detail__sub">${flag(doc.issuer.country)} ${escapeHtml(doc.issuer.name)} · <span class="pill ${statusClass(String(doc.status))}">${escapeHtml(String(doc.status))}</span></div>

        <div class="detail__rows">
          ${doc.documentNumber ? row('document no.', `<span class="u-mono">${escapeHtml(String(doc.documentNumber))}</span>`) : ''}
          ${doc.issueDate     ? row('issued',  fmtDate(doc.issueDate))  : ''}
          ${doc.expiryDate    ? row('expires', fmtDate(doc.expiryDate as string)) : ''}
          ${doc.lastVerified  ? row('verified', fmtDate(doc.lastVerified)) : ''}
          ${tagsHtml          ? row('tags', tagsHtml) : ''}
          ${verHtml           ? row('verifications', verHtml) : ''}
          ${extras.join('')}
          ${(doc as { _source?: string })._source ? row('source', `<span class="u-muted">${escapeHtml((doc as { _source?: string })._source!)}</span>`) : ''}
        </div>
      </div>
    </div>
  `;
  overlay.classList.add('is-open');
  const close = overlay.querySelector('#detail-close');
  if (close) close.addEventListener('click', () => store.set({ selectedDoc: null }));
}
