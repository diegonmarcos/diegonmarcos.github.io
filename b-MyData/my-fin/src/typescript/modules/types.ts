// ============================================
// Domain types — My Financials
// ============================================

export type Currency = 'USD' | 'EUR' | 'BRL' | 'GBP';

export type AssetClass =
  | 'etf_intl'       // International equity ETFs (US/EU)
  | 'etf_br'         // Brazilian equity ETFs
  | 'etf_bonds'      // Bond ETFs
  | 'etf_crypto'     // Crypto ETFs (IBIT/ETHE/HASH11)
  | 'cash';          // Cash positions in any currency

export type ExpenseCategory =
  | 'housing'
  | 'food'
  | 'transport'
  | 'health'
  | 'education'
  | 'entertainment'
  | 'shopping'
  | 'travel'
  | 'utilities'
  | 'taxes'
  | 'income'
  | 'investment_income'
  | 'other';

export interface GeoLocation {
  city: string;
  country: string;
  cc: string;     // ISO-3166 alpha-2 (or '--' for online)
  lat: number;
  lng: number;
}

export type AccountType = 'checking' | 'credit_card' | 'savings' | 'brokerage' | 'crypto';

export interface Account {
  id: string;
  name: string;
  type: AccountType;
  currency: Currency;
  institution: string;
}

export interface Transaction {
  id: string;
  date: string;          // ISO yyyy-mm-dd
  merchant: string;
  category: ExpenseCategory;
  accountId: string;
  amount: number;        // signed: negative = expense, positive = income
  currency: Currency;
  note?: string;
  location?: GeoLocation;
}

export interface Holding {
  id: string;
  ticker: string;
  name: string;
  assetClass: AssetClass;
  quantity: number;
  avgCost: number;          // per unit, in `currency`
  currentPrice: number;     // per unit, in `currency`
  currency: Currency;
  country: 'BR' | 'US' | 'EU' | 'GLOBAL';
  cnpj?: string;            // for FIIs / Brazilian assets
}

export interface FxRates {
  // base BRL — rates are: 1 unit of FOREIGN = N BRL
  USD: number;
  EUR: number;
  GBP: number;
  BRL: number; // always 1
  asOf: string;
  source: string;
}

export interface DARF {
  id: string;
  yearMonth: string;       // 'YYYY-MM'
  type: 'swing_trade' | 'day_trade' | 'reit';
  baseValue: number;       // BRL
  taxRate: number;         // 0.15 / 0.20
  taxOwed: number;         // BRL
  paid: boolean;
  dueDate: string;
}

// Real Estate (asset side + mortgage liability)
export interface RealEstateAsset {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  cc: string;
  lat: number;
  lng: number;
  currency: Currency;
  marketValue: number;
  acquisitionDate: string;
  acquisitionCost: number;
  ownershipPct: number;
  mortgage?: Mortgage;
  monthlyRent?: number;
  monthlyHoa?: number;
}

export interface Mortgage {
  lender: string;
  originalPrincipal: number;
  outstandingBalance: number;
  rateType: 'fixed' | 'variable';
  rate: number;             // annual %
  termYears: number;
  startDate: string;
  monthlyPayment: number;
  currency: Currency;
}

// Capital Markets Leverage
export type LeverageType = 'margin_loan' | 'securities_backed_credit' | 'derivative_notional' | 'fx_forward';

export interface LeveragePosition {
  id: string;
  type: LeverageType;
  counterparty: string;
  notional: number;
  currency: Currency;
  rate: number | null;        // for margin / SBL
  collateralValue: number;    // in `currency`
  collateralCurrency: Currency;
  marginCallThreshold: number; // % LTV trigger
  currentLtv: number;
  maturity: string | null;
  openedAt: string;
  monthlyCost: number;        // interest cost / fee
}

// ─── Navigation ──────────────────────────────
export interface NavTab { id: string; label: string }
export interface NavItem {
  id: string;          // 'A0', 'A1', etc.
  route: string;       // 'cashflow/categories'
  label: string;
  icon: string;
  badge?: string;
  tabs?: NavTab[];
}
export interface NavSection {
  id: string;          // 'A', 'B', ...
  label: string;
  icon: string;
  items: NavItem[];
}
export interface NavTree {
  sections: NavSection[];
  default: string;
}

// Route shape: <section>/<leaf>?tab=<id>&<key>=<value>...
export interface Route {
  path: string;                          // 'cashflow/categories'
  tab: string | null;                    // 'overview'
  params: Record<string, string>;        // arbitrary query params (e.g. { year: '2025' })
}

export interface Dataset {
  meta: {
    generatedAt: string;
    user: { name: string; cpf: string; residency: string; baseCurrency: Currency };
    period: { from: string; to: string };
    counts: { transactions: number; holdings: number; accounts: number; darfs: number };
  };
  fx: FxRates;
  accounts: Account[];
  transactions: Transaction[];
  holdings: Holding[];
  darfs: DARF[];
  realEstate: RealEstateAsset[];
  leverage: LeveragePosition[];
}
