#!/bin/bash

# Migration Script
# Migrates existing project to standard folder structure

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_info() {
    echo -e "${BLUE}ℹ ${NC}$1"
}

print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_header() {
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo -e "${GREEN}$1${NC}"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
}

# Function to safely move folder
safe_move() {
    local source="$1"
    local target="$2"

    if [ -d "$source" ] || [ -f "$source" ]; then
        if [ -d "$target" ] || [ -f "$target" ]; then
            print_warning "Target exists: $target (skipping move from $source)"
            return 1
        else
            mv "$source" "$target"
            print_success "Moved: $source → $target"
            return 0
        fi
    else
        return 1
    fi
}

# Function to create directory
create_dir() {
    local dir="$1"
    if [ ! -d "$dir" ]; then
        mkdir -p "$dir"
        print_success "Created: $dir"
    else
        print_info "Already exists: $dir"
    fi
}

# Main function
main() {
    local project_dir="${1:-.}"

    print_header "PROJECT STRUCTURE MIGRATION"

    print_info "Migrating project: $project_dir"
    echo ""

    # Navigate to project directory
    cd "$project_dir" || exit 1

    # Check if git repo
    if [ -d ".git" ]; then
        print_success "Git repository detected"
    else
        print_warning "Not a git repository - proceed with caution"
        read -p "Continue anyway? (y/N) " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            print_info "Migration cancelled"
            exit 0
        fi
    fi

    # Step 1: Backup
    print_header "Step 1: Creating Backup"

    if [ -d ".git" ]; then
        git add . 2>/dev/null || true
        if git diff --cached --quiet; then
            print_info "No changes to commit"
        else
            git commit -m "Backup before structure migration" || print_warning "Could not create backup commit"
        fi
    fi

    # Step 2: Create new folders
    print_header "Step 2: Creating Standard Folders"

    create_dir "0.spec"
    create_dir "0.spec/archive"
    create_dir "1.ops"
    create_dir "1.ops/analytics"
    create_dir "1.ops/logs"
    create_dir "1.ops/CI"

    # Check project type
    if [ -d "src" ] || [ -f "vite.config.ts" ] || [ -f "svelte.config.js" ]; then
        print_info "Framework project detected (Vue/Svelte)"
    else
        print_info "Static project detected"
        create_dir "src_static"
        create_dir "src_static/scss"
        create_dir "src_static/typescript"
    fi

    # Step 3: Move existing folders
    print_header "Step 3: Moving Existing Folders"

    print_info "Moving spec folders..."
    safe_move "spec" "0.spec" || true
    safe_move "a_spec" "0.spec" || true
    if [ -d "0.spec" ] && [ ! -d "0.spec.old" ]; then
        safe_move "0.spec" "0.spec.old" && mv "0.spec.old/"* "0.spec/" 2>/dev/null || true
    fi

    echo ""
    print_info "Moving ops folders..."
    safe_move "ops" "1.ops" || true
    safe_move "b_ops" "1.ops" || true
    if [ -d "1.ops" ] && [ ! -d "1.ops.old" ]; then
        safe_move "1.ops" "1.ops.old" && mv "1.ops.old/"* "1.ops/" 2>/dev/null || true
    fi

    echo ""
    print_info "Moving source folders..."
    safe_move "2.src" "src" || true

    echo ""
    print_info "Moving static source folders..."
    safe_move "3.sass" "src_static/scss" || true
    safe_move "4.ts" "src_static/typescript" || true

    echo ""
    print_info "Moving analytics..."
    safe_move "5.analytics" "1.ops/analytics" || true
    safe_move "analytics" "1.ops/analytics" || true

    echo ""
    print_info "Moving assets..."
    safe_move "2.assets" "public" || true
    safe_move "c_assets" "public" || true
    safe_move "assets" "public" || true

    # Step 4: Create .gitkeep files
    print_header "Step 4: Creating .gitkeep Files"

    for dir in "0.spec/archive" "1.ops/analytics" "1.ops/logs" "1.ops/CI"; do
        if [ -d "$dir" ] && [ -z "$(ls -A $dir 2>/dev/null)" ]; then
            touch "$dir/.gitkeep"
            print_success "Created .gitkeep in: $dir"
        fi
    done

    # Step 5: Create documentation templates
    print_header "Step 5: Creating Documentation Templates"

    # Create spec.md if it doesn't exist
    if [ ! -f "0.spec/spec.md" ]; then
        cat > "0.spec/spec.md" << 'EOF'
# Project Specification

## Stack
- Framework: [Vue/Svelte/Static]
- Build Tool: [Vite/SvelteKit/Custom]
- Language: TypeScript
- Styling: [Tailwind/SCSS]

## Quick Start
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Project Structure
See `../PROJECT_STRUCTURE.md` for details.
EOF
        print_success "Created: 0.spec/spec.md"
    else
        print_info "Already exists: 0.spec/spec.md"
    fi

    # Create spec-ops.md if it doesn't exist
    if [ ! -f "1.ops/spec-ops.md" ]; then
        cat > "1.ops/spec-ops.md" << 'EOF'
# Operations Specification

## Build Process

### Development
```bash
npm run dev
```

### Production
```bash
npm run build
```

## Deployment

### Manual Deployment
```bash
./1.ops/build.sh deploy
```

### CI/CD Pipeline
See `CI/deploy.yml` for GitHub Actions configuration.

## Environment Variables
- `NODE_ENV`: Environment (development/production)
- `VITE_*`: Vite environment variables

## Troubleshooting

### Build Fails
1. Check Node version: `node --version`
2. Clean install: `rm -rf node_modules && npm install`
3. Check logs: `1.ops/logs/`

### Symlinks Not Working
```bash
git config core.symlinks true
```

## Maintenance
- **Weekly**: Review logs
- **Monthly**: Update dependencies
- **Quarterly**: Review and update documentation
EOF
        print_success "Created: 1.ops/spec-ops.md"
    else
        print_info "Already exists: 1.ops/spec-ops.md"
    fi

    # Step 6: Create symlinks
    print_header "Step 6: Creating Symlinks"

    if [ -f "1.ops/create-symlinks.sh" ]; then
        print_info "Running create-symlinks.sh..."
        bash "1.ops/create-symlinks.sh" .
    elif [ -f "../1.ops/create-symlinks.sh" ]; then
        print_info "Running ../1.ops/create-symlinks.sh..."
        bash "../1.ops/create-symlinks.sh" .
    else
        print_warning "create-symlinks.sh not found, creating symlinks manually..."

        cd "1.ops/CI" || exit 1

        # Create common symlinks
        [ -f "../../package.json" ] && ln -sf "../../package.json" "package.json"
        [ -f "../../package-lock.json" ] && ln -sf "../../package-lock.json" "package-lock.json"
        [ -f "../../tsconfig.json" ] && ln -sf "../../tsconfig.json" "tsconfig.json"
        [ -f "../../vite.config.ts" ] && ln -sf "../../vite.config.ts" "vite.config.ts"
        [ -f "../../tailwind.config.js" ] && ln -sf "../../tailwind.config.js" "tailwind.config.js"
        [ -f "../../build.js" ] && ln -sf "../../build.js" "build.js"
        [ -f "../../.github/workflows/deploy.yml" ] && ln -sf "../../.github/workflows/deploy.yml" "deploy.yml"

        cd ../..
        print_success "Symlinks created"
    fi

    # Step 7: Update .gitignore
    print_header "Step 7: Updating .gitignore"

    if [ -f ".gitignore" ]; then
        print_info "Checking .gitignore..."

        # Add standard ignores if not present
        grep -q "1.ops/logs/\*.log" .gitignore 2>/dev/null || echo -e "\n# Ops logs\n1.ops/logs/*.log" >> .gitignore

        print_success "Updated .gitignore"
    else
        print_warning "No .gitignore found"
    fi

    # Final summary
    print_header "MIGRATION COMPLETE"

    echo "Next steps:"
    echo ""
    echo "1. Review moved folders:"
    echo "   ls -la 0.spec/ 1.ops/"
    echo ""
    echo "2. Update documentation:"
    echo "   - Edit 0.spec/spec.md"
    echo "   - Edit 1.ops/spec-ops.md"
    echo ""
    echo "3. Update import paths if source folders moved:"
    echo "   find src -type f -name '*.ts' -o -name '*.vue' | xargs sed -i 's|old-path|new-path|g'"
    echo ""
    echo "4. Test build:"
    echo "   npm run dev"
    echo "   npm run build"
    echo ""
    echo "5. Commit changes:"
    echo "   git add ."
    echo "   git commit -m 'Migrate to standard folder structure'"
    echo ""

    print_success "Migration script completed successfully!"
}

# Show usage if -h or --help
if [ "$1" = "-h" ] || [ "$1" = "--help" ]; then
    cat << EOF
Usage: $0 [PROJECT_DIRECTORY]

Migrates an existing project to the standard folder structure.

Arguments:
  PROJECT_DIRECTORY    Path to project (default: current directory)

Options:
  -h, --help          Show this help message

Example:
  $0                  # Migrate current project
  $0 ../nexus         # Migrate nexus project

What this script does:
  1. Creates backup commit (if git repo)
  2. Creates standard folders (0.spec/, 1.ops/, etc.)
  3. Moves existing folders to standard locations
  4. Creates documentation templates
  5. Creates symlinks in 1.ops/CI/
  6. Updates .gitignore

Note: Always review changes before committing!
EOF
    exit 0
fi

# Run main function
main "$@"
