/**
 * Tests for validation utilities
 */

import { validators, validateField, validateForm, getFieldError, validateAge, validateBloodPressure, validateTemperature, validateHeartRate, validateWeight, validateHeight } from '../lib/validation';

describe('Validators', () => {
  describe('required validator', () => {
    it('should return error for empty string', () => {
      const error = validators.required('', 'Name');
      expect(error).not.toBeNull();
      expect(error?.message).toContain('required');
    });

    it('should return error for null', () => {
      const error = validators.required(null, 'Name');
      expect(error).not.toBeNull();
    });

    it('should return null for non-empty string', () => {
      const error = validators.required('John', 'Name');
      expect(error).toBeNull();
    });

    it('should return error for whitespace only', () => {
      const error = validators.required('   ', 'Name');
      expect(error).not.toBeNull();
    });
  });

  describe('email validator', () => {
    it('should accept valid email', () => {
      const error = validators.email('test@example.com', 'Email');
      expect(error).toBeNull();
    });

    it('should reject invalid email', () => {
      const error = validators.email('invalid-email', 'Email');
      expect(error).not.toBeNull();
    });

    it('should reject email without domain', () => {
      const error = validators.email('test@', 'Email');
      expect(error).not.toBeNull();
    });

    it('should accept empty string (optional field)', () => {
      const error = validators.email('', 'Email');
      expect(error).toBeNull();
    });
  });

  describe('phone validator', () => {
    it('should accept valid phone number', () => {
      const error = validators.phone('+1-234-567-8900', 'Phone');
      expect(error).toBeNull();
    });

    it('should accept phone with spaces', () => {
      const error = validators.phone('(123) 456 7890', 'Phone');
      expect(error).toBeNull();
    });

    it('should reject short number', () => {
      const error = validators.phone('12345', 'Phone');
      expect(error).not.toBeNull();
    });

    it('should reject invalid characters', () => {
      const error = validators.phone('abc-def-ghij', 'Phone');
      expect(error).not.toBeNull();
    });
  });

  describe('minLength validator', () => {
    it('should accept string longer than minimum', () => {
      const error = validators.minLength(3)('hello', 'Name');
      expect(error).toBeNull();
    });

    it('should reject string shorter than minimum', () => {
      const error = validators.minLength(5)('hi', 'Name');
      expect(error).not.toBeNull();
    });

    it('should accept exact length', () => {
      const error = validators.minLength(5)('hello', 'Name');
      expect(error).toBeNull();
    });
  });

  describe('numeric validator', () => {
    it('should accept numeric string', () => {
      const error = validators.numeric('123', 'Age');
      expect(error).toBeNull();
    });

    it('should accept number', () => {
      const error = validators.numeric(123, 'Age');
      expect(error).toBeNull();
    });

    it('should reject non-numeric string', () => {
      const error = validators.numeric('abc', 'Age');
      expect(error).not.toBeNull();
    });

    it('should accept empty string', () => {
      const error = validators.numeric('', 'Age');
      expect(error).toBeNull();
    });
  });

  describe('min validator', () => {
    it('should accept value greater than minimum', () => {
      const error = validators.min(18)(25, 'Age');
      expect(error).toBeNull();
    });

    it('should accept value equal to minimum', () => {
      const error = validators.min(18)(18, 'Age');
      expect(error).toBeNull();
    });

    it('should reject value less than minimum', () => {
      const error = validators.min(18)(15, 'Age');
      expect(error).not.toBeNull();
    });
  });

  describe('max validator', () => {
    it('should accept value less than maximum', () => {
      const error = validators.max(100)(50, 'Score');
      expect(error).toBeNull();
    });

    it('should accept value equal to maximum', () => {
      const error = validators.max(100)(100, 'Score');
      expect(error).toBeNull();
    });

    it('should reject value greater than maximum', () => {
      const error = validators.max(100)(150, 'Score');
      expect(error).not.toBeNull();
    });
  });

  describe('pattern validator', () => {
    it('should accept matching pattern', () => {
      const error = validators.pattern(/^[A-Z]/), 'Must start with uppercase')('Hello', 'Name');
      expect(error).toBeNull();
    });

    it('should reject non-matching pattern', () => {
      const error = validators.pattern(/^[A-Z]/, 'Must start with uppercase')('hello', 'Name');
      expect(error).not.toBeNull();
    });
  });
});

describe('Medical Validators', () => {
  describe('validateAge', () => {
    it('should accept valid age', () => {
      const error = validateAge(25);
      expect(error).toBeNull();
    });

    it('should reject negative age', () => {
      const error = validateAge(-5);
      expect(error).not.toBeNull();
    });

    it('should reject age over 150', () => {
      const error = validateAge(160);
      expect(error).not.toBeNull();
    });

    it('should accept string age', () => {
      const error = validateAge('25');
      expect(error).toBeNull();
    });

    it('should reject non-numeric string', () => {
      const error = validateAge('abc');
      expect(error).not.toBeNull();
    });
  });

  describe('validateBloodPressure', () => {
    it('should accept valid blood pressure', () => {
      const error = validateBloodPressure(120, 80);
      expect(error).toBeNull();
    });

    it('should reject systolic lower than 40', () => {
      const error = validateBloodPressure(35, 80);
      expect(error).not.toBeNull();
    });

    it('should reject systolic higher than 250', () => {
      const error = validateBloodPressure(260, 80);
      expect(error).not.toBeNull();
    });

    it('should reject diastolic higher than systolic', () => {
      const error = validateBloodPressure(100, 120);
      expect(error).not.toBeNull();
    });
  });

  describe('validateTemperature', () => {
    it('should accept normal temperature', () => {
      const error = validateTemperature(37);
      expect(error).toBeNull();
    });

    it('should reject temperature below 35', () => {
      const error = validateTemperature(34);
      expect(error).not.toBeNull();
    });

    it('should reject temperature above 42', () => {
      const error = validateTemperature(43);
      expect(error).not.toBeNull();
    });

    it('should accept fever temperature', () => {
      const error = validateTemperature(39.5);
      expect(error).toBeNull();
    });
  });

  describe('validateHeartRate', () => {
    it('should accept normal heart rate', () => {
      const error = validateHeartRate(72);
      expect(error).toBeNull();
    });

    it('should reject below 30 bpm', () => {
      const error = validateHeartRate(20);
      expect(error).not.toBeNull();
    });

    it('should reject above 200 bpm', () => {
      const error = validateHeartRate(250);
      expect(error).not.toBeNull();
    });
  });

  describe('validateWeight', () => {
    it('should accept valid weight', () => {
      const error = validateWeight(70);
      expect(error).toBeNull();
    });

    it('should reject zero weight', () => {
      const error = validateWeight(0);
      expect(error).not.toBeNull();
    });

    it('should reject weight above 500kg', () => {
      const error = validateWeight(600);
      expect(error).not.toBeNull();
    });
  });

  describe('validateHeight', () => {
    it('should accept valid height', () => {
      const error = validateHeight(175);
      expect(error).toBeNull();
    });

    it('should reject height below 50cm', () => {
      const error = validateHeight(40);
      expect(error).not.toBeNull();
    });

    it('should reject height above 250cm', () => {
      const error = validateHeight(260);
      expect(error).not.toBeNull();
    });
  });
});

describe('validateForm', () => {
  it('should validate all fields and return errors', () => {
    const formData = {
      name: '',
      age: '25',
      email: 'invalid-email'
    };

    const rules = {
      name: [(value) => validators.required(value, 'Name')],
      age: [(value) => validators.numeric(value, 'Age')],
      email: [(value) => validators.email(value, 'Email')]
    };

    const result = validateForm(formData, rules);
    expect(result.isValid).toBe(false);
    expect(result.errors.length).toBeGreaterThan(0);
  });

  it('should return no errors for valid form', () => {
    const formData = {
      name: 'John',
      age: '25',
      email: 'john@example.com'
    };

    const rules = {
      name: [(value) => validators.required(value, 'Name')],
      age: [(value) => validators.numeric(value, 'Age')],
      email: [(value) => validators.email(value, 'Email')]
    };

    const result = validateForm(formData, rules);
    expect(result.isValid).toBe(true);
    expect(result.errors.length).toBe(0);
  });
});

describe('getFieldError', () => {
  it('should return error message for field', () => {
    const errors = [
      { field: 'name', message: 'Name is required' },
      { field: 'email', message: 'Invalid email' }
    ];

    const error = getFieldError(errors, 'name');
    expect(error).toBe('Name is required');
  });

  it('should return null if field has no error', () => {
    const errors = [
      { field: 'name', message: 'Name is required' }
    ];

    const error = getFieldError(errors, 'email');
    expect(error).toBeNull();
  });
});