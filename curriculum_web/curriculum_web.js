/*
 * JavaScript for Diego Nepomuceno Marcos CV
 * Implements collapsible functionality for H2 sections and main list items using max-height for smooth transition.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Function to handle the toggle logic
    const toggleCollapse = (element, toggler) => {
        if (element.classList.contains('collapsed')) {
            // Expand
            element.classList.remove('collapsed');
            toggler.classList.add('open');
            // Set max-height to the scroll height to allow transition
            element.style.maxHeight = element.scrollHeight + "px";
            // After the transition, remove max-height to allow content to grow naturally
            // (A small delay ensures the transition starts before max-height is removed)
            setTimeout(() => {
                if (!element.classList.contains('collapsed')) {
                    element.style.maxHeight = 'none';
                }
            }, 300); 

        } else {
            // Collapse
            toggler.classList.remove('open');
            // Set max-height explicitly before adding 'collapsed' to trigger transition
            element.style.maxHeight = element.scrollHeight + "px";
            // Use a tiny timeout to ensure the browser registers the scrollHeight before setting max-height to 0
            setTimeout(() => {
                element.style.maxHeight = '0';
                element.classList.add('collapsed');
            }, 10);
        }
    };


    // 1. Collapsible H2 Sections
    const sectionHeaders = document.querySelectorAll('.cv-section h2.collapsible');

    sectionHeaders.forEach(header => {
        const content = header.nextElementSibling;
        
        // Initial state: Collapse all sections except the first one (Intro)
        if (header.parentElement.id !== 'intro') {
            content.classList.add('collapsed');
            content.style.maxHeight = '0';
        } else {
             // For the open section, ensure the rotation is correct
             header.classList.add('open');
             content.style.maxHeight = 'none'; // Ensure intro is fully open
        }

        // Add click listener
        header.addEventListener('click', () => {
            toggleCollapse(content, header);
        });
    });

    // 2. Collapsible List Items (like in "About" and "Experience")
    const listItems = document.querySelectorAll('.collapsible-list .collapsible-item');

    listItems.forEach(item => {
        const content = item.parentElement.querySelector('.item-content');
        
        // Initial state: All list items are collapsed
        if (content) {
            content.classList.add('collapsed');
            content.style.maxHeight = '0';

            // Add click listener to the span
            item.addEventListener('click', () => {
                toggleCollapse(content, item);
            });
        }
    });
});
