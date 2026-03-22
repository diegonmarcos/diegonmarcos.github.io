#!/bin/bash

# Create New Project Script
# Creates a new project with standard folder structure

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
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
    echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${GREEN}$1${NC}"
    echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo ""
}

# Function to create directory
create_dir() {
    local dir="$1"
    mkdir -p "$dir"
    print_success "Created: $dir"
}

# Function to create file
create_file() {
    local file="$1"
    local content="$2"

    echo "$content" > "$file"
    print_success "Created: $file"
}

# Main function
main() {
    local project_name="${1}"
    local project_type="${2:-vue}" # vue, svelte, or static

    # Validate project name
    if [ -z "$project_name" ]; then
        print_error "Project name is required"
        echo "Usage: $0 PROJECT_NAME [TYPE]"
        echo "TYPE: vue, svelte, or static (default: vue)"
        exit 1
    fi

    # Validate project type
    if [[ ! "$project_type" =~ ^(vue|svelte|static)$ ]]; then
        print_error "Invalid project type: $project_type"
        echo "Valid types: vue, svelte, static"
        exit 1
    fi

    print_header "CREATING NEW PROJECT: $project_name"
    print_info "Type: $project_type"
    echo ""

    # Check if directory already exists
    if [ -d "$project_name" ]; then
        print_error "Directory already exists: $project_name"
        exit 1
    fi

    # Create project directory
    create_dir "$project_name"
    cd "$project_name"

    # Step 1: Create folder structure
    print_header "Step 1: Creating Folder Structure"

    create_dir "0.spec"
    create_dir "0.spec/archive"
    create_dir "1.ops"
    create_dir "1.ops/analytics"
    create_dir "1.ops/logs"
    create_dir "1.ops/CI"
    create_dir "public"

    if [ "$project_type" = "static" ]; then
        create_dir "src_static"
        create_dir "src_static/scss"
        create_dir "src_static/typescript"
    else
        create_dir "src"
        create_dir "src/components"
        create_dir "src/views"
        create_dir "src/stores"
        create_dir "src/utils"
        create_dir "src/types"
        create_dir "src/styles"
    fi

    # Step 2: Create .gitkeep files
    print_header "Step 2: Creating .gitkeep Files"

    touch "0.spec/archive/.gitkeep"
    touch "1.ops/analytics/.gitkeep"
    touch "1.ops/logs/.gitkeep"
    touch "1.ops/CI/.gitkeep"
    touch "public/.gitkeep"

    print_success "Created .gitkeep files"

    # Step 3: Create documentation
    print_header "Step 3: Creating Documentation"

    # spec.md
    cat > "0.spec/spec.md" << EOF
# $project_name

## Stack
- Framework: $([ "$project_type" = "vue" ] && echo "Vue 3" || [ "$project_type" = "svelte" ] && echo "SvelteKit" || echo "Static HTML/CSS/JS")
- Build Tool: $([ "$project_type" = "static" ] && echo "Custom" || echo "Vite")
- Language: TypeScript
- Styling: Tailwind CSS

## Quick Start

### Installation
\`\`\`bash
npm install
\`\`\`

### Development
\`\`\`bash
npm run dev
\`\`\`

### Build
\`\`\`bash
npm run build
\`\`\`

## Project Structure
See \`../PROJECT_STRUCTURE.md\` for detailed folder structure documentation.

## Features
- [Add feature 1]
- [Add feature 2]
- [Add feature 3]

## Documentation
- Full specification: \`spec-kit.md\`
- Operations guide: \`../1.ops/spec-ops.md\`

---

Created: $(date +%Y-%m-%d)
EOF
    print_success "Created: 0.spec/spec.md"

    # spec-kit.md template
    cat > "0.spec/spec-kit.md" << EOF
# $project_name - Full Specification

## 1. Overview
Brief project description.

## 2. Architecture

### Tech Stack
- **Frontend**: $([ "$project_type" = "vue" ] && echo "Vue 3 + TypeScript" || [ "$project_type" = "svelte" ] && echo "SvelteKit + TypeScript" || echo "HTML/CSS/TypeScript")
- **Build**: $([ "$project_type" = "static" ] && echo "Custom build" || echo "Vite")
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages

### Folder Structure
\`\`\`
$([ "$project_type" = "static" ] && echo "src_static/" || echo "src/")
├── $([ "$project_type" = "static" ] && echo "scss/" || echo "components/")
└── $([ "$project_type" = "static" ] && echo "typescript/" || echo "views/")
\`\`\`

## 3. Components
[Document main components]

## 4. Data Models
[Document data structures]

## 5. API / Services
[Document API endpoints or services]

## 6. State Management
$([ "$project_type" = "vue" ] && echo "Pinia stores" || [ "$project_type" = "svelte" ] && echo "Svelte stores" || echo "Not applicable")

## 7. Routing
$([ "$project_type" = "static" ] && echo "Not applicable" || echo "Vue Router / SvelteKit routing")

## 8. Build & Deployment

### Development
\`\`\`bash
npm run dev
\`\`\`

### Production Build
\`\`\`bash
npm run build
\`\`\`

### Output
- \`dist/index.html\` - Regular build
- \`dist/index_spa.html\` - Standalone SPA

## 9. Environment Variables
\`\`\`
VITE_API_URL=https://api.example.com
\`\`\`

## 10. Testing
[Document testing approach]

## 11. Performance
[Document performance considerations]

## 12. Accessibility
[Document accessibility features]

---

Last Updated: $(date +%Y-%m-%d)
Version: 1.0
EOF
    print_success "Created: 0.spec/spec-kit.md"

    # spec-ops.md
    cat > "1.ops/spec-ops.md" << EOF
# Operations Specification - $project_name

## Build Process

### Development Mode
\`\`\`bash
npm run dev
# or
./1.ops/build.sh dev
\`\`\`

Runs development server with hot reload.

### Watch Mode
\`\`\`bash
./1.ops/build.sh watch
\`\`\`

Watches files and rebuilds on changes.

### Test Mode
\`\`\`bash
./1.ops/build.sh test
\`\`\`

Runs tests and generates coverage.

### Production Build
\`\`\`bash
npm run build
# or
./1.ops/build.sh deploy
\`\`\`

Creates optimized production build in \`dist/\`:
- \`index.html\` - Regular multi-file build
- \`index_spa.html\` - Standalone SPA (all assets inlined)

## Deployment

### GitHub Pages
Automatic deployment via GitHub Actions when pushing to \`main\` branch.

### Manual Deployment
\`\`\`bash
npm run build
# Upload dist/ folder to hosting
\`\`\`

## CI/CD Pipeline

See \`CI/deploy.yml\` for GitHub Actions configuration.

### Workflow Steps
1. Checkout code
2. Install dependencies
3. Run build
4. Deploy to GitHub Pages

## Environment Variables

### Development
\`\`\`bash
VITE_API_URL=http://localhost:3000
\`\`\`

### Production
\`\`\`bash
VITE_API_URL=https://api.production.com
\`\`\`

## Analytics

Analytics scripts are in \`analytics/\` folder.

### Google Tag Manager
Configuration: \`analytics/gtm-config.json\`

### Matomo
Script: \`analytics/matomo.js\`

## Logs

Build and deployment logs are stored in \`logs/\`:
- \`build-YYYY-MM-DD.log\`
- \`deploy-YYYY-MM-DD.log\`
- \`error.log\`

## Troubleshooting

### Build Fails
1. Check Node version: \`node --version\` (should be 18+)
2. Clean install: \`rm -rf node_modules && npm install\`
3. Check logs in \`1.ops/logs/\`

### Symlinks Not Working
\`\`\`bash
git config core.symlinks true
./1.ops/create-symlinks.sh
\`\`\`

### Development Server Won't Start
1. Check port availability: \`lsof -i :3000\`
2. Kill existing process: \`killall node\`
3. Try different port: \`PORT=3001 npm run dev\`

## Maintenance

### Weekly
- Review logs in \`1.ops/logs/\`
- Check for security updates: \`npm audit\`

### Monthly
- Update dependencies: \`npm update\`
- Clean old logs
- Review analytics

### Quarterly
- Update documentation
- Review and archive old specs
- Performance audit

---

Last Updated: $(date +%Y-%m-%d)
EOF
    print_success "Created: 1.ops/spec-ops.md"

    # Step 4: Create package.json
    print_header "Step 4: Creating package.json"

    cat > "package.json" << EOF
{
  "name": "$project_name",
  "version": "1.0.0",
  "description": "Description for $project_name",
  "type": "module",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "$([ "$project_type" = "vue" ] && echo "vue-tsc && node build.js" || echo "vite build")",
    "preview": "vite preview"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^6.0.0",
    "typescript": "^5.9.0",
    "vite": "^7.0.0",
    "vue-tsc": "^2.0.0"
  },
  "dependencies": {
    "vue": "^3.5.0"
  }
}
EOF
    print_success "Created: package.json"

    # Step 5: Create .gitignore
    print_header "Step 5: Creating .gitignore"

    cat > ".gitignore" << 'EOF'
# Dependencies
node_modules/

# Build output
dist/
build/
.svelte-kit/

# Development
.vite/
.cache/

# Environment
.env
.env.local
.env.*.local

# Logs
*.log
npm-debug.log*
1.ops/logs/*.log

# OS
.DS_Store
Thumbs.db
.AppleDouble
.LSOverride

# IDE
.vscode/
.idea/
*.swp
*.swo
*.sublime-*

# Testing
coverage/
.nyc_output/

# Temporary
temp/
tmp/
*.tmp

# Source maps (optional)
*.map
EOF
    print_success "Created: .gitignore"

    # Step 6: Create README.md
    print_header "Step 6: Creating README.md"

    cat > "README.md" << EOF
# $project_name

Brief description of the project.

## Quick Start

### Installation
\`\`\`bash
npm install
\`\`\`

### Development
\`\`\`bash
npm run dev
\`\`\`

### Build
\`\`\`bash
npm run build
\`\`\`

## Documentation

- **Specification**: \`0.spec/spec.md\`
- **Full Spec**: \`0.spec/spec-kit.md\`
- **Operations**: \`1.ops/spec-ops.md\`
- **Structure**: \`PROJECT_STRUCTURE.md\` (in repository root)

## Project Structure

\`\`\`
$project_name/
├── 0.spec/              # Specifications
├── 1.ops/               # Operations
├── $([ "$project_type" = "static" ] && echo "src_static/" || echo "src/")       # Source code
├── dist/                # Build output
└── public/              # Static assets
\`\`\`

## Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run preview\` - Preview production build

## License

[Your License]

---

Created: $(date +%Y-%m-%d)
EOF
    print_success "Created: README.md"

    # Step 7: Initialize Git
    print_header "Step 7: Initializing Git Repository"

    git init
    git config core.symlinks true
    print_success "Git repository initialized"
    print_success "Symlinks enabled in Git"

    # Step 8: Create initial commit
    git add .
    git commit -m "Initial commit: $project_name

- Created standard folder structure
- Added documentation templates
- Configured git for symlinks

Project type: $project_type
Created: $(date +%Y-%m-%d)"

    print_success "Initial commit created"

    # Final summary
    print_header "PROJECT CREATED SUCCESSFULLY!"

    echo "Project: $project_name"
    echo "Type: $project_type"
    echo "Location: $(pwd)"
    echo ""
    echo "Next steps:"
    echo ""
    echo "1. Navigate to project:"
    echo "   cd $project_name"
    echo ""
    echo "2. Install dependencies:"
    echo "   npm install"
    echo ""
    echo "3. Start development:"
    echo "   npm run dev"
    echo ""
    echo "4. Edit documentation:"
    echo "   - 0.spec/spec.md"
    echo "   - 0.spec/spec-kit.md"
    echo "   - 1.ops/spec-ops.md"
    echo ""
    echo "5. Create symlinks (if needed):"
    echo "   ./1.ops/create-symlinks.sh"
    echo ""

    print_success "All done! Happy coding! 🚀"
}

# Show usage if -h or --help
if [ "$1" = "-h" ] || [ "$1" = "--help" ]; then
    cat << EOF
Usage: $0 PROJECT_NAME [TYPE]

Creates a new project with standard folder structure.

Arguments:
  PROJECT_NAME         Name of the new project (required)
  TYPE                 Project type: vue, svelte, or static (default: vue)

Options:
  -h, --help          Show this help message

Examples:
  $0 my-app                 # Create Vue project
  $0 my-app vue             # Create Vue project (explicit)
  $0 my-app svelte          # Create SvelteKit project
  $0 my-app static          # Create static site project

What this script creates:
  - Standard folder structure (0.spec/, 1.ops/, src/)
  - Documentation templates
  - package.json
  - .gitignore
  - README.md
  - Git repository with initial commit

Project types:
  - vue: Vue 3 + Vite + TypeScript
  - svelte: SvelteKit + TypeScript
  - static: Static HTML/CSS/JS with preprocessors
EOF
    exit 0
fi

# Run main function
main "$@"
