import React, { useEffect } from 'react';

interface AccessibilityEnhancementsProps {
  children: React.ReactNode;
}

/**
 * Applies accessibility enhancements globally
 */
export default function AccessibilityEnhancements({
  children
}: AccessibilityEnhancementsProps) {
  useEffect(() => {
    // Skip to main content link for keyboard navigation
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'sr-only focus:not-sr-only fixed top-0 left-0 z-50 p-2 m-2 bg-blue-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Focus management - highlight focused elements
    const style = document.createElement('style');
    style.textContent = `
      /* Ensure all interactive elements have visible focus states */
      button:focus,
      a:focus,
      input:focus,
      select:focus,
      textarea:focus {
        outline: 2px solid #0ea5e9;
        outline-offset: 2px;
      }

      /* Focus visible only for keyboard navigation */
      button:focus:not(:focus-visible),
      a:focus:not(:focus-visible),
      input:focus:not(:focus-visible),
      select:focus:not(:focus-visible),
      textarea:focus:not(:focus-visible) {
        outline: none;
      }

      /* Improve visible focus for keyboard navigation */
      *:focus-visible {
        outline: 2px solid #0ea5e9;
        outline-offset: 2px;
      }

      /* Screen reader only class */
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
      }

      /* Focus visible state for screen readers */
      .sr-only:focus,
      .sr-only:focus-visible {
        position: static;
        width: auto;
        height: auto;
        overflow: visible;
        clip: auto;
        white-space: normal;
      }

      /* High contrast mode support */
      @media (prefers-contrast: more) {
        body {
          text-decoration-skip-ink: none;
        }

        button, a, input[type="button"], input[type="submit"] {
          border-width: 2px;
        }
      }

      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }

      /* Dark mode preference */
      @media (prefers-color-scheme: dark) {
        /* These can be overridden by the app's theme system */
      }

      /* Better readability for dyslexic users */
      @media (prefers-color-scheme: dark) {
        body {
          letter-spacing: 0.05em;
          line-height: 1.8;
        }
      }
    `;
    document.head.appendChild(style);

    // Announce route changes for screen readers
    const announcer = document.createElement('div');
    announcer.id = 'sr-announcer';
    announcer.className = 'sr-only';
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    document.body.appendChild(announcer);

    // Cleanup
    return () => {
      skipLink.remove();
      style.remove();
      announcer.remove();
    };
  }, []);

  return <>{children}</>;
}
