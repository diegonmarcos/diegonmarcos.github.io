# Analytics - Matomo Integration

This folder contains the privacy-focused analytics implementation using Matomo.

## Features

✅ **Privacy-First Analytics**
- Cookie-less tracking
- Respects Do Not Track (DNT)
- GDPR compliant
- No personal data collection

✅ **Easy Integration**
- Simple environment variable configuration
- Can be enabled/disabled with a flag
- Automatic page view tracking
- Custom event tracking support

## Files

- `matomo.service.ts` - Core Matomo analytics service
- `README.md` - This documentation

## Setup

### 1. Configure Environment Variables

Add to your `.env` file (or use `.env.example` as template):

```bash
# Matomo Analytics
VITE_MATOMO_URL=https://your-matomo-instance.com
VITE_MATOMO_SITE_ID=1
VITE_MATOMO_ENABLED=true
```

### 2. Get Matomo Instance

You have two options:

**Option A: Self-Hosted**
1. Download Matomo from https://matomo.org/download/
2. Install on your server
3. Get your site ID from the dashboard

**Option B: Matomo Cloud**
1. Sign up at https://matomo.org/start-free-analytics-trial/
2. Get your tracking URL and site ID
3. Configure environment variables

### 3. Integration

The Analytics component is already integrated in `1.3.svelte/src/routes/+layout.svelte`:

```svelte
<script lang="ts">
  import Analytics from '$lib/components/common/Analytics.svelte';
</script>

<!-- At the end of your layout -->
<Analytics />
```

## Usage

### Basic Tracking

Page views are tracked automatically when the component is included in your layout.

### Custom Events

You can track custom events from your components:

```typescript
import { matomo } from '../../../../1.2.analytics/matomo.service';

// Track button click
matomo.trackEvent('Navigation', 'Click', 'Home Button');

// Track form submission
matomo.trackEvent('Form', 'Submit', 'Contact Form', 1);
```

### Track Outbound Links

```typescript
import { matomo } from '../../../../1.2.analytics/matomo.service';

matomo.trackLink('https://external-site.com', 'link');
```

### Track Site Search

```typescript
import { matomo } from '../../../../1.2.analytics/matomo.service';

matomo.trackSiteSearch('search term', 'category', 10);
```

### Custom Dimensions

```typescript
import { matomo } from '../../../../1.2.analytics/matomo.service';

matomo.setCustomDimension(1, 'logged-in-user');
```

## Privacy Features

### Cookie-less Tracking
Matomo is configured to track without cookies, ensuring visitor privacy.

### Do Not Track
The service automatically respects the DNT header. If a visitor has DNT enabled, no tracking occurs.

### GDPR Compliance
- No cookies = No cookie banner required
- No personal data collected
- IP anonymization enabled
- Respects user privacy preferences

## Development vs Production

The analytics service checks `VITE_MATOMO_ENABLED`:
- Set to `false` during development
- Set to `true` in production

Example `.env.development`:
```bash
VITE_MATOMO_ENABLED=false
```

Example `.env.production`:
```bash
VITE_MATOMO_ENABLED=true
VITE_MATOMO_URL=https://analytics.yoursite.com
VITE_MATOMO_SITE_ID=1
```

## Verification

To verify Matomo is working:

1. Open your browser's developer console
2. Check for Matomo log messages
3. Visit your Matomo dashboard
4. Check real-time visitors

## API Reference

### `matomo.init()`
Initialize the Matomo service. Called automatically by the Analytics component.

### `matomo.trackPageView(customTitle?: string)`
Track a page view with optional custom title.

### `matomo.trackEvent(category, action, name?, value?)`
Track a custom event.

### `matomo.trackLink(url, linkType)`
Track an outbound link or download.

### `matomo.trackSiteSearch(keyword, category?, resultsCount?)`
Track site search queries.

### `matomo.setCustomDimension(dimensionId, value)`
Set a custom dimension value.

### `matomo.isEnabled()`
Check if Matomo tracking is currently enabled.

## Troubleshooting

**Analytics not working?**

1. Check environment variables are set correctly
2. Verify `VITE_MATOMO_ENABLED=true`
3. Check browser console for errors
4. Ensure Do Not Track is disabled in your browser
5. Verify Matomo instance is accessible

**No data in Matomo dashboard?**

1. Wait a few minutes for data to appear
2. Check that tracking code is loaded (browser dev tools > Network tab)
3. Verify site ID is correct
4. Check Matomo server logs

## Resources

- [Matomo Documentation](https://matomo.org/docs/)
- [Matomo JavaScript Tracker](https://developer.matomo.org/api-reference/tracking-javascript)
- [GDPR Compliance](https://matomo.org/gdpr-analytics/)

---

**Last Updated**: 2025-11-15
