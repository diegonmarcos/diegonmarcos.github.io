#!/usr/bin/env python3
"""Populate linkedin.json's experience / education / skills from LinkedIn's official data export.
Usage: extract_li_export.py <export_dir> <linkedin_json>

<export_dir>  = the unzipped "Basic_LinkedInDataExport_*.zip" folder (Positions.csv,
                Education.csv, Skills.csv, Profile.csv, Connections.csv).
<linkedin_json> = src/data/linkedin.json — read for the header fields the export does NOT
                contain (followers, open_to_work), then rewritten in place.

The raw export holds private data (connection names, messages) and is NEVER committed —
only the curated linkedin.json is. Header (name/headline/location) is refreshed from
Profile.csv; experience/education/skills come from the CSVs; followers/open_to_work are
preserved from the existing linkedin.json (LinkedIn's export omits them).
"""
import csv, json, os, sys

EXPORT, OUT = sys.argv[1], sys.argv[2]


def rows(name):
    """Yield dict rows from a CSV in the export dir (skips LinkedIn's optional 'Notes:' preamble)."""
    path = os.path.join(EXPORT, name)
    with open(path, newline='', encoding='utf-8') as f:
        lines = f.readlines()
    # LinkedIn prepends a "Notes:" block (ended by a blank line) on some CSVs; skip it.
    start = 0
    if lines and lines[0].startswith('Notes:'):
        start = next(i for i, ln in enumerate(lines) if not ln.strip()) + 1
    yield from csv.DictReader(lines[start:])


def dates(start, end):
    start, end = (start or '').strip(), (end or '').strip()
    if not start:
        return end
    return f"{start} - {end}" if end else f"{start} - Present"


# ── header (refresh what the export knows; preserve the rest from existing json) ──
existing = json.load(open(OUT, encoding='utf-8'))
prof = existing['profile']

p = next(rows('Profile.csv'))
last = p['Last Name'].split(' - (')[0].strip()          # drop the "- (alias)" suffix
prof['name'] = f"{p['First Name'].strip()} {last}".strip()
prof['headline'] = p['Headline'].strip().strip('|').strip()
prof['location'] = p['Geo Location'].strip()

conn = sum(1 for _ in rows('Connections.csv'))
prof['connections'] = '500+' if conn >= 500 else str(conn)
# followers / open_to_work: not in the export — keep existing values untouched.

# ── experience (Positions.csv is newest-first; keep order) ──
existing['experience'] = [
    {
        'title': r['Title'].strip(),
        'company': r['Company Name'].strip(),
        'dates': dates(r['Started On'], r['Finished On']),
        'location': r['Location'].strip(),
    }
    for r in rows('Positions.csv')
]
# first position still running = the "current" chip
current = next((e for e in existing['experience'] if e['dates'].endswith('Present')), None)
if current:
    prof['current'] = current['company']

# ── education ──
existing['education'] = [
    {
        'school': r['School Name'].strip(),
        'degree': r['Degree Name'].strip(),
        'dates': dates(r['Start Date'], r['End Date']),
    }
    for r in rows('Education.csv')
]

# ── skills ──
existing['skills'] = [r['Name'].strip() for r in rows('Skills.csv') if r['Name'].strip()]

# ── about / summary (Profile.csv) ──
existing['about'] = p['Summary'].strip()

# ── languages ──
existing['languages'] = [
    {'name': r['Name'].strip(), 'proficiency': r['Proficiency'].strip()}
    for r in rows('Languages.csv') if r['Name'].strip()
]

# ── projects ──
existing['projects'] = [
    {
        'title': r['Title'].strip(),
        'description': r['Description'].strip(),
        'url': r['Url'].strip(),
        'dates': dates(r['Started On'], r['Finished On']),
    }
    for r in rows('Projects.csv') if r['Title'].strip()
]

existing['_description'] = (
    'LinkedIn profile: header from a saved profile page; about/experience/education/skills/'
    'languages/projects from the official data export (extract_li_export.py). '
    'followers/open_to_work are export-omitted.'
)

json.dump(existing, open(OUT, 'w', encoding='utf-8'), ensure_ascii=False, indent=2)
print(f"experience={len(existing['experience'])} education={len(existing['education'])} "
      f"skills={len(existing['skills'])} connections={prof['connections']} current={prof['current']}")
