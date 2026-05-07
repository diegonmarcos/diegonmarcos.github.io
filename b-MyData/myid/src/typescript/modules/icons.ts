// ============================================
// Inline SVG icon library (Feather-style strokes) — myID
// ============================================

const ICONS: Record<string, string> = {
  'wallet':       '<path d="M20 7H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"/><path d="M16 14h2"/><path d="M2 10h20"/>',
  'id-card':      '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="12" r="2.5"/><path d="M14 10h4"/><path d="M14 13h3"/>',
  'graduation':   '<path d="M22 10 12 4 2 10l10 6 10-6Z"/><path d="M6 12v5c2 2 10 2 12 0v-5"/>',
  'car':          '<path d="M5 13l1.6-4.5A2 2 0 0 1 8.5 7h7a2 2 0 0 1 1.9 1.5L19 13"/><path d="M3 13h18v5H3z"/><circle cx="7" cy="18" r="1.5"/><circle cx="17" cy="18" r="1.5"/>',
  'briefcase':    '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/>',
  'award':        '<circle cx="12" cy="9" r="6"/><path d="M9 14l-2 7 5-3 5 3-2-7"/>',
  'credit-card':  '<rect x="2" y="6" width="20" height="13" rx="2"/><path d="M2 11h20"/><path d="M6 16h3"/>',
  'home':         '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/>',
  'heart':        '<path d="M12 21s-7-4.5-9.5-9A4.8 4.8 0 0 1 7 5c2 0 3.5 1.5 5 3 1.5-1.5 3-3 5-3a4.8 4.8 0 0 1 4.5 7C19 16.5 12 21 12 21Z"/>',
  'shield':       '<path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z"/>',
  'scale':        '<path d="M12 3v18"/><path d="M5 7l-3 6h6l-3-6Z"/><path d="M19 7l-3 6h6l-3-6Z"/><path d="M5 21h14"/>',
  'search':       '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  'globe':        '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18"/><path d="M12 3a14 14 0 0 0 0 18"/>',
  'tag':          '<path d="M20 12 12 4H4v8l8 8 8-8Z"/><circle cx="8" cy="8" r="1.4"/>',
  'key':          '<circle cx="8" cy="15" r="3.5"/><path d="m11 12 9-9"/><path d="m18 5 2 2"/><path d="m15 8 2 2"/>',
  'user':         '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/>',
  'chevron-down': '<path d="m6 9 6 6 6-6"/>',
  'x':            '<path d="m6 6 12 12"/><path d="M18 6 6 18"/>',
  'external':     '<path d="M14 4h6v6"/><path d="M10 14 20 4"/><path d="M19 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"/>',
  'check':        '<path d="m5 12 5 5 9-12"/>',
};

export function svgIcon(name: string, size = 18): string {
  const body = ICONS[name] ?? ICONS['tag'];
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
}
