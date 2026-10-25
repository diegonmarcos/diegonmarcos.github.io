#!/usr/bin/env bash
# test_profiles_privacy.sh - Profile Health and DD hold special-category data and this site is PUBLIC.
# b_Profiles/mySocials may ship their page and their SCHEMA (labels only: src/data/profile-<id>.json) and nothing else.
# The owner's values live in the private repo cloud-me-data-pvt (profiles/<id>.data.json) and reach the page only
# through the Cloud Me app bridge after sign-in.
#
# Red when, anywhere in the tree: a *.data.json / *.data.json.js values file or a profiles-data folder appears;
# under b_Profiles/mySocials: a health/dd/medical/kyc file named data|values|record|dossier, a profile schema
# (src/data/profile-*.json, dist data-profile-*.json.js) carrying a value/values/status/expires key, or a
# health.html / dd.html that inlines values. It plants each violation in a scratch copy first and requires RED,
# then checks the real tree (which already holds the overlaid front repos when CI runs it).
set -u
REPO_ROOT="${PROFILES_PRIVACY_ROOT:-$(cd "$(dirname "$0")/../.." && pwd)}"

check() { python3 - "$1" <<'PY'
import json, os, re, sys
root = sys.argv[1]
bad = []
NAME = re.compile(r"(^|[-_.])(health|dd|medical|kyc)([-_.].*)?(data|values|record|dossier)[^/]*\.json(\.js)?$", re.I)
SKIP = (".git", "node_modules", "build", ".gradle", "_site")
def walk_keys(o, n):
    if isinstance(o, dict):
        for k, v in o.items():
            if k in ("value", "values", "status", "expires"): bad.append(f"{n}: schema carries a '{k}' key")
            walk_keys(v, n)
    elif isinstance(o, list):
        for v in o: walk_keys(v, n)
for d, dirs, names in os.walk(root):
    dirs[:] = [x for x in dirs if x not in SKIP]
    rel_d = os.path.relpath(d, root)
    for n in names:
        rel = os.path.normpath(os.path.join(rel_d, n))
        if n.endswith(".data.json") or n.endswith(".data.json.js"): bad.append(f"values file in the public site: {rel}")
        if "profiles-data" in rel.split(os.sep): bad.append(f"private profiles-data folder in the public site: {rel}")
        if rel.startswith("b_Profiles" + os.sep + "mySocials" + os.sep):
            if NAME.search(n): bad.append(f"health/dd values-like file: {rel}")
            if re.match(r"(data-)?profile-[a-z]+\.json(\.js)?$", n):
                txt = open(os.path.join(d, n), encoding="utf-8").read()
                if n.endswith(".js"):
                    txt = txt[txt.index("] = ") + 4: txt.rindex(";\n})();")]
                try: walk_keys(json.loads(txt), rel)
                except Exception as e: bad.append(f"{rel}: unreadable schema ({e.__class__.__name__})")
            if n in ("health.html", "dd.html"):
                if re.search(r"<script(?![^>]*\bsrc=)[^>]*>[^<]", open(os.path.join(d, n), encoding="utf-8").read(), re.I):
                    bad.append(f"{rel}: inline script may carry values (only src= scripts allowed)")
for b in sorted(bad): print("FAIL:", b)
sys.exit(1 if bad else 0)
PY
}

fails=0
T="$(mktemp -d)"; trap 'rm -rf "$T"' EXIT
plant() { # name, shell snippet run in a scratch copy of the mySocials tree
  rm -rf "$T/c"; mkdir -p "$T/c/b_Profiles"; cp -r "$REPO_ROOT/b_Profiles/mySocials" "$T/c/b_Profiles/mySocials"
  (cd "$T/c" && eval "$2")
  if check "$T/c" >/dev/null; then echo "  FAIL: guard stayed green for: $1"; fails=$((fails+1)); else echo "  PASS: red for: $1"; fi
}
if [ -d "$REPO_ROOT/b_Profiles/mySocials" ]; then
  plant "a health values file" 'echo "{}" > b_Profiles/mySocials/src/data/health.data.json'
  plant "a dd values file in the tree" 'echo "{}" > dd.data.json'
  plant "a wrapped values file" 'echo "x" > b_Profiles/mySocials/dist/data-health.data.json.js'
  plant "a value inside a schema" 'sed -i "0,/\"label\"/s//\"value\": \"x\", \"label\"/" b_Profiles/mySocials/src/data/profile-health.json'
  plant "a status inside the built schema" 'sed -i "0,/\"label\"/s//\"status\": \"verified\", \"label\"/" b_Profiles/mySocials/dist/data-profile-dd.json.js'
  plant "an inline script in the health page" 'sed -i "s#</body>#<script>var v={x:1}</script></body>#" b_Profiles/mySocials/dist/health.html'
  if check "$REPO_ROOT"; then echo "  PASS: no Health/DD values in this public site"; else echo "  FAIL: see above"; fails=$((fails+1)); fi
else
  echo "  SKIP: b_Profiles/mySocials not present"
fi
echo "profiles privacy: $fails failure(s)"
exit $((fails>0))
