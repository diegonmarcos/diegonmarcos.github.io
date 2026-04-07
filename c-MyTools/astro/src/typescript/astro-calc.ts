import type { PlanetaryPositions, ElementBalance, ModalityBalance, MoonPhaseInfo, ChineseZodiacInfo } from './types';
import { ZODIAC_DATA, MOON_PHASES, CHINESE_ZODIAC } from './astro-data';

// ── Julian Day ──────────────────────────────────────
export const dateToJD = (year: number, month: number, day: number, hour = 0): number => {
  let y = year, m = month;
  if (m <= 2) { y -= 1; m += 12; }
  const A = Math.floor(y / 100);
  const B = 2 - A + Math.floor(A / 4);
  return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + hour / 24 + B - 1524.5;
};

export const julianCenturies = (jd: number): number => (jd - 2451545.0) / 36525;

// ── Angle helpers ────────────────────────────────────
export const normalizeAngle = (angle: number): number => {
  let a = angle % 360;
  if (a < 0) a += 360;
  return a;
};

export const normalizeLng = (lng: number): number => {
  let n = lng % 360;
  if (n > 180) n -= 360;
  if (n < -180) n += 360;
  return n;
};

// ── Sun & Moon ───────────────────────────────────────
export const sunLongitude = (jd: number): number => {
  const T = julianCenturies(jd);
  const L0 = normalizeAngle(280.46646 + 36000.76983 * T + 0.0003032 * T * T);
  const M = normalizeAngle(357.52911 + 35999.05029 * T - 0.0001537 * T * T);
  const Mrad = M * Math.PI / 180;
  const C = (1.914602 - 0.004817 * T) * Math.sin(Mrad) +
            (0.019993 - 0.000101 * T) * Math.sin(2 * Mrad) +
            0.000289 * Math.sin(3 * Mrad);
  return normalizeAngle(L0 + C);
};

export const moonLongitude = (jd: number): number => {
  const T = julianCenturies(jd);
  const Lp = normalizeAngle(218.3165 + 481267.8813 * T);
  const D  = normalizeAngle(297.8502 + 445267.1115 * T);
  const M  = normalizeAngle(134.9634 + 477198.8675 * T);
  const Mp = normalizeAngle(357.5291 + 35999.0503 * T);
  const F  = normalizeAngle(93.2721  + 483202.0175 * T);
  const lng = Lp
    + 6.289 * Math.sin(M * Math.PI / 180)
    + 1.274 * Math.sin((2 * D - M) * Math.PI / 180)
    + 0.658 * Math.sin(2 * D * Math.PI / 180)
    + 0.214 * Math.sin(2 * M * Math.PI / 180)
    - 0.186 * Math.sin(Mp * Math.PI / 180)
    - 0.114 * Math.sin(2 * F * Math.PI / 180);
  return normalizeAngle(lng);
};

// ── Planets ──────────────────────────────────────────
const ORBITAL: Record<string, { L0: number; Ldot: number }> = {
  mercury: { L0: 252.2509, Ldot: 149472.6746 },
  venus:   { L0: 181.9798, Ldot: 58517.8157 },
  mars:    { L0: 355.4330, Ldot: 19140.2993 },
  jupiter: { L0: 34.3515,  Ldot: 3034.9057 },
  saturn:  { L0: 50.0774,  Ldot: 1222.1138 },
  uranus:  { L0: 314.0550, Ldot: 428.4670 },
  neptune: { L0: 304.3487, Ldot: 218.4862 },
  pluto:   { L0: 238.9290, Ldot: 145.2078 }
};

export const planetLongitude = (id: string, jd: number): number => {
  if (id === 'sun') return sunLongitude(jd);
  if (id === 'moon') return moonLongitude(jd);
  const el = ORBITAL[id];
  if (!el) return 0;
  return normalizeAngle(el.L0 + el.Ldot * julianCenturies(jd));
};

// ── Sidereal time ────────────────────────────────────
export const gmst = (jd: number): number => {
  const T = julianCenturies(jd);
  return normalizeAngle(280.46061837 + 360.98564736629 * (jd - 2451545.0) + 0.000387933 * T * T - T * T * T / 38710000);
};

// ── Helpers ──────────────────────────────────────────
export const longitudeToSignIndex = (lng: number): number => Math.floor(normalizeAngle(lng) / 30);

export const mcLineLongitude = (planetLng: number, birthGmst: number): number =>
  normalizeLng(planetLng - birthGmst);

export const calculatePlanetaryPositions = (jd: number): PlanetaryPositions => ({
  sun:     sunLongitude(jd),
  moon:    moonLongitude(jd),
  mercury: planetLongitude('mercury', jd),
  venus:   planetLongitude('venus',   jd),
  mars:    planetLongitude('mars',    jd),
  jupiter: planetLongitude('jupiter', jd),
  saturn:  planetLongitude('saturn',  jd),
  uranus:  planetLongitude('uranus',  jd),
  neptune: planetLongitude('neptune', jd),
  pluto:   planetLongitude('pluto',   jd)
});

export const calculateAspect = (pos1: number, pos2: number, orb = 8): string | null => {
  let diff = Math.abs(normalizeAngle(pos1) - normalizeAngle(pos2));
  if (diff > 180) diff = 360 - diff;
  if (Math.abs(diff - 0)   <= orb) return 'Conjunction';
  if (Math.abs(diff - 60)  <= orb) return 'Sextile';
  if (Math.abs(diff - 90)  <= orb) return 'Square';
  if (Math.abs(diff - 120) <= orb) return 'Trine';
  if (Math.abs(diff - 180) <= orb) return 'Opposition';
  return null;
};

// ── Lunar ────────────────────────────────────────────
export const calculateMoonPhase = (sunLng: number, moonLng: number): MoonPhaseInfo => {
  const phase = normalizeAngle(moonLng - sunLng);
  return MOON_PHASES[Math.floor(phase / 45) % 8];
};

export const calculateLunarNodes = (jd: number): { north: number; south: number } => {
  const north = normalizeAngle(125.0445 - 1934.1363 * julianCenturies(jd));
  return { north, south: normalizeAngle(north + 180) };
};

// ── Element / Modality ───────────────────────────────
export const analyzeElements = (signs: string[]): ElementBalance => {
  const counts = { fire: 0, earth: 0, air: 0, water: 0 };
  signs.forEach(s => {
    const z = ZODIAC_DATA.find(z => z.name === s);
    if (z) counts[z.element.toLowerCase() as keyof typeof counts]++;
  });
  const entries = Object.entries(counts) as [string, number][];
  return {
    ...counts,
    dominant: entries.reduce((a, b) => a[1] > b[1] ? a : b)[0],
    lacking:  entries.reduce((a, b) => a[1] < b[1] ? a : b)[0]
  };
};

export const analyzeModalities = (signs: string[]): ModalityBalance => {
  const counts = { cardinal: 0, fixed: 0, mutable: 0 };
  signs.forEach(s => {
    const z = ZODIAC_DATA.find(z => z.name === s);
    if (z) counts[z.modality.toLowerCase() as keyof typeof counts]++;
  });
  return {
    ...counts,
    dominant: (Object.entries(counts) as [string, number][]).reduce((a, b) => a[1] > b[1] ? a : b)[0]
  };
};

// ── Chinese Zodiac ───────────────────────────────────
export const getChineseZodiac = (year: number): ChineseZodiacInfo => {
  const animals = ['Monkey', 'Rooster', 'Dog', 'Pig', 'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat'];
  return CHINESE_ZODIAC.find(z => z.name === animals[year % 12]) || CHINESE_ZODIAC[0];
};

export const getChineseElement = (year: number): string =>
  ['Metal', 'Water', 'Wood', 'Fire', 'Earth'][Math.floor((year - 4) / 2) % 5];

// ── Format helpers ───────────────────────────────────
export const formatDegrees = (deg: number): string => {
  const d = Math.floor(deg);
  const m = Math.floor((deg - d) * 60);
  return `${d}°${m.toString().padStart(2, '0')}'`;
};

export const getSignPosition = (longitude: number): string => {
  const sign = ZODIAC_DATA[longitudeToSignIndex(longitude)];
  const degInSign = normalizeAngle(longitude) % 30;
  return `${formatDegrees(degInSign)} ${sign.name}`;
};
