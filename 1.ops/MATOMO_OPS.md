# Matomo Server Operations

Automation scripts for managing the Matomo analytics server on Oracle Cloud.

## 📋 Available Scripts

### 1. `matomo-setup.sh`
**Initial server setup and Matomo installation**

Automated deployment script that:
- Connects to Oracle Cloud Ubuntu server
- Installs Docker and Docker Compose
- Deploys Matomo + MariaDB + Nginx Proxy Manager
- Generates secure database passwords
- Saves credentials to `matomo-credentials.txt`

**Usage:**
```bash
./matomo-setup.sh
```

**What it installs:**
- **Matomo**: Latest version (port 8080)
- **MariaDB 10.11**: Database backend
- **Nginx Proxy Manager**: Reverse proxy with SSL (ports 80, 443, 81)

---

### 2. `matomo-login.sh`
**Quick SSH access to the Matomo server**

Simple login script for SSH access.

**Usage:**
```bash
./matomo-login.sh
```

Equivalent to:
```bash
ssh -i ~/.ssh/matomo_key ubuntu@129.151.229.21
```

---

### 3. `matomo-https-setup.sh`
**Configure HTTPS with Let's Encrypt SSL**

Guided setup for enabling HTTPS on analytics.diegonmarcos.com with automatic SSL certificate.

**Usage:**
```bash
./matomo-https-setup.sh
```

**What it does:**
- Verifies DNS configuration
- Checks Matomo is running
- Provides step-by-step Nginx Proxy Manager setup instructions
- Configures Let's Encrypt SSL certificate
- Enables force HTTPS redirect

---

### 4. `matomo-https-auto.sh`
**Automated HTTPS configuration via API**

Fully automated HTTPS setup using Nginx Proxy Manager API (alternative to manual setup).

**Usage:**
```bash
./matomo-https-auto.sh
```

**Requires:**
- Nginx Proxy Manager credentials
- DNS already configured

**What it does:**
- Logs into Nginx Proxy Manager API
- Creates proxy host configuration
- Requests Let's Encrypt SSL certificate
- Enables force HTTPS redirect
- Enables HTTP/2 and HSTS

---

### 5. `matomo-manage.sh`
**Manage Matomo Docker containers**

Comprehensive management script with multiple commands.

**Usage:**
```bash
./matomo-manage.sh [COMMAND]
```

**Available Commands:**

| Command | Description |
|---------|-------------|
| `start` | Start all Matomo containers |
| `stop` | Stop all Matomo containers |
| `restart` | Restart all Matomo containers |
| `status` | Show container status |
| `logs` | Show real-time container logs |
| `backup` | Create backup of Matomo data |
| `update` | Update Docker images |
| `shell` | Open shell in Matomo container |

**Examples:**
```bash
# Check status
./matomo-manage.sh status

# View logs
./matomo-manage.sh logs

# Create backup
./matomo-manage.sh backup

# Update Matomo
./matomo-manage.sh update

# Restart services
./matomo-manage.sh restart
```

---

## 🚀 Quick Start

### First Time Setup

1. **Run the setup script:**
   ```bash
   cd 1.ops
   ./matomo-setup.sh
   ```

2. **Save the credentials** from `matomo-credentials.txt`

3. **Configure DNS:**
   - Point `analytics.diegonmarcos.com` to `129.151.229.21`

4. **Setup HTTPS (Choose one method):**

   **Method A - Guided Setup (Recommended):**
   ```bash
   ./matomo-https-setup.sh
   ```
   Follow the interactive instructions to configure Nginx Proxy Manager with SSL.

   **Method B - Automated API Setup:**
   ```bash
   ./matomo-https-auto.sh
   ```
   Fully automated SSL configuration via Nginx Proxy Manager API.

5. **Complete Matomo setup:**
   - Visit: https://analytics.diegonmarcos.com
   - Follow installation wizard
   - Use database credentials from step 2

---

## 🔐 Server Information

- **Server IP**: 129.151.229.21
- **Domain**: analytics.diegonmarcos.com
- **Region**: EU-Marseille-1 (France)
- **Instance Type**: VM.Standard.E2.1.Micro (Always Free)
- **OS**: Ubuntu 24.04 Minimal
- **SSH Key**: `~/.ssh/matomo_key`
- **SSH User**: ubuntu

---

## 📁 File Locations on Server

| Path | Description |
|------|-------------|
| `~/matomo/` | Main Matomo directory |
| `~/matomo/docker-compose.yml` | Docker configuration |
| `~/matomo/matomo/` | Matomo application files |
| `~/matomo/mariadb/` | Database files |
| `~/matomo/nginx-proxy/` | Nginx Proxy Manager data |

---

## 🔧 Maintenance

### Daily Operations
```bash
# Check if everything is running
./matomo-manage.sh status

# View recent logs
./matomo-manage.sh logs
```

### Weekly Tasks
```bash
# Create backup
./matomo-manage.sh backup

# Check for updates
./matomo-manage.sh update
```

### Troubleshooting
```bash
# Restart all services
./matomo-manage.sh restart

# Open shell to investigate
./matomo-manage.sh shell

# Or SSH directly
./matomo-login.sh
```

---

## 🌐 Access URLs

| Service | URL | Purpose |
|---------|-----|---------|
| Matomo (HTTPS) | https://analytics.diegonmarcos.com | Main analytics interface ✅ |
| Nginx Proxy Manager | http://129.151.229.21:81 | Reverse proxy admin |
| Matomo (direct) | http://129.151.229.21:8080 | Direct access (dev only) |

---

## 🔒 Security Notes

1. **SSH key is required** - No password authentication
2. **Change Nginx Proxy Manager password** immediately after first login
3. **Database passwords** are randomly generated during setup
4. **Keep credentials safe** - Store `matomo-credentials.txt` securely
5. **Regular backups** - Use `./matomo-manage.sh backup` weekly

---

## 📊 System Requirements

**Minimum:**
- 1 GB RAM (current: 1 GB ✅)
- 2 vCPUs (current: 2 ✅)
- 20 GB storage (current: 50 GB ✅)

**Current Usage:**
- Matomo: ~300 MB RAM
- MariaDB: ~200 MB RAM
- Nginx Proxy: ~50 MB RAM
- **Total**: ~550 MB / 1 GB

---

## 📝 Notes

- All scripts are **POSIX-compliant** (work with sh, bash, ash, dash)
- Scripts use **SSH key authentication** only
- **Automatic password generation** for security
- **Idempotent operations** - safe to re-run
- **Network isolation** with Docker bridge networks

---

**Created**: 2025-11-18
**Server Status**: ✅ Running
**Last Updated**: 2025-11-18
