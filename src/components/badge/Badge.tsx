import React from 'react';

import classNames from 'classnames';

import styles from './Badge.module.scss';

export type BadgeVariant =
  | 'default'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  onRemove?: () => void;
}

const CloseIcon: React.FC = () => (
  <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 3L3 9M3 3L9 9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'default',
      size = 'md',
      dot,
      onRemove,
      className,
      children,
      ...rest
    },
    ref,
  ) => (
    <span
      ref={ref}
      className={classNames(
        styles.badge,
        styles[variant],
        styles[size],
        className,
      )}
      {...rest}
    >
      {dot && <span className={styles.dot} />}
      {children}
      {onRemove && (
        <button
          type="button"
          className={styles.removeButton}
          onClick={onRemove}
          aria-label="Remove"
        >
          <CloseIcon />
        </button>
      )}
    </span>
  ),
);
Badge.displayName = 'Badge';
