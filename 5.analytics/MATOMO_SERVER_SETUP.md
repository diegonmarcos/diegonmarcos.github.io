# Matomo Server on Oracle Cloud - Setup Summary

## ✅ Infrastructure Created

### Oracle Cloud Instance
- **Instance Name**: matomo-server
- **Instance ID**: `ocid1.instance.oc1.eu-marseille-1.anwxeljruadvczacdbn762t6u3lc2a5ttdtjy6el235cehuu52uzmjuezucq`
- **Region**: EU-Marseille-1 (France)
- **Shape**: VM.Standard.E2.1.Micro (Always Free ✅)
- **OS**: Ubuntu 24.04 Minimal
- **CPUs**: 2 vCPUs (AMD EPYC 7742)
- **Memory**: 1 GB RAM
- **Storage**: 50 GB boot volume
- **Status**: RUNNING ✅

### Network Configuration
- **VCN**: matomo-vcn (10.0.0.0/16)
- **Subnet**: matomo-subnet (10.0.1.0/24)
- **Public IP**: **130.110.251.193**
- **Private IP**: 10.0.1.154
- **Internet Gateway**: Configured ✅

### Security Rules (Ports Open)
- **22**: SSH
- **80**: HTTP
- **443**: HTTPS

### SSH Key
- **Private Key**: `/root/.ssh/matomo_key`
- **Public Key**: `/root/.ssh/matomo_key.pub`

---

## 🔐 SSH Connection

### Connect to Server
```bash
ssh -i ~/.ssh/matomo_key ubuntu@130.110.251.193
```

### First Time Connection
On first connection, you'll see a fingerprint warning. Type "yes" to continue.

---

## 📋 Next Steps

### 1. Install Docker & Docker Compose
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker ubuntu

# Install Docker Compose
sudo apt install docker-compose -y

# Verify installations
docker --version
docker-compose --version
```

### 2. Create Matomo Docker Stack
```bash
# Create directory for Matomo
mkdir -p ~/matomo && cd ~/matomo

# Create docker-compose.yml
cat > docker-compose.yml <<'EOF'
version: '3'

services:
  mariadb:
    image: mariadb:10.11
    container_name: matomo-db
    environment:
      - MYSQL_ROOT_PASSWORD=matomo_root_password_change_me
      - MYSQL_DATABASE=matomo
      - MYSQL_USER=matomo
      - MYSQL_PASSWORD=matomo_db_password_change_me
    volumes:
      - ./mariadb:/var/lib/mysql
    restart: unless-stopped

  matomo:
    image: matomo:latest
    container_name: matomo-app
    ports:
      - "8080:80"
    environment:
      - MATOMO_DATABASE_HOST=mariadb
      - MATOMO_DATABASE_ADAPTER=mysql
      - MATOMO_DATABASE_TABLES_PREFIX=matomo_
      - MATOMO_DATABASE_USERNAME=matomo
      - MATOMO_DATABASE_PASSWORD=matomo_db_password_change_me
      - MATOMO_DATABASE_DBNAME=matomo
    volumes:
      - ./matomo:/var/www/html
    depends_on:
      - mariadb
    restart: unless-stopped

  nginx-proxy:
    image: nginxproxymanager/nginx-proxy-manager:latest
    container_name: nginx-proxy
    ports:
      - "80:80"
      - "443:443"
      - "81:81"  # Admin panel
    environment:
      - DB_SQLITE_FILE=/data/database.sqlite
    volumes:
      - ./nginx-proxy/data:/data
      - ./nginx-proxy/letsencrypt:/etc/letsencrypt
    restart: unless-stopped
EOF

# Start the stack
docker-compose up -d
```

### 3. Configure DNS
Point **analytics.diegonmarcos.com** to **130.110.251.193**

Add an A record in your DNS provider:
- **Type**: A
- **Name**: analytics
- **Value**: 130.110.251.193
- **TTL**: 300 (or auto)

### 4. Configure Nginx Proxy Manager
1. Access: http://130.110.251.193:81
2. Default login:
   - **Email**: admin@example.com
   - **Password**: changeme
3. Change password immediately
4. Add Proxy Host:
   - **Domain**: analytics.diegonmarcos.com
   - **Scheme**: http
   - **Forward Host**: matomo-app
   - **Forward Port**: 80
5. Enable SSL with Let's Encrypt:
   - Click SSL tab
   - Request SSL Certificate
   - Enable Force SSL

### 5. Install Matomo
1. Visit: https://analytics.diegonmarcos.com
2. Follow installation wizard:
   - **Database Server**: mariadb
   - **Login**: matomo
   - **Password**: matomo_db_password_change_me (use what you set)
   - **Database Name**: matomo
3. Create admin account
4. Add website: diegonmarcos.github.io

### 6. Get Matomo Tracking Code
After setup, Matomo will provide tracking JavaScript code.

### 7. Integrate with GTM
Update GTM to include Matomo tracking alongside GA4.

---

## 🔧 Useful Commands

### Check Docker Status
```bash
docker ps
docker-compose logs -f
```

### Restart Services
```bash
docker-compose restart
```

### Stop Services
```bash
docker-compose down
```

### Backup Matomo Data
```bash
tar -czf matomo-backup-$(date +%Y%m%d).tar.gz ~/matomo
```

---

## 📊 Resource Usage

The Always Free tier includes:
- ✅ 2 VM.Standard.E2.1.Micro instances
- ✅ 200 GB Block Storage
- ✅ 10 GB Object Storage
- ✅ 10 TB Outbound Data Transfer per month

**Current Usage**: 1 instance (50% of free tier)

---

## 🌐 URLs

- **Matomo**: https://analytics.diegonmarcos.com
- **Nginx Proxy Manager**: http://130.110.251.193:81
- **SSH**: ssh -i ~/.ssh/matomo_key ubuntu@130.110.251.193

---

## 🔐 Security Notes

1. **Change default passwords** in docker-compose.yml
2. **Enable 2FA** in Matomo admin
3. **Keep Ubuntu updated**: `sudo apt update && sudo apt upgrade`
4. **Monitor disk space**: `df -h`
5. **Review Matomo logs** regularly

---

**Created**: 2025-11-18
**Status**: Infrastructure Ready - Docker Installation Pending
