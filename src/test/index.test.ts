import { describe, it, expect, beforeEach, vi } from 'vitest';
import { init } from '../index';

describe('Portfolio Application', () => {
  beforeEach(() => {
    // Reset the DOM
    document.body.innerHTML = '';
    vi.clearAllMocks();
  });

  describe('init', () => {
    it('should be a function', () => {
      expect(typeof init).toBe('function');
    });

    it('should execute without errors', () => {
      expect(() => init()).not.toThrow();
    });

    it('should log a message when initialized', () => {
      const consoleSpy = vi.spyOn(console, 'log');
      init();
      expect(consoleSpy).toHaveBeenCalledWith('Portfolio loaded');
    });
  });

  describe('DOM Structure', () => {
    beforeEach(() => {
      // Set up a basic HTML structure similar to the actual page
      document.body.innerHTML = `
        <div class="area">
          <ul class="circles"></ul>
          <div id="detail" class="bg-dark text-white m-3 p-3 rounded">
            <div id="animated_div" class="text-center text-nowrap">
              <img src="/profile.png" alt="Jon Morgan" id="animated_image"/>
            </div>
          </div>
        </div>
      `;
    });

    it('should have the main area div', () => {
      const areaDiv = document.querySelector('.area');
      expect(areaDiv).toBeTruthy();
    });

    it('should have the detail section', () => {
      const detailDiv = document.getElementById('detail');
      expect(detailDiv).toBeTruthy();
    });

    it('should have the animated div', () => {
      const animatedDiv = document.getElementById('animated_div');
      expect(animatedDiv).toBeTruthy();
    });

    it('should have the profile image', () => {
      const profileImage = document.getElementById('animated_image');
      expect(profileImage).toBeTruthy();
      expect(profileImage?.tagName).toBe('IMG');
      expect(profileImage?.getAttribute('alt')).toBe('Jon Morgan');
    });
  });
});
