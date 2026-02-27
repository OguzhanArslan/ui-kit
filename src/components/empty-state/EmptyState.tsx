import React from 'react';

import classNames from 'classnames';

import FileDocumentIcon from '../icons/generated/FileDocumentIcon';

import styles from './EmptyState.module.scss';

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
  className,
  ...rest
}) => (
  <div className={classNames(styles.root, className)} {...rest}>
    <div className={styles.icon}>
      {icon ?? <FileDocumentIcon />}
    </div>
    <span className={styles.title}>{title}</span>
    {description && (
      <span className={styles.description}>{description}</span>
    )}
    {action && <div className={styles.action}>{action}</div>}
  </div>
);
