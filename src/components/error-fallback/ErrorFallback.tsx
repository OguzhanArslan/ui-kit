import React from 'react';

import classNames from 'classnames';

import { Button } from '../button/Button';
import AlertCircleIcon from '../icons/generated/AlertCircleIcon';

import styles from './ErrorFallback.module.scss';

export interface ErrorFallbackProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  onRetry?: () => void;
  retryLabel?: string;
}

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  icon,
  title = 'Bir hata oluştu',
  description,
  onRetry,
  retryLabel = 'Tekrar Dene',
  className,
  ...rest
}) => (
  <div className={classNames(styles.root, className)} {...rest}>
    <div className={styles.icon}>
      {icon ?? <AlertCircleIcon />}
    </div>
    <span className={styles.title}>{title}</span>
    {description && (
      <span className={styles.description}>{description}</span>
    )}
    {onRetry && (
      <div className={styles.action}>
        <Button label={retryLabel} color="tertiary" size="sm" onClick={onRetry} />
      </div>
    )}
  </div>
);
