// Market Data - Mock data generators and static data
import { MarketRow, YieldData } from './types';

// Random number generator
const rnd = (min: number, max: number): number =>
  parseFloat((Math.random() * (max - min) + min).toFixed(2));

// Generate a market row with random performance data
export const generateRow = (ticker: string, name: string): MarketRow => ({
  ticker,
  name,
  last: rnd(10, 1000),
  daily: rnd(-2, 2),
  w1: rnd(-4, 4),
  m1: rnd(-8, 8),
  ytd: rnd(-15, 25),
  y1: rnd(-20, 30),
  y3: rnd(-40, 60)
});

// Developed Market Indexes
export const DM_INDEXES: MarketRow[] = [
  generateRow('SPX Index', 'S&P 500'),
  generateRow('CCMP Index', 'NASDAQ 100'),
  generateRow('INDU Index', 'DOW JONES'),
  generateRow('SX5E Index', 'EURO STOXX 50'),
  generateRow('UKX Index', 'FTSE 100'),
  generateRow('DAX Index', 'DAX (GER)'),
  generateRow('CAC Index', 'CAC 40 (FRA)'),
  generateRow('NKY Index', 'NIKKEI 225'),
  generateRow('AS51 Index', 'ASX 200')
];

// Emerging Market Indexes
export const EM_INDEXES: MarketRow[] = [
  generateRow('IBOV Index', 'IBOVESPA'),
  generateRow('SHCOMP Index', 'SHANGHAI COMP'),
  generateRow('HSI Index', 'HANG SENG'),
  generateRow('NIFTY Index', 'NIFTY 50'),
  generateRow('MEXBOL Index', 'MEXICO BOLSA'),
  generateRow('JALSH Index', 'JSE AFRICA'),
  generateRow('RTSI Index', 'RTS (RUS)'),
  generateRow('KOSPI Index', 'KOSPI'),
  generateRow('TWSE Index', 'TAIEX')
];

// G10 Currencies
export const DM_CURRENCIES: MarketRow[] = [
  generateRow('DXY Curncy', 'DOLLAR INDEX'),
  generateRow('EURUSD Curncy', 'EUR-USD'),
  generateRow('GBPUSD Curncy', 'GBP-USD'),
  generateRow('USDJPY Curncy', 'USD-JPY'),
  generateRow('USDCHF Curncy', 'USD-CHF'),
  generateRow('USDCAD Curncy', 'USD-CAD'),
  generateRow('AUDUSD Curncy', 'AUD-USD'),
  generateRow('NZDUSD Curncy', 'NZD-USD')
];

// Emerging Market Currencies
export const EM_CURRENCIES: MarketRow[] = [
  generateRow('USDBRL Curncy', 'USD-BRL'),
  generateRow('USDCNY Curncy', 'USD-CNY'),
  generateRow('USDMXN Curncy', 'USD-MXN'),
  generateRow('USDZAR Curncy', 'USD-ZAR'),
  generateRow('USDTRY Curncy', 'USD-TRY'),
  generateRow('USDINR Curncy', 'USD-INR'),
  generateRow('USDKRW Curncy', 'USD-KRW'),
  generateRow('USDPLN Curncy', 'USD-PLN')
];

// Commodities
export const COMMODITIES: MarketRow[] = [
  generateRow('XAU Curncy', 'GOLD SPOT'),
  generateRow('XAG Curncy', 'SILVER SPOT'),
  generateRow('CL1 Comdty', 'WTI CRUDE'),
  generateRow('CO1 Comdty', 'BRENT CRUDE'),
  generateRow('NG1 Comdty', 'NAT GAS'),
  generateRow('HG1 Comdty', 'COPPER'),
  generateRow('W 1 Comdty', 'WHEAT'),
  generateRow('S 1 Comdty', 'SOYBEAN')
];

// Buffett Portfolio (Berkshire Holdings)
export const BUFFETT_PORTFOLIO: MarketRow[] = [
  generateRow('AAPL US Equity', 'APPLE INC'),
  generateRow('BAC US Equity', 'BANK OF AMER'),
  generateRow('AXP US Equity', 'AMER EXPRESS'),
  generateRow('KO US Equity', 'COCA-COLA'),
  generateRow('CVX US Equity', 'CHEVRON'),
  generateRow('OXY US Equity', 'OCCIDENTAL'),
  generateRow('KHC US Equity', 'KRAFT HEINZ'),
  generateRow('MCO US Equity', 'MOODYS')
];

// Personal Watchlist
export const PERSONAL_WATCHLIST: MarketRow[] = [
  generateRow('NVDA US Equity', 'NVIDIA'),
  generateRow('MSFT US Equity', 'MICROSOFT'),
  generateRow('TSLA US Equity', 'TESLA'),
  generateRow('META US Equity', 'META'),
  generateRow('AMD US Equity', 'AMD'),
  generateRow('PLTR US Equity', 'PALANTIR'),
  generateRow('COIN US Equity', 'COINBASE'),
  generateRow('PBR US Equity', 'PETROBRAS')
];

// US Treasury Yields
export const US_YIELDS: YieldData[] = [
  { tenor: '2Y', last: 4.75, chg: -0.02 },
  { tenor: '5Y', last: 4.40, chg: -0.01 },
  { tenor: '10Y', last: 4.35, chg: 0.01 },
  { tenor: '30Y', last: 4.50, chg: 0.02 }
];

// Brazil DI Futures
export const BRL_YIELDS: YieldData[] = [
  { tenor: 'Jan25', last: 10.40, chg: -0.05 },
  { tenor: 'Jan26', last: 10.55, chg: -0.03 },
  { tenor: 'Jan27', last: 10.80, chg: 0.02 },
  { tenor: 'Jan29', last: 11.20, chg: 0.05 }
];

// Yield Curve Data for Chart
export const US_CURVE = [5.38, 5.20, 4.90, 4.75, 4.40, 4.35, 4.50];
export const BR_CURVE = [10.55, 10.60, 10.50, 10.80, 11.20, 11.50, 11.80];
export const CURVE_TENORS = ['3M', '6M', '1Y', '2Y', '5Y', '10Y', '30Y'];

// Footer Function Keys - Bloomberg keyboard style
// yellow = market sector, green = action, red = stop
export const FOOTER_KEYS = [
  { label: 'GOVT', color: 'yellow' },
  { label: 'CORP', color: 'yellow' },
  { label: 'MTGE', color: 'yellow' },
  { label: 'M-MKT', color: 'yellow' },
  { label: 'MUNI', color: 'yellow' },
  { label: 'PFD', color: 'yellow' },
  { label: 'EQUITY', color: 'yellow' },
  { label: 'CMDTY', color: 'yellow' },
  { label: 'INDEX', color: 'yellow' },
  { label: 'CRNCY', color: 'yellow' },
  { label: 'GO', color: 'green' },
  { label: 'CANCEL', color: 'red' }
];
