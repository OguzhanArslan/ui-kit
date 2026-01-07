import { Button } from '@/components/button';
import {
  BarChartIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@/components/icons';
import { COLOR } from '@/foundation/colors';
import { SIZE } from '@/foundation/sizes';

import styles from './SidebarHeader.module.scss';

export interface ISidebarHeaderProps {
  title: string;
  isOpen?: boolean;
  onClick?: () => void;
}

export const SidebarHeader = (props: ISidebarHeaderProps) => {
  const { title, isOpen = true, onClick } = props;

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.logoIcon}>
          <BarChartIcon />
        </span>
        {isOpen && <span className={styles.logoText}>{title}</span>}
      </div>
      <Button
        color={COLOR.tertiary}
        prefix={isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        size={SIZE.xs}
        isCircle
        className={styles.backButton}
        onClick={onClick}
      />
    </div>
  );
};
