#!/bin/bash

# Fix ES module imports by adding .js extensions
# This is required for browser ES modules

cd "$(dirname "$0")/../dist/scripts" || exit 1

echo "Fixing module imports..."

# Find all .js files and add .js extension to relative imports
find . -name "*.js" -type f | while read -r file; do
    echo "  Processing: $file"
    # Handle ./ imports
    sed -i "s|from '\./\([^']*\)';|from './\1.js';|g" "$file"
    sed -i "s|from \"\./\([^\"]*\)\";|from \"./\1.js\";|g" "$file"
    # Handle ../ imports
    sed -i "s|from '\.\./\([^']*\)';|from '../\1.js';|g" "$file"
    sed -i "s|from \"\.\./\([^\"]*\)\";|from \"../\1.js\";|g" "$file"
    # Fix double .js.js if it was already there
    sed -i "s|\.js\.js|.js|g" "$file"
done

echo "✓ Import fixes applied"
