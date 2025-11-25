#!/usr/bin/env python3
"""
Matomo Tag Manager Event Setup Script
Automates creation of triggers and tags based on GTM-TN9SV57D.json configuration
"""

import requests
import json
import time

# Configuration
MATOMO_URL = "https://analytics.diegonmarcos.com"
API_TOKEN = "a8f11ea1f29a4907078e4a769fdfbb5d"
SITE_ID = 1
CONTAINER_ID = "62tfw1ai"

def call_api(method, params=None):
    """Call Matomo API"""
    if params is None:
        params = {}

    params.update({
        'module': 'API',
        'method': method,
        'format': 'json',
        'token_auth': API_TOKEN,
        'idSite': SITE_ID
    })

    response = requests.post(f"{MATOMO_URL}/index.php", data=params)
    return response.json()

def create_trigger(name, trigger_type, conditions=None):
    """Create a trigger in Tag Manager"""
    params = {
        'idContainer': CONTAINER_ID,
        'type': trigger_type,
        'name': name,
    }

    if conditions:
        params['conditions'] = json.dumps(conditions)

    try:
        result = call_api('TagManager.addContainerTrigger', params)
        print(f"✓ Created trigger: {name}")
        return result
    except Exception as e:
        print(f"✗ Error creating trigger {name}: {e}")
        return None

def create_tag(name, tag_type, fire_trigger_ids, parameters=None):
    """Create a tag in Tag Manager"""
    params = {
        'idContainer': CONTAINER_ID,
        'type': tag_type,
        'name': name,
        'fireTriggerIds': json.dumps(fire_trigger_ids) if isinstance(fire_trigger_ids, list) else fire_trigger_ids,
    }

    if parameters:
        params['parameters'] = json.dumps(parameters)

    try:
        result = call_api('TagManager.addContainerTag', params)
        print(f"✓ Created tag: {name}")
        return result
    except Exception as e:
        print(f"✗ Error creating tag {name}: {e}")
        return None

def create_variable(name, variable_type, parameters=None):
    """Create a variable in Tag Manager"""
    params = {
        'idContainer': CONTAINER_ID,
        'type': variable_type,
        'name': name,
    }

    if parameters:
        params['parameters'] = json.dumps(parameters)

    try:
        result = call_api('TagManager.addContainerVariable', params)
        print(f"✓ Created variable: {name}")
        return result
    except Exception as e:
        print(f"✗ Error creating variable {name}: {e}")
        return None

def setup_outbound_link_tracking():
    """Set up outbound link click tracking"""
    print("\n=== Setting up Outbound Link Tracking ===")

    # Create trigger
    trigger = create_trigger(
        name="Outbound Link Click",
        trigger_type="Click",
        conditions=[
            {
                "actual": "{{ClickURL}}",
                "comparison": "contains",
                "expected": "http"
            },
            {
                "actual": "{{ClickURL}}",
                "comparison": "does_not_contain",
                "expected": "diegonmarcos.github.io"
            }
        ]
    )

    if trigger and 'idtrigger' in trigger:
        # Create tag
        create_tag(
            name="Matomo Event - Outbound Link Click",
            tag_type="MatomoTag",
            fire_trigger_ids=[trigger['idtrigger']],
            parameters={
                'matomoConfig': {
                    'name': 'matomoConfig',
                    'value': 'matomo'
                },
                'trackingType': {
                    'name': 'trackingType',
                    'value': 'event'
                },
                'eventCategory': {
                    'name': 'eventCategory',
                    'value': 'Outbound Links'
                },
                'eventAction': {
                    'name': 'eventAction',
                    'value': 'Click'
                },
                'eventName': {
                    'name': 'eventName',
                    'value': '{{ClickURL}}'
                }
            }
        )

def setup_file_download_tracking():
    """Set up file download tracking"""
    print("\n=== Setting up File Download Tracking ===")

    # Create trigger
    trigger = create_trigger(
        name="File Download Click",
        trigger_type="Click",
        conditions=[
            {
                "actual": "{{ClickURL}}",
                "comparison": "matches_regex",
                "expected": "\\.(pdf|docx?|xlsx?|pptx?|zip|csv|md)$"
            }
        ]
    )

    if trigger and 'idtrigger' in trigger:
        # Create tag
        create_tag(
            name="Matomo Event - File Download",
            tag_type="MatomoTag",
            fire_trigger_ids=[trigger['idtrigger']],
            parameters={
                'matomoConfig': {
                    'name': 'matomoConfig',
                    'value': 'matomo'
                },
                'trackingType': {
                    'name': 'trackingType',
                    'value': 'event'
                },
                'eventCategory': {
                    'name': 'eventCategory',
                    'value': 'Downloads'
                },
                'eventAction': {
                    'name': 'eventAction',
                    'value': 'File Download'
                },
                'eventName': {
                    'name': 'eventName',
                    'value': '{{ClickURL}}'
                }
            }
        )

def setup_scroll_depth_tracking():
    """Set up scroll depth tracking"""
    print("\n=== Setting up Scroll Depth Tracking ===")

    # Create trigger
    trigger = create_trigger(
        name="Scroll Depth - 25%, 50%, 75%, 100%",
        trigger_type="ScrollReach",
        conditions=[
            {
                "actual": "{{ScrollDepthThreshold}}",
                "comparison": "greater_than_or_equals",
                "expected": "25"
            }
        ]
    )

    if trigger and 'idtrigger' in trigger:
        # Create tag
        create_tag(
            name="Matomo Event - Scroll Depth",
            tag_type="MatomoTag",
            fire_trigger_ids=[trigger['idtrigger']],
            parameters={
                'matomoConfig': {
                    'name': 'matomoConfig',
                    'value': 'matomo'
                },
                'trackingType': {
                    'name': 'trackingType',
                    'value': 'event'
                },
                'eventCategory': {
                    'name': 'eventCategory',
                    'value': 'Engagement'
                },
                'eventAction': {
                    'name': 'eventAction',
                    'value': 'Scroll'
                },
                'eventName': {
                    'name': 'eventName',
                    'value': '{{ScrollDepthThreshold}}%'
                }
            }
        )

def setup_linktree_tracking():
    """Set up linktree link click tracking"""
    print("\n=== Setting up Linktree Link Click Tracking ===")

    # Create trigger
    trigger = create_trigger(
        name="Linktree - Link Click",
        trigger_type="Click",
        conditions=[
            {
                "actual": "{{PagePath}}",
                "comparison": "contains",
                "expected": "/linktree"
            },
            {
                "actual": "{{ClickElementClasses}}",
                "comparison": "contains",
                "expected": "link-item"
            }
        ]
    )

    if trigger and 'idtrigger' in trigger:
        # Create tag
        create_tag(
            name="Matomo Event - Linktree Link Click",
            tag_type="MatomoTag",
            fire_trigger_ids=[trigger['idtrigger']],
            parameters={
                'matomoConfig': {
                    'name': 'matomoConfig',
                    'value': 'matomo'
                },
                'trackingType': {
                    'name': 'trackingType',
                    'value': 'event'
                },
                'eventCategory': {
                    'name': 'eventCategory',
                    'value': 'Linktree'
                },
                'eventAction': {
                    'name': 'eventAction',
                    'value': 'Link Click'
                },
                'eventName': {
                    'name': 'eventName',
                    'value': '{{ClickText}}'
                }
            }
        )

def setup_social_icon_tracking():
    """Set up social icon click tracking"""
    print("\n=== Setting up Social Icon Click Tracking ===")

    # Create trigger
    trigger = create_trigger(
        name="Social Icon Click",
        trigger_type="Click",
        conditions=[
            {
                "actual": "{{ClickElementClasses}}",
                "comparison": "contains",
                "expected": "social-icon"
            }
        ]
    )

    if trigger and 'idtrigger' in trigger:
        # Create tag
        create_tag(
            name="Matomo Event - Social Icon Click",
            tag_type="MatomoTag",
            fire_trigger_ids=[trigger['idtrigger']],
            parameters={
                'matomoConfig': {
                    'name': 'matomoConfig',
                    'value': 'matomo'
                },
                'trackingType': {
                    'name': 'trackingType',
                    'value': 'event'
                },
                'eventCategory': {
                    'name': 'eventCategory',
                    'value': 'Social'
                },
                'eventAction': {
                    'name': 'eventAction',
                    'value': 'Icon Click'
                },
                'eventName': {
                    'name': 'eventName',
                    'value': '{{ClickURL}}'
                }
            }
        )

def setup_cv_download_tracking():
    """Set up CV download button tracking"""
    print("\n=== Setting up CV Download Tracking ===")

    # Create trigger
    trigger = create_trigger(
        name="CV Download Button Click",
        trigger_type="Click",
        conditions=[
            {
                "actual": "{{ClickElementId}}",
                "comparison": "matches_regex",
                "expected": "(download-pdf|download-docx|download-csv|download-md)"
            }
        ]
    )

    if trigger and 'idtrigger' in trigger:
        # Create tag
        create_tag(
            name="Matomo Event - CV Download",
            tag_type="MatomoTag",
            fire_trigger_ids=[trigger['idtrigger']],
            parameters={
                'matomoConfig': {
                    'name': 'matomoConfig',
                    'value': 'matomo'
                },
                'trackingType': {
                    'name': 'trackingType',
                    'value': 'event'
                },
                'eventCategory': {
                    'name': 'eventCategory',
                    'value': 'CV'
                },
                'eventAction': {
                    'name': 'eventAction',
                    'value': 'Download'
                },
                'eventName': {
                    'name': 'eventName',
                    'value': '{{ClickElementId}}'
                }
            }
        )

def publish_container():
    """Publish the container after making changes"""
    print("\n=== Publishing Container ===")

    try:
        result = call_api('TagManager.publishContainerVersion', {
            'idContainer': CONTAINER_ID,
            'environment': 'live',
            'name': 'v3 - Event Tracking Setup',
            'description': 'Added outbound links, downloads, scroll, linktree, social, and CV tracking events'
        })
        print("✓ Container published successfully!")
        return result
    except Exception as e:
        print(f"✗ Error publishing container: {e}")
        return None

def main():
    """Main execution"""
    print("=" * 60)
    print("Matomo Tag Manager Event Setup")
    print("=" * 60)

    # Test API connection
    print("\nTesting API connection...")
    sites = call_api('SitesManager.getSitesWithAdminAccess')
    if isinstance(sites, list) and len(sites) > 0:
        print(f"✓ Connected to Matomo. Found {len(sites)} site(s)")
    else:
        print("✗ Failed to connect to Matomo API")
        return

    # Set up each tracking type
    setup_outbound_link_tracking()
    time.sleep(1)

    setup_file_download_tracking()
    time.sleep(1)

    setup_scroll_depth_tracking()
    time.sleep(1)

    setup_linktree_tracking()
    time.sleep(1)

    setup_social_icon_tracking()
    time.sleep(1)

    setup_cv_download_tracking()
    time.sleep(1)

    # Publish container
    publish_container()

    print("\n" + "=" * 60)
    print("Setup Complete!")
    print("=" * 60)
    print("\nNext steps:")
    print("1. Visit https://analytics.diegonmarcos.com")
    print("2. Go to Tag Manager → Preview Mode")
    print("3. Test events on your site")
    print("4. Check Behavior → Events for tracking data")

if __name__ == "__main__":
    main()
