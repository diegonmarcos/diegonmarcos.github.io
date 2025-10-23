# Changes Required for index.html

This document lists the necessary changes to update `index.html` based on the content from `index.md`. The markdown file should be considered the single source of truth for the website's data.

## General Changes

*   The overall structure of `index.md` is much more detailed, especially in the "Skills" and "Career" sections. The `index.html` will need significant restructuring in those areas to accommodate the new information.
*   Many sections in `index.md` have introductory quotes that are missing from `index.html`. These should be added.
*   The `index.md` file contains a large number of tables for the tech stack, which are not present in the `index.html`. These will need to be created.
*   The `index.md` now uses a different structure for the "Professional Experience" and "Professional Education" sections, with descriptions as blockquotes and other information as list items. This will require changes to the HTML structure and possibly the CSS.

## Section-specific Changes

### Intro Section (`#intro`)

*   The link for the "Curriculum Vitae (pdf)" is different.
    *   **Current in `.html`:** `https://diegonmarcos.github.io/cv_pdf`
    *   **Should be (from `.md`):** `https://drive.google.com/file/d/1Dec6E5hWDRvVIPRnCZaNFccS2fqr9ght/view?usp=drivesdk`

### Career Section (`#career`)

*   The summary text under the main "CAREER" heading is different.
    *   **Current in `.html`:** "STUDYING Bachelor on Civil Engineer and a path towards Economics. WORKING in Capital Markets dealing with complex deals. EXPERIENCED Army Service, Volunteer and International Experience among relevant journeys."
    *   **Should be (from `.md`):** "STUDIED: B.SC. in Civil Engineer and a path towards Economics. WORKED: in Capital Markets dealing with complex deals. EXPERIENCED: Army Service, Volunteer and International Experience among relevant journeys."
*   **Professional Experience:** The structure has changed significantly. Each job is now a `<h4>` with the description as a blockquote and the details in a `(+)` collapsible section. This will require a major change in the HTML structure.
*   **Relevant Experience:** The descriptions for International Experience, Volunteer Experience, and Army Service are more detailed in the `.md` file.
*   **Professional Education:** Similar to Professional Experience, the structure has changed to use `<h4>`, blockquotes, and `(+)` collapsible sections.

### Portfolio Section (`#portfolio`)

*   The summary text under the main "PORTFOLIO" heading is different.
*   The introductory paragraphs for each subsection (Capital Markets, Corporate and Business, etc.) are present in the `.md` file but missing from the `.html` file.
*   The content under the "More..." collapsible sections needs to be updated to match the detailed bullet points in the `.md` file.

### Skills Section (`#skills`)

*   The summary text under the main "SKILLS" heading is different.
    *   **Current in `.html`:** "TECH: Full Stack frontend, DevOps and System Level Backend FINANCE: Valuation, M&A, Research, Macroeconomics and Accounting BUSINESS: Controller and Business Management SOFTSKILS: Logical and Teamwork LANGUAGES: Portuguese, English, Spanish, German"
    *   **Should be (from `.md`):** "Engineering, Tech Finance and Business."
*   This section requires the most significant changes.
*   The `index.md` file has a much more detailed and structured "Hard Skills" section, broken down into Foundational Science, Civil Engineering, Capital Markets, Product and Design, and Computer Science. The `index.html` has a simpler structure.
*   The "My Tech Stack" section in `index.html` needs to be completely replaced with the detailed tables and lists from the `index.md` file. This includes the "Stack", "My Stack", and "THE Tech Stack" sections.
*   The soft skills radar chart in `index.html` uses placeholder data. It should be updated with the data from the `.md` file's radar chart.
*   The "Languages and Citizenship" section in `index.md` includes "Work Permits," which is missing from `index.html`.

### Personal Pursuits Section (`#personal-pursuits`)

*   The introductory paragraph and the detailed lists under "My Bucket Endurance" and "My Bucket 50" in `index.md` should be reflected in `index.html`.

### Contact Section (`#contact`)

*   The "Linktree" section in `index.html` is a simple two-column table. The `index.md` has a much more detailed and structured Linktree with more links and categories. This section in `index.html` needs to be completely overhauled to match the content and structure of the `.md` file.
*   The link for "Curriculum (pdf)" in the Linktree section is different.
    *   **Current in `.html`:** `https://diegonmarcos.github.io/cv_pdf`
    *   **Should be (from `.md`):** `https://diegonmarcos.github.io/cv_pdf` (This seems to be a conflict with the link in the intro section, which points to a Google Drive link. This should be clarified.)
*   The link for "Front_Web" in the `.md` file's Linktree section appears to be a Google search link, which may be an error. This should be verified.