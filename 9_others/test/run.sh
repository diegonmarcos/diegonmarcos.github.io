#!/usr/bin/env bash
# Discover + run test_*.sh files in this directory. Reports pass/fail
# per file, exits non-zero if any test failed. Used locally and by the
# `ship.yml` GitHub Actions workflow as a preflight gate.
#
# Usage:
#   run.sh                           # run every test_*.sh
#   run.sh test_front_cache_hash     # run one test
#   run.sh "test_front_*" "test_engine_sw_*"
#                                    # run matching globs (CI uses this
#                                    # to skip the flaky watcher test)
set -u

TEST_DIR="$(cd "$(dirname "$0")" && pwd)"
total=0
passed=0
failed=0
failed_names=""

# Build the file list. With no args: every test_*.sh. With args: each arg
# is treated as a glob expanded under TEST_DIR.
if [ "$#" -eq 0 ]; then
    files="$TEST_DIR"/test_*.sh
else
    files=""
    for pattern in "$@"; do
        # Strip a trailing .sh if the caller supplied one.
        case "$pattern" in *.sh) pattern="${pattern%.sh}" ;; esac
        # shellcheck disable=SC2206  # intentional glob expansion
        matches=( "$TEST_DIR"/$pattern.sh )
        for m in "${matches[@]}"; do
            [ -f "$m" ] && files="$files $m"
        done
    done
fi

echo "=== front engine tests ==="

# shellcheck disable=SC2086  # word-split is intentional for the file list
for t in $files; do
    [ -f "$t" ] || continue
    name="$(basename "$t" .sh)"
    total=$((total + 1))
    printf '─── %s ───\n' "$name"
    if bash "$t"; then
        passed=$((passed + 1))
        printf '✓ %s\n\n' "$name"
    else
        failed=$((failed + 1))
        failed_names="$failed_names $name"
        printf '✗ %s\n\n' "$name"
    fi
done

echo "─────────────────────────"
printf 'total=%d  passed=%d  failed=%d\n' "$total" "$passed" "$failed"

if [ "$failed" -gt 0 ]; then
    printf 'FAILED:%s\n' "$failed_names"
    exit 1
fi
