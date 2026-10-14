// FX option math — Garman-Kohlhagen pricing, EMA, classic pivots.
// Ported verbatim from public/fx-hedge.html (treasury-fx-hedge source) so
// numbers match the original calculator. No randomness, no globals.

// Abramowitz & Stegun 26.2.17 polynomial approximation of standard normal CDF.
export function normalCDF(x: number): number {
  const t = 1 / (1 + 0.2316419 * Math.abs(x));
  const d = 0.3989423 * Math.exp(-x * x / 2);
  const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  return x > 0 ? 1 - p : p;
}

export type OptionType = 'call' | 'put';

// Garman-Kohlhagen FX option (S = spot, K = strike, t = years, r_d = domestic rate
// as decimal, r_f = foreign rate as decimal, vol = annualised volatility as decimal).
// Rates are converted to continuous compounding internally.
export function priceGK(S: number, K: number, t: number, r_d: number, r_f: number, vol: number, type: OptionType): number {
  if (t <= 0 || vol <= 0) return Math.max(0, type === 'call' ? S - K : K - S);
  const rd_c = Math.log(1 + r_d);
  const rf_c = Math.log(1 + r_f);
  const d1 = (Math.log(S / K) + (rd_c - rf_c + (vol * vol) / 2) * t) / (vol * Math.sqrt(t));
  const d2 = d1 - vol * Math.sqrt(t);
  if (type === 'call') return S * Math.exp(-rf_c * t) * normalCDF(d1) - K * Math.exp(-rd_c * t) * normalCDF(d2);
  return K * Math.exp(-rd_c * t) * normalCDF(-d2) - S * Math.exp(-rf_c * t) * normalCDF(-d1);
}

// Bisection solver: find K_floor (put strike) such that put premium == target premium.
export function solveCollarFloor(S: number, t: number, r_d: number, r_f: number, vol: number, callPremiumUnit: number, iterations = 60): number {
  let low = 0.01, high = 15.0, mid = S;
  for (let i = 0; i < iterations; i++) {
    mid = (low + high) / 2;
    const putPrem = priceGK(S, mid, t, r_d, r_f, vol, 'put');
    if (putPrem > callPremiumUnit) high = mid;
    else                           low  = mid;
  }
  return mid;
}

export interface HedgeInputs {
  spot: number;
  targetBRL: number;
  ceiling: number;
  cap: number;
  rBRL: number;        // Selic, in % (e.g. 10.75 means 10.75%)
  rUSD: number;        // US rate, in %
  vol: number;         // implied vol, in %
  t: number;           // years
}

export interface HedgeOutputs {
  targetUSD: number;
  callPremiumUnit: number;
  callPremiumTotal: number;
  spreadPremiumTotal: number;
  collarFloor: number;
  beVsCall: number;        // breakeven vs Pure Call
  beVsSpread: number;      // breakeven vs Call Spread
  callPremiumPct: number;  // % of targetBRL
  spreadPremiumPct: number;
}

export function computeHedge(i: HedgeInputs): HedgeOutputs {
  const S = i.spot;
  const rd = i.rBRL / 100, rf = i.rUSD / 100, v = i.vol / 100, t = i.t;
  const targetUSD = i.targetBRL / i.ceiling;

  const callPremiumUnit = priceGK(S, i.ceiling, t, rd, rf, v, 'call');
  const capPremiumUnit  = priceGK(S, i.cap,     t, rd, rf, v, 'call');

  const callPremiumTotal   = callPremiumUnit * targetUSD;
  const spreadPremiumTotal = (callPremiumUnit - capPremiumUnit) * targetUSD;

  const collarFloor = solveCollarFloor(S, t, rd, rf, v, callPremiumUnit);
  const beVsCall   = collarFloor - (callPremiumTotal   / targetUSD);
  const beVsSpread = collarFloor - (spreadPremiumTotal / targetUSD);

  return {
    targetUSD, callPremiumUnit, callPremiumTotal, spreadPremiumTotal, collarFloor,
    beVsCall, beVsSpread,
    callPremiumPct:   (callPremiumTotal   / i.targetBRL) * 100,
    spreadPremiumPct: (spreadPremiumTotal / i.targetBRL) * 100,
  };
}

// Exponential Moving Average — first value seeds with the first input.
export function ema(values: number[], period: number): number[] {
  if (values.length === 0) return [];
  const k = 2 / (period + 1);
  const out: number[] = [values[0]!];
  for (let i = 1; i < values.length; i++) {
    out.push(values[i]! * k + out[i - 1]! * (1 - k));
  }
  return out;
}

// Classic floor-trader pivots from yesterday H/L/C.
export interface PivotLevels { P: number; R1: number; R2: number; R3: number; S1: number; S2: number; S3: number; }
export function classicPivots(yHigh: number, yLow: number, yClose: number): PivotLevels {
  const P  = (yHigh + yLow + yClose) / 3;
  return {
    P,
    R1: (P * 2) - yLow,
    R2: P + (yHigh - yLow),
    R3: yHigh + 2 * (P - yLow),
    S1: (P * 2) - yHigh,
    S2: P - (yHigh - yLow),
    S3: yLow - 2 * (yHigh - P),
  };
}
