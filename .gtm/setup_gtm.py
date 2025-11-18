#!/usr/bin/env python3
"""
Google Tag Manager API Configuration Script
Automatically configures GTM container with comprehensive event tracking

Requirements:
    pip install google-auth google-auth-oauthlib google-auth-httplib2 google-api-python-client

Setup:
    1. Enable GTM API in Google Cloud Console
    2. Create OAuth 2.0 credentials (Desktop app)
    3. Download credentials.json to this directory
    4. Run: python setup_gtm.py
"""

import json
import os
import time
from typing import Dict, List, Any
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
import pickle
from datetime import datetime

# GTM Configuration
ACCOUNT_ID = "6321374781"  # Update with your GTM Account ID
CONTAINER_ID = "233770428"  # Update with your GTM Container ID (numeric)
GTM_CONTAINER = "GTM-TN9SV57D"
GA4_MEASUREMENT_ID = "G-VB9ENP6DZ0"

# API Scopes
SCOPES = ['https://www.googleapis.com/auth/tagmanager.edit.containers']

class GTMConfigurator:
    """Configure Google Tag Manager via API"""

    def __init__(self, account_id: str, container_id: str):
        self.account_id = account_id
        self.container_id = container_id
        self.service = None
        self.workspace_id = None
        self.created_items = {
            'variables': {},
            'triggers': {},
            'tags': {}
        }

    def authenticate(self):
        """Authenticate with Google Tag Manager API"""
        creds = None

        script_dir = os.path.dirname(os.path.abspath(__file__))
        token_path = os.path.join(script_dir, 'token.pickle')
        credentials_path = os.path.join(script_dir, 'credentials.json')

        # Check for existing token
        if os.path.exists(token_path):
            with open(token_path, 'rb') as token:
                creds = pickle.load(token)

        # If no valid credentials, let user log in
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

            # Save credentials for next run
            with open(token_path, 'wb') as token:
                pickle.dump(creds, token)

        self.service = build('tagmanager', 'v2', credentials=creds)
        print("✅ Authenticated with GTM API")

    def create_workspace(self) -> str:
        """Create a new workspace for changes"""
        try:
            # Check if there's already a workspace with our naming pattern
            workspaces = self.service.accounts().containers().workspaces().list(
                parent=f'accounts/{self.account_id}/containers/{self.container_id}'
            ).execute()

            for ws in workspaces.get('workspace', []):
                if ws.get('name', '') == 'main':
                    self.workspace_id = ws['workspaceId']
                    print(f"✅ Using existing workspace: {ws['name']} (ID: {self.workspace_id})")
                    return self.workspace_id

            # Create new workspace if none exists
            timestamp = datetime.now().strftime('%Y-%m-%d_%H-%M-%S')
            workspace = self.service.accounts().containers().workspaces().create(
                parent=f'accounts/{self.account_id}/containers/{self.container_id}',
                body={
                    'name': 'main',
                    'description': 'Automated setup via GTM API'
                }
            ).execute()

            self.workspace_id = workspace['workspaceId']
            print(f"✅ Created workspace: {workspace['name']}")
            return self.workspace_id
        except HttpError as e:
            print(f"❌ Error creating workspace: {e}")
            raise

    def get_workspace_path(self) -> str:
        """Get the full workspace path"""
        return f'accounts/{self.account_id}/containers/{self.container_id}/workspaces/{self.workspace_id}'

    def get_all_variables(self):
        """Get all variables in the workspace"""
        try:
            variables = self.service.accounts().containers().workspaces().variables().list(
                parent=self.get_workspace_path()
            ).execute()
            for var in variables.get('variable', []):
                self.created_items['variables'][var.get('name')] = var.get('variableId')
        except HttpError as e:
            print(f"❌ Error getting variables: {e}")

    def get_all_triggers(self):
        """Get all triggers in the workspace"""
        try:
            triggers = self.service.accounts().containers().workspaces().triggers().list(
                parent=self.get_workspace_path()
            ).execute()
            for trigger in triggers.get('trigger', []):
                self.created_items['triggers'][trigger.get('name')] = trigger.get('triggerId')
        except HttpError as e:
            print(f"❌ Error getting triggers: {e}")

    def get_all_tags(self):
        """Get all tags in the workspace"""
        try:
            tags = self.service.accounts().containers().workspaces().tags().list(
                parent=self.get_workspace_path()
            ).execute()
            for tag in tags.get('tag', []):
                self.created_items['tags'][tag.get('name')] = tag.get('tagId')
        except HttpError as e:
            print(f"❌ Error getting tags: {e}")

    def get_trigger_id_by_name(self, name: str) -> str:
        """Get trigger ID by name (from created items or by fetching from API)"""
        if name in self.created_items['triggers'] and self.created_items['triggers'][name]:
            return self.created_items['triggers'][name]

        raise ValueError(f"Trigger '{name}' not found")

    # ==================== VARIABLES ====================

    def create_ga4_config_variable(self) -> str:
        """Create GA4 Configuration variable"""
        if 'GA4 Measurement ID' in self.created_items['variables']:
            print(f"⏭️  Skipped variable (already exists): GA4 Measurement ID")
            return None
        try:
            variable = {
                'name': 'GA4 Measurement ID',
                'type': 'c',  # Constant variable for GA4 measurement ID
                'parameter': [
                    {'key': 'value', 'type': 'template', 'value': GA4_MEASUREMENT_ID}
                ]
            }

            result = self.service.accounts().containers().workspaces().variables().create(
                parent=self.get_workspace_path(),
                body=variable
            ).execute()
            time.sleep(1)

            var_id = result['variableId']
            self.created_items['variables']['ga4_config'] = var_id
            print(f"✅ Created variable: GA4 Measurement ID")
            return var_id
        except HttpError as e:
            if 'duplicate' in str(e).lower():
                print(f"⏭️  Skipped variable (already exists): GA4 Measurement ID")
                return None
            raise

    def create_custom_javascript_variable(self, name: str, code: str) -> str:
        """Create a Custom JavaScript variable"""
        if name in self.created_items['variables']:
            print(f"⏭️  Skipped variable (already exists): {name}")
            return None
        try:
            variable = {
                'name': name,
                'type': 'jsm',  # Custom JavaScript
                'parameter': [
                    {'key': 'javascript', 'type': 'template', 'value': code}
                ]
            }

            result = self.service.accounts().containers().workspaces().variables().create(
                parent=self.get_workspace_path(),
                body=variable
            ).execute()
            time.sleep(1)

            var_id = result['variableId']
            self.created_items['variables'][name] = var_id
            print(f"✅ Created custom JS variable: {name}")
            return var_id
        except HttpError as e:
            if 'duplicate' in str(e).lower():
                print(f"⏭️  Skipped variable (already exists): {name}")
                return None
            raise

    def create_link_domain_variable(self) -> str:
        """Extract domain from clicked link URL"""
        code = r"""
function() {
  var url = {{Click URL}};
  if (url) {
    try {
      var domain = url.match(/:\/\/(.[^/]+)/)[1];
      return domain;
    } catch(e) {
      return 'unknown';
    }
  }
  return 'unknown';
}
"""
        return self.create_custom_javascript_variable('Link Domain', code)

    def create_file_extension_variable(self) -> str:
        """Extract file extension from URL"""
        code = r"""
function() {
  var url = {{Click URL}};
  if (url) {
    var extension = url.split('.').pop().split('?')[0].toLowerCase();
    return extension;
  }
  return 'unknown';
}
"""
        return self.create_custom_javascript_variable('File Extension', code)

    def create_link_category_variable(self) -> str:
        """Get linktree link category (Professional/Personal)"""
        code = r"""
function() {
  var element = {{Click Element}};
  if (!element) return 'Unknown';

  var section = element.closest('.link-section');
  if (section) {
    var title = section.querySelector('.section-title');
    return title ? title.textContent.trim() : 'Unknown';
  }
  return 'Unknown';
}
"""
        return self.create_custom_javascript_variable('Linktree Link Category', code)

    def create_link_subsection_variable(self) -> str:
        """Get linktree link subsection"""
        code = r"""
function() {
  var element = {{Click Element}};
  if (!element) return 'Unknown';

  var container = element.closest('.links-container');
  if (container) {
    var titles = container.parentElement.querySelectorAll('.subsection-title');
    for (var i = 0; i < titles.length; i++) {
      var nextEl = titles[i].nextElementSibling;
      while (nextEl) {
        if (nextEl === container) return titles[i].textContent.trim();
        nextEl = nextEl.nextElementSibling;
      }
    }
  }
  return 'Unknown';
}
"""
        return self.create_custom_javascript_variable('Linktree Link Subsection', code)

    def create_cv_format_variable(self) -> str:
        """Extract CV format from button ID"""
        code = r"""
function() {
  var element = {{Click Element}};
  if (!element) return 'unknown';

  var id = element.id || element.getAttribute('id');
  if (id) {
    if (id.includes('pdf')) return 'PDF';
    if (id.includes('docx')) return 'DOCX';
    if (id.includes('csv')) return 'CSV';
    if (id.includes('md')) return 'Markdown';
  }

  var text = element.textContent || '';
  if (text.toLowerCase().includes('pdf')) return 'PDF';
  if (text.toLowerCase().includes('docx')) return 'DOCX';
  if (text.toLowerCase().includes('markdown')) return 'Markdown';

  return 'unknown';
}
"""
        return self.create_custom_javascript_variable('CV Format', code)

    def create_device_type_variable(self) -> str:
        """Detect device type (mobile/desktop)"""
        code = r"""
function() {
  return /Mobile|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ? 'mobile' : 'desktop';
}
"""
        return self.create_custom_javascript_variable('Device Type', code)

    def create_page_title_variable(self) -> str:
        """Create Page Title custom variable"""
        code = r"""
function() {
  return document.title;
}
"""
        return self.create_custom_javascript_variable('Page Title', code)

    def create_all_variables(self):
        """Create all custom variables"""
        print("\n📊 Creating Custom Variables...")

        self.create_ga4_config_variable()
        self.create_link_domain_variable()
        self.create_file_extension_variable()
        self.create_link_category_variable()
        self.create_link_subsection_variable()
        self.create_cv_format_variable()
        self.create_device_type_variable()
        self.create_page_title_variable()

        print(f"✅ Created {len(self.created_items['variables'])} variables")

    # ==================== TRIGGERS ====================

    def create_trigger(self, name: str, trigger_type: str, filters: List[Dict] = None, **kwargs) -> str:
        """Create a generic trigger"""
        if name in self.created_items['triggers']:
            print(f"⏭️  Skipped trigger (already exists): {name}")
            return None
        try:
            trigger_body = {
                'name': name,
                'type': trigger_type
            }

            # Add trigger-specific parameters
            if trigger_type == 'scrollDepth':
                trigger_body['verticalScrollPercentagesList'] = kwargs.get('percentages', {})
            elif trigger_type == 'timer':
                trigger_body['interval'] = {'type': 'template', 'value': str(kwargs.get('interval'))}
                trigger_body['limit'] = {'type': 'template', 'value': str(kwargs.get('limit', 1))}
            elif trigger_type == 'click':
                trigger_body['autoEventFilter'] = filters if filters else []
                trigger_body['waitForTags'] = {'type': 'boolean', 'value': 'false'}
                trigger_body['checkValidation'] = {'type': 'boolean', 'value': 'false'}

            # Add filters for conditional triggers
            if filters and trigger_type != 'click':
                trigger_body['filter'] = filters

            result = self.service.accounts().containers().workspaces().triggers().create(
                parent=self.get_workspace_path(),
                body=trigger_body
            ).execute()
            time.sleep(1)

            trigger_id = result['triggerId']
            self.created_items['triggers'][name] = trigger_id
            print(f"✅ Created trigger: {name}")
            return trigger_id
        except HttpError as e:
            if 'duplicate' in str(e).lower():
                print(f"⏭️  Skipped trigger (already exists): {name}")
                return None
            raise

    def create_scroll_depth_trigger(self) -> str:
        """Create scroll depth trigger"""
        return self.create_trigger(
            'Scroll Depth - 25%, 50%, 75%, 100%',
            'scrollDepth',
            percentages={'type': 'list', 'list': [
                {'type': 'template', 'value': '25'},
                {'type': 'template', 'value': '50'},
                {'type': 'template', 'value': '75'},
                {'type': 'template', 'value': '100'}
            ]}
        )

    def create_outbound_link_trigger(self) -> str:
        """Create outbound link click trigger"""
        filters = [
            {
                'type': 'contains',
                'parameter': [
                    {'type': 'template', 'key': 'arg0', 'value': '{{Click URL}}'},
                    {'type': 'template', 'key': 'arg1', 'value': 'http'}
                ]
            },
            {
                'type': 'matchRegex',
                'parameter': [
                    {'type': 'template', 'key': 'arg0', 'value': '{{Click URL}}'},
                    {'type': 'template', 'key': 'arg1', 'value': '^(?!.*diegonmarcos\\.github\\.io).*$'}
                ]
            }
        ]

        return self.create_trigger('Outbound Link Click', 'linkClick', filters=filters)

    def create_download_trigger(self) -> str:
        """Create file download trigger"""
        filters = [
            {
                'type': 'matchRegex',
                'parameter': [
                    {'type': 'template', 'key': 'arg0', 'value': '{{Click Element}}'},
                    {'type': 'template', 'key': 'arg1', 'value': 'a\\[download\\]|a\\[href\\$="\\.pdf"\\]|a\\[href\\$="\\.docx"\\]|a\\[href\\$="\\.csv"\\]|a\\[href\\$="\\.md"\\]|a\\[href\\$="\\.vcf"\\]'}
                ]
            }
        ]

        return self.create_trigger('File Download Click', 'click', filters=filters)

    def create_timer_triggers(self) -> List[str]:
        """Create time on page timer triggers"""
        intervals = [10000, 30000, 60000, 120000, 300000]  # milliseconds
        trigger_ids = []

        for interval in intervals:
            seconds = interval // 1000
            trigger_id = self.create_trigger(
                f'Timer - {seconds}s',
                'timer',
                interval=interval,
                limit=1
            )
            trigger_ids.append(trigger_id)

        return trigger_ids

    def create_linktree_link_trigger(self) -> str:
        """Create linktree link click trigger"""
        filters = [
            {
                'type': 'contains',
                'parameter': [
                    {'type': 'template', 'key': 'arg0', 'value': '{{Page Path}}'},
                    {'type': 'template', 'key': 'arg1', 'value': '/linktree'}
                ]
            },
            {
                'type': 'cssSelector',
                'parameter': [
                    {'type': 'template', 'key': 'arg0', 'value': '{{Click Element}}'},
                    {'type': 'template', 'key': 'arg1', 'value': 'a.link'}
                ]
            }
        ]

        return self.create_trigger('Linktree - Link Click', 'click', filters=filters)

    def create_social_icon_trigger(self) -> str:
        """Create social icon click trigger"""
        filters = [
            {
                'type': 'contains',
                'parameter': [
                    {'type': 'template', 'key': 'arg0', 'value': '{{Page Path}}'},
                    {'type': 'template', 'key': 'arg1', 'value': '/linktree'}
                ]
            },
            {
                'type': 'cssSelector',
                'parameter': [
                    {'type': 'template', 'key': 'arg0', 'value': '{{Click Element}}'},
                    {'type': 'template', 'key': 'arg1', 'value': '.social-icons a'}
                ]
            }
        ]

        return self.create_trigger('Linktree - Social Icon Click', 'click', filters=filters)

    def create_cv_download_trigger(self) -> str:
        """Create CV download button trigger"""
        filters = [
            {
                'type': 'cssSelector',
                'parameter': [
                    {'type': 'template', 'key': 'arg0', 'value': '{{Click Element}}'},
                    {'type': 'template', 'key': 'arg1', 'value': '#download-btn-pdf, #download-btn-docx, #download-btn-md, #download-btn-csv, .cta-button'}
                ]
            }
        ]

        return self.create_trigger('CV - Download Button Click', 'click', filters=filters)

    def create_ui_controls_trigger(self) -> str:
        """Create UI controls/buttons trigger (theme, font, language toggles)"""
        filters = [
            {
                'type': 'cssSelector',
                'parameter': [
                    {'type': 'template', 'key': 'arg0', 'value': '{{Click Element}}'},
                    {'type': 'template', 'key': 'arg1', 'value': '#theme-toggle, #language-toggle-btn, #palette-cycler-btn, #terminal-theme-btn, #desktop-view-toggle, #increase-font-size-btn, #reset-font-size-btn, #background-toggle, #animation-toggle, #clippy-disable, .menu-toggle-btn, .icon-button'}
                ]
            }
        ]

        return self.create_trigger('UI Controls Click', 'click', filters=filters)

    def create_collapsible_toggle_trigger(self) -> str:
        """Create collapsible button trigger"""
        filters = [
            {
                'type': 'cssSelector',
                'parameter': [
                    {'type': 'template', 'key': 'arg0', 'value': '{{Click Element}}'},
                    {'type': 'template', 'key': 'arg1', 'value': '.more-toggle, button.more-toggle, .collapsible-toggle'}
                ]
            }
        ]

        return self.create_trigger('Collapsible Toggle Click', 'click', filters=filters)

    def create_vcard_download_trigger(self) -> str:
        """Create vCard download trigger"""
        filters = [
            {
                'type': 'contains',
                'parameter': [
                    {'type': 'template', 'key': 'arg0', 'value': '{{Click URL}}'},
                    {'type': 'template', 'key': 'arg1', 'value': '.vcf'}
                ]
            }
        ]

        return self.create_trigger('vCard Download', 'click', filters=filters)

    def create_game_nav_trigger(self) -> str:
        """Create game/navigation menu trigger for myprofile"""
        filters = [
            {
                'type': 'cssSelector',
                'parameter': [
                    {'type': 'template', 'key': 'arg0', 'value': '{{Click Element}}'},
                    {'type': 'template', 'key': 'arg1', 'value': '.control-btn, .arcade-controls a, nav a'}
                ]
            }
        ]

        return self.create_trigger('Navigation Menu Click', 'click', filters=filters)

    def create_all_triggers(self):
        """Create all triggers"""
        print("\n🎯 Creating Triggers...")

        # Universal triggers
        self.create_scroll_depth_trigger()
        self.create_outbound_link_trigger()
        self.create_download_trigger()
        self.create_timer_triggers()

        # Page-specific triggers
        self.create_linktree_link_trigger()
        self.create_social_icon_trigger()
        self.create_cv_download_trigger()

        # New interaction triggers
        self.create_ui_controls_trigger()
        self.create_collapsible_toggle_trigger()
        self.create_vcard_download_trigger()
        self.create_game_nav_trigger()

        print(f"✅ Created {len(self.created_items['triggers'])} triggers")

    # ==================== TAGS ====================

    def create_ga4_config_tag(self) -> str:
        """Create GA4 Configuration tag"""
        if 'GA4 Config - All Pages' in self.created_items['tags']:
            print(f"⏭️  Skipped tag (already exists): GA4 Config - All Pages")
            return None
        try:
            tag = {
                'name': 'GA4 Config - All Pages',
                'type': 'gaawc',  # GA4 Configuration
                'parameter': [
                    {'key': 'measurementId', 'type': 'template', 'value': GA4_MEASUREMENT_ID}
                ],
                'firingTriggerId': [self.get_all_pages_trigger_id()]
            }

            result = self.service.accounts().containers().workspaces().tags().create(
                parent=self.get_workspace_path(),
                body=tag
            ).execute()
            time.sleep(1)

            tag_id = result['tagId']
            self.created_items['tags']['ga4_config'] = tag_id
            print(f"✅ Created tag: GA4 Config - All Pages")
            return tag_id
        except HttpError as e:
            if 'duplicate' in str(e).lower():
                print(f"⏭️  Skipped tag (already exists): GA4 Config - All Pages")
                return None
            raise

    def create_ga4_event_tag(self, name: str, event_name: str, parameters: Dict, trigger_ids: List[str]) -> str:
        """Create a GA4 Event tag"""
        if name in self.created_items['tags']:
            print(f"⏭️  Skipped tag (already exists): {name}")
            return None
        try:
            # Build parameter list
            param_list = [
                {'key': 'measurementIdOverride', 'type': 'template', 'value': GA4_MEASUREMENT_ID},
                {'key': 'eventName', 'type': 'template', 'value': event_name}
            ]

            # Add event parameters
            if parameters:
                event_params = []
                for key, value in parameters.items():
                    event_params.append({
                        'type': 'map',
                        'map': [
                            {'key': 'name', 'type': 'template', 'value': key},
                            {'key': 'value', 'type': 'template', 'value': value}
                        ]
                    })

                param_list.append({
                    'key': 'eventParameters',
                    'type': 'list',
                    'list': event_params
                })

            tag = {
                'name': name,
                'type': 'gaawe',  # GA4 Event
                'parameter': param_list,
                'firingTriggerId': trigger_ids
            }

            result = self.service.accounts().containers().workspaces().tags().create(
                parent=self.get_workspace_path(),
                body=tag
            ).execute()
            time.sleep(1)

            tag_id = result['tagId']
            self.created_items['tags'][name] = tag_id
            print(f"✅ Created tag: {name}")
            return tag_id
        except HttpError as e:
            if 'duplicate' in str(e).lower():
                print(f"⏭️  Skipped tag (already exists): {name}")
                return None
            raise

    def create_custom_html_tag(self, name: str, html: str, trigger_ids: List[str]) -> str:
        """Create Custom HTML tag"""
        if name in self.created_items['tags']:
            print(f"⏭️  Skipped tag (already exists): {name}")
            return None
        try:
            tag = {
                'name': name,
                'type': 'html',
                'parameter': [
                    {'key': 'html', 'type': 'template', 'value': html}
                ],
                'firingTriggerId': trigger_ids
            }

            result = self.service.accounts().containers().workspaces().tags().create(
                parent=self.get_workspace_path(),
                body=tag
            ).execute()
            time.sleep(1)

            tag_id = result['tagId']
            self.created_items['tags'][name] = tag_id
            print(f"✅ Created tag: {name}")
            return tag_id
        except HttpError as e:
            if 'duplicate' in str(e).lower():
                print(f"⏭️  Skipped tag (already exists): {name}")
                return None
            raise

    def get_all_pages_trigger_id(self) -> str:
        """Get the built-in All Pages trigger ID"""
        # Built-in trigger IDs are usually "2147479553" but we need to fetch it
        triggers = self.service.accounts().containers().workspaces().triggers().list(
            parent=self.get_workspace_path()
        ).execute()

        for trigger in triggers.get('trigger', []):
            if trigger.get('type') == 'pageview':
                return trigger['triggerId']

        # If not found, create one
        return self.create_trigger('All Pages', 'pageview')

    def create_scroll_depth_tag(self):
        """Create scroll depth tracking tag"""
        params = {
            'depth_percentage': '{{Scroll Depth Threshold}}',
            'page_path': '{{Page Path}}',
            'page_title': '{{Page Title}}'
        }

        return self.create_ga4_event_tag(
            'GA4 Event - Scroll Depth',
            'scroll_depth',
            params,
            [self.get_trigger_id_by_name('Scroll Depth - 25%, 50%, 75%, 100%')]
        )

    def create_outbound_link_tag(self):
        """Create outbound link tracking tag"""
        params = {
            'link_url': '{{Click URL}}',
            'link_text': '{{Click Text}}',
            'link_domain': '{{Link Domain}}',
            'page_location': '{{Page URL}}'
        }

        return self.create_ga4_event_tag(
            'GA4 Event - Outbound Link',
            'outbound_click',
            params,
            [self.get_trigger_id_by_name('Outbound Link Click')]
        )

    def create_download_tag(self):
        """Create file download tracking tag"""
        params = {
            'file_name': '{{Click Text}}',
            'file_url': '{{Click URL}}',
            'file_extension': '{{File Extension}}',
            'page_location': '{{Page URL}}'
        }

        return self.create_ga4_event_tag(
            'GA4 Event - File Download',
            'file_download',
            params,
            [self.get_trigger_id_by_name('File Download Click')]
        )

    def create_linktree_link_tag(self):
        """Create linktree link click tracking tag"""
        params = {
            'link_category': '{{Linktree Link Category}}',
            'link_subsection': '{{Linktree Link Subsection}}',
            'link_text': '{{Click Text}}',
            'link_url': '{{Click URL}}',
            'page_location': '{{Page URL}}'
        }

        return self.create_ga4_event_tag(
            'GA4 Event - Linktree Link Click',
            'linktree_link_click',
            params,
            [self.get_trigger_id_by_name('Linktree - Link Click')]
        )

    def create_social_icon_tag(self):
        """Create social icon click tracking tag"""
        params = {
            'icon_platform': '{{Click Text}}',
            'icon_location': 'header',
            'link_url': '{{Click URL}}'
        }

        return self.create_ga4_event_tag(
            'GA4 Event - Social Icon Click',
            'social_icon_click',
            params,
            [self.get_trigger_id_by_name('Linktree - Social Icon Click')]
        )

    def create_cv_download_tag(self):
        """Create CV download tracking tag"""
        params = {
            'cv_format': '{{CV Format}}',
            'download_location': '{{Page Path}}',
            'button_text': '{{Click Text}}'
        }

        return self.create_ga4_event_tag(
            'GA4 Event - CV Download',
            'cv_download',
            params,
            [self.get_trigger_id_by_name('CV - Download Button Click')]
        )

    def create_ui_controls_tag(self):
        """Create UI controls click tracking tag"""
        params = {
            'control_type': '{{Click ID}}',
            'control_text': '{{Click Text}}',
            'control_class': '{{Click Classes}}',
            'page_location': '{{Page Path}}'
        }

        return self.create_ga4_event_tag(
            'GA4 Event - UI Control Click',
            'ui_control_click',
            params,
            [self.get_trigger_id_by_name('UI Controls Click')]
        )

    def create_collapsible_toggle_tag(self):
        """Create collapsible toggle tracking tag"""
        params = {
            'toggle_target': '{{Click Attributes.data-target}}',
            'toggle_text': '{{Click Text}}',
            'page_location': '{{Page Path}}'
        }

        return self.create_ga4_event_tag(
            'GA4 Event - Collapsible Toggle',
            'collapsible_toggle',
            params,
            [self.get_trigger_id_by_name('Collapsible Toggle Click')]
        )

    def create_vcard_download_tag(self):
        """Create vCard download tracking tag"""
        params = {
            'file_url': '{{Click URL}}',
            'link_text': '{{Click Text}}',
            'page_location': '{{Page Path}}'
        }

        return self.create_ga4_event_tag(
            'GA4 Event - vCard Download',
            'vcard_download',
            params,
            [self.get_trigger_id_by_name('vCard Download')]
        )

    def create_game_nav_tag(self):
        """Create game/navigation menu tracking tag"""
        params = {
            'nav_text': '{{Click Text}}',
            'nav_url': '{{Click URL}}',
            'nav_location': '{{Page Path}}'
        }

        return self.create_ga4_event_tag(
            'GA4 Event - Navigation Click',
            'navigation_click',
            params,
            [self.get_trigger_id_by_name('Navigation Menu Click')]
        )

    def create_session_info_tag(self):
        """Create session info tracking tag"""
        html = """
<script>
(function() {
  window.dataLayer = window.dataLayer || [];

  dataLayer.push({
    'event': 'session_info',
    'device_type': /Mobile|Android|iPhone/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
    'browser': (function() {
      var ua = navigator.userAgent;
      if (ua.indexOf('Firefox') > -1) return 'Firefox';
      if (ua.indexOf('Chrome') > -1) return 'Chrome';
      if (ua.indexOf('Safari') > -1) return 'Safari';
      if (ua.indexOf('Edge') > -1) return 'Edge';
      return 'Other';
    })(),
    'viewport_width': window.innerWidth,
    'viewport_height': window.innerHeight,
    'screen_resolution': screen.width + 'x' + screen.height,
    'language': navigator.language,
    'referrer': document.referrer
  });
})();
</script>
"""

        return self.create_custom_html_tag(
            'Session Info Tracking',
            html,
            [self.get_all_pages_trigger_id()]
        )

    def create_video_tracking_tag(self):
        """Create video interaction tracking tag"""
        html = """
<script>
(function() {
  window.dataLayer = window.dataLayer || [];

  setTimeout(function() {
    var videos = document.querySelectorAll('video');

    videos.forEach(function(video, index) {
      var videoId = video.id || 'video_' + index;

      video.addEventListener('play', function() {
        dataLayer.push({
          'event': 'video_interaction',
          'video_action': 'play',
          'video_id': videoId,
          'video_src': video.currentSrc,
          'video_duration': video.duration
        });
      });

      video.addEventListener('pause', function() {
        dataLayer.push({
          'event': 'video_interaction',
          'video_action': 'pause',
          'video_id': videoId,
          'video_current_time': video.currentTime,
          'video_percent': Math.round((video.currentTime / video.duration) * 100)
        });
      });

      video.addEventListener('ended', function() {
        dataLayer.push({
          'event': 'video_interaction',
          'video_action': 'complete',
          'video_id': videoId
        });
      });
    });
  }, 1000);
})();
</script>
"""

        return self.create_custom_html_tag(
            'Video Tracking - Universal',
            html,
            [self.get_all_pages_trigger_id()]
        )

    def create_all_tags(self):
        """Create all tags"""
        print("\n🏷️  Creating Tags...")

        # Core GA4 config
        self.create_ga4_config_tag()

        # Universal event tags
        self.create_scroll_depth_tag()
        self.create_outbound_link_tag()
        self.create_download_tag()

        # Custom HTML tags
        self.create_session_info_tag()
        self.create_video_tracking_tag()

        # Page-specific tags
        self.create_linktree_link_tag()
        self.create_social_icon_tag()
        self.create_cv_download_tag()

        # New interaction tags
        self.create_ui_controls_tag()
        self.create_collapsible_toggle_tag()
        self.create_vcard_download_tag()
        self.create_game_nav_tag()

        print(f"✅ Created {len(self.created_items['tags'])} tags")

    # ==================== MAIN WORKFLOW ====================

    def setup_complete_tracking(self):
        """Run complete GTM setup"""
        print("\n" + "="*60)
        print("🚀 GTM Universal Event Tracking Setup")
        print(f"Container: {GTM_CONTAINER}")
        print(f"GA4 ID: {GA4_MEASUREMENT_ID}")
        print("="*60)

        try:
            # Authenticate
            self.authenticate()

            # Create workspace
            self.create_workspace()

            # Get all existing items
            self.get_all_variables()
            self.get_all_triggers()
            self.get_all_tags()

            # Create all configuration
            self.create_all_variables()
            self.create_all_triggers()
            self.create_all_tags()

            # Summary
            print("\n" + "="*60)
            print("✅ GTM Setup Complete!")
            print("="*60)
            print(f"📊 Variables created: {len(self.created_items['variables'])}")
            print(f"🎯 Triggers created: {len(self.created_items['triggers'])}")
            print(f"🏷️  Tags created: {len(self.created_items['tags'])}")
            print("\n🌐 Next Steps:")
            print("1. Go to https://tagmanager.google.com")
            print(f"2. Open container: {GTM_CONTAINER}")
            print("3. Review the workspace: 'Universal Event Tracking Setup'")
            print("4. Test in Preview mode")
            print("5. Submit and publish the container")
            print("="*60)

            # Save configuration for reference
            self.save_configuration()

        except Exception as e:
            print(f"\n❌ Error during setup: {e}")
            raise

    def save_configuration(self):
        """Save created items to JSON for reference"""
        script_dir = os.path.dirname(os.path.abspath(__file__))
        config_path = os.path.join(script_dir, 'gtm_config_created.json')
        with open(config_path, 'w') as f:
            json.dump(self.created_items, f, indent=2)
        print(f"\n💾 Configuration saved to {config_path}")


def main():
    """Main entry point"""
    print("GTM API Configuration Script")
    print("-" * 60)

    # Check if account and container IDs are set
    if ACCOUNT_ID == "YOUR_ACCOUNT_ID" or CONTAINER_ID == "YOUR_CONTAINER_ID":
        print("\n⚠️  Please update ACCOUNT_ID and CONTAINER_ID in the script")
        print("\nTo find your IDs:")
        print("1. Go to https://tagmanager.google.com")
        print("2. Select your container")
        print("3. Click on the container ID in the top bar")
        print("4. You'll see: accounts/ACCOUNT_ID/containers/CONTAINER_ID")
        return

    # Initialize configurator
    configurator = GTMConfigurator(ACCOUNT_ID, CONTAINER_ID)

    # Run setup
    configurator.setup_complete_tracking()


if __name__ == '__main__':
    main()
