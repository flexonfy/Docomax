/**
 * Tests for accessibility utilities
 */

import { getFormFieldAria, getButtonAria, getListItemAria, getContrastRatio } from '../lib/accessibility';

describe('Accessibility utilities', () => {
  describe('getFormFieldAria', () => {
    it('should return basic aria-label', () => {
      const aria = getFormFieldAria('Email');
      expect(aria['aria-label']).toBe('Email');
    });

    it('should mark required fields', () => {
      const aria = getFormFieldAria('Name', { required: true });
      expect(aria['aria-required']).toBe(true);
    });

    it('should mark invalid fields', () => {
      const aria = getFormFieldAria('Email', { invalid: true });
      expect(aria['aria-invalid']).toBe(true);
    });

    it('should associate error message', () => {
      const aria = getFormFieldAria('Email', { errorId: 'email-error' });
      expect(aria['aria-describedby']).toBe('email-error');
    });

    it('should associate help text', () => {
      const aria = getFormFieldAria('Password', { helpId: 'password-help' });
      expect(aria['aria-describedby']).toBe('password-help');
    });

    it('should combine error and help IDs', () => {
      const aria = getFormFieldAria('Password', {
        errorId: 'password-error',
        helpId: 'password-help'
      });
      expect(aria['aria-describedby']).toBe('password-error password-help');
    });

    it('should handle all options', () => {
      const aria = getFormFieldAria('Email', {
        required: true,
        invalid: true,
        errorId: 'email-error',
        helpId: 'email-help'
      });

      expect(aria['aria-label']).toBe('Email');
      expect(aria['aria-required']).toBe(true);
      expect(aria['aria-invalid']).toBe(true);
      expect(aria['aria-describedby']).toBe('email-error email-help');
    });
  });

  describe('getButtonAria', () => {
    it('should return basic aria-label', () => {
      const aria = getButtonAria('Submit');
      expect(aria['aria-label']).toBe('Submit');
    });

    it('should mark pressed state', () => {
      const aria = getButtonAria('Bold', { pressed: true });
      expect(aria['aria-pressed']).toBe(true);
    });

    it('should mark unpressed state', () => {
      const aria = getButtonAria('Bold', { pressed: false });
      expect(aria['aria-pressed']).toBe(false);
    });

    it('should mark expanded state', () => {
      const aria = getButtonAria('Menu', { expanded: true });
      expect(aria['aria-expanded']).toBe(true);
    });

    it('should mark collapsed state', () => {
      const aria = getButtonAria('Menu', { expanded: false });
      expect(aria['aria-expanded']).toBe(false);
    });

    it('should mark disabled state', () => {
      const aria = getButtonAria('Submit', { disabled: true });
      expect(aria['aria-disabled']).toBe(true);
    });
  });

  describe('getListItemAria', () => {
    it('should return empty object for basic list item', () => {
      const aria = getListItemAria();
      expect(Object.keys(aria).length).toBe(0);
    });

    it('should mark current item', () => {
      const aria = getListItemAria(true);
      expect(aria['aria-current']).toBe('page');
    });

    it('should not mark non-current item', () => {
      const aria = getListItemAria(false);
      expect(aria['aria-current']).toBeUndefined();
    });

    it('should set position in set', () => {
      const aria = getListItemAria(false, 3, 10);
      expect(aria['aria-posinset']).toBe(3);
      expect(aria['aria-setsize']).toBe(10);
    });

    it('should mark current item with position', () => {
      const aria = getListItemAria(true, 1, 5);
      expect(aria['aria-current']).toBe('page');
      expect(aria['aria-posinset']).toBe(1);
      expect(aria['aria-setsize']).toBe(5);
    });
  });

  describe('getContrastRatio', () => {
    it('should calculate contrast ratio for black and white', () => {
      // White text on black background should have 21:1 contrast
      const ratio = getContrastRatio('rgb(0, 0, 0)', 'rgb(255, 255, 255)');
      expect(ratio).toBeGreaterThan(20);
    });

    it('should calculate contrast ratio for similar colors', () => {
      // Similar colors should have low contrast
      const ratio = getContrastRatio('rgb(100, 100, 100)', 'rgb(110, 110, 110)');
      expect(ratio).toBeLessThan(1.5);
    });

    it('should meet WCAG AA standard for normal text', () => {
      // 4.5:1 ratio is WCAG AA for normal text
      const ratio = getContrastRatio('rgb(0, 0, 0)', 'rgb(255, 255, 255)');
      expect(ratio).toBeGreaterThanOrEqual(4.5);
    });

    it('should meet WCAG AA standard for large text', () => {
      // 3:1 ratio is WCAG AA for large text
      const ratio = getContrastRatio('rgb(50, 50, 50)', 'rgb(200, 200, 200)');
      expect(ratio).toBeGreaterThanOrEqual(3);
    });

    it('should handle various color formats', () => {
      const ratios = [
        getContrastRatio('rgb(0, 0, 0)', 'rgb(255, 255, 255)'),
        getContrastRatio('rgb(0,0,0)', 'rgb(255,255,255)'),
        getContrastRatio('rgb(0, 0, 0 )', 'rgb(255, 255, 255 )')
      ];

      // All should be roughly similar
      ratios.forEach(ratio => {
        expect(ratio).toBeGreaterThan(20);
      });
    });

    it('should calculate different contrast ratios for different colors', () => {
      const ratio1 = getContrastRatio('rgb(0, 0, 0)', 'rgb(255, 0, 0)');
      const ratio2 = getContrastRatio('rgb(0, 0, 0)', 'rgb(0, 255, 0)');
      
      // Red and green have different luminance
      expect(ratio1).not.toBe(ratio2);
    });

    it('should fail for insufficient contrast', () => {
      // Light gray on white should fail WCAG AA for normal text
      const ratio = getContrastRatio('rgb(192, 192, 192)', 'rgb(255, 255, 255)');
      expect(ratio).toBeLessThan(4.5);
    });
  });

  describe('WCAG Compliance', () => {
    it('should achieve AAA contrast ratio for critical text', () => {
      // 7:1 is WCAG AAA
      const ratio = getContrastRatio('rgb(0, 0, 0)', 'rgb(255, 255, 255)');
      expect(ratio).toBeGreaterThanOrEqual(7);
    });

    it('should fail low contrast combination', () => {
      // Very low contrast
      const ratio = getContrastRatio('rgb(200, 200, 200)', 'rgb(210, 210, 210)');
      expect(ratio).toBeLessThan(1.5);
    });

    it('should validate common UI colors', () => {
      // Blue on white (common for links)
      const blueWhite = getContrastRatio('rgb(0, 0, 255)', 'rgb(255, 255, 255)');
      expect(blueWhite).toBeGreaterThanOrEqual(4.5);

      // Green on white (success)
      const greenWhite = getContrastRatio('rgb(0, 128, 0)', 'rgb(255, 255, 255)');
      expect(greenWhite).toBeGreaterThanOrEqual(4.5);

      // Red on white (error)
      const redWhite = getContrastRatio('rgb(255, 0, 0)', 'rgb(255, 255, 255)');
      expect(redWhite).toBeGreaterThanOrEqual(4.5);
    });
  });
});
