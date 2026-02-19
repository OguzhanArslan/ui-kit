import classNames from 'classnames';
import type { ReactNode } from 'react';

import styles from './SidebarMenu.module.scss';

export interface ISidebarMenuProps {
  children: ReactNode;
  collapsed?: boolean;
}

export const SidebarMenu = (props: ISidebarMenuProps) => {
  const { children, collapsed } = props;

  return (
    <div className={classNames(styles.menu, { [styles.collapsed]: collapsed })}>
      {children}
    </div>
  );
};
