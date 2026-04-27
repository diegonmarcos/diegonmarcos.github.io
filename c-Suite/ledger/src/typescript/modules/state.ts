// ============================================
// App state
// ============================================
import type { Currency, Dataset, NavTree, Route } from './types';

type Listener = () => void;

export interface AppState {
  route: Route;
  reportingCurrency: Currency;
  period: { months: number; label: string };
  data: Dataset | null;
  nav: NavTree | null;
  loading: boolean;
  error: string | null;
}

const initial: AppState = {
  route: { path: 'cashflow/categories', tab: 'overview', params: {} },
  reportingCurrency: 'EUR',
  period: { months: 12, label: '12M' },
  data: null,
  nav: null,
  loading: true,
  error: null,
};

class Store {
  private state: AppState = { ...initial };
  private listeners = new Set<Listener>();
  get(): AppState { return this.state; }
  set(patch: Partial<AppState>) {
    this.state = { ...this.state, ...patch };
    this.listeners.forEach((l) => l());
  }
  subscribe(fn: Listener): () => void {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }
}

export const store = new Store();
