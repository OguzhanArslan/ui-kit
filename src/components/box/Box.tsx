import type { ReactNode } from 'react';

import { Typography } from '../typography';

import styles from './Box.module.scss';

export interface IBoxProps {
  title?: string;
  children: ReactNode;
  actions?: ReactNode;
  footer?: ReactNode;
}

export const Box = (props: IBoxProps) => {
  const { title, children, actions, footer } = props;

  return (
    <div className={styles.box}>
      <div className={styles.header}>
        {title && (
          <Typography variant="h2" weight="bold">
            {title}
          </Typography>
        )}
        <div className={styles.actions}>{actions}</div>
      </div>

      <div className={styles.content}>{children}</div>

      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};
