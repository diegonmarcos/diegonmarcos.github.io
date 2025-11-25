# Matomo Tag Manager Event Setup Guide

Based on your previous GTM configuration (GTM-TN9SV57D.json), this guide will help you recreate the same tracking events in Matomo Tag Manager.

**Matomo Dashboard:** https://analytics.diegonmarcos.com
**Container:** container_62tfw1ai

---

## ✅ Already Completed

1. **Basic Pageview Tracking** - Working ✓
   - Site ID: 1 (diegonmarcos.github.io)
   - Site ID: 2 (diegonmarcos.com)

---

## 1. Outbound Link Click Tracking

**Purpose:** Track when users click links that leave your site

### Create Trigger:
1. Go to **Tag Manager → Triggers → Create New Trigger**
2. **Name:** `Outbound Link Click`
3. **Type:** `Click`
4. **Conditions:**
   - Variable: `Click URL`
   - Condition: `contains`
   - Value: `http`
   - **AND**
   - Variable: `Click URL`
   - Condition: `does not contain`
   - Value: `diegonmarcos.github.io`

### Create Tag:
1. Go to **Tag Manager → Tags → Create New Tag**
2. **Name:** `Matomo Event - Outbound Link Click`
3. **Type:** `Matomo Analytics`
4. **Fire Trigger:** `Outbound Link Click`
5. **Tracking Type:** `Event`
6. **Event Category:** `Outbound Links`
7. **Event Action:** `Click`
8. **Event Name:** `{{ClickNodeName}}` or `{{ClickURL}}`

---

## 2. File Download Tracking

**Purpose:** Track PDF, DOCX, and other file downloads

### Create Trigger:
1. **Name:** `File Download Click`
2. **Type:** `Click`
3. **Conditions:**
   - Variable: `Click URL`
   - Condition: `matches regex`
   - Value: `\.(pdf|docx?|xlsx?|pptx?|zip|csv|md)$`

### Create Tag:
1. **Name:** `Matomo Event - File Download`
2. **Type:** `Matomo Analytics`
3. **Fire Trigger:** `File Download Click`
4. **Tracking Type:** `Event`
5. **Event Category:** `Downloads`
6. **Event Action:** `File Download`
7. **Event Name:** `{{ClickURL}}`

---

## 3. Scroll Depth Tracking

**Purpose:** Track how far users scroll (25%, 50%, 75%, 100%)

### Create Trigger:
1. **Name:** `Scroll Depth - 25%`
2. **Type:** `Scroll`
3. **Vertical Scroll Depths:** `25, 50, 75, 100`
4. **Fire on:** `All pages`

### Create Tag:
1. **Name:** `Matomo Event - Scroll Depth`
2. **Type:** `Matomo Analytics`
3. **Fire Trigger:** `Scroll Depth - 25%`
4. **Tracking Type:** `Event`
5. **Event Category:** `Engagement`
6. **Event Action:** `Scroll`
7. **Event Name:** `{{ScrollDepthThreshold}}%`

---

## 4. Linktree Link Click Tracking

**Purpose:** Track which links get clicked on your linktree page

### Create Variables First:

#### Variable 1: Linktree Link Category
1. **Name:** `Linktree Link Category`
2. **Type:** `JavaScript Variable`
3. **Variable Name:** `matomoLinkCategory` (you'll need to add this to your code)

#### Variable 2: Linktree Link Subsection
1. **Name:** `Linktree Link Subsection`
2. **Type:** `JavaScript Variable`
3. **Variable Name:** `matomoLinkSubsection`

### Create Trigger:
1. **Name:** `Linktree - Link Click`
2. **Type:** `Click`
3. **Conditions:**
   - Variable: `PagePath`
   - Condition: `contains`
   - Value: `/linktree`
   - **AND**
   - Variable: `Click Element Classes`
   - Condition: `contains`
   - Value: `link-item` (or whatever class your linktree links have)

### Create Tag:
1. **Name:** `Matomo Event - Linktree Link Click`
2. **Type:** `Matomo Analytics`
3. **Fire Trigger:** `Linktree - Link Click`
4. **Tracking Type:** `Event`
5. **Event Category:** `Linktree`
6. **Event Action:** `Link Click`
7. **Event Name:** `{{ClickText}}`

---

## 5. Social Icon Click Tracking

**Purpose:** Track social media icon clicks

### Create Trigger:
1. **Name:** `Social Icon Click`
2. **Type:** `Click`
3. **Conditions:**
   - Variable: `Click Element Classes`
   - Condition: `contains`
   - Value: `social-icon` (adjust based on your actual class names)

### Create Tag:
1. **Name:** `Matomo Event - Social Icon Click`
2. **Type:** `Matomo Analytics`
3. **Fire Trigger:** `Social Icon Click`
4. **Tracking Type:** `Event`
5. **Event Category:** `Social`
6. **Event Action:** `Icon Click`
7. **Event Name:** `{{ClickURL}}`

---

## 6. CV Download Tracking

**Purpose:** Track CV download button clicks

### Create Trigger:
1. **Name:** `CV Download Button Click`
2. **Type:** `Click`
3. **Conditions:**
   - Variable: `Click Element ID`
   - Condition: `matches regex`
   - Value: `(download-pdf|download-docx|download-csv|download-md)`

### Create Tag:
1. **Name:** `Matomo Event - CV Download`
2. **Type:** `Matomo Analytics`
3. **Fire Trigger:** `CV Download Button Click`
4. **Tracking Type:** `Event`
5. **Event Category:** `CV`
6. **Event Action:** `Download`
7. **Event Name:** `{{ClickElementId}}`

---

## 7. Session Info Tracking (Custom Dimensions)

**Purpose:** Track device type, browser, viewport size

### Create Custom Dimensions First:

1. Go to **Administration → Measurables → diegonmarcos.github.io → Custom Dimensions**
2. Create these dimensions:
   - **Dimension 1:** `Device Type` (Scope: Visit)
   - **Dimension 2:** `Browser` (Scope: Visit)
   - **Dimension 3:** `Viewport Width` (Scope: Visit)
   - **Dimension 4:** `Screen Resolution` (Scope: Visit)

### Create Variables:

#### Variable: Device Type
1. **Name:** `Device Type`
2. **Type:** `JavaScript Function`
3. **Code:**
```javascript
function() {
  return /Mobile|Android|iPhone|iPad/i.test(navigator.userAgent) ? 'mobile' : 'desktop';
}
```

#### Variable: Browser Name
1. **Name:** `Browser Name`
2. **Type:** `JavaScript Function`
3. **Code:**
```javascript
function() {
  var ua = navigator.userAgent;
  if (ua.indexOf('Firefox') > -1) return 'Firefox';
  if (ua.indexOf('Chrome') > -1) return 'Chrome';
  if (ua.indexOf('Safari') > -1) return 'Safari';
  if (ua.indexOf('Edge') > -1) return 'Edge';
  return 'Other';
}
```

### Create Tag:
1. **Name:** `Matomo - Set Custom Dimensions`
2. **Type:** `Matomo Analytics`
3. **Fire Trigger:** `Pageview` (or `All Pages` trigger)
4. **Tracking Type:** `Custom Dimension`
5. **Custom Dimension Settings:**
   - Dimension 1 (Device Type): `{{Device Type}}`
   - Dimension 2 (Browser): `{{Browser Name}}`
   - Dimension 3 (Viewport): `{{ViewportWidth}}`
   - Dimension 4 (Screen): `{{ScreenWidth}}x{{ScreenHeight}}`

---

## 8. Video Tracking (Advanced)

**Purpose:** Track HTML5 video interactions

### Create Custom HTML Tag:
1. **Name:** `Video Tracking - Universal`
2. **Type:** `Custom HTML`
3. **Fire Trigger:** `All Pages`
4. **HTML Code:**

```html
<script>
(function() {
  var _paq = window._paq = window._paq || [];

  setTimeout(function() {
    var videos = document.querySelectorAll('video');

    videos.forEach(function(video, index) {
      var videoId = video.id || 'video_' + index;
      var videoSrc = video.currentSrc || 'unknown';

      video.addEventListener('play', function() {
        _paq.push(['trackEvent', 'Video', 'Play', videoId]);
      });

      video.addEventListener('pause', function() {
        var percent = Math.round((video.currentTime / video.duration) * 100);
        _paq.push(['trackEvent', 'Video', 'Pause', videoId, percent]);
      });

      video.addEventListener('ended', function() {
        _paq.push(['trackEvent', 'Video', 'Complete', videoId]);
      });
    });
  }, 1000);
})();
</script>
```

---

## 9. Time-Based Engagement Tracking

**Purpose:** Track how long users stay on page

### Create Triggers:

1. **Timer - 10 seconds**
   - Type: `Timer`
   - Interval: `10000` ms
   - Limit: `1`

2. **Timer - 30 seconds**
   - Type: `Timer`
   - Interval: `30000` ms
   - Limit: `1`

3. **Timer - 60 seconds**
   - Type: `Timer`
   - Interval: `60000` ms
   - Limit: `1`

### Create Tags:

1. **Name:** `Matomo Event - Time on Page 10s`
2. **Type:** `Matomo Analytics`
3. **Fire Trigger:** `Timer - 10 seconds`
4. **Tracking Type:** `Event`
5. **Event Category:** `Engagement`
6. **Event Action:** `Time on Page`
7. **Event Name:** `10 seconds`

Repeat for 30s, 60s, 120s, 300s.

---

## Publishing Your Changes

After creating all tags and triggers:

1. Go to **Tag Manager → Versions**
2. Click **Create Version**
3. **Version Name:** `v2 - Event Tracking Setup`
4. **Description:** `Added scroll, outbound, download, linktree, social, CV, and session tracking`
5. Click **Publish**
6. Select **Live** environment
7. Confirm

---

## Testing Your Setup

1. **Enable Preview Mode:**
   - Go to Tag Manager → Preview
   - Click "Enable Preview Mode"
   - Visit your site

2. **Check Events in Real-time:**
   - Go to Matomo → Visitors → Real-time
   - Navigate your site and trigger events
   - Verify events appear

3. **Check Event Reports:**
   - Go to Matomo → Behavior → Events
   - View events by Category, Action, Name

---

## Verification Checklist

- [ ] Pageviews tracked
- [ ] Outbound links tracked
- [ ] File downloads tracked
- [ ] Scroll depth tracked
- [ ] Linktree links tracked
- [ ] Social icons tracked
- [ ] CV downloads tracked
- [ ] Custom dimensions working
- [ ] Video tracking working (if applicable)
- [ ] Time-based events firing

---

## Notes

**Matomo vs GA4 Differences:**
- Matomo uses **Event Category/Action/Name** instead of GA4's event parameters
- Matomo has **Custom Dimensions** instead of GA4's custom parameters
- Matomo's **Content Tracking** is more powerful than GA4's enhanced measurement
- Matomo supports **Heatmaps & Session Recordings** (requires plugin)

**Best Practices:**
- Test in Preview Mode before publishing
- Use consistent naming conventions for events
- Document your custom dimensions
- Review event reports weekly
- Set up Goals based on important events

---

## Support Resources

- [Matomo Tag Manager Documentation](https://matomo.org/guide/tag-manager/)
- [Matomo Events Tracking Guide](https://matomo.org/guide/reports/event-tracking/)
- [Matomo Custom Dimensions](https://matomo.org/guide/reports/custom-dimensions/)

---

Generated from GTM-TN9SV57D.json configuration
Last updated: 2025-11-25
