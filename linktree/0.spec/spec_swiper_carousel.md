# Swiper.js Carousel Feature Specification

This document outlines the implementation of a Swiper.js carousel for the "Professional" and "Personal" sections.

## 1. Overview

The goal is to enhance user experience by organizing the content within the "Professional" and "Personal" sections into a swipeable carousel. This will make the interface cleaner and more interactive, especially on mobile devices. Each section will have its own independent carousel.

## 2. Technical Requirements

### 2.1. Library Integration

- **Swiper.js:** The latest version of Swiper.js will be integrated into the project. We will use the CDN version to avoid local file dependencies.
- **CSS:** Swiper.js CSS will be included from the CDN.

### 2.2. HTML Structure Changes

The `index.html` file will be modified as follows for both the "PROFESSIONAL" and "PERSONAL" `.link-section` divs.

**Current Structure:**

```html
<div class="link-section">
    <h2 class="section-title">PROFESSIONAL</h2>
    <img src="2.assets/images/professional.png" alt="Professional" class="featured-image">
    <div class="links-container">
        <!-- All the links and collapsible content -->
    </div>
</div>
```

**New Structure with Swiper.js:**

```html
<div class="link-section">
    <!-- Swiper -->
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <!-- Slide 1: Home (Existing Content) -->
            <div class="swiper-slide">
                <div class="links-container">
                    <!-- All the original links and collapsible content -->
                </div>
            </div>

            <!-- Slide 2: Venture 1 -->
            <div class="swiper-slide">
                <h3>Venture 1</h3>
                <!-- Content for Venture 1 -->
            </div>

            <!-- Slide 3: Venture 2 -->
            <div class="swiper-slide">
                <h3>Venture 2</h3>
                <!-- Content for Venture 2 -->
            </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <!-- Add Navigation -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
</div>
```

### 2.3. JavaScript Initialization

A new section will be added to `script.js` to initialize the Swiper.js carousels.

```javascript
// Initialize Swiper
document.addEventListener('DOMContentLoaded', function () {
    const swipers = document.querySelectorAll('.swiper-container');
    swipers.forEach(swiper => {
        new Swiper(swiper, {
            // Optional parameters
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    });
});
```

## 3. Carousel Content

### 3.1. Professional Section

- **Slide 1 (Home):** Will contain the existing links from the "PROFESSIONAL" section.
- **Slide 2 (Venture 1):** Placeholder content "Professional Venture 1".
- **Slide 3 (Venture 2):** Placeholder content "Professional Venture 2".

### 3.2. Personal Section

- **Slide 1 (Home):** Will contain the existing links from the "PERSONAL" section.
- **Slide 2 (Venture 1):** Placeholder content "Personal Venture 1".
- **Slide 3 (Venture 2):** Placeholder content "Personal Venture 2".

## 4. Implementation Steps

1.  **Add Swiper.js to `index.html`:** Include the Swiper.js CSS and JS files from the CDN in the `<head>` and `<body>` of `index.html`.
2.  **Modify HTML:** Update the HTML structure for both the "Professional" and "Personal" sections to match the new Swiper.js layout.
3.  **Add JavaScript:** Add the initialization script for Swiper.js to `script.js`.
4.  **Style:** Add custom styles to `style.css` to ensure the carousel fits the existing design.
5.  **Test:** Test the carousel functionality on both desktop and mobile.
