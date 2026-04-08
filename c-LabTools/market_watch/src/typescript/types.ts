// Type definitions for Market Watch Terminal

export interface MarketRow {
  ticker: string;
  name: string;
  last: number;
  daily: number;
  w1: number;
  m1: number;
  ytd: number;
  y1: number;
  y3: number;
}

export interface YieldData {
  tenor: string;
  last: number;
  chg: number;
}

export interface ChartPoint {
  x: number;
  y: number;
  label: string;
  value: number;
}

export interface PanelConfig {
  id: string;
  number: number;
  title: string;
  command: string;
}

export type PerformanceType = 'positive' | 'negative' | 'neutral';

export interface LiveUpdate {
  ticker: string;
  field: keyof MarketRow;
  oldValue: number;
  newValue: number;
  direction: 'up' | 'down';
}
