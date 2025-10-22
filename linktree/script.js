document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.link-section');

    sections.forEach(section => {
        const title = section.querySelector('.section-title');
        const links = section.querySelector('.links-container');

        title.addEventListener('click', () => {
            if (links.style.display === 'block' || links.style.display === '') {
                links.style.display = 'none';
            } else {
                links.style.display = 'block';
            }
        });
    });
});
