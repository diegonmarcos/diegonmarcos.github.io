#!/usr/bin/env python3
"""
Google Tag Manager Workspace Management Script
"""

import os
import sys
from datetime import datetime
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
import pickle

# GTM Configuration
ACCOUNT_ID = "6321374781"  # Update with your GTM Account ID
CONTAINER_ID = "233770428"  # Update with your GTM Container ID (numeric)

# API Scopes
SCOPES = ['https://www.googleapis.com/auth/tagmanager.edit.containers']

class GTMWorkspaceManager:
    """Manage Google Tag Manager workspaces"""

    def __init__(self, account_id: str, container_id: str):
        self.account_id = account_id
        self.container_id = container_id
        self.service = None

    def authenticate(self):
        """Authenticate with Google Tag Manager API"""
        creds = None
        
        script_dir = os.path.dirname(os.path.abspath(__file__))
        token_path = os.path.join(script_dir, 'token.pickle')
        credentials_path = os.path.join(script_dir, 'credentials.json')

        if os.path.exists(token_path):
            with open(token_path, 'rb') as token:
                creds = pickle.load(token)

        if not creds or not creds.valid:
            if creds and creds.expired and creds.refresh_token:
                creds.refresh(Request())
            else:
                if not os.path.exists(credentials_path):
                    raise FileNotFoundError(
                        "credentials.json not found. Please download OAuth credentials from Google Cloud Console."
                    )
                flow = InstalledAppFlow.from_client_secrets_file(credentials_path, SCOPES)
                creds = flow.run_local_server(port=0)

            with open(token_path, 'wb') as token:
                pickle.dump(creds, token)

        self.service = build('tagmanager', 'v2', credentials=creds)
        print("✅ Authenticated with GTM API")

    def list_workspaces(self):
        """List all workspaces in the container"""
        try:
            workspaces = self.service.accounts().containers().workspaces().list(
                parent=f'accounts/{self.account_id}/containers/{self.container_id}'
            ).execute()

            print("\nWorkspaces:")
            for ws in workspaces.get('workspace', []):
                print(f"  - Name: {ws.get('name', 'N/A')}, ID: {ws.get('workspaceId', 'N/A')}")
            
            return workspaces.get('workspace', [])
        except HttpError as e:
            print(f"❌ Error listing workspaces: {e}")
            raise

    def delete_workspace(self, workspace_id: str):
        """Delete a workspace by its ID"""
        try:
            self.service.accounts().containers().workspaces().delete(
                path=f'accounts/{self.account_id}/containers/{self.container_id}/workspaces/{workspace_id}'
            ).execute()
            print(f"✅ Workspace with ID: {workspace_id} deleted successfully.")
        except HttpError as e:
            print(f"❌ Error deleting workspace with ID {workspace_id}: {e}")

    def rename_workspace(self, workspace_id: str, new_name: str):
        """Rename a workspace by its ID"""
        try:
            body = {'name': new_name}
            self.service.accounts().containers().workspaces().update(
                path=f'accounts/{self.account_id}/containers/{self.container_id}/workspaces/{workspace_id}',
                body=body
            ).execute()
            print(f"✅ Workspace with ID: {workspace_id} renamed to '{new_name}' successfully.")
        except HttpError as e:
            print(f"❌ Error renaming workspace with ID {workspace_id}: {e}")


def main():
    """Main entry point"""
    manager = GTMWorkspaceManager(ACCOUNT_ID, CONTAINER_ID)
    manager.authenticate()
    workspaces = manager.list_workspaces()

    for ws in workspaces:
        if ws.get('name') == 'Universal Event Tracking Setup':
            manager.delete_workspace(ws.get('workspaceId'))
        elif 'Universal Event Tracking Setup -' in ws.get('name'):
            manager.rename_workspace(ws.get('workspaceId'), 'main')

if __name__ == '__main__':
    main()
