import classNames from 'classnames';
import type { ElementType, HTMLAttributes, ReactNode } from 'react';

import type { COLORS } from '../../foundation/colors';
import {
  TYPOGRAPHY_VARIANT,
  type TYPOGRAPHY_VARIANTS,
} from '../../foundation/typography-variant';
import { WEIGHT, type WEIGHTS } from '../../foundation/weight';

import styles from './Typography.module.scss';

export interface ITypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TYPOGRAPHY_VARIANTS;
  weight?: WEIGHTS;
  color?: COLORS;
  component?: ElementType;
  className?: string;
  children: ReactNode;
}

const variantMapping: Record<TYPOGRAPHY_VARIANTS, ElementType> = {
  [TYPOGRAPHY_VARIANT.h1]: 'h1',
  [TYPOGRAPHY_VARIANT.h2]: 'h2',
  [TYPOGRAPHY_VARIANT.h3]: 'h3',
  [TYPOGRAPHY_VARIANT.h4]: 'h4',
  [TYPOGRAPHY_VARIANT.h5]: 'h5',
  [TYPOGRAPHY_VARIANT.h6]: 'h6',
  [TYPOGRAPHY_VARIANT.paragraph]: 'p',
  [TYPOGRAPHY_VARIANT.small]: 'p',
  [TYPOGRAPHY_VARIANT.caption]: 'span',
};

export const Typography = ({
  variant = TYPOGRAPHY_VARIANT.paragraph,
  weight = WEIGHT.regular,
  color,
  component,
  className,
  children,
  ...rest
}: ITypographyProps) => {
  const Component = component || variantMapping[variant] || 'p';

  return (
    <Component
      className={classNames(
        styles.typography,
        styles[variant],
        styles[weight],
        color && styles[color],
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
