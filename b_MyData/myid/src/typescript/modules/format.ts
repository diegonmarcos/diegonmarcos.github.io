// ============================================
// Formatters — myID
// ============================================

export function fmtDate(iso?: string | null): string {
  if (!iso) return '—';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: '2-digit' });
}

export function escapeHtml(s: unknown): string {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const FLAGS: Record<string, string> = {
  ES: '🇪🇸', DE: '🇩🇪', FR: '🇫🇷', IT: '🇮🇹', PT: '🇵🇹',
  GB: '🇬🇧', US: '🇺🇸', NL: '🇳🇱', SE: '🇸🇪', FI: '🇫🇮',
  NO: '🇳🇴', DK: '🇩🇰', AT: '🇦🇹', BE: '🇧🇪', CH: '🇨🇭',
  IE: '🇮🇪', LT: '🇱🇹', RO: '🇷🇴', HR: '🇭🇷', SI: '🇸🇮',
  IS: '🇮🇸', SK: '🇸🇰', CA: '🇨🇦', BR: '🇧🇷', JP: '🇯🇵',
  EU: '🇪🇺',
};

export function flag(cc?: string): string {
  if (!cc) return '';
  return FLAGS[cc.toUpperCase()] ?? '🏳';
}

export function statusClass(status: string | undefined): string {
  if (!status) return '';
  const s = status.toLowerCase();
  if (['active', 'clean', 'passed', 'filed', 'paid', 'ready'].includes(s)) return `is-${s}`;
  if (['expired', 'revoked'].includes(s)) return 'is-expired';
  if (s === 'reference') return 'is-reference';
  return '';
}

export function holderInitials(fullName: string): string {
  return fullName
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase();
}
