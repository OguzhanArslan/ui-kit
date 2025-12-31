import type { ReactNode } from 'react';

import styles from './SidebarFooter.module.scss';

export interface ISidebarFooterProps {
  children: ReactNode;
}

export const SidebarFooter = (props: ISidebarFooterProps) => {
  const { children } = props;

  return <div className={styles.footer}>{children}</div>;
};
