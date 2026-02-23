import {
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import classNames from 'classnames';
import { createPortal } from 'react-dom';

import { ChevronRightIcon } from '@/components/icons';
import { useFocusTrap } from '@/hooks/useFocusTrap';

import styles from './SidebarUser.module.scss';

export interface ISidebarUserMenuItem {
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export interface ISidebarUserProps {
  name: string;
  email?: string;
  avatar?: ReactNode;
  menuItems?: ISidebarUserMenuItem[];
  collapsed?: boolean;
}

export const SidebarUser = (props: ISidebarUserProps) => {
  const { name, email, avatar, menuItems, collapsed } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [menuPos, setMenuPos] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const containerRef = useRef<HTMLDivElement>(null);
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
    setMenuPos({ top: rect.top, left: rect.left });
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        close();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, close]);

  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('');

  const avatarNode = avatar ?? (
    <span className={styles.initialsAvatar}>{initials}</span>
  );

  return (
    <div ref={containerRef} className={styles.container}>
      <button
        ref={triggerRef}
        type="button"
        className={classNames(styles.trigger, {
          [styles.collapsed]: collapsed,
        })}
        onClick={toggle}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label={`${name} user menu`}
      >
        {avatarNode}
        {!collapsed && (
          <>
            <div className={styles.info}>
              <span className={styles.name}>{name}</span>
              {email && <span className={styles.email}>{email}</span>}
            </div>
            <ChevronRightIcon />
          </>
        )}
      </button>

      {isOpen &&
        createPortal(
          <div
            ref={menuRef}
            className={styles.menu}
            role="menu"
            style={{
              top: menuPos.top,
              left: menuPos.left,
            }}
          >
            <div className={styles.menuHeader}>
              <span className={styles.menuHeaderName}>{name}</span>
              {email && <span className={styles.menuHeaderEmail}>{email}</span>}
            </div>

            {menuItems && menuItems.length > 0 && (
              <>
                <div className={styles.divider} />
                {menuItems.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    className={styles.menuItem}
                    role="menuitem"
                    onClick={() => {
                      item.onClick?.();
                      close();
                    }}
                  >
                    {item.icon && (
                      <span className={styles.menuItemIcon}>{item.icon}</span>
                    )}
                    {item.label}
                  </button>
                ))}
              </>
            )}
          </div>,
          document.body,
        )}
    </div>
  );
};
