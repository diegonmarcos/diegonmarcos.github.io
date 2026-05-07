// DOM utility functions

/**
 * Safely get an element by ID with type assertion
 */
export function getElementById<T extends HTMLElement>(id: string): T | null {
  return document.getElementById(id) as T | null;
}

/**
 * Safely query selector with type assertion
 */
export function querySelector<T extends Element>(selector: string, parent: Element | Document = document): T | null {
  return parent.querySelector(selector) as T | null;
}

/**
 * Query all elements matching selector
 */
export function querySelectorAll<T extends Element>(selector: string, parent: Element | Document = document): NodeListOf<T> {
  return parent.querySelectorAll(selector) as NodeListOf<T>;
}

/**
 * Add event listener with automatic cleanup
 */
export function addEventListenerWithCleanup<K extends keyof HTMLElementEventMap>(
  element: HTMLElement | Window | Document,
  event: K,
  handler: (e: HTMLElementEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions
): () => void {
  element.addEventListener(event, handler as EventListener, options);
  return () => element.removeEventListener(event, handler as EventListener, options);
}

/**
 * Toggle class on element
 */
export function toggleClass(element: HTMLElement, className: string, force?: boolean): boolean {
  return element.classList.toggle(className, force);
}

/**
 * Add multiple classes to element
 */
export function addClasses(element: HTMLElement, ...classNames: string[]): void {
  element.classList.add(...classNames);
}

/**
 * Remove multiple classes from element
 */
export function removeClasses(element: HTMLElement, ...classNames: string[]): void {
  element.classList.remove(...classNames);
}

/**
 * Check if element has class
 */
export function hasClass(element: HTMLElement, className: string): boolean {
  return element.classList.contains(className);
}

/**
 * Create element with optional attributes and children
 */
export function createElement<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  attributes?: Record<string, string>,
  ...children: (Node | string)[]
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tag);

  if (attributes) {
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }

  children.forEach(child => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else {
      element.appendChild(child);
    }
  });

  return element;
}
