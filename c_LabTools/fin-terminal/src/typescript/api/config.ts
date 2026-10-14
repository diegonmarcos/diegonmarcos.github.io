import buildJson from '../../../build.json';
import type { ApiConfig } from './types';

// build.json is the single source of truth for the API endpoint.
// esbuild inlines this JSON into the bundle at build time, so changing
// build.json + rebuilding propagates the new URL with no other code edits.
interface BuildJson { api?: { base?: string; ws?: string }; }

const FALLBACK: ApiConfig = {
  base: 'https://api.diegonmarcos.com/fin-api',
  ws:   'wss://api.diegonmarcos.com/fin-api/api/v1/ws',
};

const cfg = (buildJson as BuildJson).api ?? {};

export const API_CONFIG: ApiConfig = {
  base: cfg.base ?? FALLBACK.base,
  ws:   cfg.ws   ?? FALLBACK.ws,
};

export function loadApiConfig(): ApiConfig { return API_CONFIG; }
export const API_FALLBACK = FALLBACK;
