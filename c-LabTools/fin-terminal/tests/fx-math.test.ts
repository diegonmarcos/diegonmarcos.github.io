import { describe, it, expect } from 'vitest';
import { normalCDF, priceGK, computeHedge, ema, classicPivots, solveCollarFloor } from '../src/typescript/lib/fx-math';
import fxHedge from '../src/typescript/data/fx-hedge.json';

describe('fx-math: normalCDF', () => {
  it('CDF(0) = 0.5', () => {
    expect(normalCDF(0)).toBeCloseTo(0.5, 3);
  });
  it('CDF symmetric: CDF(x) + CDF(-x) ≈ 1', () => {
    for (const x of [0.5, 1, 1.96, 3]) {
      expect(normalCDF(x) + normalCDF(-x)).toBeCloseTo(1, 3);
    }
  });
  it('CDF(1.96) ≈ 0.975', () => {
    expect(normalCDF(1.96)).toBeCloseTo(0.975, 2);
  });
});

describe('fx-math: priceGK (Garman-Kohlhagen)', () => {
  it('zero time → intrinsic value', () => {
    expect(priceGK(5.5, 5.0, 0,    0.1, 0.03, 0.15, 'call')).toBe(0.5);
    expect(priceGK(5.0, 5.5, 0,    0.1, 0.03, 0.15, 'put')).toBe(0.5);
    expect(priceGK(5.0, 5.5, 0,    0.1, 0.03, 0.15, 'call')).toBe(0);
  });
  it('OTM call has positive premium for t>0, vol>0', () => {
    const p = priceGK(5.03, 5.7, 1, 0.1075, 0.0369, 0.15, 'call');
    expect(p).toBeGreaterThan(0);
    expect(p).toBeLessThan(5.7);
  });
  it('higher vol → higher call premium (monotone in vol)', () => {
    const lo = priceGK(5.03, 5.7, 1, 0.1075, 0.0369, 0.10, 'call');
    const hi = priceGK(5.03, 5.7, 1, 0.1075, 0.0369, 0.25, 'call');
    expect(hi).toBeGreaterThan(lo);
  });
});

describe('fx-math: solveCollarFloor', () => {
  it('produces a put strike with put premium ≈ call premium', () => {
    const S = 5.03, t = 1, rd = 0.1075, rf = 0.0369, vol = 0.15;
    const callPrem = priceGK(S, 5.7, t, rd, rf, vol, 'call');
    const floor = solveCollarFloor(S, t, rd, rf, vol, callPrem);
    expect(floor).toBeGreaterThan(0);
    // With BRL>USD rate carry the forward is above spot, so the matching
    // put strike sits between half-spot and the call ceiling — verify the band.
    expect(floor).toBeGreaterThan(S * 0.5);
    expect(floor).toBeLessThan(5.7);
    const putPrem = priceGK(S, floor, t, rd, rf, vol, 'put');
    expect(Math.abs(putPrem - callPrem)).toBeLessThan(callPrem * 0.05);
  });
});

describe('fx-math: computeHedge with default 10M BRL notional', () => {
  const def = (fxHedge as { defaults: import('../src/typescript/lib/fx-math').HedgeInputs }).defaults;

  it('default notional is 10,000,000 BRL (Diego override)', () => {
    expect(def.targetBRL).toBe(10_000_000);
  });

  it('produces all outputs with sensible signs', () => {
    const o = computeHedge(def);
    expect(o.targetUSD).toBeGreaterThan(0);
    expect(o.callPremiumTotal).toBeGreaterThan(0);
    expect(o.spreadPremiumTotal).toBeGreaterThan(0);
    expect(o.spreadPremiumTotal).toBeLessThan(o.callPremiumTotal);  // spread is cheaper than pure call
    expect(o.collarFloor).toBeGreaterThan(0);
    expect(o.collarFloor).toBeLessThan(def.ceiling);                // floor < ceiling (collar bounds)
    expect(o.callPremiumPct).toBeGreaterThan(0);
    expect(o.spreadPremiumPct).toBeLessThan(o.callPremiumPct);
  });
});

describe('fx-math: ema', () => {
  it('empty input → empty output', () => {
    expect(ema([], 5)).toEqual([]);
  });
  it('first value seeds the EMA', () => {
    expect(ema([5, 6, 7], 3)[0]).toBe(5);
  });
  it('on a constant series, EMA equals the constant', () => {
    const out = ema([5, 5, 5, 5, 5, 5], 3);
    for (const v of out) expect(v).toBe(5);
  });
  it('output length matches input length', () => {
    expect(ema([1, 2, 3, 4, 5], 3).length).toBe(5);
  });
});

describe('fx-math: classicPivots', () => {
  it('R/S ordering: S3 < S2 < S1 < P < R1 < R2 < R3', () => {
    const piv = classicPivots(5.10, 4.95, 5.05);
    expect(piv.S3).toBeLessThan(piv.S2);
    expect(piv.S2).toBeLessThan(piv.S1);
    expect(piv.S1).toBeLessThan(piv.P);
    expect(piv.P).toBeLessThan(piv.R1);
    expect(piv.R1).toBeLessThan(piv.R2);
    expect(piv.R2).toBeLessThan(piv.R3);
  });
});
