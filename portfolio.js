/*
 * JavaScript for Diego Nepomuceno Marcos CV
 * Implements collapsible functionality for H2 sections and main list items.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Collapsible H2 Sections
    const sectionHeaders = document.querySelectorAll('.cv-section h2.collapsible');

    sectionHeaders.forEach(header => {
        // Find the main content div immediately following the H2
        const content = header.nextElementSibling;
        
        // Initial state: Collapse all sections except the first one (Intro)
        if (header.parentElement.id !== 'intro') {
            content.classList.add('collapsed');
        } else {
             // For the open section, ensure the rotation is correct
             header.classList.add('open');
        }

        // Add click listener
        header.addEventListener('click', () => {
            content.classList.toggle('collapsed');
            header.classList.toggle('open');
        });
    });

    // 2. Collapsible List Items (like in "About" and "Experience")
    const listItems = document.querySelectorAll('.collapsible-list .collapsible-item');

    listItems.forEach(item => {
        // The collapsible content is the ul/div immediately following the span.collapsible-item
        // The parent of item is the <li>, and we want its next sibling
        const content = item.parentElement.querySelector('.item-content');
        
        // Initial state: All list items are collapsed
        if (content) {
            content.classList.add('collapsed');
            
            // Add click listener to the span
            item.addEventListener('click', () => {
                content.classList.toggle('collapsed');
                item.classList.toggle('open');
            });
        }
    });
});
