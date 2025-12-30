// ==============================================
// USER DATA COMPOSABLE - Fetches user info for AI greeting
// ==============================================

export interface UserData {
  ip: string
  city: string
  region: string
  country: string
  timezone: string
  isp: string
  browser: string
  os: string
  screenSize: string
  language: string
  referrer: string
  visitCount: number
  lastVisit: string
}

export const useUserData = () => {
  const userData = ref<UserData | null>(null)
  const isLoading = ref(true)

  const fetchUserData = async () => {
    try {
      // Get IP and location data from free API
      const ipResponse = await fetch('https://ipapi.co/json/')
      const ipData = await ipResponse.json()

      // Get browser info
      const ua = navigator.userAgent
      let browser = 'Unknown'
      if (ua.includes('Firefox')) browser = 'Firefox'
      else if (ua.includes('Chrome')) browser = 'Chrome'
      else if (ua.includes('Safari')) browser = 'Safari'
      else if (ua.includes('Edge')) browser = 'Edge'

      let os = 'Unknown'
      if (ua.includes('Windows')) os = 'Windows'
      else if (ua.includes('Mac')) os = 'macOS'
      else if (ua.includes('Linux')) os = 'Linux'
      else if (ua.includes('Android')) os = 'Android'
      else if (ua.includes('iOS')) os = 'iOS'

      // Get/set visit count from localStorage
      const visits = parseInt(localStorage.getItem('visitCount') || '0') + 1
      localStorage.setItem('visitCount', visits.toString())
      localStorage.setItem('lastVisit', new Date().toISOString())

      userData.value = {
        ip: ipData.ip || 'Unknown',
        city: ipData.city || 'Unknown',
        region: ipData.region || 'Unknown',
        country: ipData.country_name || 'Unknown',
        timezone: ipData.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
        isp: ipData.org || 'Unknown',
        browser,
        os,
        screenSize: `${window.screen.width}x${window.screen.height}`,
        language: navigator.language,
        referrer: document.referrer || 'Direct',
        visitCount: visits,
        lastVisit: localStorage.getItem('lastVisit') || 'First visit'
      }
    } catch {
      // Fallback with basic browser data
      userData.value = {
        ip: 'Hidden',
        city: 'Somewhere',
        region: 'Unknown',
        country: 'Earth',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        isp: 'Unknown',
        browser: 'Unknown',
        os: 'Unknown',
        screenSize: `${window.screen.width}x${window.screen.height}`,
        language: navigator.language,
        referrer: document.referrer || 'Direct',
        visitCount: 1,
        lastVisit: 'Now'
      }
    } finally {
      isLoading.value = false
    }
  }

  return {
    userData,
    isLoading,
    fetchUserData
  }
}
