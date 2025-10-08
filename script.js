document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth scrolling for anchor links (A11y Optimized)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                targetElement.setAttribute('tabindex', '-1'); 
                targetElement.focus();
            }
        });
    });

    // 2. Modal/Overlay Logic (OVERLAYS & MODALS)
    const contactForm = document.querySelector('.contact-form');
    const modal = document.getElementById('contactModal');
    const closeModalBtn = document.getElementById('closeModal');

    if (contactForm && modal && closeModalBtn) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            modal.style.display = 'flex';
            closeModalBtn.focus();
            contactForm.reset();
        });

        const closeModal = () => {
            modal.style.display = 'none';
        };

        closeModalBtn.addEventListener('click', closeModal);
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                closeModal();
            }
        });
    }
});
