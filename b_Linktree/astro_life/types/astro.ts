export interface City {
  name: string;
  lat: number;
  lng: number;
}

export interface Planet {
  id: string;
  name: string;
  symbol: string;
  color: number;
  cssColor: string;
  question: string;
  keywords?: string[];
  rules?: string[];
  exalted?: string;
  detriment?: string;
  fall?: string;
  element?: string;
  description?: string;
  bodyParts?: string[];
  dayOfWeek?: string;
  orbitalPeriod?: string;
}

export interface ZodiacSign {
  name: string;
  answer: string;
  symbol?: string;
  element?: 'Fire' | 'Earth' | 'Air' | 'Water';
  modality?: 'Cardinal' | 'Fixed' | 'Mutable';
  ruler?: string;
  dates?: string;
  keywords?: string[];
  strengths?: string[];
  challenges?: string[];
  description?: string;
  compatibility?: string[];
  bodyPart?: string;
  color?: string;
  cssColor?: string;
}

export interface AstroLine {
  id: number;
  planet: Planet;
  type: string;
  longitudeAngle: number;
  longitudeDegrees: number;
  eclipticLongitude?: number;
  signPosition?: string;
}

export interface NatalPosition {
  planet: Planet;
  sign: ZodiacSign;
  synthesis: string;
  longitude?: number;
  degInSign?: number;
  position?: string;
  house?: number;
}

export interface NatalAspect {
  planet1: Planet;
  planet2: Planet;
  aspect: string;
  aspectInfo?: {
    symbol: string;
    nature: string;
    description: string;
  };
  orb?: number;
}

export interface Transit {
  planet: Planet;
  aspect: string;
  target: Planet;
  insight: string;
  transitPos?: string;
  natalPos?: string;
}

export interface FuturePrediction {
  time: string;
  planet: Planet;
  pred: string;
}

export interface CityMatch {
  line: AstroLine;
  cities: City[];
}

export interface MoonPhase {
  name: string;
  emoji: string;
  illumination: number;
  keywords: string[];
  description: string;
  bestFor: string[];
}

export interface LunarData {
  phase: MoonPhase;
  age: number;
  northNode: number;
  southNode: number;
  northNodeSign: string;
  southNodeSign: string;
  birthMoonPhase?: MoonPhase;
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

export interface AstroData {
  lines: AstroLine[];
  natal: NatalPosition[];
  natalAspects?: NatalAspect[];
  transits: Transit[];
  future: FuturePrediction[];
  matches: CityMatch[];
  chinese: string;
  chineseData?: ChineseZodiacData;
  // Lunar data
  lunar?: LunarData;
  // Element/Modality analysis
  elements?: ElementBalance;
  modalities?: ModalityBalance;
  // Computed summary fields
  birthJD?: number;
  sunSign?: string;
  moonSign?: string;
  risingApprox?: string;
}
