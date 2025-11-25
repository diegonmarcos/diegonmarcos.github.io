// Matomo Analytics Service
// Privacy-focused analytics with GDPR compliance

interface MatomoConfig {
  url: string;
  siteId: number;
  enabled: boolean;
}

class MatomoService {
  private config: MatomoConfig | null = null;
  private initialized = false;

  /**
   * Initialize Matomo tracking
   */
  init(): void {
    // Get config from environment variables
    const url = import.meta.env.VITE_MATOMO_URL;
    const siteId = parseInt(import.meta.env.VITE_MATOMO_SITE_ID || '1');
    const enabled = import.meta.env.VITE_MATOMO_ENABLED === 'true';

    if (!url || !enabled) {
      console.log('Matomo analytics disabled or not configured');
      return;
    }

    this.config = { url, siteId, enabled };

    // Check if we should respect Do Not Track
    if (this.shouldRespectDNT()) {
      console.log('Do Not Track detected - analytics disabled');
      return;
    }

    this.loadMatomoScript();
    this.initialized = true;
  }

  /**
   * Check if Do Not Track is enabled
   */
  private shouldRespectDNT(): boolean {
    const dnt =
      navigator.doNotTrack ||
      (window as any).doNotTrack ||
      (navigator as any).msDoNotTrack;

    return dnt === '1' || dnt === 'yes';
  }

  /**
   * Load Matomo tracking script
   */
  private loadMatomoScript(): void {
    if (!this.config) return;

    const { url, siteId } = this.config;

    // Initialize _paq array for Matomo
    (window as any)._paq = (window as any)._paq || [];
    const _paq = (window as any)._paq;

    // Configure Matomo
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    _paq.push(['setTrackerUrl', `${url}/matomo.php`]);
    _paq.push(['setSiteId', siteId]);

    // Privacy settings
    _paq.push(['disableCookies']); // Cookie-less tracking
    _paq.push(['setDoNotTrack', true]); // Respect DNT

    // Load Matomo script
    const script = document.createElement('script');
    script.async = true;
    script.src = `${url}/matomo.js`;
    document.head.appendChild(script);
  }

  /**
   * Track a page view
   */
  trackPageView(customTitle?: string): void {
    if (!this.initialized || !this.config?.enabled) return;

    const _paq = (window as any)._paq;
    if (!_paq) return;

    if (customTitle) {
      _paq.push(['setDocumentTitle', customTitle]);
    }
    _paq.push(['trackPageView']);
  }

  /**
   * Track a custom event
   */
  trackEvent(category: string, action: string, name?: string, value?: number): void {
    if (!this.initialized || !this.config?.enabled) return;

    const _paq = (window as any)._paq;
    if (!_paq) return;

    _paq.push(['trackEvent', category, action, name, value]);
  }

  /**
   * Track an outbound link
   */
  trackLink(url: string, linkType: 'link' | 'download' = 'link'): void {
    if (!this.initialized || !this.config?.enabled) return;

    const _paq = (window as any)._paq;
    if (!_paq) return;

    _paq.push(['trackLink', url, linkType]);
  }

  /**
   * Track a site search
   */
  trackSiteSearch(keyword: string, category?: string, resultsCount?: number): void {
    if (!this.initialized || !this.config?.enabled) return;

    const _paq = (window as any)._paq;
    if (!_paq) return;

    _paq.push(['trackSiteSearch', keyword, category, resultsCount]);
  }

  /**
   * Set custom dimension
   */
  setCustomDimension(dimensionId: number, value: string): void {
    if (!this.initialized || !this.config?.enabled) return;

    const _paq = (window as any)._paq;
    if (!_paq) return;

    _paq.push(['setCustomDimension', dimensionId, value]);
  }

  /**
   * Check if Matomo is enabled
   */
  isEnabled(): boolean {
    return this.initialized && (this.config?.enabled || false);
  }
}

// Export singleton instance
export const matomo = new MatomoService();
