import { useCallback, useEffect, useRef, useState } from 'react';

import classNames from 'classnames';
import { createPortal } from 'react-dom';

import { CheckIcon, ChevronDownIcon, GlobeIcon } from '@/components/icons';
import { useFocusTrap } from '@/hooks/useFocusTrap';

import styles from './LanguageSwitcher.module.scss';

export interface LanguageOption {
  code: string;
  label: string;
}

export interface ILanguageSwitcherProps {
  languages: LanguageOption[];
  value: string;
  onChange: (code: string) => void;
}

export const LanguageSwitcher = (props: ILanguageSwitcherProps) => {
  const { languages, value, onChange } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [menuPos, setMenuPos] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  useFocusTrap<HTMLDivElement>({
    active: isOpen,
    escapeDeactivates: true,
    onEscape: close,
    externalRef: menuRef,
  });

  useEffect(() => {
    if (!isOpen || !triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();
    setMenuPos({
      top: rect.bottom + 6,
      left: rect.right,
    });
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node) &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        close();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, close]);

  const activeCode =
    languages.find((l) => l.code === value)?.code.toUpperCase() ?? value;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={classNames(styles.trigger, { [styles.open]: isOpen })}
        onClick={toggle}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Change language"
      >
        <span className={styles.globe}>
          <GlobeIcon width={18} height={18} />
        </span>
        <span className={styles.code}>{activeCode}</span>
        <span className={styles.chevron}>
          <ChevronDownIcon width={14} height={14} />
        </span>
      </button>

      {isOpen &&
        createPortal(
          <div
            ref={menuRef}
            className={styles.menu}
            role="listbox"
            aria-label="Language selection"
            style={{
              top: menuPos.top,
              left: menuPos.left,
            }}
          >
            {languages.map((lang) => {
              const isActive = lang.code === value;
              return (
                <button
                  key={lang.code}
                  type="button"
                  className={classNames(styles.menuItem, {
                    [styles.active]: isActive,
                  })}
                  role="option"
                  aria-selected={isActive}
                  onClick={() => {
                    onChange(lang.code);
                    close();
                  }}
                >
                  <span className={styles.checkIcon}>
                    {isActive && <CheckIcon width={16} height={16} />}
                  </span>
                  <span className={styles.itemLabel}>{lang.label}</span>
                  <span className={styles.itemCode}>{lang.code}</span>
                </button>
              );
            })}
          </div>,
          document.body,
        )}
    </>
  );
};
