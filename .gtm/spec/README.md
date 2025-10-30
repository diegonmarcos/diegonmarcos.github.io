# GTM API Automation Setup

Automatically configure your Google Tag Manager container with comprehensive event tracking using the GTM API.

## 🎯 What This Does

This script will automatically create in your GTM container:
- **7 Custom Variables** - For tracking link data, device info, etc.
- **10+ Triggers** - Scroll depth, link clicks, downloads, timers, etc.
- **10+ Tags** - GA4 events, custom HTML tracking, etc.

All without manual clicking in the GTM interface!

---

## 📋 Prerequisites

1. **Google Cloud Project** with GTM API enabled
2. **OAuth 2.0 Credentials** (Desktop app type)
3. **Python 3.7+** installed
4. **GTM Account & Container** already created

---

## 🚀 Setup Instructions

### Step 1: Enable GTM API

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing one
3. Navigate to **APIs & Services** → **Library**
4. Search for "**Tag Manager API**"
5. Click **Enable**

### Step 2: Create OAuth Credentials

1. In Google Cloud Console, go to **APIs & Services** → **Credentials**
2. Click **+ CREATE CREDENTIALS** → **OAuth client ID**
3. If prompted, configure OAuth consent screen:
   - User Type: **External**
   - App name: **GTM Configuration Script**
   - Support email: Your email
   - Add scope: `https://www.googleapis.com/auth/tagmanager.edit.containers`
4. Application type: **Desktop app**
5. Name: **GTM API Script**
6. Click **Create**
7. **Download** the credentials JSON file
8. Rename it to `credentials.json`
9. Move it to this directory (`.gtm/`)

### Step 3: Find Your GTM Account & Container IDs

1. Go to [tagmanager.google.com](https://tagmanager.google.com)
2. Select your container (**GTM-TN9SV57D**)
3. Click on the container name in the top bar
4. In the URL or settings, you'll see:
   ```
   accounts/XXXXXXXXXX/containers/XXXXXXXXXX
              ↑ Account ID      ↑ Container ID
   ```
5. Note both numbers (they're just numbers, no "GTM-" prefix)

### Step 4: Configure the Script

1. Open `setup_gtm.py`
2. Update these lines:
   ```python
   ACCOUNT_ID = "1234567890"  # Your GTM Account ID (numeric)
   CONTAINER_ID = "9876543210"  # Your GTM Container ID (numeric)
   ```

### Step 5: Install Dependencies

```bash
cd .gtm
pip install -r requirements.txt
```

Or with virtual environment (recommended):

```bash
cd .gtm
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### Step 6: Run the Script

```bash
python setup_gtm.py
```

**First Run:**
- Browser will open for Google OAuth login
- Sign in with your Google account
- Grant permissions to the app
- Credentials will be saved in `token.pickle` for future runs

**Output:**
```
🚀 GTM Universal Event Tracking Setup
Container: GTM-TN9SV57D
GA4 ID: G-VB9ENP6DZ0
============================================================
✅ Authenticated with GTM API
✅ Created workspace: Universal Event Tracking Setup
📊 Creating Custom Variables...
✅ Created variable: GA4 Measurement ID
✅ Created custom JS variable: Link Domain
... (more output) ...
============================================================
✅ GTM Setup Complete!
============================================================
📊 Variables created: 7
🎯 Triggers created: 11
🏷️  Tags created: 9
```

---

## 🧪 Testing Your Configuration

### Step 1: Open GTM Preview Mode

1. Go to [tagmanager.google.com](https://tagmanager.google.com)
2. Open your container
3. You'll see a new workspace: **"Universal Event Tracking Setup"**
4. Click **Preview**
5. Enter your website URL: `https://diegonmarcos.github.io`

### Step 2: Test Events

**On any page:**
- ✅ Page loads → Check `page_view` event
- ✅ Scroll to 50% → Check `scroll_depth` event
- ✅ Click external link → Check `outbound_click` event
- ✅ Stay 30 seconds → Check `time_on_page` event

**On /linktree page:**
- ✅ Click any link → Check `linktree_link_click` event
- ✅ Click social icon → Check `social_icon_click` event
- ✅ Download vCard → Check `file_download` event

**On CV pages:**
- ✅ Click download button → Check `cv_download` event

### Step 3: Verify in GA4 Real-time

1. Open Google Analytics 4
2. Go to **Reports** → **Realtime**
3. Perform actions on your site
4. See events appear live!

---

## 📦 What Gets Created

### Variables (7)
| Name | Type | Description |
|------|------|-------------|
| GA4 Measurement ID | Constant | Your GA4 property ID |
| Link Domain | Custom JavaScript | Extracts domain from clicked URLs |
| File Extension | Custom JavaScript | Gets file type from downloads |
| Linktree Link Category | Custom JavaScript | Professional/Personal section |
| Linktree Link Subsection | Custom JavaScript | Contact/Repos/Media/etc |
| CV Format | Custom JavaScript | PDF/DOCX/Markdown |
| Device Type | Custom JavaScript | Mobile/Desktop detection |

### Triggers (11)
| Name | Type | Fires When |
|------|------|------------|
| All Pages | Page View | Every page load |
| Scroll Depth - 25%, 50%, 75%, 100% | Scroll | User scrolls down |
| Outbound Link Click | Click | External link clicked |
| File Download Click | Click | Download link clicked |
| Timer - 10s, 30s, 60s, 120s, 300s | Timer | Time milestones |
| Linktree - Link Click | Click | Link on linktree page |
| Linktree - Social Icon Click | Click | Header social icons |
| CV - Download Button Click | Click | CV download buttons |

### Tags (9)
| Name | Type | Event Name | Sends To |
|------|------|------------|----------|
| GA4 Config - All Pages | GA4 Config | - | GA4 |
| GA4 Event - Scroll Depth | GA4 Event | `scroll_depth` | GA4 |
| GA4 Event - Outbound Link | GA4 Event | `outbound_click` | GA4 |
| GA4 Event - File Download | GA4 Event | `file_download` | GA4 |
| GA4 Event - Linktree Link Click | GA4 Event | `linktree_link_click` | GA4 |
| GA4 Event - Social Icon Click | GA4 Event | `social_icon_click` | GA4 |
| GA4 Event - CV Download | GA4 Event | `cv_download` | GA4 |
| Session Info Tracking | Custom HTML | `session_info` | dataLayer |
| Video Tracking - Universal | Custom HTML | `video_interaction` | dataLayer |

---

## 🔧 Troubleshooting

### Authentication Issues

**Error: `credentials.json not found`**
- Download OAuth credentials from Google Cloud Console
- Rename to `credentials.json`
- Place in `.gtm/` directory

**Error: `Access denied`**
- Ensure GTM API is enabled in Google Cloud
- Verify you're using OAuth Desktop app credentials
- Check scopes include: `tagmanager.edit.containers`

### API Issues

**Error: `Invalid account ID`**
- Account ID should be numeric only (no "GTM-" prefix)
- Find it in GTM URL: `accounts/1234567890/containers/...`

**Error: `Container not found`**
- Container ID should be numeric (not "GTM-TN9SV57D")
- Get it from GTM settings or URL

**Error: `Workspace already exists`**
- You can safely delete old workspaces in GTM
- Or modify the script to use existing workspace

### Script Issues

**Import errors**
```bash
pip install --upgrade -r requirements.txt
```

**Permission denied**
```bash
chmod +x setup_gtm.py
```

---

## 📚 File Structure

```
.gtm/
├── README.md                   # This file
├── requirements.txt            # Python dependencies
├── setup_gtm.py               # Main script
├── credentials.json           # OAuth credentials (you download)
├── token.pickle              # Saved auth token (auto-generated)
└── gtm_config_created.json   # Reference of created items (auto-generated)
```

---

## 🔒 Security Notes

**Important files to keep private:**
- `credentials.json` - Your OAuth credentials
- `token.pickle` - Your access token
- `gtm_config_created.json` - Contains your GTM IDs

**Add to .gitignore:**
```gitignore
.gtm/credentials.json
.gtm/token.pickle
.gtm/gtm_config_created.json
.gtm/venv/
```

---

## 🚀 After Setup

### Publish Your Configuration

1. Go to GTM
2. Open workspace: "Universal Event Tracking Setup"
3. Review all changes
4. Click **Submit**
5. Version name: "Universal Event Tracking v1.0"
6. **Publish**

### Monitor Performance

**First 24 Hours:**
- Check GA4 Realtime for events
- Verify event parameters are correct
- Look for any errors in browser console

**First Week:**
- Review event counts in GA4
- Check for unexpected patterns
- Adjust triggers if needed

### Create Custom Reports

In GA4, create Explorations for:
1. **Link Performance**: Which links get clicked most
2. **User Engagement**: Time on page by section
3. **Download Tracking**: Most popular CV formats
4. **Scroll Analysis**: Which pages have best engagement

---

## 🎓 Resources

- [GTM API Documentation](https://developers.google.com/tag-platform/tag-manager/api/v2)
- [GA4 Event Reference](https://support.google.com/analytics/answer/9267735)
- [OAuth 2.0 Setup Guide](https://developers.google.com/identity/protocols/oauth2)
- [GTM Best Practices](https://support.google.com/tagmanager/answer/6102821)

---

## 📝 Customization

### Add More Events

Edit `setup_gtm.py` and add new methods:

```python
def create_custom_event_trigger(self) -> str:
    """Create your custom trigger"""
    filters = [...]
    return self.create_trigger('My Custom Trigger', 'click', filters=filters)

def create_custom_event_tag(self):
    """Create your custom tag"""
    params = {'custom_param': '{{Custom Variable}}'}
    return self.create_ga4_event_tag(
        'GA4 Event - My Custom Event',
        'custom_event',
        params,
        [self.created_items['triggers']['My Custom Trigger']]
    )
```

Then add to workflow:
```python
def create_all_triggers(self):
    # ... existing triggers ...
    self.create_custom_event_trigger()

def create_all_tags(self):
    # ... existing tags ...
    self.create_custom_event_tag()
```

### Modify Existing Events

Change event names, parameters, or triggers by editing the respective methods in `setup_gtm.py`.

---

## ❓ FAQ

**Q: Will this overwrite my existing GTM configuration?**
A: No, it creates everything in a new workspace. You review before publishing.

**Q: Can I run this multiple times?**
A: Yes, but it will create duplicate items. Delete old workspace first.

**Q: Does this work with multiple containers?**
A: Yes, just change `CONTAINER_ID` and run again.

**Q: What if I want to modify an event?**
A: Edit the script method and run again, or modify directly in GTM interface.

**Q: Can I use this for other websites?**
A: Yes! Just update the GA4 ID and domain filters in the script.

---

## 🤝 Support

If you encounter issues:
1. Check the [Troubleshooting](#-troubleshooting) section
2. Review GTM API documentation
3. Verify OAuth permissions
4. Check Python dependencies

---

**Created:** 2025-10-30
**Script Version:** 1.0
**GTM API Version:** v2
