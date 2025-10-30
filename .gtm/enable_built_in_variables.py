#!/usr/bin/env python3
"""
Google Tag Manager Built-in Variables Enabling Script
"""

import os
import sys
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
import pickle

# GTM Configuration
ACCOUNT_ID = "6321374781"
CONTAINER_ID = "233770428"
WORKSPACE_NAME = "main"

# API Scopes
SCOPES = ['https://www.googleapis.com/auth/tagmanager.edit.containers']

# Built-in variables to enable
VARIABLES_TO_ENABLE = [
    'clickElement',
    'clickUrl',
    'scrollDepthThreshold',
    'clickText'
]

class GTMVariableEnabler:
    """Enable GTM built-in variables"""

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

    def get_workspace_id(self, workspace_name: str) -> str:
        """Get the workspace ID for a given workspace name"""
        try:
            workspaces = self.service.accounts().containers().workspaces().list(
                parent=f'accounts/{self.account_id}/containers/{self.container_id}'
            ).execute()

            for ws in workspaces.get('workspace', []):
                if ws.get('name') == workspace_name:
                    return ws.get('workspaceId')
            
            return None
        except HttpError as e:
            print(f"❌ Error listing workspaces: {e}")
            raise

    def enable_variables(self, workspace_id: str, variables: list):
        """Enable built-in variables"""
        try:
            self.service.accounts().containers().workspaces().built_in_variables().create(
                parent=f'accounts/{self.account_id}/containers/{self.container_id}/workspaces/{workspace_id}',
                type=variables
            ).execute()
            print(f"✅ Enabled built-in variables: {variables}")
        except HttpError as e:
            print(f"❌ Error enabling variables: {e}")

def main():
    """Main entry point"""
    enabler = GTMVariableEnabler(ACCOUNT_ID, CONTAINER_ID)
    enabler.authenticate()
    workspace_id = enabler.get_workspace_id(WORKSPACE_NAME)

    if workspace_id:
        print(f"Found workspace ''{WORKSPACE_NAME}'' with ID: {workspace_id}")
        enabler.enable_variables(workspace_id, VARIABLES_TO_ENABLE)
    else:
        print(f"Workspace ''{WORKSPACE_NAME}'' not found.")

if __name__ == '__main__':
    main()
