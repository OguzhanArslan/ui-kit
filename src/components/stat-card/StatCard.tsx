import classNames from 'classnames';
import React from 'react';
import { Card } from '../card';
import type { CardVariant } from '../card';
import styles from './StatCard.module.scss';

export type TrendDirection = 'up' | 'down' | 'neutral';

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string | number;
  trend?: TrendDirection;
  trendValue?: string;
  icon?: React.ReactNode;
  variant?: CardVariant;
}

const TrendArrow: React.FC = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 2L10 7H2L6 2Z" fill="currentColor" />
  </svg>
);

export const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  ({ title, value, trend, trendValue, icon, variant = 'default', className, ...rest }, ref) => (
    <Card ref={ref} variant={variant} className={className} {...rest}>
      <Card.Body>
        <div className={styles.statCard}>
          <div className={styles.header}>
            <p className={styles.title}>{title}</p>
            {icon && <div className={styles.icon}>{icon}</div>}
          </div>
          <p className={styles.value}>{value}</p>
          {trend && (
            <div className={classNames(styles.trend, styles[trend])}>
              {trend !== 'neutral' && (
                <span className={classNames(styles.trendIcon, trend === 'down' && styles.down)}>
                  <TrendArrow />
                </span>
              )}
              {trendValue && <span>{trendValue}</span>}
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  ),
);
StatCard.displayName = 'StatCard';
