#!/usr/bin/env bash
# Guards: shared nav is current; every c3-* page has parseable mock JSON and no GitHub token handling.
set -euo pipefail
cd "$(dirname "$0")/.."
node scripts/gen-nav.mjs --check
node scripts/test-embed.mjs
for s in c3-mail c3-security-network c3-dns-routing c3-observability c3-mcp-apis; do
  f=$s/src/index.html
  [ -f "$f" ] && cmp -s "$f" "$s/dist/index.html" || { echo "FAIL $s src/dist"; exit 1; }
  grep -q '^var MOCK=' "$f" || { echo "FAIL $s no MOCK"; exit 1; }
  sed -n 's/^var MOCK=\(.*\);$/\1/p' "$f" | node -e 'JSON.parse(require("fs").readFileSync(0,"utf8"))' || { echo "FAIL $s MOCK json"; exit 1; }
  if grep -Eq 'ghp_|github_pat_|api\.github\.com' "$f"; then echo "FAIL $s github token/api in browser"; exit 1; fi
  grep -q 'Bearer' "$f" || { echo "FAIL $s no bearer fetch"; exit 1; }
  grep -q "^var EP=\"https://cloud-me-api.app/me/config/$s\";" "$f" || { echo "FAIL $s EP is not the mesh-only cloud-me-api dataset endpoint"; exit 1; }
done
# Service fallback pages: generated from the vendored build.json service data; one page per service, current, public-safe.
node scripts/gen-fallback.mjs --check
n=$(node -e 'console.log(require("./scripts/fallback-services.json").services.length)')
[ "$n" -gt 0 ] || { echo "FAIL no services in fallback-services.json"; exit 1; }
for slug in $(node -e 'for(const s of require("./scripts/fallback-services.json").services)console.log(s.slug)'); do
  [ -f "$slug/dist/index.html" ] && cmp -s "$slug/src/index.html" "$slug/dist/index.html" || { echo "FAIL service page $slug"; exit 1; }
  grep -q 'cwa-nav\|/cloud-webapps/nav.js' "$slug/dist/index.html" || { echo "FAIL $slug lacks the shared nav"; exit 1; }
  # no secrets or internal addresses
  if grep -Eq '([0-9]{1,3}\.){3}[0-9]{1,3}|fd0c:|ghp_|github_pat_|sk-[A-Za-z0-9]{10}|BEGIN [A-Z ]*PRIVATE|eyJ[A-Za-z0-9_-]{20}|AKIA[0-9A-Z]{12}' "$slug/dist/index.html"; then echo "FAIL $slug page carries a secret-like or address string"; exit 1; fi
  # the return URL is validated against the declared hosts (no open redirect)
  if grep -q 'data-rd' "$slug/dist/index.html"; then grep -q "H.indexOf(u.hostname)>=0" "$slug/dist/index.html" || { echo "FAIL $slug rd not validated"; exit 1; }; fi
done
echo "ok: $n service fallback pages"
# the index lists every service page
for slug in $(node -e 'for(const s of require("./scripts/fallback-services.json").services)console.log(s.slug)'); do
  grep -q "href=\"/cloud-webapps/$slug/\"" _shared/dist/index.html || { echo "FAIL index lacks service $slug"; exit 1; }
done
echo "cloud-webapps tests green"
