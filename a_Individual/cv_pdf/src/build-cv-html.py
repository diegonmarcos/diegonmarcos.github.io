#!/usr/bin/env python3
"""Render the owner's .docx curriculum vitae as one self-contained HTML file.

The .docx defines no paragraph styles: every size, colour, weight and indent is
direct formatting sitting on the run or the paragraph. There is therefore no
semantic stylesheet to recover -- the only faithful move is to read w:rPr/w:pPr
off each node and emit one deduplicated CSS class per distinct formatting
signature. Anything "tidier" would be a different document.

Usage: build.py <source.docx> <target.html>
"""
import base64
import html
import os
import re
import sys
import zipfile
from xml.etree import ElementTree as ET

W = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
R = '{http://schemas.openxmlformats.org/officeDocument/2006/relationships}'
A = '{http://schemas.openxmlformats.org/drawingml/2006/main}'
WP = '{http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing}'
MC = '{http://schemas.openxmlformats.org/markup-compatibility/2006}'

TWIP_PX = 1 / 15.0            # 1440 twip/inch at 96 px/inch
EMU_PX = 96 / 914400.0
NAVY = '1f3864'               # the colour the document uses for section titles

# Heading levels, derived only from formatting the document actually uses.
# check-cv-fidelity.py re-derives the same levels from the .docx independently.
LEVEL_BY_SIZE = {18: 2}                 # 9pt lead run: entry / group title
ATS_LEVEL_BY_SIZE = {14: 3, 10: 4}      # inside the ATS table: column, group

FONT_STACKS = {
    'eb-garamond': "'EB Garamond', Garamond, Georgia, serif",
    'calibri': "Calibri, Carlito, 'Segoe UI', system-ui, sans-serif",
    'times-new-roman': "'Times New Roman', Tinos, Times, serif",
    'georgia': "Georgia, 'Times New Roman', serif",
    'arial': "Arial, Liberation Sans, Helvetica, sans-serif",
}
EMBED_FACES = [
    ('word/fonts/EBGaramond-regular.ttf', '400', 'normal'),
    ('word/fonts/EBGaramond-bold.ttf', '700', 'normal'),
    ('word/fonts/EBGaramond-italic.ttf', '400', 'italic'),
    ('word/fonts/EBGaramond-boldItalic.ttf', '700', 'italic'),
]


def attr(el, name):
    return None if el is None else el.get(W + name)


def on(el):
    return el is not None and attr(el, 'val') not in ('0', 'false')


def px(v):
    return f'{v:.2f}'.rstrip('0').rstrip('.') + 'px'


def slug(name):
    return re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')


class Fmt:
    """One CSS class per distinct formatting signature."""

    def __init__(self, prefix):
        self.prefix, self.seen, self.order = prefix, {}, []

    def cls(self, decls):
        if not decls:
            return None
        key = ';'.join(f'{k}:{v}' for k, v in sorted(decls.items()))
        if key not in self.seen:
            self.seen[key] = f'{self.prefix}{len(self.seen)}'
            self.order.append((self.seen[key], dict(decls)))
        return self.seen[key]

    def css(self):
        return [f'.{n} {{ {" ".join(f"{k}: {v};" for k, v in d.items())} }}'
                for n, d in self.order]


class Builder:
    def __init__(self, path):
        self.zip = zipfile.ZipFile(path)
        self.doc = ET.fromstring(self.zip.read('word/document.xml'))
        self.body = self.doc.find(W + 'body')
        self.rels = {r.get('Id'): (r.get('Type').rsplit('/', 1)[-1], r.get('Target'))
                     for r in ET.fromstring(self.zip.read('word/_rels/document.xml.rels'))}
        self.run_fmt, self.para_fmt = Fmt('f'), Fmt('q')
        self.uid = 0
        self.links = []        # (rId, href) emitted, in document order
        self.headings = []     # (level, text) emitted, in document order
        self.sizes, self.colors, self.fonts = {22}, set(), set()
        self.rule_width = 0.0
        self.floaters = {}     # id(paragraph element) -> count of rules above it
        self.geometry = []     # extra CSS rules for table geometry
        self.plan_floating_rules()

    def nid(self, tag):
        self.uid += 1
        return f'{tag}{self.uid}'

    # ------------------------------------------------------------------ rules
    def plan_floating_rules(self):
        """The eight section rules are anchored wps straightConnector shapes.

        Three of them hang off the heading paragraph they belong to and render
        in place. The other five are absolutely positioned on page two by
        wp:positionV alone; there is no flow position to recover, so they are
        re-attached, in posV order, to the successive group headings they sit
        above. The first group heading is skipped: the rule above it is the one
        already anchored to the section title.
        """
        paras = list(self.body.iter(W + 'p'))
        floats_after = None
        for idx, p in enumerate(paras):
            drawings = [d for d in p.iter(WP + 'anchor')]
            text = ''.join(t.text or '' for t in p.iter(W + 't'))
            if drawings and not text.strip():
                offsets = []
                for anc in drawings:
                    v = anc.find(WP + 'positionV')
                    off = v.find(WP + 'posOffset') if v is not None else None
                    offsets.append(float(off.text) if off is not None else 0.0)
                # mc:AlternateContent duplicates each shape (Choice + Fallback)
                offsets = sorted(set(offsets))
                floats_after = (idx, len(offsets))
                break
        if not floats_after:
            return
        start, count = floats_after
        parents = {id(c): par for par in self.body.iter() for c in par}

        def nested_in_table(el):
            n, cur = 0, parents.get(id(el))
            while cur is not None:
                n += cur.tag == W + 'tbl'
                cur = parents.get(id(cur))
            return n >= 2

        targets = [p for p in paras[start + 1:]
                   if self.level_of(p, nested_in_table(p)) == 2]
        for p in targets[1:1 + count]:
            self.floaters[id(p)] = self.floaters.get(id(p), 0) + 1

    # ------------------------------------------------------------- formatting
    def run_decls(self, rPr):
        d = {}
        if rPr is None:
            return d
        f = rPr.find(W + 'rFonts')
        if f is not None and attr(f, 'ascii'):
            key = slug(attr(f, 'ascii'))
            self.fonts.add(key)
            d['font-family'] = f'var(--font-{key})'
        sz = rPr.find(W + 'sz')
        if sz is not None:
            half = int(float(attr(sz, 'val')))
            self.sizes.add(half)
            d['font-size'] = f'var(--fs-{half})'
        col = rPr.find(W + 'color')
        if col is not None and attr(col, 'val') not in (None, 'auto'):
            v = attr(col, 'val').lower()
            self.colors.add(v)
            d['color'] = f'var(--c-{v})'
        if on(rPr.find(W + 'b')):
            d['font-weight'] = '700'
        if on(rPr.find(W + 'i')):
            d['font-style'] = 'italic'
        u = rPr.find(W + 'u')
        if u is not None and attr(u, 'val') not in (None, 'none'):
            d['text-decoration'] = 'underline'
        if on(rPr.find(W + 'strike')):
            d['text-decoration'] = 'line-through'
        if on(rPr.find(W + 'smallCaps')):
            d['font-variant'] = 'small-caps'
        va = attr(rPr.find(W + 'vertAlign'), 'val')
        if va in ('superscript', 'subscript'):
            d['vertical-align'] = va
        hl = attr(rPr.find(W + 'highlight'), 'val')
        if hl not in (None, 'none'):
            d['background-color'] = hl
        return d

    def para_decls(self, pPr):
        d = {}
        if pPr is None:
            return d
        sp = pPr.find(W + 'spacing')
        if sp is not None:
            if attr(sp, 'before') is not None:
                d['margin-top'] = px(float(attr(sp, 'before')) * TWIP_PX)
            if attr(sp, 'after') is not None:
                d['margin-bottom'] = px(float(attr(sp, 'after')) * TWIP_PX)
            line, rule = attr(sp, 'line'), attr(sp, 'lineRule')
            if line is not None:
                if rule in (None, 'auto'):
                    d['line-height'] = f'{float(line) / 240:.4f}'.rstrip('0').rstrip('.')
                else:
                    d['line-height'] = px(float(line) * TWIP_PX)
        ind = pPr.find(W + 'ind')
        if ind is not None:
            if attr(ind, 'left') not in (None, '0'):
                d['padding-left'] = px(float(attr(ind, 'left')) * TWIP_PX)
            if attr(ind, 'right') not in (None, '0'):
                d['padding-right'] = px(float(attr(ind, 'right')) * TWIP_PX)
            if attr(ind, 'firstLine') not in (None, '0'):
                d['text-indent'] = px(float(attr(ind, 'firstLine')) * TWIP_PX)
            if attr(ind, 'hanging') not in (None, '0'):
                d['text-indent'] = '-' + px(float(attr(ind, 'hanging')) * TWIP_PX)
        jc = attr(pPr.find(W + 'jc'), 'val')
        if jc:
            d['text-align'] = {'both': 'justify'}.get(jc, jc)
        shd = pPr.find(W + 'shd')
        if shd is not None and attr(shd, 'fill') not in (None, 'auto'):
            d['background-color'] = '#' + attr(shd, 'fill')
        bdr = pPr.find(W + 'pBdr')
        if bdr is not None:
            for side in ('top', 'left', 'bottom', 'right'):
                b = bdr.find(W + side)
                if b is not None and attr(b, 'val') not in (None, 'nil', 'none'):
                    d[f'border-{side}'] = (f'{float(attr(b, "sz") or 4) / 8}pt solid '
                                           f'#{attr(b, "color") or "000000"}')
        return d

    # ---------------------------------------------------------------- content
    @staticmethod
    def text_of(node):
        return ''.join(t.text or '' for t in node.iter(W + 't'))

    def lead_rpr(self, p):
        """rPr of the first run that carries non-whitespace text."""
        for r in p.iter(W + 'r'):
            if self.text_of(r).strip():
                return r.find(W + 'rPr')
        return None

    def level_of(self, p, in_ats):
        text = self.text_of(p).strip()
        # A run of underscores is the document's decorative divider, not a
        # title; and inside the ATS table a leading '-' is its bullet glyph.
        if not re.search(r'[^\W_]', text, re.UNICODE):
            return 0
        if in_ats and text.startswith('-'):
            return 0
        rPr = self.lead_rpr(p)
        if rPr is None:
            return 0
        col = attr(rPr.find(W + 'color'), 'val')
        if (col or '').lower() == NAVY:
            return 1
        sz = rPr.find(W + 'sz')
        half = int(float(attr(sz, 'val'))) if sz is not None else 22
        return (ATS_LEVEL_BY_SIZE if in_ats else LEVEL_BY_SIZE).get(half, 0)

    def render_runs(self, node, out):
        for ch in node:
            if ch.tag == W + 'hyperlink':
                inner = []
                self.render_runs(ch, inner)
                rid, anchor = ch.get(R + 'id'), ch.get(W + 'anchor')
                if rid and rid in self.rels:
                    href = self.rels[rid][1]
                    self.links.append((rid, href))
                elif anchor:
                    href = '#' + anchor
                else:
                    href = '#'
                ext = (' target="_blank" rel="noopener noreferrer"'
                       if href.startswith(('http://', 'https://')) else '')
                out.append(f'<a class="cv-link" href="{html.escape(href, quote=True)}"'
                           f'{ext}>{"".join(inner)}</a>')
            elif ch.tag == W + 'r':
                self.render_run(ch, out)
            elif ch.tag in (W + 'ins', W + 'smartTag', W + 'sdt', W + 'sdtContent'):
                self.render_runs(ch, out)

    def render_run(self, r, out):
        cls = self.run_fmt.cls(self.run_decls(r.find(W + 'rPr')))
        span = f'<span class="{cls}">' if cls else '<span>'
        for ch in r:
            if ch.tag == W + 't':
                out.append(span + html.escape(ch.text or '') + '</span>')
            elif ch.tag == W + 'tab':
                out.append(span + '&#9;</span>')
            elif ch.tag == W + 'br':
                out.append('<span class="cv-pagebreak"></span>'
                           if attr(ch, 'type') == 'page' else '<br>')
            elif ch.tag == W + 'noBreakHyphen':
                out.append(span + '&#8209;</span>')
            elif ch.tag == W + 'softHyphen':
                out.append(span + '&shy;</span>')
            elif ch.tag in (W + 'drawing', MC + 'AlternateContent'):
                self.note_rule(ch)

    def note_rule(self, node):
        ext = next(iter(node.iter(WP + 'extent')), None)
        if ext is not None:
            self.rule_width = max(self.rule_width, float(ext.get('cx')) * EMU_PX)

    def render_para(self, p, in_ats):
        pcls = self.para_fmt.cls(self.para_decls(p.find(W + 'pPr')))
        out = []
        self.render_runs(p, out)
        body, text = ''.join(out), self.text_of(p)
        classes = ['cv-p'] + ([pcls] if pcls else [])
        has_rule = bool(list(p.iter(WP + 'anchor')))
        if not text.strip() and '<br>' not in body:
            mark = p.find(W + 'pPr')
            mark = mark.find(W + 'rPr') if mark is not None else None
            mcls = self.run_fmt.cls(self.run_decls(mark))
            classes.append('cv-blank')
            if mcls:
                classes.append(mcls)
            body = body or '&#8203;'
        markup = f'<p class="{" ".join(classes)}">{body}</p>'
        # A rule anchored to a paragraph that has text is the section rule that
        # renders just under it; keep it in flow immediately after.
        if has_rule and text.strip():
            markup += '<hr class="cv-rule">'
        return markup, text

    # ------------------------------------------------------------- assembling
    def items_of(self, container, in_ats):
        items = []
        for ch in container:
            if ch.tag == W + 'p':
                markup, text = self.render_para(ch, in_ats)
                for _ in range(self.floaters.get(id(ch), 0)):
                    items.append({'level': 0, 'html': '<hr class="cv-rule">',
                                  'text': '', 'kind': 'rule'})
                items.append({'level': self.level_of(ch, in_ats), 'html': markup,
                              'text': text, 'kind': 'p'})
            elif ch.tag == W + 'tbl':
                items.append({'level': 0, 'html': self.render_ats(ch),
                              'text': '', 'kind': 'tbl'})
                # A nested table belongs under the last heading-ish paragraph
                # above it, which is otherwise plain body text.
                for prev in reversed(items[:-1]):
                    if prev['kind'] == 'p' and prev['text'].strip():
                        prev['level'] = prev['level'] or 2
                        break
        return items

    def nest(self, items, extra_controls=()):
        out, i = [], 0
        while i < len(items):
            lvl = items[i]['level']
            if lvl == 0:
                out.append(items[i]['html'])
                i += 1
                continue
            j = i + 1
            while j < len(items) and (items[j]['level'] == 0 or items[j]['level'] > lvl):
                j += 1
            region_id = self.nid('region')
            controls = [region_id] + list(extra_controls)
            label = ' '.join(items[i]['text'].split()) or 'section'
            self.headings.append((lvl, label))
            head = self.heading_row(lvl, items[i]['html'], controls, label)
            wrap = items[i].get('wrap')
            out.append(wrap(head) if wrap else head)
            out.append(f'<div class="cv-region" id="{region_id}">'
                       f'{"".join(self.nest(items[i + 1:j]))}</div>')
            i = j
        return out

    @staticmethod
    def heading_row(lvl, para_html, controls, label):
        esc = html.escape(label, quote=True)
        return (
            f'<div class="cv-head" data-level="{lvl}" data-heading="{esc}">'
            f'<div class="cv-head-text">{para_html}</div>'
            f'<button class="cv-toggle" type="button" aria-expanded="true"'
            f' aria-controls="{" ".join(controls)}"'
            f' aria-label="Collapse section: {esc}">'
            f'<svg class="cv-chevron" viewBox="0 0 12 12" aria-hidden="true" focusable="false">'
            f'<path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor"'
            f' stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>'
            f'</svg></button></div>')

    # ----------------------------------------------------------------- tables
    @staticmethod
    def grid_cols(tbl):
        grid = tbl.find(W + 'tblGrid')
        return [float(g.get(W + 'w')) for g in grid.findall(W + 'gridCol')] if grid is not None else []

    def tbl_prop(self, tbl, tag, name, default=0.0):
        pr = tbl.find(W + 'tblPr')
        el = pr.find(W + tag) if pr is not None else None
        return float(attr(el, name)) if el is not None and attr(el, name) else default

    @staticmethod
    def shade(tc):
        pr = tc.find(W + 'tcPr')
        shd = pr.find(W + 'shd') if pr is not None else None
        fill = attr(shd, 'fill') if shd is not None else None
        return f' data-shd="{fill}"' if fill not in (None, 'auto') else ''

    def render_grid(self, tbl, index):
        """Top-level tables become a fixed CSS grid with the same column
        geometry. A real <table> cannot carry the collapse behaviour: a section
        title owns the rows below it and an entry title owns the date block in
        the next column, and neither region may straddle a <td>.
        """
        cols = self.grid_cols(tbl)
        width = self.tbl_prop(tbl, 'tblW', 'w', sum(cols)) * TWIP_PX
        indent = self.tbl_prop(tbl, 'tblInd', 'w') * TWIP_PX
        cls = f'cv-grid-{index}'
        self.geometry.append(
            f'.{cls} {{ grid-template-columns: {" ".join(f"{c:g}fr" for c in cols)};'
            f' width: {px(width)}; margin-left: {px(indent)}; }}')
        rows = []
        for tr in tbl.findall(W + 'tr'):
            tcs = tr.findall(W + 'tc')
            if len(tcs) == 1:
                items = self.items_of(tcs[0], False)
                pr = tcs[0].find(W + 'tcPr')
                gs = pr.find(W + 'gridSpan') if pr is not None else None
                span = int(attr(gs, 'val')) if gs is not None else 1
                extra = ' cv-span' if span >= len(cols) else ''
                shd = self.shade(tcs[0])
                heads = [it for it in items if it['level'] == 1]
                rest = [it for it in items if it['level'] != 1]
                if len(heads) == 1 and not any(it['text'].strip() for it in rest):
                    # A section title alone in a full-width row: its region has
                    # to be the following rows, so hand it up to the row nest.
                    trailing = ''.join(it['html'] for it in rest)
                    rows.append({
                        'level': 1, 'text': heads[0]['text'], 'kind': 'p',
                        'html': heads[0]['html'],
                        'wrap': (lambda h, e=extra, sd=shd, tr_=trailing:
                                 f'<div class="cv-cell cv-main{e}"{sd}>{h}{tr_}</div>'),
                    })
                    continue
                inner = ''.join(self.nest(items))
                rows.append({'level': 0, 'text': '', 'kind': 'p',
                             'html': f'<div class="cv-cell cv-main{extra}"{shd}>'
                                     f'{inner}</div>'})
                continue
            aside_id = self.nid('aside')
            main = ''.join(self.nest(self.items_of(tcs[0], False),
                                     extra_controls=[aside_id]))
            aside = ''.join(it['html'] for it in self.items_of(tcs[1], False))
            rows.append({'level': 0, 'text': '', 'kind': 'p', 'html': (
                f'<div class="cv-cell cv-main"{self.shade(tcs[0])}>{main}</div>'
                f'<div class="cv-cell cv-aside"{self.shade(tcs[1])}>'
                f'<div class="cv-region" id="{aside_id}">{aside}</div></div>')})
        return f'<div class="cv-grid {cls}">{"".join(self.nest(rows))}</div>'

    def render_ats(self, tbl):
        """The nested ATS keyword table stays a real <table>: each of its
        headings lives inside a single cell, so no region has to cross one."""
        cols = self.grid_cols(tbl)
        total = sum(cols) or 1
        width = self.tbl_prop(tbl, 'tblW', 'w', total) * TWIP_PX
        self.geometry.append(f'.cv-ats {{ width: {px(width)}; }}')
        for i, c in enumerate(cols):
            self.geometry.append(f'.cv-ats-col-{i} {{ width: {c / total * 100:.4f}%; }}')
        pr = tbl.find(W + 'tblPr')
        borders = pr.find(W + 'tblBorders') if pr is not None else None
        if borders is not None:
            b = borders.find(W + 'top')
            self.geometry.append(
                f'.cv-ats, .cv-ats td {{ border: {float(attr(b, "sz") or 4) / 8}pt solid'
                f' #{attr(b, "color") or "000000"}; }}')
        rows = []
        for tr in tbl.findall(W + 'tr'):
            tds = []
            for tc in tr.findall(W + 'tc'):
                pr = tc.find(W + 'tcPr')
                gs = pr.find(W + 'gridSpan') if pr is not None else None
                sp = f' colspan="{attr(gs, "val")}"' if gs is not None else ''
                tds.append(f'<td{sp}{self.shade(tc)}>'
                           f'{"".join(self.nest(self.items_of(tc, True)))}</td>')
            rows.append(f'<tr>{"".join(tds)}</tr>')
        colgroup = ''.join(f'<col class="cv-ats-col-{i}">' for i in range(len(cols)))
        return (f'<table class="cv-ats"><colgroup>{colgroup}</colgroup>'
                f'<tbody>{"".join(rows)}</tbody></table>')

    # ------------------------------------------------------------------ page
    def render_body(self):
        out, table_index = [], 0
        for ch in self.body:
            if ch.tag == W + 'p':
                markup, _ = self.render_para(ch, False)
                out.append(markup)
            elif ch.tag == W + 'tbl':
                out.append(self.render_grid(ch, table_index))
                table_index += 1
        return ''.join(out)

    # ------------------------------------------------------------------- css
    def page_geometry(self):
        sect = self.body.find(W + 'sectPr')
        sz = sect.find(W + 'pgSz') if sect is not None else None
        mar = sect.find(W + 'pgMar') if sect is not None else None
        g = {'w': 11906.0, 'h': 16838.0, 'top': 1440.0, 'bottom': 1440.0,
             'left': 1440.0, 'right': 1440.0}
        if sz is not None:
            g['w'], g['h'] = float(attr(sz, 'w')), float(attr(sz, 'h'))
        if mar is not None:
            for k in ('top', 'bottom', 'left', 'right'):
                if attr(mar, k):
                    g[k] = float(attr(mar, k))
        return g

    def doc_defaults(self):
        st = ET.fromstring(self.zip.read('word/styles.xml'))
        dd = st.find(W + 'docDefaults')
        rpr = dd.find(W + 'rPrDefault').find(W + 'rPr')
        ppr = dd.find(W + 'pPrDefault').find(W + 'pPr')
        font = attr(rpr.find(W + 'rFonts'), 'ascii') or 'Calibri'
        half = int(float(attr(rpr.find(W + 'sz'), 'val') or 22))
        self.sizes.add(half)
        self.fonts.add(slug(font))
        sp = ppr.find(W + 'spacing')
        return {'font': slug(font), 'half': half,
                'after': float(attr(sp, 'after') or 0) * TWIP_PX,
                'line': float(attr(sp, 'line') or 240) / 240}

    def font_faces(self):
        out = []
        for name, weight, style in EMBED_FACES:
            data = base64.b64encode(self.zip.read(name)).decode('ascii')
            out.append(
                "@font-face {\n"
                "  font-family: 'EB Garamond';\n"
                f"  font-weight: {weight};\n"
                f"  font-style: {style};\n"
                "  font-display: block;\n"
                f"  src: url(data:font/ttf;base64,{data}) format('truetype');\n"
                "}")
        return out

    def cell_margins(self):
        """Cell padding per table style, from word/styles.xml (dxa)."""
        st = ET.fromstring(self.zip.read('word/styles.xml'))
        out = {}
        for style in st.findall(W + 'style'):
            sid = style.get(W + 'styleId')
            pr = style.find(W + 'tblPr')
            mar = pr.find(W + 'tblCellMar') if pr is not None else None
            if mar is None:
                continue
            out[sid] = {side: float(attr(mar.find(W + side), 'w') or 0)
                        for side in ('top', 'left', 'bottom', 'right')
                        if mar.find(W + side) is not None}
        return out

    def stylesheet(self):
        g = self.page_geometry()
        dd = self.doc_defaults()
        mar = self.cell_margins()
        table1 = mar.get('Table1', mar.get('TableNormal', {}))
        table2 = mar.get('Table2', mar.get('TableNormal', {}))
        table3 = mar.get('Table3', mar.get('TableNormal', {}))

        def pad(m):
            return (f'{px(m.get("top", 0) * TWIP_PX)} {px(m.get("right", 0) * TWIP_PX)} '
                    f'{px(m.get("bottom", 0) * TWIP_PX)} {px(m.get("left", 0) * TWIP_PX)}')

        content_w = (g['w'] - g['left'] - g['right']) * TWIP_PX
        parts = []
        parts.append('/* --- embedded typefaces: the four EB Garamond faces the\n'
                     '       .docx itself carries in word/fonts/, inlined so the\n'
                     '       page needs no network --- */')
        parts += self.font_faces()

        parts.append('\n/* --- custom properties: the palette, the type scale and the\n'
                     '       page geometry, all read out of the .docx --- */')
        root = [':root {']
        for key in sorted(self.fonts):
            root.append(f'  --font-{key}: {FONT_STACKS.get(key, key)};')
        for half in sorted(self.sizes):
            root.append(f'  --fs-{half}: {half / 2:g}pt;')
        for col in sorted(self.colors):
            root.append(f'  --c-{col}: #{col};')
        root.append(f'  --rule-color: #d0cece;')
        root.append(f'  --page-width: {px(g["w"] * TWIP_PX)};')
        root.append(f'  --page-margin-top: {px(g["top"] * TWIP_PX)};')
        root.append(f'  --page-margin-bottom: {px(g["bottom"] * TWIP_PX)};')
        root.append(f'  --page-margin-x: {px(g["left"] * TWIP_PX)};')
        root.append(f'  --content-width: {px(content_w)};')
        root.append(f'  --rule-width: {px(self.rule_width)};')
        root.append('}')
        parts.append('\n'.join(root))

        parts.append('\n/* --- layout: A4 page box, the two fixed-width grids that\n'
                     '       replace the .docx tables, and the ATS table --- */')
        parts.append(f"""html {{ background: #f4f4f4; }}
body {{
  margin: 0;
  font-family: var(--font-{dd['font']});
  font-size: var(--fs-{dd['half']});
  line-height: {dd['line']:g};
  color: #000;
  -webkit-text-size-adjust: 100%;
}}
.cv-page {{
  box-sizing: border-box;
  width: var(--page-width);
  max-width: 100%;
  margin: 0 auto;
  padding: var(--page-margin-top) var(--page-margin-x) var(--page-margin-bottom);
  background: #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, .06);
}}
.cv-p {{
  margin: 0 0 {px(dd['after'])};
  /* the document indents and bullets with literal spaces and hyphens, so the
     runs of spaces have to survive */
  white-space: pre-wrap;
  overflow-wrap: break-word;
}}
.cv-blank {{ white-space: pre; }}
.cv-grid {{ display: grid; box-sizing: border-box; }}
.cv-cell {{ box-sizing: border-box; min-width: 0; }}
.cv-span {{ grid-column: 1 / -1; }}
.cv-grid-0 > .cv-cell {{ padding: {pad(table1)}; }}
.cv-grid-1 > .cv-cell {{ padding: {pad(table2)}; }}
.cv-ats td {{ padding: {pad(table3)}; vertical-align: top; }}
.cv-ats {{ border-collapse: collapse; table-layout: fixed; }}
.cv-region {{ display: contents; }}
.cv-cell .cv-region, .cv-ats .cv-region {{ display: block; }}""")

        parts.append('\n/* --- components: section rules, links, the collapse control --- */')
        parts.append("""hr.cv-rule {
  border: 0;
  border-top: .75pt solid var(--rule-color);
  width: var(--rule-width);
  margin: 0;
}
.cv-link { color: inherit; text-decoration: none; }
.cv-link:hover, .cv-link:focus-visible { text-decoration: underline; }
.cv-head { display: flex; align-items: flex-start; gap: 6px; }
.cv-head-text { flex: 1 1 auto; min-width: 0; }
/* the control is a sibling of the heading text, never a descendant of a link:
   a click on the link text can therefore never reach the toggle, and a click
   on the toggle can never reach a link */
.cv-toggle {
  flex: 0 0 auto;
  margin: 0;
  padding: 2px;
  border: 0;
  background: none;
  color: inherit;
  opacity: .35;
  cursor: pointer;
  line-height: 0;
  align-self: flex-start;
}
.cv-toggle:hover { opacity: .7; }
.cv-toggle:focus-visible { outline: 1px solid currentColor; outline-offset: 1px; opacity: .9; }
.cv-chevron { width: 10px; height: 10px; display: block; transition: transform .12s ease; }
.cv-toggle[aria-expanded="false"] .cv-chevron { transform: rotate(-90deg); }
.cv-region[hidden] { display: none; }
.cv-pagebreak { display: block; height: 0; }
[data-shd] { background-color: #fff; }""")

        parts.append('\n/* --- table geometry measured off w:tblGrid / w:tblW --- */')
        parts += sorted(set(self.geometry))

        parts.append('\n/* --- run formatting: one class per distinct w:rPr in the .docx --- */')
        parts += self.run_fmt.css()
        parts.append('\n/* --- paragraph formatting: one class per distinct w:pPr --- */')
        parts += self.para_fmt.css()

        parts.append("""
/* --- print: A4, no chrome, and every collapsed section forced open so a
       printed page always carries the whole document --- */
@page { size: A4; margin: 0; }
@media print {
  html { background: #fff; }
  .cv-page { width: auto; box-shadow: none; margin: 0; }
  .cv-toggle { display: none; }
  .cv-region[hidden] { display: contents !important; }
  .cv-cell .cv-region[hidden], .cv-ats .cv-region[hidden] { display: block !important; }
  .cv-pagebreak { break-after: page; page-break-after: always; }
  .cv-head, .cv-p { break-inside: avoid; }
  a[href]::after { content: none; }
}
@media (max-width: 820px) {
  .cv-page { padding-left: 10px; padding-right: 10px; }
  .cv-grid { width: auto !important; margin-left: 0 !important; }
  hr.cv-rule { width: 100%; }
}""")
        return '\n'.join(parts)


SCRIPT = """
/* Collapse/expand by title hierarchy.
   One delegated listener, matched on the button only. The button is a sibling
   of the heading text rather than an ancestor or descendant of it, so a click
   that lands on a heading hyperlink never reaches this handler at all; the
   stopPropagation below is belt-and-braces for the reverse direction. */
(function () {
  'use strict';

  function regionsOf(button) {
    var ids = (button.getAttribute('aria-controls') || '').split(/\\s+/);
    var out = [];
    for (var i = 0; i < ids.length; i++) {
      if (!ids[i]) continue;
      var el = document.getElementById(ids[i]);
      if (el) out.push(el);
    }
    return out;
  }

  function setExpanded(button, expanded) {
    button.setAttribute('aria-expanded', String(expanded));
    var label = button.getAttribute('data-label') || '';
    button.setAttribute('aria-label', (expanded ? 'Collapse' : 'Expand') + ' section: ' + label);
    regionsOf(button).forEach(function (region) {
      region.hidden = !expanded;
    });
  }

  document.addEventListener('click', function (event) {
    var button = event.target.closest ? event.target.closest('.cv-toggle') : null;
    if (!button) return;
    event.preventDefault();
    event.stopPropagation();
    setExpanded(button, button.getAttribute('aria-expanded') !== 'true');
  });

  /* Everything starts expanded; capture each label once so the accessible name
     can be rewritten to match the state. */
  var buttons = document.querySelectorAll('.cv-toggle');
  for (var i = 0; i < buttons.length; i++) {
    var raw = buttons[i].getAttribute('aria-label') || '';
    buttons[i].setAttribute('data-label', raw.replace(/^(Collapse|Expand) section: /, ''));
  }
}());
"""

FAVICON = (
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E"
    "%3Crect width='32' height='32' fill='%23ffffff'/%3E"
    "%3Ctext x='16' y='23' font-family='Georgia,serif' font-size='19'"
    " text-anchor='middle' fill='%231f3864'%3EDM%3C/text%3E%3C/svg%3E")


DEFAULT_DOCX = '../assets/DiegoCMarcos_CurriculumVitae_en.docx'
DEFAULT_HTML = 'DiegoCMarcos_CurriculumVitae_en.html'


def main():
    here = os.path.dirname(os.path.abspath(__file__))
    src = sys.argv[1] if len(sys.argv) > 1 else os.path.join(here, DEFAULT_DOCX)
    dest = sys.argv[2] if len(sys.argv) > 2 else os.path.join(here, DEFAULT_HTML)
    b = Builder(src)
    markup = b.render_body()
    css = b.stylesheet()
    title = ' '.join(b.headings[0][1].split()) if b.headings else 'Curriculum Vitae'
    name = 'Diego Coleho Marcos'
    description = ('Curriculum vitae of Diego Coleho Marcos - capital markets, '
                   'private equity and software engineering.')
    doc = f"""<!DOCTYPE html>
<!-- ==================================================================
     DOCUMENT HEAD
     Rendered from DiegoCMarcos_CurriculumVitae_en.docx by build-cv-html.py.
     Self-contained on purpose: no stylesheet, script, font or image is
     fetched over the network, so the file renders from the filesystem.
     ================================================================== -->
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{html.escape(name)} — Curriculum Vitae</title>
<meta name="description" content="{html.escape(description, quote=True)}">
<meta name="author" content="{html.escape(name)}">
<meta name="color-scheme" content="light">
<link rel="icon" href="{FAVICON}">

<!-- ==================================================================
     STYLE
     Custom properties (palette, type scale, page geometry) first, then
     layout, then components, then the generated per-run and per-paragraph
     classes taken straight from the .docx, then print.
     ================================================================== -->
<style>
{css}
</style>
</head>
<body>
<main class="cv-page">
{markup}
</main>

<!-- ==================================================================
     BEHAVIOUR
     The single interactive feature: collapse and expand by heading level.
     ================================================================== -->
<script>{SCRIPT}</script>
</body>
</html>
"""
    with open(dest, 'w', encoding='utf-8') as fh:
        fh.write(doc)
    print(f'headings={len(b.headings)} links={len(b.links)} '
          f'run-classes={len(b.run_fmt.order)} para-classes={len(b.para_fmt.order)} '
          f'bytes={len(doc.encode("utf-8"))}')


if __name__ == '__main__':
    main()
