document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Dynamic Text Splitting and Styling (Simulates Framer Effect) ---
    const heroTitle = document.querySelector('.dynamic-split-text');
    if (heroTitle) {
        const fullText = heroTitle.textContent.trim();
        heroTitle.textContent = ''; // Clear original text
        const wordStyleAttr = heroTitle.getAttribute('data-word-style');
        const boldWordIndexes = wordStyleAttr ? wordStyleAttr.split(',').map(Number) : [];

        const words = fullText.split(' ');
        
        words.forEach((wordText, wordIndex) => {
            const wordSpan = document.createElement('span');
            wordSpan.classList.add('word');
            
            // Check if word index is explicitly marked for bold styling
            const styleClass = boldWordIndexes.includes(wordIndex) ? 'styled-bold' : 'styled-light';

            // Split each word into letters
            wordText.split('').forEach((letterText) => {
                const letterSpan = document.createElement('span');
                letterSpan.classList.add('letter', styleClass);
                letterSpan.textContent = letterText;
                wordSpan.appendChild(letterSpan);
            });

            heroTitle.appendChild(wordSpan);
        });

        // Animate the dynamically split letters (stagger fade-in)
        document.querySelectorAll('.dynamic-split-text .letter').forEach((letter, index) => {
            letter.style.transition = `opacity 0.05s ease ${index * 0.02}s, transform 0.05s ease ${index * 0.02}s`;
            setTimeout(() => {
                letter.style.opacity = '1';
                letter.style.transform = 'translateY(0)';
            }, 100);
        });
    }


    // --- 2. Menu Collapse/Expand on Scroll (Crucial Animation) ---
    let lastScrollY = window.scrollY;
    const body = document.body;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // Determine scroll direction
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling Down (Hide header)
            body.setAttribute('data-scroll-state', 'down');
        } else if (currentScrollY < lastScrollY) {
            // Scrolling Up (Show header)
            body.setAttribute('data-scroll-state', 'up');
        } else if (currentScrollY <= 100) {
            // At the very top
             body.setAttribute('data-scroll-state', 'up');
        }
        
        lastScrollY = currentScrollY;
    });


    // --- 3. Scroll-Triggered Animations (for project cards) ---
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

    
    // --- 4. Modal and Smooth Scrolling ---
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
