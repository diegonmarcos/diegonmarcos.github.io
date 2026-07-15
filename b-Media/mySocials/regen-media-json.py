#!/usr/bin/env python3
"""Regenerate mySocials instagram.json media refs from the CDN asset folder.

Source of truth = the image files present under front-assets-cdn (the "fake CDN",
served via jsDelivr). Re-run this after adding more media (e.g. the full stories
batch pulled on wifi) — it rebuilds each section's array from whatever files exist
and rewrites `media` to the jsDelivr URL. Captions/times are carried over from the
previous json where a media-ID still matches (the scrape itself is media-only).

Data-driven: sections + paths below; no per-file hardcoding.
"""
import json
import os
import glob

REPO = "diegonmarcos/front-assets-cdn"
PROJECT = "b-Media/mySocials"
CDN_BASE = f"https://cdn.jsdelivr.net/gh/{REPO}@main/{PROJECT}/static/media"
CDN_DIR = os.path.expanduser(f"~/git/front-assets-cdn/{PROJECT}/static/media")
JSON_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "src/data/instagram.json")

IMG_EXT = {"jpg", "jpeg", "png", "webp"}          # rendered via <img>
SECTIONS = ["posts", "stories", "other"]           # rebuilt only if the folder exists


def mid(path):
    return os.path.basename(path).rsplit(".", 1)[0]


def rebuild(section, data):
    old_by_id = {
        mid(p["media"]): p
        for p in data.get(section, [])
        if isinstance(p, dict) and p.get("media")
    }
    out = []
    for f in sorted(glob.glob(f"{CDN_DIR}/{section}/*")):
        if not os.path.isfile(f):
            continue
        ext = os.path.basename(f).rsplit(".", 1)[-1].lower()
        if ext not in IMG_EXT:
            continue  # skip video (no <img> render + no thumbnail in scrape)
        url = f"{CDN_BASE}/{section}/{os.path.basename(f)}"
        prev = old_by_id.get(mid(f), {})
        out.append({
            "media": url,
            "media_all": [url],
            "caption": prev.get("caption", ""),
            "time": prev.get("time", ""),
        })
    return out


def main():
    with open(JSON_PATH, encoding="utf-8") as fh:
        data = json.load(fh)

    changed = []
    rebuilt = []
    for sec in SECTIONS:
        if os.path.isdir(f"{CDN_DIR}/{sec}"):
            data[sec] = rebuild(sec, data)
            changed.append(f"{sec}={len(data[sec])}")
            rebuilt.append(sec)

    if "profile" in data and isinstance(data["profile"], dict):
        data["profile"]["posts"] = len(data.get("posts", []))

    with open(JSON_PATH, "w", encoding="utf-8") as fh:
        json.dump(data, fh, ensure_ascii=False, indent=1)

    print("regenerated:", ", ".join(changed) or "(no CDN folders found)")
    # self-check: every rebuilt media ref must be a jsDelivr URL for an existing file
    # (only sections we actually rebuilt — untouched sections keep their old refs)
    for sec in rebuilt:
        for p in data.get(sec, []):
            assert p["media"].startswith(CDN_BASE), f"bad url in {sec}: {p['media']}"
            local = p["media"].replace(CDN_BASE, CDN_DIR)
            assert os.path.isfile(local), f"missing file for {sec}: {local}"
    print("self-check OK: all media refs map to existing CDN files")


if __name__ == "__main__":
    main()
