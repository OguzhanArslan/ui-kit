import type { ReactNode } from 'react';

import styles from './Layout.module.scss';

export interface ILayoutProps {
  children: ReactNode;
}

export const Layout = (props: ILayoutProps) => {
  const { children } = props;

  return <div className={styles.layout}>{children}</div>;
};
