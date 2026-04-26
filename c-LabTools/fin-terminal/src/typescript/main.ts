import { App } from './app';

const root = document.getElementById('app');
if (!root) {
  console.error('[fin-terminal] #app not found');
} else {
  void new App().mount(root).catch((err) => {
    console.error('[fin-terminal] mount error', err);
    root.textContent = `boot error: ${(err as Error).message}`;
  });
}
