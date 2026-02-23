import classNames from 'classnames';
import { type ReactNode, useCallback, useEffect, useRef, useState } from 'react';

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
  initials?: string;
  menuItems?: ISidebarUserMenuItem[];
  collapsed?: boolean;
}

export const SidebarUser = (props: ISidebarUserProps) => {
  const { name, email, avatar, initials, menuItems, collapsed } = props;
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  const { trapRef } = useFocusTrap<HTMLDivElement>({
    active: isOpen,
    escapeDeactivates: true,
    onEscape: close,
  });

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        close();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, close]);

  const avatarNode = avatar ?? (
    <span className={styles.initialsAvatar}>{initials ?? name.charAt(0)}</span>
  );

  return (
    <div ref={containerRef} className={styles.container}>
      <button
        type="button"
        className={classNames(styles.trigger, { [styles.collapsed]: collapsed })}
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

      {isOpen && (
        <div ref={trapRef} className={styles.menu} role="menu">
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
        </div>
      )}
    </div>
  );
};
