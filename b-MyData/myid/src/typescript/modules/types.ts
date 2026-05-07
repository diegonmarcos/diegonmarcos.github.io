// ============================================
// Domain types — myID
// ============================================

export type Status =
  | 'active' | 'expired' | 'revoked' | 'reference'
  | 'clean'  | 'ready'   | 'passed'  | 'filed' | 'paid';

export interface Issuer { name: string; country: string; department?: string }

export interface Verification { type: string; method: string }

export interface Assets {
  thumb?: string;
  front?: string;
  back?:  string;
  pdf?:   string;
  qr?:    string;
  [key: string]: string | undefined;
}

export interface DocumentItem {
  id: string;
  type: string;
  label: string;
  issuer: Issuer;
  documentNumber?: string;
  issueDate?: string;
  expiryDate?: string | null;
  status: Status | string;
  tags?: string[];
  verifications?: Verification[];
  assets?: Assets;
  notes?: string;
  lastVerified?: string;
  // Free-form extras tolerated for varied document shapes
  [key: string]: unknown;
}

export interface Category {
  id: string;
  label: string;
  icon: string;
  color: string;
  description: string;
  documents: DocumentItem[];
}

export interface Holder {
  fullName: string;
  preferredName?: string;
  givenNames: string;
  familyNames: string;
  dateOfBirth: string;
  placeOfBirth: string;
  sex: string;
  nationality: string[];
  residency: { country: string; since: string; status?: string };
  taxIds: { country: string; type: string; value: string }[];
  addresses?: { current?: unknown[]; history?: unknown[] };
  biometrics?: { height_cm?: number; eyes?: string; hair?: string; blood_type?: string };
  photo?: string;
  signature?: string;
  family?: unknown;
  employmentHistory?: unknown[];
  educationHistory?: unknown[];
  travelHistory?: unknown;
}

export interface Dataset {
  meta: {
    generatedAt: string;
    schemaVersion: string;
    locale: string;
    counts: { categories: number; documents: number };
    kycScore?: { value: number; scale: string; rating: string; asOf: string; method?: string };
  };
  holder: Holder;
  categories: Category[];
}

// ─── Navigation ──────────────────────────────
export interface NavItem {
  id: string;
  route: string;       // 'wallet/all', 'wallet/identity', ...
  label: string;
  icon: string;
  badge?: string;
}
export interface NavSection { id: string; label: string; icon: string; items: NavItem[] }
export interface NavTree { sections: NavSection[]; default: string }

export interface Route { path: string; params: Record<string, string> }
