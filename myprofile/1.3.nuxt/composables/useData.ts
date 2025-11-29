// ==============================================
// DATA COMPOSABLE
// ==============================================

import type { DataItem } from '~/types'

export const useData = () => {
  const data: DataItem[] = [
    {
      id: '1',
      type: 'music',
      platform: 'Tidal',
      title: 'AUDITORY_STREAM',
      subtitle: 'MIDNIGHT CITY // M83',
      metric: '1411 KBPS',
      image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000&auto=format&fit=crop',
      accentColor: '#00f3ff',
      icon: 'music',
      statType: 'CREATIVITY',
      statValue: 85
    },
    {
      id: '2',
      type: 'fitness',
      platform: 'Strava',
      title: 'BIO_METRICS',
      subtitle: 'SHIBUYA SECTOR RUN',
      metric: '165 BPM',
      image: 'https://images.unsplash.com/photo-1517130038641-a774d04afb3c?q=80&w=1000&auto=format&fit=crop',
      accentColor: '#ff9100',
      icon: 'activity',
      statType: 'ENDURANCE',
      statValue: 92
    },
    {
      id: '3',
      type: 'travel',
      platform: 'NomadMania',
      title: 'GEO_TAG',
      subtitle: 'COORDS: REYKJAVIK',
      metric: '42/193 NODES',
      image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=1000&auto=format&fit=crop',
      accentColor: '#00ff9d',
      icon: 'globe',
      statType: 'EXPLORATION',
      statValue: 78
    },
    {
      id: '4',
      type: 'video',
      platform: 'YouTube',
      title: 'VISUAL_FEED',
      subtitle: 'CYBERPUNK AMBIENCE',
      metric: 'REC [00:14:22]',
      image: 'https://images.unsplash.com/photo-1535189043414-47a3c49a0bed?q=80&w=1000&auto=format&fit=crop',
      accentColor: '#ff0055',
      icon: 'youtube',
      statType: 'INFLUENCE',
      statValue: 64
    },
    {
      id: '5',
      type: 'social',
      platform: 'Instagram',
      title: 'MEMORY_BANK',
      subtitle: 'IMG_8842.RAW',
      metric: 'ISO 3200',
      image: 'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=1000&auto=format&fit=crop',
      accentColor: '#bc13fe',
      icon: 'camera',
      statType: 'VISION',
      statValue: 88
    },
    {
      id: 'system',
      type: 'system',
      platform: 'SYS_LOG',
      title: 'CRITICAL_FAILURE',
      subtitle: 'KERNEL PANIC',
      metric: 'ERR_0x8849A',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
      accentColor: '#ff0000',
      icon: 'alert-triangle',
      statType: 'CHAOS',
      statValue: 12
    }
  ]

  return {
    data
  }
}
