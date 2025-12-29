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
}

export interface ZodiacSign {
  name: string;
  answer: string;
}

export interface AstroLine {
  id: number;
  planet: Planet;
  type: string;
  longitudeAngle: number;
  longitudeDegrees: number;
}

export interface NatalPosition {
  planet: Planet;
  sign: ZodiacSign;
  synthesis: string;
}

export interface Transit {
  planet: Planet;
  aspect: string;
  target: Planet;
  insight: string;
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

export interface AstroData {
  lines: AstroLine[];
  natal: NatalPosition[];
  transits: Transit[];
  future: FuturePrediction[];
  matches: CityMatch[];
  chinese: string;
}
