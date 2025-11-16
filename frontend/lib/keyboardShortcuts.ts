/**
 * Keyboard shortcuts management for the application
 */

export type ShortcutHandler = (e: KeyboardEvent) => void;

interface Shortcut {
  key: string;
  ctrl?: boolean;
  shift?: boolean;
  alt?: boolean;
  handler: ShortcutHandler;
  description: string;
}

class KeyboardShortcutManager {
  private shortcuts: Map<string, Shortcut> = new Map();
  private isEnabled: boolean = true;

  /**
   * Register a keyboard shortcut
   */
  register(
    key: string,
    handler: ShortcutHandler,
    description: string,
    modifiers?: { ctrl?: boolean; shift?: boolean; alt?: boolean }
  ): () => void {
    const shortcutKey = this.generateKey(key, modifiers);
    const shortcut: Shortcut = {
      key,
      handler,
      description,
      ctrl: modifiers?.ctrl,
      shift: modifiers?.shift,
      alt: modifiers?.alt
    };

    this.shortcuts.set(shortcutKey, shortcut);

    // Return unregister function
    return () => {
      this.unregister(key, modifiers);
    };
  }

  /**
   * Unregister a keyboard shortcut
   */
  unregister(key: string, modifiers?: { ctrl?: boolean; shift?: boolean; alt?: boolean }): void {
    const shortcutKey = this.generateKey(key, modifiers);
    this.shortcuts.delete(shortcutKey);
  }

  /**
   * Enable/disable shortcuts globally
   */
  setEnabled(enabled: boolean): void {
    this.isEnabled = enabled;
  }

  /**
   * Get all registered shortcuts
   */
  getShortcuts(): Array<{ key: string; description: string; modifiers: string }> {
    return Array.from(this.shortcuts.values()).map(shortcut => ({
      key: shortcut.key,
      description: shortcut.description,
      modifiers: [
        shortcut.ctrl ? 'Ctrl' : '',
        shortcut.shift ? 'Shift' : '',
        shortcut.alt ? 'Alt' : ''
      ]
        .filter(Boolean)
        .join('+')
    }));
  }

  /**
   * Handle keydown event
   */
  handleKeyDown = (e: KeyboardEvent): void => {
    if (!this.isEnabled) return;

    // Don't trigger shortcuts when typing in input/textarea
    const target = e.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
      return;
    }

    const key = e.key.toLowerCase();
    const shortcutKey = this.generateKeyFromEvent(e);

    const shortcut = this.shortcuts.get(shortcutKey);
    if (shortcut) {
      e.preventDefault();
      shortcut.handler(e);
    }
  };

  /**
   * Initialize keyboard listener
   */
  init(): void {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  /**
   * Cleanup keyboard listener
   */
  destroy(): void {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  private generateKey(key: string, modifiers?: { ctrl?: boolean; shift?: boolean; alt?: boolean }): string {
    const parts = [];
    if (modifiers?.ctrl) parts.push('ctrl');
    if (modifiers?.shift) parts.push('shift');
    if (modifiers?.alt) parts.push('alt');
    parts.push(key.toLowerCase());
    return parts.join('+');
  }

  private generateKeyFromEvent(e: KeyboardEvent): string {
    const parts = [];
    if (e.ctrlKey || e.metaKey) parts.push('ctrl');
    if (e.shiftKey) parts.push('shift');
    if (e.altKey) parts.push('alt');
    parts.push(e.key.toLowerCase());
    return parts.join('+');
  }
}

export const shortcutManager = new KeyboardShortcutManager();

/**
 * Common shortcut hooks
 */
export function useKeyboardShortcuts() {
  return {
    register: shortcutManager.register.bind(shortcutManager),
    unregister: shortcutManager.unregister.bind(shortcutManager),
    getShortcuts: shortcutManager.getShortcuts.bind(shortcutManager),
    setEnabled: shortcutManager.setEnabled.bind(shortcutManager)
  };
}

// Initialize shortcuts on module load
shortcutManager.init();
