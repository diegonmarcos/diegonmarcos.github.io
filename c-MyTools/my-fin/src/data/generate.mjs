#!/usr/bin/env node
// ============================================
// Ledger — mock.json generator
// 1 year of data:
//   • Salary 20k BRL/mo (job in Brazil)
//   • Portfolio: ETFs only, ~$500k USD aggregate
//   • Expenses: ~3k EUR/mo, mostly Europe travel
//   • 5 accounts: Itaú(BRL), Wise(BRL), Revolut(EUR/ES),
//                 Santander España(EUR), Chase(UK/GBP)
//
// Run:  node src/data/generate.mjs
// ============================================

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, 'mock.json');

// ─── Deterministic PRNG ───────────────────────
let seed = 20260427;
const rand = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
const pick = (arr) => arr[Math.floor(rand() * arr.length)];
const between = (a, b) => +(a + rand() * (b - a)).toFixed(2);
const intBetween = (a, b) => Math.floor(a + rand() * (b - a + 1));

// ─── Date helpers ────────────────────────────
const TODAY = new Date('2026-04-26');
const YEAR_AGO = new Date('2025-04-27');
const iso = (d) => d.toISOString().slice(0, 10);

// ─── FX rates (BRL-base): 1 unit X = N BRL ──
const FX = {
  USD: 5.18,
  EUR: 5.62,
  GBP: 6.55,
  BRL: 1.00,
  asOf: '2026-04-25',
  source: 'BCB PTAX',
};

// ─── 5 accounts (per user spec) ──────────────
const ACCOUNTS = [
  { id: 'itau-brl',      name: 'Itaú · Conta Corrente',  type: 'checking',    currency: 'BRL', institution: 'Itaú',             country: 'BR' },
  { id: 'wise-brl',      name: 'Wise · Saldo BRL',       type: 'checking',    currency: 'BRL', institution: 'Wise',             country: 'BR' },
  { id: 'revolut-eur',   name: 'Revolut · Espanha',      type: 'checking',    currency: 'EUR', institution: 'Revolut',          country: 'ES' },
  { id: 'santander-eur', name: 'Santander · España',     type: 'checking',    currency: 'EUR', institution: 'Santander España', country: 'ES' },
  { id: 'chase-gbp',     name: 'Chase · UK',             type: 'credit_card', currency: 'GBP', institution: 'Chase',            country: 'GB' },
];

// Pick an account for given currency (preferred type first)
const accFor = (currency, prefer) => {
  if (prefer) {
    const a = ACCOUNTS.find((a) => a.currency === currency && a.id === prefer);
    if (a) return a.id;
  }
  return ACCOUNTS.find((a) => a.currency === currency)?.id;
};

// Account routing strategy per category
const ROUTE = {
  EUR: 'revolut-eur',                 // travel daily
  GBP: 'chase-gbp',                   // UK + USD-ish online subs forced through Chase
  USD: 'chase-gbp',                   // user only has USD via Chase UK (we proxy via GBP card with FX, or: skip USD txns)
  BRL: 'itau-brl',                    // back-home utilities
};

// Cities (where the user travels)
const CITIES = [
  { city: 'Lisboa',    country: 'Portugal',       cc: 'PT', currency: 'EUR', lat: 38.7223, lng: -9.1393, weight: 12 },
  { city: 'Porto',     country: 'Portugal',       cc: 'PT', currency: 'EUR', lat: 41.1579, lng: -8.6291, weight: 6 },
  { city: 'Madrid',    country: 'Spain',          cc: 'ES', currency: 'EUR', lat: 40.4168, lng: -3.7038, weight: 14 },
  { city: 'Barcelona', country: 'Spain',          cc: 'ES', currency: 'EUR', lat: 41.3851, lng: 2.1734,  weight: 12 },
  { city: 'Sevilla',   country: 'Spain',          cc: 'ES', currency: 'EUR', lat: 37.3891, lng: -5.9845, weight: 4 },
  { city: 'Valencia',  country: 'Spain',          cc: 'ES', currency: 'EUR', lat: 39.4699, lng: -0.3763, weight: 4 },
  { city: 'Paris',     country: 'France',         cc: 'FR', currency: 'EUR', lat: 48.8566, lng: 2.3522,  weight: 9 },
  { city: 'Lyon',      country: 'France',         cc: 'FR', currency: 'EUR', lat: 45.7640, lng: 4.8357,  weight: 4 },
  { city: 'Nice',      country: 'France',         cc: 'FR', currency: 'EUR', lat: 43.7102, lng: 7.2620,  weight: 3 },
  { city: 'Amsterdam', country: 'Netherlands',    cc: 'NL', currency: 'EUR', lat: 52.3676, lng: 4.9041,  weight: 6 },
  { city: 'Brussels',  country: 'Belgium',        cc: 'BE', currency: 'EUR', lat: 50.8503, lng: 4.3517,  weight: 3 },
  { city: 'London',    country: 'United Kingdom', cc: 'GB', currency: 'GBP', lat: 51.5074, lng: -0.1278, weight: 8 },
  { city: 'Edinburgh', country: 'United Kingdom', cc: 'GB', currency: 'GBP', lat: 55.9533, lng: -3.1883, weight: 3 },
  { city: 'Manchester',country: 'United Kingdom', cc: 'GB', currency: 'GBP', lat: 53.4808, lng: -2.2426, weight: 2 },
  { city: 'Berlin',    country: 'Germany',        cc: 'DE', currency: 'EUR', lat: 52.5200, lng: 13.4050, weight: 7 },
  { city: 'Munich',    country: 'Germany',        cc: 'DE', currency: 'EUR', lat: 48.1351, lng: 11.5820, weight: 4 },
  { city: 'Vienna',    country: 'Austria',        cc: 'AT', currency: 'EUR', lat: 48.2082, lng: 16.3738, weight: 4 },
  { city: 'Prague',    country: 'Czech Republic', cc: 'CZ', currency: 'EUR', lat: 50.0755, lng: 14.4378, weight: 3 },
  { city: 'Rome',      country: 'Italy',          cc: 'IT', currency: 'EUR', lat: 41.9028, lng: 12.4964, weight: 6 },
  { city: 'Florence',  country: 'Italy',          cc: 'IT', currency: 'EUR', lat: 43.7696, lng: 11.2558, weight: 4 },
  { city: 'Milan',     country: 'Italy',          cc: 'IT', currency: 'EUR', lat: 45.4642, lng: 9.1900,  weight: 4 },
  { city: 'Athens',    country: 'Greece',         cc: 'GR', currency: 'EUR', lat: 37.9838, lng: 23.7275, weight: 3 },
  { city: 'São Paulo',     country: 'Brazil',     cc: 'BR', currency: 'BRL', lat: -23.5505, lng: -46.6333, weight: 4 },
  { city: 'Rio de Janeiro',country: 'Brazil',     cc: 'BR', currency: 'BRL', lat: -22.9068, lng: -43.1729, weight: 2 },
];
const cityPool = CITIES.flatMap((c) => Array(c.weight).fill(c));
const pickCity = () => cityPool[Math.floor(rand() * cityPool.length)];

// ─── Merchant catalogues per category × currency ─
const MERCHANTS = {
  travel: {
    EUR: [['Ryanair','Flight'],['easyJet','Flight'],['Vueling','Flight'],['TAP Portugal','Flight'],['Iberia','Flight'],['SNCF','Train'],['Renfe','Train'],['Trenitalia','Train'],['Eurostar','Train'],['Flixbus','Bus'],['Booking.com','Hotel'],['Airbnb','Stay'],['Hotel Sofitel','Hotel'],['Hilton','Hotel']],
    GBP: [['British Airways','Flight'],['easyJet','Flight'],['LNER','Train'],['Trainline','Train'],['Booking.com','Hotel'],['Airbnb','Stay'],['Premier Inn','Hotel']],
    BRL: [['Latam Airlines','Flight'],['Gol Linhas Aéreas','Flight'],['Booking.com','Stay']],
  },
  food: {
    EUR: [['Pizzeria da Marco','Restaurant'],['Café Central','Café'],['Bistro Le Voltaire','Restaurant'],['Tapas Bar Olé','Bar'],['Osteria Antica','Restaurant'],['Brasserie Lipp','Brasserie'],['Mercado da Ribeira','Market'],['Carrefour Express','Grocery'],['Lidl','Grocery'],['Mercadona','Grocery'],['Starbucks','Café'],['Pret a Manger','Café'],['Sushi Daimon','Restaurant'],['Pão Panini','Bakery']],
    GBP: [['Pret a Manger','Café'],['Tesco Express','Grocery'],['Sainsbury\'s','Grocery'],['Wagamama','Restaurant'],['Nando\'s','Restaurant'],['Costa Coffee','Café'],['Caffè Nero','Café']],
    BRL: [['iFood','Delivery'],['Pão de Açúcar','Grocery'],['Pizzaria Veridiana','Restaurant'],['Restaurante Fasano','Restaurant'],['Outback','Restaurant']],
  },
  transport: {
    EUR: [['Uber','Ride'],['Bolt','Ride'],['FREE NOW','Taxi'],['Metro Lisboa','Metro'],['Metro Madrid','Metro'],['RATP','Metro'],['BVG','Metro'],['Tier','Scooter'],['Lime','Scooter']],
    GBP: [['Uber','Ride'],['TfL','Tube'],['Bolt','Ride'],['Addison Lee','Taxi']],
    BRL: [['Uber','Ride'],['99','Ride']],
  },
  entertainment: {
    EUR: [['Louvre','Museum'],['Prado','Museum'],['Vatican Museums','Museum'],['Reina Sofía','Museum'],['Spotify Premium','Subscription'],['Netflix','Subscription'],['Cinema Pathé','Cinema'],['Disney+','Subscription'],['Berliner Philharmonie','Concert']],
    GBP: [['Tate Modern','Museum'],['British Museum','Museum'],['National Theatre','Theatre'],['Odeon','Cinema']],
    BRL: [['Netflix','Assinatura'],['Cinemark','Cinema'],['Spotify','Assinatura']],
  },
  shopping: {
    EUR: [['Zara','Retail'],['H&M','Retail'],['El Corte Inglés','Department store'],['Galeries Lafayette','Department store'],['Apple Store','Electronics'],['Decathlon','Sports'],['IKEA','Home'],['FNAC','Books/electronics'],['Sephora','Cosmetics'],['Massimo Dutti','Retail']],
    GBP: [['John Lewis','Department store'],['Marks & Spencer','Retail'],['Apple Store UK','Electronics'],['Selfridges','Department store']],
    BRL: [['Mercado Livre','Online'],['Magazine Luiza','Online'],['Renner','Apparel']],
  },
  health: {
    EUR: [['Farmácia Lusa','Pharmacy'],['Farmacia Comunale','Pharmacy'],['Apotheke','Pharmacy'],['Clínica Lusíadas','Clinic']],
    GBP: [['Boots Pharmacy','Pharmacy'],['Lloyds Pharmacy','Pharmacy']],
    BRL: [['Drogaria São Paulo','Pharmacy'],['Bradesco Saúde','Health plan']],
  },
  housing: {
    EUR: [['Airbnb','Stay']],
    GBP: [['Airbnb','Stay']],
    BRL: [['Rent · Unit 304','Rent']],
  },
  utilities: {
    EUR: [['Vodafone','Mobile'],['Orange','Mobile']],
    GBP: [['EE','Mobile'],['Three','Mobile']],
    BRL: [['Vivo Fibra','Internet'],['Enel · Power','Electricity']],
  },
};

// Subscriptions billed via Chase UK (international) — naturally GBP via FX
const SUBSCRIPTIONS_GBP = [
  ['AWS',        () => -between(60, 130)],
  ['GitHub',     () => -8],
  ['Cloudflare', () => -between(6, 18)],
  ['OpenAI',     () => -between(15, 45)],
  ['Anthropic',  () => -between(15, 60)],
  ['iCloud+',    () => -7.99],
  ['Spotify',    () => -10.99],
];

// ─── Build transactions ───────────────────────
const transactions = [];
let txId = 0;
const newTx = (data) => transactions.push({ id: `tx-${(++txId).toString().padStart(5, '0')}`, ...data });

// 1) Monthly BRL salary — R$ 20.000 (split: 70% Itaú, 30% Wise)
const SALARY = 20000.00;
for (let m = 0; m < 12; m++) {
  const d = new Date(YEAR_AGO);
  d.setMonth(d.getMonth() + m); d.setDate(5);
  if (d > TODAY) break;
  newTx({ date: iso(d), merchant: 'Acme Corp · Payroll (Itaú)',  category: 'income', accountId: 'itau-brl', amount: SALARY * 0.70, currency: 'BRL', note: 'Monthly payroll', location: { city: 'São Paulo', country: 'Brazil', cc: 'BR', lat: -23.5505, lng: -46.6333 } });
  newTx({ date: iso(d), merchant: 'Acme Corp · Payroll (Wise)',  category: 'income', accountId: 'wise-brl', amount: SALARY * 0.30, currency: 'BRL', note: 'Monthly payroll', location: { city: 'São Paulo', country: 'Brazil', cc: 'BR', lat: -23.5505, lng: -46.6333 } });
  if (d.getMonth() === 11) {
    const d13 = new Date(d); d13.setDate(20);
    newTx({ date: iso(d13), merchant: 'Acme Corp · Year-end bonus', category: 'income', accountId: 'itau-brl', amount: SALARY, currency: 'BRL', note: '13th-month bonus', location: { city: 'São Paulo', country: 'Brazil', cc: 'BR', lat: -23.5505, lng: -46.6333 } });
  }
}

// 2) ETF distributions (USD ETFs pay quarterly, EUR ETFs annually, BR ETFs ~ monthly)
const QUARTERS = [{ m: 1, d: 15 }, { m: 4, d: 15 }, { m: 7, d: 15 }, { m: 10, d: 15 }];
for (let y = 2025; y <= 2026; y++) {
  for (const q of QUARTERS) {
    const d = new Date(y, q.m - 1, q.d);
    if (d < YEAR_AGO || d > TODAY) continue;
    // VTI dist (USD → routed to Chase GBP via FX; we still mark as USD-origin dividends paid to broker.
    // For simplicity: deposit to wise-brl converted, OR: reflect that the broker is internal.
    // Simplification: log as Chase UK card credit in GBP equivalent (unrealistic but consistent with 5-account rule)
    // BETTER: log dividends to itau-brl in BRL after broker FX (mirrors Brazilian reality of US ETF dividends auto-converted)
    newTx({ date: iso(d), merchant: 'Distribution · VTI', category: 'investment_income', accountId: 'itau-brl', amount: between(180, 220) * FX.USD, currency: 'BRL', note: 'Vanguard Total US — quarterly distribution (FX-converted)', location: { city: 'New York', country: 'United States', cc: 'US', lat: 40.7128, lng: -74.0060 } });
    newTx({ date: iso(d), merchant: 'Distribution · VOO', category: 'investment_income', accountId: 'itau-brl', amount: between(95, 125)  * FX.USD, currency: 'BRL', note: 'S&P 500 — quarterly distribution',                       location: { city: 'New York', country: 'United States', cc: 'US', lat: 40.7128, lng: -74.0060 } });
    newTx({ date: iso(d), merchant: 'Distribution · BND', category: 'investment_income', accountId: 'itau-brl', amount: between(70, 92)   * FX.USD, currency: 'BRL', note: 'US Bond ETF — quarterly distribution',                  location: { city: 'New York', country: 'United States', cc: 'US', lat: 40.7128, lng: -74.0060 } });
  }
}
// EU ETFs — annual distribution to Revolut
for (const y of [2025, 2026]) {
  const d = new Date(y, 4, 28);
  if (d < YEAR_AGO || d > TODAY) continue;
  newTx({ date: iso(d), merchant: 'Distribution · VWCE', category: 'investment_income', accountId: 'revolut-eur', amount: between(380, 480), currency: 'EUR', note: 'FTSE All-World UCITS — annual distribution', location: { city: 'Dublin', country: 'Ireland', cc: 'IE', lat: 53.3498, lng: -6.2603 } });
}
// BR ETFs — monthly distributions
for (let m = 0; m < 12; m++) {
  const d = new Date(YEAR_AGO); d.setMonth(d.getMonth() + m); d.setDate(intBetween(8, 14));
  if (d > TODAY) break;
  newTx({ date: iso(d), merchant: 'Distribution · IVVB11', category: 'investment_income', accountId: 'itau-brl', amount: between(280, 360), currency: 'BRL', note: 'iShares S&P 500 BRL — monthly distribution', location: { city: 'São Paulo', country: 'Brazil', cc: 'BR', lat: -23.5505, lng: -46.6333 } });
}

// 3) Travel-driven monthly expenses (~3k EUR/month)
const monthCities = [];
for (let m = 0; m < 12; m++) {
  const base = pickCity();
  const trips = intBetween(1, 3);
  const cities = [base];
  for (let i = 0; i < trips; i++) cities.push(pickCity());
  monthCities.push(cities);
}

const accountForCity = (cur) => {
  if (cur === 'BRL') return 'itau-brl';
  if (cur === 'GBP') return 'chase-gbp';
  // EUR — alternate Revolut/Santander deterministically
  return rand() < 0.55 ? 'revolut-eur' : 'santander-eur';
};

for (let m = 0; m < 12; m++) {
  const monthStart = new Date(YEAR_AGO);
  monthStart.setMonth(monthStart.getMonth() + m); monthStart.setDate(1);
  const daysInMonth = new Date(monthStart.getFullYear(), monthStart.getMonth() + 1, 0).getDate();
  const cities = monthCities[m];

  // Housing
  const housingCount = rand() < 0.30 ? 2 : 1;
  for (let i = 0; i < housingCount; i++) {
    const city = pick(cities); const cur = city.currency;
    const list = MERCHANTS.housing[cur] || MERCHANTS.housing.EUR;
    const [, kind] = pick(list);
    const day = intBetween(1, 8);
    const d = new Date(monthStart); d.setDate(day);
    if (d > TODAY) continue;
    const amount = housingCount === 2 ? -between(380, 620) : -between(820, 1180);
    newTx({ date: iso(d), merchant: `Airbnb · ${city.city}`, category: 'housing', accountId: accountForCity(cur), amount, currency: cur, note: kind, location: { city: city.city, country: city.country, cc: city.cc, lat: city.lat, lng: city.lng } });
  }

  // Travel
  const travelCount = intBetween(1, 2);
  for (let i = 0; i < travelCount; i++) {
    const city = pick(cities); const cur = city.currency;
    const list = MERCHANTS.travel[cur] || MERCHANTS.travel.EUR;
    const [merchant, kind] = pick(list);
    const day = intBetween(1, daysInMonth);
    const d = new Date(monthStart); d.setDate(day);
    if (d > TODAY) continue;
    const amount = (kind === 'Hotel' || kind === 'Stay') ? -between(120, 280)
                 : kind === 'Flight'                    ? -between(80, 320)
                 : -between(28, 95);
    newTx({ date: iso(d), merchant, category: 'travel', accountId: accountForCity(cur), amount, currency: cur, note: kind, location: { city: city.city, country: city.country, cc: city.cc, lat: city.lat, lng: city.lng } });
  }

  // Food (~22-26 entries)
  const foodCount = intBetween(20, 26);
  for (let i = 0; i < foodCount; i++) {
    const city = pick(cities); const cur = city.currency;
    const list = MERCHANTS.food[cur] || MERCHANTS.food.EUR;
    const [merchant, kind] = pick(list);
    const day = intBetween(1, daysInMonth);
    const d = new Date(monthStart); d.setDate(day);
    if (d > TODAY) continue;
    const r = rand();
    const amount = r < 0.45 ? -between(5, 18) : r < 0.85 ? -between(18, 48) : -between(48, 88);
    newTx({ date: iso(d), merchant, category: 'food', accountId: accountForCity(cur), amount, currency: cur, note: kind, location: { city: city.city, country: city.country, cc: city.cc, lat: city.lat, lng: city.lng } });
  }

  // Transport
  const transportCount = intBetween(9, 14);
  for (let i = 0; i < transportCount; i++) {
    const city = pick(cities); const cur = city.currency;
    const list = MERCHANTS.transport[cur] || MERCHANTS.transport.EUR;
    const [merchant, kind] = pick(list);
    const day = intBetween(1, daysInMonth);
    const d = new Date(monthStart); d.setDate(day);
    if (d > TODAY) continue;
    const amount = (kind === 'Ride' || kind === 'Taxi') ? -between(8, 32) : -between(2, 14);
    newTx({ date: iso(d), merchant, category: 'transport', accountId: accountForCity(cur), amount, currency: cur, note: kind, location: { city: city.city, country: city.country, cc: city.cc, lat: city.lat, lng: city.lng } });
  }

  // Entertainment
  const entCount = intBetween(4, 6);
  for (let i = 0; i < entCount; i++) {
    const city = pick(cities); const cur = city.currency;
    const list = MERCHANTS.entertainment[cur] || MERCHANTS.entertainment.EUR;
    const [merchant, kind] = pick(list);
    const day = intBetween(1, daysInMonth);
    const d = new Date(monthStart); d.setDate(day);
    if (d > TODAY) continue;
    const amount = kind === 'Subscription' ? -between(8, 16) : kind === 'Concert' ? -between(45, 120) : -between(12, 45);
    newTx({ date: iso(d), merchant, category: 'entertainment', accountId: accountForCity(cur), amount, currency: cur, note: kind, location: { city: city.city, country: city.country, cc: city.cc, lat: city.lat, lng: city.lng } });
  }

  // Shopping
  const shopCount = intBetween(2, 4);
  for (let i = 0; i < shopCount; i++) {
    const city = pick(cities); const cur = city.currency;
    const list = MERCHANTS.shopping[cur] || MERCHANTS.shopping.EUR;
    const [merchant, kind] = pick(list);
    const day = intBetween(1, daysInMonth);
    const d = new Date(monthStart); d.setDate(day);
    if (d > TODAY) continue;
    newTx({ date: iso(d), merchant, category: 'shopping', accountId: accountForCity(cur), amount: -between(28, 220), currency: cur, note: kind, location: { city: city.city, country: city.country, cc: city.cc, lat: city.lat, lng: city.lng } });
  }

  // Health
  if (rand() < 0.55) {
    const city = pick(cities); const cur = city.currency;
    const list = MERCHANTS.health[cur] || MERCHANTS.health.EUR;
    const [merchant, kind] = pick(list);
    const day = intBetween(1, daysInMonth);
    const d = new Date(monthStart); d.setDate(day);
    if (d <= TODAY) {
      newTx({ date: iso(d), merchant, category: 'health', accountId: accountForCity(cur), amount: -between(18, 80), currency: cur, note: kind, location: { city: city.city, country: city.country, cc: city.cc, lat: city.lat, lng: city.lng } });
    }
  }

  // GBP subscriptions (Chase UK card billed monthly)
  for (const [merchant, amountFn] of SUBSCRIPTIONS_GBP) {
    const day = intBetween(2, 4);
    const d = new Date(monthStart); d.setDate(day);
    if (d > TODAY) continue;
    newTx({ date: iso(d), merchant, category: 'utilities', accountId: 'chase-gbp', amount: amountFn(), currency: 'GBP', note: 'Subscription', location: { city: 'London', country: 'United Kingdom', cc: 'GB', lat: 51.5074, lng: -0.1278 } });
  }

  // BRL utilities back home
  const brlUtils = [
    ['Vivo Fibra',  -149.90,            'Internet'],
    ['Enel · Power', -between(95, 180), 'Electricity'],
  ];
  for (const [merchant, amount, kind] of brlUtils) {
    const day = intBetween(8, 22);
    const d = new Date(monthStart); d.setDate(day);
    if (d > TODAY) continue;
    newTx({ date: iso(d), merchant, category: 'utilities', accountId: 'itau-brl', amount, currency: 'BRL', note: kind, location: { city: 'São Paulo', country: 'Brazil', cc: 'BR', lat: -23.5505, lng: -46.6333 } });
  }
}

// IPTU 4 quotas (BRL)
for (let q = 1; q <= 4; q++) {
  const d = new Date(2026, q - 1, 10);
  if (d < YEAR_AGO || d > TODAY) continue;
  newTx({ date: iso(d), merchant: `Property Tax · Q${q}/4`, category: 'taxes', accountId: 'itau-brl', amount: -528.00, currency: 'BRL', note: 'Municipal property tax · São Paulo', location: { city: 'São Paulo', country: 'Brazil', cc: 'BR', lat: -23.5505, lng: -46.6333 } });
}

transactions.sort((a, b) => b.date.localeCompare(a.date));

// ─── Holdings — ETFs only, total ~$500k USD ──
const holdings = [
  // US ETFs (USD)
  { id: 'h1',  ticker: 'VTI',     name: 'Vanguard Total US Stock Market',   assetClass: 'etf_intl', quantity: 250, avgCost: 215.40, currentPrice: 263.10, currency: 'USD', country: 'US' },
  { id: 'h2',  ticker: 'VOO',     name: 'Vanguard S&P 500',                 assetClass: 'etf_intl', quantity: 100, avgCost: 432.80, currentPrice: 542.20, currency: 'USD', country: 'US' },
  { id: 'h3',  ticker: 'QQQ',     name: 'Invesco Nasdaq-100',               assetClass: 'etf_intl', quantity: 120, avgCost: 384.50, currentPrice: 498.30, currency: 'USD', country: 'US' },
  { id: 'h4',  ticker: 'VXUS',    name: 'Vanguard Total Intl Stock',        assetClass: 'etf_intl', quantity: 320, avgCost: 58.20,  currentPrice: 66.10,  currency: 'USD', country: 'US' },
  { id: 'h5',  ticker: 'BND',     name: 'Vanguard Total Bond Market',       assetClass: 'etf_bonds',quantity: 380, avgCost: 71.40,  currentPrice: 73.00,  currency: 'USD', country: 'US' },
  // Crypto via ETFs
  { id: 'h6',  ticker: 'IBIT',    name: 'iShares Bitcoin Trust',            assetClass: 'etf_crypto',quantity: 1400, avgCost: 38.20, currentPrice: 58.00, currency: 'USD', country: 'US' },
  { id: 'h7',  ticker: 'ETHE',    name: 'Grayscale Ethereum ETF',           assetClass: 'etf_crypto',quantity: 700,  avgCost: 24.10, currentPrice: 35.00, currency: 'USD', country: 'US' },
  // EUR ETFs
  { id: 'h8',  ticker: 'VWCE',    name: 'Vanguard FTSE All-World (UCITS)',  assetClass: 'etf_intl', quantity: 320, avgCost: 108.20, currentPrice: 128.00, currency: 'EUR', country: 'EU' },
  { id: 'h9',  ticker: 'IWDA',    name: 'iShares Core MSCI World (UCITS)',  assetClass: 'etf_intl', quantity: 280, avgCost: 88.40,  currentPrice: 99.20,  currency: 'EUR', country: 'EU' },
  // BR ETFs (BRL)
  { id: 'h10', ticker: 'BOVA11',  name: 'iShares Ibovespa',                 assetClass: 'etf_br',   quantity: 800, avgCost: 118.00, currentPrice: 135.40, currency: 'BRL', country: 'BR' },
  { id: 'h11', ticker: 'IVVB11',  name: 'iShares S&P 500 BRL',              assetClass: 'etf_br',   quantity: 250, avgCost: 318.00, currentPrice: 398.50, currency: 'BRL', country: 'BR' },
  { id: 'h12', ticker: 'HASH11',  name: 'Hashdex Crypto Index ETF',         assetClass: 'etf_crypto',quantity: 1000, avgCost: 32.50, currentPrice: 48.20, currency: 'BRL', country: 'BR' },
  // Cash positions
  { id: 'h13', ticker: 'CASH-USD', name: 'USD cash · Chase UK',           assetClass: 'cash', quantity: 1, avgCost: 8000,  currentPrice: 8000,  currency: 'USD', country: 'US' },
  { id: 'h14', ticker: 'CASH-EUR', name: 'EUR cash · Revolut + Santander',assetClass: 'cash', quantity: 1, avgCost: 14000, currentPrice: 14000, currency: 'EUR', country: 'EU' },
  { id: 'h15', ticker: 'CASH-GBP', name: 'GBP cash · Chase UK',           assetClass: 'cash', quantity: 1, avgCost: 6000,  currentPrice: 6000,  currency: 'GBP', country: 'GB' },
  { id: 'h16', ticker: 'CASH-BRL', name: 'BRL cash · Itaú + Wise',        assetClass: 'cash', quantity: 1, avgCost: 60000, currentPrice: 60000, currency: 'BRL', country: 'BR' },
];

const darfs = [
  { id: 'd1', yearMonth: '2025-11', type: 'swing_trade', baseValue: 4280.00, taxRate: 0.15, taxOwed: 642.00,  paid: true,  dueDate: '2025-12-31' },
  { id: 'd2', yearMonth: '2026-02', type: 'reit',        baseValue: 1850.00, taxRate: 0.20, taxOwed: 370.00,  paid: true,  dueDate: '2026-03-31' },
  { id: 'd3', yearMonth: '2026-03', type: 'swing_trade', baseValue: 6720.00, taxRate: 0.15, taxOwed: 1008.00, paid: false, dueDate: '2026-04-30' },
];

// ─── Real Estate (asset + mortgage liability) ─
const realEstate = [
  {
    id: 're1',
    name: 'Primary residence · São Paulo',
    address: 'R. Oscar Freire 1850, Apt 304',
    city: 'São Paulo', country: 'Brazil', cc: 'BR',
    lat: -23.5612, lng: -46.6731,
    currency: 'BRL',
    marketValue: 2_400_000.00,
    acquisitionDate: '2021-08-12',
    acquisitionCost: 1_780_000.00,
    ownershipPct: 100,
    monthlyHoa: 1_850.00,
    mortgage: {
      lender: 'Itaú · Habitação',
      originalPrincipal: 1_200_000.00,
      outstandingBalance: 842_000.00,
      rateType: 'fixed', rate: 9.40,
      termYears: 30, startDate: '2021-08-12',
      monthlyPayment: 11_240.00,
      currency: 'BRL',
    },
  },
  {
    id: 're2',
    name: 'Holiday flat · Lisbon',
    address: 'Rua da Madalena 80, 4ºD',
    city: 'Lisboa', country: 'Portugal', cc: 'PT',
    lat: 38.7106, lng: -9.1376,
    currency: 'EUR',
    marketValue: 485_000.00,
    acquisitionDate: '2024-03-22',
    acquisitionCost: 420_000.00,
    ownershipPct: 100,
    monthlyHoa: 90.00,
    monthlyRent: 2_400.00,
    mortgage: {
      lender: 'Banco Santander Totta',
      originalPrincipal: 320_000.00,
      outstandingBalance: 308_500.00,
      rateType: 'variable', rate: 4.85,
      termYears: 25, startDate: '2024-03-22',
      monthlyPayment: 1_842.00,
      currency: 'EUR',
    },
  },
  {
    id: 're3',
    name: 'Investment buy-to-let · London',
    address: '14 Beaufort Gardens, SW3',
    city: 'London', country: 'United Kingdom', cc: 'GB',
    lat: 51.4986, lng: -0.1648,
    currency: 'GBP',
    marketValue: 920_000.00,
    acquisitionDate: '2023-06-08',
    acquisitionCost: 880_000.00,
    ownershipPct: 50,
    monthlyHoa: 320.00,
    monthlyRent: 3_400.00,
    mortgage: {
      lender: 'HSBC Premier UK',
      originalPrincipal: 580_000.00,
      outstandingBalance: 552_000.00,
      rateType: 'fixed', rate: 5.45,
      termYears: 25, startDate: '2023-06-08',
      monthlyPayment: 3_540.00,
      currency: 'GBP',
    },
  },
];

// ─── Capital Markets Leverage ────────────────
const leverage = [
  {
    id: 'lev1',
    type: 'margin_loan',
    counterparty: 'Interactive Brokers',
    notional: 75_000.00,
    currency: 'USD',
    rate: 6.15,
    collateralValue: 280_000.00,
    collateralCurrency: 'USD',
    marginCallThreshold: 50.0,
    currentLtv: 26.8,
    maturity: null,
    openedAt: '2025-09-14',
    monthlyCost: 384.00,
  },
  {
    id: 'lev2',
    type: 'securities_backed_credit',
    counterparty: 'Avenue Wealth · SBL Line',
    notional: 120_000.00,
    currency: 'USD',
    rate: 5.80,
    collateralValue: 420_000.00,
    collateralCurrency: 'USD',
    marginCallThreshold: 60.0,
    currentLtv: 28.6,
    maturity: '2027-09-30',
    openedAt: '2025-04-02',
    monthlyCost: 580.00,
  },
  {
    id: 'lev3',
    type: 'fx_forward',
    counterparty: 'Wise Business · FX hedge',
    notional: 60_000.00,
    currency: 'EUR',
    rate: null,
    collateralValue: 60_000.00,
    collateralCurrency: 'EUR',
    marginCallThreshold: 0,
    currentLtv: 0,
    maturity: '2026-09-30',
    openedAt: '2026-03-30',
    monthlyCost: 0,
  },
  {
    id: 'lev4',
    type: 'derivative_notional',
    counterparty: 'IBKR · QQQ collar',
    notional: 95_000.00,
    currency: 'USD',
    rate: null,
    collateralValue: 95_000.00,
    collateralCurrency: 'USD',
    marginCallThreshold: 0,
    currentLtv: 0,
    maturity: '2026-12-19',
    openedAt: '2026-01-22',
    monthlyCost: 0,
  },
];

const out = {
  meta: {
    generatedAt: new Date().toISOString(),
    generator: 'src/data/generate.mjs',
    user: { name: 'Diego N. Marcos', cpf: '***.***.***-**', residency: 'BR', baseCurrency: 'BRL' },
    period: { from: iso(YEAR_AGO), to: iso(TODAY) },
    counts: {
      transactions: transactions.length,
      holdings: holdings.length,
      accounts: ACCOUNTS.length,
      darfs: darfs.length,
      realEstate: realEstate.length,
      leverage: leverage.length,
    },
  },
  fx: FX,
  accounts: ACCOUNTS,
  transactions,
  holdings,
  darfs,
  realEstate,
  leverage,
};

writeFileSync(OUT, JSON.stringify(out, null, 2));
console.log(`✓ Wrote ${OUT}`);
console.log(`  ${transactions.length} transactions · ${holdings.length} holdings · ${ACCOUNTS.length} accounts · ${realEstate.length} properties · ${leverage.length} leverage positions`);
