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
- **Mermaid Diagrams:** The site uses Mermaid.js to render Gantt charts for timelines and a radar chart for soft skills.

## CSS

The styling is handled by a single stylesheet, `style.css`.

- **Framework:** No major CSS framework is used. The styling is custom.
- **Colors:** The website uses a dark theme with a color palette that includes a dark background and accent colors like purple. Colors are defined using CSS variables (e.g., `var(--color-accent-purple)`).
- **Layout:** The layout is a single-column, responsive design. The sections are separated by horizontal rules (`<hr class="section-divider">`).
- **Fonts:** The website uses the "Roboto" font from Google Fonts.
- **Key Classes:**
    - `.header-container`, `.header-content`: For the header section.
    - `.main-title`, `.collapser`, `.collapsible-content`: For the collapsible sections.
    - `.skills-table`, `.contact-table`: For styling tables.
    - `.mermaid-diagram`: For styling the Mermaid.js diagrams.
    - `.quote`, `.small-quote`: For styling blockquotes.

## JavaScript

The website uses JavaScript for interactivity and to enhance the user experience.

- **Frameworks/Libraries:**
    - **Mermaid.js:** Used to render the Gantt and radar charts from text-based definitions.
    - **Google Analytics (gtag.js):** For tracking website traffic.
- **Custom Scripts (`script.js`):**
    - The `script.js` file is responsible for the functionality of the collapsible sections. It adds a click event listener to elements with the `collapser` class, which toggles the `open` and `closed` classes on the collapser and its corresponding `.collapsible-content` sibling. This controls the visibility of the content.
    - **Scripts:**
        - **`DOMContentLoaded` Event Listener:** The script waits for the HTML document to be completely loaded and parsed before running.
        - **Collapser Functionality:**
            - It selects all elements with the class `collapser`.
            - For each `collapser` element, it finds the next sibling element with the class `collapsible-content`.
            - It initializes the state of the collapsible content based on whether the `collapser` has the `open` or `closed` class.
            - It adds a click event listener to each `collapser` to toggle the `open` and `closed` classes on both the `collapser` and the `collapsible-content`, which in turn controls the visibility of the content.

## Other Comments

- **Single-Page Application:** The website is a single-page application with smooth scrolling to different sections.
- **Responsive Design:** The use of the `viewport` meta tag and a fluid layout suggests that the website is designed to be responsive and work well on different screen sizes.
- **Favicon:** The website uses an SVG as a favicon.
- **Content:** The content is very detailed and well-structured, providing a comprehensive overview of the person's professional and personal life.
