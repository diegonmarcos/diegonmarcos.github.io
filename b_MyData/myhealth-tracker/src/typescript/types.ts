export enum ActivityType {
  Swim = 'swim',
  Cycle = 'cycle',
  Run = 'run',
  Hike = 'hike',
  Walk = 'walk',
}

export type SwimSubType = 'pool' | 'open_water';
export type CycleSubType = 'road' | 'indoor';
export type RunSubType = 'easy' | 'interval' | 'long';
export type HikeSubType = 'trail';
export type WalkSubType = 'daily';

export type ActivitySubType = SwimSubType | CycleSubType | RunSubType | HikeSubType | WalkSubType;

export interface HeartRateZones {
  zone1: number;
  zone2: number;
  zone3: number;
  zone4: number;
  zone5: number;
}

export interface Activity {
  id: string;
  date: string;
  type: ActivityType;
  subType: ActivitySubType;
  title: string;
  durationMinutes: number;
  distanceKm: number;
  elevationM: number;
  avgHeartRate: number;
  maxHeartRate: number;
  calories: number;
  avgPaceMinPerKm?: number;
  avgSpeedKmh?: number;
  laps?: number;
  poolLengthM?: number;
  cadence?: number;
  powerWatts?: number;
  steps?: number;
  hrZones: HeartRateZones;
  feeling: 1 | 2 | 3 | 4 | 5;
}

export interface DaySummary {
  date: string;
  activities: Activity[];
  totalDurationMinutes: number;
  totalDistanceKm: number;
  totalCalories: number;
  steps: number;
}

export interface WeeklySummary {
  weekStart: string;
  weekEnd: string;
  totalDuration: number;
  totalDistance: number;
  totalCalories: number;
  totalElevation: number;
  activityCount: number;
  byType: Record<ActivityType, { count: number; duration: number; distance: number }>;
}

export interface PersonalRecord {
  type: ActivityType;
  category: string;
  value: number;
  unit: string;
  date: string;
  activityId: string;
}

export interface DateRange {
  start: Date;
  end: Date;
}

export type TimeFrame = 'week' | 'month' | 'quarter';

export interface ChartColor {
  swim: string;
  cycle: string;
  run: string;
  hike: string;
  walk: string;
}

export interface BarChartData {
  label: string;
  value: number;
  color: string;
}

export interface DonutSegment {
  label: string;
  value: number;
  color: string;
}

export interface LinePoint {
  x: number;
  y: number;
  label?: string;
}

export interface LineSeries {
  label: string;
  points: LinePoint[];
  color: string;
}
