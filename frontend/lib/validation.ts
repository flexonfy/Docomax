/**
 * Form validation utilities and rules
 */

export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

// Validation rule functions
export const validators = {
  required: (value: any, fieldName: string): ValidationError | null => {
    if (!value || (typeof value === 'string' && value.trim() === '')) {
      return { field: fieldName, message: `${fieldName} is required` };
    }
    return null;
  },

  email: (value: string, fieldName: string): ValidationError | null => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !emailRegex.test(value)) {
      return { field: fieldName, message: `${fieldName} must be a valid email address` };
    }
    return null;
  },

  phone: (value: string, fieldName: string): ValidationError | null => {
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    if (value && !phoneRegex.test(value)) {
      return { field: fieldName, message: `${fieldName} must be a valid phone number` };
    }
    return null;
  },

  minLength: (minLen: number) => (value: string, fieldName: string): ValidationError | null => {
    if (value && value.length < minLen) {
      return { field: fieldName, message: `${fieldName} must be at least ${minLen} characters long` };
    }
    return null;
  },

  maxLength: (maxLen: number) => (value: string, fieldName: string): ValidationError | null => {
    if (value && value.length > maxLen) {
      return { field: fieldName, message: `${fieldName} must not exceed ${maxLen} characters` };
    }
    return null;
  },

  min: (minVal: number) => (value: number | string, fieldName: string): ValidationError | null => {
    const num = typeof value === 'string' ? parseFloat(value) : value;
    if (value !== '' && value !== undefined && num < minVal) {
      return { field: fieldName, message: `${fieldName} must be at least ${minVal}` };
    }
    return null;
  },

  max: (maxVal: number) => (value: number | string, fieldName: string): ValidationError | null => {
    const num = typeof value === 'string' ? parseFloat(value) : value;
    if (value !== '' && value !== undefined && num > maxVal) {
      return { field: fieldName, message: `${fieldName} must not exceed ${maxVal}` };
    }
    return null;
  },

  numeric: (value: any, fieldName: string): ValidationError | null => {
    if (value !== '' && value !== undefined && isNaN(Number(value))) {
      return { field: fieldName, message: `${fieldName} must be a number` };
    }
    return null;
  },

  date: (value: any, fieldName: string): ValidationError | null => {
    if (value && isNaN(Date.parse(value))) {
      return { field: fieldName, message: `${fieldName} must be a valid date` };
    }
    return null;
  },

  pattern: (regex: RegExp, errorMsg?: string) => (value: string, fieldName: string): ValidationError | null => {
    if (value && !regex.test(value)) {
      return { field: fieldName, message: errorMsg || `${fieldName} format is invalid` };
    }
    return null;
  },

  custom: (validatorFn: (value: any) => boolean, errorMsg: string) => (value: any, fieldName: string): ValidationError | null => {
    if (!validatorFn(value)) {
      return { field: fieldName, message: errorMsg };
    }
    return null;
  }
};

/**
 * Validate a field with multiple rules
 */
export function validateField(
  value: any,
  fieldName: string,
  rules: Array<(value: any, fieldName: string) => ValidationError | null>
): ValidationError[] {
  const errors: ValidationError[] = [];

  for (const rule of rules) {
    const error = rule(value, fieldName);
    if (error) {
      errors.push(error);
    }
  }

  return errors;
}

/**
 * Validate multiple fields at once
 */
export function validateForm(
  formData: Record<string, any>,
  validationRules: Record<string, Array<(value: any, fieldName: string) => ValidationError | null>>
): ValidationResult {
  const allErrors: ValidationError[] = [];

  for (const [fieldName, rules] of Object.entries(validationRules)) {
    const value = formData[fieldName];
    const fieldErrors = validateField(value, fieldName, rules);
    allErrors.push(...fieldErrors);
  }

  return {
    isValid: allErrors.length === 0,
    errors: allErrors
  };
}

/**
 * Get error message for a specific field
 */
export function getFieldError(errors: ValidationError[], fieldName: string): string | null {
  const error = errors.find(err => err.field === fieldName);
  return error ? error.message : null;
}

/**
 * Age validation helper
 */
export const validateAge = (age: number | string): ValidationError | null => {
  const ageNum = typeof age === 'string' ? parseInt(age, 10) : age;
  
  if (isNaN(ageNum)) {
    return { field: 'age', message: 'Age must be a valid number' };
  }
  
  if (ageNum < 0) {
    return { field: 'age', message: 'Age cannot be negative' };
  }
  
  if (ageNum > 150) {
    return { field: 'age', message: 'Age must be less than 150' };
  }
  
  return null;
};

/**
 * Blood pressure validation helper
 */
export const validateBloodPressure = (systolic: number, diastolic: number): ValidationError | null => {
  if (systolic < 40 || systolic > 250) {
    return { field: 'bloodPressure', message: 'Systolic pressure must be between 40 and 250' };
  }
  
  if (diastolic < 20 || diastolic > 150) {
    return { field: 'bloodPressure', message: 'Diastolic pressure must be between 20 and 150' };
  }
  
  if (systolic <= diastolic) {
    return { field: 'bloodPressure', message: 'Systolic pressure must be higher than diastolic' };
  }
  
  return null;
};

/**
 * Temperature validation helper
 */
export const validateTemperature = (temp: number): ValidationError | null => {
  if (temp < 35 || temp > 42) {
    return { field: 'temperature', message: 'Temperature must be between 35°C and 42°C' };
  }
  
  return null;
};

/**
 * Heart rate validation helper
 */
export const validateHeartRate = (heartRate: number): ValidationError | null => {
  if (heartRate < 30 || heartRate > 200) {
    return { field: 'heartRate', message: 'Heart rate must be between 30 and 200 bpm' };
  }
  
  return null;
};

/**
 * Weight validation helper
 */
export const validateWeight = (weight: number): ValidationError | null => {
  if (weight < 1 || weight > 500) {
    return { field: 'weight', message: 'Weight must be between 1 kg and 500 kg' };
  }
  
  return null;
};

/**
 * Height validation helper
 */
export const validateHeight = (height: number): ValidationError | null => {
  if (height < 50 || height > 250) {
    return { field: 'height', message: 'Height must be between 50 cm and 250 cm' };
  }
  
  return null;
};
