# Linktree Website Specification

This document outlines the structure and components of the personal linktree page.

## HTML Structure

The website is a single-page linktree-style application built with semantic HTML5. The main components are:

- **Doctype:** `<!DOCTYPE html>`
- **Language:** English (`<html lang="en">`)
- **Head:**
  - Meta tags for character set (`UTF-8`) and viewport settings for mobile responsiveness.
  - Google Analytics script (`gtag.js`) for tracking with ID `G-VB9ENP6DZ0`.
  - Page title: "Diego Nepomuceno Marcos | Linktree"
  - Stylesheet link to `style.css`.
- **Body:**
  - Background video element (`<video id="background-video">`) set to autoplay, muted, loop, and playsinline.
  - Link preview container (`<div id="link-preview">`).
  - Main container (`<div class="container">`) containing:
    - **Header:** Profile picture, name (h1), subtitle description (p), and social icons (email, LinkedIn, Telegram).
    - **Main Content:** Three collapsible link sections organized by category.
    - **Toggle Container:** A switch to enable/disable link preview feature.

### Content Sections

The main content is organized into three collapsible sections:

1. **Contact Section:**
   - Email
   - LinkedIn
   - Telegram

2. **Professional Section:**
   - Featured image (`assets/images/professional.png`)
   - **Profile:** Landing page, Web CV, PDF CV
   - **Repos:** GitHub, WakaTime
   - **Papers:** Two Substack links

3. **Personal Section:**
   - Featured image (`assets/images/personal.png`)
   - **Media:** TIDAL, YouTube, Pinterest, Instagram
   - **Endurance:** Komoot, Strava
   - **Maps:** NomadMania, Google Earth, Google Maps
   - **Projects:** Two bucket list links
   - **Others:** QR Code

### Link Structure

All links include:
- Icon images from `assets/icons/` directory (SVG format)
- `target="_blank"` attribute to open in new tabs
- `data-preview` attribute with screenshot URLs (WordPress mshots API or local images)

## CSS Styling

The styling is handled by a single stylesheet, `style.css`.

### Key Features

- **Background:** Black background (`#000`) with a semi-transparent overlay (40% opacity) over a video background.
- **Video Background:** Full-screen fixed video element positioned behind all content with `z-index: -2`.
- **Font:** Primary font is 'Inter' from Google Fonts, with 'Archivo Black' for headings.
- **Color Scheme:** White text on dark background with subtle hover effects.

### Layout

- **Container:** Centered layout with max-width of 580px and padding of 2rem.
- **Profile Section:** Circular profile picture (96px), centered text layout.
- **Social Icons:** Flexbox layout with centered alignment and 1rem gap.
- **Links:** Full-width buttons with transparent background, white border (1px), rounded corners (28px radius), and icons positioned absolutely on the left.

### Components

- **Profile Picture:** 96px circular image.
- **Section Titles:** 1.8rem font size, Archivo Black font family, clickable for collapsing.
- **Subsection Titles:** 1.2rem font size, gray color (#ccc).
- **Links:** 1.2rem font size, bold text, with hover effect (10% white overlay).
- **Icons:** 24px size with white invert filter.
- **Horizontal Rules:** Gradient effect from transparent to white and back.

### Link Preview

- **Preview Box:** 300x300px absolutely positioned element with white border.
- **Display:** Hidden by default, shown on hover when preview toggle is enabled.
- **Positioning:** Follows cursor position with 10px offset.
- **Mobile:** Disabled on screens smaller than 768px via media query.

### Toggle Switch

- **Styled Toggle:** Custom iOS-style toggle switch (60x34px).
- **Active State:** Blue background (#2196F3) when checked.
- **Label:** "Link Preview" text positioned next to switch.

## JavaScript

The website uses vanilla JavaScript for interactivity.

### Features

**1. Random Background Video:**
- Array of 4 background videos from `assets/videos/`.
- Randomly selects one video on page load using `Math.random()`.
- Sets the `src` attribute of the video element.

**2. Collapsible Sections:**
- Event listeners on all `.section-title` elements.
- Click event toggles the display of `.links-container` between `block` and `none`.
- Allows users to expand/collapse each section independently.

**3. Link Preview System:**
- **State Management:** Uses `localStorage` to persist preview toggle state as `previewsEnabled`.
- **Toggle Functionality:** Checkbox controls whether previews are shown.
- **Desktop Only:** Preview functionality only works on screens wider than 768px.
- **Event Listeners:**
  - `mouseover` on link icons: Shows preview with background image from `data-preview` attribute.
  - `mousemove` on link icons: Updates preview position to follow cursor.
  - `mouseout` on link icons: Hides preview.
- **Preview Source:** Uses WordPress mshots API (`https://s.wordpress.com/mshots/v1/`) for URL screenshots or local images.

### Event Listeners

The `script.js` file sets up the following event listeners:

- **`DOMContentLoaded` on `document`:** Main entry point that initializes all functionality.
- **`click` on `.section-title`:** Toggles visibility of link containers.
- **`change` on `#preview-toggle`:** Updates preview enabled state and saves to localStorage.
- **`mouseover` on `.link .icon`:** Shows link preview (desktop only, when enabled).
- **`mousemove` on `.link .icon`:** Updates preview position to follow cursor.
- **`mouseout` on `.link .icon`:** Hides link preview.

## External Resources

- **Google Analytics:** Tracking ID `G-VB9ENP6DZ0`
- **Profile Picture:** Hosted on `ugc.production.linktr.ee`
- **Icons:** Local SVG files in `assets/icons/` directory (Tabler Icons style)
- **Images:** Featured images in `assets/images/` directory
- **Videos:** Background videos in `assets/videos/` directory
- **Preview API:** WordPress mshots API for generating website screenshots

## Technical Details

- **Single-Page Application:** All content on one page with collapsible sections.
- **Responsive Design:** Mobile-first approach with viewport meta tag.
- **Performance Optimizations:**
  - Deferred script loading implied by placement at end of body.
  - Video set to autoplay without sound to avoid user interaction requirement.
  - Preview feature disabled on mobile to reduce load.
- **Accessibility Considerations:**
  - Alt text on images.
  - Title attributes on social icon links.
  - Semantic HTML structure.
- **Browser Compatibility:**
  - Uses modern CSS (flexbox, transforms, gradients).
  - LocalStorage for state persistence.
  - Video element with multiple fallback attributes.

## Assets Structure

```
linktree/
├── index.html
├── style.css
├── script.js
├── spec.md
└── assets/
    ├── icons/          (SVG icon files)
    ├── images/         (Featured section images)
    ├── videos/         (Background videos)
    └── index.html      (Content listing)
```
