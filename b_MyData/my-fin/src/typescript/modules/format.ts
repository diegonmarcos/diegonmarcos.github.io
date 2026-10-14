// ============================================
// Multi-currency formatting + FX conversion
// ============================================
import type { Currency, FxRates } from './types';

const LOCALE: Record<Currency, string> = {
  USD: 'en-US',
  EUR: 'de-DE',
  BRL: 'pt-BR',
  GBP: 'en-GB',
};

const SYMBOL: Record<Currency, string> = {
  USD: '$',
  EUR: '€',
  BRL: 'R$',
  GBP: '£',
};

const FLAG: Record<Currency, string> = {
  USD: '🇺🇸',
  EUR: '🇪🇺',
  BRL: '🇧🇷',
  GBP: '🇬🇧',
};

export function currencySymbol(c: Currency): string { return SYMBOL[c]; }
export function currencyFlag(c: Currency): string { return FLAG[c]; }

// Convert any amount in source currency to target currency, given BRL-base rates.
// rates[X] = how many BRL one X buys.
export function fxConvert(amount: number, from: Currency, to: Currency, rates: FxRates): number {
  if (from === to) return amount;
  const inBrl = amount * rates[from];
  return inBrl / rates[to];
}

// Pretty money formatter — locale-aware, optional sign, optional compact
export interface MoneyOpts {
  signed?: boolean;       // show + for positive, - for negative
  abs?: boolean;          // strip sign entirely
  decimals?: number;      // override fraction digits
  compact?: boolean;      // 1.2k / 3.4M
}

export function formatMoney(amount: number, currency: Currency, opts: MoneyOpts = {}): string {
  const { signed = false, abs = false, decimals, compact = false } = opts;
  const value = abs ? Math.abs(amount) : amount;
  const fmt = new Intl.NumberFormat(LOCALE[currency], {
    style: 'currency',
    currency,
    minimumFractionDigits: decimals ?? 2,
    maximumFractionDigits: decimals ?? 2,
    notation: compact ? 'compact' : 'standard',
    signDisplay: signed ? 'always' : 'auto',
  });
  return fmt.format(value);
}

export function formatNumber(value: number, decimals = 2): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

export function formatPercent(value: number, decimals = 1): string {
  const sign = value > 0 ? '+' : '';
  return `${sign}${value.toFixed(decimals)}%`;
}

export function formatDate(iso: string, currency: Currency = 'BRL'): string {
  const d = new Date(iso + 'T00:00:00');
  return new Intl.DateTimeFormat(LOCALE[currency], {
    day: '2-digit', month: 'short',
  }).format(d);
}

export function formatMonth(yyyymm: string, currency: Currency = 'BRL'): string {
  const [y, m] = yyyymm.split('-').map(Number);
  const d = new Date(y, m - 1, 1);
  return new Intl.DateTimeFormat(LOCALE[currency], {
    month: 'short', year: 'numeric',
  }).format(d);
}

export function formatRate(from: Currency, to: Currency, rates: FxRates): string {
  const r = fxConvert(1, from, to, rates);
  const decimals = r < 1 ? 4 : (r < 100 ? 2 : 0);
  return r.toFixed(decimals);
}
