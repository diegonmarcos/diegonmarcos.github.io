# Specification Document

This document outlines the technical details of the portfolio website.

## 1. HTML Structure

### Bullets

*   **Doctype:** `<!DOCTYPE html>`
*   **Language:** English (`<html lang="en">`)
*   **Head:**
    *   Meta tags for character set (`UTF-8`) and viewport settings.
    *   Open Graph and Twitter card meta tags for social media sharing.
    *   Google Analytics script (`gtag.js`).
    *   Google Fonts integration (`Inter`).
    *   Stylesheet links for `style.css` and Tabler Icons.
    *   Deferred JavaScript `script.js`.
*   **Body:**
    *   Main container (`<div class="container">`).
    *   Header (`<header class="hero animated-section">`) with a title (featuring shimmer effect), subtitle, and blockquote.
    *   Main content (`<main>`) with a "Value Proposition" section.
    *   Footer (`<footer class="cta animated-section">`) with a call-to-action and links.
    *   Floating menu container with action button and collapsible menu containing links and three toggle buttons.

### Descriptive

The HTML is well-structured and follows modern standards. It includes a comprehensive `<head>` section with metadata for SEO and social media, as well as links to external resources. The `<body>` is organized into a clear header, main content area, and footer, with a container to center the content. The use of `animated-section` classes suggests that JavaScript-driven animations are applied to these sections. A floating action menu provides quick access to social links and control toggles for theme, background animations, and presentation mode.

## 2. Build and Operations (1.ops)

The `1.ops/` directory centralizes all build tools, scripts, and configurations. For a detailed explanation of the operational aspects of the project, please refer to the [Operations Specification (spec_ops.md)](spec_ops.md).

## 3. Sass/SCSS Architecture

The project uses a modular Sass architecture for better maintainability, organization, and scalability.

### Folder Structure

```
3.sass/
├── abstracts/
│   ├── _variables.scss
│   ├── _mixins.scss
│   └── _functions.scss
├── base/
│   ├── _reset.scss
│   └── _typography.scss
├── components/
│   ├── _buttons.scss
│   ├── _cards.scss
│   └── _clippy.scss
├── layout/
│   ├── _footer.scss
│   ├── _header.scss
│   └── _navigation.scss
├── themes/
│   ├── _dark.scss
│   └── _light.scss
└── style.scss
```

### Compilation

The Sass files are compiled using the `npm` scripts defined in `1.ops/package.json`.

```bash
# From the 1.ops/ directory
npm run sass:build    # One-time compilation
npm run sass:watch    # Watch for changes
```

## 4. TypeScript/JavaScript Architecture

The project has been migrated to TypeScript for improved code quality, maintainability, and developer experience.

### Source and Output

*   **Source File**: The original TypeScript code is located at `4.ts/script.ts`.
*   **Compiled Output**: The TypeScript code is compiled to a standard JavaScript file at `script.js` in the root directory, which is what the browser executes.
*   **Source Map**: A source map (`script.js.map`) is generated in `1.ops/logs/` to allow for debugging the original TypeScript code directly in the browser's developer tools.

### Compilation

The TypeScript code is compiled using the `npm` scripts defined in `1.ops/package.json`.

```bash
# From the 1.ops/ directory
npm run ts:build      # One-time compilation
npm run ts:watch      # Watch for changes
```

### Key TypeScript Features

*   **Type Safety**: All major variables and functions are typed, reducing the risk of runtime errors.
*   **State Management**: Boolean flags (`animationsEnabled`, `backgroundAnimationsEnabled`) and other state variables are strongly typed.
*   **Interfaces**: Interfaces are used to define the shape of objects, such as the `valuePropSections` data structure.

## 5. Additional Specs

### Bullets

*   **SEO and Social Media:** The site includes Open Graph and Twitter card meta tags to ensure that it is displayed correctly when shared on social media platforms.
*   **Analytics:** Google Analytics is integrated to track website traffic and user behavior.
*   **External Libraries:** The site uses Google Fonts for typography (Inter) and Tabler Icons for icons.
*   **Responsiveness:** The site is designed to be responsive and works well on a variety of devices, from mobile phones to desktop computers. The presentation mode dynamically adapts to any viewport size.
*   **Modularity:** The use of separate HTML, CSS, and TypeScript files promotes modularity and makes the code easier to maintain.
*   **User Preferences:** Three independent toggle controls allow users to customize their experience:
    *   **Theme Toggle:** Switch between dark and light themes
    *   **Background Animations:** Enable/disable space effects (star explosions and comets)
    *   **Presentation Mode:** Toggle between normal scrolling view and fit-to-screen overview
*   **Performance:** The space background uses 200 individual DOM elements for stars with CSS-only twinkle animations, and controlled interval-based JavaScript for dynamic effects (comets and explosions). The custom animation engine uses `requestAnimationFrame` for smooth, performant scroll animations.
*   **Accessibility:** All toggle buttons include title attributes for tooltips. The presentation mode provides an alternative view for users who prefer to see all content at once without scrolling.