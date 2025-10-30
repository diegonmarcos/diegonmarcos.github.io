# GTM API Setup - Quick Start

## 5-Minute Setup Guide

### 1️⃣ Enable GTM API (2 min)

```bash
# Open in browser:
https://console.cloud.google.com/apis/library/tagmanager.googleapis.com
```

Click **Enable**

### 2️⃣ Create OAuth Credentials (2 min)

```bash
# Open in browser:
https://console.cloud.google.com/apis/credentials
```

1. Click **+ CREATE CREDENTIALS** → **OAuth client ID**
2. If needed, configure consent screen:
   - Type: External
   - Name: GTM Script
   - Add scope: `https://www.googleapis.com/auth/tagmanager.edit.containers`
3. Application type: **Desktop app**
4. Click **Create**
5. **Download JSON** → Rename to `credentials.json`
6. Move to `.gtm/` folder

### 3️⃣ Get Your GTM IDs (30 sec)

```bash
# Open your GTM container:
https://tagmanager.google.com
```

Click container name → Look for:
```
accounts/1234567890/containers/9876543210
         ↑ ACCOUNT    ↑ CONTAINER
```

### 4️⃣ Update Script (30 sec)

Edit `setup_gtm.py` lines 19-20:

```python
ACCOUNT_ID = "1234567890"     # Replace with your Account ID
CONTAINER_ID = "9876543210"   # Replace with your Container ID
```

### 5️⃣ Run Script (1 min)

```bash
cd .gtm
pip install -r requirements.txt
python setup_gtm.py
```

Browser opens → Sign in → Grant permissions → Done!

---

## ✅ Verify Setup

1. Go to [tagmanager.google.com](https://tagmanager.google.com)
2. See workspace: **"Universal Event Tracking Setup"**
3. Click **Preview**
4. Test on your site
5. **Submit & Publish**

---

## 🎉 That's it!

You now have:
- ✅ 7 custom variables
- ✅ 11 triggers
- ✅ 9 tracking tags
- ✅ Full event tracking across all pages

**No manual GTM clicking required!** 🚀
