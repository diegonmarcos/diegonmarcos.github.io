document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            
            const url = new URL(this.href);
            if (url.pathname !== window.location.pathname) {
                return;
            }

            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                targetElement.focus();
                if (targetElement.tagName.toLowerCase() !== 'section') {
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
