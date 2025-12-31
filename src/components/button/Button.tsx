import classNames from 'classnames';

import { Loader } from '@/components/loader/Loader';
import { COLOR, type COLORS } from '@/foundation/colors';
import { SIZE, type SIZES } from '@/foundation/sizes';

import styles from './Button.module.scss';

export interface IButtonProps {
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
}

export const Button = (props: IButtonProps) => {
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
    ...restProps
  } = props;

  return (
    <button
      role="button"
      className={classNames(
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
      )}
      onClick={onClick}
      disabled={isLoading || disabled}
      aria-label={label || ariaLabel}
      {...restProps}
    >
      {prefix}
      {!isHiddenLabel && label}
      {suffix}
      {isLoading && <Loader size={SIZE.sm} />}
    </button>
  );
};
