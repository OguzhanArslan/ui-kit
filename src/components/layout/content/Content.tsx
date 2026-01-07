import type { ReactNode } from 'react';

import styles from './Content.module.scss';

export interface IContentProps {
  children: ReactNode;
}

export const Content = (props: IContentProps) => {
  const { children } = props;

  return <div className={styles.content}>{children}</div>;
};
