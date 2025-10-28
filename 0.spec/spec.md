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

## 2. Sass/SCSS Architecture

The project has been migrated from a single `style.css` file to a modular Sass architecture for better maintainability, organization, and scalability.

### Folder Structure

```
3.sass/
├── base/
│   ├── _reset.scss           # CSS reset and base body styles
│   ├── _typography.scss      # Typography styles for headings, paragraphs, etc.
│   └── _variables.scss       # Color palette, fonts, and other variables
├── components/
│   ├── _buttons.scss         # Styles for various buttons
│   ├── _cards.scss           # Card component styles
│   └── _clippy.scss          # Styles for the Clippy assistant
├── layout/
│   ├── _footer.scss          # Footer and CTA section styles
│   ├── _header.scss          # Header and hero section styles
│   └── _navigation.scss      # Navigation styles
├── themes/
│   ├── _dark.scss            # Dark theme styles
│   └── _light.scss           # Light theme styles
└── style.scss                # Master import file (compiles to style.css)
```

### Master Import File (style.scss)

The `style.scss` file orchestrates all imports in the correct order:

```scss
// Base
@import 'base/variables';
@import 'base/reset';
@import 'base/typography';

// Components
@import 'components/buttons';
@import 'components/cards';
@import 'components/clippy';

// Layout
@import 'layout/header';
@import 'layout/footer';
@import 'layout/navigation';

// Themes
@import 'themes/dark';
@import 'themes/light';
```

### Key Principles

1.  **Partials**: Files prefixed with `_` are partials and won't compile individually.
2.  **Single Output**: Only `style.scss` compiles to `style.css`.
3.  **Import Order**: A logical import order is followed for clarity and cascading.
4.  **Variables**: Centralized in `base/_variables.scss` for easy theming.
5.  **Nesting**: Logical parent-child relationships for better code readability.

### Styling Details

*   **Variables:** The `base/_variables.scss` file defines a color palette with dark and purple tones for the default dark theme.
*   **Light Theme:** The `themes/_light.scss` file overrides the default variables to apply a light color scheme when the `body.light-theme` class is present.
*   **Base Styles:** A reset is applied in `base/_reset.scss` to remove default margins and padding. The base font is `Inter`.
*   **Space Background:** A fixed position element with a radial gradient background (dark blue to black) at 80% opacity that adapts to light theme. Contains 200 randomly generated stars with cross/plus shapes, varying sizes (1-3px), varied opacity (0.5-1) for depth, and individual twinkle animations with randomized delays and durations.
*   **Layout:** A centered container with a maximum width of `1100px`.
*   **Hero Section:** A large, centered hero section with a gradient text effect featuring an animated shimmer that sweeps across the title using a multi-stop purple gradient (6-second loop).
*   **Value Proposition:** A grid layout that is responsive, switching from a single column to two columns on larger screens.
*   **Cards:** Styled with a semi-transparent background, rounded corners, and a hover effect that includes a subtle lift and a glowing border.
*   **CTA Section:** A centered call-to-action with prominent buttons.
*   **Floating Menu:** Fixed position menu button (bottom-right) that reveals a collapsible menu with social links and three toggle buttons. Toggle buttons are styled as circular icons with hover and active states.
*   **Scroll Animations:** Fade-in and slide-up animations for sections as they become visible in the viewport.
*   **Star Styling:** Individual `.star` elements with cross/plus shape created using `::before` and `::after` pseudo-elements with soft glow. Each star has a `twinkle` animation (opacity and scale variation).
*   **Space Animations:** CSS keyframe animations for star explosions (scale and glow effect), small comets (2s diagonal flight), medium comets (3s longer diagonal flight with extended tail), and star twinkling (4s ease-in-out cycle).
*   **Presentation Mode:** `.fit-to-screen` class dynamically scales the entire page to fit viewport height, hiding scrollbars for a clean overview mode.

### Compilation

The Sass files are compiled into a single `style.css` file using a Sass compiler. The following command can be used to watch for changes and automatically recompile:

```bash
sass --watch 3.sass/style.scss:style.css
```

Or use npm scripts defined in package.json:

```bash
npm run sass:watch    # Watch for changes
npm run sass:build    # One-time compilation
npm run sass:check    # Check Sass syntax
```

### Benefits of Sass Architecture

1.  **Maintainability**: Easy to locate and update specific components.
2.  **Scalability**: Simple to add new components without affecting existing code.
3.  **DRY Principle**: Variables eliminate code repetition.
4.  **Team Collaboration**: Clear file structure makes collaboration easier.
5.  **Faster Development**: Auto-compilation with the `--watch` flag.
6.  **Better Organization**: The CSS is split into focused files.
7.  **Nesting**: More readable parent-child relationships.

## 3. JavaScript Scripts

### Bullets

*   **DOM Content Loaded:** The script runs after the HTML has been fully loaded.
*   **State Management:** Three boolean flags manage feature states:
    *   `animationsEnabled`: Controls scroll-based fade animations and presentation mode
    *   `backgroundAnimationsEnabled`: Controls space background effects (stars, comets)
    *   All states persist via `localStorage`
*   **Data:** An array of objects (`valuePropSections`) holds the data for the "Value Proposition" cards.
*   **Dynamic Content:** The script dynamically generates the "Value Proposition" cards by iterating over the `valuePropSections` array.
*   **Space Background Creation:** Dynamically creates and inserts a `#space-background` div at page load, then generates 200 individual star elements with randomized properties:
    *   Position: Random coordinates across 100% viewport width and height
    *   Size: Random 1-3px dimensions
    *   Opacity: Random 0.5-1 for depth perception
    *   Animation delay: Random 0-4 seconds (staggered twinkling)
    *   Animation duration: Random 3-6 seconds per cycle
*   **Custom Animation Engine:** To overcome browser-specific rendering bugs with CSS transitions, the site uses a custom JavaScript animation engine. A bespoke `animate` function, powered by `requestAnimationFrame`, smoothly controls the `opacity` and `transform` properties of elements, providing reliable fade-in and fade-out effects.
*   **Single Intersection Observer:** A single `IntersectionObserver` is used to monitor all elements with the `.animated-section` class. It triggers the `animate` function based on a single `threshold` value (0.95). When an element's visibility crosses this threshold, the observer determines whether to run the fade-in or fade-out animation. When animations are disabled, all sections are immediately visible.
*   **Space Animation System:**
    *   `createStarExplosion()`: Generates random star explosions with purple glow at random positions
    *   `createComet()`: Creates small or medium comets that fly diagonally across the screen
    *   Random scheduler triggers events every 3 seconds with varying probabilities (30% explosion, 30% small comet, 20% medium comet)
    *   `startBackgroundAnimations()` and `stopBackgroundAnimations()` control the interval
*   **Presentation Mode Logic:**
    *   `calculateAndApplyScale()`: Dynamically calculates scale factor to fit entire page in viewport (95% height usage)
    *   Responds to window resize events for adaptive scaling
    *   Toggles `.fit-to-screen` class on body to enable/disable overview mode
*   **Theme Toggle Logic:**
    *   Toggles the `.light-theme` class on the `<body>` element on button click.
    *   Swaps the button icon between a sun (`ti-sun`) and a moon (`ti-moon`).
    *   Uses `localStorage` to persist the user's selected theme across sessions.
*   **Background Animation Toggle Logic:**
    *   Toggles background animation state and updates icon (play/pause)
    *   Starts or stops the random animation scheduler
    *   Persists preference via `localStorage`
*   **Floating Menu Interaction:** Click-outside detection to close the floating menu when clicking elsewhere on the page.
*   **Scroll Fade Effect:** Floating action button fades out during scroll and reappears after 1 second of inactivity.

### Descriptive

The JavaScript is well-organized and efficient, managing multiple independent animation systems. It separates data from presentation by using an array of objects to store card content. The use of an `IntersectionObserver` is a modern and performant way to handle scroll-based animations. Three toggle systems (theme, background animations, presentation mode) provide granular control over the user experience, with all preferences persisting across sessions. The space background system uses interval-based random event generation to create organic, unpredictable celestial animations. The presentation mode features dynamic viewport-based scaling that automatically adjusts to window resizing, providing a responsive overview mode.

## 4. Additional Specs

### Bullets

*   **SEO and Social Media:** The site includes Open Graph and Twitter card meta tags to ensure that it is displayed correctly when shared on social media platforms.
*   **Analytics:** Google Analytics is integrated to track website traffic and user behavior.
*   **External Libraries:** The site uses Google Fonts for typography (Inter) and Tabler Icons for icons.
*   **Responsiveness:** The site is designed to be responsive and works well on a variety of devices, from mobile phones to desktop computers. The presentation mode dynamically adapts to any viewport size.
*   **Modularity:** The use of separate HTML, CSS, and JavaScript files promotes modularity and makes the code easier to maintain.
*   **User Preferences:** Three independent toggle controls allow users to customize their experience:
    *   **Theme Toggle:** Switch between dark and light themes
    *   **Background Animations:** Enable/disable space effects (star explosions and comets)
    *   **Presentation Mode:** Toggle between normal scrolling view and fit-to-screen overview
*   **Performance:** The space background uses 200 individual DOM elements for stars with CSS-only twinkle animations, and controlled interval-based JavaScript for dynamic effects (comets and explosions). The custom animation engine uses `requestAnimationFrame` for smooth, performant scroll animations.
*   **Accessibility:** All toggle buttons include title attributes for tooltips. The presentation mode provides an alternative view for users who prefer to see all content at once without scrolling.
*   **Visual Effects:**
    *   Hero title shimmer animation (6-second loop)
    *   Space background with 200 randomly distributed stars featuring cross/plus shapes
    *   Individual star twinkle animations with varied timing (3-6 second cycles)
    *   Random star explosions with purple glow
    *   Small and medium comets with trailing effects
    *   Card hover effects with purple glowing borders
    *   Smooth scroll-based fade-in/fade-out animations
    *   80% opacity overlay for layered depth effect
