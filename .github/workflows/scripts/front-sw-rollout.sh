#!/usr/bin/env bash

# ╔══════════════════════════════════════════════════════════════════╗
# ║                                                                  ║
# ║   GENERATED FILE — DO NOT EDIT                                   ║
# ║                                                                  ║
# ║   Source : 1_workflows/src/scripts/front-sw-rollout.sh
# ║   Engine : 1_workflows/src/scripts/front-ship-repo-workflow-engine.sh
# ║   Rebuild: ./1_workflows/build.sh
# ║                                                                  ║
# ║   Manual edits will be overwritten on next build.                ║
# ║                                                                  ║
# ╚══════════════════════════════════════════════════════════════════╝

# ──────────────────────────────────────────────────────────────────────
# front-sw-rollout.sh
#
# One-shot rollout of the SW-hashing system to every front project.
# Iterates every <category>/<project>/build.json under the front repo
# and, for each project that's eligible, runs the bootstrap → patch →
# verify → record cycle.
#
# Eligibility (skip rules):
#   • framework is `vite` or `sveltekit`         — bundler owns the build,
#                                                  needs follow-up modules.
#   • build array already contains `esbuild_sw`  — idempotent, leave alone.
#
# For each eligible project:
#   1. Build the project once so dist/ is populated (front-sw-init.sh's
#      glob expansion looks at dist/ to enumerate copied html/css files).
#   2. Copy the template SW source via `front-sw-init.sh --copy-template`.
#   3. Capture the suggested esbuild_sw block via `front-sw-init.sh --suggest`.
#   4. Patch build.json — append the block to the `build` array, write
#      back with 2-space indent (using node, same as the engine reads).
#   5. Re-build to verify the new step succeeds.
#   6. Record OK / SKIP / FAIL with a one-line reason.
#
# A summary table is printed at the end. Manual follow-up needed per
# project: register the SW from the page entry-point JS — this script
# does NOT modify HTML/JS, only build.json + the SW source.
#
# Usage:
#   front-sw-rollout.sh                         # all categories
#   front-sw-rollout.sh a-Portals b-Profiles    # specific categories
#   front-sw-rollout.sh --dry-run               # report eligibility, no changes
#
# Exit codes:
#   0 — every eligible project succeeded (or all were skipped)
#   1 — at least one project failed
#   2 — bad usage / repo missing
# ──────────────────────────────────────────────────────────────────────
set -uo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/../../.." && pwd)"
INIT_SCRIPT="$REPO_ROOT/1_workflows/dist/scripts/front-sw-init.sh"
[ -x "$INIT_SCRIPT" ] || INIT_SCRIPT="$REPO_ROOT/1_workflows/src/scripts/front-sw-init.sh"
[ -x "$INIT_SCRIPT" ] || { echo "✗ front-sw-init.sh not found / not executable" >&2; exit 2; }

DRY_RUN=0
if [ "${1:-}" = "--dry-run" ]; then
    DRY_RUN=1; shift
fi

# Default category list — every top-level dir that holds projects today.
# `1_workflows` and `_*` are tooling / hidden, not projects.
if [ "$#" -eq 0 ]; then
    set -- a-Portals b-Profiles c-Suite c-MyTools c-LabTools d-Cloud e-Others e-Root z_Archive
fi

ok_count=0
skip_count=0
fail_count=0
report=""

# Append a row to the report. $1=status $2=path $3=reason
record() {
    case "$1" in
        OK)   ok_count=$((ok_count + 1)) ;;
        SKIP) skip_count=$((skip_count + 1)) ;;
        FAIL) fail_count=$((fail_count + 1)) ;;
    esac
    # Pad status to 4 chars so the column lines up.
    report="$report$(printf '%-4s  %s — %s' "$1" "$2" "$3")
"
}

# Patch build.json: append the suggested block to the `build` array,
# preserve everything else verbatim, write back with 2-space indent.
# Returns 0 on success, non-zero on parse/write failure.
patch_build_json() {
    local project="$1"
    local block_json="$2"
    BJ="$project/build.json" BLOCK="$block_json" node -e '
const fs = require("fs");
const cfg = JSON.parse(fs.readFileSync(process.env.BJ, "utf8"));
const block = JSON.parse(process.env.BLOCK);
cfg.build = cfg.build || [];
cfg.build.push(block);
fs.writeFileSync(process.env.BJ, JSON.stringify(cfg, null, 2) + "\n");
'
}

is_eligible() {
    local bjson="$1"
    BJ="$bjson" node -e '
const fs = require("fs");
const cfg = JSON.parse(fs.readFileSync(process.env.BJ, "utf8"));
const build = cfg.build || [];
// Skip projects that delegate the bundle to vite or sveltekit — those
// own the build pipeline end-to-end. Detect via the build steps (`mod`),
// not the `framework` field which is informational only (Vue projects
// often declare framework=vue but actually use mod=vite).
const owners = build.map(s => s.mod).filter(m => m === "vite" || m === "sveltekit");
if (owners.length) {
  console.log("SKIP:bundler-owned=" + owners.join(","));
  process.exit(0);
}
if (build.some(s => s.mod === "esbuild_sw")) {
  console.log("SKIP:already-has-esbuild_sw");
  process.exit(0);
}
console.log("OK");
'
}

process_project() {
    local project="$1"
    local rel="${project#$REPO_ROOT/}"

    local elig
    elig="$(is_eligible "$project/build.json" 2>/dev/null)" || {
        record FAIL "$rel" "build.json parse error"
        return
    }
    case "$elig" in
        SKIP:*) record SKIP "$rel" "${elig#SKIP:}"; return ;;
        OK)     ;;
        *)      record FAIL "$rel" "unexpected eligibility: $elig"; return ;;
    esac

    if [ $DRY_RUN -eq 1 ]; then
        record OK "$rel" "(dry-run) eligible"
        return
    fi

    # 1. Build once so dist/ is populated.
    if ! ( cd "$project" && ./build.sh build >/tmp/sw-rollout.log 2>&1 ); then
        record FAIL "$rel" "initial build failed (see /tmp/sw-rollout.log)"
        return
    fi

    # 2. Copy template SW source (idempotent).
    if ! "$INIT_SCRIPT" --copy-template "$project" >/dev/null 2>&1; then
        record FAIL "$rel" "template copy failed"
        return
    fi

    # 3. Get suggested esbuild_sw block. Suggester exit 3 = no hashable
    # assets (refuses to suggest a broken block) → record as SKIP.
    local block
    block="$("$INIT_SCRIPT" --suggest "$project" 2>/dev/null)"
    local sug_rc=$?
    if [ $sug_rc -eq 3 ]; then
        record SKIP "$rel" "no hashable assets in dist/"
        return
    fi
    if [ -z "$block" ] || ! printf '%s' "$block" | head -c1 | grep -q '{'; then
        record FAIL "$rel" "suggester produced no block (rc=$sug_rc)"
        return
    fi

    # 4. Patch build.json.
    if ! patch_build_json "$project" "$block"; then
        record FAIL "$rel" "build.json patch failed"
        return
    fi

    # 5. Re-build to verify the new step works.
    if ! ( cd "$project" && ./build.sh build >/tmp/sw-rollout.log 2>&1 ); then
        record FAIL "$rel" "post-patch build failed (see /tmp/sw-rollout.log)"
        return
    fi

    # 6. Confirm the SW bundle was actually produced.
    if [ ! -f "$project/dist/script-service-worker.js" ]; then
        record FAIL "$rel" "no dist/script-service-worker.js after rebuild"
        return
    fi

    record OK "$rel" "patched + built"
}

# ─── Main loop ─────────────────────────────────────────────────
echo "=== SW-hashing rollout ==="
[ $DRY_RUN -eq 1 ] && echo "(dry-run mode — no changes will be made)"
echo

for category in "$@"; do
    cat_dir="$REPO_ROOT/$category"
    [ -d "$cat_dir" ] || { echo "⚠  category not found: $category"; continue; }

    for project in "$cat_dir"/*/; do
        [ -d "$project" ] || continue
        project="${project%/}"
        [ -f "$project/build.json" ] || continue
        process_project "$project"
    done
done

# ─── Summary ───────────────────────────────────────────────────
echo "─── Per-project ───"
printf '%s' "$report" | sort
echo "─── Totals ───"
printf 'OK=%d  SKIP=%d  FAIL=%d\n' "$ok_count" "$skip_count" "$fail_count"

[ "$fail_count" -gt 0 ] && exit 1
exit 0
