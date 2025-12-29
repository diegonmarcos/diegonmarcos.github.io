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

export interface PlanetInfo {
  id: string;
  name: string;
  symbol: string;
  color: number;
  cssColor: string;
  question: string;
  // Extended info
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

export const PLANETS: PlanetInfo[] = [
  {
    id: 'sun', name: 'Sun', symbol: '☉', color: 0xfbbf24, cssColor: '#fbbf24',
    question: "Who am I?",
    keywords: ['Identity', 'Ego', 'Vitality', 'Purpose', 'Father', 'Authority'],
    rules: ['Leo'],
    exalted: 'Aries',
    detriment: 'Aquarius',
    fall: 'Libra',
    element: 'Fire',
    description: 'The Sun represents your core identity, ego, and life purpose. It shows how you express yourself and where you shine brightest. It is the center of your being, your vitality, and conscious self.',
    bodyParts: ['Heart', 'Spine', 'Right Eye'],
    dayOfWeek: 'Sunday',
    orbitalPeriod: '1 year'
  },
  {
    id: 'moon', name: 'Moon', symbol: '☽', color: 0xe2e8f0, cssColor: '#e2e8f0',
    question: "What do I need?",
    keywords: ['Emotions', 'Intuition', 'Mother', 'Habits', 'Memory', 'Nurturing'],
    rules: ['Cancer'],
    exalted: 'Taurus',
    detriment: 'Capricorn',
    fall: 'Scorpio',
    element: 'Water',
    description: 'The Moon governs your emotional nature, instincts, and subconscious mind. It represents your inner child, emotional needs, and how you nurture yourself and others. It reflects your past and deepest feelings.',
    bodyParts: ['Stomach', 'Breasts', 'Left Eye', 'Bodily Fluids'],
    dayOfWeek: 'Monday',
    orbitalPeriod: '28 days'
  },
  {
    id: 'mercury', name: 'Mercury', symbol: '☿', color: 0xa5f3fc, cssColor: '#a5f3fc',
    question: "How do I think?",
    keywords: ['Communication', 'Intellect', 'Learning', 'Travel', 'Siblings', 'Logic'],
    rules: ['Gemini', 'Virgo'],
    exalted: 'Virgo',
    detriment: 'Sagittarius',
    fall: 'Pisces',
    element: 'Air/Earth',
    description: 'Mercury rules communication, thought processes, and how you learn and share information. It governs short trips, siblings, and everyday interactions. When retrograde, communications and technology often face challenges.',
    bodyParts: ['Nervous System', 'Lungs', 'Arms', 'Hands'],
    dayOfWeek: 'Wednesday',
    orbitalPeriod: '88 days'
  },
  {
    id: 'venus', name: 'Venus', symbol: '♀', color: 0xf472b6, cssColor: '#f472b6',
    question: "What do I love?",
    keywords: ['Love', 'Beauty', 'Harmony', 'Values', 'Money', 'Pleasure'],
    rules: ['Taurus', 'Libra'],
    exalted: 'Pisces',
    detriment: 'Aries',
    fall: 'Virgo',
    element: 'Earth/Air',
    description: 'Venus represents love, beauty, and what you value. It shows how you attract and relate to others, your aesthetic preferences, and approach to pleasure and money. It governs romantic relationships and artistic expression.',
    bodyParts: ['Throat', 'Kidneys', 'Skin', 'Veins'],
    dayOfWeek: 'Friday',
    orbitalPeriod: '225 days'
  },
  {
    id: 'mars', name: 'Mars', symbol: '♂', color: 0xef4444, cssColor: '#ef4444',
    question: "How do I act?",
    keywords: ['Action', 'Desire', 'Aggression', 'Energy', 'Courage', 'Competition'],
    rules: ['Aries', 'Scorpio'],
    exalted: 'Capricorn',
    detriment: 'Libra',
    fall: 'Cancer',
    element: 'Fire',
    description: 'Mars is the warrior planet of action, desire, and drive. It shows how you assert yourself, pursue goals, and handle conflict. It represents raw energy, passion, sexuality, and your fighting spirit.',
    bodyParts: ['Muscles', 'Blood', 'Head', 'Adrenal Glands'],
    dayOfWeek: 'Tuesday',
    orbitalPeriod: '687 days'
  },
  {
    id: 'jupiter', name: 'Jupiter', symbol: '♃', color: 0x8b5cf6, cssColor: '#8b5cf6',
    question: "Where do I grow?",
    keywords: ['Expansion', 'Luck', 'Wisdom', 'Philosophy', 'Travel', 'Abundance'],
    rules: ['Sagittarius', 'Pisces'],
    exalted: 'Cancer',
    detriment: 'Gemini',
    fall: 'Capricorn',
    element: 'Fire',
    description: 'Jupiter is the great benefic, bringing expansion, luck, and opportunity. It shows where you find meaning, how you grow, and your philosophical outlook. It governs higher education, long-distance travel, and spiritual beliefs.',
    bodyParts: ['Liver', 'Hips', 'Thighs', 'Pituitary Gland'],
    dayOfWeek: 'Thursday',
    orbitalPeriod: '12 years'
  },
  {
    id: 'saturn', name: 'Saturn', symbol: '♄', color: 0x78350f, cssColor: '#a8a29e',
    question: "What do I fear?",
    keywords: ['Structure', 'Discipline', 'Karma', 'Time', 'Limitations', 'Mastery'],
    rules: ['Capricorn', 'Aquarius'],
    exalted: 'Libra',
    detriment: 'Cancer',
    fall: 'Aries',
    element: 'Earth',
    description: 'Saturn is the taskmaster, representing discipline, responsibility, and life lessons. It shows where you face challenges and must work hard. Through struggle comes mastery. Saturn return (every 29 years) marks major life transitions.',
    bodyParts: ['Bones', 'Teeth', 'Skin', 'Knees'],
    dayOfWeek: 'Saturday',
    orbitalPeriod: '29 years'
  },
  {
    id: 'uranus', name: 'Uranus', symbol: '♅', color: 0x22d3ee, cssColor: '#22d3ee',
    question: "How do I rebel?",
    keywords: ['Revolution', 'Innovation', 'Freedom', 'Awakening', 'Eccentricity', 'Technology'],
    rules: ['Aquarius'],
    exalted: 'Scorpio',
    detriment: 'Leo',
    fall: 'Taurus',
    element: 'Air',
    description: 'Uranus is the awakener, bringing sudden change, innovation, and liberation. It shows where you break free from convention and express your unique individuality. It governs technology, revolution, and humanitarian ideals.',
    bodyParts: ['Nervous System', 'Ankles', 'Circulation'],
    orbitalPeriod: '84 years'
  },
  {
    id: 'neptune', name: 'Neptune', symbol: '♆', color: 0x60a5fa, cssColor: '#60a5fa',
    question: "What do I dream?",
    keywords: ['Dreams', 'Illusion', 'Spirituality', 'Compassion', 'Art', 'Transcendence'],
    rules: ['Pisces'],
    exalted: 'Leo',
    detriment: 'Virgo',
    fall: 'Aquarius',
    element: 'Water',
    description: 'Neptune dissolves boundaries between reality and dreams. It governs spirituality, imagination, compassion, and artistic inspiration. It can also bring confusion, deception, and escapism. Where Neptune lies, you seek the divine.',
    bodyParts: ['Pineal Gland', 'Feet', 'Lymphatic System'],
    orbitalPeriod: '165 years'
  },
  {
    id: 'pluto', name: 'Pluto', symbol: '♇', color: 0x4c1d95, cssColor: '#a855f7',
    question: "How do I transform?",
    keywords: ['Transformation', 'Power', 'Death/Rebirth', 'Obsession', 'Shadow', 'Regeneration'],
    rules: ['Scorpio'],
    exalted: 'Aries',
    detriment: 'Taurus',
    fall: 'Libra',
    element: 'Water',
    description: 'Pluto is the planet of deep transformation, death, and rebirth. It shows where you experience intense power dynamics and must confront your shadow self. Through destruction comes regeneration and ultimate empowerment.',
    bodyParts: ['Reproductive Organs', 'Colon', 'Elimination'],
    orbitalPeriod: '248 years'
  }
];

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

export const ZODIAC_DATA: ZodiacInfo[] = [
  {
    name: 'Aries', answer: "Boldly", symbol: '♈', element: 'Fire', modality: 'Cardinal',
    ruler: 'Mars', dates: 'Mar 21 - Apr 19',
    keywords: ['Pioneer', 'Leader', 'Warrior', 'Initiator'],
    strengths: ['Courageous', 'Determined', 'Confident', 'Enthusiastic', 'Honest'],
    challenges: ['Impatient', 'Impulsive', 'Aggressive', 'Self-centered'],
    description: 'Aries is the first sign, representing new beginnings and raw energy. Aries individuals are natural leaders who charge ahead fearlessly. They are passionate, direct, and always ready for action.',
    compatibility: ['Leo', 'Sagittarius', 'Gemini', 'Aquarius'],
    bodyPart: 'Head',
    color: 'Red',
    cssColor: '#ef4444'
  },
  {
    name: 'Taurus', answer: "Steadily", symbol: '♉', element: 'Earth', modality: 'Fixed',
    ruler: 'Venus', dates: 'Apr 20 - May 20',
    keywords: ['Builder', 'Provider', 'Sensualist', 'Stabilizer'],
    strengths: ['Reliable', 'Patient', 'Practical', 'Devoted', 'Sensual'],
    challenges: ['Stubborn', 'Possessive', 'Materialistic', 'Resistant to change'],
    description: 'Taurus is the builder of the zodiac, creating lasting foundations. They appreciate beauty, comfort, and security. Patient and determined, they work steadily toward their goals.',
    compatibility: ['Virgo', 'Capricorn', 'Cancer', 'Pisces'],
    bodyPart: 'Neck/Throat',
    color: 'Green',
    cssColor: '#22c55e'
  },
  {
    name: 'Gemini', answer: "Curiously", symbol: '♊', element: 'Air', modality: 'Mutable',
    ruler: 'Mercury', dates: 'May 21 - Jun 20',
    keywords: ['Communicator', 'Thinker', 'Connector', 'Storyteller'],
    strengths: ['Adaptable', 'Witty', 'Intellectual', 'Versatile', 'Communicative'],
    challenges: ['Inconsistent', 'Nervous', 'Superficial', 'Indecisive'],
    description: 'Gemini is the messenger, forever curious and mentally active. They thrive on variety, communication, and learning. Quick-witted and social, they connect ideas and people.',
    compatibility: ['Libra', 'Aquarius', 'Aries', 'Leo'],
    bodyPart: 'Arms/Hands/Lungs',
    color: 'Yellow',
    cssColor: '#eab308'
  },
  {
    name: 'Cancer', answer: "Protectively", symbol: '♋', element: 'Water', modality: 'Cardinal',
    ruler: 'Moon', dates: 'Jun 21 - Jul 22',
    keywords: ['Nurturer', 'Protector', 'Empath', 'Homemaker'],
    strengths: ['Nurturing', 'Intuitive', 'Loyal', 'Protective', 'Imaginative'],
    challenges: ['Moody', 'Clingy', 'Oversensitive', 'Manipulative'],
    description: 'Cancer is the mother of the zodiac, deeply connected to emotions and home. They create safe havens and nurture those they love. Their intuition runs deep, tied to lunar cycles.',
    compatibility: ['Scorpio', 'Pisces', 'Taurus', 'Virgo'],
    bodyPart: 'Chest/Stomach',
    color: 'Silver/White',
    cssColor: '#e2e8f0'
  },
  {
    name: 'Leo', answer: "Dramatically", symbol: '♌', element: 'Fire', modality: 'Fixed',
    ruler: 'Sun', dates: 'Jul 23 - Aug 22',
    keywords: ['Performer', 'Creator', 'King/Queen', 'Entertainer'],
    strengths: ['Creative', 'Generous', 'Warm-hearted', 'Confident', 'Charismatic'],
    challenges: ['Arrogant', 'Dramatic', 'Domineering', 'Attention-seeking'],
    description: 'Leo is the performer, radiating warmth and creativity. They need to express themselves and be recognized. Natural leaders with big hearts, they inspire and entertain.',
    compatibility: ['Aries', 'Sagittarius', 'Gemini', 'Libra'],
    bodyPart: 'Heart/Spine',
    color: 'Gold/Orange',
    cssColor: '#f59e0b'
  },
  {
    name: 'Virgo', answer: "Precisely", symbol: '♍', element: 'Earth', modality: 'Mutable',
    ruler: 'Mercury', dates: 'Aug 23 - Sep 22',
    keywords: ['Analyst', 'Healer', 'Perfectionist', 'Server'],
    strengths: ['Analytical', 'Practical', 'Diligent', 'Helpful', 'Detail-oriented'],
    challenges: ['Critical', 'Worrying', 'Perfectionist', 'Overly cautious'],
    description: 'Virgo is the analyst, seeking to improve and perfect. They serve others through practical help and attention to detail. Health-conscious and organized, they create order from chaos.',
    compatibility: ['Taurus', 'Capricorn', 'Cancer', 'Scorpio'],
    bodyPart: 'Digestive System',
    color: 'Navy/Green',
    cssColor: '#65a30d'
  },
  {
    name: 'Libra', answer: "Harmoniously", symbol: '♎', element: 'Air', modality: 'Cardinal',
    ruler: 'Venus', dates: 'Sep 23 - Oct 22',
    keywords: ['Diplomat', 'Partner', 'Artist', 'Peacemaker'],
    strengths: ['Diplomatic', 'Fair', 'Romantic', 'Charming', 'Aesthetic'],
    challenges: ['Indecisive', 'People-pleasing', 'Avoids conflict', 'Self-pitying'],
    description: 'Libra is the diplomat, seeking balance and harmony. They value relationships, beauty, and fairness. Natural mediators, they see all sides and create beauty wherever they go.',
    compatibility: ['Gemini', 'Aquarius', 'Leo', 'Sagittarius'],
    bodyPart: 'Kidneys/Lower Back',
    color: 'Pink/Blue',
    cssColor: '#ec4899'
  },
  {
    name: 'Scorpio', answer: "Intensely", symbol: '♏', element: 'Water', modality: 'Fixed',
    ruler: 'Pluto/Mars', dates: 'Oct 23 - Nov 21',
    keywords: ['Transformer', 'Detective', 'Healer', 'Phoenix'],
    strengths: ['Passionate', 'Resourceful', 'Brave', 'Loyal', 'Perceptive'],
    challenges: ['Jealous', 'Secretive', 'Manipulative', 'Obsessive'],
    description: 'Scorpio is the transformer, diving deep into life\'s mysteries. They feel intensely and seek truth beneath surfaces. Through cycles of death and rebirth, they become powerful healers.',
    compatibility: ['Cancer', 'Pisces', 'Virgo', 'Capricorn'],
    bodyPart: 'Reproductive Organs',
    color: 'Black/Maroon',
    cssColor: '#991b1b'
  },
  {
    name: 'Sagittarius', answer: "Freely", symbol: '♐', element: 'Fire', modality: 'Mutable',
    ruler: 'Jupiter', dates: 'Nov 22 - Dec 21',
    keywords: ['Explorer', 'Philosopher', 'Teacher', 'Adventurer'],
    strengths: ['Optimistic', 'Adventurous', 'Honest', 'Philosophical', 'Generous'],
    challenges: ['Careless', 'Tactless', 'Restless', 'Overconfident'],
    description: 'Sagittarius is the explorer, seeking meaning and adventure. They need freedom to roam physically and mentally. Natural philosophers and teachers, they inspire others to expand.',
    compatibility: ['Aries', 'Leo', 'Libra', 'Aquarius'],
    bodyPart: 'Hips/Thighs',
    color: 'Purple',
    cssColor: '#7c3aed'
  },
  {
    name: 'Capricorn', answer: "Ambitiously", symbol: '♑', element: 'Earth', modality: 'Cardinal',
    ruler: 'Saturn', dates: 'Dec 22 - Jan 19',
    keywords: ['Achiever', 'Authority', 'Builder', 'Elder'],
    strengths: ['Disciplined', 'Responsible', 'Ambitious', 'Patient', 'Practical'],
    challenges: ['Pessimistic', 'Workaholic', 'Cold', 'Rigid'],
    description: 'Capricorn is the achiever, climbing steadily toward mastery. They build lasting structures and legacy. Responsible and ambitious, they understand that time and effort create success.',
    compatibility: ['Taurus', 'Virgo', 'Scorpio', 'Pisces'],
    bodyPart: 'Knees/Bones',
    color: 'Brown/Black',
    cssColor: '#78716c'
  },
  {
    name: 'Aquarius', answer: "Uniquely", symbol: '♒', element: 'Air', modality: 'Fixed',
    ruler: 'Uranus/Saturn', dates: 'Jan 20 - Feb 18',
    keywords: ['Visionary', 'Humanitarian', 'Rebel', 'Innovator'],
    strengths: ['Progressive', 'Original', 'Independent', 'Humanitarian', 'Inventive'],
    challenges: ['Detached', 'Unpredictable', 'Stubborn', 'Aloof'],
    description: 'Aquarius is the visionary, seeing future possibilities. They value individuality and humanitarian ideals. Innovative and unconventional, they challenge the status quo for collective progress.',
    compatibility: ['Gemini', 'Libra', 'Aries', 'Sagittarius'],
    bodyPart: 'Ankles/Circulation',
    color: 'Electric Blue',
    cssColor: '#06b6d4'
  },
  {
    name: 'Pisces', answer: "Intuitively", symbol: '♓', element: 'Water', modality: 'Mutable',
    ruler: 'Neptune/Jupiter', dates: 'Feb 19 - Mar 20',
    keywords: ['Mystic', 'Dreamer', 'Healer', 'Artist'],
    strengths: ['Compassionate', 'Artistic', 'Intuitive', 'Gentle', 'Wise'],
    challenges: ['Escapist', 'Overly trusting', 'Victim mentality', 'Fearful'],
    description: 'Pisces is the mystic, dissolving boundaries between worlds. They feel everything deeply and connect to universal consciousness. Creative and compassionate, they heal through art and empathy.',
    compatibility: ['Cancer', 'Scorpio', 'Taurus', 'Capricorn'],
    bodyPart: 'Feet',
    color: 'Sea Green/Violet',
    cssColor: '#8b5cf6'
  }
];

export const CHINESE_ZODIAC_YEARS = [
  "Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox",
  "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat"
];

// ==========================================
// ASTRONOMICAL CALCULATIONS
// ==========================================

// Convert date to Julian Day Number
export const dateToJD = (year: number, month: number, day: number, hour: number = 0): number => {
  if (month <= 2) {
    year -= 1;
    month += 12;
  }
  const A = Math.floor(year / 100);
  const B = 2 - A + Math.floor(A / 4);
  return Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + hour / 24 + B - 1524.5;
};

// Julian centuries from J2000.0
export const julianCenturies = (jd: number): number => {
  return (jd - 2451545.0) / 36525;
};

// Normalize angle to 0-360
export const normalizeAngle = (angle: number): number => {
  let a = angle % 360;
  if (a < 0) a += 360;
  return a;
};

// Normalize longitude to -180 to 180
export const normalizeLng = (lng: number): number => {
  let n = lng % 360;
  if (n > 180) n -= 360;
  if (n < -180) n += 360;
  return n;
};

// Calculate Sun's ecliptic longitude (accurate to ~0.01°)
export const sunLongitude = (jd: number): number => {
  const T = julianCenturies(jd);
  // Mean longitude
  const L0 = normalizeAngle(280.46646 + 36000.76983 * T + 0.0003032 * T * T);
  // Mean anomaly
  const M = normalizeAngle(357.52911 + 35999.05029 * T - 0.0001537 * T * T);
  const Mrad = M * Math.PI / 180;
  // Equation of center
  const C = (1.914602 - 0.004817 * T) * Math.sin(Mrad) +
            (0.019993 - 0.000101 * T) * Math.sin(2 * Mrad) +
            0.000289 * Math.sin(3 * Mrad);
  // True longitude
  return normalizeAngle(L0 + C);
};

// Calculate Moon's ecliptic longitude (simplified, accurate to ~1°)
export const moonLongitude = (jd: number): number => {
  const T = julianCenturies(jd);
  // Mean longitude
  const Lp = normalizeAngle(218.3165 + 481267.8813 * T);
  // Mean elongation
  const D = normalizeAngle(297.8502 + 445267.1115 * T);
  // Mean anomaly of Moon
  const M = normalizeAngle(134.9634 + 477198.8675 * T);
  // Mean anomaly of Sun
  const Mp = normalizeAngle(357.5291 + 35999.0503 * T);
  // Argument of latitude
  const F = normalizeAngle(93.2721 + 483202.0175 * T);

  const Drad = D * Math.PI / 180;
  const Mrad = M * Math.PI / 180;
  const Mprad = Mp * Math.PI / 180;
  const Frad = F * Math.PI / 180;

  // Main periodic terms
  const longitude = Lp +
    6.289 * Math.sin(Mrad) +
    1.274 * Math.sin(2 * Drad - Mrad) +
    0.658 * Math.sin(2 * Drad) +
    0.214 * Math.sin(2 * Mrad) -
    0.186 * Math.sin(Mprad) -
    0.114 * Math.sin(2 * Frad);

  return normalizeAngle(longitude);
};

// Planetary mean longitudes (simplified Keplerian elements for J2000.0)
// More accurate than random, captures actual orbital motion
interface OrbitalElements {
  L0: number;      // Mean longitude at J2000.0
  Ldot: number;    // Mean longitude rate (degrees per century)
}

const ORBITAL_ELEMENTS: Record<string, OrbitalElements> = {
  mercury: { L0: 252.2509, Ldot: 149472.6746 },
  venus:   { L0: 181.9798, Ldot: 58517.8157 },
  mars:    { L0: 355.4330, Ldot: 19140.2993 },
  jupiter: { L0: 34.3515,  Ldot: 3034.9057 },
  saturn:  { L0: 50.0774,  Ldot: 1222.1138 },
  uranus:  { L0: 314.0550, Ldot: 428.4670 },
  neptune: { L0: 304.3487, Ldot: 218.4862 },
  pluto:   { L0: 238.9290, Ldot: 145.2078 }
};

// Calculate planetary longitude (mean longitude, simplified)
export const planetLongitude = (planetId: string, jd: number): number => {
  const T = julianCenturies(jd);

  if (planetId === 'sun') return sunLongitude(jd);
  if (planetId === 'moon') return moonLongitude(jd);

  const elements = ORBITAL_ELEMENTS[planetId];
  if (!elements) return 0;

  return normalizeAngle(elements.L0 + elements.Ldot * T);
};

// Calculate Greenwich Mean Sidereal Time (in degrees)
export const gmst = (jd: number): number => {
  const T = julianCenturies(jd);
  // GMST in degrees
  const gmst = 280.46061837 + 360.98564736629 * (jd - 2451545.0) +
               0.000387933 * T * T - T * T * T / 38710000;
  return normalizeAngle(gmst);
};

// Calculate Local Sidereal Time (in degrees)
export const lst = (jd: number, longitude: number): number => {
  return normalizeAngle(gmst(jd) + longitude);
};

// Ecliptic longitude to zodiac sign index (0-11)
export const longitudeToSignIndex = (longitude: number): number => {
  return Math.floor(normalizeAngle(longitude) / 30);
};

// Calculate MC (Midheaven) line longitude for a planet
// This is where the planet would be on the meridian
export const mcLineLongitude = (planetLng: number, birthGmst: number): number => {
  // The MC line runs where planet's ecliptic longitude equals local sidereal time
  // Simplified: MC longitude ≈ planet longitude - GMST at birth
  return normalizeLng(planetLng - birthGmst);
};

// Calculate all planetary positions for a given date/time
export interface PlanetaryPositions {
  [key: string]: number;  // ecliptic longitude in degrees
}

export const calculatePlanetaryPositions = (jd: number): PlanetaryPositions => {
  return {
    sun: sunLongitude(jd),
    moon: moonLongitude(jd),
    mercury: planetLongitude('mercury', jd),
    venus: planetLongitude('venus', jd),
    mars: planetLongitude('mars', jd),
    jupiter: planetLongitude('jupiter', jd),
    saturn: planetLongitude('saturn', jd),
    uranus: planetLongitude('uranus', jd),
    neptune: planetLongitude('neptune', jd),
    pluto: planetLongitude('pluto', jd)
  };
};

// Calculate aspect between two positions (returns aspect name or null)
export const calculateAspect = (pos1: number, pos2: number, orb: number = 8): string | null => {
  let diff = Math.abs(normalizeAngle(pos1) - normalizeAngle(pos2));
  if (diff > 180) diff = 360 - diff;

  if (Math.abs(diff - 0) <= orb) return 'Conjunction';
  if (Math.abs(diff - 60) <= orb) return 'Sextile';
  if (Math.abs(diff - 90) <= orb) return 'Square';
  if (Math.abs(diff - 120) <= orb) return 'Trine';
  if (Math.abs(diff - 180) <= orb) return 'Opposition';

  return null;
};

// ==========================================
// ASPECT DESCRIPTIONS
// ==========================================

export interface AspectInfo {
  name: string;
  symbol: string;
  degrees: number;
  nature: 'Harmonious' | 'Challenging' | 'Neutral';
  keywords: string[];
  description: string;
}

export const ASPECTS: Record<string, AspectInfo> = {
  'Conjunction': {
    name: 'Conjunction', symbol: '☌', degrees: 0, nature: 'Neutral',
    keywords: ['Fusion', 'Intensity', 'Blending', 'Focus'],
    description: 'Planets merge their energies, creating a powerful focal point. The nature depends on the planets involved. This is the most powerful aspect, representing new beginnings.'
  },
  'Sextile': {
    name: 'Sextile', symbol: '⚹', degrees: 60, nature: 'Harmonious',
    keywords: ['Opportunity', 'Talent', 'Communication', 'Growth'],
    description: 'A gentle, supportive aspect that creates opportunities. Requires some effort to activate but brings natural talents and easy communication between planetary energies.'
  },
  'Square': {
    name: 'Square', symbol: '□', degrees: 90, nature: 'Challenging',
    keywords: ['Tension', 'Action', 'Challenge', 'Growth through conflict'],
    description: 'Creates friction and tension that demands action. While challenging, squares drive personal growth and achievement. They represent internal conflicts that push you forward.'
  },
  'Trine': {
    name: 'Trine', symbol: '△', degrees: 120, nature: 'Harmonious',
    keywords: ['Ease', 'Flow', 'Talent', 'Blessing'],
    description: 'The most harmonious aspect, creating natural flow and ease. Represents innate talents and areas of life that come easily. Can sometimes lead to complacency if not consciously developed.'
  },
  'Opposition': {
    name: 'Opposition', symbol: '☍', degrees: 180, nature: 'Challenging',
    keywords: ['Awareness', 'Balance', 'Projection', 'Integration'],
    description: 'Creates awareness through polarity. Often experienced through relationships and projection. The goal is integration of opposing forces, finding balance between extremes.'
  }
};

// ==========================================
// LUNAR CALCULATIONS
// ==========================================

export interface MoonPhaseInfo {
  name: string;
  emoji: string;
  illumination: number;
  keywords: string[];
  description: string;
  bestFor: string[];
}

export const MOON_PHASES: MoonPhaseInfo[] = [
  {
    name: 'New Moon', emoji: '🌑', illumination: 0,
    keywords: ['Beginnings', 'Intention', 'Planting seeds'],
    description: 'Time of new beginnings. Set intentions, start new projects, plant seeds for the future. Energy is inward and reflective.',
    bestFor: ['Setting intentions', 'New beginnings', 'Meditation', 'Planning']
  },
  {
    name: 'Waxing Crescent', emoji: '🌒', illumination: 12.5,
    keywords: ['Emergence', 'Intention', 'Hope'],
    description: 'First light appears. Take initial action on intentions. A time of hope and determination as plans begin to take shape.',
    bestFor: ['Taking first steps', 'Building momentum', 'Affirmations']
  },
  {
    name: 'First Quarter', emoji: '🌓', illumination: 25,
    keywords: ['Action', 'Decision', 'Commitment'],
    description: 'Time of action and decision. Challenges may arise that test your commitment. Push through obstacles and stay focused.',
    bestFor: ['Making decisions', 'Taking action', 'Overcoming obstacles']
  },
  {
    name: 'Waxing Gibbous', emoji: '🌔', illumination: 37.5,
    keywords: ['Refinement', 'Adjustment', 'Development'],
    description: 'Refine and adjust your approach. Edit, improve, and develop what you\'ve started. Almost there—patience and persistence.',
    bestFor: ['Refining plans', 'Making adjustments', 'Patience']
  },
  {
    name: 'Full Moon', emoji: '🌕', illumination: 50,
    keywords: ['Culmination', 'Illumination', 'Harvest'],
    description: 'Peak energy and illumination. Harvest results, celebrate achievements, release what no longer serves. Emotions run high.',
    bestFor: ['Celebrating', 'Releasing', 'Manifestation', 'Ritual']
  },
  {
    name: 'Waning Gibbous', emoji: '🌖', illumination: 62.5,
    keywords: ['Gratitude', 'Sharing', 'Teaching'],
    description: 'Time of gratitude and sharing wisdom. Teach others what you\'ve learned. Begin to turn inward and reflect.',
    bestFor: ['Gratitude practice', 'Sharing knowledge', 'Teaching']
  },
  {
    name: 'Last Quarter', emoji: '🌗', illumination: 75,
    keywords: ['Release', 'Forgiveness', 'Letting go'],
    description: 'Release and let go of what didn\'t work. Forgive yourself and others. Clear space for the next cycle.',
    bestFor: ['Releasing', 'Forgiving', 'Clearing clutter', 'Endings']
  },
  {
    name: 'Waning Crescent', emoji: '🌘', illumination: 87.5,
    keywords: ['Rest', 'Surrender', 'Healing'],
    description: 'Time of rest and surrender. Retreat, heal, and prepare for renewal. Honor the void before the new cycle begins.',
    bestFor: ['Resting', 'Healing', 'Meditation', 'Surrender']
  }
];

// Calculate moon phase from sun and moon longitudes
export const calculateMoonPhase = (sunLng: number, moonLng: number): MoonPhaseInfo => {
  let phase = normalizeAngle(moonLng - sunLng);
  const phaseIndex = Math.floor(phase / 45) % 8;
  return MOON_PHASES[phaseIndex];
};

// Calculate moon age in days (0-29.5)
export const calculateMoonAge = (sunLng: number, moonLng: number): number => {
  const phase = normalizeAngle(moonLng - sunLng);
  return (phase / 360) * 29.53;
};

// Calculate lunar nodes (mean nodes - simplified)
export const calculateLunarNodes = (jd: number): { north: number; south: number } => {
  const T = julianCenturies(jd);
  // Mean longitude of ascending node
  const northNode = normalizeAngle(125.0445 - 1934.1363 * T);
  const southNode = normalizeAngle(northNode + 180);
  return { north: northNode, south: southNode };
};

// ==========================================
// HOUSE SYSTEM (Simplified Equal Houses)
// ==========================================

export interface HouseInfo {
  number: number;
  name: string;
  keywords: string[];
  description: string;
  ruledBy: string;
  lifeArea: string;
}

export const HOUSES: HouseInfo[] = [
  {
    number: 1, name: 'First House', keywords: ['Self', 'Identity', 'Appearance'],
    description: 'The house of self, physical body, and first impressions. How you present yourself to the world.',
    ruledBy: 'Aries/Mars', lifeArea: 'Self-image & Identity'
  },
  {
    number: 2, name: 'Second House', keywords: ['Values', 'Money', 'Possessions'],
    description: 'The house of personal resources, values, and self-worth. What you own and value.',
    ruledBy: 'Taurus/Venus', lifeArea: 'Finances & Values'
  },
  {
    number: 3, name: 'Third House', keywords: ['Communication', 'Siblings', 'Learning'],
    description: 'The house of communication, short trips, siblings, and early education.',
    ruledBy: 'Gemini/Mercury', lifeArea: 'Communication & Mind'
  },
  {
    number: 4, name: 'Fourth House', keywords: ['Home', 'Family', 'Roots'],
    description: 'The house of home, family, ancestry, and emotional foundations. Your private self.',
    ruledBy: 'Cancer/Moon', lifeArea: 'Home & Family'
  },
  {
    number: 5, name: 'Fifth House', keywords: ['Creativity', 'Romance', 'Children'],
    description: 'The house of creativity, pleasure, romance, and children. Self-expression and joy.',
    ruledBy: 'Leo/Sun', lifeArea: 'Creativity & Pleasure'
  },
  {
    number: 6, name: 'Sixth House', keywords: ['Health', 'Work', 'Service'],
    description: 'The house of daily routines, health, work, and service to others.',
    ruledBy: 'Virgo/Mercury', lifeArea: 'Health & Daily Life'
  },
  {
    number: 7, name: 'Seventh House', keywords: ['Partnership', 'Marriage', 'Others'],
    description: 'The house of partnerships, marriage, contracts, and open enemies.',
    ruledBy: 'Libra/Venus', lifeArea: 'Relationships & Partners'
  },
  {
    number: 8, name: 'Eighth House', keywords: ['Transformation', 'Shared Resources', 'Death'],
    description: 'The house of transformation, shared resources, sexuality, death, and rebirth.',
    ruledBy: 'Scorpio/Pluto', lifeArea: 'Transformation & Intimacy'
  },
  {
    number: 9, name: 'Ninth House', keywords: ['Philosophy', 'Travel', 'Higher Learning'],
    description: 'The house of higher education, philosophy, long-distance travel, and spirituality.',
    ruledBy: 'Sagittarius/Jupiter', lifeArea: 'Expansion & Beliefs'
  },
  {
    number: 10, name: 'Tenth House', keywords: ['Career', 'Reputation', 'Public Image'],
    description: 'The house of career, public reputation, authority, and life goals. Your public self.',
    ruledBy: 'Capricorn/Saturn', lifeArea: 'Career & Legacy'
  },
  {
    number: 11, name: 'Eleventh House', keywords: ['Friends', 'Groups', 'Hopes'],
    description: 'The house of friendships, groups, hopes and wishes, and humanitarian causes.',
    ruledBy: 'Aquarius/Uranus', lifeArea: 'Community & Dreams'
  },
  {
    number: 12, name: 'Twelfth House', keywords: ['Subconscious', 'Spirituality', 'Isolation'],
    description: 'The house of the subconscious, spirituality, hidden enemies, and self-undoing. The collective unconscious.',
    ruledBy: 'Pisces/Neptune', lifeArea: 'Spirituality & Hidden Self'
  }
];

// ==========================================
// ELEMENT & MODALITY ANALYSIS
// ==========================================

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

export const analyzeElements = (signs: string[]): ElementBalance => {
  const counts = { fire: 0, earth: 0, air: 0, water: 0 };

  signs.forEach(signName => {
    const sign = ZODIAC_DATA.find(z => z.name === signName);
    if (sign) {
      counts[sign.element.toLowerCase() as keyof typeof counts]++;
    }
  });

  const entries = Object.entries(counts);
  const dominant = entries.reduce((a, b) => a[1] > b[1] ? a : b)[0];
  const lacking = entries.reduce((a, b) => a[1] < b[1] ? a : b)[0];

  return { ...counts, dominant, lacking };
};

export const analyzeModalities = (signs: string[]): ModalityBalance => {
  const counts = { cardinal: 0, fixed: 0, mutable: 0 };

  signs.forEach(signName => {
    const sign = ZODIAC_DATA.find(z => z.name === signName);
    if (sign) {
      counts[sign.modality.toLowerCase() as keyof typeof counts]++;
    }
  });

  const dominant = Object.entries(counts).reduce((a, b) => a[1] > b[1] ? a : b)[0];

  return { ...counts, dominant };
};

export const ELEMENT_MEANINGS: Record<string, { keywords: string[]; description: string }> = {
  fire: {
    keywords: ['Passion', 'Energy', 'Inspiration', 'Action'],
    description: 'Fire signs are passionate, dynamic, and temperamental. They get angry quickly but also forgive easily. They bring warmth, creativity, and leadership.'
  },
  earth: {
    keywords: ['Stability', 'Practicality', 'Material', 'Grounding'],
    description: 'Earth signs are grounded, practical, and reliable. They value stability, material security, and tangible results. They build lasting foundations.'
  },
  air: {
    keywords: ['Intellect', 'Communication', 'Ideas', 'Social'],
    description: 'Air signs are intellectual, communicative, and social. They love ideas, conversation, and mental stimulation. They connect people and concepts.'
  },
  water: {
    keywords: ['Emotion', 'Intuition', 'Depth', 'Sensitivity'],
    description: 'Water signs are emotional, intuitive, and deeply sensitive. They feel everything profoundly and have strong psychic abilities. They nurture and heal.'
  }
};

export const MODALITY_MEANINGS: Record<string, { keywords: string[]; description: string }> = {
  cardinal: {
    keywords: ['Initiative', 'Leadership', 'Action', 'Beginnings'],
    description: 'Cardinal signs initiate action and lead the way. They start new projects and take charge. They mark the beginning of each season.'
  },
  fixed: {
    keywords: ['Stability', 'Persistence', 'Determination', 'Maintenance'],
    description: 'Fixed signs maintain and stabilize. They are persistent, determined, and sometimes stubborn. They sustain what cardinal signs begin.'
  },
  mutable: {
    keywords: ['Adaptability', 'Flexibility', 'Change', 'Transition'],
    description: 'Mutable signs adapt and change. They are flexible, versatile, and transitional. They prepare the way for new beginnings.'
  }
};

// ==========================================
// CHINESE ZODIAC DETAILS
// ==========================================

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

export const CHINESE_ZODIAC: ChineseZodiacInfo[] = [
  {
    name: 'Rat', emoji: '🐀', element: 'Water', yinYang: 'Yang',
    traits: ['Quick-witted', 'Resourceful', 'Versatile', 'Kind'],
    compatible: ['Dragon', 'Monkey', 'Ox'],
    incompatible: ['Horse', 'Goat'],
    luckyNumbers: [2, 3],
    luckyColors: ['Blue', 'Gold', 'Green'],
    description: 'The Rat is clever, quick-witted, and resourceful. They are charming and can adapt to any situation.'
  },
  {
    name: 'Ox', emoji: '🐂', element: 'Earth', yinYang: 'Yin',
    traits: ['Diligent', 'Dependable', 'Strong', 'Determined'],
    compatible: ['Rat', 'Snake', 'Rooster'],
    incompatible: ['Tiger', 'Dragon', 'Horse', 'Goat'],
    luckyNumbers: [1, 4],
    luckyColors: ['White', 'Yellow', 'Green'],
    description: 'The Ox is strong, reliable, and fair. They are determined workers who achieve through steady effort.'
  },
  {
    name: 'Tiger', emoji: '🐅', element: 'Wood', yinYang: 'Yang',
    traits: ['Brave', 'Competitive', 'Confident', 'Unpredictable'],
    compatible: ['Dragon', 'Horse', 'Pig'],
    incompatible: ['Ox', 'Tiger', 'Snake', 'Monkey'],
    luckyNumbers: [1, 3, 4],
    luckyColors: ['Blue', 'Gray', 'Orange'],
    description: 'The Tiger is brave, competitive, and confident. They are natural leaders who inspire others.'
  },
  {
    name: 'Rabbit', emoji: '🐇', element: 'Wood', yinYang: 'Yin',
    traits: ['Quiet', 'Elegant', 'Kind', 'Responsible'],
    compatible: ['Goat', 'Monkey', 'Dog', 'Pig'],
    incompatible: ['Snake', 'Rooster'],
    luckyNumbers: [3, 4, 6],
    luckyColors: ['Red', 'Pink', 'Purple', 'Blue'],
    description: 'The Rabbit is gentle, quiet, and elegant. They are responsible and have excellent taste.'
  },
  {
    name: 'Dragon', emoji: '🐉', element: 'Earth', yinYang: 'Yang',
    traits: ['Confident', 'Intelligent', 'Enthusiastic', 'Ambitious'],
    compatible: ['Rooster', 'Rat', 'Monkey'],
    incompatible: ['Ox', 'Goat', 'Dog'],
    luckyNumbers: [1, 6, 7],
    luckyColors: ['Gold', 'Silver', 'Gray'],
    description: 'The Dragon is powerful, ambitious, and charismatic. They are natural-born leaders destined for greatness.'
  },
  {
    name: 'Snake', emoji: '🐍', element: 'Fire', yinYang: 'Yin',
    traits: ['Enigmatic', 'Intelligent', 'Wise', 'Graceful'],
    compatible: ['Dragon', 'Rooster', 'Ox'],
    incompatible: ['Tiger', 'Rabbit', 'Snake', 'Goat', 'Pig'],
    luckyNumbers: [2, 8, 9],
    luckyColors: ['Black', 'Red', 'Yellow'],
    description: 'The Snake is wise, enigmatic, and intuitive. They are deep thinkers who value knowledge.'
  },
  {
    name: 'Horse', emoji: '🐴', element: 'Fire', yinYang: 'Yang',
    traits: ['Animated', 'Active', 'Energetic', 'Free-spirited'],
    compatible: ['Tiger', 'Goat', 'Rabbit'],
    incompatible: ['Rat', 'Ox', 'Rooster', 'Horse'],
    luckyNumbers: [2, 3, 7],
    luckyColors: ['Yellow', 'Green'],
    description: 'The Horse is energetic, free-spirited, and independent. They love adventure and hate routine.'
  },
  {
    name: 'Goat', emoji: '🐐', element: 'Earth', yinYang: 'Yin',
    traits: ['Calm', 'Gentle', 'Sympathetic', 'Creative'],
    compatible: ['Rabbit', 'Horse', 'Pig'],
    incompatible: ['Ox', 'Tiger', 'Dog'],
    luckyNumbers: [2, 7],
    luckyColors: ['Brown', 'Red', 'Purple'],
    description: 'The Goat is gentle, calm, and artistic. They are creative souls who appreciate beauty.'
  },
  {
    name: 'Monkey', emoji: '🐒', element: 'Metal', yinYang: 'Yang',
    traits: ['Sharp', 'Smart', 'Curious', 'Mischievous'],
    compatible: ['Ox', 'Rabbit'],
    incompatible: ['Tiger', 'Pig'],
    luckyNumbers: [4, 9],
    luckyColors: ['White', 'Blue', 'Gold'],
    description: 'The Monkey is clever, curious, and mischievous. They are quick learners who love to solve problems.'
  },
  {
    name: 'Rooster', emoji: '🐓', element: 'Metal', yinYang: 'Yin',
    traits: ['Observant', 'Hardworking', 'Courageous', 'Confident'],
    compatible: ['Ox', 'Snake'],
    incompatible: ['Rat', 'Rabbit', 'Horse', 'Rooster', 'Dog'],
    luckyNumbers: [5, 7, 8],
    luckyColors: ['Gold', 'Brown', 'Yellow'],
    description: 'The Rooster is observant, hardworking, and courageous. They are perfectionists who take pride in their work.'
  },
  {
    name: 'Dog', emoji: '🐕', element: 'Earth', yinYang: 'Yang',
    traits: ['Loyal', 'Honest', 'Amiable', 'Kind'],
    compatible: ['Rabbit'],
    incompatible: ['Dragon', 'Goat', 'Rooster'],
    luckyNumbers: [3, 4, 9],
    luckyColors: ['Red', 'Green', 'Purple'],
    description: 'The Dog is loyal, honest, and kind. They are faithful companions who value justice.'
  },
  {
    name: 'Pig', emoji: '🐷', element: 'Water', yinYang: 'Yin',
    traits: ['Compassionate', 'Generous', 'Diligent', 'Trusting'],
    compatible: ['Tiger', 'Rabbit', 'Goat'],
    incompatible: ['Snake', 'Monkey'],
    luckyNumbers: [2, 5, 8],
    luckyColors: ['Yellow', 'Gray', 'Brown', 'Gold'],
    description: 'The Pig is compassionate, generous, and diligent. They have a great sense of responsibility.'
  }
];

export const getChineseZodiac = (year: number): ChineseZodiacInfo => {
  const animals = ['Monkey', 'Rooster', 'Dog', 'Pig', 'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat'];
  const index = year % 12;
  const animalName = animals[index];
  return CHINESE_ZODIAC.find(z => z.name === animalName) || CHINESE_ZODIAC[0];
};

// Chinese Five Elements cycle (changes every 2 years)
export const getChineseElement = (year: number): string => {
  const elements = ['Metal', 'Water', 'Wood', 'Fire', 'Earth'];
  return elements[Math.floor((year - 4) / 2) % 5];
};
