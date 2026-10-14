export class CardEffects {
    constructor() {
        this.initMouseTracking();
        this.init3DTilt();
        this.initMagneticButtons();
    }

    private initMouseTracking(): void {
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('mousemove', (e: Event) => {
                const mouseEvent = e as MouseEvent;
                const rect = (card as HTMLElement).getBoundingClientRect();
                const x = ((mouseEvent.clientX - rect.left) / rect.width) * 100;
                const y = ((mouseEvent.clientY - rect.top) / rect.height) * 100;
                (card as HTMLElement).style.setProperty('--mouse-x', x + '%');
                (card as HTMLElement).style.setProperty('--mouse-y', y + '%');
            });
        });
    }

    private init3DTilt(): void {
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('mousemove', (e: Event) => {
                const mouseEvent = e as MouseEvent;
                const rect = (card as HTMLElement).getBoundingClientRect();
                const x = mouseEvent.clientX - rect.left;
                const y = mouseEvent.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;

                (card as HTMLElement).style.transform =
                    `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
            });

            card.addEventListener('mouseleave', () => {
                (card as HTMLElement).style.transform =
                    'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
            });
        });
    }

    private initMagneticButtons(): void {
        document.querySelectorAll('.cta-btn').forEach(btn => {
            btn.addEventListener('mousemove', (e: Event) => {
                const mouseEvent = e as MouseEvent;
                const rect = (btn as HTMLElement).getBoundingClientRect();
                const x = mouseEvent.clientX - rect.left - rect.width / 2;
                const y = mouseEvent.clientY - rect.top - rect.height / 2;
                (btn as HTMLElement).style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            });

            btn.addEventListener('mouseleave', () => {
                (btn as HTMLElement).style.transform = 'translate(0, 0)';
            });
        });
    }
}
