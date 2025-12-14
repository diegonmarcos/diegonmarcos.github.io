#!/usr/bin/env python3
"""
Export Cloud Control Data to JavaScript Files

Generates 4 .js files matching the 4 cloud_control subpages:
- monitor.js        → /api/cloud_control/monitor
- costs_infra.js    → /api/cloud_control/costs_infra
- costs_ai.js       → /api/cloud_control/costs_ai
- infrastructure.js → /api/cloud_control/infrastructure

These files serve as fallback data when the Flask API is unreachable.

Usage:
    python export_cloud_control_data.py [--output-dir OUTPUT_DIR]

Author: Diego Nepomuceno Marcos
Version: 1.0.0
Last Updated: 2025-12-14
"""

import json
import sys
from pathlib import Path
from datetime import datetime
from typing import Dict, Any, Optional

# =============================================================================
# CONFIGURATION
# =============================================================================

# Path to cloud_dash.json (source of truth)
CONFIG_FILE = Path("/home/diego/Documents/Git/back-System/cloud/1.ops/cloud_dash.json")

# Default output directory (front-end a_Cloud/api)
DEFAULT_OUTPUT_DIR = Path("/home/diego/Documents/Git/front-Github_io/a_Cloud/api")


# =============================================================================
# HELPER FUNCTIONS
# =============================================================================

def load_config() -> Dict[str, Any]:
    """Load cloud_dash.json configuration."""
    if not CONFIG_FILE.exists():
        raise FileNotFoundError(f"Config not found: {CONFIG_FILE}")

    with open(CONFIG_FILE, 'r') as f:
        return json.load(f)


def get_vm_categories(config: Dict) -> list:
    """Get VM category IDs."""
    return list(config.get('vmCategories', {}).keys())


def get_vm_category_name(config: Dict, cat_id: str) -> str:
    """Get VM category display name."""
    return config.get('vmCategories', {}).get(cat_id, {}).get('name', cat_id)


def get_vm_ids_by_category(config: Dict, cat_id: str) -> list:
    """Get VM IDs for a specific category."""
    vm_ids = []
    for vm_id, vm_data in config.get('virtualMachines', {}).items():
        if vm_data.get('category') == cat_id:
            vm_ids.append(vm_id)
    return vm_ids


def get_vm(config: Dict, vm_id: str) -> Optional[Dict]:
    """Get VM data by ID."""
    return config.get('virtualMachines', {}).get(vm_id)


def get_service_categories(config: Dict) -> list:
    """Get service category IDs."""
    return list(config.get('serviceCategories', {}).keys())


def get_service_category_name(config: Dict, cat_id: str) -> str:
    """Get service category display name."""
    return config.get('serviceCategories', {}).get(cat_id, {}).get('name', cat_id)


def get_service_ids_by_category(config: Dict, cat_id: str) -> list:
    """Get service IDs for a specific category."""
    svc_ids = []
    for svc_id, svc_data in config.get('services', {}).items():
        if svc_data.get('category') == cat_id:
            svc_ids.append(svc_id)
    return svc_ids


def get_service(config: Dict, svc_id: str) -> Optional[Dict]:
    """Get service data by ID."""
    return config.get('services', {}).get(svc_id)


# =============================================================================
# DATA GENERATORS (match Flask endpoints)
# =============================================================================

def generate_monitor_data(config: Dict) -> Dict[str, Any]:
    """Generate monitor page data (VMs and services status summary)."""
    # VMs
    vm_summary = []
    for cat_id in get_vm_categories(config):
        cat_vms = []
        for vm_id in get_vm_ids_by_category(config, cat_id):
            vm_data = get_vm(config, vm_id)
            if vm_data:
                # Get runtime status (if available)
                runtime_status = config.get('runtimeStatus', {}).get(vm_id, {})
                cat_vms.append({
                    'id': vm_id,
                    'name': vm_data.get('name'),
                    'ip': vm_data.get('network', {}).get('publicIp'),
                    'instanceType': vm_data.get('instanceType'),
                    'provider': vm_data.get('provider'),
                    'status': vm_data.get('status'),
                    'online': runtime_status.get('online', False),
                    'ping': runtime_status.get('ping', False),
                    'ssh': runtime_status.get('ssh', False),
                    'ram_percent': runtime_status.get('ram_percent')
                })
        if cat_vms:
            vm_summary.append({
                'category': cat_id,
                'categoryName': get_vm_category_name(config, cat_id),
                'vms': cat_vms
            })

    # Services
    svc_summary = []
    for cat_id in get_service_categories(config):
        cat_svcs = []
        for svc_id in get_service_ids_by_category(config, cat_id):
            svc_data = get_service(config, svc_id)
            if svc_data:
                # Get runtime status (if available)
                runtime_status = config.get('runtimeStatus', {}).get(svc_id, {})
                url = svc_data.get('urls', {}).get('gui') or svc_data.get('urls', {}).get('admin')
                cat_svcs.append({
                    'id': svc_id,
                    'name': svc_data.get('name'),
                    'url': url,
                    'vmId': svc_data.get('vmId'),
                    'status': svc_data.get('status'),
                    'http_ok': runtime_status.get('http_ok', False),
                    'response_time': runtime_status.get('response_time')
                })
        if cat_svcs:
            svc_summary.append({
                'category': cat_id,
                'categoryName': get_service_category_name(config, cat_id),
                'services': cat_svcs
            })

    return {
        'vms': vm_summary,
        'services': svc_summary
    }


def generate_costs_infra_data(config: Dict) -> Dict[str, Any]:
    """Generate infrastructure costs page data."""
    costs_infra = config.get('costs', {}).get('infra', {})

    return {
        'costs': costs_infra,
        'timestamp': config.get('lastUpdated')
    }


def generate_costs_ai_data(config: Dict) -> Dict[str, Any]:
    """Generate AI costs page data."""
    costs_ai = config.get('costs', {}).get('ai', {})

    return {
        'costs': costs_ai,
        'timestamp': config.get('lastUpdated')
    }


def generate_infrastructure_data(config: Dict) -> Dict[str, Any]:
    """Generate infrastructure page data (full details)."""
    # VMs with full details
    vms = []
    for vm_id, vm_data in config.get('virtualMachines', {}).items():
        vms.append({
            'id': vm_id,
            **vm_data
        })

    # Services with full details
    services = []
    for svc_id, svc_data in config.get('services', {}).items():
        services.append({
            'id': svc_id,
            **svc_data
        })

    return {
        'vms': vms,
        'services': services,
        'providers': config.get('providers', {}),
        'domains': config.get('domains', {}),
        'dockerNetworks': config.get('dockerNetworks', {}),
        'firewallRules': config.get('firewallRules', {}),
        'objectStorage': config.get('objectStorage', {}),
        'vmCategories': config.get('vmCategories', {}),
        'serviceCategories': config.get('serviceCategories', {})
    }


# =============================================================================
# EXPORT FUNCTIONS
# =============================================================================

def export_js_file(data: Dict[str, Any], filename: str, output_dir: Path) -> Path:
    """Export data to a JavaScript file.

    Args:
        data: Dictionary to export as JSON
        filename: Output filename (e.g., 'monitor.js')
        output_dir: Output directory path

    Returns:
        Path to the generated file
    """
    output_path = output_dir / filename
    timestamp = datetime.now().isoformat()

    # Create variable name from filename (monitor.js → MONITOR)
    var_name = filename.replace('.js', '').upper()

    # Build JS content
    js_content = f"""// Auto-generated by export_cloud_control_data.py
// Generated: {timestamp}
// Endpoint: /api/cloud_control/{filename.replace('.js', '')}

const {var_name} = {json.dumps(data, indent=2)};

// For ES6 modules
if (typeof module !== 'undefined' && module.exports) {{
    module.exports = {var_name};
}}
"""

    # Ensure output directory exists
    output_dir.mkdir(parents=True, exist_ok=True)

    # Write file
    with open(output_path, 'w') as f:
        f.write(js_content)

    return output_path


def export_all(output_dir: Optional[Path] = None):
    """Export all 4 cloud_control data files.

    Args:
        output_dir: Output directory (default: /home/diego/Documents/Git/front-Github_io/a_Cloud/api)
    """
    if output_dir is None:
        output_dir = DEFAULT_OUTPUT_DIR

    print(f"Loading configuration from {CONFIG_FILE}...")
    config = load_config()

    print(f"Exporting to {output_dir}...")

    # Generate and export each file
    exports = [
        ('monitor.js', generate_monitor_data(config)),
        ('costs_infra.js', generate_costs_infra_data(config)),
        ('costs_ai.js', generate_costs_ai_data(config)),
        ('infrastructure.js', generate_infrastructure_data(config))
    ]

    for filename, data in exports:
        output_path = export_js_file(data, filename, output_dir)
        print(f"  ✓ {filename} → {output_path}")

    # Also regenerate openapi.json from openapi.yaml (if they exist)
    openapi_yaml = output_dir / "openapi.yaml"
    openapi_json = output_dir / "openapi.json"
    if openapi_yaml.exists():
        try:
            import yaml
            with open(openapi_yaml, 'r') as f:
                spec = yaml.safe_load(f)
            with open(openapi_json, 'w') as f:
                json.dump(spec, f, indent=2)
            print(f"  ✓ openapi.json → {openapi_json} (from YAML)")
        except ImportError:
            print(f"  ⚠ Skipped openapi.json (PyYAML not installed)")
        except Exception as e:
            print(f"  ⚠ Failed to convert openapi.yaml: {e}")

    print(f"\n✅ Exported {len(exports)} files successfully!")
    print(f"\nOutput directory: {output_dir}")


# =============================================================================
# MAIN
# =============================================================================

def main():
    """Main entry point."""
    import argparse

    parser = argparse.ArgumentParser(
        description='Export cloud_control data to JavaScript files'
    )
    parser.add_argument(
        '--output-dir',
        type=Path,
        default=DEFAULT_OUTPUT_DIR,
        help=f'Output directory (default: {DEFAULT_OUTPUT_DIR})'
    )

    args = parser.parse_args()

    try:
        export_all(args.output_dir)
    except Exception as e:
        print(f"❌ Error: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == '__main__':
    main()
