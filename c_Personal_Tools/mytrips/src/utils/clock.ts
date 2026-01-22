export function startClock(elementId: string): () => void {
  const element = document.getElementById(elementId);
  if (!element) return () => {};

  const interval = setInterval(() => {
    const now = new Date();
    const time = now.toISOString().split('T')[1].split('.')[0] + ' UTC';
    element.innerText = time;
  }, 1000);

  return () => clearInterval(interval);
}
