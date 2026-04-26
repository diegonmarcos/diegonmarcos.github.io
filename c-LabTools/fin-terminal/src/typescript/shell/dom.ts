// Tiny DOM builder — avoids the cost of a templating layer while keeping
// element creation declarative. Returns an HTMLElement of the requested tag.
export function el<E extends HTMLElement = HTMLElement>(
  tag: string,
  attrs: Record<string, string> = {},
  children: Array<HTMLElement | string> = [],
): E {
  const node = document.createElement(tag) as E;
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') node.className = v;
    else if (k.startsWith('on')) (node as unknown as Record<string, unknown>)[k] = v;
    else node.setAttribute(k, v);
  }
  for (const c of children) {
    if (typeof c === 'string') node.appendChild(document.createTextNode(c));
    else node.appendChild(c);
  }
  return node;
}

export function clear(n: HTMLElement): void {
  while (n.firstChild) n.removeChild(n.firstChild);
}

export function replace(n: HTMLElement, child: HTMLElement | string): void {
  clear(n);
  if (typeof child === 'string') n.appendChild(document.createTextNode(child));
  else n.appendChild(child);
}
