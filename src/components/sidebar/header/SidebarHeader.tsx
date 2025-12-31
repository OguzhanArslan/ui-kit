import type { ReactNode } from 'react';

import { Button } from '@/components/button';
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/icons';
import { COLOR } from '@/foundation/colors';
import { SIZE } from '@/foundation/sizes';

import styles from './SidebarHeader.module.scss';

export interface ISidebarHeaderProps {
  children: ReactNode;
  isOpen?: boolean;
  onClick?: () => void;
}

export const SidebarHeader = (props: ISidebarHeaderProps) => {
  const { children, isOpen = true, onClick } = props;

  return (
    <div className={styles.header}>
      {children}
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
