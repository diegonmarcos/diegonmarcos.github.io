// ============================================
// Aggregations — pure functions over the dataset
// ============================================
import type { Currency, Dataset, Transaction, Holding, ExpenseCategory } from './types';
import { fxConvert } from './format';

export interface MonthBucket {
  yearMonth: string;
  income: number;
  expense: number;
  net: number;
}

export interface CategoryBucket {
  category: ExpenseCategory;
  amount: number;
  share: number;
  count: number;
}

export interface CityBucket {
  city: string;
  country: string;
  cc: string;
  lat: number;
  lng: number;
  amount: number;
  count: number;
}

export const INCOME_CATEGORIES: ExpenseCategory[] = ['income', 'investment_income'];

export function isIncome(t: Transaction): boolean {
  return t.amount > 0 || INCOME_CATEGORIES.includes(t.category);
}

export function txInPeriod(data: Dataset, months: number): Transaction[] {
  const cutoff = new Date(data.meta.period.to);
  cutoff.setMonth(cutoff.getMonth() - months);
  const cutoffIso = cutoff.toISOString().slice(0, 10);
  return data.transactions.filter((t) => t.date >= cutoffIso);
}

// Convert transaction amount to reporting currency
export function txAmount(t: Transaction, reporting: Currency, data: Dataset): number {
  return fxConvert(t.amount, t.currency, reporting, data.fx);
}

export function bucketByMonth(txs: Transaction[], reporting: Currency, data: Dataset): MonthBucket[] {
  const map = new Map<string, MonthBucket>();
  for (const t of txs) {
    const ym = t.date.slice(0, 7);
    if (!map.has(ym)) map.set(ym, { yearMonth: ym, income: 0, expense: 0, net: 0 });
    const b = map.get(ym)!;
    const v = txAmount(t, reporting, data);
    if (isIncome(t)) b.income += v;
    else b.expense += Math.abs(v);
    b.net = b.income - b.expense;
  }
  return [...map.values()].sort((a, b) => a.yearMonth.localeCompare(b.yearMonth));
}

export function bucketByCategory(txs: Transaction[], reporting: Currency, data: Dataset): CategoryBucket[] {
  const map = new Map<ExpenseCategory, CategoryBucket>();
  let total = 0;
  for (const t of txs) {
    if (isIncome(t)) continue;
    const v = Math.abs(txAmount(t, reporting, data));
    if (!map.has(t.category)) {
      map.set(t.category, { category: t.category, amount: 0, share: 0, count: 0 });
    }
    const b = map.get(t.category)!;
    b.amount += v;
    b.count += 1;
    total += v;
  }
  for (const b of map.values()) b.share = total > 0 ? b.amount / total : 0;
  return [...map.values()].sort((a, b) => b.amount - a.amount);
}

export function bucketByCity(txs: Transaction[], reporting: Currency, data: Dataset): CityBucket[] {
  const map = new Map<string, CityBucket>();
  for (const t of txs) {
    if (!t.location || t.location.cc === '--') continue;
    if (isIncome(t)) continue;
    const key = `${t.location.cc}|${t.location.city}`;
    if (!map.has(key)) {
      map.set(key, {
        city: t.location.city,
        country: t.location.country,
        cc: t.location.cc,
        lat: t.location.lat,
        lng: t.location.lng,
        amount: 0,
        count: 0,
      });
    }
    const b = map.get(key)!;
    b.amount += Math.abs(txAmount(t, reporting, data));
    b.count += 1;
  }
  return [...map.values()].sort((a, b) => b.amount - a.amount);
}

// Portfolio aggregations
export interface ClassBucket {
  assetClass: string;
  amount: number;
  share: number;
}

export function portfolioValue(holdings: Holding[], reporting: Currency, data: Dataset): number {
  return holdings.reduce((sum, h) => {
    const native = h.assetClass === 'cash' ? h.avgCost : h.quantity * h.currentPrice;
    return sum + fxConvert(native, h.currency, reporting, data.fx);
  }, 0);
}

export function portfolioCost(holdings: Holding[], reporting: Currency, data: Dataset): number {
  return holdings.reduce((sum, h) => {
    const native = h.assetClass === 'cash' ? h.avgCost : h.quantity * h.avgCost;
    return sum + fxConvert(native, h.currency, reporting, data.fx);
  }, 0);
}

export function holdingValue(h: Holding, reporting: Currency, data: Dataset): number {
  const native = h.assetClass === 'cash' ? h.avgCost : h.quantity * h.currentPrice;
  return fxConvert(native, h.currency, reporting, data.fx);
}

export function holdingPnl(h: Holding, reporting: Currency, data: Dataset): { value: number; pct: number } {
  if (h.assetClass === 'cash') return { value: 0, pct: 0 };
  const cost = fxConvert(h.quantity * h.avgCost, h.currency, reporting, data.fx);
  const val  = fxConvert(h.quantity * h.currentPrice, h.currency, reporting, data.fx);
  return { value: val - cost, pct: cost > 0 ? ((val - cost) / cost) * 100 : 0 };
}

export function bucketByAssetClass(holdings: Holding[], reporting: Currency, data: Dataset): ClassBucket[] {
  const map = new Map<string, ClassBucket>();
  let total = 0;
  for (const h of holdings) {
    const v = holdingValue(h, reporting, data);
    if (!map.has(h.assetClass)) map.set(h.assetClass, { assetClass: h.assetClass, amount: 0, share: 0 });
    map.get(h.assetClass)!.amount += v;
    total += v;
  }
  for (const b of map.values()) b.share = total > 0 ? b.amount / total : 0;
  return [...map.values()].sort((a, b) => b.amount - a.amount);
}
