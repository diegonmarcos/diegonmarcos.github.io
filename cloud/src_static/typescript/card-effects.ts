// Card 3D tilt and hover effects
export class CardEffects {
  private card: HTMLElement;
  private zIndexDefault: number = 1;
  private zIndexActive: number = 10;

  constructor(card: HTMLElement) {
    this.card = card;
    this.init();
  }

  private init(): void {
    this.card.addEventListener('mouseenter', () => this.onMouseEnter());
    this.card.addEventListener('mouseleave', () => this.onMouseLeave());
    this.card.addEventListener('mousemove', (e: MouseEvent) => this.onMouseMove(e));
  }

  private onMouseEnter(): void {
    this.card.style.zIndex = String(this.zIndexActive);
  }

  private onMouseLeave(): void {
    this.card.style.zIndex = String(this.zIndexDefault);
    this.card.style.transform = 'translateY(0) scale(1) rotateX(0) rotateY(0)';
  }

  private onMouseMove(e: MouseEvent): void {
    const rect = this.card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    this.card.style.transform = `
      translateY(-12px)
      scale(1.02)
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  }
}
