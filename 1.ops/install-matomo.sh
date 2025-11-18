#!/bin/sh
# POSIX-compliant script to install Docker and Matomo on Ubuntu server

set -e

echo "========================================="
echo "Matomo Installation Script"
echo "========================================="
echo ""

# Check if running as root
if [ "$(id -u)" = "0" ]; then
    echo "Please run this script as a regular user with sudo privileges"
    echo "Do NOT run as root"
    exit 1
fi

echo "Step 1: Installing Docker..."
echo "----------------------------"
curl -fsSL https://get.docker.com -o /tmp/get-docker.sh
sudo sh /tmp/get-docker.sh
sudo usermod -aG docker "$(whoami)"
sudo systemctl enable docker
sudo systemctl start docker
echo "✅ Docker installed successfully"
echo ""

echo "Step 2: Installing Docker Compose..."
echo "-------------------------------------"
sudo apt-get update
sudo apt-get install -y docker-compose
echo "✅ Docker Compose installed successfully"
echo ""

echo "Step 3: Creating Matomo directory structure..."
echo "-----------------------------------------------"
mkdir -p "${HOME}/matomo"
cd "${HOME}/matomo"
echo "✅ Directory created: ${HOME}/matomo"
echo ""

echo "Step 4: Creating docker-compose.yml..."
echo "---------------------------------------"
cat > docker-compose.yml << 'EOF'
version: '3'

services:
  mariadb:
    image: mariadb:10.11
    container_name: matomo-db
    restart: always
    environment:
      - MYSQL_ROOT_PASSWORD=MatomoRoot2025!
      - MYSQL_DATABASE=matomo
      - MYSQL_USER=matomo
      - MYSQL_PASSWORD=MatomoDB2025!
    volumes:
      - ./db:/var/lib/mysql

  matomo:
    image: matomo:latest
    container_name: matomo-app
    restart: always
    depends_on:
      - mariadb
    environment:
      - MATOMO_DATABASE_HOST=mariadb
      - MATOMO_DATABASE_ADAPTER=mysql
      - MATOMO_DATABASE_TABLES_PREFIX=matomo_
      - MATOMO_DATABASE_USERNAME=matomo
      - MATOMO_DATABASE_PASSWORD=MatomoDB2025!
      - MATOMO_DATABASE_DBNAME=matomo
    volumes:
      - ./matomo:/var/www/html
    ports:
      - "8080:80"

  nginx-proxy:
    image: nginxproxymanager/nginx-proxy-manager:latest
    container_name: nginx-proxy
    restart: always
    ports:
      - "80:80"
      - "443:443"
      - "81:81"
    volumes:
      - ./npm/data:/data
      - ./npm/letsencrypt:/etc/letsencrypt
EOF

echo "✅ docker-compose.yml created"
echo ""

echo "Step 5: Starting Docker containers..."
echo "--------------------------------------"
sudo docker-compose up -d
echo "✅ Containers starting..."
echo ""

echo "Step 6: Waiting for containers to be ready..."
echo "----------------------------------------------"
sleep 20
echo ""

echo "Step 7: Checking container status..."
echo "-------------------------------------"
sudo docker-compose ps
echo ""

echo "========================================="
echo "✅ Installation Complete!"
echo "========================================="
echo ""
echo "🔗 Access URLs:"
echo "   Matomo:              http://130.110.251.193:8080"
echo "   Nginx Proxy Manager: http://130.110.251.193:81"
echo ""
echo "📝 Database credentials (for Matomo setup):"
echo "   Database Server:  mariadb"
echo "   Database Name:    matomo"
echo "   Database User:    matomo"
echo "   Database Password: MatomoDB2025!"
echo ""
echo "🔐 Nginx Proxy Manager default login:"
echo "   Email:    admin@example.com"
echo "   Password: changeme"
echo "   (You'll be prompted to change this on first login)"
echo ""
echo "📌 Next steps:"
echo "   1. Open http://130.110.251.193:8080 to complete Matomo setup"
echo "   2. Use the database credentials above during setup"
echo "   3. Configure HTTPS at http://130.110.251.193:81"
echo "   4. Point analytics.diegonmarcos.com to 130.110.251.193"
echo ""
echo "💡 To view container logs:"
echo "   cd ~/matomo && sudo docker-compose logs -f"
echo ""
