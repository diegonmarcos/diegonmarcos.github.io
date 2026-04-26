import type { ApiClient } from '../api/client';
import type { WsClient } from '../api/ws';

import customRegistry from '../data/screen-registry.json';
import specsJson from '../data/screen-specs.json';

import { renderSpecScreen } from './spec-screen';
import { renderDashboard } from './dashboard';
import { renderMarketsDashboard } from './markets-dashboard';
import { renderDsge } from './dsge';
import { renderMlAbm } from './ml-abm';
import { renderMacroReport, listSubreports, listValuationTypes } from './_macro-report';
import { renderFxHedgeCost } from './fx-hedge-cost';
import { renderMarkets } from './markets';
import { renderWatchlist } from './watchlist';
import { renderNews } from './news';
import { renderEquityResearch } from './equity-research';
import { renderPortfolio } from './portfolio';
import { renderTrading } from './trading';
import { renderCrypto } from './crypto';
import { renderEconomics } from './economics';
import { renderSettings } from './settings';
import { renderDeveloperDataHub } from './developer-datahub';
import { renderMcpInspector } from './mcp-inspector';
import { renderAuthProfile } from './auth-profile';

export interface ScreenContext {
  api: ApiClient;
  ws: WsClient;
  cycleTheme: () => void;
  currentThemeName: () => string;
}

export interface ScreenEntry {
  id: string;
  title: string;
  category: string;
  source: 'custom' | 'spec';
  render: (host: HTMLElement, ctx: ScreenContext) => void;
  summary?: string;
}

interface CustomEntry { id: string; title: string; category: string; module: string; }
interface SpecEntry { id: string; title: string; category: string; summary: string; }

const CUSTOM_RENDERERS: Record<string, ScreenEntry['render']> = {
  'dashboard':                renderDashboard,
  'markets-dashboard':        renderMarketsDashboard,
  'dsge':                     renderDsge,
  'ml-abm':                   renderMlAbm,
  'fx-hedge-cost':            renderFxHedgeCost,
  'markets':                  renderMarkets,
  'watchlist':                renderWatchlist,
  'news':                     renderNews,
  'equity-research':          renderEquityResearch,
  'portfolio':                renderPortfolio,
  'trading':                  renderTrading,
  'crypto':                   renderCrypto,
  'economics':                renderEconomics,
  'settings':                 renderSettings,
};

// Wire CBM macro subreports + valuation types in bulk: each id from
// data/cbm-subreports.json + data/valuation-types.json gets its own
// renderer that dispatches to the shared _macro-report renderer.
// Adding a new report = one entry in the relevant JSON + one entry in
// screen-registry.json — no code change here.
for (const r of [...listSubreports(), ...listValuationTypes()]) {
  CUSTOM_RENDERERS[r.id] = (host, ctx) => renderMacroReport(host, ctx, r.id);
}

const SPEC_OVERRIDES: Record<string, ScreenEntry['render']> = {
  'developer-datahub': renderDeveloperDataHub,
  'mcp-inspector':     renderMcpInspector,
  'auth-profile':      renderAuthProfile,
};

export function buildRegistry(): ScreenEntry[] {
  const out: ScreenEntry[] = [];
  for (const c of (customRegistry as { custom: CustomEntry[] }).custom) {
    const render = CUSTOM_RENDERERS[c.id];
    if (!render) throw new Error(`screen-registry: missing renderer for custom id "${c.id}"`);
    out.push({ id: c.id, title: c.title, category: c.category, source: 'custom', render });
  }
  for (const s of (specsJson as { specs: SpecEntry[] }).specs) {
    const override = SPEC_OVERRIDES[s.id];
    out.push({
      id: s.id,
      title: s.title,
      category: s.category,
      source: 'spec',
      summary: s.summary,
      render: override ?? ((host, ctx) => renderSpecScreen(host, ctx, s)),
    });
  }
  const seen = new Set<string>();
  for (const e of out) {
    if (seen.has(e.id)) throw new Error(`screen-registry: duplicate id "${e.id}"`);
    seen.add(e.id);
  }
  return out;
}
