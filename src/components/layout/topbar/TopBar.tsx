import type { ReactNode } from 'react';

import styles from './TopBar.module.scss';

export interface ITopBarProps {
  children: ReactNode;
}

export const TopBar = (props: ITopBarProps) => {
  const { children } = props;

  return <div className={styles.topbar}>{children}</div>;
};
