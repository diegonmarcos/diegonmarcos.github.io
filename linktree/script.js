document.addEventListener('DOMContentLoaded', () => {
    const videos = [
        'assets/videos/background.mp4',
        'assets/videos/background2.mp4',
        'assets/videos/background3.mp4',
        'assets/videos/background4.mp4'
    ];

    const videoElement = document.getElementById('background-video');
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    videoElement.src = randomVideo;

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

    const linkIcons = document.querySelectorAll('.link .icon');
    const linkPreview = document.getElementById('link-preview');

    if (window.innerWidth > 768) {
        linkIcons.forEach(icon => {
            icon.addEventListener('mouseover', (e) => {
                const link = e.target.parentElement;
                const previewUrl = link.getAttribute('data-preview');
                if (previewUrl) {
                    linkPreview.style.backgroundImage = `url(${previewUrl})`;
                    linkPreview.style.display = 'block';
                }
            });

            icon.addEventListener('mousemove', (e) => {
                linkPreview.style.left = `${e.pageX + 10}px`;
                linkPreview.style.top = `${e.pageY + 10}px`;
            });

            icon.addEventListener('mouseout', () => {
                linkPreview.style.display = 'none';
            });
        });
    }
});
