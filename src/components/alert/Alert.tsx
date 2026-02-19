import classNames from 'classnames';
import React from 'react';
import styles from './Alert.module.scss';

export type AlertVariant = 'info' | 'success' | 'warning' | 'danger';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  title?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  action?: React.ReactNode;
  icon?: React.ReactNode;
}

const CloseIcon: React.FC = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ variant = 'info', title, dismissible, onDismiss, action, icon, className, children, ...rest }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={classNames(styles.alert, styles[variant], className)}
      {...rest}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <div className={styles.content}>
        {title && <p className={styles.title}>{title}</p>}
        <div className={styles.message}>{children}</div>
        {action && <div className={styles.actions}>{action}</div>}
      </div>
      {dismissible && (
        <button type="button" className={styles.dismiss} onClick={onDismiss} aria-label="Dismiss">
          <CloseIcon />
        </button>
      )}
    </div>
  ),
);
Alert.displayName = 'Alert';
