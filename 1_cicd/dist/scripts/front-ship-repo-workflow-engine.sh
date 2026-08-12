#!/usr/bin/env bash

# ╔══════════════════════════════════════════════════════════════════╗
# ║                                                                  ║
# ║   GENERATED FILE — DO NOT EDIT                                   ║
# ║                                                                  ║
# ║   Source : 1_cicd/src/scripts/front-ship-repo-workflow-engine.sh
# ║   Engine : 1_cicd/src/scripts/front-ship-repo-workflow-engine.sh
# ║   Rebuild: ./9_others/build.sh
# ║                                                                  ║
# ║   Manual edits will be overwritten on next build.                ║
# ║                                                                  ║
# ╚══════════════════════════════════════════════════════════════════╝

# ╔══════════════════════════════════════════════════════════════════╗
# ║ Workflow engine: build (src→dist) + deploy (dist→.github/)       ║
# ║                                                                  ║
# ║ Usage: ./build.sh              # build + deploy (default)        ║
# ║        ./build.sh build        # src → dist only                 ║
# ║        ./build.sh deploy       # dist → .github/ + repo root    ║
# ╚══════════════════════════════════════════════════════════════════╝
set -e
chmod +x "$0"

# Prefer termux coreutils over nix binaries (nix cp/tail fail with libpthread on Android).
export PATH="/data/data/com.termux.nix/files/usr/bin:$PATH"

# Repo root by upward search for .git, NOT by counting ../ from $0. This engine
# is reached through a symlink (9_others/build.sh) whose real path sits three
# levels down in 1_cicd/src/scripts/, so any fixed ../ count is right for one of
# the two ways it gets invoked and silently one level off for the other.
REPO_ROOT="${FRONT_ROOT:-$(_d="$(cd "$(dirname "$0")" && pwd)"; while [ "$_d" != "/" ] && [ ! -e "$_d/.git" ]; do _d="$(dirname "$_d")"; done; printf '%s' "$_d")}"

# Config tiers. Each owns its own dist/, so a source and its compiled form sit
# together. The single flat 1_configs/dist/ this replaced held gitconfig,
# workflow YAML and dotfiles in one directory, which is why core.hooksPath had
# to be identical fleet-wide for the same gitconfig to work anywhere.
GIT_SRC="$REPO_ROOT/0_git/src";     GIT_DIST="$REPO_ROOT/0_git/dist"
APPS_SRC="$REPO_ROOT/0_apps/src";   APPS_DIST="$REPO_ROOT/0_apps/dist"
CICD_SRC="$REPO_ROOT/1_cicd/src";   CICD_DIST="$REPO_ROOT/1_cicd/dist"
LIB_SRC="$REPO_ROOT/9_others/src";  LIB_DIST="$REPO_ROOT/9_others/dist"

TARGET_DIR="$REPO_ROOT/.github/workflows"
SCRIPTS_TARGET="$TARGET_DIR/scripts"
HOOKS_TARGET="$TARGET_DIR/hooks"

# Shared lib: stamps every dist/ artifact with the GENERATED-FILE banner.
# Template + prefix map live in $LIB_SRC/generated-header.json.
export REPO_ROOT
export ENGINE_NAME="1_cicd/src/scripts/front-ship-repo-workflow-engine.sh"
# shellcheck source=../../../../9_others/src/inject-header.sh
. "$LIB_SRC/inject-header.sh"

log() { printf "[%s] %s\n" "$(date '+%H:%M:%S')" "$1"; }

do_build() {
    # Clean each tier's dist/ first so deletions in src/ propagate (otherwise
    # orphaned scripts/hooks linger forever, including broken symlinks).
    rm -rf "$CICD_DIST" "$GIT_DIST" "$LIB_DIST"
    mkdir -p "$CICD_DIST" "$CICD_DIST/scripts" "$GIT_DIST/hooks" "$LIB_DIST/test"

    # Static workflows (1_cicd/src/cicd/*.yml → 1_cicd/dist/)
    # A glob that matches nothing is silent in sh: the loop never runs, deploy
    # copies zero files, and the already-deployed .github/ copies sit there
    # looking healthy. That is how cloud rendered 0 workflows for a week
    # after its cicd/ moved (2026-08-10). Fail loudly instead.
    if ! ls "$CICD_SRC"/cicd/*.yml >/dev/null 2>&1; then
        echo "FATAL: no workflows found at $CICD_SRC/cicd/*.yml" >&2
        exit 1
    fi
    for f in "$CICD_SRC"/cicd/*.yml; do
        [ -f "$f" ] || continue
        inject_header "$f" "$CICD_DIST/$(basename "$f")"
    done
    log "Built $(ls "$CICD_DIST"/*.yml 2>/dev/null | wc -l) workflow(s)"

    # Scripts (1_cicd/src/scripts/ → 1_cicd/dist/scripts/)
    if [ -d "$CICD_SRC/scripts" ]; then
        inject_header_tree "$CICD_SRC/scripts" "$CICD_DIST/scripts"
        log "Built scripts"
    fi

    # Hooks (0_git/src/hooks/ → 0_git/dist/hooks/) — the git tier, because
    # core.hooksPath points there and nothing else may move it.
    if [ -d "$GIT_SRC/hooks" ]; then
        inject_header_tree "$GIT_SRC/hooks" "$GIT_DIST/hooks"
        log "Built hooks"
    fi

    # Tests (9_others/test/ → 9_others/dist/test/) — preflight testers invoked
    # by ship-ci-image.yml
    if [ -d "$REPO_ROOT/9_others/test" ]; then
        inject_header_tree "$REPO_ROOT/9_others/test" "$LIB_DIST/test"
        log "Built tests"
    fi

    # Templates (9_others/src/templates/ → 9_others/dist/templates/) —
    # markup/code snippets consumed by engine modules at build time (e.g.
    # mod_sw_register injects sw-register-snippet.html into project HTMLs).
    if [ -d "$LIB_SRC/templates" ]; then
        inject_header_tree "$LIB_SRC/templates" "$LIB_DIST/templates"
        log "Built templates"
    fi

    # The four git files land in the git tier's dist. Note gitconfig alone is
    # written WITHOUT a leading dot: it is not a root dotfile — that filename is
    # user-level and means nothing at a repo root — it is consumed through
    # `include.path` in .git/config.
    if [ -f "$GIT_SRC/gitmodules" ]; then
        inject_header "$GIT_SRC/gitmodules" "$GIT_DIST/.gitmodules"
        log "Built gitmodules"
    fi
    if [ -f "$GIT_SRC/gitignore" ]; then
        inject_header "$GIT_SRC/gitignore" "$GIT_DIST/.gitignore"
        log "Built gitignore"
    fi
    if [ -f "$GIT_SRC/gitattributes" ]; then
        inject_header "$GIT_SRC/gitattributes" "$GIT_DIST/.gitattributes"
        log "Built gitattributes"
    fi
    if [ -f "$GIT_SRC/gitconfig" ]; then
        inject_header "$GIT_SRC/gitconfig" "$GIT_DIST/gitconfig"
        log "Built gitconfig"
    fi

    # LICENSE is copied VERBATIM — no generated banner. GitHub's licence
    # detector and SPDX scanners match on the text, and a banner breaks them.
    if [ -f "$GIT_SRC/LICENSE" ]; then
        cp -f "$GIT_SRC/LICENSE" "$GIT_DIST/LICENSE"
        log "Built LICENSE (verbatim)"
    fi

    # GHA actions (1_cicd/src/actions/ → 1_cicd/dist/actions/)
    if [ -d "$CICD_SRC/actions" ]; then
        inject_header_tree "$CICD_SRC/actions" "$CICD_DIST/actions"
        log "Built actions"
    fi

    # GHA flake (1_cicd/src/flake.{nix,lock} → 1_cicd/dist/)
    # flake.lock is in skip_basenames (inject-header.sh) → copied verbatim.
    if [ -f "$CICD_SRC/flake.nix" ]; then
        inject_header "$CICD_SRC/flake.nix" "$CICD_DIST/flake.nix"
        log "Built flake.nix"
    fi
    if [ -f "$CICD_SRC/flake.lock" ]; then
        inject_header "$CICD_SRC/flake.lock" "$CICD_DIST/flake.lock"
        log "Built flake.lock"
    fi
}

do_deploy() {
    mkdir -p "$TARGET_DIR" "$SCRIPTS_TARGET" "$HOOKS_TARGET"

    # Workflows
    for f in "$CICD_DIST"/*.yml; do
        [ -f "$f" ] || continue
        cp "$f" "$TARGET_DIR/"
    done
    log "Deployed $(ls "$CICD_DIST"/*.yml 2>/dev/null | wc -l) workflow(s) → .github/workflows/"

    # Remove workflows whose source is gone. Deploy was copy-only, so a
    # workflow deleted from src/ stayed in .github/ forever — and GitHub keeps
    # RUNNING it on schedule.
    _orphans=0
    for f in "$TARGET_DIR"/*.yml; do
        [ -f "$f" ] || continue
        [ -f "$CICD_DIST/$(basename "$f")" ] && continue
        log "Removing orphan workflow $(basename "$f") — no source in src/gha/cicd/"
        rm -f "$f"
        _orphans=$((_orphans+1))
    done
    [ "$_orphans" -gt 0 ] && log "Removed $_orphans orphan workflow(s)"

    # Scripts
    if [ -d "$CICD_DIST/scripts" ]; then
        cp -r "$CICD_DIST/scripts/"* "$SCRIPTS_TARGET/" 2>/dev/null || true
        chmod +x "$SCRIPTS_TARGET/"*.sh 2>/dev/null || true
        log "Deployed scripts"
    fi

    # Hooks
    if [ -d "$GIT_DIST/hooks" ]; then
        cp -r "$GIT_DIST/hooks/"* "$HOOKS_TARGET/" 2>/dev/null || true
        chmod +x "$HOOKS_TARGET/"*.sh 2>/dev/null || true
        log "Deployed hooks"
    fi

    # GHA actions (dist/actions/ → .github/actions/)
    if [ -d "$CICD_DIST/actions" ]; then
        mkdir -p "$REPO_ROOT/.github/actions"
        cp -r "$CICD_DIST/actions/"* "$REPO_ROOT/.github/actions/" 2>/dev/null || true
        log "Deployed actions → .github/actions/"
    fi

    # GHA flake (dist/flake.{nix,lock} → .github/)
    for f in flake.nix flake.lock; do
        if [ -f "$CICD_DIST/$f" ]; then
            cp "$CICD_DIST/$f" "$REPO_ROOT/.github/$f"
            log "Deployed $f → .github/"
        fi
    done

    # Repo-root configs (.gitmodules etc). gitconfig is deliberately NOT here:
    # the glob is .git* and gitconfig has no dot, because it is included from
    # .git/config rather than read out of the working tree.
    for f in "$GIT_DIST"/.git*; do
        [ -f "$f" ] || continue
        cp "$f" "$REPO_ROOT/"
        log "Deployed $(basename "$f") → repo root"
    done

    # LICENSE is a git-tier file like the rest, so it is generated from
    # 0_git/src rather than hand-edited at the root.
    if [ -f "$GIT_DIST/LICENSE" ]; then
        cp -f "$GIT_DIST/LICENSE" "$REPO_ROOT/LICENSE"
        log "Deployed LICENSE → repo root"
    fi

    # Submodules are READ-ONLY to this engine. Registering a submodule (`git
    # submodule add`) stages a gitlink (160000) into the index — committing
    # submodule pins from the parent is forbidden. So we NEVER add/register and
    # NEVER stage submodule paths. We only check out already-registered ones
    # (no index change), and as a safety net we unstage any submodule gitlink
    # that some other step may have staged.
    if [ -f "$REPO_ROOT/.gitmodules" ]; then
        # Report registration status (read-only); skip anything not registered.
        git -C "$REPO_ROOT" config --file .gitmodules --get-regexp 'submodule\..*\.path' 2>/dev/null | while read -r key path; do
            name=$(echo "$key" | sed 's/^submodule\.\(.*\)\.path$/\1/')
            if git -C "$REPO_ROOT" ls-files --stage "$path" 2>/dev/null | grep -q '^160000'; then
                log "submodule '$name' registered (read-only)"
            else
                log "submodule '$name' NOT registered — skipping (register manually; the engine never stages submodules)"
            fi
        done
        # Checkout already-registered submodules only — does not add/stage.
        git -C "$REPO_ROOT" submodule sync 2>/dev/null || true
        git -C "$REPO_ROOT" submodule update --init 2>&1 | while IFS= read -r line; do
            log "submodule: $line"
        done
        # Safety net: unstage any submodule gitlink that ended up staged.
        git -C "$REPO_ROOT" config --file .gitmodules --get-regexp 'submodule\..*\.path' 2>/dev/null | while read -r key path; do
            if git -C "$REPO_ROOT" diff --cached --name-only -- "$path" 2>/dev/null | grep -q .; then
                git -C "$REPO_ROOT" reset -q HEAD -- "$path" 2>/dev/null || true
                log "unstaged submodule gitlink '$path' (read-only guard)"
            fi
        done
        log "Synced submodules (read-only)"
    fi

    # Gitconfig → include in .git/config
    # Reconcile: unset any local keys owned by dist/gitconfig so they cannot
    # shadow the declared config (last-wins makes post-include entries win).
    if [ -f "$GIT_DIST/gitconfig" ]; then
        _gc_section=""
        while IFS= read -r line; do
            case "$line" in
                \[*\])
                    _gc_section=$(printf '%s' "$line" | sed 's/^\[\([^]]*\)\]$/\1/' | tr '[:upper:]' '[:lower:]')
                    ;;
                *=*)
                    [ -z "$_gc_section" ] && continue
                    _gc_key=$(printf '%s' "$line" | sed -n 's/^[[:space:]]*\([a-zA-Z][a-zA-Z0-9]*\)[[:space:]]*=.*/\1/p' | tr '[:upper:]' '[:lower:]')
                    [ -n "$_gc_key" ] && git -C "$REPO_ROOT" config --local --unset "${_gc_section}.${_gc_key}" 2>/dev/null || true
                    ;;
            esac
        done < "$GIT_DIST/gitconfig"
        unset _gc_section _gc_key
        git -C "$REPO_ROOT" config --local include.path ../0_git/dist/gitconfig 2>/dev/null || true
        log "Deployed gitconfig (included in .git/config)"
    fi

    log "Done"
}

# ── dotfiles ────────────────────────────────────────────────────────────────
# src/apps/<tool>/ → dist/dotfiles/<tool>/ → <repo>/<target>/
# Same module every repo under cloud carries. Never purge-then-copy: .claude/
# and .obsidian/ mix managed config with per-machine state.
do_dotfiles() {
    [ -d "$APPS_SRC" ] || { log "no 0_apps/src — skipping dotfiles"; return 0; }
    sh "$LIB_SRC/deploy-dotfiles.sh" "$APPS_SRC" "$APPS_DIST/dotfiles" "$REPO_ROOT"
}

case "${1:-all}" in
    build)    do_build ;;
    deploy)   do_deploy ;;
    dotfiles) do_dotfiles ;;
    all|"")   do_build; do_deploy; do_dotfiles ;;
    *)        echo "Usage: $0 [build|deploy|dotfiles|all]" ;;
esac
