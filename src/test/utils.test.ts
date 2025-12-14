import { describe, it, expect, beforeEach } from 'vitest';
import { navigateTo, isBrowser, getElementById, addClass, removeClass } from '../utils';

describe('Utils', () => {
  describe('isBrowser', () => {
    it('should return true in jsdom environment', () => {
      expect(isBrowser()).toBe(true);
    });
  });

  describe('getElementById', () => {
    beforeEach(() => {
      document.body.innerHTML = '<div id="test-element">Test</div>';
    });

    it('should return element when it exists', () => {
      const element = getElementById('test-element');
      expect(element).toBeTruthy();
      expect(element?.textContent).toBe('Test');
    });

    it('should return null when element does not exist', () => {
      const element = getElementById('non-existent');
      expect(element).toBeNull();
    });
  });

  describe('addClass', () => {
    let element: HTMLElement;

    beforeEach(() => {
      document.body.innerHTML = '<div id="test">Test</div>';
      element = document.getElementById('test')!;
    });

    it('should add class to element', () => {
      addClass(element, 'new-class');
      expect(element.classList.contains('new-class')).toBe(true);
    });

    it('should handle null element gracefully', () => {
      expect(() => addClass(null, 'new-class')).not.toThrow();
    });
  });

  describe('removeClass', () => {
    let element: HTMLElement;

    beforeEach(() => {
      document.body.innerHTML = '<div id="test" class="existing-class">Test</div>';
      element = document.getElementById('test')!;
    });

    it('should remove class from element', () => {
      removeClass(element, 'existing-class');
      expect(element.classList.contains('existing-class')).toBe(false);
    });

    it('should handle null element gracefully', () => {
      expect(() => removeClass(null, 'existing-class')).not.toThrow();
    });
  });

  describe('navigateTo', () => {
    it('should set window.location.href', () => {
      // Create a simple mock for location
      const mockLocation = { href: '' };
      Object.defineProperty(window, 'location', {
        value: mockLocation,
        writable: true,
      });

      const href = 'https://example.com';
      navigateTo(href);

      expect(window.location.href).toBe(href);
    });

    it('should handle empty URL gracefully', () => {
      expect(() => navigateTo('')).not.toThrow();
    });
  });
});
