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
});
