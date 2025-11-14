# Architecture and Code Quality Guide

This document outlines the architecture, patterns, and best practices used throughout the Docomax application.

## Project Structure

```
frontend/
├── components/           # Reusable UI components
│   ├── ui/              # Base UI components (buttons, cards, dialogs, etc.)
│   ├── FormDialog.tsx   # Reusable form dialog wrapper
│   ├── ErrorBoundary.tsx # Error handling boundary
│   ├── LoadingSpinner.tsx # Loading indicator
│   ├── LoadingSkeleton.tsx # Skeleton loading states
│   ├── Header.tsx       # Navigation header
│   ├── Layout.tsx       # Page layout wrapper
│   └── ...              # Other shared components
├── contexts/            # React Context for state management
│   ├── LanguageContext.tsx # Multi-language support
│   ├── PatientRecordsContext.tsx # Patient data management
│   ├── MoodTrackingContext.tsx # Mental health tracking
│   ├── PainAssessmentContext.tsx # Pain data management
│   ├── AddictionTrackingContext.tsx # Addiction recovery tracking
│   └── ModeContext.tsx  # Personal/Specialist mode toggle
├── data/               # Static data and algorithms
│   ├── diseases/       # Disease definitions by category
│   ├── comprehensiveDiseases.ts # Main disease database
│   ├── triageAlgorithm.ts # Symptom triage logic
│   ├── safetyRules.ts  # Emergency detection rules
│   └── ...             # Other data files
├── lib/                # Utilities and helpers
│   ├── hooks/          # Custom React hooks
│   │   ├── useFormValidation.ts # Form state management
│   │   └── useAsync.ts # Async operation management
│   ├── validation.ts   # Form validation rules
│   ├── localStorage.ts # Safe localStorage utilities
│   ├── accessibility.ts # ARIA and a11y utilities
│   ├── serviceWorker.ts # PWA service worker management
│   ├── dataLoader.ts   # Lazy data loading
│   ├── toast.ts        # Toast notification utilities
│   ├── utils.ts        # General utilities
│   └── favorites.ts    # Favorites management
├── pages/              # Page components
│   ├── Home.tsx        # Dashboard
│   ├── Encyclopedia.tsx # Medical encyclopedia
│   ├── Guides.tsx      # Emergency guides
│   ├── FAQ.tsx         # FAQ page
│   ├── Tools.tsx       # Tools listing
│   ├── records/        # Patient records management
│   │   ├── components/
│   │   │   └── dialogs/ # Record management dialogs
│   │   └── index.tsx
│   └── tools/          # Medical calculators and tools
│       ├── BMICalculator.tsx
│       ├── DosageCalculator.tsx
│       ├── MentalHealth.tsx
│       └── ...
├── __tests__/          # Test files
│   ├── validation.test.ts
│   ├── localStorage.test.ts
│   ├── accessibility.test.ts
│   └── ...
├── App.tsx             # Main app component
├── main.tsx            # Entry point
├── index.css           # Global styles
└── index.html          # HTML template
```

## State Management

### Context Providers

The application uses React Context for state management. All providers are wrapped in App.tsx:

```tsx
<ErrorBoundary>
  <LanguageProvider>
    <ModeProvider>
      <PatientRecordsProvider>
        <MoodTrackingProvider>
          <PainAssessmentProvider>
            <AddictionTrackingProvider>
              {/* App Routes */}
            </AddictionTrackingProvider>
          </PainAssessmentProvider>
        </MoodTrackingProvider>
      </PatientRecordsProvider>
    </ModeProvider>
  </LanguageProvider>
</ErrorBoundary>
```

### Context Overview

| Context | Purpose | Key Functions |
|---------|---------|---------------|
| LanguageContext | Multi-language support | `useLanguage()` |
| ModeContext | Personal/Specialist mode | `useMode()` |
| PatientRecordsContext | Patient data management | `usePatientRecords()` |
| MoodTrackingContext | Mental health tracking | `useMoodTracking()` |
| PainAssessmentContext | Pain data | `usePainAssessment()` |
| AddictionTrackingContext | Recovery tracking | `useAddictionTracking()` |

## Data Flow Patterns

### Patient Records Data Flow

```
1. User creates/edits patient
2. Dialog validates form (useFormValidation hook)
3. Submit handler calls context method
4. Context updates state
5. useEffect saves to localStorage
6. UI updates with new data
```

### Triage Algorithm Data Flow

```
1. User selects symptoms
2. System collects user info (age, gender, risk factors)
3. Triage algorithm calculates disease probabilities
4. Safety checks detect emergencies
5. Results displayed with confidence levels
6. Follow-up questions asked for low-confidence results
```

## Key Features and Implementation

### 1. Multi-Language Support

**Location:** `contexts/LanguageContext.tsx`, `data/translations.ts`

The app supports multiple languages through a translation system:

```tsx
const { t, language, setLanguage } = useLanguage();
const text = t('pages.home.welcome'); // Returns translated text
```

### 2. Patient Records Management

**Location:** `contexts/PatientRecordsContext.tsx`, `pages/records/`

Comprehensive patient data management including:
- Basic patient info (demographics, contact)
- Medical history (visits, diagnoses)
- Medications and allergies
- Lab results and vaccinations
- Attachments and referrals
- Appointments scheduling

Data is stored in localStorage and persists across sessions.

### 3. Triage/Symptom Checker

**Location:** `pages/triage/`, `data/triageAlgorithm.ts`

The triage system uses a Bayesian-like scoring algorithm:

```
1. Symptom scoring based on disease associations
2. Risk factor adjustments (age, gender, medical history)
3. Emergency detection (red flags, critical combinations)
4. Confidence assessment
5. Results ranking by severity and confidence
6. Follow-up questions for clarification
```

### 4. Medical Tools

**Location:** `pages/tools/`

Various medical calculators:
- BMI Calculator
- Dosage Calculator
- Pregnancy Tracker
- Glasgow Coma Scale
- APGAR Score
- And more...

### 5. Mental Health Tracking

**Location:** `pages/tools/MentalHealth.tsx`

Features:
- Mood tracking with scale 1-5
- Stress level assessment
- Sleep hours logging
- Activity tracking
- Journal entries for self-reflection

### 6. Form Validation System

**Location:** `lib/validation.ts`, `lib/hooks/useFormValidation.ts`

Comprehensive form validation with:
- Required field validation
- Email/phone validation
- Length constraints
- Custom medical validators (age, temperature, blood pressure, etc.)
- Real-time error messages

Usage:

```tsx
const { values, errors, handleChange, handleSubmit, getFieldError } = 
  useFormValidation({
    initialValues: { ... },
    validationRules: { ... },
    onSubmit: async (data) => { ... }
  });
```

### 7. Error Handling

**Location:** `components/ErrorBoundary.tsx`, `components/ErrorFallback.tsx`

All errors are caught by the error boundary and displayed to users with:
- User-friendly error message
- Error details in development
- Recovery options (retry, go home)

### 8. Service Worker & PWA

**Location:** `public/sw.js`, `lib/serviceWorker.ts`

Offline support with:
- Service worker registration
- Cache-first strategy for static assets
- Network-first for navigation
- Automatic cache updates
- Update notifications

### 9. Data Loader with Caching

**Location:** `lib/dataLoader.ts`

Lazy-loaded data modules with in-memory caching:

```tsx
const data = await loadComprehensiveDiseases();
// Subsequent calls return cached data
```

### 10. Toast Notifications

**Location:** `lib/toast.ts`

Predefined toast messages for common scenarios:

```tsx
showSuccessToast(toast, 'Patient added successfully');
showErrorToast(toast, predefinedToasts.networkError());
showRetryableToast(toast, message, onRetry);
```

## Coding Standards and Patterns

### Component Structure

All components follow this structure:

```tsx
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
// ... other imports

interface ComponentProps {
  prop1: string;
  prop2?: number;
}

export default function ComponentName({ prop1, prop2 }: ComponentProps) {
  const { t } = useLanguage();
  
  // State and hooks
  const [state, setState] = useState(initialValue);
  
  // Effects
  useEffect(() => {
    // Setup
    return () => {
      // Cleanup
    };
  }, [dependencies]);
  
  // Handlers
  const handleEvent = () => {
    // Implementation
  };
  
  // Render
  return <div>{/* JSX */}</div>;
}
```

### Dialog Component Pattern

Use the `FormDialog` component with `useFormValidation`:

```tsx
const validationRules = {
  fieldName: [
    (value) => validators.required(value, 'Field Name'),
    (value) => validators.minLength(3)(value, 'Field Name')
  ]
};

const { values, errors, handleChange, handleSubmit } = useFormValidation({
  initialValues: { ... },
  validationRules,
  onSubmit: async (data) => { ... }
});

return (
  <FormDialog
    isOpen={isOpen}
    onClose={onClose}
    title={t('dialog.title')}
    onSubmit={handleSubmit()}
  >
    <FormField label="Field" error={getFieldError('fieldName')}>
      <Input name="fieldName" value={values.fieldName} onChange={handleChange} />
    </FormField>
  </FormDialog>
);
```

### Hook Usage

Custom hooks are used for complex state logic:

```tsx
// Form validation
const form = useFormValidation({...});

// Async operations
const { data, isLoading, error, execute } = useAsync(fetchData);

// Language
const { t, language } = useLanguage();

// Context data
const { patients, addPatient } = usePatientRecords();
```

### Error Handling

Always handle errors gracefully:

```tsx
try {
  const result = await riskyOperation();
} catch (error) {
  console.error('Operation failed:', error);
  showErrorToast(toast, 'An error occurred');
}
```

### localStorage Usage

Always use the safe utilities:

```tsx
import { getStorageItem, setStorageItem } from '../lib/localStorage';

const data = getStorageItem('key', defaultValue);
setStorageItem('key', data);
```

## Performance Optimization

### Code Splitting

Data modules are lazy-loaded on demand:

```tsx
const data = await loadComprehensiveDiseases();
```

### Memoization

Use `useMemo` for expensive computations:

```tsx
const results = useMemo(() => {
  return calculateResults(symptoms, userInfo);
}, [symptoms, userInfo]);
```

### Lazy Routes

Route components can be split dynamically:

```tsx
<Route path="/encyclopedia" element={<Encyclopedia />} />
```

## Testing

### Test Structure

Tests are located in `__tests__/` folder with `.test.ts` suffix:

```tsx
describe('FeatureName', () => {
  describe('specific functionality', () => {
    it('should do something', () => {
      // Arrange
      const input = ...;
      
      // Act
      const result = functionUnderTest(input);
      
      // Assert
      expect(result).toBe(expected);
    });
  });
});
```

### Test Coverage

Ensure tests cover:
- Happy path
- Error cases
- Edge cases
- Integration scenarios

## Accessibility (A11y)

### ARIA Attributes

Use accessibility utilities:

```tsx
import { getFormFieldAria, getButtonAria } from '../lib/accessibility';

<input {...getFormFieldAria('Email', { required: true, invalid: hasError })} />
```

### Semantic HTML

Always use semantic elements:

```tsx
// Good
<nav>Navigation</nav>
<section aria-labelledby="title"><h1 id="title">Title</h1></section>
<main>Content</main>

// Avoid
<div class="nav">Navigation</div>
```

### Focus Management

Ensure keyboard navigation works:
- Tab through all interactive elements
- Focus visible indicators
- Logical tab order

## Documentation

### Inline Comments

Comment why, not what:

```tsx
// Good
// We cache results to avoid recalculating for the same input
const cachedResult = results.get(input) || calculateResult(input);

// Avoid
// Set result to cached value
const result = cache.get(key);
```

### Complex Algorithms

Document algorithm logic:

```tsx
/**
 * Calculates disease probability using Bayesian approach
 * 
 * Formula: P(disease|symptoms) = P(symptoms|disease) * P(disease) / P(symptoms)
 * 
 * Steps:
 * 1. Get baseline disease probability
 * 2. Calculate symptom likelihood for each disease
 * 3. Apply risk factor adjustments
 * 4. Normalize probabilities
 * 
 * @param symptoms - Selected symptoms
 * @param userInfo - User demographics and risk factors
 * @returns Array of diseases with probabilities
 */
export function calculateDiseaseProbability(symptoms, userInfo) {
  // Implementation
}
```

## Best Practices Checklist

- [ ] Components are focused and single-responsibility
- [ ] State is managed with appropriate tools (Context, hooks)
- [ ] Forms use validation utilities
- [ ] Errors are caught and handled gracefully
- [ ] localStorage uses safe utilities
- [ ] Async operations use useAsync hook
- [ ] ARIA attributes are present where needed
- [ ] Performance optimizations (memoization, lazy loading)
- [ ] Tests cover critical paths
- [ ] Code follows naming conventions
- [ ] Comments explain "why", not "what"
- [ ] TypeScript types are properly defined

## Continuous Improvement

Regularly review:
1. Error logs for common failures
2. User feedback for UX improvements
3. Performance metrics
4. Test coverage
5. Accessibility compliance
6. Code duplication opportunities
