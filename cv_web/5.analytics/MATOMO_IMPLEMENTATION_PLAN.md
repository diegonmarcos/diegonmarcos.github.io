# 📊 Matomo Analytics Implementation Plan

## Current State
- ✅ **SvelteKit app** (`myprofile/`) - Matomo already implemented
- ❌ **Static portfolio sites** - Only GTM (GTM-TN9SV57D) currently implemented
  - cv_web, linktree, cv_pdf, index.html, others/

## Implementation Strategy

### Phase 1: Setup & Configuration (30 mins)
1. **Get Matomo Instance**
   - Option A: Self-hosted on your server
   - Option B: Matomo Cloud (https://matomo.org/start-free-analytics-trial/)
   - Get: Matomo URL + Site ID

2. **Create Shared Matomo Module**
   - Location: `/5.analytics/matomo.js`
   - Based on existing TypeScript service
   - Convert to vanilla JavaScript for HTML pages
   - Features: Cookie-less, DNT respect, GDPR compliant

### Phase 2: Core Integration (1-2 hours)
1. **Create Universal Matomo Script** (`5.analytics/matomo.js`)
   - Load Matomo tracking code
   - Initialize with URL and Site ID
   - Privacy-first settings (no cookies)
   - Dual tracking with GTM

2. **Integrate into Each Page**
   - Add after GTM in `<head>` section
   - Pages: cv_web/index.html, linktree/index.html, index.html, cv_pdf/index.html, others/

3. **Environment Configuration**
   - Create `.env.matomo` for credentials
   - Add to `.gitignore` for security

### Phase 3: Enhanced Tracking (2-3 hours)
1. **Custom Events** (per page type)
   - **cv_web**: Section navigation, collapsible toggles, downloads
   - **linktree**: Link clicks, social icons, video interactions
   - **cv_pdf**: Page navigation, zoom actions
   - **index.html**: Portfolio navigation

2. **GTM + Matomo Parallel Tracking**
   - GTM for business analytics (GA4)
   - Matomo for privacy-focused analytics
   - No data duplication, complementary insights

### Phase 4: Privacy & Compliance (1 hour)
1. **Cookie Consent Integration**
   - Extend existing consent banner (linktree has one)
   - Add Matomo toggle separate from GTM
   - Update consent for both systems

2. **Privacy Policy Updates**
   - Document dual analytics (GTM + Matomo)
   - Explain cookie-less tracking
   - Add opt-out mechanism

### Phase 5: Testing & Deployment (1 hour)
1. **Local Testing**
   - Verify tracking in browser console
   - Check Matomo real-time dashboard
   - Test DNT header respect

2. **Deploy**
   - Commit changes
   - Push to GitHub
   - Verify on live site

## File Structure
```
/5.analytics/
  ├── matomo.js           # Universal Matomo script
  ├── matomo-config.js    # Configuration (site-specific)
  └── README.md          # Documentation

/cv_web/5.analytics/
  ├── events.js          # CV-specific custom events
  ├── MATOMO_IMPLEMENTATION_PLAN.md  # This file
  └── README.md

/linktree/5.analytics/
  ├── events.js          # Linktree-specific events
  └── README.md
```

## Integration Pattern
```html
<!-- In <head> after GTM -->
<script>
  // Matomo configuration
  window.MATOMO_CONFIG = {
    url: 'YOUR_MATOMO_URL',
    siteId: 'YOUR_SITE_ID',
    enabled: true
  };
</script>
<script src="/5.analytics/matomo.js"></script>
```

## Existing Matomo Service (TypeScript Reference)
Location: `/myprofile/1.2.analytics/matomo.service.ts`

Key features already implemented:
- Cookie-less tracking
- DNT (Do Not Track) respect
- Custom events tracking
- Link tracking
- Site search tracking
- Custom dimensions
- GDPR compliant

## Benefits
✅ Privacy-first analytics (GDPR compliant)
✅ Own your data (vs. Google ownership)
✅ No cookies required
✅ Complementary to GTM (not replacement)
✅ Detailed user journey insights
✅ Open-source and customizable

## GTM vs Matomo - Dual Analytics Strategy

### GTM (Google Tag Manager)
- **Purpose**: Business analytics, conversions, marketing
- **Tool**: GA4 (Google Analytics 4)
- **Data ownership**: Google
- **Privacy**: Cookie-based (with consent)
- **Best for**: Marketing attribution, funnel analysis, e-commerce

### Matomo
- **Purpose**: Privacy-focused web analytics
- **Tool**: Self-hosted or Matomo Cloud
- **Data ownership**: You (100%)
- **Privacy**: Cookie-less, GDPR compliant
- **Best for**: User behavior, privacy-conscious visitors, detailed insights

### Why Both?
1. **Compliance**: Matomo for EU/privacy-conscious visitors
2. **Complete Picture**: GTM for marketing, Matomo for user experience
3. **Data Ownership**: Own your core analytics data
4. **Fallback**: If GTM is blocked by ad-blockers, Matomo still works

## Timeline
- **Total**: 5-7 hours
- **Phase 1**: 30 mins - Setup & get credentials
- **Phase 2**: 1-2 hours - Core integration
- **Phase 3**: 2-3 hours - Custom events
- **Phase 4**: 1 hour - Privacy & compliance
- **Phase 5**: 1 hour - Testing & deployment

## Next Steps
1. Choose Matomo hosting (Cloud or Self-hosted)
2. Get Matomo URL and Site ID
3. Create vanilla JS version of matomo.service.ts
4. Integrate into HTML pages
5. Add custom event tracking
6. Test and deploy

---

**Created**: 2025-11-15
**Status**: Planning Phase
**Reference**: Based on existing SvelteKit implementation at `/myprofile/1.2.analytics/`
