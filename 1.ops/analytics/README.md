# Analytics Management

Centralized analytics configuration for GTM (Google Tag Manager) and Matomo.

---

## 📂 Directory Structure

```
1.ops/analytics/
├── README.md                   # This file
├── GTM-TN9SV57D.json          # GTM container export
├── cookie-consent.css         # Cookie consent banner styles
├── cookie-consent.js          # Cookie consent logic
├── gtm-cli.sh                 # GTM CLI wrapper script
└── matomo/                    # Matomo-specific configs
    ├── matomo-tag.json        # GTM tag for Matomo
    └── README.md              # Matomo GTM integration guide
```

---

## 🚀 Quick Start

### GTM CLI Access

Use the GTM CLI wrapper:

```bash
# Navigate to analytics folder
cd ~/Documents/Git/front-Github_io/1.ops/analytics

# Run GTM commands
./gtm-cli.sh list-containers
./gtm-cli.sh list-tags
./gtm-cli.sh export-container
```

### Direct GTM Python Scripts

Access GTM tools directly:

```bash
# Go to GTM root
cd ~/Documents/Git/front-Github_io/.gtm

# Get GTM account/container IDs
python get_gtm_ids.py

# Setup/update GTM configuration
python setup_gtm.py

# Manage workspaces
python manage_workspaces.py
```

---

## 📊 Current Analytics Setup

### Google Tag Manager
- **Container ID**: GTM-TN9SV57D
- **Container Export**: `GTM-TN9SV57D.json`
- **Tags**: GA4, Custom Events, Cookie Consent
- **Management**: Via `.gtm/setup_gtm.py`

### Matomo Analytics
- **Server**: 130.110.251.193:8080
- **Site ID**: 1
- **Tracked Site**: diegonmarcos.github.io
- **Integration**: Direct HTML + GTM (optional)

---

## 🔧 GTM CLI Commands

### List Containers
```bash
python ../.gtm/get_gtm_ids.py
```

### Update GTM Configuration
```bash
python ../.gtm/setup_gtm.py
```

### Export Container
```bash
# Container is auto-exported to GTM-TN9SV57D.json
```

### Manage Workspaces
```bash
python ../.gtm/manage_workspaces.py
```

---

## 🎯 Add Matomo to GTM

### Option 1: Via GTM Web Interface

1. Open [Google Tag Manager](https://tagmanager.google.com)
2. Select container **GTM-TN9SV57D**
3. Go to **Tags** → **New**
4. **Tag Configuration**:
   - Type: Custom HTML
   - Name: "Matomo Analytics"
   - HTML: Use code from `matomo/matomo-tag.json`
5. **Triggering**:
   - Trigger: All Pages
6. **Submit** and **Publish**

### Option 2: Via Python Script

```bash
cd ../.gtm
# Edit setup_gtm.py to add Matomo tag
python setup_gtm.py
```

---

## 📝 Files Explained

### `GTM-TN9SV57D.json`
- Complete GTM container export
- Contains all tags, triggers, variables
- Use for backup or migration

### `cookie-consent.css` / `cookie-consent.js`
- Cookie consent banner
- GDPR compliant
- Integrates with GTM Consent Mode
- Used across all pages

### `gtm-cli.sh` (to be created)
- Wrapper script for common GTM operations
- Simplifies CLI access

---

## 🔗 Integration Points

### Pages with GTM
- ✅ Linktree (`/linktree/`)
- ✅ CV Web (`/cv_web/`)
- ✅ CV PDF (`/cv_pdf/`)
- ✅ MyProfile (`/myprofile/`)
- ✅ Root (`/index.html`)

### Pages with Matomo Direct
- ✅ Linktree (manual tracking code)
- ⏳ Others (needs GTM integration)

---

## 🛠️ Troubleshooting

### GTM Not Tracking
1. Check if GTM container is published
2. Verify GTM ID in HTML: `GTM-TN9SV57D`
3. Check browser console for GTM errors
4. Use GTM Preview Mode

### Matomo Not Tracking
1. Check browser console for:
   - Mixed content warnings (HTTP/HTTPS)
   - CORS errors
   - 404 errors on matomo.js
2. Verify Matomo is accessible: http://130.110.251.193:8080
3. Check Site ID matches: `setSiteId('1')`

### Mixed Content Error
- **Problem**: HTTPS page loading HTTP Matomo
- **Solution**: Set up HTTPS on Matomo (Nginx Proxy Manager)

---

## 📖 Documentation Links

- **GTM API Docs**: https://developers.google.com/tag-platform/tag-manager/api/v2
- **Matomo Docs**: https://matomo.org/docs/
- **Cookie Consent**: Built-in, see `.js` file for API

---

**Last Updated**: 2025-11-25
