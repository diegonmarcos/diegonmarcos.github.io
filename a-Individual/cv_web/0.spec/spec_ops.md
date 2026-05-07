# Operations & Build Process Specification

This document outlines the operational commands and build processes for the CV website project.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Initial Setup](#initial-setup)
- [Development Workflow](#development-workflow)
- [Production Build](#production-build)
- [Build Process Explanation](#build-process-explanation)
- [File Structure](#file-structure)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before running any build commands, ensure you have:

- **Node.js** (v14 or higher) - JavaScript runtime
- **npm** (v6 or higher) - Node Package Manager (comes with Node.js)

### Check if installed:
```bash
node --version
npm --version
```

If not installed, download from: https://nodejs.org/

---

## Initial Setup

### 1. Install Dependencies

Run this command **once** when you first clone the repository or after adding new dependencies:

```bash
npm install
```

**What this does:**
- Reads `package.json` to see what packages are needed
- Downloads Sass compiler and its dependencies
- Creates `node_modules/` folder with all packages
- Creates `package-lock.json` to lock dependency versions
- Takes ~5-10 seconds

**Expected Output:**
```
added 17 packages, and audited 18 packages in 1s
5 packages are looking for funding
found 0 vulnerabilities
```

---

## Development Workflow

### Watch Mode (Recommended for Development)

```bash
npm run sass:watch
```

**What this does:**
- Starts the Sass compiler in "watch" mode
- Monitors ALL files in `scss/` folder for changes
- **Automatically recompiles** `style.css` whenever ANY `.scss` file is saved
- Runs continuously until you press `Ctrl+C`
- Shows compilation status in terminal

**Use this when:**
- You're actively developing/styling the website
- You want instant feedback on CSS changes
- You're working on multiple components

**Workflow Example:**
```bash
# Terminal window
$ npm run sass:watch
> cv-web@1.0.0 sass:watch
> sass --watch scss/main.scss:style.css

Compiled scss/main.scss to style.css.
Sass is watching for changes. Press Ctrl-C to stop.

# You edit scss/components/_buttons.scss and save
Compiled scss/main.scss to style.css.

# You edit scss/abstracts/_variables.scss and save
Compiled scss/main.scss to style.css.
```

**Output:**
- **style.css** - Expanded, readable CSS with proper formatting
- **style.css.map** - Source map for browser DevTools debugging

---

### One-Time Development Build

```bash
npm run sass:dev
```

**What this does:**
- Compiles Sass files **once** (doesn't watch for changes)
- Outputs expanded, human-readable CSS
- Good for testing or when you don't need auto-compilation

**Use this when:**
- You made a single change and want to compile
- You're not actively developing
- You want to verify compilation works

**Expected Output:**
```
> cv-web@1.0.0 sass:dev
> sass scss/main.scss:style.css --style=expanded

Compiled scss/main.scss to style.css.
```

---

## Production Build

### Minified Build (For Deployment)

```bash
npm run sass:build
```

**What this does:**
- Compiles Sass files **once** with compression
- Removes all whitespace, comments, and unnecessary characters
- Produces smallest possible CSS file
- Optimized for fast loading on live websites

**Use this when:**
- Deploying to production server
- Creating a release build
- Optimizing for performance
- Before committing final changes

**Output Comparison:**
```css
/* Development Build (expanded) */
.button {
  background-color: #9966cc;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}

/* Production Build (compressed) */
.button{background-color:#9966cc;color:#fff;padding:10px 20px;border-radius:5px}
```

**File Size:**
- Development: ~11KB (readable)
- Production: ~8KB (minified, ~27% smaller)

---

## Build Process Explanation

### How Sass Compilation Works

#### Step-by-Step Process:

1. **Entry Point:**
   - Sass compiler reads `scss/main.scss` (the master file)

2. **Import Resolution:**
   - Processes all `@import` statements in order
   - Loads content from partial files (`_variables.scss`, `_mixins.scss`, etc.)
   - Follows ITCSS (Inverted Triangle CSS) methodology

3. **Variable Substitution:**
   - Replaces all Sass variables (`$color-accent-purple`) with actual values (`#9966cc`)
   - Applies throughout all imported files

4. **Mixin Expansion:**
   - Expands `@include transition(...)` into actual CSS properties
   - Applies mixin logic and parameters

5. **Nesting Resolution:**
   - Converts nested selectors into flat CSS
   ```scss
   // Input (Sass)
   .button {
     &:hover { color: red; }
   }

   // Output (CSS)
   .button:hover { color: red; }
   ```

6. **Output Generation:**
   - Writes compiled CSS to `style.css`
   - Creates source map (`style.css.map`) for debugging

#### Import Order (Critical):

```scss
// 1. Abstracts - Variables, mixins (no CSS output)
@import 'abstracts/variables';
@import 'abstracts/mixins';

// 2. Base - Foundation styles
@import 'base/base';
@import 'base/typography';

// 3. Layout - Structural components
@import 'layout/header';
@import 'layout/navigation';

// 4. Components - Reusable UI elements
@import 'components/buttons';
@import 'components/collapsers';

// 5. Pages - Page-specific overrides
@import 'pages/linktree';

// 6. Utilities - Helpers, animations
@import 'utilities/animations';
@import 'utilities/media-queries';
```

**Why Order Matters:**
- Variables must be defined before they're used
- Base styles come before specific components
- Utilities/overrides come last to have highest specificity

---

### What Each npm Script Does

Defined in `package.json`:

```json
{
  "scripts": {
    "sass:watch": "sass --watch scss/main.scss:style.css",
    "sass:build": "sass scss/main.scss:style.css --style=compressed",
    "sass:dev": "sass scss/main.scss:style.css --style=expanded"
  }
}
```

#### Breaking Down the Commands:

**`sass`** - The Sass compiler executable (from `node_modules/`)

**`--watch`** - Flag that enables file monitoring
- Keeps process running
- Detects file changes via filesystem events
- Auto-recompiles on save

**`scss/main.scss:style.css`** - Input:Output mapping
- Read from: `scss/main.scss`
- Write to: `style.css`

**`--style=compressed`** - Output style options:
- `compressed` - Minified (production)
- `expanded` - Readable (development)
- `nested` - Semi-compressed
- `compact` - Single-line rules

---

## File Structure

### Source Files (Edit These):

```
scss/
├── abstracts/
│   ├── _variables.scss    # Colors, spacing, fonts
│   ├── _mixins.scss       # Reusable patterns
│   └── _functions.scss    # Sass functions
├── base/
│   ├── _base.scss         # Global styles (body, html)
│   └── _typography.scss   # Headings, text
├── components/
│   ├── _buttons.scss      # Button styles
│   ├── _collapsers.scss   # Collapsible sections
│   ├── _quotes.scss       # Quote blocks
│   ├── _tables.scss       # Tables
│   ├── _lists.scss        # Custom lists
│   ├── _links.scss        # Link styles
│   └── _dividers.scss     # Horizontal rules
├── layout/
│   ├── _header.scss       # Page header
│   ├── _navigation.scss   # Side menu
│   ├── _sections.scss     # Section layout
│   └── _floating-menu.scss # FAB menu
├── pages/
│   └── _linktree.scss     # Linktree overrides
├── utilities/
│   ├── _animations.scss   # Keyframes
│   ├── _helpers.scss      # Utility classes
│   └── _media-queries.scss # Breakpoints
└── main.scss              # Master import file
```

### Generated Files (Don't Edit):

```
style.css           # Compiled CSS (auto-generated)
style.css.map       # Source map for debugging
node_modules/       # Installed packages
package-lock.json   # Locked dependency versions
```

### Configuration Files:

```
package.json        # Project config & scripts
```

---

## Troubleshooting

### Common Issues & Solutions

#### 1. "sass: command not found"

**Problem:** Sass not installed

**Solution:**
```bash
npm install
```

#### 2. Changes not appearing in browser

**Problem:** Browser cache or compilation not running

**Solutions:**
- Hard refresh browser: `Ctrl+F5` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Check if watch mode is running
- Manually run: `npm run sass:dev`
- Clear browser cache

#### 3. Compilation errors

**Problem:** Syntax error in `.scss` file

**Example Error:**
```
Error: Expected identifier.
  ╷
5 │   color $color-text;
  │        ^
  ╵
```

**Solution:**
- Check the line number in error message
- Look for missing colons, semicolons, brackets
- Verify variable names start with `$`

#### 4. Variables not working

**Problem:** Variable used before being defined

**Solution:**
- Check `scss/abstracts/_variables.scss` exists
- Verify import order in `main.scss`
- Variables must be imported before use

#### 5. "DEPRECATION WARNING [import]"

**Status:** Safe to ignore

**Explanation:**
- Sass is transitioning from `@import` to `@use`
- Current syntax still works perfectly
- Can be updated later (non-urgent)

---

## Development Tips

### 1. Changing Colors

Edit `scss/abstracts/_variables.scss`:
```scss
$color-accent-purple: #9966cc;  // Change this
```
All purple accents update automatically throughout the site.

### 2. Modifying Components

Find the component file:
```
Button styles     → scss/components/_buttons.scss
Navigation menu   → scss/layout/_navigation.scss
Animations        → scss/utilities/_animations.scss
```

### 3. Adding New Components

1. Create new file: `scss/components/_newfile.scss`
2. Add import to `scss/main.scss`:
   ```scss
   @import 'components/newfile';
   ```
3. Write styles in new file

### 4. Debugging with Source Maps

When inspecting in browser DevTools:
- CSS shows original `.scss` file name
- Click to jump to source Sass file
- Makes debugging easier

### 5. Git Workflow

**Commit these files:**
```
✓ scss/              # All source files
✓ package.json       # Dependencies config
✓ style.css          # Compiled output (optional)
```

**Don't commit (add to .gitignore):**
```
✗ node_modules/      # Too large, recreate with npm install
✗ style.css.map      # Generated file
✗ *.backup           # Backup files
```

---

## Quick Reference Card

```bash
# Initial setup (run once)
npm install

# Development (auto-compile on save)
npm run sass:watch

# Single compilation (development)
npm run sass:dev

# Production build (minified)
npm run sass:build

# Stop watch mode
Ctrl+C

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

---

## Performance Metrics

### Compilation Speed:
- Initial compile: ~100-200ms
- Incremental (watch mode): ~50-100ms
- Full rebuild: ~150-300ms

### File Sizes:
- Source (all .scss): ~15KB
- Compiled (expanded): ~11KB
- Compiled (compressed): ~8KB
- Reduction from original: ~21%

---

## Future Improvements

### Potential Enhancements:

1. **Update to `@use` syntax** (eliminate deprecation warnings)
2. **Add PostCSS** (autoprefixer for browser compatibility)
3. **CSS Grid/Flexbox mixins** (more responsive utilities)
4. **Color palette generator** (automatic tints/shades)
5. **Live reload** (browser auto-refresh on changes)
6. **CSS linting** (style validation)

---

## Additional Resources

- **Sass Documentation:** https://sass-lang.com/documentation
- **ITCSS Methodology:** https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/
- **npm Scripts Guide:** https://docs.npmjs.com/cli/v7/using-npm/scripts
- **Source Maps Explained:** https://web.dev/source-maps/

---

*Last Updated: 2025-10-28*
