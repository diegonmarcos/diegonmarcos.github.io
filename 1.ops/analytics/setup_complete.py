#!/usr/bin/env python3
"""
Complete Matomo Tag Manager Setup
Creates triggers AND tags, then publishes
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

def create_trigger(name, trigger_type, conditions=None):
    """Create a trigger"""
    params = {
        'idContainer': CONTAINER_ID,
        'idContainerVersion': CONTAINER_VERSION,
        'type': trigger_type,
        'name': name,
    }

    # Add conditions as individual form fields
    if conditions:
        for i, condition in enumerate(conditions):
            params[f'conditions[{i}][actual]'] = condition['actual']
            params[f'conditions[{i}][comparison]'] = condition['comparison']
            params[f'conditions[{i}][expected]'] = condition['expected']

    try:
        result = call_api('TagManager.addContainerTrigger', params)
        trigger_id = result.get('value') if isinstance(result, dict) else result
        print(f"✓ Created trigger: {name} (ID: {trigger_id})")
        return trigger_id
    except Exception as e:
        print(f"✗ Error creating trigger {name}: {e}")
        return None

def create_tag(name, fire_trigger_id, event_category, event_action, event_name):
    """Create an event tracking tag"""
    params = {
        'idContainer': CONTAINER_ID,
        'idContainerVersion': CONTAINER_VERSION,
        'type': 'Matomo',
        'name': name,
        'fireTriggerIds[0]': fire_trigger_id,
        'parameters[matomoConfig]': '{{Matomo Configuration}}',
        'parameters[trackingType]': 'event',
        'parameters[eventCategory]': event_category,
        'parameters[eventAction]': event_action,
        'parameters[eventName]': event_name,
    }

    try:
        result = call_api('TagManager.addContainerTag', params)
        tag_id = result.get('value') if isinstance(result, dict) else result
        print(f"✓ Created tag: {name} (ID: {tag_id})")
        return tag_id
    except Exception as e:
        print(f"✗ Error creating tag {name}: {e}")
        return None

def publish_container():
    """Publish the container"""
    print("\n=== Publishing Container ===")
    try:
        result = call_api('TagManager.publishContainerVersion', {
            'idContainer': CONTAINER_ID,
            'environment': 'live',
            'name': 'v4 - Event Tracking Complete',
            'description': 'Added 6 triggers and 6 event tracking tags via API automation'
        })
        print("✓ Container published successfully!")
        return result
    except Exception as e:
        print(f"✗ Error publishing container: {e}")
        return None

def main():
    """Main execution"""
    print("=" * 60)
    print("Matomo Tag Manager - Complete Setup")
    print("=" * 60)

    # Define tracking setup
    tracking_setup = [
        {
            'trigger_name': 'Outbound Link Click',
            'trigger_type': 'Click',
            'trigger_conditions': [
                {'actual': '{{ClickURL}}', 'comparison': 'contains', 'expected': 'http'},
                {'actual': '{{ClickURL}}', 'comparison': 'does_not_contain', 'expected': 'diegonmarcos.github.io'}
            ],
            'tag_name': 'Matomo Event - Outbound Link Click',
            'event_category': 'Outbound Links',
            'event_action': 'Click',
            'event_name': '{{ClickURL}}'
        },
        {
            'trigger_name': 'File Download Click',
            'trigger_type': 'Click',
            'trigger_conditions': [
                {'actual': '{{ClickURL}}', 'comparison': 'matches_regex', 'expected': '\\.(pdf|docx?|xlsx?|pptx?|zip|csv|md)$'}
            ],
            'tag_name': 'Matomo Event - File Download',
            'event_category': 'Downloads',
            'event_action': 'File Download',
            'event_name': '{{ClickURL}}'
        },
        {
            'trigger_name': 'Scroll Depth',
            'trigger_type': 'ScrollReach',
            'trigger_conditions': None,
            'tag_name': 'Matomo Event - Scroll Depth',
            'event_category': 'Engagement',
            'event_action': 'Scroll',
            'event_name': '{{ScrollDepthThreshold}}%'
        },
        {
            'trigger_name': 'Linktree Link Click',
            'trigger_type': 'Click',
            'trigger_conditions': [
                {'actual': '{{PagePath}}', 'comparison': 'contains', 'expected': '/linktree'},
                {'actual': '{{ClickElementClasses}}', 'comparison': 'contains', 'expected': 'link'}
            ],
            'tag_name': 'Matomo Event - Linktree Link Click',
            'event_category': 'Linktree',
            'event_action': 'Link Click',
            'event_name': '{{ClickText}}'
        },
        {
            'trigger_name': 'Social Icon Click',
            'trigger_type': 'Click',
            'trigger_conditions': [
                {'actual': '{{ClickElementClasses}}', 'comparison': 'contains', 'expected': 'social'}
            ],
            'tag_name': 'Matomo Event - Social Icon Click',
            'event_category': 'Social',
            'event_action': 'Icon Click',
            'event_name': '{{ClickURL}}'
        },
        {
            'trigger_name': 'CV Download Click',
            'trigger_type': 'Click',
            'trigger_conditions': [
                {'actual': '{{ClickElementId}}', 'comparison': 'matches_regex', 'expected': '(download-pdf|download-docx|download-csv|download-md)'}
            ],
            'tag_name': 'Matomo Event - CV Download',
            'event_category': 'CV',
            'event_action': 'Download',
            'event_name': '{{ClickElementId}}'
        }
    ]

    created_count = 0

    for setup in tracking_setup:
        print(f"\n=== Setting up: {setup['trigger_name']} ===")

        # Create trigger
        trigger_id = create_trigger(
            name=setup['trigger_name'],
            trigger_type=setup['trigger_type'],
            conditions=setup['trigger_conditions']
        )

        if not trigger_id:
            continue

        time.sleep(0.5)

        # Create tag
        tag_id = create_tag(
            name=setup['tag_name'],
            fire_trigger_id=trigger_id,
            event_category=setup['event_category'],
            event_action=setup['event_action'],
            event_name=setup['event_name']
        )

        if tag_id:
            created_count += 1

        time.sleep(0.5)

    # Publish container
    if created_count > 0:
        publish_container()

    print("\n" + "=" * 60)
    print(f"Complete! Created {created_count}/{len(tracking_setup)} event trackers")
    print("=" * 60)

    if created_count == len(tracking_setup):
        print("\n✓ All triggers and tags created successfully!")
        print("\nNext steps:")
        print("1. Visit https://analytics.diegonmarcos.com")
        print("2. Go to Tag Manager → Preview Mode")
        print("3. Test events on your site")
        print("4. Check Behavior → Events for tracking data")
    else:
        print(f"\n⚠ Only {created_count}/{len(tracking_setup)} were created")

if __name__ == "__main__":
    main()
