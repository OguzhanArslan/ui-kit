import type { ReactNode } from 'react';

import { Typography } from '@/components/typography';

import styles from './AuthLayout.module.scss';

export interface IAuthLayoutProps {
  children: ReactNode;
}

export interface IAuthLayoutLeftProps {
  children: ReactNode;
}

export interface IAuthLayoutRightProps {
  children: ReactNode;
}
export interface IAuthLayoutHeaderProps {
  title?: string;
  subtitle?: string;
}

export interface IAuthLayoutFooterProps {
  children: ReactNode;
}
export const AuthLayout = ({ children }: IAuthLayoutProps) => {
  return <div className={styles.authLayout}>{children}</div>;
};

const AuthLayoutLeft = ({ children }: IAuthLayoutLeftProps) => {
  return (
    <div className={styles.left}>
      <div className={styles.leftContainer}>{children}</div>
    </div>
  );
};

const AuthLayoutRight = ({ children }: IAuthLayoutRightProps) => {
  return <div className={styles.right}>{children}</div>;
};

const AuthLayoutHeader = ({ title, subtitle }: IAuthLayoutHeaderProps) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        {title && (
          <Typography variant="h2" weight="bold">
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography variant="paragraph" color="secondary">
            {subtitle}
          </Typography>
        )}
      </div>
    </div>
  );
};

const AuthLayoutFooter = ({ children }: IAuthLayoutFooterProps) => {
  return (
    <Typography variant="caption" color="secondary" className={styles.footer}>
      {children}
    </Typography>
  );
};

AuthLayout.Left = AuthLayoutLeft;
AuthLayout.Right = AuthLayoutRight;
AuthLayout.Header = AuthLayoutHeader;
AuthLayout.Footer = AuthLayoutFooter;
