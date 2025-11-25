# Matomo HTTPS Setup via Nginx Proxy Manager

Guide to configure HTTPS for Matomo analytics using the existing Nginx Proxy Manager.

---

## 🎯 Goal

Configure `https://analytics.diegonmarcos.com` to proxy to Matomo with SSL/TLS.

---

## ✅ Prerequisites

All already configured:
- ✅ Nginx Proxy Manager running (port 81)
- ✅ Matomo running (port 8080)
- ✅ MariaDB running (internal)
- ✅ Server IP: 130.110.251.193

---

## 📋 Step-by-Step Setup

### Step 1: Access Nginx Proxy Manager

Open in browser:
```
http://130.110.251.193:81
```

**Default Credentials** (if first time):
- Email: `admin@example.com`
- Password: `changeme`

⚠️ **Change password immediately after first login!**

---

### Step 2: Configure DNS (If Not Already Done)

**Required DNS Record:**
```
Type: A
Name: analytics
Value: 130.110.251.193
TTL: 300 (or Auto)
```

**Verify DNS**:
```bash
nslookup analytics.diegonmarcos.com
# Should return: 130.110.251.193
```

---

### Step 3: Create Proxy Host

1. Go to **"Proxy Hosts"** → Click **"Add Proxy Host"**

2. **Details Tab**:
   ```
   Domain Names: analytics.diegonmarcos.com
   Scheme: http
   Forward Hostname/IP: matomo-app
   Forward Port: 80
   Cache Assets: No
   Block Common Exploits: ✓
   Websockets Support: ✓
   Access List: Public Access
   ```

3. **SSL Tab**:
   ```
   SSL Certificate: Request a new SSL Certificate
   Force SSL: ✓
   HTTP/2 Support: ✓
   HSTS Enabled: ✓
   HSTS Subdomains: ✓

   Email Address for Let's Encrypt: me@diegonmarcos.com
   I Agree to the Let's Encrypt Terms of Service: ✓
   ```

4. Click **"Save"**

5. Wait 30-60 seconds for Let's Encrypt to issue certificate

---

### Step 4: Verify HTTPS Works

Test in browser:
```
https://analytics.diegonmarcos.com
```

Should show Matomo login/dashboard with:
- ✅ Padlock icon in address bar
- ✅ Valid SSL certificate
- ✅ Auto-redirect from HTTP to HTTPS

---

### Step 5: Update Tracking Code

Once HTTPS is working, update all pages with Matomo tracking:

**Old code** (HTTP):
```javascript
var u="http://130.110.251.193:8080/";
```

**New code** (HTTPS):
```javascript
var u="https://analytics.diegonmarcos.com/";
```

**Files to update**:
- `/linktree/index.html`
- `/cv_web/index.html`
- `/cv_pdf/index.html`
- `/index.html` (root)
- Any other pages with Matomo tracking

---

## 🔧 Troubleshooting

### Certificate Request Fails

**Problem**: Let's Encrypt can't verify domain

**Solutions**:
1. Verify DNS points to correct IP:
   ```bash
   nslookup analytics.diegonmarcos.com
   ```
2. Check port 80 is accessible:
   ```bash
   curl http://analytics.diegonmarcos.com
   ```
3. Ensure no firewall blocking port 80/443

---

### 502 Bad Gateway

**Problem**: Nginx can't reach Matomo container

**Solutions**:
1. Check containers are running:
   ```bash
   ssh ubuntu@130.110.251.193
   docker ps
   ```

2. Verify Matomo container name:
   ```bash
   docker ps | grep matomo
   # Should show: matomo-app
   ```

3. Test internal connectivity:
   ```bash
   docker exec nginx-proxy ping matomo-app
   ```

---

### Mixed Content Warnings

**Problem**: HTTPS page loading HTTP resources

**Solution**: Update all Matomo tracking codes to use HTTPS domain

---

## 🔐 Security Configuration

### Recommended NPM Settings

**Advanced Tab** (optional but recommended):
```nginx
# Add security headers
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
```

---

## 📊 After Setup

### Update Matomo Configuration

1. Login to Matomo: https://analytics.diegonmarcos.com

2. Go to **Settings** → **General Settings**

3. Update **Matomo URL**:
   ```
   https://analytics.diegonmarcos.com
   ```

4. Under **Trusted Hosts**, add:
   ```
   analytics.diegonmarcos.com
   ```

5. Save settings

---

### Update Tracking Code Globally

Create a script to update all tracking codes:

```bash
#!/bin/bash
# update-matomo-url.sh

OLD_URL='http://130.110.251.193:8080/'
NEW_URL='https://analytics.diegonmarcos.com/'

find . -name "*.html" -type f -exec sed -i "s|$OLD_URL|$NEW_URL|g" {} +

echo "✓ Updated all tracking codes"
```

---

## 🎯 Final Checklist

- [ ] DNS A record configured
- [ ] Nginx Proxy Manager accessible
- [ ] Proxy Host created
- [ ] SSL certificate obtained
- [ ] HTTPS works in browser
- [ ] Matomo trusted hosts updated
- [ ] Tracking codes updated to HTTPS
- [ ] Test tracking on live site
- [ ] Verify real-time visitors in Matomo

---

## 📞 Quick Reference

| Item | Value |
|------|-------|
| **Nginx Proxy Manager** | http://130.110.251.193:81 |
| **Matomo HTTPS** | https://analytics.diegonmarcos.com |
| **Matomo HTTP** | http://130.110.251.193:8080 |
| **Server IP** | 130.110.251.193 |
| **SSH** | `ssh ubuntu@130.110.251.193` |

---

## 🔄 Certificate Renewal

Let's Encrypt certificates auto-renew via Nginx Proxy Manager.

**Check certificate expiry**:
```bash
echo | openssl s_client -connect analytics.diegonmarcos.com:443 2>/dev/null | openssl x509 -noout -dates
```

**Manual renewal** (if needed):
- Go to NPM → SSL Certificates
- Find certificate
- Click "Renew"

---

**Last Updated**: 2025-11-25
**Status**: Ready to configure
