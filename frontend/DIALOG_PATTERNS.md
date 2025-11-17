# Dialog Component Patterns and Best Practices

This document outlines the standardized approach for creating form dialogs in the application to reduce boilerplate and improve consistency.

## Using FormDialog Component

All form dialogs should use the `FormDialog` component along with `useFormValidation` hook for consistency.

### Basic Structure

```tsx
import { useFormValidation } from '../lib/hooks/useFormValidation';
import { validators } from '../lib/validation';
import FormDialog, { FormField, FormRow } from '../components/FormDialog';

interface MyDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: MyDataType) => void;
}

export default function MyDialog({ isOpen, onClose, onSave }: MyDialogProps) {
  const { t } = useLanguage();
  const { toast } = useToast();

  const initialValues = {
    field1: '',
    field2: '',
    // ... other fields
  };

  const validationRules = {
    field1: [
      (value) => validators.required(value, 'Field 1'),
      (value) => validators.minLength(3)(value, 'Field 1')
    ],
    field2: [
      (value) => validators.required(value, 'Field 2'),
      (value) => validators.email(value, 'Field 2')
    ]
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit, reset, getFieldError } = 
    useFormValidation({
      initialValues,
      validationRules,
      onSubmit: async (formData) => {
        onSave(formData);
        toast({ title: t('common.success'), description: 'Data saved successfully' });
        onClose();
        reset();
      }
    });

  useEffect(() => {
    if (!isOpen) reset();
  }, [isOpen, reset]);

  return (
    <FormDialog
      isOpen={isOpen}
      onClose={onClose}
      title={t('dialog.title')}
      description={t('dialog.description')}
      onSubmit={handleSubmit()}
      isSubmitting={isSubmitting}
      submitLabel={t('common.save')}
      cancelLabel={t('common.cancel')}
    >
      <FormRow columns={2}>
        <FormField
          label={t('field1')}
          error={getFieldError('field1')}
          isRequired
        >
          <Input
            name="field1"
            value={values.field1}
            onChange={handleChange}
            placeholder={t('field1.placeholder')}
          />
        </FormField>

        <FormField
          label={t('field2')}
          error={getFieldError('field2')}
          isRequired
        >
          <Input
            name="field2"
            value={values.field2}
            onChange={handleChange}
            placeholder={t('field2.placeholder')}
          />
        </FormField>
      </FormRow>
    </FormDialog>
  );
}
```

## Validation Rules

Always define validation rules for all form fields, even if some are optional.

### Common Validators

```tsx
const validationRules = {
  // Required field
  name: [(value) => validators.required(value, 'Name')],
  
  // Email validation
  email: [(value) => validators.email(value, 'Email')],
  
  // Phone validation
  phone: [(value) => validators.phone(value, 'Phone')],
  
  // Length validation
  notes: [(value) => validators.maxLength(500)(value, 'Notes')],
  
  // Numeric validation
  age: [
    (value) => validators.required(value, 'Age'),
    (value) => validators.numeric(value, 'Age'),
    (value) => validators.min(0)(value, 'Age'),
    (value) => validators.max(150)(value, 'Age')
  ],
  
  // Date validation
  birthDate: [(value) => validators.date(value, 'Birth Date')],
  
  // Custom validation
  password: [
    (value) => validators.required(value, 'Password'),
    (value) => validators.minLength(8)(value, 'Password'),
    (value) => validators.pattern(/[A-Z]/, 'Password must contain uppercase letter')(value, 'Password')
  ]
};
```

## Special Validators

For medical data, use specialized validators:

```tsx
import { validateAge, validateBloodPressure, validateTemperature, validateHeartRate, validateWeight, validateHeight } from '../lib/validation';

const validationRules = {
  age: [
    (value) => validators.required(value, 'Age'),
    validateAge
  ],
  temperature: [
    (value) => validateTemperature(parseFloat(value))
  ],
  heartRate: [
    (value) => validateHeartRate(parseInt(value))
  ],
  weight: [
    (value) => validateWeight(parseFloat(value))
  ]
};
```

## Handling Select/Dropdown Changes

For `Select` components, convert the onChange value to match the form's handleChange pattern:

```tsx
<Select 
  value={values.gender} 
  onValueChange={(value) => {
    const event = { target: { name: 'gender', value } } as any;
    handleChange(event);
  }}
>
  <SelectTrigger><SelectValue /></SelectTrigger>
  <SelectContent>
    <SelectItem value="male">Male</SelectItem>
    <SelectItem value="female">Female</SelectItem>
  </SelectContent>
</Select>
```

## Array Fields

For comma-separated array fields, store as string and convert during submission:

```tsx
// In form
<FormField label="Allergies" error={getFieldError('allergies')}>
  <Input
    name="allergies"
    value={values.allergies}
    onChange={handleChange}
    placeholder="Separate with commas"
  />
</FormField>

// In onSubmit
onSubmit: async (formData) => {
  const processedData = {
    ...formData,
    allergies: formData.allergies 
      ? formData.allergies.split(',').map(a => a.trim())
      : []
  };
  onSave(processedData);
}
```

## Dialog Lifecycle

Always clean up form state when dialog closes:

```tsx
useEffect(() => {
  if (!isOpen) {
    reset(); // Clears all form state
  }
}, [isOpen, reset]);
```

## Benefits of This Pattern

1. **Consistency** - All dialogs follow the same structure
2. **Reduced Boilerplate** - FormDialog handles common UI patterns
3. **Built-in Validation** - useFormValidation handles state and validation
4. **Better UX** - Error messages show inline, loading states managed
5. **Maintainability** - Changes to dialog UI can be made in one place
6. **Testability** - Validation logic is separated and testable

## Migration Path

When refactoring existing dialogs:

1. Keep the existing component working first
2. Extract validation rules
3. Switch to useFormValidation hook
4. Update JSX to use FormDialog, FormField, FormRow
5. Test thoroughly
6. Remove old state management code

## Common Gotchas

- Always include `useEffect` to reset form when dialog closes
- For Select components, manually map onValueChange to handleChange
- Array fields should be stored as comma-separated strings in form
- Don't forget to add `name` attribute to all inputs for handleChange to work
