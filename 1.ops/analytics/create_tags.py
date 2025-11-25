#!/usr/bin/env python3
"""
Create Matomo Tag Manager Tags via API
Creates event tracking tags for the existing triggers
"""

import requests
import json
import time

# Configuration
MATOMO_URL = "https://analytics.diegonmarcos.com"
API_TOKEN = "a8f11ea1f29a4907078e4a769fdfbb5d"
SITE_ID = 1
CONTAINER_ID = "62tfw1ai"
CONTAINER_VERSION = 1  # Draft version

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
    result = response.json()

    if isinstance(result, dict) and result.get('result') == 'error':
        raise Exception(f"API Error: {result.get('message')}")

    return result

def create_tag(name, fire_trigger_ids, event_category, event_action, event_name):
    """Create a Matomo event tracking tag"""

    # Parameters must be sent as form data, not JSON
    params = {
        'idContainer': CONTAINER_ID,
        'idContainerVersion': CONTAINER_VERSION,
        'type': 'Matomo',
        'name': name,
        'fireTriggerIds[0]': fire_trigger_ids[0] if isinstance(fire_trigger_ids, list) else fire_trigger_ids,
    }

    # Add parameters as individual form fields
    params['parameters[matomoConfig]'] = '{{Matomo Configuration}}'
    params['parameters[trackingType]'] = 'event'
    params['parameters[eventCategory]'] = event_category
    params['parameters[eventAction]'] = event_action
    params['parameters[eventName]'] = event_name

    try:
        result = call_api('TagManager.addContainerTag', params)
        print(f"✓ Created tag: {name}")
        return result
    except Exception as e:
        print(f"✗ Error creating tag {name}: {e}")
        return None

def get_triggers():
    """Get existing triggers"""
    try:
        triggers = call_api('TagManager.getContainerTriggers', {
            'idContainer': CONTAINER_ID,
            'idContainerVersion': CONTAINER_VERSION
        })
        return {t['name']: t['idtrigger'] for t in triggers}
    except Exception as e:
        print(f"Error getting triggers: {e}")
        return {}

def publish_container():
    """Publish the container"""
    print("\n=== Publishing Container ===")
    try:
        result = call_api('TagManager.publishContainerVersion', {
            'idContainer': CONTAINER_ID,
            'environment': 'live',
            'name': 'v4 - Event Tracking Complete',
            'description': 'Added 6 event tracking tags via API automation'
        })
        print("✓ Container published successfully!")
        return result
    except Exception as e:
        print(f"✗ Error publishing container: {e}")
        return None

def main():
    """Main execution"""
    print("=" * 60)
    print("Matomo Tag Manager - Create Event Tags")
    print("=" * 60)

    # Get trigger IDs
    print("\nFetching triggers...")
    triggers = get_triggers()

    if not triggers:
        print("✗ No triggers found!")
        return

    print(f"✓ Found {len(triggers)} triggers")
    for name, id in triggers.items():
        print(f"  - {name} (ID: {id})")

    # Define tags to create
    tags_config = [
        {
            'name': 'Matomo Event - Outbound Link Click',
            'trigger_name': 'Outbound Link Click',
            'event_category': 'Outbound Links',
            'event_action': 'Click',
            'event_name': '{{ClickURL}}'
        },
        {
            'name': 'Matomo Event - File Download',
            'trigger_name': 'File Download Click',
            'event_category': 'Downloads',
            'event_action': 'File Download',
            'event_name': '{{ClickURL}}'
        },
        {
            'name': 'Matomo Event - Scroll Depth',
            'trigger_name': 'Scroll Depth - 25%, 50%, 75%, 100%',
            'event_category': 'Engagement',
            'event_action': 'Scroll',
            'event_name': '{{ScrollDepthThreshold}}%'
        },
        {
            'name': 'Matomo Event - Linktree Link Click',
            'trigger_name': 'Linktree - Link Click',
            'event_category': 'Linktree',
            'event_action': 'Link Click',
            'event_name': '{{ClickText}}'
        },
        {
            'name': 'Matomo Event - Social Icon Click',
            'trigger_name': 'Social Icon Click',
            'event_category': 'Social',
            'event_action': 'Icon Click',
            'event_name': '{{ClickURL}}'
        },
        {
            'name': 'Matomo Event - CV Download',
            'trigger_name': 'CV Download Button Click',
            'event_category': 'CV',
            'event_action': 'Download',
            'event_name': '{{ClickElementId}}'
        }
    ]

    # Create each tag
    print("\n=== Creating Tags ===")
    created_count = 0

    for tag_config in tags_config:
        trigger_id = triggers.get(tag_config['trigger_name'])

        if not trigger_id:
            print(f"✗ Trigger not found: {tag_config['trigger_name']}")
            continue

        result = create_tag(
            name=tag_config['name'],
            fire_trigger_ids=[trigger_id],
            event_category=tag_config['event_category'],
            event_action=tag_config['event_action'],
            event_name=tag_config['event_name']
        )

        if result:
            created_count += 1

        time.sleep(0.5)  # Small delay between API calls

    # Publish container
    if created_count > 0:
        publish_container()

    print("\n" + "=" * 60)
    print(f"Complete! Created {created_count}/{len(tags_config)} tags")
    print("=" * 60)

    if created_count == len(tags_config):
        print("\n✓ All tags created and published successfully!")
        print("\nNext steps:")
        print("1. Visit https://analytics.diegonmarcos.com")
        print("2. Go to Tag Manager → Preview Mode")
        print("3. Test events on your site")
        print("4. Check Behavior → Events for tracking data")
    else:
        print(f"\n⚠ Only {created_count}/{len(tags_config)} tags were created")
        print("Check errors above and retry")

if __name__ == "__main__":
    main()
