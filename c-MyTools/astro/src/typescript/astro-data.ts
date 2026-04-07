import type { City, PlanetInfo, ZodiacInfo, AspectInfo, MoonPhaseInfo, ChineseZodiacInfo } from './types';

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

export const PLANETS: PlanetInfo[] = [
  {
    id: 'sun', name: 'Sun', symbol: '☉', color: 0xfbbf24, cssColor: '#fbbf24',
    question: "Who am I?",
    keywords: ['Identity', 'Ego', 'Vitality', 'Purpose', 'Father', 'Authority'],
    rules: ['Leo'], exalted: 'Aries', detriment: 'Aquarius', fall: 'Libra',
    element: 'Fire',
    description: 'The Sun represents your core identity, ego, and life purpose. It shows how you express yourself and where you shine brightest.',
    bodyParts: ['Heart', 'Spine', 'Right Eye'], dayOfWeek: 'Sunday', orbitalPeriod: '1 year'
  },
  {
    id: 'moon', name: 'Moon', symbol: '☽', color: 0xe2e8f0, cssColor: '#e2e8f0',
    question: "What do I need?",
    keywords: ['Emotions', 'Intuition', 'Mother', 'Habits', 'Memory', 'Nurturing'],
    rules: ['Cancer'], exalted: 'Taurus', detriment: 'Capricorn', fall: 'Scorpio',
    element: 'Water',
    description: 'The Moon governs your emotional nature, instincts, and subconscious mind. It represents your inner child and emotional needs.',
    bodyParts: ['Stomach', 'Breasts', 'Left Eye', 'Bodily Fluids'], dayOfWeek: 'Monday', orbitalPeriod: '28 days'
  },
  {
    id: 'mercury', name: 'Mercury', symbol: '☿', color: 0xa5f3fc, cssColor: '#a5f3fc',
    question: "How do I think?",
    keywords: ['Communication', 'Intellect', 'Learning', 'Travel', 'Siblings', 'Logic'],
    rules: ['Gemini', 'Virgo'], exalted: 'Virgo', detriment: 'Sagittarius', fall: 'Pisces',
    element: 'Air/Earth',
    description: 'Mercury rules communication, thought processes, and how you learn and share information.',
    bodyParts: ['Nervous System', 'Lungs', 'Arms', 'Hands'], dayOfWeek: 'Wednesday', orbitalPeriod: '88 days'
  },
  {
    id: 'venus', name: 'Venus', symbol: '♀', color: 0xf472b6, cssColor: '#f472b6',
    question: "What do I love?",
    keywords: ['Love', 'Beauty', 'Harmony', 'Values', 'Money', 'Pleasure'],
    rules: ['Taurus', 'Libra'], exalted: 'Pisces', detriment: 'Aries', fall: 'Virgo',
    element: 'Earth/Air',
    description: 'Venus represents love, beauty, and what you value. It shows how you attract and relate to others.',
    bodyParts: ['Throat', 'Kidneys', 'Skin', 'Veins'], dayOfWeek: 'Friday', orbitalPeriod: '225 days'
  },
  {
    id: 'mars', name: 'Mars', symbol: '♂', color: 0xef4444, cssColor: '#ef4444',
    question: "How do I act?",
    keywords: ['Action', 'Desire', 'Aggression', 'Energy', 'Courage', 'Competition'],
    rules: ['Aries', 'Scorpio'], exalted: 'Capricorn', detriment: 'Libra', fall: 'Cancer',
    element: 'Fire',
    description: 'Mars is the warrior planet of action, desire, and drive. It shows how you assert yourself and pursue goals.',
    bodyParts: ['Muscles', 'Blood', 'Head', 'Adrenal Glands'], dayOfWeek: 'Tuesday', orbitalPeriod: '687 days'
  },
  {
    id: 'jupiter', name: 'Jupiter', symbol: '♃', color: 0x8b5cf6, cssColor: '#8b5cf6',
    question: "Where do I grow?",
    keywords: ['Expansion', 'Luck', 'Wisdom', 'Philosophy', 'Travel', 'Abundance'],
    rules: ['Sagittarius', 'Pisces'], exalted: 'Cancer', detriment: 'Gemini', fall: 'Capricorn',
    element: 'Fire',
    description: 'Jupiter is the great benefic, bringing expansion, luck, and opportunity.',
    bodyParts: ['Liver', 'Hips', 'Thighs', 'Pituitary Gland'], dayOfWeek: 'Thursday', orbitalPeriod: '12 years'
  },
  {
    id: 'saturn', name: 'Saturn', symbol: '♄', color: 0x78350f, cssColor: '#a8a29e',
    question: "What do I fear?",
    keywords: ['Structure', 'Discipline', 'Karma', 'Time', 'Limitations', 'Mastery'],
    rules: ['Capricorn', 'Aquarius'], exalted: 'Libra', detriment: 'Cancer', fall: 'Aries',
    element: 'Earth',
    description: 'Saturn is the taskmaster, representing discipline, responsibility, and life lessons.',
    bodyParts: ['Bones', 'Teeth', 'Skin', 'Knees'], dayOfWeek: 'Saturday', orbitalPeriod: '29 years'
  },
  {
    id: 'uranus', name: 'Uranus', symbol: '♅', color: 0x22d3ee, cssColor: '#22d3ee',
    question: "How do I rebel?",
    keywords: ['Revolution', 'Innovation', 'Freedom', 'Awakening', 'Eccentricity', 'Technology'],
    rules: ['Aquarius'], exalted: 'Scorpio', detriment: 'Leo', fall: 'Taurus',
    element: 'Air',
    description: 'Uranus is the awakener, bringing sudden change, innovation, and liberation.',
    bodyParts: ['Nervous System', 'Ankles', 'Circulation'], orbitalPeriod: '84 years'
  },
  {
    id: 'neptune', name: 'Neptune', symbol: '♆', color: 0x60a5fa, cssColor: '#60a5fa',
    question: "What do I dream?",
    keywords: ['Dreams', 'Illusion', 'Spirituality', 'Compassion', 'Art', 'Transcendence'],
    rules: ['Pisces'], exalted: 'Leo', detriment: 'Virgo', fall: 'Aquarius',
    element: 'Water',
    description: 'Neptune dissolves boundaries between reality and dreams. It governs spirituality, imagination, and compassion.',
    bodyParts: ['Pineal Gland', 'Feet', 'Lymphatic System'], orbitalPeriod: '165 years'
  },
  {
    id: 'pluto', name: 'Pluto', symbol: '♇', color: 0x4c1d95, cssColor: '#a855f7',
    question: "How do I transform?",
    keywords: ['Transformation', 'Power', 'Death/Rebirth', 'Obsession', 'Shadow', 'Regeneration'],
    rules: ['Scorpio'], exalted: 'Aries', detriment: 'Taurus', fall: 'Libra',
    element: 'Water',
    description: 'Pluto is the planet of deep transformation, death, and rebirth.',
    bodyParts: ['Reproductive Organs', 'Colon', 'Elimination'], orbitalPeriod: '248 years'
  }
];

export const ZODIAC_DATA: ZodiacInfo[] = [
  {
    name: 'Aries', answer: "Boldly", symbol: '♈', element: 'Fire', modality: 'Cardinal',
    ruler: 'Mars', dates: 'Mar 21 - Apr 19',
    keywords: ['Pioneer', 'Leader', 'Warrior', 'Initiator'],
    strengths: ['Courageous', 'Determined', 'Confident', 'Enthusiastic', 'Honest'],
    challenges: ['Impatient', 'Impulsive', 'Aggressive', 'Self-centered'],
    description: 'Aries is the first sign, representing new beginnings and raw energy. Natural leaders who charge ahead fearlessly.',
    compatibility: ['Leo', 'Sagittarius', 'Gemini', 'Aquarius'],
    bodyPart: 'Head', color: 'Red', cssColor: '#ef4444'
  },
  {
    name: 'Taurus', answer: "Steadily", symbol: '♉', element: 'Earth', modality: 'Fixed',
    ruler: 'Venus', dates: 'Apr 20 - May 20',
    keywords: ['Builder', 'Provider', 'Sensualist', 'Stabilizer'],
    strengths: ['Reliable', 'Patient', 'Practical', 'Devoted', 'Sensual'],
    challenges: ['Stubborn', 'Possessive', 'Materialistic', 'Resistant to change'],
    description: 'Taurus is the builder of the zodiac, creating lasting foundations. Patient and determined.',
    compatibility: ['Virgo', 'Capricorn', 'Cancer', 'Pisces'],
    bodyPart: 'Neck/Throat', color: 'Green', cssColor: '#22c55e'
  },
  {
    name: 'Gemini', answer: "Curiously", symbol: '♊', element: 'Air', modality: 'Mutable',
    ruler: 'Mercury', dates: 'May 21 - Jun 20',
    keywords: ['Communicator', 'Thinker', 'Connector', 'Storyteller'],
    strengths: ['Adaptable', 'Witty', 'Intellectual', 'Versatile', 'Communicative'],
    challenges: ['Inconsistent', 'Nervous', 'Superficial', 'Indecisive'],
    description: 'Gemini is the messenger, forever curious and mentally active. Quick-witted and social.',
    compatibility: ['Libra', 'Aquarius', 'Aries', 'Leo'],
    bodyPart: 'Arms/Hands/Lungs', color: 'Yellow', cssColor: '#eab308'
  },
  {
    name: 'Cancer', answer: "Protectively", symbol: '♋', element: 'Water', modality: 'Cardinal',
    ruler: 'Moon', dates: 'Jun 21 - Jul 22',
    keywords: ['Nurturer', 'Protector', 'Empath', 'Homemaker'],
    strengths: ['Nurturing', 'Intuitive', 'Loyal', 'Protective', 'Imaginative'],
    challenges: ['Moody', 'Clingy', 'Oversensitive', 'Manipulative'],
    description: 'Cancer is the mother of the zodiac, deeply connected to emotions and home.',
    compatibility: ['Scorpio', 'Pisces', 'Taurus', 'Virgo'],
    bodyPart: 'Chest/Stomach', color: 'Silver/White', cssColor: '#e2e8f0'
  },
  {
    name: 'Leo', answer: "Dramatically", symbol: '♌', element: 'Fire', modality: 'Fixed',
    ruler: 'Sun', dates: 'Jul 23 - Aug 22',
    keywords: ['Performer', 'Creator', 'King/Queen', 'Entertainer'],
    strengths: ['Creative', 'Generous', 'Warm-hearted', 'Confident', 'Charismatic'],
    challenges: ['Arrogant', 'Dramatic', 'Domineering', 'Attention-seeking'],
    description: 'Leo is the performer, radiating warmth and creativity. Natural leaders with big hearts.',
    compatibility: ['Aries', 'Sagittarius', 'Gemini', 'Libra'],
    bodyPart: 'Heart/Spine', color: 'Gold/Orange', cssColor: '#f59e0b'
  },
  {
    name: 'Virgo', answer: "Precisely", symbol: '♍', element: 'Earth', modality: 'Mutable',
    ruler: 'Mercury', dates: 'Aug 23 - Sep 22',
    keywords: ['Analyst', 'Healer', 'Perfectionist', 'Server'],
    strengths: ['Analytical', 'Practical', 'Diligent', 'Helpful', 'Detail-oriented'],
    challenges: ['Critical', 'Worrying', 'Perfectionist', 'Overly cautious'],
    description: 'Virgo is the analyst, seeking to improve and perfect. Health-conscious and organized.',
    compatibility: ['Taurus', 'Capricorn', 'Cancer', 'Scorpio'],
    bodyPart: 'Digestive System', color: 'Navy/Green', cssColor: '#65a30d'
  },
  {
    name: 'Libra', answer: "Harmoniously", symbol: '♎', element: 'Air', modality: 'Cardinal',
    ruler: 'Venus', dates: 'Sep 23 - Oct 22',
    keywords: ['Diplomat', 'Partner', 'Artist', 'Peacemaker'],
    strengths: ['Diplomatic', 'Fair', 'Romantic', 'Charming', 'Aesthetic'],
    challenges: ['Indecisive', 'People-pleasing', 'Avoids conflict', 'Self-pitying'],
    description: 'Libra is the diplomat, seeking balance and harmony. Natural mediators.',
    compatibility: ['Gemini', 'Aquarius', 'Leo', 'Sagittarius'],
    bodyPart: 'Kidneys/Lower Back', color: 'Pink/Blue', cssColor: '#ec4899'
  },
  {
    name: 'Scorpio', answer: "Intensely", symbol: '♏', element: 'Water', modality: 'Fixed',
    ruler: 'Pluto/Mars', dates: 'Oct 23 - Nov 21',
    keywords: ['Transformer', 'Detective', 'Healer', 'Phoenix'],
    strengths: ['Passionate', 'Resourceful', 'Brave', 'Loyal', 'Perceptive'],
    challenges: ['Jealous', 'Secretive', 'Manipulative', 'Obsessive'],
    description: 'Scorpio is the transformer, diving deep into life\'s mysteries.',
    compatibility: ['Cancer', 'Pisces', 'Virgo', 'Capricorn'],
    bodyPart: 'Reproductive Organs', color: 'Black/Maroon', cssColor: '#991b1b'
  },
  {
    name: 'Sagittarius', answer: "Freely", symbol: '♐', element: 'Fire', modality: 'Mutable',
    ruler: 'Jupiter', dates: 'Nov 22 - Dec 21',
    keywords: ['Explorer', 'Philosopher', 'Teacher', 'Adventurer'],
    strengths: ['Optimistic', 'Adventurous', 'Honest', 'Philosophical', 'Generous'],
    challenges: ['Careless', 'Tactless', 'Restless', 'Overconfident'],
    description: 'Sagittarius is the explorer, seeking meaning and adventure.',
    compatibility: ['Aries', 'Leo', 'Libra', 'Aquarius'],
    bodyPart: 'Hips/Thighs', color: 'Purple', cssColor: '#7c3aed'
  },
  {
    name: 'Capricorn', answer: "Ambitiously", symbol: '♑', element: 'Earth', modality: 'Cardinal',
    ruler: 'Saturn', dates: 'Dec 22 - Jan 19',
    keywords: ['Achiever', 'Authority', 'Builder', 'Elder'],
    strengths: ['Disciplined', 'Responsible', 'Ambitious', 'Patient', 'Practical'],
    challenges: ['Pessimistic', 'Workaholic', 'Cold', 'Rigid'],
    description: 'Capricorn is the achiever, climbing steadily toward mastery.',
    compatibility: ['Taurus', 'Virgo', 'Scorpio', 'Pisces'],
    bodyPart: 'Knees/Bones', color: 'Brown/Black', cssColor: '#78716c'
  },
  {
    name: 'Aquarius', answer: "Uniquely", symbol: '♒', element: 'Air', modality: 'Fixed',
    ruler: 'Uranus/Saturn', dates: 'Jan 20 - Feb 18',
    keywords: ['Visionary', 'Humanitarian', 'Rebel', 'Innovator'],
    strengths: ['Progressive', 'Original', 'Independent', 'Humanitarian', 'Inventive'],
    challenges: ['Detached', 'Unpredictable', 'Stubborn', 'Aloof'],
    description: 'Aquarius is the visionary, seeing future possibilities.',
    compatibility: ['Gemini', 'Libra', 'Aries', 'Sagittarius'],
    bodyPart: 'Ankles/Circulation', color: 'Electric Blue', cssColor: '#06b6d4'
  },
  {
    name: 'Pisces', answer: "Intuitively", symbol: '♓', element: 'Water', modality: 'Mutable',
    ruler: 'Neptune/Jupiter', dates: 'Feb 19 - Mar 20',
    keywords: ['Mystic', 'Dreamer', 'Healer', 'Artist'],
    strengths: ['Compassionate', 'Artistic', 'Intuitive', 'Gentle', 'Wise'],
    challenges: ['Escapist', 'Overly trusting', 'Victim mentality', 'Fearful'],
    description: 'Pisces is the mystic, dissolving boundaries between worlds.',
    compatibility: ['Cancer', 'Scorpio', 'Taurus', 'Capricorn'],
    bodyPart: 'Feet', color: 'Sea Green/Violet', cssColor: '#8b5cf6'
  }
];

export const ASPECTS: Record<string, AspectInfo> = {
  'Conjunction': {
    name: 'Conjunction', symbol: '☌', degrees: 0, nature: 'Neutral',
    keywords: ['Fusion', 'Intensity', 'Blending', 'Focus'],
    description: 'Planets merge their energies, creating a powerful focal point.'
  },
  'Sextile': {
    name: 'Sextile', symbol: '⚹', degrees: 60, nature: 'Harmonious',
    keywords: ['Opportunity', 'Talent', 'Communication', 'Growth'],
    description: 'A gentle, supportive aspect that creates opportunities.'
  },
  'Square': {
    name: 'Square', symbol: '□', degrees: 90, nature: 'Challenging',
    keywords: ['Tension', 'Action', 'Challenge', 'Growth through conflict'],
    description: 'Creates friction and tension that demands action.'
  },
  'Trine': {
    name: 'Trine', symbol: '△', degrees: 120, nature: 'Harmonious',
    keywords: ['Ease', 'Flow', 'Talent', 'Blessing'],
    description: 'The most harmonious aspect, creating natural flow and ease.'
  },
  'Opposition': {
    name: 'Opposition', symbol: '☍', degrees: 180, nature: 'Challenging',
    keywords: ['Awareness', 'Balance', 'Projection', 'Integration'],
    description: 'Creates awareness through polarity.'
  }
};

export const MOON_PHASES: MoonPhaseInfo[] = [
  { name: 'New Moon', emoji: '🌑', illumination: 0, keywords: ['Beginnings', 'Intention', 'Planting seeds'], description: 'Time of new beginnings. Set intentions, start new projects.', bestFor: ['Setting intentions', 'New beginnings', 'Meditation', 'Planning'] },
  { name: 'Waxing Crescent', emoji: '🌒', illumination: 12.5, keywords: ['Emergence', 'Intention', 'Hope'], description: 'First light appears. Take initial action on intentions.', bestFor: ['Taking first steps', 'Building momentum', 'Affirmations'] },
  { name: 'First Quarter', emoji: '🌓', illumination: 25, keywords: ['Action', 'Decision', 'Commitment'], description: 'Time of action and decision. Push through obstacles.', bestFor: ['Making decisions', 'Taking action', 'Overcoming obstacles'] },
  { name: 'Waxing Gibbous', emoji: '🌔', illumination: 37.5, keywords: ['Refinement', 'Adjustment', 'Development'], description: 'Refine and adjust your approach. Almost there.', bestFor: ['Refining plans', 'Making adjustments', 'Patience'] },
  { name: 'Full Moon', emoji: '🌕', illumination: 50, keywords: ['Culmination', 'Illumination', 'Harvest'], description: 'Peak energy. Harvest results, celebrate achievements.', bestFor: ['Celebrating', 'Releasing', 'Manifestation', 'Ritual'] },
  { name: 'Waning Gibbous', emoji: '🌖', illumination: 62.5, keywords: ['Gratitude', 'Sharing', 'Teaching'], description: 'Time of gratitude and sharing wisdom.', bestFor: ['Gratitude practice', 'Sharing knowledge', 'Teaching'] },
  { name: 'Last Quarter', emoji: '🌗', illumination: 75, keywords: ['Release', 'Forgiveness', 'Letting go'], description: 'Release what didn\'t work. Clear space for the next cycle.', bestFor: ['Releasing', 'Forgiving', 'Clearing clutter', 'Endings'] },
  { name: 'Waning Crescent', emoji: '🌘', illumination: 87.5, keywords: ['Rest', 'Surrender', 'Healing'], description: 'Time of rest and surrender. Retreat and heal.', bestFor: ['Resting', 'Healing', 'Meditation', 'Surrender'] }
];

export const CHINESE_ZODIAC: ChineseZodiacInfo[] = [
  { name: 'Rat', emoji: '🐀', element: 'Water', yinYang: 'Yang', traits: ['Quick-witted', 'Resourceful', 'Versatile', 'Kind'], compatible: ['Dragon', 'Monkey', 'Ox'], incompatible: ['Horse', 'Goat'], luckyNumbers: [2, 3], luckyColors: ['Blue', 'Gold', 'Green'], description: 'The Rat is clever, quick-witted, and resourceful.' },
  { name: 'Ox', emoji: '🐂', element: 'Earth', yinYang: 'Yin', traits: ['Diligent', 'Dependable', 'Strong', 'Determined'], compatible: ['Rat', 'Snake', 'Rooster'], incompatible: ['Tiger', 'Dragon', 'Horse', 'Goat'], luckyNumbers: [1, 4], luckyColors: ['White', 'Yellow', 'Green'], description: 'The Ox is strong, reliable, and fair.' },
  { name: 'Tiger', emoji: '🐅', element: 'Wood', yinYang: 'Yang', traits: ['Brave', 'Competitive', 'Confident', 'Unpredictable'], compatible: ['Dragon', 'Horse', 'Pig'], incompatible: ['Ox', 'Tiger', 'Snake', 'Monkey'], luckyNumbers: [1, 3, 4], luckyColors: ['Blue', 'Gray', 'Orange'], description: 'The Tiger is brave, competitive, and confident.' },
  { name: 'Rabbit', emoji: '🐇', element: 'Wood', yinYang: 'Yin', traits: ['Quiet', 'Elegant', 'Kind', 'Responsible'], compatible: ['Goat', 'Monkey', 'Dog', 'Pig'], incompatible: ['Snake', 'Rooster'], luckyNumbers: [3, 4, 6], luckyColors: ['Red', 'Pink', 'Purple', 'Blue'], description: 'The Rabbit is gentle, quiet, and elegant.' },
  { name: 'Dragon', emoji: '🐉', element: 'Earth', yinYang: 'Yang', traits: ['Confident', 'Intelligent', 'Enthusiastic', 'Ambitious'], compatible: ['Rooster', 'Rat', 'Monkey'], incompatible: ['Ox', 'Goat', 'Dog'], luckyNumbers: [1, 6, 7], luckyColors: ['Gold', 'Silver', 'Gray'], description: 'The Dragon is powerful, ambitious, and charismatic.' },
  { name: 'Snake', emoji: '🐍', element: 'Fire', yinYang: 'Yin', traits: ['Enigmatic', 'Intelligent', 'Wise', 'Graceful'], compatible: ['Dragon', 'Rooster', 'Ox'], incompatible: ['Tiger', 'Rabbit', 'Snake', 'Goat', 'Pig'], luckyNumbers: [2, 8, 9], luckyColors: ['Black', 'Red', 'Yellow'], description: 'The Snake is wise, enigmatic, and intuitive.' },
  { name: 'Horse', emoji: '🐴', element: 'Fire', yinYang: 'Yang', traits: ['Animated', 'Active', 'Energetic', 'Free-spirited'], compatible: ['Tiger', 'Goat', 'Rabbit'], incompatible: ['Rat', 'Ox', 'Rooster', 'Horse'], luckyNumbers: [2, 3, 7], luckyColors: ['Yellow', 'Green'], description: 'The Horse is energetic, free-spirited, and independent.' },
  { name: 'Goat', emoji: '🐐', element: 'Earth', yinYang: 'Yin', traits: ['Calm', 'Gentle', 'Sympathetic', 'Creative'], compatible: ['Rabbit', 'Horse', 'Pig'], incompatible: ['Ox', 'Tiger', 'Dog'], luckyNumbers: [2, 7], luckyColors: ['Brown', 'Red', 'Purple'], description: 'The Goat is gentle, calm, and artistic.' },
  { name: 'Monkey', emoji: '🐒', element: 'Metal', yinYang: 'Yang', traits: ['Sharp', 'Smart', 'Curious', 'Mischievous'], compatible: ['Ox', 'Rabbit'], incompatible: ['Tiger', 'Pig'], luckyNumbers: [4, 9], luckyColors: ['White', 'Blue', 'Gold'], description: 'The Monkey is clever, curious, and mischievous.' },
  { name: 'Rooster', emoji: '🐓', element: 'Metal', yinYang: 'Yin', traits: ['Observant', 'Hardworking', 'Courageous', 'Confident'], compatible: ['Ox', 'Snake'], incompatible: ['Rat', 'Rabbit', 'Horse', 'Rooster', 'Dog'], luckyNumbers: [5, 7, 8], luckyColors: ['Gold', 'Brown', 'Yellow'], description: 'The Rooster is observant, hardworking, and courageous.' },
  { name: 'Dog', emoji: '🐕', element: 'Earth', yinYang: 'Yang', traits: ['Loyal', 'Honest', 'Amiable', 'Kind'], compatible: ['Rabbit'], incompatible: ['Dragon', 'Goat', 'Rooster'], luckyNumbers: [3, 4, 9], luckyColors: ['Red', 'Green', 'Purple'], description: 'The Dog is loyal, honest, and kind.' },
  { name: 'Pig', emoji: '🐷', element: 'Water', yinYang: 'Yin', traits: ['Compassionate', 'Generous', 'Diligent', 'Trusting'], compatible: ['Tiger', 'Rabbit', 'Goat'], incompatible: ['Snake', 'Monkey'], luckyNumbers: [2, 5, 8], luckyColors: ['Yellow', 'Gray', 'Brown', 'Gold'], description: 'The Pig is compassionate, generous, and diligent.' }
];
