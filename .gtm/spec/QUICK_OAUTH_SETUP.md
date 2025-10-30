# ⚡ Quick OAuth Setup - 2 Pages, 5 Minutes

## 🌐 Opened in Your Browser:

### Page 1: OAuth Consent Screen
**URL:** https://console.cloud.google.com/apis/credentials/consent

**Do This:**
1. User Type: `External` → CREATE
2. App name: `GTM API Automation`
3. Email: `diegonmarcos@gmail.com`
4. Scopes: Add `tagmanager.edit.containers`
5. Test users: Add `diegonmarcos@gmail.com`
6. SAVE through all pages

---

### Page 2: Create Credentials
**URL:** https://console.cloud.google.com/apis/credentials

**Do This:**
1. Click `+ CREATE CREDENTIALS`
2. Choose `OAuth client ID`
3. Type: `Desktop app`
4. Name: `GTM API Automation`
5. CREATE
6. **DOWNLOAD JSON** ⬇️

---

## 💾 After Download

**Move the file:**
```bash
mv ~/Downloads/client_secret_*.json \
   /home/diego/Documents/Git/website/.gtm/credentials.json
```

**Or drag & drop to:** `.gtm/` folder and rename to `credentials.json`

---

## ✅ Done!

**Verify:**
```bash
ls -la /home/diego/Documents/Git/website/.gtm/credentials.json
```

**Next: Run GTM setup**
```bash
cd /home/diego/Documents/Git/website/.gtm
python3 setup_gtm.py
```

---

📖 **Full instructions:** See `OAUTH_SETUP_INSTRUCTIONS.md`
