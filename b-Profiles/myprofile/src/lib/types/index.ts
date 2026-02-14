// ==============================================
// TYPE DEFINITIONS
// ==============================================

export type ViewType = 'cards' | 'player' | 'sphere'

export type DataType = 'music' | 'fitness' | 'travel' | 'video' | 'social' | 'system'

export type IconName =
  | 'music'
  | 'activity'
  | 'globe'
  | 'youtube'
  | 'camera'
  | 'alert-triangle'
  | 'layers'
  | 'user'
  | 'box'
  | 'wifi'
  | 'eye'

export interface DataItem {
  id: string
  type: DataType
  platform: string
  title: string
  subtitle: string
  metric: string
  image: string
  accentColor: string
  icon: IconName
  statType: string
  statValue: number
}

export interface SpherePoint extends DataItem {
  pos: [number, number, number]
}

export interface Rotation {
  x: number
  y: number
}

export interface MousePosition {
  x: number
  y: number
}

export interface MediaItem {
  id: string
  platform: string
  icon: string
  url: string
  accentColor: string
}

// Stats Dashboard Types
export interface StatCategory {
  id: string
  label: string
  icon: string
  count: number
  countUnit?: string
  duration?: string
  extraMetric?: string
  extraMetricLabel?: string
  accentColor: string
}

export interface SocialProfile {
  id: string
  platform: string
  icon: string
  url: string
  accentColor: string
  category: 'contact' | 'profile' | 'activity'
}

export interface LifetimeStats {
  totalMedia: number
  totalReviews: number
  peopleReviewed: number
  totalWorkouts: number
  workoutDuration: string
  totalWeight: string
  measurements: number
}

export interface StatsData {
  categories: StatCategory[]
  socialProfiles: SocialProfile[]
  lifetime: LifetimeStats
}
