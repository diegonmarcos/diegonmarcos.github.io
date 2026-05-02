#!/usr/bin/env bash

# ╔══════════════════════════════════════════════════════════════════╗
# ║                                                                  ║
# ║   GENERATED FILE — DO NOT EDIT                                   ║
# ║                                                                  ║
# ║   Source : 1_workflows/src/test/test_watcher_reap.sh
# ║   Engine : 1_workflows/src/scripts/front-ship-repo-workflow-engine.sh
# ║   Rebuild: ./1_workflows/build.sh
# ║                                                                  ║
# ║   Manual edits will be overwritten on next build.                ║
# ║                                                                  ║
# ╚══════════════════════════════════════════════════════════════════╝

# test_watcher_reap.sh — verify _engine.sh kills stale dev watchers idempotently.
#
# Why this exists: build.sh dev spawns sass/esbuild/tsc with `nohup … &`.
# nohup explicitly detaches them from SIGHUP, so when the parent terminal
# closes they survive forever. Running build.sh dev twice (or closing+reopening
# konsole between runs) leaks one extra watcher per cycle. Live evidence on
# 2026-04-28: 4 duplicate fin-terminal esbuild --watch=forever processes
# survived 2 days, burning ~10% CPU each.
#
# The fix in _engine.sh adds `_kill_existing_watcher <mode> <fingerprint>`,
# called by start_watchers() before each new spawn. This test:
#
#   PART A (static)     verify the engine wiring is in place
#   PART B (behaviour)  prove the helper actually kills matching processes,
#                       and leaves non-matching ones alone, by spawning fake
#                       processes with custom argv[0] via `exec -a`.
#
# Run: bash 1_workflows/src/test/test_watcher_reap.sh

set -u  # NB: not -e — we handle failures explicitly via fail() to keep error
        # messages clean and to ensure cleanup runs even on assertion failure.

REPO_ROOT="$(cd "$(dirname "$0")/../../.." && pwd)"
ENGINE="$REPO_ROOT/1_workflows/src/scripts/_engine.sh"

fail() { echo "FAIL: $1" >&2; cleanup_test; exit 1; }
pass() { echo "  ✓ $1"; }

# Track every PID we spawn so cleanup_test always reaps them, even if a
# test assertion fires mid-flight. This is what the engine itself should
# do for its watcher children — and what this test exists to enforce.
SPAWNED_PIDS=""
TMP_DIR=""
cleanup_test() {
    [ -n "$SPAWNED_PIDS" ] && kill -9 $SPAWNED_PIDS 2>/dev/null || true
    [ -n "$TMP_DIR" ] && rm -rf "$TMP_DIR" 2>/dev/null || true
}
trap cleanup_test EXIT INT TERM

echo "=== watcher reap (_kill_existing_watcher) ==="

# ───────────────────────────────────────────────────────────────
# PART A: STATIC — engine wiring
# ───────────────────────────────────────────────────────────────
[ -r "$ENGINE" ] || fail "_engine.sh not readable at $ENGINE"
pass "engine readable"

grep -q '^_kill_existing_watcher()' "$ENGINE" \
    || fail "_kill_existing_watcher() helper missing"
pass "helper _kill_existing_watcher() defined"

# Each watcher case (sass, esbuild, tsc) must call the reaper BEFORE the
# nohup spawn line. We grep for the helper invocation followed by the
# corresponding `nohup <mode>` spawn within the engine source.
for mode in sass esbuild tsc; do
    awk -v m="$mode" '
        $0 ~ "_kill_existing_watcher " m { saw=1 }
        saw && $0 ~ "nohup " m " "       { print "OK"; exit 0 }
    ' "$ENGINE" | grep -q OK \
        || fail "${mode} branch missing _kill_existing_watcher call before spawn"
    pass "${mode} branch reaps before spawning"
done

grep -q '^cmd_kill_orphans()' "$ENGINE" \
    || fail "cmd_kill_orphans() command missing"
pass "cmd_kill_orphans() defined"

grep -q 'kill-orphans|reap)' "$ENGINE" \
    || fail "dispatcher missing kill-orphans|reap entry"
pass "dispatcher wires kill-orphans + reap"

# ───────────────────────────────────────────────────────────────
# PART B: BEHAVIOUR — helper actually kills matching processes
# ───────────────────────────────────────────────────────────────
# Spawn pattern explanation (we ruled out two simpler approaches):
#   ✗ `exec -a esbuild sleep 60` — NixOS coreutils is a multi-call binary
#     that dispatches on argv[0] and rejects unknown applets.
#   ✗ shebang script named "esbuild" — kernel resolves the shebang first,
#     so /proc/<pid>/cmdline shows "/usr/bin/env bash <path>", not the path.
#   ✓ `exec -a /fake/path/esbuild bash -c '<wait-loop>' fake <fingerprint>`
#     — the OUTER bash is replaced by an INNER bash with argv[0] forced
#     to the fake path; the inner bash's `while sleep` loop never execs
#     anything else, so argv[0] sticks for the lifetime of the process.

TMP_DIR="$(mktemp -d -t test-watcher-reap.XXXXXX)"
fake_esbuild="$TMP_DIR/esbuild"
fake_sass="$TMP_DIR/sass"

# Spawns one fake watcher; argv[0]=$1, fingerprint=$2 visible in argv.
# Returns the spawned PID via stdout. Tracks it in SPAWNED_PIDS for cleanup.
spawn_fake() {
    local argv0="$1" fingerprint="$2"
    # Detach all stdio: the spawned bash MUST NOT inherit the parent's
    # command-substitution pipe, otherwise `pid="$(spawn_fake …)"` blocks
    # in `read` waiting for the background bash (which lives forever) to
    # close the pipe. </dev/null + redirects sever every fd that connects
    # back to the caller's pipeline.
    bash -c "exec -a '$argv0' bash -c 'trap : TERM INT HUP; while sleep 60; do :; done' fake '$fingerprint'" \
        </dev/null >/dev/null 2>&1 &
    local pid=$!
    SPAWNED_PIDS="$SPAWNED_PIDS $pid"
    echo "$pid"
}

# Use a UUID-style fingerprint that does NOT contain the test script name —
# otherwise an outer pkill (or a concurrent claude session scanning by argv)
# could nuke our fakes mid-test. UUID via /proc/sys/kernel/random/uuid.
read -r FINGERPRINT < /proc/sys/kernel/random/uuid 2>/dev/null \
    || FINGERPRINT="reap-$$-$RANDOM-$(date +%s)"
FINGERPRINT="reap-fingerprint-$FINGERPRINT"

# Verify exec -a actually rewrote argv[0] before doing real assertions.
canary="$(spawn_fake "$fake_esbuild" "$FINGERPRINT-canary")"
sleep 0.3
[ -r "/proc/$canary/cmdline" ] || fail "canary fake (pid $canary) didn't survive 0.3s"
canary_argv0="$(tr '\0' ' ' < "/proc/$canary/cmdline" | awk '{print $1}')"
case "$canary_argv0" in
    */esbuild) pass "exec -a rewrites argv[0] (got '$canary_argv0')" ;;
    *) fail "exec -a did NOT rewrite argv[0] — got '$canary_argv0', expected '*/esbuild'" ;;
esac
kill -9 "$canary" 2>/dev/null || true

# ── B.1 — helper kills all matches ────────────────────────────
fake1="$(spawn_fake "$fake_esbuild" "$FINGERPRINT")"
fake2="$(spawn_fake "$fake_esbuild" "$FINGERPRINT")"
sleep 0.3

[ -r "/proc/$fake1/cmdline" ] || fail "fake1 (pid $fake1) didn't survive spawn"
[ -r "/proc/$fake2/cmdline" ] || fail "fake2 (pid $fake2) didn't survive spawn"
pass "spawned 2 fake esbuild processes (pids $fake1 $fake2)"

# Run the helper inline rather than sourcing the engine (which would invoke
# its own main() and exit). The helper body is simple and self-contained,
# so a behavioural copy here is safe — and the static check above already
# proved the engine version exists. If the engine drifts, both must be
# updated; the static check will fail loud.
helper_body=$(awk '
    /^_kill_existing_watcher\(\) \{/   { go=1 }
    go                                 { print }
    go && /^\}/                        { exit 0 }
' "$ENGINE")
[ -n "$helper_body" ] || fail "could not extract helper body from $ENGINE"
log_step()  { :; }
log_info()  { :; }
log_error() { echo "ERR: $*" >&2; }
eval "$helper_body" || fail "helper body failed to eval"

_kill_existing_watcher esbuild "$FINGERPRINT"
sleep 0.5  # helper does TERM, sleep 0.3, KILL — give it room

if [ -r "/proc/$fake1/cmdline" ] || [ -r "/proc/$fake2/cmdline" ]; then
    fail "expected both fakes dead after reap (fake1=$fake1, fake2=$fake2)"
fi
pass "reaper killed both fakes via fingerprint match"

# ── B.2 — helper does NOT kill non-matching processes ─────────
unrelated="$(spawn_fake "$fake_esbuild" "${FINGERPRINT}-UNRELATED")"
sleep 0.3
[ -r "/proc/$unrelated/cmdline" ] || fail "unrelated fake (pid $unrelated) didn't survive"

_kill_existing_watcher esbuild "${FINGERPRINT}-NOTHING-MATCHES-THIS"
sleep 0.5

[ -r "/proc/$unrelated/cmdline" ] \
    || fail "reaper killed an unrelated esbuild process (pid $unrelated)!"
pass "reaper leaves non-matching processes alone"
kill -9 "$unrelated" 2>/dev/null || true

# ── B.3 — helper respects the mode (esbuild ≠ sass) ───────────
sass_pid="$(spawn_fake "$fake_sass" "${FINGERPRINT}-SASS")"
sleep 0.3
[ -r "/proc/$sass_pid/cmdline" ] || fail "sass fake (pid $sass_pid) didn't survive"

# Ask the reaper to kill esbuild matching our sass fingerprint. Fingerprint
# matches but mode (argv[0]=*/sass, not */esbuild) does not → no kill.
_kill_existing_watcher esbuild "${FINGERPRINT}-SASS"
sleep 0.5

[ -r "/proc/$sass_pid/cmdline" ] \
    || fail "reaper killed a sass process when asked for esbuild (pid $sass_pid)!"
pass "reaper respects the mode argument (esbuild ≠ sass)"
kill -9 "$sass_pid" 2>/dev/null || true

echo ""
echo "=== watcher reap: PASS ==="
