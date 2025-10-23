document.addEventListener('DOMContentLoaded', () => {
    // Select all elements that can act as a collapser
    const collapsers = document.querySelectorAll('.collapser');

    collapsers.forEach(collapser => {
        // Find the next sibling element with class 'collapsible-content'
        const content = collapser.nextElementSibling;
        
        // Ensure the element to collapse/expand exists and is correct
        if (!content || !content.classList.contains('collapsible-content')) {
            // console.warn('Collapser found without a corresponding .collapsible-content sibling:', collapser);
            return; // Skip if structure is incorrect
        }

        // Initialize state based on HTML class: 'open' by default for some, 'closed' for others
        if (collapser.classList.contains('open')) {
            // Content starts open (CSS max-height is active)
        } else {
            // Content starts closed
            collapser.classList.add('closed');
            content.classList.remove('open'); // Ensure CSS 'open' state is off
        }

        // Add the click event listener
        collapser.addEventListener('click', () => {
            if (content.classList.contains('open')) {
                // CLOSE
                content.classList.remove('open');
                collapser.classList.remove('open');
                collapser.classList.add('closed');
            } else {
                // OPEN
                content.classList.add('open');
                collapser.classList.add('open');
                collapser.classList.remove('closed');
            }
        });
    });

    // Side Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const sideNav = document.getElementById('side-nav');
    const mainContent = document.getElementById('main-content');

    navToggle.addEventListener('click', () => {
        sideNav.classList.toggle('open');
        mainContent.classList.toggle('nav-open');
    });
});
