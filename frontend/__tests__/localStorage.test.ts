/**
 * Tests for localStorage utilities
 */

import { getStorageItem, setStorageItem, removeStorageItem, clearStorage, safeJsonParse } from '../lib/localStorage';

describe('localStorage utilities', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('setStorageItem', () => {
    it('should save data to localStorage', () => {
      const data = { name: 'John', age: 30 };
      const result = setStorageItem('user', data);
      
      expect(result).toBe(true);
      expect(localStorage.getItem('user')).toBe(JSON.stringify(data));
    });

    it('should save string data', () => {
      const result = setStorageItem('token', 'abc123');
      
      expect(result).toBe(true);
      expect(localStorage.getItem('token')).toBe(JSON.stringify('abc123'));
    });

    it('should save array data', () => {
      const data = [1, 2, 3];
      const result = setStorageItem('numbers', data);
      
      expect(result).toBe(true);
      expect(localStorage.getItem('numbers')).toBe(JSON.stringify(data));
    });

    it('should handle large objects', () => {
      const largeData = {
        items: Array.from({ length: 1000 }, (_, i) => ({ id: i, value: `item-${i}` }))
      };
      
      const result = setStorageItem('large', largeData);
      expect(result).toBe(true);
    });
  });

  describe('getStorageItem', () => {
    it('should retrieve stored data', () => {
      const data = { name: 'John', age: 30 };
      localStorage.setItem('user', JSON.stringify(data));
      
      const result = getStorageItem('user', {});
      expect(result).toEqual(data);
    });

    it('should return default value if key does not exist', () => {
      const defaultValue = { name: 'Unknown' };
      const result = getStorageItem('nonexistent', defaultValue);
      
      expect(result).toEqual(defaultValue);
    });

    it('should return default value for corrupted data', () => {
      localStorage.setItem('corrupt', '{invalid json}');
      const defaultValue = [];
      const result = getStorageItem('corrupt', defaultValue);
      
      expect(result).toEqual(defaultValue);
    });

    it('should parse JSON correctly', () => {
      const data = { items: [1, 2, 3], name: 'test' };
      localStorage.setItem('data', JSON.stringify(data));
      
      const result = getStorageItem('data', null);
      expect(result).toEqual(data);
    });
  });

  describe('removeStorageItem', () => {
    it('should remove stored item', () => {
      localStorage.setItem('key', 'value');
      expect(localStorage.getItem('key')).toBe('value');
      
      const result = removeStorageItem('key');
      expect(result).toBe(true);
      expect(localStorage.getItem('key')).toBeNull();
    });

    it('should handle removing non-existent item', () => {
      const result = removeStorageItem('nonexistent');
      expect(result).toBe(true);
    });
  });

  describe('clearStorage', () => {
    it('should clear all localStorage items', () => {
      localStorage.setItem('key1', 'value1');
      localStorage.setItem('key2', 'value2');
      
      const result = clearStorage();
      expect(result).toBe(true);
      expect(localStorage.length).toBe(0);
    });

    it('should handle clearing empty storage', () => {
      const result = clearStorage();
      expect(result).toBe(true);
    });
  });

  describe('safeJsonParse', () => {
    it('should parse valid JSON', () => {
      const jsonString = '{"name":"John","age":30}';
      const result = safeJsonParse(jsonString, null);
      
      expect(result).toEqual({ name: 'John', age: 30 });
    });

    it('should return default value for invalid JSON', () => {
      const defaultValue = { name: 'Unknown' };
      const result = safeJsonParse('{invalid}', defaultValue);
      
      expect(result).toEqual(defaultValue);
    });

    it('should parse arrays', () => {
      const jsonString = '[1,2,3]';
      const result = safeJsonParse(jsonString, []);
      
      expect(result).toEqual([1, 2, 3]);
    });

    it('should parse primitives', () => {
      expect(safeJsonParse('"hello"', '')).toBe('hello');
      expect(safeJsonParse('123', 0)).toBe(123);
      expect(safeJsonParse('true', false)).toBe(true);
    });

    it('should handle null JSON', () => {
      const result = safeJsonParse('null', 'default');
      expect(result).toBeNull();
    });
  });

  describe('Round trip operations', () => {
    it('should save and retrieve data correctly', () => {
      const originalData = {
        id: 1,
        name: 'John',
        email: 'john@example.com',
        tags: ['developer', 'tester'],
        active: true
      };

      setStorageItem('user', originalData);
      const retrievedData = getStorageItem('user', null);

      expect(retrievedData).toEqual(originalData);
    });

    it('should handle nested objects', () => {
      const complexData = {
        user: {
          profile: {
            name: 'John',
            contacts: {
              email: 'john@example.com',
              phone: '1234567890'
            }
          },
          preferences: {
            theme: 'dark',
            language: 'en'
          }
        }
      };

      setStorageItem('complex', complexData);
      const retrieved = getStorageItem('complex', null);

      expect(retrieved).toEqual(complexData);
    });

    it('should update existing data', () => {
      const initialData = { count: 1 };
      setStorageItem('counter', initialData);
      
      const updated = { count: 2 };
      setStorageItem('counter', updated);
      
      const retrieved = getStorageItem('counter', null);
      expect(retrieved).toEqual(updated);
      expect(retrieved.count).toBe(2);
    });
  });
});
