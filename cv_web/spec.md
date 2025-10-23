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
- **Side Navigation:** The side navigation menu is styled to be fixed on the left side of the page, with a transition for smooth showing and hiding. The styles support a multi-level, collapsible list with visual indicators (arrows) for expandable sections.
- **Fonts:** The website uses the "Roboto" font from Google Fonts.
- **Key Classes:**
    - `.header-container`, `.header-content`: For the header section.
    - `.main-title`, `.collapser`, `.collapsible-content`: For the collapsible sections.
    - `.skills-table`, `.contact-table`: For styling tables.
    - `.mermaid-diagram`: For styling the Mermaid.js diagrams.
    - `.quote`, `.small-quote`: For styling blockquotes.
    - `.side-nav`, `.nav-toggle-button`, `.nested-nav`, `.collapsible-nav`: For the side navigation menu.

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

## Other Comments

- **Single-Page Application:** The website is a single-page application with smooth scrolling to different sections.
- **Responsive Design:** The use of the `viewport` meta tag and a fluid layout suggests that the website is designed to be responsive and work well on different screen sizes.
- **Favicon:** The website uses an SVG as a favicon.
- **Content:** The content is very detailed and well-structured, providing a comprehensive overview of the person's professional and personal life.
