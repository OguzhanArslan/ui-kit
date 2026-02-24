import React from 'react';

import classNames from 'classnames';

import styles from './PageHeader.module.scss';

export interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  actions?: React.ReactNode;
}

export const PageHeader = React.forwardRef<HTMLDivElement, PageHeaderProps>(
  ({ title, description, actions, className, ...rest }, ref) => (
    <div ref={ref} className={classNames(styles.root, className)} {...rest}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      {actions && <div className={styles.actions}>{actions}</div>}
    </div>
  ),
);
PageHeader.displayName = 'PageHeader';
