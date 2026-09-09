#!/usr/bin/env python3
"""Assert the generated HTML still says everything the .docx says.

This re-derives headings, hyperlink targets and body text straight from the
.docx and compares them with what it finds in the .html. It deliberately shares
no code with build-cv-html.py: the point is to catch a silent content loss on
the next edit, whichever side that edit lands on.

The heading rule, stated once and implemented on both sides:
  * a heading paragraph must contain at least one alphanumeric character;
  * inside the nested ATS table a leading '-' marks a list item, not a title;
  * level 1  - lead run coloured #1f3864 (the section colour);
  * level 2  - lead run at 9pt (w:sz 18) outside the ATS table;
  * level 3  - lead run at 7pt (w:sz 14) inside the ATS table;
  * level 4  - lead run at 5pt (w:sz 10) inside the ATS table;
  * a paragraph directly above a nested table titles that table (level 2).
"lead run" means the first run in the paragraph carrying non-whitespace text.

Usage: check-cv-fidelity.py <source.docx> <target.html>   (exit 1 on mismatch)
"""
import os
import re
import sys
import unicodedata
import zipfile
from html.parser import HTMLParser
from xml.etree import ElementTree as ET

W = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
R = '{http://schemas.openxmlformats.org/officeDocument/2006/relationships}'
NAVY = '1f3864'
SIZE_LEVEL = {False: {18: 2}, True: {14: 3, 10: 4}}


def norm(text):
    text = unicodedata.normalize('NFC', text.replace('​', ''))
    return ' '.join(text.split())


def text_of(node):
    return ''.join(t.text or '' for t in node.iter(W + 't'))


def docx_facts(path):
    zf = zipfile.ZipFile(path)
    doc = ET.fromstring(zf.read('word/document.xml'))
    rels = {r.get('Id'): r.get('Target')
            for r in ET.fromstring(zf.read('word/_rels/document.xml.rels'))
            if r.get('Type').endswith('/hyperlink')}

    parents = {id(c): p for p in doc.iter() for c in p}

    def depth_in_tables(el):
        n, cur = 0, parents.get(id(el))
        while cur is not None:
            if cur.tag == W + 'tbl':
                n += 1
            cur = parents.get(id(cur))
        return n

    def lead_rpr(p):
        for r in p.iter(W + 'r'):
            if text_of(r).strip():
                return r.find(W + 'rPr')
        return None

    def level(p):
        text = text_of(p).strip()
        in_ats = depth_in_tables(p) >= 2
        if not re.search(r'[^\W_]', text, re.UNICODE):
            return 0
        if in_ats and text.startswith('-'):
            return 0
        rPr = lead_rpr(p)
        if rPr is None:
            return 0
        col = rPr.find(W + 'color')
        if col is not None and (col.get(W + 'val') or '').lower() == NAVY:
            return 1
        sz = rPr.find(W + 'sz')
        half = int(float(sz.get(W + 'val'))) if sz is not None else 22
        return SIZE_LEVEL[in_ats].get(half, 0)

    headings, levels = [], {}
    for p in doc.iter(W + 'p'):
        lv = level(p)
        levels[id(p)] = lv
        if lv:
            headings.append((lv, norm(text_of(p))))

    # a paragraph directly above a nested table titles that table
    for tbl in doc.iter(W + 'tbl'):
        if depth_in_tables(tbl) < 1:
            continue
        cell = parents.get(id(tbl))
        if cell is None:
            continue
        kids = list(cell)
        idx = kids.index(tbl)
        for prev in reversed(kids[:idx]):
            if prev.tag == W + 'p' and text_of(prev).strip():
                if levels.get(id(prev)) == 0:
                    headings.append((2, norm(text_of(prev))))
                break

    links = [rels[h.get(R + 'id')] for h in doc.iter(W + 'hyperlink')
             if h.get(R + 'id') in rels]
    return {
        'headings': headings,
        'links': links,
        'rel_targets': set(rels.values()),
        'text': norm(text_of(doc.find(W + 'body'))),
    }


class Extract(HTMLParser):
    VOID = {'br', 'hr', 'img', 'col', 'meta', 'link', 'input'}

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.stack = []
        self.text = []
        self.headings = []
        self.links = []
        self.ids = set()
        self.controls = []
        self.toggles = 0
        self.toggle_in_link = 0
        self.link_in_toggle = 0
        self.external = []
        self.skip = 0
        self.in_main = False
        self.css = []

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a:
            self.ids.add(a['id'])
        classes = (a.get('class') or '').split()
        if tag == 'div' and 'data-heading' in a:
            self.headings.append((int(a.get('data-level', '0')), norm(a['data-heading'])))
        if tag == 'button' and 'cv-toggle' in classes:
            self.toggles += 1
            self.controls.append((a.get('aria-controls', ''), a.get('aria-expanded')))
            if any(t == 'a' for t in self.stack):
                self.toggle_in_link += 1
        if tag == 'main':
            self.in_main = True
        if tag == 'a':
            href = a.get('href', '')
            if not href.startswith('#'):
                self.links.append(href)
            if any(t == 'button' for t in self.stack):
                self.link_in_toggle += 1
        # Only resource fetches count against self-containment; an <a href> is
        # document content and is supposed to point at the open web.
        if 'src' in a and not a['src'].startswith('data:'):
            self.external.append(a['src'])
        if tag in ('link', 'img', 'iframe', 'object', 'embed'):
            href = a.get('href') or a.get('data') or ''
            if href and not href.startswith('data:'):
                self.external.append(href)
        if tag in ('style', 'script', 'svg'):
            self.skip += 1
            self.collect_css = (tag == 'style')
        if tag not in self.VOID:
            self.stack.append(tag)

    def handle_endtag(self, tag):
        if tag == 'main':
            self.in_main = False
        if tag in ('style', 'script', 'svg') and self.skip:
            self.skip -= 1
        if tag in self.stack:
            while self.stack and self.stack.pop() != tag:
                pass

    def handle_data(self, data):
        if self.skip:
            if getattr(self, 'collect_css', False):
                self.css.append(data)
        elif self.in_main:
            self.text.append(data)


DEFAULT_DOCX = '../assets/DiegoCMarcos_CurriculumVitae_en.docx'
DEFAULT_HTML = 'DiegoCMarcos_CurriculumVitae_en.html'


def main():
    here = os.path.dirname(os.path.abspath(__file__))
    docx_path = sys.argv[1] if len(sys.argv) > 1 else os.path.join(here, DEFAULT_DOCX)
    html_path = sys.argv[2] if len(sys.argv) > 2 else os.path.join(here, DEFAULT_HTML)
    facts = docx_facts(docx_path)
    parser = Extract()
    parser.feed(open(html_path, encoding='utf-8').read())

    doc_h = sorted(facts['headings'])
    htm_h = sorted(parser.headings)
    doc_l = sorted(facts['links'])
    htm_l = sorted(l for l in parser.links if not l.startswith('data:'))
    doc_t, htm_t = facts['text'], norm(''.join(parser.text))

    failures = []
    print(f'headings  docx={len(doc_h):<5} html={len(htm_h)}')
    if doc_h != htm_h:
        failures.append(f'heading mismatch:\n  only in docx: {sorted(set(doc_h) - set(htm_h))}'
                        f'\n  only in html: {sorted(set(htm_h) - set(doc_h))}')

    print(f'links     docx={len(doc_l):<5} html={len(htm_l)}   '
          f'distinct targets docx={len(set(doc_l))} html={len(set(htm_l))}')
    if sorted(set(doc_l)) != sorted(set(htm_l)):
        failures.append(f'link target mismatch:\n  only in docx: {sorted(set(doc_l) - set(htm_l))}'
                        f'\n  only in html: {sorted(set(htm_l) - set(doc_l))}')
    unused = facts['rel_targets'] - set(doc_l)
    if unused:
        print(f'          note: {len(unused)} hyperlink relationship(s) declared but '
              f'never referenced in document.xml: {sorted(unused)}')

    print(f'text      docx={len(doc_t):<5} html={len(htm_t)}   characters (whitespace normalised)')
    if doc_t != htm_t:
        for i, (a, b) in enumerate(zip(doc_t, htm_t)):
            if a != b:
                failures.append(f'text diverges at character {i}:\n'
                                f'  docx: ...{doc_t[max(0, i - 60):i + 60]!r}\n'
                                f'  html: ...{htm_t[max(0, i - 60):i + 60]!r}')
                break
        else:
            failures.append(f'text length differs: docx {len(doc_t)} vs html {len(htm_t)}\n'
                            f'  tail docx: {doc_t[len(htm_t):][:160]!r}\n'
                            f'  tail html: {htm_t[len(doc_t):][:160]!r}')

    print(f'toggles   {parser.toggles} button(s), one per heading')
    if parser.toggles != len(htm_h):
        failures.append(f'{parser.toggles} toggles for {len(htm_h)} headings')
    for controls, expanded in parser.controls:
        if expanded != 'true':
            failures.append(f'toggle aria-controls={controls!r} does not start expanded')
        for ref in controls.split():
            if ref not in parser.ids:
                failures.append(f'aria-controls points at missing id {ref!r}')
    if parser.toggle_in_link or parser.link_in_toggle:
        failures.append(f'hit areas overlap: {parser.toggle_in_link} toggle(s) inside an <a>, '
                        f'{parser.link_in_toggle} <a> inside a toggle')
    else:
        print('hit areas no toggle inside a link, no link inside a toggle')

    remote_css = [u for u in re.findall(r'url\(\s*[\'"]?([^)\'"]+)', ''.join(parser.css))
                  if not u.startswith('data:')]
    parser.external += remote_css
    if parser.external:
        failures.append(f'not self-contained, fetches: {parser.external[:5]}')
    else:
        print('offline   no external src/href resource')

    if failures:
        print('\nFAIL')
        for f in failures:
            print(' - ' + f)
        return 1
    print('\nOK')
    return 0


if __name__ == '__main__':
    sys.exit(main())
