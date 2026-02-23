import classNames from 'classnames';
import type { ElementType } from 'react';

import { Loader } from '@/components/loader/Loader';
import { COLOR, type COLORS } from '@/foundation/colors';
import { SIZE, type SIZES } from '@/foundation/sizes';
import type { IPolymorphicProps } from '@/types/polymorphic';

import styles from './Button.module.scss';

export interface IButtonOwnProps {
  className?: string;
  label?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  color?: COLORS;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
  size?: SIZES;
  isFullWidth?: boolean;
  isActive?: boolean;
  isCircle?: boolean;
  isHiddenLabel?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export type IButtonProps<C extends ElementType = 'button'> = IPolymorphicProps<
  C,
  IButtonOwnProps
>;

export const Button = <C extends ElementType = 'button'>(
  props: IButtonProps<C>,
) => {
  const {
    className,
    label,
    prefix,
    suffix,
    color = COLOR.primary,
    size = SIZE.md,
    disabled,
    isLoading,
    onClick,
    ariaLabel,
    isFullWidth,
    isActive,
    isCircle,
    isHiddenLabel,
    type = 'button',
    as,
    ...restProps
  } = props;

  const Component: ElementType = as || 'button';

  const sharedProps = {
    className: classNames(
      styles.button,
      styles[color],
      styles[size],
      className,
      {
        [styles.loading]: isLoading,
        [styles.fullWidth]: isFullWidth,
        [styles.active]: isActive,
        [styles.circle]: isCircle,
        [styles.textCenter]: !prefix && !suffix,
      },
    ),
    onClick,
    'aria-label': label || ariaLabel,
    ...restProps,
  };

  const buttonOnlyProps = !as
    ? { type, role: 'button' as const, disabled: isLoading || disabled }
    : {};

  return (
    <Component {...sharedProps} {...buttonOnlyProps}>
      {prefix}
      {!isHiddenLabel && label}
      {suffix}
      {isLoading && <Loader size={SIZE.sm} />}
    </Component>
  );
};
