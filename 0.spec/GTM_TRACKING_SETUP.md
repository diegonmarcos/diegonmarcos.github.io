# GTM Universal Event Tracking Setup Guide
## Container: GTM-TN9SV57D

This guide provides complete GTM configuration for universal event tracking across all HTML pages without any code changes.

---

## 🎯 Table of Contents
1. [Initial GTM Setup](#initial-gtm-setup)
2. [Universal Events (All Pages)](#universal-events-all-pages)
3. [Page-Specific Events](#page-specific-events)
4. [Testing & Verification](#testing--verification)

---

## Initial GTM Setup

### Step 1: Configure Google Analytics 4
1. Go to [tagmanager.google.com](https://tagmanager.google.com)
2. Select container **GTM-TN9SV57D**
3. Create a new **Tag**:
   - **Tag Type**: Google Analytics: GA4 Configuration
   - **Measurement ID**: `G-VB9ENP6DZ0`
   - **Trigger**: All Pages
   - **Name**: "GA4 Config - All Pages"

---

## Universal Events (All Pages)

### 1. 📊 Scroll Depth Tracking

**Built-in Variable:**
- Go to **Variables** → **Built-In Variables** → **Configure**
- Enable: `Scroll Depth Threshold`, `Scroll Depth Units`, `Scroll Direction`

**Trigger:**
- **Name**: Scroll Depth - 25%, 50%, 75%, 100%
- **Type**: Scroll Depth
- **Vertical Scroll Depths**: 25, 50, 75, 100
- **Trigger Type**: Percentages
- **Fires on**: All Pages

**Tag:**
- **Name**: GA4 Event - Scroll Depth
- **Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Config - All Pages
- **Event Name**: `scroll_depth`
- **Event Parameters**:
  - `depth_percentage`: `{{Scroll Depth Threshold}}`
  - `page_path`: `{{Page Path}}`
  - `page_title`: `{{Page Title}}`
- **Trigger**: Scroll Depth - 25%, 50%, 75%, 100%

---

### 2. 🔗 Outbound Link Tracking

**Variable - Link URL:**
- **Name**: Click URL
- **Type**: Auto-Event Variable
- **Variable Type**: Click URL

**Trigger:**
- **Name**: Outbound Link Click
- **Type**: Click - All Elements
- **Fires on**: Some Clicks
- **Condition**: Click URL does not contain `diegonmarcos.github.io`
- **AND**: Click URL starts with `http`

**Tag:**
- **Name**: GA4 Event - Outbound Link
- **Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Config - All Pages
- **Event Name**: `outbound_click`
- **Event Parameters**:
  - `link_url`: `{{Click URL}}`
  - `link_text`: `{{Click Text}}`
  - `link_domain`: Use Custom JavaScript Variable (see below)
  - `page_location`: `{{Page URL}}`
- **Trigger**: Outbound Link Click

**Custom JavaScript Variable for Link Domain:**
```javascript
function() {
  var url = {{Click URL}};
  if (url) {
    var domain = url.match(/:\/\/(.[^/]+)/)[1];
    return domain;
  }
  return 'unknown';
}
```

---

### 3. 📥 File Download Tracking

**Trigger:**
- **Name**: File Download Click
- **Type**: Click - All Elements
- **Fires on**: Some Clicks
- **Condition**: Click Element matches CSS selector `a[download], a[href$=".pdf"], a[href$=".docx"], a[href$=".csv"], a[href$=".md"], a[href$=".vcf"]`

**Tag:**
- **Name**: GA4 Event - File Download
- **Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Config - All Pages
- **Event Name**: `file_download`
- **Event Parameters**:
  - `file_name`: `{{Click Text}}`
  - `file_url`: `{{Click URL}}`
  - `file_extension`: Use Custom JavaScript Variable (see below)
  - `page_location`: `{{Page URL}}`
- **Trigger**: File Download Click

**Custom JavaScript Variable for File Extension:**
```javascript
function() {
  var url = {{Click URL}};
  if (url) {
    var extension = url.split('.').pop().split('?')[0];
    return extension;
  }
  return 'unknown';
}
```

---

### 4. ⏱️ Time on Page Milestones

**Timer Trigger:**
- **Name**: Timer - 10s
- **Type**: Timer
- **Event Name**: timer_10s
- **Interval**: 10000 (milliseconds)
- **Limit**: 1
- **Fires on**: All Pages

**Repeat for**: 30s, 60s, 120s, 300s intervals

**Tag (for each timer):**
- **Name**: GA4 Event - Time on Page {X}s
- **Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Config - All Pages
- **Event Name**: `time_on_page`
- **Event Parameters**:
  - `duration_seconds`: `10` (or 30, 60, 120, 300)
  - `page_path`: `{{Page Path}}`
  - `page_title`: `{{Page Title}}`
- **Trigger**: Timer - {X}s

---

### 5. 📱 Device & Session Info

**Custom HTML Tag:**
- **Name**: Enhanced Session Info
- **Type**: Custom HTML
- **HTML**:
```html
<script>
(function() {
  window.dataLayer = window.dataLayer || [];

  // Push enhanced session data
  dataLayer.push({
    'event': 'session_info',
    'device_type': /Mobile|Android|iPhone/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
    'browser': (function() {
      var ua = navigator.userAgent;
      if (ua.indexOf('Firefox') > -1) return 'Firefox';
      if (ua.indexOf('Chrome') > -1) return 'Chrome';
      if (ua.indexOf('Safari') > -1) return 'Safari';
      if (ua.indexOf('Edge') > -1) return 'Edge';
      return 'Other';
    })(),
    'viewport_width': window.innerWidth,
    'viewport_height': window.innerHeight,
    'screen_resolution': screen.width + 'x' + screen.height,
    'language': navigator.language,
    'referrer': document.referrer
  });
})();
</script>
```
- **Trigger**: All Pages
- **Advanced Settings**: Fire once per page

---

### 6. 🎬 Video Tracking (Auto-detect)

**Custom HTML Tag:**
- **Name**: Universal Video Tracking
- **Type**: Custom HTML
- **HTML**:
```html
<script>
(function() {
  window.dataLayer = window.dataLayer || [];

  // Wait for video elements to load
  setTimeout(function() {
    var videos = document.querySelectorAll('video');

    videos.forEach(function(video, index) {
      var videoId = video.id || 'video_' + index;

      // Track play
      video.addEventListener('play', function() {
        dataLayer.push({
          'event': 'video_interaction',
          'video_action': 'play',
          'video_id': videoId,
          'video_src': video.currentSrc,
          'video_duration': video.duration
        });
      });

      // Track pause
      video.addEventListener('pause', function() {
        dataLayer.push({
          'event': 'video_interaction',
          'video_action': 'pause',
          'video_id': videoId,
          'video_current_time': video.currentTime,
          'video_percent': Math.round((video.currentTime / video.duration) * 100)
        });
      });

      // Track completion
      video.addEventListener('ended', function() {
        dataLayer.push({
          'event': 'video_interaction',
          'video_action': 'complete',
          'video_id': videoId
        });
      });
    });
  }, 1000);
})();
</script>
```
- **Trigger**: All Pages

---

## Page-Specific Events

### 7. 🌳 Linktree Page - Link Click Tracking

**Trigger:**
- **Name**: Linktree - Link Click
- **Type**: Click - All Elements
- **Fires on**: Some Clicks
- **Condition**: Page Path contains `/linktree`
- **AND**: Click Element matches CSS selector `a.link`

**Custom JavaScript Variables:**

**Link Category:**
```javascript
function() {
  var element = {{Click Element}};
  var section = element.closest('.link-section');
  if (section) {
    var title = section.querySelector('.section-title');
    return title ? title.textContent.trim() : 'Unknown';
  }
  return 'Unknown';
}
```

**Link Subsection:**
```javascript
function() {
  var element = {{Click Element}};
  var subsection = element.closest('.links-container');
  if (subsection) {
    var prevTitle = subsection.previousElementSibling;
    while (prevTitle && !prevTitle.classList.contains('subsection-title')) {
      prevTitle = prevTitle.previousElementSibling;
    }
    return prevTitle ? prevTitle.textContent.trim() : 'Unknown';
  }
  return 'Unknown';
}
```

**Tag:**
- **Name**: GA4 Event - Linktree Link Click
- **Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Config - All Pages
- **Event Name**: `linktree_link_click`
- **Event Parameters**:
  - `link_category`: `{{Link Category}}`
  - `link_subsection`: `{{Link Subsection}}`
  - `link_text`: `{{Click Text}}`
  - `link_url`: `{{Click URL}}`
  - `link_type`: Use Custom JS to detect external/download/internal
- **Trigger**: Linktree - Link Click

---

### 8. 🌳 Linktree - Social Icon Clicks

**Trigger:**
- **Name**: Linktree - Social Icon Click
- **Type**: Click - All Elements
- **Fires on**: Some Clicks
- **Condition**: Page Path contains `/linktree`
- **AND**: Click Element matches CSS selector `.social-icons a`

**Tag:**
- **Name**: GA4 Event - Social Icon Click
- **Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Config - All Pages
- **Event Name**: `social_icon_click`
- **Event Parameters**:
  - `icon_platform`: Use Custom JS to extract from title attribute
  - `icon_location`: `header`
  - `link_url`: `{{Click URL}}`
- **Trigger**: Linktree - Social Icon Click

---

### 9. 🌳 Linktree - Section Toggle Tracking

**Custom HTML Tag:**
- **Name**: Linktree Section Toggle Tracking
- **Type**: Custom HTML
- **HTML**:
```html
<script>
(function() {
  if (!window.location.pathname.includes('/linktree')) return;

  window.dataLayer = window.dataLayer || [];

  setTimeout(function() {
    var sectionTitles = document.querySelectorAll('.section-title');

    sectionTitles.forEach(function(title) {
      title.addEventListener('click', function() {
        var section = this.parentElement;
        var linksContainer = section.querySelector('.links-container');
        var isExpanded = linksContainer.style.display !== 'none';

        dataLayer.push({
          'event': 'section_toggle',
          'section_name': this.textContent.trim(),
          'action': isExpanded ? 'expand' : 'collapse',
          'page_path': window.location.pathname
        });
      });
    });
  }, 1000);
})();
</script>
```
- **Trigger**: Page Path contains `/linktree`

---

### 10. 🌳 Linktree - Preview Toggle Tracking

**Trigger:**
- **Name**: Linktree - Preview Toggle
- **Type**: Click - All Elements
- **Fires on**: Some Clicks
- **Condition**: Page Path contains `/linktree`
- **AND**: Click Element matches CSS selector `#preview-toggle`

**Tag:**
- **Name**: GA4 Event - Preview Toggle
- **Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Config - All Pages
- **Event Name**: `preview_toggle`
- **Event Parameters**:
  - `preview_enabled`: Use Custom JS to get checkbox state
  - `device_type`: `{{device_type}}` from session info
- **Trigger**: Linktree - Preview Toggle

---

### 11. 📄 CV Pages - Download Button Tracking

**Trigger:**
- **Name**: CV - Download Button Click
- **Type**: Click - All Elements
- **Fires on**: Some Clicks
- **Condition**: Click Element matches CSS selector `#download-btn-pdf, #download-btn-docx, #download-btn-md, #download-btn-csv, .cta-button`

**Tag:**
- **Name**: GA4 Event - CV Download
- **Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Config - All Pages
- **Event Name**: `cv_download`
- **Event Parameters**:
  - `cv_format`: Use Custom JS to extract format from button ID
  - `download_location`: `{{Page Path}}`
  - `button_text`: `{{Click Text}}`
- **Trigger**: CV - Download Button Click

---

### 12. 📄 CV PDF Viewer - Page Navigation

**Custom HTML Tag:**
- **Name**: CV PDF - Page Navigation Tracking
- **Type**: Custom HTML
- **HTML**:
```html
<script>
(function() {
  if (!window.location.pathname.includes('/cv_pdf')) return;

  window.dataLayer = window.dataLayer || [];

  // Monitor page number changes
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.target.id === 'page-num') {
        dataLayer.push({
          'event': 'pdf_page_view',
          'page_number': mutation.target.textContent,
          'total_pages': document.getElementById('page-count').textContent,
          'pdf_location': window.location.pathname
        });
      }
    });
  });

  setTimeout(function() {
    var pageNumElement = document.getElementById('page-num');
    if (pageNumElement) {
      observer.observe(pageNumElement, {
        childList: true,
        characterData: true,
        subtree: true
      });
    }
  }, 2000);
})();
</script>
```
- **Trigger**: Page Path contains `/cv_pdf`

---

### 13. 🎯 Call-to-Action (CTA) Tracking

**Trigger:**
- **Name**: CTA Button Click
- **Type**: Click - All Elements
- **Fires on**: Some Clicks
- **Condition**: Click Element matches CSS selector `.cta-button, button[class*="cta"], a[class*="cta"]`

**Tag:**
- **Name**: GA4 Event - CTA Click
- **Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Config - All Pages
- **Event Name**: `cta_click`
- **Event Parameters**:
  - `cta_text`: `{{Click Text}}`
  - `cta_url`: `{{Click URL}}`
  - `page_location`: `{{Page URL}}`
  - `cta_position`: Use Custom JS to determine if header/footer/body
- **Trigger**: CTA Button Click

---

## Testing & Verification

### Step 1: Preview Mode
1. In GTM, click **Preview**
2. Enter your website URL: `https://diegonmarcos.github.io`
3. Navigate through different pages
4. Verify events fire in the GTM Debug panel

### Step 2: Check Events in Real-Time
1. Open Google Analytics 4
2. Go to **Reports** → **Realtime**
3. Perform actions on your site
4. Verify events appear in real-time

### Step 3: Common Events to Test

**All Pages:**
- ✅ Page view loads
- ✅ Scroll to 25%, 50%, 75%, 100%
- ✅ Click external link
- ✅ Stay on page for 10s, 30s, 60s
- ✅ Session info captured

**Linktree Page:**
- ✅ Click any link
- ✅ Click social icons
- ✅ Toggle section (expand/collapse)
- ✅ Toggle preview switch
- ✅ Download vCard

**CV Pages:**
- ✅ Click download buttons
- ✅ Navigate PDF pages (cv_pdf)
- ✅ Click CTA buttons

---

## 🚀 Deployment

### Step 1: Save & Test
1. Save all tags, triggers, and variables
2. Test thoroughly in Preview mode

### Step 2: Submit Version
1. Click **Submit** in GTM
2. **Version Name**: "Universal Event Tracking v1.0"
3. **Description**: "Comprehensive event tracking across all pages"
4. **Publish**

### Step 3: Monitor
1. Check GA4 Real-time reports for 24-48 hours
2. Look for any errors or missing events
3. Adjust triggers/tags as needed

---

## 📊 Expected Events Summary

| Event Name | Description | Fires On |
|------------|-------------|----------|
| `page_view` | Page loads | All pages |
| `scroll_depth` | User scrolls | 25%, 50%, 75%, 100% |
| `outbound_click` | External link clicked | All external links |
| `file_download` | File downloaded | PDF, DOCX, VCF, etc. |
| `time_on_page` | Time milestone reached | 10s, 30s, 60s, 120s, 300s |
| `session_info` | Device & browser info | On page load |
| `video_interaction` | Video play/pause/complete | Video elements |
| `linktree_link_click` | Linktree link clicked | Linktree page |
| `social_icon_click` | Social icon clicked | Header icons |
| `section_toggle` | Section expanded/collapsed | Linktree sections |
| `preview_toggle` | Preview toggled on/off | Preview switch |
| `cv_download` | CV downloaded | CV download buttons |
| `pdf_page_view` | PDF page viewed | CV PDF viewer |
| `cta_click` | CTA button clicked | All CTA buttons |

---

## 🔧 Maintenance & Updates

### Adding New Events
1. Create new trigger in GTM
2. Create corresponding tag
3. Test in Preview mode
4. Publish new version

### Debugging
- Use GTM Preview mode
- Check browser console for errors
- Review GA4 DebugView
- Verify dataLayer pushes

### Best Practices
- Always test in Preview before publishing
- Document all custom variables
- Use consistent naming conventions
- Monitor event counts in GA4
- Set up custom reports for key metrics

---

## 📈 Recommended GA4 Reports

### Custom Explorations to Create:

1. **Link Performance**
   - Dimension: `link_url`, `link_text`, `link_category`
   - Metric: Event count
   - Event: `linktree_link_click`

2. **User Engagement**
   - Dimension: `page_path`, `duration_seconds`
   - Metric: Users, Sessions
   - Event: `time_on_page`

3. **CV Download Analysis**
   - Dimension: `cv_format`, `page_location`
   - Metric: Event count
   - Event: `cv_download`

4. **Scroll Behavior**
   - Dimension: `page_path`, `depth_percentage`
   - Metric: Users
   - Event: `scroll_depth`

---

## 🎓 Resources

- [Google Tag Manager Documentation](https://support.google.com/tagmanager)
- [GA4 Event Reference](https://support.google.com/analytics/answer/9267735)
- [GTM Debug Mode Guide](https://support.google.com/tagmanager/answer/6107056)
- [dataLayer Documentation](https://developers.google.com/tag-platform/tag-manager/datalayer)

---

## ✅ Implementation Checklist

- [ ] Configure GA4 tag in GTM
- [ ] Enable built-in scroll variables
- [ ] Create scroll depth tracking
- [ ] Set up outbound link tracking
- [ ] Configure file download tracking
- [ ] Create time on page timers
- [ ] Add session info tracking
- [ ] Implement video tracking
- [ ] Set up linktree-specific events
- [ ] Configure CV page events
- [ ] Test all events in Preview mode
- [ ] Verify in GA4 Real-time
- [ ] Publish GTM container
- [ ] Monitor for 48 hours
- [ ] Create custom GA4 reports

---

**Document Version:** 1.0
**Last Updated:** 2025-10-30
**GTM Container:** GTM-TN9SV57D
**GA4 Property:** G-VB9ENP6DZ0
