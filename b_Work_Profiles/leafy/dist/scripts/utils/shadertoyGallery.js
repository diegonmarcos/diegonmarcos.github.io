export class ShadertoyGallery {
    constructor() {
        this.shaders = [
            { id: 'XsX3RB', name: 'Seascape', author: 'TDM' },
            { id: 'Ms2SD1', name: 'Clouds', author: 'iq' },
            { id: '4ttSWf', name: 'Rainier mood', author: 'flockaroo' },
            { id: 'MdX3Rr', name: 'Elevated', author: 'iq' },
            { id: 'ldl3W8', name: 'Aurora', author: 'nimitz' },
            { id: 'XlfGRj', name: 'Star Nest', author: 'Kali' },
            { id: '4df3Rn', name: 'Volcanic', author: 'iq' },
            { id: 'lsf3RH', name: 'Flame', author: 'iq' },
            { id: 'MdXyzX', name: 'Fractal Land', author: 'Kali' },
            { id: '4dsGzH', name: 'Abstract Glassy', author: 'iq' }
        ];
        this.createGallery();
    }
    createGallery() {
        const gallery = document.getElementById('shader-gallery');
        if (!gallery)
            return;
        this.shaders.forEach((shader, index) => {
            const card = document.createElement('div');
            card.className = 'shader-card gpu';
            card.style.transitionDelay = `${index * 0.1}s`;
            card.innerHTML = `
                <iframe
                    src="https://www.shadertoy.com/embed/${shader.id}?gui=false&paused=false&muted=true"
                    allowfullscreen
                    loading="lazy">
                </iframe>
                <div class="shader-overlay">
                    <div class="shader-info">
                        <h4>${shader.name}</h4>
                        <p>by ${shader.author}</p>
                    </div>
                </div>
            `;
            card.addEventListener('click', () => {
                window.open(`https://www.shadertoy.com/view/${shader.id}`, '_blank');
            });
            gallery.appendChild(card);
        });
    }
}
