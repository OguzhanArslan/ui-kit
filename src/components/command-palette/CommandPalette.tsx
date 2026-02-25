import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import classNames from 'classnames';
import { createPortal } from 'react-dom';

import { SearchIcon } from '@/components/icons';
import { useFocusTrap } from '@/hooks';
import { useKeyboardNavigation } from '@/hooks';

import styles from './CommandPalette.module.scss';

// ─── Types ───────────────────────────────────────────────

export interface CommandItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  category?: string;
}

export interface CommandGroup {
  label: string;
  items: CommandItem[];
}

export interface ICommandPaletteProps {
  open: boolean;
  onClose: () => void;
  onSelect?: (item: CommandItem) => void;
  groups: CommandGroup[];
  placeholder?: string;
  className?: string;
}

// ─── Trigger ─────────────────────────────────────────────

export interface ICommandPaletteTriggerProps {
  label?: string;
  shortcut?: string;
  onClick?: () => void;
  className?: string;
}

export const CommandPaletteTrigger: React.FC<ICommandPaletteTriggerProps> = ({
  label = 'Ara...',
  shortcut = '⌘ K',
  onClick,
  className,
}) => (
  <button
    type="button"
    className={classNames(styles.trigger, className)}
    onClick={onClick}
  >
    <span className={styles.triggerIcon}>
      <SearchIcon />
    </span>
    <span className={styles.triggerLabel}>{label}</span>
    <kbd className={styles.triggerKbd}>{shortcut}</kbd>
  </button>
);

// ─── Component ───────────────────────────────────────────

export const CommandPalette: React.FC<ICommandPaletteProps> = ({
  open,
  onClose,
  onSelect,
  groups,
  placeholder = 'Search...',
  className,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Focus trap: Esc closes, initial focus on search input
  useFocusTrap<HTMLDivElement>({
    active: open,
    escapeDeactivates: true,
    onEscape: onClose,
    returnFocusOnDeactivate: true,
    initialFocusSelector: 'input',
    externalRef: containerRef,
  });

  // Keyboard navigation for items
  const { containerRef: navRef, handleKeyDown: navKeyDown } =
    useKeyboardNavigation<HTMLDivElement>({
      orientation: 'vertical',
      loop: true,
      itemSelector: '[role="option"]',
    });

  // Reset query when palette closes
  useEffect(() => {
    if (!open) setQuery('');
  }, [open]);

  // Prevent body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [open]);

  // Filter groups by query
  const filteredGroups = useMemo(() => {
    if (!query.trim()) return groups;
    const q = query.toLowerCase();
    return groups
      .map((group) => ({
        ...group,
        items: group.items.filter((item) =>
          item.label.toLowerCase().includes(q),
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [groups, query]);

  // Flatten items for Enter key selection
  const allFilteredItems = useMemo(
    () => filteredGroups.flatMap((g) => g.items),
    [filteredGroups],
  );

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose],
  );

  const handleItemClick = useCallback(
    (item: CommandItem) => {
      onSelect?.(item);
    },
    [onSelect],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        // If focus is on the input, move to list
        if (document.activeElement === inputRef.current) {
          e.preventDefault();
          const listEl = navRef.current;
          if (listEl) {
            const firstItem = listEl.querySelector<HTMLElement>('[role="option"]');
            firstItem?.focus();
          }
          return;
        }
        // Delegate to nav handler
        navKeyDown(e);
      }

      if (e.key === 'Enter') {
        const active = document.activeElement;
        if (active && active.getAttribute('role') === 'option') {
          const idx = active.getAttribute('data-index');
          if (idx !== null) {
            const item = allFilteredItems[Number(idx)];
            if (item) onSelect?.(item);
          }
        }
      }
    },
    [navKeyDown, navRef, allFilteredItems, onSelect],
  );

  if (!open) return null;

  let itemIndex = 0;

  return createPortal(
    <div
      className={styles.backdrop}
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
    >
      <div
        ref={containerRef}
        className={classNames(styles.container, className)}
        onKeyDown={handleKeyDown}
      >
        {/* Search Header */}
        <div className={styles.searchHeader}>
          <span className={styles.searchIcon}>
            <SearchIcon />
          </span>
          <input
            ref={inputRef}
            className={styles.searchInput}
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
            spellCheck={false}
          />
          <span className={styles.escBadge}>ESC</span>
        </div>

        {/* Results */}
        <div ref={navRef} className={styles.body} role="listbox">
          {filteredGroups.length === 0 ? (
            <div className={styles.emptyState}>Sonuc bulunamadi</div>
          ) : (
            filteredGroups.map((group) => (
              <div key={group.label} className={styles.group}>
                <div className={styles.groupLabel}>{group.label}</div>
                {group.items.map((item) => {
                  const currentIndex = itemIndex++;
                  return (
                    <button
                      key={item.id}
                      className={styles.item}
                      role="option"
                      tabIndex={-1}
                      data-index={currentIndex}
                      style={{ animationDelay: `${currentIndex * 30}ms` }}
                      onClick={() => handleItemClick(item)}
                    >
                      {item.icon && (
                        <span className={styles.itemIcon}>{item.icon}</span>
                      )}
                      <span className={styles.itemLabel}>{item.label}</span>
                      {item.category && (
                        <span className={styles.itemCategory}>
                          {item.category}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        {/* Footer Hints */}
        <div className={styles.footer}>
          <span className={styles.footerHint}>
            <kbd className={styles.footerKbd}>↑</kbd>
            <kbd className={styles.footerKbd}>↓</kbd>
            gezin
          </span>
          <span className={styles.footerHint}>
            <kbd className={styles.footerKbd}>↵</kbd>
            sec
          </span>
          <span className={styles.footerHint}>
            <kbd className={styles.footerKbd}>esc</kbd>
            kapat
          </span>
        </div>
      </div>
    </div>,
    document.body,
  );
};
