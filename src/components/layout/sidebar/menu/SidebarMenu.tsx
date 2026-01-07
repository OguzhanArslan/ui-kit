import type { ReactNode } from 'react';

import styles from './SidebarMenu.module.scss';

export interface ISidebarMenuProps {
  children: ReactNode;
}

export const SidebarMenu = (props: ISidebarMenuProps) => {
  const { children } = props;

  return <div className={styles.menu}>{children}</div>;
};
