document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Dynamic Text Splitting and Styling (Core Framer Effect) ---
    const heroTitle = document.querySelector('.dynamic-split-text');
    const fullText = heroTitle.textContent.trim();
    heroTitle.textContent = ''; // Clear original text

    const words = fullText.split(' ');
    
    // Define which words should be styled light vs bold (simulating framer splitting logic)
    // Indexes 0, 3, 6, 8 (0-indexed) are typically bold in the Palmer pattern
    const boldWordIndexes = [0, 3, 6, 8, 9]; 

    words.forEach((wordText, wordIndex) => {
        const wordSpan = document.createElement('span');
        wordSpan.classList.add('word');
        
        const isBold = boldWordIndexes.includes(wordIndex);
        const styleClass = isBold ? 'styled-bold' : 'styled-light';

        // Split each word into letters for finer animation control
        wordText.split('').forEach((letterText, letterIndex) => {
            const letterSpan = document.createElement('span');
            letterSpan.classList.add('letter', styleClass);
            letterSpan.textContent = letterText;
            wordSpan.appendChild(letterSpan);
        });

        heroTitle.appendChild(wordSpan);
    });

    // Animate the dynamically split letters (simple stagger fade-in)
    document.querySelectorAll('.dynamic-split-text .letter').forEach((letter, index) => {
        letter.style.transition = `opacity 0.05s ease ${index * 0.02}s, transform 0.05s ease ${index * 0.02}s`;
        setTimeout(() => {
            letter.style.opacity = '1';
            letter.style.transform = 'translateY(0)';
        }, 100);
    });


    // --- 2. Scroll-Triggered Animations (for project cards) ---
    const targets = document.querySelectorAll('[data-anim-target]');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    targets.forEach(target => {
        observer.observe(target);
    });

    
    // --- 3. Modal and Smooth Scrolling (Previous Functionality) ---
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
