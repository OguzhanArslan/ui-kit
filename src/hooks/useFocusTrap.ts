import { useEffect, useRef } from 'react';

export interface UseFocusTrapOptions<T extends HTMLElement = HTMLElement> {
  /** Trap aktif mi */
  active?: boolean;
  /** Escape ile trap'ten cikis */
  escapeDeactivates?: boolean;
  /** Escape'e basildiginda cagrilir */
  onEscape?: () => void;
  /** Trap aktif olunca ilk focuslanacak element selector'u */
  initialFocusSelector?: string;
  /** Trap deaktif olunca focus'un donecegi element */
  returnFocusOnDeactivate?: boolean;
  /** Disaridan ref gecmek icin (portal gibi durumlarda) */
  externalRef?: React.RefObject<T | null>;
}

export interface UseFocusTrapReturn<T extends HTMLElement> {
  /** Container ref'i — trap'in uygulanacagi elemente ver */
  trapRef: React.RefObject<T | null>;
}

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'textarea:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

export function useFocusTrap<T extends HTMLElement = HTMLElement>(
  options: UseFocusTrapOptions<T> = {},
): UseFocusTrapReturn<T> {
  const {
    active = true,
    escapeDeactivates = true,
    onEscape,
    initialFocusSelector,
    returnFocusOnDeactivate = true,
    externalRef,
  } = options;

  const internalRef = useRef<T | null>(null);
  const trapRef = externalRef ?? internalRef;
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!active || !trapRef.current) return;

    const container = trapRef.current;

    const getFocusableElements = (): HTMLElement[] =>
      Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));

    previousFocusRef.current = document.activeElement as HTMLElement;

    // Set initial focus
    const initialElement = initialFocusSelector
      ? container.querySelector<HTMLElement>(initialFocusSelector)
      : null;

    if (initialElement) {
      initialElement.focus();
    } else {
      const focusable = getFocusableElements();
      focusable[0]?.focus();
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && escapeDeactivates) {
        event.stopPropagation();
        onEscape?.();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusable = getFocusableElements();
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === first) {
          event.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (returnFocusOnDeactivate && previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    };
  }, [
    active,
    escapeDeactivates,
    onEscape,
    initialFocusSelector,
    returnFocusOnDeactivate,
    trapRef,
  ]);

  return { trapRef };
}
