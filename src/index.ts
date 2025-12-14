/**
 * Main entry point for the portfolio website
 */

/**
 * Initialize the application when DOM is ready
 */
function init(): void {
  // eslint-disable-next-line no-console
  console.log('Portfolio loaded');

  // Add any initialization logic here
  // For example: analytics, event listeners, etc.
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

export { init };
