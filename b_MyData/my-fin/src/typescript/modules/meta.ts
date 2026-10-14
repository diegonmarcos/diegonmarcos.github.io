// ============================================
// Category metadata — labels, colors, icons
// ============================================
import type { ExpenseCategory, AssetClass } from './types';

export const CATEGORY_META: Record<ExpenseCategory, { label: string; color: string; icon: string }> = {
  housing:           { label: 'Accommodation',     color: '#B89968', icon: 'home' },
  food:              { label: 'Food & dining',     color: '#6FA78A', icon: 'utensils' },
  transport:         { label: 'Transport',         color: '#7B95A8', icon: 'car' },
  travel:            { label: 'Travel',            color: '#A07B8C', icon: 'plane' },
  entertainment:     { label: 'Entertainment',     color: '#C89456', icon: 'film' },
  shopping:          { label: 'Shopping',          color: '#5F7884', icon: 'bag' },
  health:            { label: 'Health',            color: '#B66758', icon: 'heart' },
  education:         { label: 'Education',         color: '#8C7A6B', icon: 'book' },
  utilities:         { label: 'Subscriptions',     color: '#6E665D', icon: 'plug' },
  taxes:             { label: 'Taxes',             color: '#C89456', icon: 'receipt' },
  income:            { label: 'Employment income', color: '#6FA78A', icon: 'briefcase' },
  investment_income: { label: 'Investment income', color: '#B89968', icon: 'trending-up' },
  other:             { label: 'Other',             color: '#6A6357', icon: 'circle' },
};

export const ASSET_CLASS_META: Record<AssetClass, { label: string; color: string }> = {
  etf_intl:    { label: 'International equity ETFs', color: '#B89968' },
  etf_br:      { label: 'Brazilian equity ETFs',     color: '#6FA78A' },
  etf_bonds:   { label: 'Fixed-income ETFs',         color: '#7B95A8' },
  etf_crypto:  { label: 'Digital-asset ETFs',        color: '#A07B8C' },
  cash:        { label: 'Cash & equivalents',        color: '#6E665D' },
};

// Inline SVG icons — minimal Lucide-inspired set
export const ICONS: Record<string, string> = {
  home:          '<path d="M3 9.5L12 3l9 6.5V20a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2V9.5z"/>',
  utensils:      '<path d="M3 2v7c0 1.1.9 2 2 2h2v11"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3z"/>',
  car:           '<path d="M5 17h14M3 13l2-6h14l2 6M5 13v4M19 13v4M7 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM17 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>',
  plane:         '<path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5L3 8.7c-.2.4 0 .9.4 1.1L9 13l-2 3H4l-1 1 3 1.5 1.5 3 1-1v-3l3-2 4.4 5.6c.2.4.7.6 1.1.4l2-.6c.4-.2.6-.6.5-1.1z"/>',
  film:          '<rect x="2" y="3" width="20" height="18" rx="2"/><line x1="2" y1="8" x2="22" y2="8"/><line x1="2" y1="16" x2="22" y2="16"/><line x1="7" y1="3" x2="7" y2="21"/><line x1="17" y1="3" x2="17" y2="21"/>',
  bag:           '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>',
  heart:         '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
  book:          '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  plug:          '<path d="M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0V8z"/><path d="M12 18v4"/>',
  receipt:       '<path d="M4 2v20l3-2 3 2 3-2 3 2 3-2V2H4z"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="16" y2="11"/><line x1="8" y1="15" x2="13" y2="15"/>',
  briefcase:     '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  'trending-up': '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
  circle:        '<circle cx="12" cy="12" r="10"/>',
  // Nav icons
  expenses:      '<path d="M2 12h6m4 0h10"/><circle cx="10" cy="12" r="2"/><path d="M5 6v12M19 6v12M5 18h14"/>',
  portfolio:     '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 12l3 3 7-7"/>',
  map:           '<path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4z"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>',
  reports:       '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/>',
  search:        '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  bell:          '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
  settings:      '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  'arrow-up':    '<polyline points="18 15 12 9 6 15"/>',
  'arrow-down':  '<polyline points="6 9 12 15 18 9"/>',
  download:      '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  filter:        '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
  'file-text':   '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
  globe:         '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  shield:        '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  award:         '<circle cx="12" cy="8" r="6"/><polyline points="9 13.5 9 22 12 19 15 22 15 13.5"/>',
  'plus':        '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  'chevron-down':'<polyline points="6 9 12 15 18 9"/>',
  'credit-card': '<rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>',
  'building':    '<rect x="4" y="3" width="16" height="18" rx="1"/><line x1="9" y1="7" x2="9" y2="7"/><line x1="15" y1="7" x2="15" y2="7"/><line x1="9" y1="11" x2="9" y2="11"/><line x1="15" y1="11" x2="15" y2="11"/><line x1="9" y1="15" x2="9" y2="15"/><line x1="15" y1="15" x2="15" y2="15"/><line x1="10" y1="21" x2="10" y2="17"/><line x1="14" y1="21" x2="14" y2="17"/>',
  'home-key':    '<path d="M3 9.5L12 3l9 6.5V20a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2V9.5z"/>',
};

export function svgIcon(name: string, attrs: Record<string, string> = {}): string {
  const inner = ICONS[name] || ICONS.circle;
  const def = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';
  const extra = Object.entries(attrs).map(([k, v]) => `${k}="${v}"`).join(' ');
  return `<svg ${def} ${extra}>${inner}</svg>`;
}
