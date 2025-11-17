import { useState, useCallback, useMemo } from 'react';
import { ValidationError, validateForm } from '../validation';

export interface UseFormValidationOptions<T> {
  initialValues: T;
  validationRules?: Record<string, any>;
  onSubmit?: (values: T) => void | Promise<void>;
}

export interface UseFormValidationReturn<T> {
  values: T;
  errors: ValidationError[];
  touched: Record<string, boolean>;
  isDirty: boolean;
  isSubmitting: boolean;
  
  setFieldValue: (field: keyof T, value: any) => void;
  setFieldError: (field: string, message: string) => void;
  setFieldTouched: (field: keyof T, touched: boolean) => void;
  setValues: (values: Partial<T>) => void;
  setErrors: (errors: ValidationError[]) => void;
  
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (onSubmit?: (values: T) => void | Promise<void>) => (e: React.FormEvent) => Promise<void>;
  
  reset: () => void;
  validate: () => boolean;
  getFieldError: (field: string) => string | null;
}

export function useFormValidation<T extends Record<string, any>>(
  options: UseFormValidationOptions<T>
): UseFormValidationReturn<T> {
  const { initialValues, validationRules = {}, onSubmit } = options;

  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isDirty = useMemo(() => {
    return JSON.stringify(values) !== JSON.stringify(initialValues);
  }, [values, initialValues]);

  const setFieldValue = useCallback((field: keyof T, value: any) => {
    setValues(prev => ({ ...prev, [field]: value }));
  }, []);

  const setFieldError = useCallback((field: string, message: string) => {
    setErrors(prev => {
      const filtered = prev.filter(e => e.field !== field);
      return message ? [...filtered, { field, message }] : filtered;
    });
  }, []);

  const setFieldTouched = useCallback((field: keyof T, isTouched: boolean) => {
    setTouched(prev => ({ ...prev, [field]: isTouched }));
  }, []);

  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFieldValue(name as keyof T, newValue);
  }, [setFieldValue]);

  const handleBlur = useCallback((
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name } = e.target;
    setFieldTouched(name as keyof T, true);
  }, [setFieldTouched]);

  const validate = useCallback((): boolean => {
    const result = validateForm(values, validationRules);
    setErrors(result.errors);
    return result.isValid;
  }, [values, validationRules]);

  const handleSubmit = useCallback(
    (customOnSubmit?: (values: T) => void | Promise<void>) => async (e: React.FormEvent) => {
      e.preventDefault();

      if (!validate()) {
        return;
      }

      setIsSubmitting(true);
      try {
        const submitFn = customOnSubmit || onSubmit;
        if (submitFn) {
          await submitFn(values);
        }
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [values, validate, onSubmit]
  );

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors([]);
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  const getFieldError = useCallback((field: string): string | null => {
    const error = errors.find(err => err.field === field);
    return error ? error.message : null;
  }, [errors]);

  return {
    values,
    errors,
    touched,
    isDirty,
    isSubmitting,
    setFieldValue,
    setFieldError,
    setFieldTouched,
    setValues,
    setErrors,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    validate,
    getFieldError
  };
}
