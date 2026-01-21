import { Typography } from '@/components/typography';

import styles from './BrandContent.module.scss';

export interface IBrandContentProps {
  title: string;
  subtitle?: string;
}

export const BrandContent = ({ title, subtitle }: IBrandContentProps) => {
  return (
    <div className={styles.brandContent}>
      <Typography variant="h1" weight="bold" className={styles.title}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="h4" weight="regular" className={styles.subtitle}>
          {subtitle}
        </Typography>
      )}
    </div>
  );
};
