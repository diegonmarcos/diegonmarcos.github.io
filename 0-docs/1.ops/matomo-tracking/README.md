# Matomo Tracking Scripts

Page-specific tracking scripts for Matomo analytics integration.

**Last Updated**: 2025-11-25
**Matomo Server**: https://analytics.diegonmarcos.com
**Container**: 62tfw1ai v6 "Proxy Tracking"

---

## 📂 Files

| Script | Page | Size | Events Tracked |
|--------|------|------|----------------|
| `root.js` | `/index.html` | 2.5KB | CTA clicks, Clippy, theme toggles |
| `linktree.js` | `/linktree/` | 3.6KB | Link clicks, social icons, sections |
| `nexus.js` | `/nexus/` | 0.9KB | Generic tracking |
| `cv_pdf.js` | `/cv_pdf/` | 2.8KB | Downloads, navigation, zoom |
| `cv_web.js` | `/cv_web/` | 4.1KB | Downloads, UI controls |
| `myfeed.js` | `/myfeed/` | 1.7KB | Feed items, filters |
| `mygames.js` | `/mygames/` | 2.9KB | SPA navigation, games |
| `cloud.js` | `/cloud/` | 1.8KB | Service cards, docs |
| `feed_yourself.js` | `/feed_yourself/` | 1.1KB | Actions, content |

**Total**: 9 scripts, ~22KB

---

## 🚀 Usage

### Step 1: Add Matomo Tag Manager Container

Add this to the `<head>` section of **every page**:

```html
<!-- Matomo Tag Manager -->
<script>
var _mtm = window._mtm = window._mtm || [];
_mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
(function() {
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.async=true; g.src='https://analytics.diegonmarcos.com/js/container_odwLIyPV.js';
  s.parentNode.insertBefore(g,s);
})();
</script>
<!-- End Matomo Tag Manager -->
```

### Step 2: Add Page-Specific Script

Add this at the **end of `<body>`** section:

**Root page** (`/index.html`):
```html
<script src="/1.ops/matomo-tracking/root.js"></script>
```

**Linktree page** (`/linktree/index.html`):
```html
<script src="/1.ops/matomo-tracking/linktree.js"></script>
```

**CV Web** (`/cv_web/index.html`):
```html
<script src="/1.ops/matomo-tracking/cv_web.js"></script>
```

**CV PDF** (`/cv_pdf/index.html`):
```html
<script src="/1.ops/matomo-tracking/cv_pdf.js"></script>
```

**MyGames** (`/mygames/index.html`):
```html
<script src="/1.ops/matomo-tracking/mygames.js"></script>
```

And so on for other pages...

---

## 📋 What's Tracked

### Universal (All Pages - via MTM Container)

Automatically tracked by Matomo Tag Manager:
- ✅ **Page views**
- ✅ **Scroll depth** (25%, 50%, 75%, 100%)
- ✅ **Outbound links** (external domains)
- ✅ **File downloads** (PDF, DOCX, etc.)

### Page-Specific Events

**Root Page**:
```javascript
_paq.push(['trackEvent', 'CTA', 'Click', 'Linktree']);
_paq.push(['trackEvent', 'Clippy', 'Action', 'Theme Toggle']);
_paq.push(['trackEvent', 'UI', 'Theme Toggle', 'dark']);
_paq.push(['trackEvent', 'Engagement', 'Time on Page', '30s']);
```

**Linktree**:
```javascript
_paq.push(['trackEvent', 'Linktree', 'Link Click', 'Professional - GitHub']);
_paq.push(['trackEvent', 'Social', 'Icon Click', 'LinkedIn']);
_paq.push(['trackEvent', 'Linktree', 'More Button', 'Professional - Expand']);
_paq.push(['trackEvent', 'Download', 'vCard', 'Contact Card']);
```

**CV Pages**:
```javascript
_paq.push(['trackEvent', 'CV', 'Download', 'PDF']);
_paq.push(['trackEvent', 'CV UI', 'Theme Toggle', 'dark']);
_paq.push(['trackEvent', 'CV UI', 'Font Size', 'Increase']);
_paq.push(['trackEvent', 'CV PDF', 'Navigation', 'Next Page']);
```

**MyGames**:
```javascript
_paq.push(['trackEvent', 'MyGames', 'Navigation', 'Photos']);
_paq.push(['trackEvent', 'MyGames', 'Game Select', 'Pinball']);
_paq.push(['trackEvent', 'MyGames', 'Music', 'Play']);
```

---

## 🔧 Implementation Guide

### Option 1: External Script (Recommended)

Keep scripts in this directory and reference them:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Your Page</title>

    <!-- Matomo Tag Manager -->
    <script>
    var _mtm = window._mtm = window._mtm || [];
    _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
    (function() {
      var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
      g.async=true; g.src='https://analytics.diegonmarcos.com/js/container_odwLIyPV.js';
      s.parentNode.insertBefore(g,s);
    })();
    </script>
</head>
<body>
    <!-- Your content -->

    <!-- Page tracking -->
    <script src="/1.ops/matomo-tracking/YOUR_PAGE.js"></script>
</body>
</html>
```

### Option 2: Inline Script

Copy the JavaScript directly into the page:

```html
<script>
// Copy contents of tracking.js here
(function() {
  'use strict';
  // ... tracking code ...
})();
</script>
```

---

## 📊 Event Structure

All events follow Matomo's standard format:

```javascript
_paq.push(['trackEvent', Category, Action, Name, Value]);
```

**Parameters**:
- `Category`: Group (e.g., 'Linktree', 'CV', 'MyGames')
- `Action`: What happened (e.g., 'Link Click', 'Download', 'Navigation')
- `Name`: Specific detail (e.g., 'PDF', 'GitHub', 'Pinball')
- `Value` (optional): Numeric value or URL

---

## 🎨 Customization

### Adding New Events

Edit the appropriate `.js` file and add:

```javascript
document.addEventListener('click', function(e) {
  var target = e.target.closest('.your-element');
  if (target) {
    _paq.push(['trackEvent', 'Category', 'Action', 'Name']);
  }
});
```

### Testing Events

1. Open browser DevTools → Console
2. Check for: `Matomo not loaded` warning (should NOT appear)
3. Click tracked elements
4. Verify events in Matomo dashboard: **Behavior → Events**

---

## 🔍 Troubleshooting

### Script Not Working

**Check 1**: MTM Container loaded?
```javascript
// In browser console:
console.log(typeof _paq);  // Should be 'object'
console.log(typeof _mtm);  // Should be 'object'
```

**Check 2**: Script path correct?
- View page source
- Check if script tag exists
- Verify path: `/1.ops/matomo-tracking/XXX.js`
- Check browser Network tab for 404 errors

**Check 3**: Events firing?
- Open: https://analytics.diegonmarcos.com
- Go to: **Behavior → Events**
- Set date range to "Today"
- Click tracked elements on site
- Wait 5-10 seconds, refresh Matomo

### No Events Appearing

1. **Clear browser cache** (hard refresh: Ctrl+Shift+R)
2. **Check ad-blockers** - Should work with anti-blocker proxy
3. **Verify MTM container published** - Version v6 active
4. **Test with different browser** - Chrome vs Firefox

---

## 📈 Viewing Analytics

### Access Matomo Dashboard

**URL**: https://analytics.diegonmarcos.com

**Navigate to**:
- **Visitors → Overview** - General stats
- **Behavior → Pages** - Page views
- **Behavior → Events** - Custom events
- **Behavior → Outlinks** - External links

### Event Reports

**Path**: Behavior → Events

**Filters**:
- Event Category: Linktree, CV, MyGames, etc.
- Event Action: Link Click, Download, Navigation, etc.
- Event Name: Specific items clicked

---

## 🔐 Privacy & Compliance

- ✅ **Self-hosted** - Data stays on your server
- ✅ **No third parties** - No Google, no external tracking
- ✅ **Anti-blocker proxy** - Uses `collect.php` endpoint
- ✅ **GDPR compliant** - Privacy-friendly
- ✅ **No cookies** (by default) - Cookieless tracking

---

## 🛠️ Maintenance

### When Adding New Pages

1. Create tracking script in `/back-System/cloud/vps_oracle/matomo/tags/NEW_PAGE/`
2. Copy to `/1.ops/matomo-tracking/new_page.js`
3. Add MTM container to page `<head>`
4. Add tracking script to page `<body>`
5. Test and verify

### When Updating Scripts

1. Edit source in `/back-System/...` (backup location)
2. Copy updated file to `/1.ops/matomo-tracking/`
3. Git commit changes
4. Deploy to GitHub Pages

---

## 📚 Related Documentation

**Matomo Server**:
- Spec: `/back-System/cloud/vps_oracle/MATOMO_COMPLETE_SPEC.md`
- Tags: `/back-System/cloud/vps_oracle/matomo/tags/`

**Matomo Docs**:
- JavaScript Tracking: https://developer.matomo.org/guides/tracking-javascript-guide
- Event Tracking: https://matomo.org/docs/event-tracking/
- Tag Manager: https://matomo.org/guide/tag-manager/

---

## ✅ Deployment Checklist

Before going live:

- [ ] MTM container added to all HTML pages
- [ ] Page-specific scripts added where appropriate
- [ ] Tested on localhost/preview
- [ ] Verified events appear in Matomo dashboard
- [ ] No console errors in browser DevTools
- [ ] Anti-blocker proxy working (test in Brave browser)
- [ ] Git committed and pushed
- [ ] Deployed to GitHub Pages

---

**Source**: `/back-System/cloud/vps_oracle/matomo/tags/`
**Matomo Dashboard**: https://analytics.diegonmarcos.com
**Tracking Endpoint**: collect.php (anti-blocker enabled)
**Last Updated**: 2025-11-25
