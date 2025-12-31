import classNames from 'classnames';
import type { ReactNode } from 'react';

import styles from './SidebarContent.module.scss';

export interface ISidebarContentProps {
  children: ReactNode;
  isOpen?: boolean;
}

export const SidebarContent = (props: ISidebarContentProps) => {
  const { children, isOpen = true } = props;

  return (
    <div className={classNames(styles.content, { [styles.closed]: !isOpen })}>
      {children}
    </div>
  );
};
