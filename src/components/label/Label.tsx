import type { ReactNode } from 'react';

import styles from './Label.module.scss';

export interface ILabelProps {
  htmlFor: string;
  children?: ReactNode;
}

export const Label = (props: ILabelProps) => {
  const { children, ...rest } = props;

  return (
    <label className={styles.label} {...rest}>
      {children}
    </label>
  );
};
