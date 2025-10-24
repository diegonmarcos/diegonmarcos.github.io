document.addEventListener('DOMContentLoaded', () => {

    // --- Data for Value Proposition Cards ---
    const valuePropSections = [
        {
            title: "Capital Markets & Venture Capital Acumen",
            icon: "ti-briefcase",
            description: "\"I don't just analyze businesses; I've built, funded, and scaled them. My experience is rooted in tangible results and strategic growth.\"",
            points: [
                "Successfully structured and managed deals in Investment Banking, including R$ 500Mi in MBS and R$ 100Mi in mezzanine debt.",
                "Directed portfolios with an Asset under Management (AuM) of R$ 500Mi, handling everything from exclusive funds to private credit.",
                "Led the full cycle of Venture Capital deals, from acquisition to disinvestment, with a focus on ESG-centric startups."
            ]
        },
        {
            title: "Engineering & Problem-Solving Mindset",
            icon: "ti-ruler",
            description: "\"My foundation in Civil Engineering trained me to deconstruct complex problems and build robust, lasting solutions from the ground up.\"",
            points: [
                "Honed in critical thinking and problem-solving through a B.Sc. in Structural Civil Engineering.",
                "Managed on-site construction of residential towers and developed infrastructure projects for NGOs, turning blueprints into reality.",
                "Applied financial modeling and project management not just to finance, but to the tangible world of infrastructure and development."
            ]
        },
        {
            title: "The Pivot: Product & Software Engineering",
            icon: "ti-code",
            description: "\"Driven by a passion for creative endeavors and innovation, I am channeling my experience into building the products of tomorrow.\"",
            points: [
                "Currently honing skills in C/C++ programming, data structures, and UNIX at L’École 42, and Product Management from Stanford.",
                "Learning to manage the entire product lifecycle—from user discovery and roadmap creation to running operational sprints.",
                "Combining a decade of understanding *what* to build with the emerging knowledge of *how* to build it."
            ]
        },
        {
            title: "Global Perspective & Cross Adaptability",
            icon: "ti-world",
            description: "\"My personal life has been a nomadic project, providing me with unparalleled learning opportunities.\"",
            points: [
                "Lived in Berlin, Barcelona, London, Paris, and Valencia, while traveling to over 170 cities in 40+ countries.",
                "Fluent in Portuguese, English, and Spanish, with a growing proficiency in German.",
                "Thrives in multicultural environments, bringing a unique worldview to every team."
            ]
        }
    ];

    // --- Dynamic Card Generation ---
    const gridContainer = document.getElementById('value-proposition-grid');
    if (gridContainer) {
        valuePropSections.forEach(section => {
            const card = document.createElement('div');
            card.className = 'card animated-section'; // Add animation class here too

            const cardTitle = document.createElement('h3');
            cardTitle.className = 'card-title';

            const icon = document.createElement('i');
            icon.className = `ti ${section.icon}`;
            cardTitle.appendChild(icon);

            const titleText = document.createElement('span');
            titleText.textContent = section.title;
            cardTitle.appendChild(titleText);

            const cardDescription = document.createElement('p');
            cardDescription.className = 'card-description';
            cardDescription.textContent = section.description;

            const cardList = document.createElement('ul');
            cardList.className = 'card-list';
            section.points.forEach(pointText => {
                const listItem = document.createElement('li');
                listItem.textContent = pointText;
                cardList.appendChild(listItem);
            });

            card.appendChild(cardTitle);
            card.appendChild(cardDescription);
            card.appendChild(cardList);
            gridContainer.appendChild(card);
        });
    }

    // --- Scroll Animation Logic using Intersection Observer ---
    const animatedSections = document.querySelectorAll('.animated-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Optional: Stop observing after animation
            }
        });
    }, {
        root: null, // observes intersections relative to the viewport
        threshold: 0.1 // trigger when 10% of the element is visible
    });

    animatedSections.forEach(section => {
        observer.observe(section);
    });

    // --- Theme Toggle Logic ---
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Function to apply the saved theme on load
    const applyTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            body.classList.add('light-theme');
            themeToggleButton.innerHTML = '<i class="ti ti-moon"></i>';
        } else {
            body.classList.remove('light-theme');
            themeToggleButton.innerHTML = '<i class="ti ti-sun"></i>';
        }
    };

    // Theme toggle button event listener
    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        if (body.classList.contains('light-theme')) {
            localStorage.setItem('theme', 'light');
            themeToggleButton.innerHTML = '<i class="ti ti-moon"></i>';
        } else {
            localStorage.setItem('theme', 'dark');
            themeToggleButton.innerHTML = '<i class="ti ti-sun"></i>';
        }
    });

    // Apply the theme when the page loads
    applyTheme();

    // --- Scroll fade for theme toggle button ---
    let scrollTimeout;
    const floatingBtn = document.getElementById('floating-btn');

    window.addEventListener('scroll', () => {
        themeToggleButton.classList.add('fade-out');
        if (floatingBtn) {
            floatingBtn.classList.add('fade-out');
        }

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            themeToggleButton.classList.remove('fade-out');
            if (floatingBtn) {
                floatingBtn.classList.remove('fade-out');
            }
        }, 1000); // Adjust timeout as needed
    });

    // --- Floating Action Button ---
    const floatingMenu = document.getElementById('floating-menu');

    if (floatingBtn && floatingMenu) {
        floatingBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            floatingMenu.classList.toggle('show');
            floatingBtn.classList.toggle('active');
        });

        window.addEventListener('click', (event) => {
            if (floatingMenu.classList.contains('show') && !floatingMenu.contains(event.target) && !floatingBtn.contains(event.target)) {
                floatingMenu.classList.remove('show');
                floatingBtn.classList.remove('active');
            }
        });
    }
});