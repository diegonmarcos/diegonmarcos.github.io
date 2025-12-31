// ==============================================
// STATS DATA COMPOSABLE
// ==============================================

import type { StatsData, StatCategory, SocialProfile, LifetimeStats } from '~/types'

export const useStatsData = () => {
  // Media consumption categories with mock data
  const categories: StatCategory[] = [
    {
      id: 'movies',
      label: 'Movies',
      icon: 'film',
      count: 5200,
      countUnit: '',
      duration: '1 year, 1 month, 1 week',
      accentColor: '#ff0055'
    },
    {
      id: 'songs',
      label: 'Songs',
      icon: 'music',
      count: 16,
      countUnit: 'K',
      duration: '1 hour, 3 minutes',
      accentColor: '#00f3ff'
    },
    {
      id: 'shows',
      label: 'Show Episodes',
      icon: 'tv',
      count: 50,
      countUnit: 'K',
      duration: '3 years, 8 months, 3 weeks',
      accentColor: '#bc13fe'
    },
    {
      id: 'games',
      label: 'Video Games',
      icon: 'gamepad-2',
      count: 113,
      countUnit: '',
      duration: '4 days, 12 hours, 30 minutes',
      accentColor: '#00ff9d'
    },
    {
      id: 'vn',
      label: 'Visual Novels',
      icon: 'book-open',
      count: 8,
      countUnit: '',
      duration: '1 week, 1 day, 13 hours',
      accentColor: '#ff9100'
    },
    {
      id: 'audiobooks',
      label: 'Audio Books',
      icon: 'headphones',
      count: 71,
      countUnit: '',
      duration: '1 month, 1 week, 4 days',
      accentColor: '#1db954'
    },
    {
      id: 'books',
      label: 'Books',
      icon: 'book',
      count: 557,
      countUnit: '',
      extraMetric: '159K',
      extraMetricLabel: 'Pages',
      accentColor: '#e4405f'
    },
    {
      id: 'podcasts',
      label: 'Podcasts',
      icon: 'podcast',
      count: 68,
      countUnit: '',
      duration: '3 days, 14 hours, 35 minutes',
      accentColor: '#9146ff'
    },
    {
      id: 'manga',
      label: 'Manga',
      icon: 'image',
      count: 21,
      countUnit: 'K',
      accentColor: '#ff5722'
    },
    {
      id: 'anime',
      label: 'Anime',
      icon: 'play-circle',
      count: 6,
      countUnit: 'K',
      accentColor: '#03a9f4'
    }
  ]

  // Social profiles organized by category
  const socialProfiles: SocialProfile[] = [
    // Contact
    { id: 'telegram', platform: 'Telegram', icon: 'send', url: 'https://t.me/diegonmarcos', accentColor: '#0088cc', category: 'contact' },
    { id: 'whatsapp', platform: 'WhatsApp', icon: 'message-circle', url: 'https://wa.me/diegonmarcos', accentColor: '#25d366', category: 'contact' },

    // Profiles
    { id: 'myprofile', platform: 'MyProfile', icon: 'user', url: '#', accentColor: '#00f3ff', category: 'profile' },
    { id: 'tidal', platform: 'TIDAL', icon: 'music', url: 'https://tidal.com/user/diegonmarcos', accentColor: '#000000', category: 'profile' },
    { id: 'youtube', platform: 'YouTube', icon: 'youtube', url: 'https://youtube.com/@diegonmarcos', accentColor: '#ff0000', category: 'profile' },
    { id: 'pinterest', platform: 'Pinterest', icon: 'image', url: 'https://pinterest.com/diegonmarcos', accentColor: '#bd081c', category: 'profile' },
    { id: 'instagram', platform: 'Instagram', icon: 'instagram', url: 'https://instagram.com/diegonmarcos', accentColor: '#e4405f', category: 'profile' },

    // Activity
    { id: 'komoot', platform: 'Komoot', icon: 'map-pin', url: 'https://komoot.com/user/diegonmarcos', accentColor: '#6aa127', category: 'activity' },
    { id: 'strava', platform: 'Strava', icon: 'activity', url: 'https://strava.com/athletes/diegonmarcos', accentColor: '#fc4c02', category: 'activity' },
    { id: 'maps', platform: 'Maps', icon: 'map', url: 'https://maps.google.com', accentColor: '#34a853', category: 'activity' },
    { id: 'mybucket', platform: 'MyBucket', icon: 'list-checks', url: '#', accentColor: '#ff9100', category: 'activity' }
  ]

  // Lifetime aggregated stats
  const lifetime: LifetimeStats = {
    totalMedia: 97000,
    totalReviews: 1900,
    peopleReviewed: 4,
    totalWorkouts: 220,
    workoutDuration: '13 hours, 32 minutes',
    totalWeight: '303K kg',
    measurements: 57
  }

  const statsData: StatsData = {
    categories,
    socialProfiles,
    lifetime
  }

  return {
    statsData,
    categories,
    socialProfiles,
    lifetime
  }
}
