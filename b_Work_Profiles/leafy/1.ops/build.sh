#!/bin/bash

# ===========================================
# Leaf Studios - Build Script
# Compiles TypeScript and SCSS to dist/
# ===========================================

set -e  # Exit on error

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

echo "🌿 Leaf Studios - Build System"
echo "================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Clean dist directory
echo -e "${BLUE}[1/7]${NC} Cleaning dist directory..."
rm -rf dist
mkdir -p dist/styles dist/scripts dist/shaders

# Copy HTML
echo -e "${BLUE}[2/7]${NC} Copying HTML template..."
cp src/index.html dist/

# Copy GLSL Shaders
echo -e "${BLUE}[3/7]${NC} Copying GLSL shaders..."
if [ -d "src/shaders" ]; then
    cp src/shaders/*.glsl dist/shaders/
    echo -e "${GREEN}✓${NC} Shaders copied"
else
    echo -e "${YELLOW}⚠${NC} No shaders directory found"
fi

# Compile SCSS
echo -e "${BLUE}[4/7]${NC} Compiling SCSS..."
if command -v sass &> /dev/null; then
    sass src/styles/main.scss dist/styles/main.css --style=compressed --no-source-map
    echo -e "${GREEN}✓${NC} SCSS compiled successfully"
else
    echo -e "${YELLOW}⚠${NC} sass not found, trying npx..."
    if command -v npx &> /dev/null; then
        npx sass src/styles/main.scss dist/styles/main.css --style=compressed --no-source-map
        echo -e "${GREEN}✓${NC} SCSS compiled successfully"
    else
        echo -e "${RED}✗${NC} Error: sass compiler not found. Install with: npm install -g sass"
        exit 1
    fi
fi

# Compile TypeScript
echo -e "${BLUE}[5/7]${NC} Compiling TypeScript..."
if command -v tsc &> /dev/null; then
    tsc
    echo -e "${GREEN}✓${NC} TypeScript compiled successfully"
else
    echo -e "${YELLOW}⚠${NC} tsc not found, trying npx..."
    if command -v npx &> /dev/null; then
        npx tsc
        echo -e "${GREEN}✓${NC} TypeScript compiled successfully"
    else
        echo -e "${RED}✗${NC} Error: TypeScript compiler not found. Install with: npm install -g typescript"
        exit 1
    fi
fi

# Fix ES module imports (add .js extensions for browser compatibility)
echo -e "${BLUE}[6/7]${NC} Fixing module imports..."
bash "$PROJECT_ROOT/1.ops/fix-imports.sh" > /dev/null
echo -e "${GREEN}✓${NC} Module imports fixed"

# Calculate sizes
echo -e "${BLUE}[7/7]${NC} Build summary..."
HTML_SIZE=$(du -h dist/index.html | cut -f1)
CSS_SIZE=$(du -h dist/styles/main.css | cut -f1)
JS_SIZE=$(du -h dist/scripts/main.js | cut -f1)
TOTAL_SIZE=$(du -sh dist | cut -f1)

echo ""
echo -e "${GREEN}✓ Build completed successfully!${NC}"
echo ""
echo "📦 Output sizes:"
echo "  HTML:  $HTML_SIZE"
echo "  CSS:   $CSS_SIZE"
echo "  JS:    $JS_SIZE"
echo "  Total: $TOTAL_SIZE"
echo ""
echo "📂 Output directory: dist/"
echo ""
echo -e "${BLUE}To test locally:${NC}"
echo "  cd dist && python3 -m http.server 8080"
echo ""
