document.addEventListener('DOMContentLoaded', () => {
    // Dynamically generate the side navigation
    const sideNav = document.getElementById('side-nav');
    const headings = document.querySelectorAll('main h2, main h3');
    let currentLists = [document.createElement('ul')];
    sideNav.appendChild(currentLists[0]);

    // Add HOME button
    const homeListItem = document.createElement('li');
    const homeLink = document.createElement('a');
    homeLink.href = '#';
    homeLink.textContent = 'HOME';
    homeListItem.appendChild(homeLink);
    currentLists[0].appendChild(homeListItem);

    headings.forEach(heading => {
        const level = parseInt(heading.tagName.substring(1)) - 2; // h2 -> 0, h3 -> 1
        
        if (!heading.id) {
            heading.id = heading.textContent.trim().toLowerCase().replace(/\s+/g, '-');
        }

        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${heading.id}`;
        if (heading.textContent === 'Intro') {
            link.textContent = heading.textContent.toUpperCase();
        } else {
            link.textContent = heading.textContent;
        }
        listItem.appendChild(link);

        while (level >= currentLists.length) {
            const newList = document.createElement('ul');
            const lastItem = currentLists[currentLists.length - 1].lastChild;
            if (lastItem) {
                lastItem.appendChild(newList);
                currentLists.push(newList);
            } else {
                currentLists[currentLists.length - 1].appendChild(newList);
            }
        }
        currentLists.length = level + 1;

        currentLists[level].appendChild(listItem);
    });

    // Add collapsible functionality to the generated nav
    sideNav.querySelectorAll('li > a').forEach(link => {
        const sublist = link.nextElementSibling;
        if (sublist && sublist.tagName === 'UL') {
            link.classList.add('collapsible-nav');
            sublist.style.display = 'block'; // Start expanded

            link.addEventListener('click', (e) => {
                e.preventDefault();
                sublist.style.display = sublist.style.display === 'none' ? 'block' : 'none';
                link.classList.toggle('open');
            });
        }
    });

    // Scroll-spy functionality
    const scrollSpyHeadings = document.querySelectorAll('main h2, main h3');
    const navLinks = sideNav.querySelectorAll('a');
    const careerSection = document.getElementById('career');
    let menuOpenedOnce = false;

    window.addEventListener('scroll', () => {
        let current = '';
        scrollSpyHeadings.forEach(heading => {
            const headingTop = heading.offsetTop;
            if (pageYOffset >= headingTop - 60) {
                current = heading.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });

        // Auto-open menu at Career section
        if (!menuOpenedOnce && window.pageYOffset >= careerSection.offsetTop - 60) {
            sideNav.classList.add('open');
            mainContent.classList.add('nav-open');
            menuOpenedOnce = true;
        }
    });

    // Select all elements that can act as a collapser
    const collapsers = document.querySelectorAll('.collapser');

    collapsers.forEach(collapser => {
        const content = collapser.nextElementSibling;
        
        if (!content || !content.classList.contains('collapsible-content')) {
            return;
        }

        if (collapser.classList.contains('open')) {
            // Content starts open
        } else {
            collapser.classList.add('closed');
            content.classList.remove('open');
        }

        collapser.addEventListener('click', () => {
            if (content.classList.contains('open')) {
                content.classList.remove('open');
                collapser.classList.remove('open');
                collapser.classList.add('closed');
            } else {
                content.classList.add('open');
                collapser.classList.add('open');
                collapser.classList.remove('closed');
            }
        });
    });

    // Side Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const mainContent = document.getElementById('main-content');

    navToggle.addEventListener('click', () => {
        sideNav.classList.toggle('open');
        mainContent.classList.toggle('nav-open');
    });
});
