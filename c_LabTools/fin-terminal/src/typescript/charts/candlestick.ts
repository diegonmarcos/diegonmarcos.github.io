import { el } from '../shell/dom';

export interface OhlcBar { time: number; open: number; high: number; low: number; close: number; volume?: number; }

export interface CandleChartOptions {
  bars: OhlcBar[];
  label?: string;
}

// Lazy-loads lightweight-charts only when first candlestick is rendered;
// keeps boot bundle small for screens that never use it.
type LWC = typeof import('lightweight-charts');
let lwcPromise: Promise<LWC> | null = null;
function lwc(): Promise<LWC> {
  if (!lwcPromise) lwcPromise = import('lightweight-charts');
  return lwcPromise;
}

function cssVar(name: string, fallback: string): string {
  if (typeof document === 'undefined') return fallback;
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
}

export function renderCandleChart(opts: CandleChartOptions): HTMLElement {
  const wrap = el('div', { class: 'chart chart--candle' });
  if (opts.label) wrap.appendChild(el('div', { class: 'chart__header' }, [opts.label, el('span', { class: 't-muted' }, [`${opts.bars.length} bars`])]));
  const host = el('div', { style: 'flex:1 1 auto; height: calc(100% - 24px); width: 100%;' });
  wrap.appendChild(host);

  void lwc().then(({ createChart, CandlestickSeries }) => {
    const chart = createChart(host, {
      width: host.clientWidth || 600,
      height: host.clientHeight || 320,
      layout: {
        background: { color: cssVar('--color-background', '#000') },
        textColor: cssVar('--color-text-muted', '#8a6a30'),
        fontFamily: cssVar('--font-mono', 'monospace'),
      },
      grid: {
        vertLines: { color: cssVar('--color-grid', '#1c1c1c') },
        horzLines: { color: cssVar('--color-grid', '#1c1c1c') },
      },
      timeScale: { borderColor: cssVar('--color-border', '#2a2a2a') },
      rightPriceScale: { borderColor: cssVar('--color-border', '#2a2a2a') },
    });
    const series = chart.addSeries(CandlestickSeries, {
      upColor:        cssVar('--color-positive', '#4AF6C3'),
      downColor:      cssVar('--color-negative', '#FF433D'),
      borderUpColor:  cssVar('--color-positive', '#4AF6C3'),
      borderDownColor:cssVar('--color-negative', '#FF433D'),
      wickUpColor:    cssVar('--color-positive', '#4AF6C3'),
      wickDownColor:  cssVar('--color-negative', '#FF433D'),
    });
    series.setData(opts.bars.map(b => ({
      time: (b.time as unknown as import('lightweight-charts').UTCTimestamp),
      open: b.open, high: b.high, low: b.low, close: b.close,
    })));

    if (typeof ResizeObserver !== 'undefined') {
      const ro = new ResizeObserver(() => chart.applyOptions({ width: host.clientWidth, height: host.clientHeight }));
      ro.observe(host);
    }
  });

  return wrap;
}
