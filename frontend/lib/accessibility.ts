/**
 * Accessibility utilities and ARIA attributes
 */

export const ariaLabels = {
  // Navigation
  mainNav: 'Main navigation',
  sidebar: 'Sidebar navigation',
  breadcrumb: 'Breadcrumb navigation',
  
  // Forms
  requiredField: 'Required field',
  errorField: 'This field has an error',
  successField: 'This field is valid',
  
  // Tables
  sortAscending: 'Sort ascending',
  sortDescending: 'Sort descending',
  selectAll: 'Select all rows',
  selectRow: 'Select row',
  
  // Dialogs
  closeDialog: 'Close dialog',
  expandSection: 'Expand section',
  collapseSection: 'Collapse section',
  
  // Search
  searchResults: 'Search results',
  noResults: 'No results found',
  
  // Health specific
  patientInfo: 'Patient information',
  medicalHistory: 'Medical history',
  vitals: 'Vital signs',
  medications: 'Current medications',
  allergies: 'Known allergies',
  appointments: 'Upcoming appointments',
  labResults: 'Lab results',
  
  // Triage
  symptomChecker: 'Symptom checker',
  selectSymptoms: 'Select your symptoms',
  triageResults: 'Triage results',
  emergencyWarning: 'Emergency warning',
  highConfidence: 'High confidence diagnosis',
  mediumConfidence: 'Medium confidence diagnosis',
  lowConfidence: 'Low confidence diagnosis',
  
  // Mood tracking
  moodEntry: 'Mood entry',
  moodScore: 'Mood score',
  stressLevel: 'Stress level',
  journalEntry: 'Journal entry',
  
  // Loading and status
  loading: 'Loading',
  saving: 'Saving',
  saved: 'Saved successfully',
  error: 'An error occurred',
  offline: 'You are currently offline',
  online: 'Connection restored'
};

/**
 * Generate ARIA attributes for form fields
 */
export function getFormFieldAria(
  fieldName: string,
  options?: {
    required?: boolean;
    invalid?: boolean;
    errorId?: string;
    helpId?: string;
  }
) {
  const aria: Record<string, any> = {
    'aria-label': fieldName
  };

  if (options?.required) {
    aria['aria-required'] = true;
  }

  if (options?.invalid) {
    aria['aria-invalid'] = true;
  }

  if (options?.errorId) {
    aria['aria-describedby'] = options.errorId;
  }

  if (options?.helpId) {
    aria['aria-describedby'] = aria['aria-describedby']
      ? `${aria['aria-describedby']} ${options.helpId}`
      : options.helpId;
  }

  return aria;
}

/**
 * Generate ARIA attributes for buttons
 */
export function getButtonAria(label: string, options?: {
  pressed?: boolean;
  expanded?: boolean;
  disabled?: boolean;
}) {
  const aria: Record<string, any> = {
    'aria-label': label
  };

  if (options?.pressed !== undefined) {
    aria['aria-pressed'] = options.pressed;
  }

  if (options?.expanded !== undefined) {
    aria['aria-expanded'] = options.expanded;
  }

  if (options?.disabled) {
    aria['aria-disabled'] = true;
  }

  return aria;
}

/**
 * Generate ARIA attributes for list items
 */
export function getListItemAria(
  current?: boolean,
  position?: number,
  setSize?: number
) {
  const aria: Record<string, any> = {};

  if (current) {
    aria['aria-current'] = 'page';
  }

  if (position && setSize) {
    aria['aria-posinset'] = position;
    aria['aria-setsize'] = setSize;
  }

  return aria;
}

/**
 * Focus trap implementation for modals
 */
export function createFocusTrap(containerElement: HTMLElement) {
  const focusableElements = containerElement.querySelectorAll(
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );

  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key !== 'Tab') return;

    if (event.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      // Tab
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  };

  containerElement.addEventListener('keydown', handleKeyDown);

  return () => {
    containerElement.removeEventListener('keydown', handleKeyDown);
  };
}

/**
 * Announce changes to screen readers
 */
export function announceToScreenReader(
  message: string,
  politeness: 'polite' | 'assertive' = 'polite'
) {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', politeness);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only'; // Screen reader only
  announcement.textContent = message;

  document.body.appendChild(announcement);

  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 3000);
}

/**
 * Skip link for keyboard navigation
 */
export const skipLinkHTML = `
  <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:bg-black focus:text-white focus:p-2">
    Skip to main content
  </a>
`;

/**
 * Screen reader only CSS class
 */
export const srOnlyCSS = `
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

  .focus\\:not-sr-only:focus {
    position: static;
    width: auto;
    height: auto;
    padding: inherit;
    margin: inherit;
    overflow: visible;
    clip: auto;
    white-space: normal;
  }
`;

/**
 * Test for keyboard navigation - run in console
 */
export function testKeyboardNavigation() {
  console.log('Testing keyboard navigation...');
  console.log('1. Press Tab to navigate forward');
  console.log('2. Press Shift+Tab to navigate backward');
  console.log('3. Press Enter to activate buttons');
  console.log('4. Press Space to toggle checkboxes');
  console.log('5. Press Arrow keys in lists/menus');
  
  let tabIndex = 0;
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      tabIndex++;
      console.log(`Tab pressed ${tabIndex} times, current focus:`, document.activeElement);
    }
  });
}

/**
 * Validate color contrast for WCAG compliance
 */
export function getContrastRatio(foreground: string, background: string): number {
  const getLuminance = (color: string): number => {
    const rgb = color.match(/\d+/g);
    if (!rgb || rgb.length < 3) return 0;
    
    const [r, g, b] = [rgb[0], rgb[1], rgb[2]].map(x => {
      const v = parseInt(x) / 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const l1 = getLuminance(foreground);
  const l2 = getLuminance(background);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);

  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Check if element is visible to screen readers
 */
export function isVisibleToScreenReaders(element: HTMLElement): boolean {
  const style = window.getComputedStyle(element);
  return !(
    style.display === 'none' ||
    style.visibility === 'hidden' ||
    style.aria-hidden === 'true'
  );
}
