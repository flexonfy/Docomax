import React, { useState, useEffect } from 'react';
import { Keyboard, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useKeyboardShortcuts } from '../lib/keyboardShortcuts';

interface KeyboardShortcutsHelpProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function KeyboardShortcutsHelp({
  isOpen,
  onClose
}: KeyboardShortcutsHelpProps) {
  const { getShortcuts } = useKeyboardShortcuts();
  const [shortcuts, setShortcuts] = useState<any[]>([]);

  useEffect(() => {
    setShortcuts(getShortcuts());
  }, [getShortcuts]);

  // Register help shortcut
  useEffect(() => {
    const unregister = useKeyboardShortcuts().register(
      '?',
      () => !isOpen && onClose,
      'Show keyboard shortcuts'
    );
    return unregister;
  }, [isOpen, onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <div className="flex items-center space-x-2">
            <Keyboard className="h-5 w-5 text-blue-600" />
            <DialogTitle>Keyboard Shortcuts</DialogTitle>
          </div>
        </DialogHeader>
        
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {shortcuts.length > 0 ? (
            <div className="grid gap-3">
              {shortcuts.map((shortcut, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 text-sm">{shortcut.description}</span>
                  <div className="flex items-center space-x-1">
                    {shortcut.modifiers && (
                      <>
                        {shortcut.modifiers.split('+').map((mod, i) => (
                          <React.Fragment key={i}>
                            {i > 0 && <span className="text-gray-400">+</span>}
                            <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm">
                              {mod}
                            </kbd>
                          </React.Fragment>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <Keyboard className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p>No keyboard shortcuts registered yet.</p>
            </div>
          )}

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800">
              <strong>Tip:</strong> Press <kbd className="px-1 py-0.5 text-xs font-semibold bg-white border border-gray-300 rounded">?</kbd> at any time to show this help dialog.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
