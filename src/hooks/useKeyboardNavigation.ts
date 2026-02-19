import { useCallback, useRef } from 'react';

export interface UseKeyboardNavigationOptions {
  /** Navigasyon yonu: vertical (Arrow Up/Down) veya horizontal (Arrow Left/Right) */
  orientation?: 'vertical' | 'horizontal' | 'both';
  /** Loop: son elementten ilke, ilkten sona gec */
  loop?: boolean;
  /** Navigasyon yapilacak element selector'u */
  itemSelector?: string;
}

export interface UseKeyboardNavigationReturn<T extends HTMLElement> {
  /** Container ref'i — bu ref'i navigate edilecek parent elemente ver */
  containerRef: React.RefObject<T | null>;
  /** onKeyDown handler — container'a bagla */
  handleKeyDown: (event: React.KeyboardEvent) => void;
}

export function useKeyboardNavigation<T extends HTMLElement = HTMLElement>(
  options: UseKeyboardNavigationOptions = {},
): UseKeyboardNavigationReturn<T> {
  const {
    orientation = 'vertical',
    loop = true,
    itemSelector = '[role="option"], [role="menuitem"], [role="tab"], [tabindex]',
  } = options;

  const containerRef = useRef<T | null>(null);

  const getItems = useCallback((): HTMLElement[] => {
    if (!containerRef.current) return [];
    return Array.from(containerRef.current.querySelectorAll<HTMLElement>(itemSelector));
  }, [itemSelector]);

  const focusItem = useCallback(
    (items: HTMLElement[], index: number) => {
      if (items.length === 0) return;

      let targetIndex = index;
      if (loop) {
        targetIndex = ((index % items.length) + items.length) % items.length;
      } else {
        targetIndex = Math.max(0, Math.min(index, items.length - 1));
      }

      items[targetIndex]?.focus();
    },
    [loop],
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      const items = getItems();
      if (items.length === 0) return;

      const currentIndex = items.indexOf(document.activeElement as HTMLElement);
      const prevKey = orientation === 'horizontal' ? 'ArrowLeft' : 'ArrowUp';
      const nextKey = orientation === 'horizontal' ? 'ArrowRight' : 'ArrowDown';

      switch (event.key) {
        case prevKey:
          event.preventDefault();
          focusItem(items, currentIndex - 1);
          break;
        case nextKey:
          event.preventDefault();
          focusItem(items, currentIndex + 1);
          break;
        case 'ArrowUp':
        case 'ArrowLeft':
          if (orientation === 'both') {
            event.preventDefault();
            focusItem(items, currentIndex - 1);
          }
          break;
        case 'ArrowDown':
        case 'ArrowRight':
          if (orientation === 'both') {
            event.preventDefault();
            focusItem(items, currentIndex + 1);
          }
          break;
        case 'Home':
          event.preventDefault();
          focusItem(items, 0);
          break;
        case 'End':
          event.preventDefault();
          focusItem(items, items.length - 1);
          break;
      }
    },
    [orientation, getItems, focusItem],
  );

  return { containerRef, handleKeyDown };
}
