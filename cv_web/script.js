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
