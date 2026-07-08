#!/usr/bin/env bash
# Derive the repo-root npm install manifest (package.json) from front-deps.json,
# the SINGLE SOURCE OF TRUTH for front-end node deps.
#
# Humans never edit the root package.json — they edit each project's own
# package.json, then `build.sh deps` merges them into front-deps.json. npm still
# needs a manifest to populate the shared repo-root node_modules, so this script
# projects front-deps.json.node.merged.{dependencies,devDependencies} into a
# gitignored root package.json artifact. front-deps.json in, package.json out.
#
# Usage: front-gen-root-pkg.sh [repo_root]   (defaults to git toplevel)
set -euo pipefail

root="${1:-$(git rev-parse --show-toplevel)}"
fd="$root/front-deps.json"
[ -f "$fd" ] || { echo "front-gen-root-pkg: $fd not found — run 'build.sh deps' first" >&2; exit 1; }
nodever="$(tr -d '[:space:]' < "$root/.node-version" 2>/dev/null || echo 20)"

node -e '
const fs = require("fs");
const [fdPath, nodeVer, outPath] = process.argv.slice(1);
const fd = JSON.parse(fs.readFileSync(fdPath, "utf8"));
const merged = (fd.node && fd.node.merged) || {};
const root = {
  name: "front-monorepo",
  private: true,
  description: "GENERATED from front-deps.json (single source of deps) — do not edit; run build.sh deps",
  engines: { node: ">=" + (nodeVer || "20") },
  dependencies: merged.dependencies || {},
  devDependencies: merged.devDependencies || {},
};
fs.writeFileSync(outPath, JSON.stringify(root, null, 2) + "\n");
const n = Object.keys(root.dependencies).length + Object.keys(root.devDependencies).length;
console.log("root package.json: " + n + " packages from front-deps.json");
' "$fd" "$nodever" "$root/package.json"
