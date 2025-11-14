# Developer Guide

Welcome to the Docomax healthcare advisor project! This guide will help you understand the codebase and contribute effectively.

## Getting Started

### Prerequisites

- Node.js 16+ or bun
- Git
- A modern code editor (VS Code recommended)

### Initial Setup

1. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **View the app**
   Open http://localhost:5173 in your browser

### Project Configuration

Key configuration files:
- `tsconfig.json` - TypeScript settings
- `vite.config.ts` - Build tool configuration
- `tailwind.config.js` - Tailwind CSS customization
- `package.json` - Dependencies and scripts

## Development Workflow

### Creating a New Feature

1. **Create feature branch**
   ```bash
   git checkout -b feature/my-feature
   ```

2. **Make changes** following coding standards (see ARCHITECTURE.md)

3. **Test your changes**
   ```bash
   npm test
   ```

4. **Commit with descriptive message**
   ```bash
   git commit -m "feat: add new feature description"
   ```

5. **Push and create PR**
   ```bash
   git push origin feature/my-feature
   ```

### Commit Message Format

Follow conventional commits:

```
type(scope): subject

body (optional)
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`

Examples:
- `feat(triage): improve symptom detection accuracy`
- `fix(records): prevent data loss on form close`
- `docs(readme): update installation instructions`

## Common Tasks

### Adding a New Page

1. Create file: `frontend/pages/MyPage.tsx`
2. Add route in `App.tsx`
3. Add navigation link in `Header.tsx`
4. Add translation keys in `data/translations.ts`

Example page structure:

```tsx
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function MyPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">{t('pages.myPage.title')}</h1>
      {/* Content */}
    </div>
  );
}
```

### Adding a New Form Dialog

Use the FormDialog pattern from DIALOG_PATTERNS.md:

```tsx
import { useFormValidation } from '../lib/hooks/useFormValidation';
import { validators } from '../lib/validation';
import FormDialog, { FormField } from '../components/FormDialog';

export default function MyDialog({ isOpen, onClose, onSave }) {
  const { t } = useLanguage();

  const { values, errors, handleChange, handleSubmit, getFieldError } = 
    useFormValidation({
      initialValues: { field1: '' },
      validationRules: {
        field1: [(value) => validators.required(value, 'Field 1')]
      },
      onSubmit: async (data) => {
        onSave(data);
        onClose();
      }
    });

  return (
    <FormDialog
      isOpen={isOpen}
      onClose={onClose}
      title={t('dialog.title')}
      onSubmit={handleSubmit()}
    >
      <FormField label="Field 1" error={getFieldError('field1')} isRequired>
        <Input name="field1" value={values.field1} onChange={handleChange} />
      </FormField>
    </FormDialog>
  );
}
```

### Adding a Medical Tool

1. Create file: `frontend/pages/tools/MyTool.tsx`
2. Add route in `App.tsx`
3. Add to tools list in `pages/Tools.tsx`
4. Add translations

Medical tools should include:
- Clear input fields with validation
- Educational information
- Results presentation
- Mobile responsive design

### Adding a Translation

1. Open `data/translations.ts`
2. Add key to appropriate section:
   ```tsx
   export const translations = {
     pages: {
       myPage: {
         title: { en: 'My Page Title', es: 'Título de Mi Página', ... }
       }
     }
   };
   ```
3. Use in component: `t('pages.myPage.title')`

### Adding a Context/Provider

1. Create file: `frontend/contexts/MyContext.tsx`
2. Define interface and provider
3. Add to `App.tsx`
4. Export hook for using context

Template:

```tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MyContextType {
  value: string;
  setValue: (value: string) => void;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export function MyProvider({ children }: { children: ReactNode }) {
  const [value, setValue] = useState('');

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within MyProvider');
  }
  return context;
}
```

### Adding Tests

Create test file with pattern: `__tests__/myfeature.test.ts`

Template:

```tsx
describe('MyFeature', () => {
  describe('specific functionality', () => {
    it('should work correctly', () => {
      // Arrange
      const input = 'test';

      // Act
      const result = myFunction(input);

      // Assert
      expect(result).toBe('expected');
    });
  });
});
```

## Code Review Checklist

When reviewing or submitting code, check:

- [ ] TypeScript types are properly defined
- [ ] No console.log statements (except errors)
- [ ] Error handling is present
- [ ] Tests pass locally
- [ ] Mobile responsive (test at 375px width)
- [ ] Accessibility (ARIA attributes, keyboard nav)
- [ ] Performance (no unnecessary re-renders)
- [ ] Security (no hardcoded secrets)
- [ ] Follows project patterns (dialogs, forms, etc.)
- [ ] Translations added for all user-visible text

## Debugging Tips

### React DevTools

1. Install React DevTools browser extension
2. Use to inspect component tree
3. Debug state and props

### Network Debugging

1. Open DevTools → Network tab
2. Monitor API calls and responses
3. Check for failed requests

### localStorage Debugging

In browser console:
```js
// View all localStorage
localStorage

// Get specific item
localStorage.getItem('key')

// Set item
localStorage.setItem('key', JSON.stringify(data))

// Clear all
localStorage.clear()
```

### Service Worker Debugging

In DevTools → Application → Service Workers:
- Check registration status
- View logs
- Unregister if needed

## Performance Optimization

### Before Optimizing

Use profiler to identify bottlenecks:

```tsx
import { Profiler } from 'react';

<Profiler id="MyComponent" onRender={onRenderCallback}>
  <MyComponent />
</Profiler>
```

### Common Optimizations

1. **Memoize expensive calculations**
   ```tsx
   const result = useMemo(() => expensiveCalculation(data), [data]);
   ```

2. **Lazy load components**
   ```tsx
   const Heavy = React.lazy(() => import('./HeavyComponent'));
   ```

3. **Debounce user input**
   ```tsx
   const [searchTerm, setSearchTerm] = useState('');
   const debouncedSearch = useMemo(() => debounce(search, 300), []);
   ```

4. **Virtual scrolling for large lists**
   Use react-window for long lists

## Common Issues and Solutions

### Issue: Components re-rendering excessively

Solution: Check dependencies in useEffect and useCallback

### Issue: localStorage data corrupted

Solution: Use getStorageItem utility which handles errors

### Issue: Form validation not working

Solution: Ensure validationRules are properly defined

### Issue: Type errors in TypeScript

Solution:
1. Check component props interface
2. Verify import paths
3. Run `npm run build` to see full errors

### Issue: Service Worker not updating

Solution:
1. Hard refresh (Ctrl+Shift+R)
2. Clear cache in DevTools
3. Unregister and reload

## Useful Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test

# Type check
npx tsc --noEmit

# Format code
npm run format
```

## Project Dependencies

Key libraries:

| Library | Purpose |
|---------|---------|
| React | UI framework |
| React Router | Client-side routing |
| Tailwind CSS | Styling |
| TypeScript | Type safety |
| Lucide React | Icons |
| Recharts | Charts |
| shadcn/ui | UI components |

## Resources

- [ARCHITECTURE.md](./ARCHITECTURE.md) - Project structure and patterns
- [DIALOG_PATTERNS.md](./DIALOG_PATTERNS.md) - Form dialog best practices
- [ACCESSIBILITY.md](./ACCESSIBILITY.md) - A11y guidelines
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## Getting Help

1. Check relevant documentation files
2. Search existing issues/code
3. Ask team members
4. Create detailed issue if needed

## Code Standards

### Naming Conventions

- Components: PascalCase (MyComponent)
- Functions/variables: camelCase (myFunction)
- Constants: UPPER_SNAKE_CASE (MY_CONSTANT)
- Files: match component name or kebab-case (my-file.ts)

### File Organization

Keep files focused:
- One component per file
- Group related functions
- Keep files under 500 lines
- Extract reusable logic

### Import Organization

```tsx
// 1. React and libraries
import React, { useState } from 'react';

// 2. UI components
import { Button } from '@/components/ui/button';

// 3. Custom components
import MyComponent from './MyComponent';

// 4. Contexts
import { useLanguage } from '../contexts/LanguageContext';

// 5. Utilities
import { formatDate } from '../lib/utils';

// 6. Types and constants
import type { MyType } from '../types';
```

## Pro Tips

1. **Use VS Code extensions**
   - ES7+ React/Redux/React-Native snippets
   - Tailwind CSS IntelliSense
   - TypeScript Vue Plugin

2. **Set up auto-formatting**
   - Install Prettier
   - Configure on save

3. **Enable strict mode**
   - Check tsconfig.json for strictNullChecks, etc.
   - Catch errors early

4. **Test in mobile**
   - Use DevTools device emulation
   - Test real device if possible

5. **Keep performance in mind**
   - Profile before optimizing
   - Use React DevTools Profiler
   - Monitor bundle size

## Contributing

1. Follow code standards
2. Write tests for new features
3. Update documentation
4. Request review from team
5. Celebrate merged PR! 🎉
