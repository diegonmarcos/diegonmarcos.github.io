# Website Specification

This document outlines the structure and components of the personal portfolio website.

## HTML Structure

The website is a single-page application built with semantic HTML5. The main components are:

- **`<header>`:** Contains the main heading with the person's name, a subtitle, a quote, and a scroll-down arrow.
- **`<main>`:**  The main content of the page, divided into the following sections:
    - **`<section id="intro">`:** A brief introduction with a "TL;DR" summary, a link to a PDF CV, and a Mermaid.js Gantt chart for a career timeline.
    - **`<section id="career">`:**  Details about professional experience, relevant experience, and education. This section also includes Mermaid.js Gantt charts.
    - **`<section id="portfolio">`:**  A portfolio of projects and experiences, categorized into Capital Markets, Corporate and Business, Civil Engineering, Computer Science, Product Management and Design, International Experience, NGO, and Army Service.
    - **`<section id="skills">`:**  A comprehensive list of skills, including a tech stack, hard skills, soft skills, and languages. The tech stack is presented in tables with icons.
    - **`<section id="personal-pursuits">`:**  Information about personal interests and goals.
    - **`<section id="contact">`:** Contact information and a "Linktree" section with links to various online profiles.
- **Collapsible Sections:** The content is organized into collapsible sections using `<h2>`, `<h3>`, and `<h4>` tags with the `collapser` class and `<div>` elements with the `collapsible-content` class. This allows for a clean and organized presentation of a large amount of information.
- **Side Navigation Menu:** An empty `<nav id="side-nav">` element is included. This element is dynamically populated by a script that generates a hierarchical, multi-level, collapsible list of anchor links corresponding to the `h2` and `h3` titles in the document. A "HOME" button is prepended to the list. A toggle button (`<button id="nav-toggle">`) is provided to show and hide the menu.
- **Mermaid Diagrams:** The site uses Mermaid.js to render Gantt charts for timelines and a radar chart for soft skills.
- **Font Awesome Icons:** The website uses Font Awesome to add icons to the links in the "Linktree" section. This enhances the visual appeal and provides a better user experience by making the links more recognizable.

## CSS

The styling is handled by a single stylesheet, `style.css`.

- **Framework:** No major CSS framework is used. The styling is custom.
- **Colors:** The website uses a dark theme with a color palette that includes a dark background and accent colors like purple. Colors are defined using CSS variables (e.g., `var(--color-accent-purple)`).
- **Layout:** The layout is a single-column, responsive design. The sections are separated by horizontal rules (`<hr class="section-divider">`).
- **Side Navigation:** The side navigation menu is styled to be fixed on the left side of the page. On desktop, it pushes the main content to the right. On mobile screens (via a media query), it overlays the content to prevent page reflow. An `.active` class is used to highlight the current section link.
- **Fonts:** The website uses the "Roboto" font from Google Fonts.
- **Key Classes:**
    - `.header-container`, `.header-content`: For the header section.
    - `.main-title`, `.collapser`, `.collapsible-content`: For the collapsible sections.
    - `.skills-table`, `.contact-table`: For styling tables.
    - `.mermaid-diagram`: For styling the Mermaid.js diagrams.
    - `.quote`, `.small-quote`: For styling blockquotes.
    - `.side-nav`, `.nav-toggle-button`, `.nested-nav`, `.collapsible-nav`, `.active`: For the side navigation menu.

## JavaScript

The website uses JavaScript for interactivity and to enhance the user experience.

- **Frameworks/Libraries:**
    - **Mermaid.js:** Used to render the Gantt and radar charts from text-based definitions.
    - **Google Analytics (gtag.js):** For tracking website traffic.
- **Custom Scripts (`script.js`):**
    - The `script.js` file is responsible for the functionality of the collapsible sections and the side navigation menu.
    - **Scripts:
        - **`DOMContentLoaded` Event Listener:** The script waits for the HTML document to be completely loaded and parsed before running.
        - **Dynamic Side Navigation Generation:**
            - The script scans the document for `h2` and `h3` elements within the `<main>` tag.
            - It dynamically generates a nested `<ul>` structure that mirrors the heading hierarchy.
            - A "HOME" button is prepended to the list.
            - This generated HTML is then injected into the `<nav id="side-nav">` element.
        - **Scroll-Spy Functionality:**
            - A scroll event listener is added to the window.
            - On scroll, it determines which `h2` or `h3` is currently in the viewport.
            - It adds an `.active` class to the corresponding link in the side navigation and removes it from others.
        - **Automatic Menu Opening:**
            - The scroll event listener also checks if the "Career" section is in the viewport.
            - If it is, and the menu has not been automatically opened before, the side navigation menu is opened. This behavior is triggered only once.
        - **Collapser Functionality:**
            - It selects all elements with the class `collapser`.
            - For each `collapser` element, it finds the next sibling element with the class `collapsible-content`.
            - It initializes the state of the collapsible content based on whether the `collapser` has the `open` or `closed` class.
            - It adds a click event listener to each `collapser` to toggle the `open` and `closed` classes on both the `collapser` and the `collapsible-content`, which in turn controls the visibility of the content.
        - **Side Navigation Toggle:**
            - It adds a click event listener to the `#nav-toggle` button.
            - When clicked, it toggles a class on the `#side-nav` element and the `main` content area to slide the navigation in and out of view.
        - **Collapsible Navigation Menu:**
            - It adds click event listeners to navigation links that have nested menus.
            - Clicking these links toggles the visibility of the nested menu and rotates an indicator arrow, without navigating to a new page.
        - **Mobile Menu Auto-Close:**
            - On mobile, when a link in the side navigation is clicked, the menu automatically closes.

## Other Comments

- **Single-Page Application:** The website is a single-page application with smooth scrolling to different sections.
- **Responsive Design:** The use of the `viewport` meta tag and a fluid layout suggests that the website is designed to be responsive and work well on different screen sizes.
- **Favicon:** The website uses an SVG as a favicon.
- **Content:** The content is very detailed and well-structured, providing a comprehensive overview of the person's professional and personal life.

## Event Listeners

The `script.js` file sets up the following event listeners to provide interactivity:

- **`DOMContentLoaded` on `document`:** The main entry point for the script. All other event listeners are set up after this event fires.
- **`click` on Side Navigation Links (`sideNav.querySelectorAll('li > a')`):**
    - Toggles the display of nested sub-menus in the side navigation.
    - Prevents the default link behavior to allow for collapsible sub-menus.
- **`scroll` on `window`:**
    - Implements the scroll-spy functionality, highlighting the active link in the side navigation based on the current scroll position.
    - Automatically opens the side navigation menu once when the "Career" section is scrolled into view.
- **`click` on Collapser Elements (`.collapser`):** Toggles the visibility of the collapsible content sections.
- **`click` on the Navigation Toggle Button (`#nav-toggle`):** Toggles the visibility of the side navigation menu.
- **`click` on Side Navigation Links (`navLinks`):** Closes the side navigation menu when a link is clicked.
- **`click` on the Main Content Area (`#main-content`):** Closes the side navigation menu if it is open.
- **`click` on the Floating Action Button (`#floating-btn`):** Toggles the visibility of the floating menu.
- **`click` on `window`:** Closes the floating menu if a click occurs outside of the menu or the floating action button.

## Recent Feature Additions

This section details new UI/UX features and interactive elements added to the portfolio.

### Side Menu Utility Bar

A new utility bar has been added to the top of the slide-out side navigation menu.

- **HTML Structure:** The buttons are contained within a `<div class="desktop-view-button-container">` placed at the top of the `<nav id="side-nav">` element.
- **CSS Styling:**
    - The container uses Flexbox (`display: flex`, `justify-content: flex-end`) to align the icon buttons to the top-right.
    - A consistent `icon-button` class is used for uniform styling (size, color, opacity).
    - Hover states (`:hover`) are defined to provide visual feedback.
    - Spacing is controlled via `gap` and `padding` on the container.
- **Buttons (Right to Left):**
    1.  **Desktop/Mobile View Toggle (`#desktop-view-toggle`):**
        - **Functionality:** Toggles the viewport meta tag between a mobile-first view (`width=device-width, initial-scale=1.0`) and a scaled-down desktop view (`width=1024`).
        - **UI:** The icon changes between `<i class="fas fa-desktop"></i>` and `<i class="fas fa-mobile-alt"></i>` to reflect the current mode.
        - **Interaction:** Implemented via a click event listener in `script.js`.
    2.  **Light/Dark Theme Toggle (`#theme-toggle`):**
        - **Functionality:** (Placeholder) This button is in place for future theme-switching logic.
        - **UI:** Uses a sun icon (`<i class="fas fa-sun"></i>`).
    3.  **View Source (`#view-source-btn`):**
        - **Functionality:** A direct link that opens the `cv_web` folder of the project's GitHub repository in a new tab.
        - **UI:** Uses a code icon (`<i class="fas fa-code"></i>`).
    4.  **Terminal Theme (`#terminal-theme-btn`):**
        - **Functionality:** (Placeholder) This button is in place for a future terminal-style theme switcher.
        - **UI:** Uses a terminal icon (`<i class="fas fa-terminal"></i>`).
    5.  **Palette Cycler (`#palette-cycler-btn`):**
        - **Functionality:** (Placeholder) This button is in place for a future feature to cycle through multiple color palettes.
        - **UI:** Uses a palette icon (`<i class="fas fa-palette"></i>`).
- **Accessibility:** All icon buttons have a `title` attribute to provide descriptive text on mouse hover.

### Easter Egg: "Dev Mode"

A hidden feature has been added to the main header.

- **Trigger:** Clicking the main `<h1>` title ("DIEGO NEPOMUCENO MARCOS") seven times in quick succession (within a 2-second reset window).
- **Effects:**
    1.  **Toast Message:** A temporary message with the text "Dev Mode Unlocked" appears in the center of the screen. It is styled with a green, monospace font to give it a "hacker" feel.
    2.  **Starburst Animation:** A 7-second particle animation is triggered, where 50 small white dots burst outwards from random positions across the entire screen.
- **Implementation:**
    - **CSS:** New styles for `.dev-mode-toast` and `.particle` (including a `@keyframes starburst` animation) were added to `style.css`.
    - **JavaScript:** Logic was added to `script.js` to handle the click counting, trigger the toast and starburst functions, and manage the animation timeouts.
