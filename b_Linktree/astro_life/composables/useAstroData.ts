import type { City, Planet, ZodiacSign } from '~/types/astro';

export const CITIES_DB: City[] = [
  { name: "São Paulo, Brazil", lat: -23.5505, lng: -46.6333 },
  { name: "Tokyo, Japan", lat: 35.6762, lng: 139.6503 },
  { name: "New York, USA", lat: 40.7128, lng: -74.0060 },
  { name: "London, UK", lat: 51.5074, lng: -0.1278 },
  { name: "Paris, France", lat: 48.8566, lng: 2.3522 },
  { name: "Sydney, Australia", lat: -33.8688, lng: 151.2093 },
  { name: "Los Angeles, USA", lat: 34.0522, lng: -118.2437 },
  { name: "Mumbai, India", lat: 19.0760, lng: 72.8777 },
  { name: "Dubai, UAE", lat: 25.2048, lng: 55.2708 },
  { name: "Singapore", lat: 1.3521, lng: 103.8198 },
  { name: "Rio de Janeiro, Brazil", lat: -22.9068, lng: -43.1729 },
  { name: "Cairo, Egypt", lat: 30.0444, lng: 31.2357 },
  { name: "Beijing, China", lat: 39.9042, lng: 116.4074 },
  { name: "Moscow, Russia", lat: 55.7558, lng: 37.6173 },
  { name: "Istanbul, Turkey", lat: 41.0082, lng: 28.9784 },
  { name: "Buenos Aires, Argentina", lat: -34.6037, lng: -58.3816 },
  { name: "Toronto, Canada", lat: 43.6510, lng: -79.3470 },
  { name: "Berlin, Germany", lat: 52.5200, lng: 13.4050 },
  { name: "Madrid, Spain", lat: 40.4168, lng: -3.7038 },
  { name: "Rome, Italy", lat: 41.9028, lng: 12.4964 },
  { name: "Mexico City, Mexico", lat: 19.4326, lng: -99.1332 },
];

export const PLANETS: Planet[] = [
  { id: 'sun', name: 'Sun', symbol: '☉', color: 0xfbbf24, cssColor: '#fbbf24', question: "Who am I?" },
  { id: 'moon', name: 'Moon', symbol: '☽', color: 0xe2e8f0, cssColor: '#e2e8f0', question: "What do I need?" },
  { id: 'mercury', name: 'Mercury', symbol: '☿', color: 0xa5f3fc, cssColor: '#a5f3fc', question: "How do I think?" },
  { id: 'venus', name: 'Venus', symbol: '♀', color: 0xf472b6, cssColor: '#f472b6', question: "What do I love?" },
  { id: 'mars', name: 'Mars', symbol: '♂', color: 0xef4444, cssColor: '#ef4444', question: "How do I act?" },
  { id: 'jupiter', name: 'Jupiter', symbol: '♃', color: 0x8b5cf6, cssColor: '#8b5cf6', question: "Where do I grow?" },
  { id: 'saturn', name: 'Saturn', symbol: '♄', color: 0x78350f, cssColor: '#78350f', question: "What do I fear?" },
  { id: 'uranus', name: 'Uranus', symbol: '♅', color: 0x22d3ee, cssColor: '#22d3ee', question: "How do I rebel?" },
  { id: 'neptune', name: 'Neptune', symbol: '♆', color: 0x60a5fa, cssColor: '#60a5fa', question: "What do I dream?" },
  { id: 'pluto', name: 'Pluto', symbol: '♇', color: 0x4c1d95, cssColor: '#4c1d95', question: "How do I transform?" }
];

export const ZODIAC_DATA: ZodiacSign[] = [
  { name: 'Aries', answer: "Boldly" },
  { name: 'Taurus', answer: "Steadily" },
  { name: 'Gemini', answer: "Curiously" },
  { name: 'Cancer', answer: "Protectively" },
  { name: 'Leo', answer: "Dramatically" },
  { name: 'Virgo', answer: "Precisely" },
  { name: 'Libra', answer: "Harmoniously" },
  { name: 'Scorpio', answer: "Intensely" },
  { name: 'Sagittarius', answer: "Freely" },
  { name: 'Capricorn', answer: "Ambitiously" },
  { name: 'Aquarius', answer: "Uniquely" },
  { name: 'Pisces', answer: "Intuitively" }
];

export const CHINESE_ZODIAC_YEARS = [
  "Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox",
  "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat"
];

// Crash-Proof Random Number Generator (Mulberry32)
export const mulberry32 = (a: number) => {
  return function() {
    let t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
};

// Safe Longitude Normalization
export const normalizeLng = (lng: number): number => {
  let n = lng % 360;
  if (n > 180) n -= 360;
  if (n < -180) n += 360;
  return n;
};
