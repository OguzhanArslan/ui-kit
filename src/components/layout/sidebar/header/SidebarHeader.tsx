import classNames from 'classnames';

import {
  BarChartIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@/components/icons';

import styles from './SidebarHeader.module.scss';

export interface ISidebarHeaderProps {
  title: string;
  isOpen?: boolean;
  onClick?: () => void;
}

export const SidebarHeader = (props: ISidebarHeaderProps) => {
  const { title, isOpen = true, onClick } = props;

  return (
    <div className={classNames(styles.header, { [styles.collapsed]: !isOpen })}>
      <div className={styles.logo}>
        <span className={styles.logoIcon}>
          <BarChartIcon />
        </span>
        {isOpen && <span className={styles.logoText}>{title}</span>}
      </div>
      {onClick && (
        <button
          type="button"
          className={styles.toggleButton}
          onClick={onClick}
          aria-label={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          {isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </button>
      )}
    </div>
  );
};
