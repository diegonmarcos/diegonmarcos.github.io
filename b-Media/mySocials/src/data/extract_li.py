#!/usr/bin/env python3
"""Parse a saved LinkedIn profile page (view-source / quoted-printable) -> linkedin.json.
Usage: extract_li.py <saved_html> <out_json> [<export_dir>]

The public profile page only contains the HEADER (name, headline, location, follower/
connection counts, open-to-work, current company). Experience/Education/Skills are
collapsed and NOT in the DOM — those come from LinkedIn's official data export
(Settings -> Get a copy of your data). Pass the unzipped export dir as the 3rd arg
and this script fills experience (incl. Description), education, and skills from
Positions.csv / Education.csv / Skills.csv. Without it, those sections stay [] (so
DON'T re-run without the export or you'll wipe hand-filled sections).

Only the generated linkedin.json (public career data) is committed — NEVER commit the
raw export dir: it also contains Connections/PhoneNumbers/Logins/Email CSVs (private).
"""
import re, quopri, html, json, sys, csv, os

SRC, OUT = sys.argv[1], sys.argv[2]
EXPORT_DIR = sys.argv[3] if len(sys.argv) > 3 else None


def _csv(name):
    """Read a CSV from the export dir (utf-8-sig strips LinkedIn's BOM). [] if absent."""
    if not EXPORT_DIR:
        return []
    path = os.path.join(EXPORT_DIR, name)
    if not os.path.isfile(path):
        return []
    with open(path, encoding="utf-8-sig") as fh:
        return list(csv.DictReader(fh))


def _dates(start, end):
    start, end = (start or "").strip(), (end or "").strip()
    if start and end:
        return f"{start} - {end}"
    return start or end or ""


def parse_experience():
    out = []
    for r in _csv("Positions.csv"):
        out.append({
            "title": (r.get("Title") or "").strip(),
            "company": (r.get("Company Name") or "").strip(),
            "dates": _dates(r.get("Started On"), r.get("Finished On")) or "Present",
            "location": (r.get("Location") or "").strip(),
            "description": (r.get("Description") or "").strip(),
        })
    return out


def parse_education():
    out = []
    for r in _csv("Education.csv"):
        out.append({
            "school": (r.get("School Name") or "").strip(),
            "degree": (r.get("Degree Name") or "").strip(),
            "dates": _dates(r.get("Start Date"), r.get("End Date")),
        })
    return out


def parse_skills():
    return [(r.get("Name") or "").strip() for r in _csv("Skills.csv") if (r.get("Name") or "").strip()]
raw = open(SRC, 'rb').read()
d = quopri.decodestring(raw).decode('utf-8', 'ignore')
d = html.unescape(d).replace('\\"', '"').replace('\\/', '/')

def node(contains):
    m = re.search(r'"children":\["([^"]*' + re.escape(contains) + r'[^"]*)"\]', d)
    return m.group(1).strip() if m else ''

def first_int(s):
    m = re.search(r'([\d,]+)', s)
    return int(m.group(1).replace(',', '')) if m else 0

name_line = node('Nepomuceno')                       # "Diego Nepomuceno Marcos - (Diego Coelho Marcos)"
name = re.split(r'\s*-\s*\(', name_line)[0].strip() if name_line else 'Diego Nepomuceno Marcos'
headline = node('Product Engineering').strip(' |')
location = node('Berlin')
followers = first_int(node('followers'))
connections = node('connections').replace(' connections', '').strip()
open_to = node('On-site')

data = {
    '_description': 'LinkedIn profile header parsed by extract_li.py from a saved profile page. Experience/Education/Skills need the official data export (not present in the public page).',
    'profile': {
        'name': name,
        'headline': headline,
        'location': location,
        'followers': followers,
        'connections': connections,
        'open_to_work': open_to,
        'current': 'LEAF.Y',
        'url': 'linkedin.com/in/diegonmarcos',
    },
    'experience': parse_experience(),   # from Positions.csv (Description incl.)
    'education': parse_education(),      # from Education.csv
    'skills': parse_skills(),            # from Skills.csv
}
json.dump(data, open(OUT, 'w'), ensure_ascii=False, indent=2)
print(json.dumps(data['profile'], ensure_ascii=False, indent=2))
