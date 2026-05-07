// ============================================================
// myAstroLife — Type Definitions
// ============================================================

export interface City {
  name: string;
  lat: number;
  lng: number;
}

export interface PlanetInfo {
  id: string;
  name: string;
  symbol: string;
  color: number;
  cssColor: string;
  question: string;
  keywords: string[];
  rules: string[];
  exalted: string;
  detriment: string;
  fall: string;
  element: string;
  description: string;
  bodyParts: string[];
  dayOfWeek?: string;
  orbitalPeriod: string;
}

export interface ZodiacInfo {
  name: string;
  answer: string;
  symbol: string;
  element: 'Fire' | 'Earth' | 'Air' | 'Water';
  modality: 'Cardinal' | 'Fixed' | 'Mutable';
  ruler: string;
  dates: string;
  keywords: string[];
  strengths: string[];
  challenges: string[];
  description: string;
  compatibility: string[];
  bodyPart: string;
  color: string;
  cssColor: string;
}

export interface AspectInfo {
  name: string;
  symbol: string;
  degrees: number;
  nature: 'Harmonious' | 'Challenging' | 'Neutral';
  keywords: string[];
  description: string;
}

export interface MoonPhaseInfo {
  name: string;
  emoji: string;
  illumination: number;
  keywords: string[];
  description: string;
  bestFor: string[];
}

export interface ChineseZodiacInfo {
  name: string;
  emoji: string;
  element: string;
  yinYang: 'Yin' | 'Yang';
  traits: string[];
  compatible: string[];
  incompatible: string[];
  luckyNumbers: number[];
  luckyColors: string[];
  description: string;
}

export interface myAstroLine {
  id: number;
  planet: PlanetInfo;
  type: string;
  longitudeAngle: number;
  longitudeDegrees: number;
  eclipticLongitude: number;
  signPosition: string;
}

export interface NatalPosition {
  planet: PlanetInfo;
  sign: ZodiacInfo;
  synthesis: string;
  longitude: number;
  degInSign: number;
  position: string;
}

export interface NatalAspect {
  planet1: PlanetInfo;
  planet2: PlanetInfo;
  aspect: string;
  aspectInfo: AspectInfo;
}

export interface Transit {
  planet: PlanetInfo;
  aspect: string;
  target: PlanetInfo;
  transitPos: string;
  natalPos: string;
  insight: string;
}

export interface FuturePrediction {
  time: string;
  planet: PlanetInfo;
  pred: string;
}

export interface CityMatch {
  line: myAstroLine;
  cities: City[];
}

export interface LunarData {
  phase: MoonPhaseInfo;
  age: number;
  northNode: number;
  southNode: number;
  northNodeSign: string;
  southNodeSign: string;
  birthMoonPhase: MoonPhaseInfo;
}

export interface ElementBalance {
  fire: number;
  earth: number;
  air: number;
  water: number;
  dominant: string;
  lacking: string;
}

export interface ModalityBalance {
  cardinal: number;
  fixed: number;
  mutable: number;
  dominant: string;
}

export interface ChineseZodiacData {
  animal: string;
  emoji: string;
  element: string;
  yinYang: string;
  traits: string[];
  compatible: string[];
  incompatible: string[];
  luckyNumbers: number[];
  luckyColors: string[];
  description: string;
}

export interface myAstroData {
  lines: myAstroLine[];
  natal: NatalPosition[];
  natalAspects: NatalAspect[];
  transits: Transit[];
  future: FuturePrediction[];
  matches: CityMatch[];
  chinese: string;
  chineseData: ChineseZodiacData;
  lunar: LunarData;
  elements: ElementBalance;
  modalities: ModalityBalance;
  birthJD: number;
  sunSign: string;
  moonSign: string;
  risingApprox: string;
}

export interface FormData {
  name: string;
  date: string;
  time: string;
}

export interface PlanetaryPositions {
  [key: string]: number;
}
