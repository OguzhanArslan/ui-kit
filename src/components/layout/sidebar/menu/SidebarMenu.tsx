import { Children, isValidElement, type ReactNode } from 'react';

import classNames from 'classnames';

import { Tooltip } from '@/components/tooltip/Tooltip';

import styles from './SidebarMenu.module.scss';

export interface ISidebarMenuProps {
  children: ReactNode;
  collapsed?: boolean;
}

export const SidebarMenu = (props: ISidebarMenuProps) => {
  const { children, collapsed } = props;

  return (
    <div className={classNames(styles.menu, { [styles.collapsed]: collapsed })}>
      {collapsed
        ? Children.map(children, (child) => {
            if (
              isValidElement<{ label?: string }>(child) &&
              child.props.label
            ) {
              return (
                <Tooltip content={child.props.label} placement="right">
                  {child}
                </Tooltip>
              );
            }
            return child;
          })
        : children}
    </div>
  );
};
