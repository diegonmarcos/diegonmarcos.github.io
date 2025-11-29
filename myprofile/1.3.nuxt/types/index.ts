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
