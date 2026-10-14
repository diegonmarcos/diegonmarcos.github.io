// Activity & Strava Types
// Based on 01-spec.md specifications

export interface Activity {
  id: string;
  name: string;
  type: 'Run' | 'Ride' | 'Hike' | 'Walk';
  distance: number; // in meters
  duration: number; // in seconds
  elevationGain: number; // in meters
  date: Date;
  mapPolyline?: string;
  stravaUrl: string;
}

export interface ActivityStats {
  totalDistance: number; // in meters
  totalElevation: number; // in meters
  activityCount: number;
  totalTime: number; // in seconds
  year: number;
}

export interface Achievement {
  type: 'distance' | 'elevation' | 'speed' | 'streak';
  value: number;
  unit: string;
  date: Date;
  activityId: string;
}
