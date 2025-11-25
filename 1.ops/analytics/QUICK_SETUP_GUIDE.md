# Quick Matomo Event Tracking Setup Guide

## Status: Triggers Created ✓

**Good news:** The automation script successfully created 6 triggers in your Matomo Tag Manager!

Now you just need to create tags for each trigger through the Matomo UI (takes ~15 minutes).

---

## Created Triggers

✅ **Outbound Link Click** (ID: 2)
✅ **File Download Click** (ID: 3)
✅ **Scroll Depth - 25%, 50%, 75%, 100%** (ID: 4)
✅ **Linktree - Link Click** (ID: 5)
✅ **Social Icon Click** (ID: 6)
✅ **CV Download Button Click** (ID: 7)

---

## Create Tags (Step-by-Step)

### 1. Go to Tag Manager
1. Log in: https://analytics.diegonmarcos.com
2. Click **Tag Manager** in top menu
3. Click **Default Container**
4. Click **Tags** in left sidebar
5. Click **Create New Tag**

---

### Tag 1: Outbound Link Click Tracking

**Basic Info:**
- Name: `Matomo Event - Outbound Link Click`
- Type: `Matomo Analytics`

**Configuration:**
- Matomo Configuration: Select `Matomo Configuration`
- Tracking Type: `Event`
- Event Category: `Outbound Links`
- Event Action: `Click`
- Event Name: `{{ClickURL}}`

**Trigger:**
- Fire Trigger: Select `Outbound Link Click`

Click **Create Tag**

---

### Tag 2: File Download Tracking

**Basic Info:**
- Name: `Matomo Event - File Download`
- Type: `Matomo Analytics`

**Configuration:**
- Matomo Configuration: Select `Matomo Configuration`
- Tracking Type: `Event`
- Event Category: `Downloads`
- Event Action: `File Download`
- Event Name: `{{ClickURL}}`

**Trigger:**
- Fire Trigger: Select `File Download Click`

Click **Create Tag**

---

### Tag 3: Scroll Depth Tracking

**Basic Info:**
- Name: `Matomo Event - Scroll Depth`
- Type: `Matomo Analytics`

**Configuration:**
- Matomo Configuration: Select `Matomo Configuration`
- Tracking Type: `Event`
- Event Category: `Engagement`
- Event Action: `Scroll`
- Event Name: `{{ScrollDepthThreshold}}%`

**Trigger:**
- Fire Trigger: Select `Scroll Depth - 25%, 50%, 75%, 100%`

Click **Create Tag**

---

### Tag 4: Linktree Link Click Tracking

**Basic Info:**
- Name: `Matomo Event - Linktree Link Click`
- Type: `Matomo Analytics`

**Configuration:**
- Matomo Configuration: Select `Matomo Configuration`
- Tracking Type: `Event`
- Event Category: `Linktree`
- Event Action: `Link Click`
- Event Name: `{{ClickText}}`

**Trigger:**
- Fire Trigger: Select `Linktree - Link Click`

Click **Create Tag**

---

### Tag 5: Social Icon Click Tracking

**Basic Info:**
- Name: `Matomo Event - Social Icon Click`
- Type: `Matomo Analytics`

**Configuration:**
- Matomo Configuration: Select `Matomo Configuration`
- Tracking Type: `Event`
- Event Category: `Social`
- Event Action: `Icon Click`
- Event Name: `{{ClickURL}}`

**Trigger:**
- Fire Trigger: Select `Social Icon Click`

Click **Create Tag**

---

### Tag 6: CV Download Tracking

**Basic Info:**
- Name: `Matomo Event - CV Download`
- Type: `Matomo Analytics`

**Configuration:**
- Matomo Configuration: Select `Matomo Configuration`
- Tracking Type: `Event`
- Event Category: `CV`
- Event Action: `Download`
- Event Name: `{{ClickElementId}}`

**Trigger:**
- Fire Trigger: Select `CV Download Button Click`

Click **Create Tag**

---

## Publish Changes

After creating all 6 tags:

1. Click **Versions** in left sidebar
2. Click **Create Version**
3. **Version Name:** `v4 - Event Tracking Complete`
4. **Description:** `Added 6 event tracking tags for outbound links, downloads, scroll, linktree, social, CV`
5. Click **Publish**
6. Select **Live** environment
7. Click **Publish Version**

---

## Test Your Setup

### Enable Preview Mode:
1. Go to **Tag Manager → Preview**
2. Click **Enable Preview Mode**
3. Open your site in a new tab
4. You'll see a debug panel at the bottom

### Test Each Event:
- **Outbound Link:** Click any external link
- **File Download:** Click a PDF/DOCX link
- **Scroll:** Scroll down to 25%, 50%, 75%, 100%
- **Linktree:** Go to /linktree and click a link
- **Social:** Click a social icon
- **CV:** Click a CV download button

### View Events:
1. Go to **Visitors → Real-time**
2. You should see events appearing
3. Go to **Behavior → Events** to see event reports

---

## Troubleshooting

**No events firing?**
- Check Preview Mode debug panel
- Verify triggers have correct conditions
- Check browser console for errors

**Events not in reports?**
- Wait 5-10 minutes for processing
- Check Real-time first
- Verify container is published

**Wrong data tracked?**
- Check variable values in Preview Mode
- Adjust event names/categories as needed

---

## Summary

✅ Custom Dimensions: Ready (10 visit, 5 action)
✅ Triggers: Created (6 triggers)
⏳ Tags: Need to create (15 minutes)
⏳ Publish: After tags created
⏳ Test: Preview Mode

**Time to complete:** ~15-20 minutes

---

Created: 2025-11-25
API Token: a8f11ea1f29a4907078e4a769fdfbb5d
Container ID: 62tfw1ai
