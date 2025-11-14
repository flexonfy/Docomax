# Accessibility Improvements Guide

This document outlines accessibility improvements implemented and those that should be done across the application to ensure WCAG 2.1 AA compliance.

## Implemented Improvements

### 1. Accessibility Utilities (`lib/accessibility.ts`)
- ARIA labels for common components
- Form field ARIA attributes helper
- Button ARIA attributes helper
- Focus trap implementation for modals
- Screen reader announcement utility
- Keyboard navigation testing tools
- Color contrast validation

### 2. CSS Utilities (`index.css`)
- `sr-only` class for screen reader only content
- `not-sr-only` class for showing hidden content on focus
- `focus-visible` variant for visible focus styles

### 3. OfflineIndicator Component
- Already includes proper semantic HTML
- Uses icons with text labels

## Recommended Improvements

### 1. Main Navigation (Header Component)
```tsx
// Add to Header.tsx
<nav aria-label="Main navigation" role="navigation">
  {/* navigation items */}
</nav>

// Links should have clear labels
<Link to="/triage" aria-label="Symptom Checker - Check your symptoms">
  Symptom Checker
</Link>
```

### 2. Form Accessibility
```tsx
// Use FormField component with ARIA attributes
import { getFormFieldAria } from '../lib/accessibility';

<input
  {...getFormFieldAria('email', {
    required: true,
    invalid: hasError,
    errorId: 'email-error'
  })}
  aria-describedby={hasError ? 'email-error' : undefined}
/>
{hasError && <span id="email-error" className="error-text">{errorMessage}</span>}
```

### 3. Triage Results Component
```tsx
// Add semantic landmarks
<section aria-labelledby="results-title" role="region">
  <h1 id="results-title">Triage Results</h1>
  
  {/* Emergency warning */}
  {isEmergency && (
    <div role="alert" aria-live="assertive" className="emergency-banner">
      Seek immediate medical attention
    </div>
  )}
  
  {/* Results list */}
  <ol aria-label="Diagnosis results">
    {results.map((result, idx) => (
      <li key={idx} aria-posinset={idx + 1} aria-setsize={results.length}>
        {/* result content */}
      </li>
    ))}
  </ol>
</section>
```

### 4. Data Tables (Records View)
```tsx
// Add table accessibility
<table role="grid" aria-label="Patient records">
  <thead>
    <tr>
      <th scope="col">
        <button
          aria-label="Sort by name, ascending"
          onClick={() => sort('name', 'asc')}
        >
          Name {sortIndicator}
        </button>
      </th>
      {/* other headers */}
    </tr>
  </thead>
  <tbody>
    {/* table rows */}
  </tbody>
</table>
```

### 5. Modal Dialogs
```tsx
// Add focus trap and ARIA
<dialog 
  open={isOpen}
  aria-labelledby="dialog-title"
  aria-describedby="dialog-description"
  role="dialog"
  aria-modal="true"
>
  <h2 id="dialog-title">Dialog Title</h2>
  <p id="dialog-description">Dialog description</p>
  {/* content */}
</dialog>
```

### 6. Skip Links
Add skip navigation link to Layout component:
```tsx
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>

<main id="main-content">
  {/* main content */}
</main>
```

### 7. Color Contrast
Review and update colors to meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text):

Current areas to check:
- Chart labels and values
- Status badges
- Links without underline
- Input placeholders
- Disabled button text

Use `getContrastRatio` utility to test:
```tsx
import { getContrastRatio } from '../lib/accessibility';

const ratio = getContrastRatio('rgb(100, 100, 100)', 'rgb(255, 255, 255)');
console.log(`Contrast ratio: ${ratio}:1`);
// Should be >= 4.5 for normal text
```

### 8. Keyboard Navigation
Ensure all interactive elements are keyboard accessible:

- Tab through all buttons and links
- Shift+Tab to go backwards
- Enter to activate buttons
- Space to toggle checkboxes
- Arrow keys for menu navigation

Test using accessibility utilities:
```tsx
import { testKeyboardNavigation } from '../lib/accessibility';
testKeyboardNavigation(); // Run in browser console
```

### 9. Images and Icons
All images should have alt text:
```tsx
// For decorative icons, use aria-hidden
<Icon className="decorative" aria-hidden="true" />

// For meaningful icons, provide text
<Icon className="status" /> 
<span className="sr-only">Status: Active</span>

// Or use title
<img src="chart.png" alt="Patient vital signs over 30 days" />
```

### 10. Language Attributes
Ensure language attribute is set:
```tsx
// In index.html
<html lang="en">
  {/* content */}
</html>

// For other languages
<html lang="es"> {/* Spanish */}
<html lang="fr"> {/* French */}
```

## Testing Checklist

### Automated Tools
- [ ] Run Lighthouse accessibility audit
- [ ] Use axe DevTools browser extension
- [ ] WAVE browser extension
- [ ] Color Contrast Analyzer

### Manual Testing
- [ ] Test with keyboard only (no mouse)
- [ ] Test with screen reader (NVDA, JAWS, VoiceOver)
- [ ] Check focus indicators are visible
- [ ] Verify all form labels are properly associated
- [ ] Test at 200% zoom level
- [ ] Test with high contrast mode

### Screen Readers
- Windows: NVDA (free)
- macOS: VoiceOver (built-in)
- iOS: VoiceOver (built-in)
- Android: TalkBack (built-in)

## Standards Reference

### WCAG 2.1 Level AA
- Perceivable: Content must be visible and understandable
- Operable: Interface must be keyboard and navigation accessible
- Understandable: Content and functionality must be clear
- Robust: Must work with assistive technologies

### Key Requirements
1. **1.4.3 Contrast (Minimum)** - 4.5:1 for normal text
2. **2.1.1 Keyboard** - All functionality accessible via keyboard
3. **2.1.2 No Keyboard Trap** - Focus can move away from components
4. **2.4.3 Focus Order** - Focus order is logical
5. **2.4.7 Focus Visible** - Keyboard focus indicator is visible
6. **3.2.4 Consistent Identification** - Components used consistently
7. **4.1.2 Name, Role, Value** - All components have proper ARIA

## Quick Wins

1. Add skip link to Layout
2. Add ARIA labels to navigation
3. Test color contrast on critical elements
4. Ensure all form fields have labels
5. Add aria-live regions for dynamic content
6. Test keyboard navigation
7. Add focus outlines where missing
8. Verify all images have alt text

## Progressive Enhancement

Implement accessibility improvements incrementally:

1. **Phase 1** (Critical): Navigation, forms, alerts
2. **Phase 2** (Important): Tables, charts, results
3. **Phase 3** (Nice to have): Documentation, edge cases

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [ARIA Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM](https://webaim.org/)
