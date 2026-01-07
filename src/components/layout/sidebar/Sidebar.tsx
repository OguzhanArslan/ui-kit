import classNames from 'classnames';
import type { ReactNode } from 'react';

import styles from './Sidebar.module.scss';

export interface ISidebarProps {
  children: ReactNode;
  isOpen?: boolean;
}

export const Sidebar = (props: ISidebarProps) => {
  const { children, isOpen = true } = props;

  return (
    <div className={classNames(styles.sidebar, { [styles.closed]: !isOpen })}>
      {children}
    </div>
  );
};
