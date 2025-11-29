#!/usr/bin/env python3
"""
MyMaps - Strategic Map Generator
Generates complete HTML map files from CSV data.
"""

import json
import csv
import os
from pathlib import Path

# ==========================================
# PATHS (relative to script location)
# ==========================================
SCRIPT_DIR = Path(__file__).parent
PROJECT_DIR = SCRIPT_DIR.parent
MAPS_DIR = PROJECT_DIR / "maps"

# ==========================================
# CONFIGURATION: COLORS & CATEGORIES
# ==========================================

COLORS = {
    # RUSSIA SPHERE
    'RED_CORE': '#8B0000',    # Dark Red (Aggressor)
    'RED_ALLY': '#CD5C5C',    # Light Red (Military Ally)
    'RED_TIE':  '#FF8C00',    # Orange (Economic/Infra Tie)
    'RED_WEAK': '#F0E68C',    # Yellow (Weak/Controlled)

    # NATO SPHERE
    'BLUE_CORE': '#00008B',   # Dark Blue (NATO Core)
    'BLUE_ALLY': '#87CEEB',   # Light Blue (West Aligned)
    'BLUE_SURR': '#90EE90',   # Green (Surrounded by NATO)

    # NEUTRALS
    'NEUTRAL_STRONG': '#4F4F4F', # Dark Grey (Powerbrokers)
    'NEUTRAL_WEAK':   '#2C2C2C'  # Darker Grey (Rest of World)
}

# ==========================================
# LOAD CONFIGURATION & DATA
# ==========================================

def load_config(filename=None):
    if filename is None:
        filename = SCRIPT_DIR / "config.csv"

    config = {
        'map_path': 'custom/world',
        'join_by': 'hc-key',
        'title': 'Strategic Map',
        'data_code_column': 'code',
        'data_name_column': 'name',
        'data_role_column': 'role',
        'data_sphere_column': 'sphere'
    }
    try:
        with open(filename, mode='r', encoding='utf-8') as csvfile:
            reader = csv.reader(csvfile)
            next(reader, None)
            for row in reader:
                if len(row) >= 2:
                    key = row[0].strip()
                    value = row[1].strip()
                    config[key] = value
        print(f"Loaded config: {config}")
        return config
    except FileNotFoundError:
        print(f"⚠️ Warning: {filename} not found. Using defaults.")
        return config


def load_data_from_csv(filename=None, config=None):
    if filename is None:
        filename = SCRIPT_DIR / "input_data.csv"
    if config is None:
        config = load_config()

    data = []
    try:
        with open(filename, mode='r', encoding='utf-8') as csvfile:
            reader = csv.DictReader(csvfile)

            expected_cols_set = set()
            for col_key in ['data_code_column', 'data_name_column', 'data_role_column', 'data_sphere_column']:
                if config.get(col_key):
                    expected_cols_set.add(config[col_key])
            expected_cols = list(expected_cols_set)

            missing_cols = [col for col in expected_cols if col not in reader.fieldnames]
            if missing_cols:
                print(f"⚠️ Warning: Missing columns in {filename}: {', '.join(missing_cols)}")

            for row in reader:
                code = row.get(config['data_code_column'], '').strip().lower()
                name = row.get(config['data_name_column'], '').strip()
                role = row.get(config['data_role_column'], '').strip()
                sphere_key = row.get(config['data_sphere_column'], '').strip()

                color = COLORS.get(sphere_key, COLORS['NEUTRAL_WEAK'])

                if code:
                    data.append({
                        'code': code,
                        'color': color,
                        'name': name,
                        'role': role
                    })
        print(f"Loaded {len(data)} entries from {filename}")
        return data
    except FileNotFoundError:
        print(f"❌ Error: {filename} not found.")
        return []
    except Exception as e:
        print(f"❌ Error reading CSV: {e}")
        return []


# ==========================================
# HTML TEMPLATE
# ==========================================

HTML_TEMPLATE = '''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    <script src="https://code.highcharts.com/maps/highmaps.js"></script>
    <script src="https://code.highcharts.com/maps/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/maps/modules/accessibility.js"></script>
    <style>
        * {{ margin: 0; padding: 0; box-sizing: border-box; }}
        body {{
            background: #121212;
            color: #fff;
            font-family: 'Segoe UI', system-ui, sans-serif;
            min-height: 100vh;
        }}
        .header {{
            padding: 20px;
            text-align: center;
            border-bottom: 1px solid #333;
        }}
        .header h1 {{
            font-weight: 300;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 5px;
        }}
        .header .subtitle {{
            color: #888;
            font-size: 0.9em;
        }}
        .back-link {{
            position: absolute;
            top: 20px;
            left: 20px;
            color: #888;
            text-decoration: none;
            font-size: 0.9em;
            transition: color 0.2s;
        }}
        .back-link:hover {{ color: #fff; }}
        #container {{
            height: calc(100vh - 180px);
            min-height: 400px;
            margin: 20px;
            border: 1px solid #333;
            border-radius: 4px;
        }}
        .legend {{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
            padding: 15px;
            background: #1a1a1a;
            border-top: 1px solid #333;
        }}
        .legend-item {{
            display: flex;
            align-items: center;
            padding: 5px 10px;
            background: #222;
            border-radius: 4px;
            font-size: 0.75rem;
        }}
        .legend-dot {{
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin-right: 6px;
        }}
    </style>
</head>
<body>
    <a href="../index.html" class="back-link">← Back to Maps</a>

    <div class="header">
        <h1>{title}</h1>
        <div class="subtitle">Map: {map_path}</div>
    </div>

    <div id="container"></div>

    <div class="legend">
        <div class="legend-item"><div class="legend-dot" style="background:#8B0000"></div>Red Core</div>
        <div class="legend-item"><div class="legend-dot" style="background:#CD5C5C"></div>Red Ally</div>
        <div class="legend-item"><div class="legend-dot" style="background:#FF8C00"></div>Red Tie</div>
        <div class="legend-item"><div class="legend-dot" style="background:#00008B"></div>Blue Core</div>
        <div class="legend-item"><div class="legend-dot" style="background:#87CEEB"></div>Blue Ally</div>
        <div class="legend-item"><div class="legend-dot" style="background:#90EE90"></div>Blue Surr</div>
        <div class="legend-item"><div class="legend-dot" style="background:#4F4F4F"></div>Neutral Strong</div>
        <div class="legend-item"><div class="legend-dot" style="background:#2C2C2C"></div>Neutral</div>
    </div>

    <script>
        const mapConfig = {config_json};
        const strategicData = {data_json};

        const mapUrl = `https://code.highcharts.com/mapdata/${{mapConfig.map_path}}.js`;

        function loadScript(url, callback) {{
            const script = document.createElement("script");
            script.src = url;
            script.onload = callback;
            script.onerror = () => {{
                document.getElementById('container').innerHTML =
                    '<p style="color:red;text-align:center;padding:50px">Error loading map: ' + url + '</p>';
            }};
            document.head.appendChild(script);
        }}

        loadScript(mapUrl, function() {{
            const mapKey = Object.keys(Highcharts.maps)[0];
            if (!mapKey) {{
                document.getElementById('container').innerHTML = '<p style="color:red;text-align:center;padding:50px">Map data not found</p>';
                return;
            }}

            Highcharts.mapChart('container', {{
                chart: {{
                    map: Highcharts.maps[mapKey],
                    backgroundColor: '#121212'
                }},
                title: {{ text: '' }},
                mapNavigation: {{
                    enabled: true,
                    buttonOptions: {{
                        verticalAlign: 'bottom',
                        theme: {{ fill: '#333', stroke: '#444', style: {{ color: '#fff' }} }}
                    }}
                }},
                legend: {{ enabled: false }},
                credits: {{ enabled: false }},
                tooltip: {{
                    backgroundColor: 'rgba(0,0,0,0.9)',
                    borderColor: '#666',
                    style: {{ color: '#fff' }},
                    formatter: function() {{
                        if (this.point.role) {{
                            return '<b>' + this.point.name + '</b><br>' +
                                   '<span style="color:' + this.point.color + '">' + this.point.role + '</span>';
                        }}
                        return '<b>' + this.point.name + '</b><br>Neutral';
                    }}
                }},
                series: [{{
                    data: strategicData,
                    joinBy: [mapConfig.join_by || 'hc-key', 'code'],
                    name: 'Strategic',
                    nullColor: '#2C2C2C',
                    borderColor: '#444',
                    borderWidth: 0.5,
                    states: {{ hover: {{ color: '#fff', borderColor: '#fff' }} }}
                }}]
            }});
        }});
    </script>
</body>
</html>
'''


# ==========================================
# GENERATE MAP
# ==========================================

def generate_map(output_name=None, config_file=None, data_file=None):
    """Generate a complete HTML map file."""
    print("Processing...")

    config = load_config(config_file)
    data = load_data_from_csv(data_file, config)

    if not data:
        print("No data to export.")
        return None

    # Ensure maps directory exists
    MAPS_DIR.mkdir(exist_ok=True)

    # Generate output filename
    if output_name is None:
        # Auto-generate name from title
        safe_title = config.get('title', 'map').lower()
        safe_title = ''.join(c if c.isalnum() else '_' for c in safe_title)
        output_name = f"{safe_title}.html"

    if not output_name.endswith('.html'):
        output_name += '.html'

    output_path = MAPS_DIR / output_name

    # Generate HTML
    html = HTML_TEMPLATE.format(
        title=config.get('title', 'Strategic Map'),
        map_path=config.get('map_path', 'custom/world'),
        config_json=json.dumps(config, indent=8),
        data_json=json.dumps(data, indent=8)
    )

    try:
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(html)
        print(f"✅ Map generated: {output_path}")
        print(f"   Countries: {len(data)}")
        return output_path
    except Exception as e:
        print(f"❌ Error writing file: {e}")
        return None


def list_maps():
    """List all generated maps in the maps directory."""
    if not MAPS_DIR.exists():
        return []
    return sorted([f.name for f in MAPS_DIR.glob('*.html')])


if __name__ == "__main__":
    import sys

    if len(sys.argv) > 1:
        output_name = sys.argv[1]
    else:
        output_name = None

    generate_map(output_name)
