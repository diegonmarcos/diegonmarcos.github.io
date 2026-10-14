// ============================================
// App state — myID
// ============================================
import type { Dataset, NavTree, Route, DocumentItem } from './types';

type Listener = () => void;

export interface AppState {
  route: Route;
  data: Dataset | null;
  nav: NavTree | null;
  loading: boolean;
  error: string | null;
  selectedDoc: DocumentItem | null;
}

const initial: AppState = {
  route: { path: 'wallet/all', params: {} },
  data: null,
  nav: null,
  loading: true,
  error: null,
  selectedDoc: null,
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
    return () => { this.listeners.delete(fn); };
  }
}

export const store = new Store();
