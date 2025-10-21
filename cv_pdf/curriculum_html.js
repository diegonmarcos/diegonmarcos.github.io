document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Scroll-Triggered Animations (for project cards) ---
    // This is the functional animation for the 3D cards
    const targets = document.querySelectorAll('[data-anim-target]');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1 
    });
    targets.forEach(target => {
        observer.observe(target);
    });

    
    // --- 2. Modal and Smooth Scrolling (Stable Utility) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                targetElement.setAttribute('tabindex', '-1'); 
                targetElement.focus();
            }
        });
    });

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
        const closeModal = () => { modal.style.display = 'none'; };
        closeModalBtn.addEventListener('click', closeModal);
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                closeModal();
            }
        });
    }
});
