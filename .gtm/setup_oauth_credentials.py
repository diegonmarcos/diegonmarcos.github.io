#!/usr/bin/env python3
"""
Automated OAuth 2.0 Credentials Setup for GTM API
This script helps create OAuth credentials semi-automatically
"""

import subprocess
import sys
import webbrowser
import time
import os

PROJECT_ID = "gen-lang-client-0167192380"
PROJECT_NAME = "Gemini API"

def print_header(text):
    """Print formatted header"""
    print("\n" + "="*60)
    print(text)
    print("="*60 + "\n")

def print_step(number, text):
    """Print formatted step"""
    print(f"\n{'='*60}")
    print(f"STEP {number}: {text}")
    print(f"{'='*60}\n")

def wait_for_user():
    """Wait for user to press Enter"""
    input("\n✓ Press ENTER when done...")

def open_url_in_browser(url):
    """Open URL in default browser"""
    print(f"🌐 Opening: {url}")
    webbrowser.open(url)
    time.sleep(1)

def main():
    """Main setup workflow"""

    print_header("🚀 GTM API OAuth 2.0 Credentials Setup")
    print(f"📋 Project: {PROJECT_NAME} ({PROJECT_ID})")
    print(f"👤 Account: diegonmarcos@gmail.com")

    # Step 1: Enable API (already done, but verify)
    print_step(1, "Verify GTM API is Enabled")
    print("The Tag Manager API has been enabled in your project.")
    print("\nYou can verify at:")
    print(f"https://console.cloud.google.com/apis/library/tagmanager.googleapis.com?project={PROJECT_ID}")

    response = input("\n✓ Is the API enabled? (y/n): ").lower()
    if response != 'y':
        print("\n⚠️  Please enable the API first!")
        open_url_in_browser(f"https://console.cloud.google.com/apis/library/tagmanager.googleapis.com?project={PROJECT_ID}")
        wait_for_user()

    # Step 2: Configure OAuth Consent Screen
    print_step(2, "Configure OAuth Consent Screen")
    print("You need to configure the OAuth consent screen ONCE.")
    print("\nI'll open the OAuth consent configuration page...")
    time.sleep(2)

    consent_url = f"https://console.cloud.google.com/apis/credentials/consent?project={PROJECT_ID}"
    open_url_in_browser(consent_url)

    print("\n📝 Follow these settings:")
    print("   1. User Type: Select 'External'")
    print("   2. Click 'CREATE'")
    print("\n   3. App Information:")
    print("      - App name: GTM API Automation")
    print("      - User support email: diegonmarcos@gmail.com")
    print("      - Developer contact: diegonmarcos@gmail.com")
    print("\n   4. Scopes:")
    print("      - Click 'ADD OR REMOVE SCOPES'")
    print("      - Search for: 'Tag Manager API'")
    print("      - Check: '../auth/tagmanager.edit.containers'")
    print("      - Click 'UPDATE'")
    print("\n   5. Test Users:")
    print("      - Click 'ADD USERS'")
    print("      - Add: diegonmarcos@gmail.com")
    print("\n   6. Click 'SAVE AND CONTINUE' through all pages")
    print("   7. Click 'BACK TO DASHBOARD'")

    wait_for_user()

    # Step 3: Create OAuth Client
    print_step(3, "Create OAuth 2.0 Client ID")
    print("Now we'll create the OAuth client credentials...")
    time.sleep(2)

    credentials_url = f"https://console.cloud.google.com/apis/credentials?project={PROJECT_ID}"
    open_url_in_browser(credentials_url)

    print("\n📝 Follow these steps:")
    print("   1. Click '+ CREATE CREDENTIALS' at the top")
    print("   2. Select 'OAuth client ID'")
    print("\n   3. Application type: Select 'Desktop app'")
    print("   4. Name: GTM API Automation")
    print("   5. Click 'CREATE'")
    print("\n   6. Download the JSON file")
    print("   7. Save it as 'credentials.json' in this directory:")
    print(f"      {os.getcwd()}/")

    wait_for_user()

    # Step 4: Verify credentials file
    print_step(4, "Verify Credentials File")

    creds_path = os.path.join(os.getcwd(), 'credentials.json')

    if os.path.exists(creds_path):
        print(f"✅ Found credentials file: {creds_path}")

        # Try to read and validate JSON
        try:
            import json
            with open(creds_path, 'r') as f:
                creds_data = json.load(f)

            if 'installed' in creds_data:
                print("✅ Credentials format looks correct!")
                print(f"\n📋 Client ID: {creds_data['installed']['client_id'][:20]}...")
            else:
                print("⚠️  Warning: Unexpected credentials format")
                print("    Expected 'Desktop app' credentials")
        except Exception as e:
            print(f"⚠️  Could not validate credentials: {e}")
    else:
        print(f"❌ Credentials file not found: {creds_path}")
        print("\nPlease download the credentials JSON and save it as:")
        print(f"   {creds_path}")
        sys.exit(1)

    # Step 5: Test the setup
    print_step(5, "Test the Setup")
    print("Let's test if everything is configured correctly...")

    response = input("\nWould you like to run a test now? (y/n): ").lower()
    if response == 'y':
        print("\n🧪 Running test...")
        try:
            # Try to import and use the credentials
            from google_auth_oauthlib.flow import InstalledAppFlow

            SCOPES = ['https://www.googleapis.com/auth/tagmanager.edit.containers']

            print("Starting OAuth flow...")
            print("A browser window will open for authentication...")

            flow = InstalledAppFlow.from_client_secrets_file(
                creds_path,
                SCOPES
            )
            creds = flow.run_local_server(port=0)

            print("\n✅ Authentication successful!")
            print("✅ OAuth credentials are working correctly!")

            # Save token for future use
            import pickle
            with open('token.pickle', 'wb') as token:
                pickle.dump(creds, token)
            print("✅ Token saved to token.pickle")

        except ImportError:
            print("\n⚠️  Required Python packages not installed.")
            print("Run: pip install -r requirements.txt")
        except Exception as e:
            print(f"\n❌ Test failed: {e}")

    # Final summary
    print_header("✅ Setup Complete!")
    print("Your OAuth 2.0 credentials are ready to use!")
    print("\n📁 Files created:")
    print(f"   - credentials.json (OAuth client secrets)")
    if os.path.exists('token.pickle'):
        print(f"   - token.pickle (Saved authentication token)")

    print("\n🚀 Next Steps:")
    print("   1. Update setup_gtm.py with your GTM Account & Container IDs")
    print("   2. Run: python setup_gtm.py")
    print("   3. Your GTM container will be configured automatically!")

    print("\n" + "="*60)

if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n⚠️  Setup cancelled by user.")
        sys.exit(0)
    except Exception as e:
        print(f"\n\n❌ Error: {e}")
        sys.exit(1)
