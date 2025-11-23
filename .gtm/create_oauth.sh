#!/bin/bash
# Script to create OAuth 2.0 credentials for GTM API
# This creates credentials for a desktop application

set -e

PROJECT_ID="gen-lang-client-0167192380"
OAUTH_CLIENT_NAME="GTM-API-Automation"
REDIRECT_URI="http://localhost"

echo "================================================"
echo "Creating OAuth 2.0 Credentials for GTM API"
echo "================================================"
echo ""
echo "Project: $PROJECT_ID"
echo "Client Name: $OAUTH_CLIENT_NAME"
echo ""

# Check if OAuth consent screen is configured
echo "Step 1: Checking OAuth consent screen configuration..."

# Try to create OAuth client
# Note: This will fail if consent screen is not configured
echo "Step 2: Creating OAuth 2.0 client..."

# Create OAuth client using gcloud
gcloud auth application-default set-quota-project "$PROJECT_ID"

# Unfortunately, gcloud doesn't have a direct command to create OAuth clients
# We need to use the API directly or create it manually

echo ""
echo "⚠️  OAuth consent screen needs to be configured first!"
echo ""
echo "Please follow these steps:"
echo ""
echo "1. Open: https://console.cloud.google.com/apis/credentials/consent?project=$PROJECT_ID"
echo ""
echo "2. Configure OAuth consent screen:"
echo "   - User Type: External"
echo "   - App name: GTM API Automation"
echo "   - Support email: me@diegonmarcos.com"
echo "   - Add scope: https://www.googleapis.com/auth/tagmanager.edit.containers"
echo "   - Add test user: me@diegonmarcos.com"
echo ""
echo "3. Then create OAuth credentials:"
echo "   - Go to: https://console.cloud.google.com/apis/credentials?project=$PROJECT_ID"
echo "   - Click: + CREATE CREDENTIALS → OAuth client ID"
echo "   - Application type: Desktop app"
echo "   - Name: GTM API Automation"
echo "   - Download JSON"
echo ""
echo "4. Save the downloaded JSON as: $(pwd)/credentials.json"
echo ""
echo "================================================"
