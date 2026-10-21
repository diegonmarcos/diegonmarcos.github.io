#!/usr/bin/env bash
# Guards: shared nav is current; every c3-* page has parseable mock JSON and no GitHub token handling.
set -euo pipefail
cd "$(dirname "$0")/.."
node scripts/gen-nav.mjs --check
for s in c3-mail c3-security-network c3-dns-routing c3-observability c3-mcp-apis; do
  f=$s/src/index.html
  [ -f "$f" ] && cmp -s "$f" "$s/dist/index.html" || { echo "FAIL $s src/dist"; exit 1; }
  grep -q '^var MOCK=' "$f" || { echo "FAIL $s no MOCK"; exit 1; }
  sed -n 's/^var MOCK=\(.*\);$/\1/p' "$f" | node -e 'JSON.parse(require("fs").readFileSync(0,"utf8"))' || { echo "FAIL $s MOCK json"; exit 1; }
  if grep -Eq 'ghp_|github_pat_|api\.github\.com' "$f"; then echo "FAIL $s github token/api in browser"; exit 1; fi
  grep -q 'Bearer' "$f" || { echo "FAIL $s no bearer fetch"; exit 1; }
done
echo "cloud-webapps tests green"
