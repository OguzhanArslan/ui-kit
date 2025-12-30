import classNames from 'classnames';

import { Loader } from '@/components/loader/Loader';
import { COLOR, type COLORS } from '@/foundation/colors';
import { SIZE, type SIZES } from '@/foundation/sizes';

import styles from './Button.module.scss';

export interface IButtonProps {
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
}

export const Button = (props: IButtonProps) => {
  const {
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
    ...restProps
  } = props;

  return (
    <button
      role="button"
      className={classNames(styles.button, styles[color], styles[size], {
        [styles.loading]: isLoading,
        [styles.fullWidth]: isFullWidth,
      })}
      onClick={onClick}
      disabled={isLoading || disabled}
      aria-label={label || ariaLabel}
      {...restProps}
    >
      {prefix}
      {label}
      {suffix}
      {isLoading && <Loader size={SIZE.sm} />}
    </button>
  );
};
