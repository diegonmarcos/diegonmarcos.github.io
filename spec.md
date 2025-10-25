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
    *   Header (`<header class="hero animated-section">`) with a title, subtitle, blockquote, and theme toggle button.
    *   Main content (`<main>`) with a "Value Proposition" section.
    *   Footer (`<footer class="cta animated-section">`) with a call-to-action and links.

### Descriptive

The HTML is well-structured and follows modern standards. It includes a comprehensive `<head>` section with metadata for SEO and social media, as well as links to external resources. The `<body>` is organized into a clear header, main content area, and footer, with a container to center the content. The use of `animated-section` classes suggests that JavaScript-driven animations are applied to these sections.

## 2. CSS Styling

### Bullets

*   **Variables:** Defines a color palette with dark and purple tones for the default dark theme.
*   **Light Theme:** A `body.light-theme` class overrides the default variables to apply a light color scheme.
*   **Base Styles:** A reset is applied to remove default margins and padding. The base font is `Inter`.
*   **Layout:** A centered container with a maximum width of `1100px`.
*   **Theme Toggle Button:** Styles for the theme toggle button, including its absolute positioning, appearance, and hover effects.
*   **Hero Section:** A large, centered hero section with a gradient text effect.
*   **Value Proposition:** A grid layout that is responsive, switching from a single column to two columns on larger screens.
*   **Cards:** Styled with a semi-transparent background, rounded corners, and a hover effect that includes a subtle lift and a glowing border.
*   **CTA Section:** A centered call-to-action with prominent buttons.
*   **Animations:** A fade-in and slide-up animation for sections as they become visible in the viewport.

### Descriptive

The CSS is clean and modern, utilizing variables for easy theme management between dark and light modes. The styling creates a visually appealing dark theme with purple accents, and a clean, professional light theme. The layout is responsive, adapting to different screen sizes. The use of `clamp()` for font sizes ensures that the typography scales smoothly. The animations add a dynamic and engaging feel to the user experience.

## 3. JavaScript Scripts

### Bullets

*   **DOM Content Loaded:** The script runs after the HTML has been fully loaded.
*   **Data:** An array of objects (`valuePropSections`) holds the data for the "Value Proposition" cards.
*   **Dynamic Content:** The script dynamically generates the "Value Proposition" cards by iterating over the `valuePropSections` array.
*   **Custom Animation Engine:** To overcome browser-specific rendering bugs with CSS transitions, the site uses a custom JavaScript animation engine. A bespoke `animate` function, powered by `requestAnimationFrame`, smoothly controls the `opacity` and `transform` properties of elements, providing reliable fade-in and fade-out effects.
*   **Single Intersection Observer:** A single `IntersectionObserver` is used to monitor all elements with the `.animated-section` class. It triggers the `animate` function based on a single `threshold` value. When an element's visibility crosses this threshold, the observer determines whether to run the fade-in or fade-out animation. This provides a sensitive and symmetrical trigger for both effects.
*   **Theme Toggle Logic:**
    *   Toggles the `.light-theme` class on the `<body>` element on button click.
    *   Swaps the button icon between a sun (`ti-sun`) and a moon (`ti-moon`).
    *   Uses `localStorage` to persist the user's selected theme across sessions.

### Descriptive

The JavaScript is well-organized and efficient. It separates the data from the presentation by using an array of objects to store the content for the cards. The use of an `IntersectionObserver` is a modern and performant way to handle scroll-based animations. The theme toggle logic is robust, providing a seamless user experience and persisting their choice.

## 4. Additional Specs

### Bullets

*   **SEO and Social Media:** The site includes Open Graph and Twitter card meta tags to ensure that it is displayed correctly when shared on social media platforms.
*   **Analytics:** Google Analytics is integrated to track website traffic and user behavior.
*   **External Libraries:** The site uses Google Fonts for typography and Tabler Icons for icons.
*   **Responsiveness:** The site is designed to be responsive and should work well on a variety of devices, from mobile phones to desktop computers.
*   **Modularity:** The use of separate HTML, CSS, and JavaScript files promotes modularity and makes the code easier to maintain.
