#!/usr/bin/env python3
"""Parse an Instagram HTML data export -> mySocials instagram.json (data-driven).
Usage: extract_ig.py <export_dir> <out_json>
Includes ALL activity except DMs. Excludes raw email/phone (never shown in a feed).
Embeds the single post photo as a data URI.
"""
import re, html, json, sys, base64, os

EXPORT, OUT = sys.argv[1], sys.argv[2]
ACT = f'{EXPORT}/your_instagram_activity'

def lines_of(path):
    if not os.path.exists(path): return []
    t = open(path, encoding='utf-8').read()
    body = t.split('</style>')[-1]
    txt = html.unescape(re.sub(r'<[^>]+>', '\n', body))
    return [l.strip() for l in txt.splitlines() if l.strip()]

# ---- profile ----
lines = lines_of(f'{EXPORT}/personal_information/personal_information/personal_information.html')
def field(label, stop):
    if label not in lines: return ''
    i = lines.index(label) + 1; out = []
    while i < len(lines) and lines[i] not in stop:
        out.append(lines[i]); i += 1
    return ' '.join(out).strip().strip('"')
username = field('Nombre de usuario', {'Nombre'})
name     = field('Nombre', {'Presentación', 'Género', 'Correo electrónico'})
bio      = re.sub(r'(^|\s)_(\s|$)', ' · ', field('Presentación', {'Género', 'Sitio web', 'Fecha de nacimiento'})).strip(' ·')

# ---- connections (full handle lists) ----
def uniq(seq):
    seen, out = set(), []
    for x in seq:
        if x not in seen: seen.add(x); out.append(x)
    return out
def find_handles(path, pat):
    if not os.path.exists(path): return []
    return uniq(re.findall(pat, open(path, encoding='utf-8').read()))
following = find_handles(f'{EXPORT}/connections/followers_and_following/following.html', r'instagram\.com/_u/([A-Za-z0-9_.]+)')
followers = [h for h in find_handles(f'{EXPORT}/connections/followers_and_following/followers_1.html', r'instagram\.com/([A-Za-z0-9_.]+)"') if h != '_u']

# ---- liked / saved posts: [{url, caption}] ----
def url_caption(path):
    ls = lines_of(path); out = []; url = cap = None; expect = None
    for l in ls:
        if l == 'URL': expect = 'url'; continue
        if l in ('Pie de foto', 'Caption'): expect = 'cap'; continue
        if expect == 'url':
            if l.startswith('http'):
                if url: out.append({'url': url, 'caption': cap or ''})
                url, cap = l, None
            expect = None
        elif expect == 'cap':
            cap = l; expect = None
    if url: out.append({'url': url, 'caption': cap or ''})
    return out
liked = url_caption(f'{ACT}/likes/liked_posts.html')
saved = url_caption(f'{ACT}/saved/saved_posts.html')

# ---- comments you made: [{text, time, owner}] ----
def comments(path):
    ls = lines_of(path); out = []; cur = {}; expect = None
    for l in ls:
        if l == 'Comment':
            if cur.get('text'): out.append(cur)
            cur = {}; expect = 'text'; continue
        if l == 'Media Owner': expect = 'owner'; continue
        if l == 'Time': expect = 'time'; continue
        if expect:
            cur[expect] = l; expect = None
    if cur.get('text'): out.append(cur)
    return out
my_comments = comments(f'{ACT}/comments/post_comments_1.html')

# ---- story likes: [{handle, name}] ----
def story_likes(path):
    ls = lines_of(path); out = []; name = None; expect = None
    for l in ls:
        if l == 'Nombre': expect = 'name'; continue
        if l == 'Nombre de usuario': expect = 'handle'; continue
        if expect == 'name': name = l; expect = None
        elif expect == 'handle': out.append({'handle': l, 'name': name or l}); name = None; expect = None
    return out
liked_stories = story_likes(f'{ACT}/story_interactions/story_likes.html')

# ---- the single post photo -> data URI ----
posts = []
img = f'{EXPORT}/media/posts/17853618261134821.jpg'
if os.path.exists(img):
    posts.append({'media': 'data:image/jpeg;base64,' + base64.b64encode(open(img, 'rb').read()).decode(),
                  'caption': '', 'time': 'Jul 2026'})

data = {
    '_description': 'Instagram export (diegonmarcos), parsed by extract_ig.py. All activity except DMs. Email/phone excluded.',
    'profile': {'username': username, 'name': name, 'bio': bio,
                'following': len(following), 'followers': len(followers), 'posts': len(posts)},
    'posts': posts,
    'following': following,
    'followers': followers,
    'liked': liked,
    'saved': saved,
    'comments': my_comments,
    'liked_stories': liked_stories,
}
json.dump(data, open(OUT, 'w'), ensure_ascii=False, indent=2)
print(f'name={name!r} user={username!r}')
print(f'bio={bio[:70]!r}')
print(f'following={len(following)} followers={len(followers)} posts={len(posts)}')
print(f'liked={len(liked)} saved={len(saved)} comments={len(my_comments)} liked_stories={len(liked_stories)}')
print(f'out size = {os.path.getsize(OUT)//1024} KB')
