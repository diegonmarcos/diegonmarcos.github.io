document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if the link is a full URL that just happens to have a hash
            const url = new URL(this.href);
            if (url.pathname !== window.location.pathname) {
                return; // Let default behavior handle links to other pages
            }

            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Focus the target element for accessibility
                targetElement.focus();
                if (targetElement.tagName.toLowerCase() !== 'section') {
                    // For non-section elements, make them tabbable if they aren't already
                    targetElement.setAttribute('tabindex', '-1'); 
                }
            }
        });
    });

    // Minimal form handling (prevent default submission)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Form submission simulated! Replace this with a real backend integration.');
            contactForm.reset();
        });
    }
});
