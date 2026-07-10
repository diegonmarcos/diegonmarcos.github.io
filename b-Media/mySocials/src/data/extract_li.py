#!/usr/bin/env python3
"""Parse a saved LinkedIn profile page (view-source / quoted-printable) -> linkedin.json.
Usage: extract_li.py <saved_html> <out_json>

The public profile page only contains the HEADER (name, headline, location, follower/
connection counts, open-to-work, current company). Experience/Education/Skills are
collapsed and NOT in the DOM — fill those from LinkedIn's official data export
(Settings -> Get a copy of your data: Positions.csv / Education.csv / Skills.csv).
"""
import re, quopri, html, json, sys

SRC, OUT = sys.argv[1], sys.argv[2]
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
    'experience': [],   # fill from Positions.csv
    'education': [],     # fill from Education.csv
    'skills': [],        # fill from Skills.csv
}
json.dump(data, open(OUT, 'w'), ensure_ascii=False, indent=2)
print(json.dumps(data['profile'], ensure_ascii=False, indent=2))
