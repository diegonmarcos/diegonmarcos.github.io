#!/usr/bin/env python3
"""
Helper script to fetch GTM Account and Container IDs
"""

import sys
import os

# Add parent directory to path for imports
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.discovery import build
import pickle

SCOPES = ['https://www.googleapis.com/auth/tagmanager.readonly']
GTM_CONTAINER = 'GTM-TN9SV57D'

def authenticate():
    """Authenticate with Google Tag Manager API"""
    creds = None

    # Check for existing token
    if os.path.exists('token.pickle'):
        with open('token.pickle', 'rb') as token:
            creds = pickle.load(token)

    # If no valid credentials, let user log in
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            if not os.path.exists('credentials.json'):
                print("❌ credentials.json not found!")
                print("Please download OAuth credentials first.")
                sys.exit(1)

            flow = InstalledAppFlow.from_client_secrets_file('credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)

        # Save credentials for next run
        with open('token.pickle', 'wb') as token:
            pickle.dump(creds, token)

    return build('tagmanager', 'v2', credentials=creds)

def find_container_ids(service):
    """Find Account and Container IDs for GTM-TN9SV57D"""

    print(f"\n🔍 Searching for container: {GTM_CONTAINER}")
    print("=" * 60)

    try:
        # List all accounts
        accounts = service.accounts().list().execute()

        for account in accounts.get('account', []):
            account_id = account['accountId']
            account_name = account['name']

            # List containers for this account
            containers = service.accounts().containers().list(
                parent=f'accounts/{account_id}'
            ).execute()

            for container in containers.get('container', []):
                container_public_id = container['publicId']
                container_id = container['containerId']
                container_name = container['name']

                if container_public_id == GTM_CONTAINER:
                    print(f"\n✅ Found container: {GTM_CONTAINER}")
                    print(f"\nAccount Name: {account_name}")
                    print(f"Account ID: {account_id}")
                    print(f"\nContainer Name: {container_name}")
                    print(f"Container ID: {container_id}")
                    print(f"Container Public ID: {container_public_id}")

                    print("\n" + "=" * 60)
                    print("📋 Update setup_gtm.py with these values:")
                    print("=" * 60)
                    print(f'ACCOUNT_ID = "{account_id}"')
                    print(f'CONTAINER_ID = "{container_id}"')
                    print("=" * 60)

                    return account_id, container_id

        print(f"\n❌ Container {GTM_CONTAINER} not found in your accounts")
        print("\nAvailable containers:")

        for account in accounts.get('account', []):
            account_id = account['accountId']
            containers = service.accounts().containers().list(
                parent=f'accounts/{account_id}'
            ).execute()

            for container in containers.get('container', []):
                print(f"  - {container['publicId']}: {container['name']}")

    except Exception as e:
        print(f"\n❌ Error: {e}")
        sys.exit(1)

    return None, None

def main():
    """Main function"""
    print("\n" + "=" * 60)
    print("GTM Account & Container ID Finder")
    print("=" * 60)

    # Authenticate
    print("\n🔐 Authenticating with Google...")
    service = authenticate()
    print("✅ Authentication successful!")

    # Find container IDs
    account_id, container_id = find_container_ids(service)

    if account_id and container_id:
        print("\n✅ Success! Use the values above in setup_gtm.py")
        print("\nNext step:")
        print("  1. Update lines 19-20 in setup_gtm.py")
        print("  2. Run: python3 setup_gtm.py")
    else:
        print("\n❌ Could not find container IDs")

if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n⚠️  Cancelled by user.")
        sys.exit(0)
    except Exception as e:
        print(f"\n\n❌ Error: {e}")
        sys.exit(1)
