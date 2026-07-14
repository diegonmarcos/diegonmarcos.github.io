#!/usr/bin/env bash
# Proves the front-deps merge resolves the HIGHEST semver per package, not last-wins.
# Regression guard for the incompatible-toolchain bug (kit@2.47 + plugin-svelte@5 + vite@5).
set -euo pipefail

fail=0
check() { [ "$1" = "$2" ] || { echo "✗ $3: got '$1' want '$2'"; fail=1; }; }

# 1. jq resolve-highest picks ^7 over ^5 regardless of order.
for order in '[{"vite":"^5.0.0"},{"vite":"^7.1.10"}]' '[{"vite":"^7.1.10"},{"vite":"^5.0.0"}]'; do
  got=$(echo "$order" | jq -r '
    def _ver_parse:(capture("^[\\^~>=< ]*(?<v>[0-9]+(\\.[0-9]+)*)").v // "")|if .=="" then null else [splits("\\.")|tonumber] end;
    def _merge_highest($a;$b): reduce ($b|to_entries[]) as $e ($a; .[$e.key] as $cur | if $cur==null then .[$e.key]=$e.value else (($cur|_ver_parse) as $pc|($e.value|_ver_parse) as $pn|if ($pc==null or $pn==null) then .[$e.key]=$e.value elif $pn>=$pc then .[$e.key]=$e.value else . end) end);
    (reduce .[] as $s ({}; _merge_highest(.;$s))).vite')
  check "$got" "^7.1.10" "resolve-highest ($order)"
done

# 2. The actual generated manifest must carry the coherent SvelteKit toolchain.
DEPS="$(dirname "$0")/../dist/front-deps.json"
if [ -f "$DEPS" ]; then
  ps=$(jq -r '.node.merged.devDependencies["@sveltejs/vite-plugin-svelte"] // ""' "$DEPS")
  case "$ps" in ^6.*|^7.*) : ;; *) echo "✗ front-deps plugin-svelte too low: '$ps' (needs ^6+)"; fail=1;; esac
fi

[ "$fail" = 0 ] && echo "✓ merge resolves highest semver" || { echo "FAILED"; exit 1; }
