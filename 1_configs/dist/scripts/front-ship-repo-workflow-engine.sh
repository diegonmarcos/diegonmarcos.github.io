#!/usr/bin/env bash

# ╔══════════════════════════════════════════════════════════════════╗
# ║                                                                  ║
# ║   GENERATED FILE — DO NOT EDIT                                   ║
# ║                                                                  ║
# ║   Source : 1_configs/src/gha/scripts/front-ship-repo-workflow-engine.sh
# ║   Engine : 1_configs/src/gha/scripts/front-ship-repo-workflow-engine.sh
# ║   Rebuild: ./1_configs/build.sh
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

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
SRC_DIR="$SCRIPT_DIR/src"
DIST_DIR="$SCRIPT_DIR/dist"
TARGET_DIR="$REPO_ROOT/.github/workflows"
SCRIPTS_TARGET="$TARGET_DIR/scripts"
HOOKS_TARGET="$TARGET_DIR/hooks"

# Shared lib: stamps every dist/ artifact with the GENERATED-FILE banner.
# Template + prefix map live in $SRC_DIR/lib/generated-header.json.
export REPO_ROOT
export ENGINE_NAME="1_configs/src/gha/scripts/front-ship-repo-workflow-engine.sh"
# shellcheck source=../../lib/inject-header.sh
. "$SRC_DIR/lib/inject-header.sh"

log() { printf "[%s] %s\n" "$(date '+%H:%M:%S')" "$1"; }

do_build() {
    # Clean dist/ first so deletions in src/ propagate (otherwise orphaned
    # scripts/hooks linger forever, including broken symlinks).
    rm -rf "$DIST_DIR"
    mkdir -p "$DIST_DIR" "$DIST_DIR/scripts" "$DIST_DIR/hooks" "$DIST_DIR/test"

    # Static workflows (src/cicd/*.yml → dist/)
    # A glob that matches nothing is silent in sh: the loop never runs, deploy
    # copies zero files, and the already-deployed .github/ copies sit there
    # looking healthy. That is how cloud rendered 0 workflows for a week
    # after its cicd/ moved (2026-08-10). Fail loudly instead.
    if ! ls "$SRC_DIR"/gha/cicd/*.yml >/dev/null 2>&1; then
        echo "FATAL: no workflows found at $SRC_DIR/gha/cicd/*.yml" >&2
        exit 1
    fi
    for f in "$SRC_DIR"/gha/cicd/*.yml; do
        [ -f "$f" ] || continue
        inject_header "$f" "$DIST_DIR/$(basename "$f")"
    done
    log "Built $(ls "$DIST_DIR"/*.yml 2>/dev/null | wc -l) workflow(s)"

    # Scripts (src/scripts/ → dist/scripts/)
    if [ -d "$SRC_DIR/gha/scripts" ]; then
        inject_header_tree "$SRC_DIR/gha/scripts" "$DIST_DIR/scripts"
        log "Built scripts"
    fi

    # Hooks (src/hooks/ → dist/hooks/)
    if [ -d "$SRC_DIR/git/hooks" ]; then
        inject_header_tree "$SRC_DIR/git/hooks" "$DIST_DIR/hooks"
        log "Built hooks"
    fi

    # Tests (src/test/ → dist/test/) — preflight testers invoked by ship-ci-image.yml
    if [ -d "$SRC_DIR/test" ]; then
        inject_header_tree "$SRC_DIR/test" "$DIST_DIR/test"
        log "Built tests"
    fi

    # Templates (src/templates/ → dist/templates/) — markup/code snippets
    # consumed by engine modules at build time (e.g. mod_sw_register
    # injects sw-register-snippet.html into project HTMLs).
    if [ -d "$SRC_DIR/templates" ]; then
        inject_header_tree "$SRC_DIR/templates" "$DIST_DIR/templates"
        log "Built templates"
    fi

    # Gitmodules (src/modules/gitmodules → dist/.gitmodules)
    if [ -f "$SRC_DIR/git/gitmodules" ]; then
        inject_header "$SRC_DIR/git/gitmodules" "$DIST_DIR/.gitmodules"
        log "Built gitmodules"
    fi

    # Gitignore (src/gitignore → dist/.gitignore)
    if [ -f "$SRC_DIR/git/gitignore" ]; then
        inject_header "$SRC_DIR/git/gitignore" "$DIST_DIR/.gitignore"
        log "Built gitignore"
    fi

    # Gitattributes (src/gitattributes → dist/.gitattributes)
    if [ -f "$SRC_DIR/git/gitattributes" ]; then
        inject_header "$SRC_DIR/git/gitattributes" "$DIST_DIR/.gitattributes"
        log "Built gitattributes"
    fi

    # Gitconfig (src/gitconfig → dist/)
    if [ -f "$SRC_DIR/git/gitconfig" ]; then
        inject_header "$SRC_DIR/git/gitconfig" "$DIST_DIR/gitconfig"
        log "Built gitconfig"
    fi

    # GHA actions (src/actions/ → dist/actions/)
    if [ -d "$SRC_DIR/gha/actions" ]; then
        inject_header_tree "$SRC_DIR/gha/actions" "$DIST_DIR/actions"
        log "Built actions"
    fi

    # GHA flake (src/flake.nix, src/flake.lock → dist/)
    # flake.lock is in skip_basenames (inject-header.sh) → copied verbatim.
    if [ -f "$SRC_DIR/flake.nix" ]; then
        inject_header "$SRC_DIR/flake.nix" "$DIST_DIR/flake.nix"
        log "Built flake.nix"
    fi
    if [ -f "$SRC_DIR/flake.lock" ]; then
        inject_header "$SRC_DIR/flake.lock" "$DIST_DIR/flake.lock"
        log "Built flake.lock"
    fi
}

do_deploy() {
    mkdir -p "$TARGET_DIR" "$SCRIPTS_TARGET" "$HOOKS_TARGET"

    # Workflows
    for f in "$DIST_DIR"/*.yml; do
        [ -f "$f" ] || continue
        cp "$f" "$TARGET_DIR/"
    done
    log "Deployed $(ls "$DIST_DIR"/*.yml 2>/dev/null | wc -l) workflow(s) → .github/workflows/"

    # Remove workflows whose source is gone. Deploy was copy-only, so a
    # workflow deleted from src/ stayed in .github/ forever — and GitHub keeps
    # RUNNING it on schedule.
    _orphans=0
    for f in "$TARGET_DIR"/*.yml; do
        [ -f "$f" ] || continue
        [ -f "$DIST_DIR/$(basename "$f")" ] && continue
        log "Removing orphan workflow $(basename "$f") — no source in src/gha/cicd/"
        rm -f "$f"
        _orphans=$((_orphans+1))
    done
    [ "$_orphans" -gt 0 ] && log "Removed $_orphans orphan workflow(s)"

    # Scripts
    if [ -d "$DIST_DIR/scripts" ]; then
        cp -r "$DIST_DIR/scripts/"* "$SCRIPTS_TARGET/" 2>/dev/null || true
        chmod +x "$SCRIPTS_TARGET/"*.sh 2>/dev/null || true
        log "Deployed scripts"
    fi

    # Hooks
    if [ -d "$DIST_DIR/hooks" ]; then
        cp -r "$DIST_DIR/hooks/"* "$HOOKS_TARGET/" 2>/dev/null || true
        chmod +x "$HOOKS_TARGET/"*.sh 2>/dev/null || true
        log "Deployed hooks"
    fi

    # GHA actions (dist/actions/ → .github/actions/)
    if [ -d "$DIST_DIR/actions" ]; then
        mkdir -p "$REPO_ROOT/.github/actions"
        cp -r "$DIST_DIR/actions/"* "$REPO_ROOT/.github/actions/" 2>/dev/null || true
        log "Deployed actions → .github/actions/"
    fi

    # GHA flake (dist/flake.{nix,lock} → .github/)
    for f in flake.nix flake.lock; do
        if [ -f "$DIST_DIR/$f" ]; then
            cp "$DIST_DIR/$f" "$REPO_ROOT/.github/$f"
            log "Deployed $f → .github/"
        fi
    done

    # Repo-root configs (.gitmodules etc)
    for f in "$DIST_DIR"/.git*; do
        [ -f "$f" ] || continue
        cp "$f" "$REPO_ROOT/"
        log "Deployed $(basename "$f") → repo root"
    done

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
    if [ -f "$DIST_DIR/gitconfig" ]; then
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
        done < "$DIST_DIR/gitconfig"
        unset _gc_section _gc_key
        git -C "$REPO_ROOT" config --local include.path ../1_configs/dist/gitconfig 2>/dev/null || true
        log "Deployed gitconfig (included in .git/config)"
    fi

    log "Done"
}

# ── dotfiles ────────────────────────────────────────────────────────────────
# src/apps/<tool>/ → dist/dotfiles/<tool>/ → <repo>/<target>/
# Same module every repo under cloud carries. Never purge-then-copy: .claude/
# and .obsidian/ mix managed config with per-machine state.
do_dotfiles() {
    [ -d "$SRC_DIR/apps" ] || { log "no src/apps — skipping dotfiles"; return 0; }
    sh "$SRC_DIR/lib/deploy-dotfiles.sh" "$SRC_DIR/apps" "$DIST_DIR/dotfiles" "$REPO_ROOT"
}

case "${1:-all}" in
    build)    do_build ;;
    deploy)   do_deploy ;;
    dotfiles) do_dotfiles ;;
    all|"")   do_build; do_deploy; do_dotfiles ;;
    *)        echo "Usage: $0 [build|deploy|dotfiles|all]" ;;
esac
