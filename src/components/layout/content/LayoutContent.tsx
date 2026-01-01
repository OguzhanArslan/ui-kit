import type { ReactNode } from 'react';

import styles from './LayoutContent.module.scss';

export interface ILayoutContentProps {
  children: ReactNode;
}

export const LayoutContent = (props: ILayoutContentProps) => {
  const { children } = props;

  return <div className={styles.content}>{children}</div>;
};
