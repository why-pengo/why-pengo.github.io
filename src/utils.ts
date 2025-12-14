/**
 * Utility functions for the portfolio website
 */

/**
 * Safely navigate to a URL
 * @param url - The URL to navigate to
 */
export function navigateTo(url: string): void {
  if (typeof window !== 'undefined' && url) {
    window.location.href = url;
  }
}

/**
 * Check if the code is running in a browser environment
 */
export function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

/**
 * Get an element by ID with type safety
 */
export function getElementById<T extends HTMLElement>(id: string): T | null {
  if (!isBrowser()) return null;
  return document.getElementById(id) as T | null;
}

/**
 * Add a class to an element if it exists
 */
export function addClass(element: HTMLElement | null, className: string): void {
  if (element) {
    element.classList.add(className);
  }
}

/**
 * Remove a class from an element if it exists
 */
export function removeClass(element: HTMLElement | null, className: string): void {
  if (element) {
    element.classList.remove(className);
  }
}
