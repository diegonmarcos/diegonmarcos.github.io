import {
  ActivityType,
  type Activity,
  type ActivitySubType,
  type DaySummary,
  type HeartRateZones,
  type PersonalRecord,
  type WeeklySummary,
  type DateRange,
} from './types';
import { toISODate, getWeekStart, COLORS } from './utils';

// Seeded PRNG for consistent data
let seed = 42;
function rand(): number {
  seed = (seed * 16807 + 0) % 2147483647;
  return (seed - 1) / 2147483646;
}
function randInt(min: number, max: number): number {
  return Math.floor(rand() * (max - min + 1)) + min;
}
function randFloat(min: number, max: number): number {
  return min + rand() * (max - min);
}
function pick<T>(arr: T[]): T {
  return arr[randInt(0, arr.length - 1)];
}

let allActivities: Activity[] = [];

function generateId(): string {
  return Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
}

function generateHRZones(duration: number, intensity: number): HeartRateZones {
  const total = duration;
  const base = [0.05, 0.25, 0.35, 0.25, 0.10];
  // Shift distribution based on intensity (0=easy, 1=hard)
  const shifted = base.map((v, i) => {
    if (i < 2) return v * (1 - intensity * 0.5);
    if (i > 2) return v * (1 + intensity * 0.8);
    return v;
  });
  const sum = shifted.reduce((a, b) => a + b, 0);
  const normalized = shifted.map(v => Math.round((v / sum) * total));
  // Adjust rounding
  const diff = total - normalized.reduce((a, b) => a + b, 0);
  normalized[2] += diff;
  return {
    zone1: Math.max(0, normalized[0]),
    zone2: Math.max(0, normalized[1]),
    zone3: Math.max(0, normalized[2]),
    zone4: Math.max(0, normalized[3]),
    zone5: Math.max(0, normalized[4]),
  };
}

function progressionFactor(date: Date, startDate: Date, endDate: Date): number {
  const total = endDate.getTime() - startDate.getTime();
  const elapsed = date.getTime() - startDate.getTime();
  return 1 + (elapsed / total) * 0.15; // 15% progression over period
}

function generateSwim(date: Date, pf: number): Activity {
  const isPool = rand() > 0.4;
  const subType: ActivitySubType = isPool ? 'pool' : 'open_water';
  const duration = isPool ? randInt(35, 55) * pf : randInt(30, 50) * pf;
  const distance = isPool ? randFloat(1.5, 3.0) * pf : randFloat(1.0, 2.5) * pf;
  const avgHR = randInt(130, 155);
  return {
    id: generateId(),
    date: toISODate(date),
    type: ActivityType.Swim,
    subType,
    title: isPool ? `Pool Swim — ${randInt(50, 80)} laps` : 'Open Water Swim',
    durationMinutes: Math.round(duration),
    distanceKm: +distance.toFixed(2),
    elevationM: 0,
    avgHeartRate: avgHR,
    maxHeartRate: avgHR + randInt(15, 30),
    calories: Math.round(duration * randFloat(8, 11)),
    laps: isPool ? Math.round(distance * 1000 / 50) : undefined,
    poolLengthM: isPool ? 50 : undefined,
    hrZones: generateHRZones(Math.round(duration), 0.5),
    feeling: pick([3, 4, 4, 5]) as 1 | 2 | 3 | 4 | 5,
  };
}

function generateCycle(date: Date, pf: number): Activity {
  const isIndoor = rand() > 0.7;
  const subType: ActivitySubType = isIndoor ? 'indoor' : 'road';
  const duration = isIndoor ? randInt(40, 70) * pf : randInt(60, 150) * pf;
  const speed = isIndoor ? randFloat(28, 33) : randFloat(24, 30);
  const distance = (duration / 60) * speed;
  const avgHR = randInt(135, 160);
  return {
    id: generateId(),
    date: toISODate(date),
    type: ActivityType.Cycle,
    subType,
    title: isIndoor ? 'Indoor Trainer Session' : `Road Ride — ${pick(['Rolling Hills', 'Flat Loop', 'Coastal Route', 'City Circuit'])}`,
    durationMinutes: Math.round(duration),
    distanceKm: +distance.toFixed(1),
    elevationM: isIndoor ? 0 : randInt(150, 800),
    avgHeartRate: avgHR,
    maxHeartRate: avgHR + randInt(15, 30),
    calories: Math.round(duration * randFloat(9, 13)),
    avgSpeedKmh: +speed.toFixed(1),
    cadence: randInt(75, 95),
    powerWatts: isIndoor ? randInt(160, 250) : randInt(140, 220),
    hrZones: generateHRZones(Math.round(duration), isIndoor ? 0.6 : 0.4),
    feeling: pick([3, 3, 4, 4, 5]) as 1 | 2 | 3 | 4 | 5,
  };
}

function generateRun(date: Date, pf: number, sub?: 'easy' | 'interval' | 'long'): Activity {
  const subType: ActivitySubType = sub ?? pick(['easy', 'easy', 'interval', 'long']);
  let duration: number;
  let pace: number;
  let intensity: number;

  switch (subType) {
    case 'easy':
      duration = randInt(30, 45) * pf;
      pace = randFloat(5.3, 6.0);
      intensity = 0.3;
      break;
    case 'interval':
      duration = randInt(35, 50) * pf;
      pace = randFloat(4.0, 4.8);
      intensity = 0.8;
      break;
    case 'long':
      duration = randInt(60, 100) * pf;
      pace = randFloat(5.5, 6.2);
      intensity = 0.5;
      break;
    default:
      duration = randInt(30, 45) * pf;
      pace = randFloat(5.3, 6.0);
      intensity = 0.3;
  }

  const distance = duration / pace;
  const avgHR = subType === 'interval' ? randInt(155, 175) : randInt(135, 155);
  const titles: Record<string, string[]> = {
    easy: ['Easy Recovery Run', 'Morning Jog', 'Aerobic Base Run', 'Shakeout Run'],
    interval: ['Interval Session — 6x800m', 'Tempo Run', 'Speed Work — 8x400m', 'Fartlek Session'],
    long: ['Long Weekend Run', 'Endurance Run', 'Sunday Long Run', 'Trail Long Run'],
  };

  return {
    id: generateId(),
    date: toISODate(date),
    type: ActivityType.Run,
    subType,
    title: pick(titles[subType as string] ?? titles.easy),
    durationMinutes: Math.round(duration),
    distanceKm: +distance.toFixed(2),
    elevationM: randInt(20, 150),
    avgHeartRate: avgHR,
    maxHeartRate: avgHR + randInt(10, 25),
    calories: Math.round(duration * randFloat(10, 13)),
    avgPaceMinPerKm: +pace.toFixed(2),
    cadence: randInt(165, 185),
    hrZones: generateHRZones(Math.round(duration), intensity),
    feeling: pick([3, 3, 4, 4, 5]) as 1 | 2 | 3 | 4 | 5,
  };
}

function generateHike(date: Date, pf: number): Activity {
  const duration = randInt(90, 240) * pf;
  const pace = randFloat(8, 14);
  const distance = duration / pace;
  const avgHR = randInt(110, 135);
  return {
    id: generateId(),
    date: toISODate(date),
    type: ActivityType.Hike,
    subType: 'trail',
    title: pick(['Mountain Trail Hike', 'Forest Trail', 'Ridge Walk', 'Coastal Path', 'Alpine Loop']),
    durationMinutes: Math.round(duration),
    distanceKm: +distance.toFixed(1),
    elevationM: randInt(300, 1200),
    avgHeartRate: avgHR,
    maxHeartRate: avgHR + randInt(20, 40),
    calories: Math.round(duration * randFloat(6, 9)),
    avgPaceMinPerKm: +pace.toFixed(1),
    hrZones: generateHRZones(Math.round(duration), 0.3),
    feeling: pick([4, 4, 5, 5]) as 1 | 2 | 3 | 4 | 5,
  };
}

function generateWalk(date: Date): Activity {
  const steps = randInt(4000, 12000);
  const distance = steps * 0.00075;
  const duration = distance / 0.08; // ~4.8 km/h
  return {
    id: generateId(),
    date: toISODate(date),
    type: ActivityType.Walk,
    subType: 'daily',
    title: 'Daily Walk',
    durationMinutes: Math.round(duration),
    distanceKm: +distance.toFixed(1),
    elevationM: randInt(5, 50),
    avgHeartRate: randInt(85, 105),
    maxHeartRate: randInt(110, 130),
    calories: Math.round(duration * randFloat(4, 6)),
    steps,
    avgPaceMinPerKm: +(duration / distance).toFixed(1),
    hrZones: generateHRZones(Math.round(duration), 0.1),
    feeling: pick([3, 4, 4]) as 1 | 2 | 3 | 4 | 5,
  };
}

export function initDatabase(startDate: Date, endDate: Date): void {
  seed = 42; // Reset seed for consistency
  allActivities = [];

  const current = new Date(startDate);
  let weekCounter = 0;

  while (current <= endDate) {
    const dayOfWeek = current.getDay(); // 0=Sun
    const pf = progressionFactor(current, startDate, endDate);
    const dayActivities: Activity[] = [];

    // Daily walk — every day
    dayActivities.push(generateWalk(current));

    // Weekly schedule pattern
    // Mon(1): rest or easy run
    // Tue(2): swim + intervals
    // Wed(3): cycle
    // Thu(4): easy run
    // Fri(5): rest or swim
    // Sat(6): long run or hike
    // Sun(0): cycle or hike

    switch (dayOfWeek) {
      case 1: // Monday — occasional easy run
        if (rand() > 0.5) dayActivities.push(generateRun(current, pf, 'easy'));
        break;
      case 2: // Tuesday — swim + interval run
        dayActivities.push(generateSwim(current, pf));
        if (rand() > 0.3) dayActivities.push(generateRun(current, pf, 'interval'));
        break;
      case 3: // Wednesday — cycle
        dayActivities.push(generateCycle(current, pf));
        break;
      case 4: // Thursday — easy run
        dayActivities.push(generateRun(current, pf, 'easy'));
        break;
      case 5: // Friday — rest or swim
        if (rand() > 0.6) dayActivities.push(generateSwim(current, pf));
        break;
      case 6: // Saturday — long run or hike
        if (weekCounter % 2 === 0) {
          dayActivities.push(generateRun(current, pf, 'long'));
        } else {
          dayActivities.push(generateHike(current, pf));
        }
        break;
      case 0: // Sunday — cycle or recovery
        if (rand() > 0.3) dayActivities.push(generateCycle(current, pf));
        break;
    }

    allActivities.push(...dayActivities);

    if (dayOfWeek === 0) weekCounter++;
    current.setDate(current.getDate() + 1);
  }

  // Sort by date descending
  allActivities.sort((a, b) => b.date.localeCompare(a.date));
}

export function getActivities(range?: DateRange, type?: ActivityType): Activity[] {
  let result = allActivities;
  if (range) {
    const s = toISODate(range.start);
    const e = toISODate(range.end);
    result = result.filter(a => a.date >= s && a.date <= e);
  }
  if (type) {
    result = result.filter(a => a.type === type);
  }
  return result;
}

export function getActivitiesExcludeWalks(range?: DateRange): Activity[] {
  return getActivities(range).filter(a => a.type !== ActivityType.Walk);
}

export function getDaySummaries(range: DateRange): DaySummary[] {
  const activities = getActivities(range);
  const byDate = new Map<string, Activity[]>();
  activities.forEach(a => {
    const list = byDate.get(a.date) ?? [];
    list.push(a);
    byDate.set(a.date, list);
  });

  return Array.from(byDate.entries()).map(([date, acts]) => ({
    date,
    activities: acts,
    totalDurationMinutes: acts.reduce((s, a) => s + a.durationMinutes, 0),
    totalDistanceKm: acts.reduce((s, a) => s + a.distanceKm, 0),
    totalCalories: acts.reduce((s, a) => s + a.calories, 0),
    steps: acts.reduce((s, a) => s + (a.steps ?? 0), 0),
  })).sort((a, b) => b.date.localeCompare(a.date));
}

export function getWeeklySummaries(range: DateRange): WeeklySummary[] {
  const activities = getActivitiesExcludeWalks(range);
  const weeks = new Map<string, Activity[]>();

  activities.forEach(a => {
    const ws = toISODate(getWeekStart(new Date(a.date)));
    const list = weeks.get(ws) ?? [];
    list.push(a);
    weeks.set(ws, list);
  });

  return Array.from(weeks.entries()).map(([weekStart, acts]) => {
    const end = new Date(weekStart);
    end.setDate(end.getDate() + 6);

    const byType = {} as WeeklySummary['byType'];
    for (const t of Object.values(ActivityType)) {
      const typed = acts.filter(a => a.type === t);
      byType[t] = {
        count: typed.length,
        duration: typed.reduce((s, a) => s + a.durationMinutes, 0),
        distance: typed.reduce((s, a) => s + a.distanceKm, 0),
      };
    }

    return {
      weekStart,
      weekEnd: toISODate(end),
      totalDuration: acts.reduce((s, a) => s + a.durationMinutes, 0),
      totalDistance: acts.reduce((s, a) => s + a.distanceKm, 0),
      totalCalories: acts.reduce((s, a) => s + a.calories, 0),
      totalElevation: acts.reduce((s, a) => s + a.elevationM, 0),
      activityCount: acts.length,
      byType,
    };
  }).sort((a, b) => a.weekStart.localeCompare(b.weekStart));
}

export function getPersonalRecords(): PersonalRecord[] {
  const records: PersonalRecord[] = [];
  const acts = allActivities.filter(a => a.type !== ActivityType.Walk);

  // Longest run
  const runs = acts.filter(a => a.type === ActivityType.Run);
  if (runs.length > 0) {
    const longest = runs.reduce((a, b) => a.distanceKm > b.distanceKm ? a : b);
    records.push({ type: ActivityType.Run, category: 'Longest Run', value: longest.distanceKm, unit: 'km', date: longest.date, activityId: longest.id });
    const fastest = runs.reduce((a, b) => (a.avgPaceMinPerKm ?? 99) < (b.avgPaceMinPerKm ?? 99) ? a : b);
    records.push({ type: ActivityType.Run, category: 'Fastest Pace', value: fastest.avgPaceMinPerKm ?? 0, unit: '/km', date: fastest.date, activityId: fastest.id });
  }

  // Longest ride
  const rides = acts.filter(a => a.type === ActivityType.Cycle);
  if (rides.length > 0) {
    const longest = rides.reduce((a, b) => a.distanceKm > b.distanceKm ? a : b);
    records.push({ type: ActivityType.Cycle, category: 'Longest Ride', value: longest.distanceKm, unit: 'km', date: longest.date, activityId: longest.id });
    const fastest = rides.reduce((a, b) => (a.avgSpeedKmh ?? 0) > (b.avgSpeedKmh ?? 0) ? a : b);
    records.push({ type: ActivityType.Cycle, category: 'Fastest Speed', value: fastest.avgSpeedKmh ?? 0, unit: 'km/h', date: fastest.date, activityId: fastest.id });
    const maxPower = rides.filter(r => r.powerWatts).reduce((a, b) => (a.powerWatts ?? 0) > (b.powerWatts ?? 0) ? a : b);
    records.push({ type: ActivityType.Cycle, category: 'Max Power', value: maxPower.powerWatts ?? 0, unit: 'W', date: maxPower.date, activityId: maxPower.id });
  }

  // Longest swim
  const swims = acts.filter(a => a.type === ActivityType.Swim);
  if (swims.length > 0) {
    const longest = swims.reduce((a, b) => a.distanceKm > b.distanceKm ? a : b);
    records.push({ type: ActivityType.Swim, category: 'Longest Swim', value: longest.distanceKm, unit: 'km', date: longest.date, activityId: longest.id });
  }

  // Highest elevation hike
  const hikes = acts.filter(a => a.type === ActivityType.Hike);
  if (hikes.length > 0) {
    const highest = hikes.reduce((a, b) => a.elevationM > b.elevationM ? a : b);
    records.push({ type: ActivityType.Hike, category: 'Most Elevation', value: highest.elevationM, unit: 'm', date: highest.date, activityId: highest.id });
    const longestHike = hikes.reduce((a, b) => a.durationMinutes > b.durationMinutes ? a : b);
    records.push({ type: ActivityType.Hike, category: 'Longest Hike', value: longestHike.durationMinutes, unit: 'min', date: longestHike.date, activityId: longestHike.id });
  }

  return records;
}

export function getCalendarData(range: DateRange): Map<string, number> {
  const result = new Map<string, number>();
  const acts = getActivitiesExcludeWalks(range);
  const byDate = new Map<string, number>();

  acts.forEach(a => {
    byDate.set(a.date, (byDate.get(a.date) ?? 0) + a.durationMinutes);
  });

  byDate.forEach((duration, date) => {
    let level: number;
    if (duration === 0) level = 0;
    else if (duration < 30) level = 1;
    else if (duration < 60) level = 2;
    else if (duration < 120) level = 3;
    else level = 4;
    result.set(date, level);
  });

  return result;
}
