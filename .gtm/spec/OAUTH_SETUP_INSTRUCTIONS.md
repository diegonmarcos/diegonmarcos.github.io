# OAuth 2.0 Credentials Setup - Step by Step

## ✅ Already Completed
- Google Cloud authentication: diegonmarcos@gmail.com
- Project selected: Gemini API (gen-lang-client-0167192380)
- Tag Manager API: **ENABLED** ✅

---

## 🚀 Next Steps (5-10 minutes)

### Step 1: Configure OAuth Consent Screen (One-time setup)

**Open this URL:**
```
https://console.cloud.google.com/apis/credentials/consent?project=gen-lang-client-0167192380
```

**Configuration:**

1. **User Type:** Select `External` → Click `CREATE`

2. **App Information:**
   - App name: `GTM API Automation`
   - User support email: `diegonmarcos@gmail.com`
   - Developer contact: `diegonmarcos@gmail.com`

   Click `SAVE AND CONTINUE`

3. **Scopes:**
   - Click `ADD OR REMOVE SCOPES`
   - In the filter, search: `Tag Manager`
   - Check: `https://www.googleapis.com/auth/tagmanager.edit.containers`
   - Click `UPDATE`
   - Click `SAVE AND CONTINUE`

4. **Test Users:**
   - Click `+ ADD USERS`
   - Enter: `diegonmarcos@gmail.com`
   - Click `ADD`
   - Click `SAVE AND CONTINUE`

5. **Summary:**
   - Review settings
   - Click `BACK TO DASHBOARD`

---

### Step 2: Create OAuth 2.0 Client ID

**Open this URL:**
```
https://console.cloud.google.com/apis/credentials?project=gen-lang-client-0167192380
```

**Create Credentials:**

1. Click `+ CREATE CREDENTIALS` (blue button at top)

2. Select `OAuth client ID`

3. **Configure:**
   - Application type: `Desktop app`
   - Name: `GTM API Automation`
   - Click `CREATE`

4. **Download:**
   - A dialog appears with your client ID and secret
   - Click `DOWNLOAD JSON`
   - Save the file

---

### Step 3: Save Credentials File

**Move the downloaded JSON file:**

```bash
# The file is probably named something like:
# client_secret_XXXXXXXXXXXX-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.apps.googleusercontent.com.json

# Rename and move it to:
mv ~/Downloads/client_secret_*.json /home/diego/Documents/Git/website/.gtm/credentials.json
```

**Or manually:**
1. Find the downloaded JSON file in your Downloads folder
2. Rename it to: `credentials.json`
3. Move it to: `/home/diego/Documents/Git/website/.gtm/`

---

### Step 4: Verify Setup

**Check the file exists:**

```bash
cd /home/diego/Documents/Git/website/.gtm
ls -la credentials.json
```

**You should see:**
```
-rw-r--r-- 1 diego diego 464 Oct 30 XX:XX credentials.json
```

---

## 🎯 After Credentials Are Created

### Option A: Interactive Test (Recommended)

Run the interactive setup script:
```bash
cd /home/diego/Documents/Git/website/.gtm
python3 setup_oauth_credentials.py```

```

```

This will:
- Guide you through the process
- Open URLs in your browser
- Test authentication
- Save the token

### Option B: Direct GTM Setup

If credentials.json exists, run the main script:
```bash
cd /home/diego/Documents/Git/website/.gtm

# First, update these values in setup_gtm.py:
# ACCOUNT_ID = "YOUR_GTM_ACCOUNT_ID"      # Get from GTM
# CONTAINER_ID = "YOUR_GTM_CONTAINER_ID"  # Get from GTM

python3 setup_gtm.py
```

---

## 🔍 Find Your GTM Account & Container IDs

**Open GTM:**
```
https://tagmanager.google.com
```

**Steps:**
1. Click on your container: `GTM-TN9SV57D`
2. Click on the container name in the top bar
3. Look for URL like:
   ```
   accounts/1234567890/containers/9876543210
            ↑ ACCOUNT      ↑ CONTAINER
   ```
4. Note both numbers (just the numeric part)

**Update setup_gtm.py lines 19-20:**
```python
ACCOUNT_ID = "1234567890"     # Your account ID
CONTAINER_ID = "9876543210"   # Your container ID
```

---

## 🚨 Troubleshooting

### "OAuth consent screen not configured"
- Make sure you completed Step 1 above
- Verify at: https://console.cloud.google.com/apis/credentials/consent

### "Can't find downloaded JSON"
- Check your Downloads folder
- File name usually starts with: `client_secret_`
- It's a `.json` file

### "credentials.json format error"
- Make sure you downloaded "OAuth client ID" not "Service Account"
- Application type should be "Desktop app"
- Re-download if needed

### "Permission denied"
- Make sure you're using the same Google account: diegonmarcos@gmail.com
- Add yourself as a test user in OAuth consent screen

---

## ✅ Success Indicators

You'll know setup is complete when:
1. ✅ OAuth consent screen shows "External" and "Testing"
2. ✅ Credentials page shows "GTM API Automation" OAuth 2.0 Client
3. ✅ File exists: `.gtm/credentials.json`
4. ✅ File size: ~400-500 bytes
5. ✅ File contains: `"installed"` or `"desktop"` in JSON

---

## 📚 Quick Reference Links

| What | URL |
|------|-----|
| OAuth Consent | https://console.cloud.google.com/apis/credentials/consent?project=gen-lang-client-0167192380 |
| Credentials | https://console.cloud.google.com/apis/credentials?project=gen-lang-client-0167192380 |
| GTM | https://tagmanager.google.com |
| API Library | https://console.cloud.google.com/apis/library/tagmanager.googleapis.com?project=gen-lang-client-0167192380 |

---

**Ready to proceed? Follow Steps 1 & 2 above! 🚀**
