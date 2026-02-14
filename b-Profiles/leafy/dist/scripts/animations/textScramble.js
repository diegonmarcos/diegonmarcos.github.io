export class TextScramble {
    constructor(el) {
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.queue = [];
        this.frame = 0;
        this.frameRequest = null;
        this.resolve = null;
        this.el = el;
        this.update = this.update.bind(this);
    }
    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise(resolve => this.resolve = resolve);
        this.queue = [];
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end });
        }
        if (this.frameRequest) {
            cancelAnimationFrame(this.frameRequest);
        }
        this.frame = 0;
        this.update();
        return promise;
    }
    update() {
        let output = '';
        let complete = 0;
        for (let i = 0; i < this.queue.length; i++) {
            let { from, to, start, end, char } = this.queue[i];
            if (this.frame >= end) {
                complete++;
                output += to;
            }
            else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.chars[Math.floor(Math.random() * this.chars.length)];
                    this.queue[i].char = char;
                }
                output += `<span style="color: var(--gold)">${char}</span>`;
            }
            else {
                output += from;
            }
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) {
            this.resolve?.();
        }
        else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }
}
