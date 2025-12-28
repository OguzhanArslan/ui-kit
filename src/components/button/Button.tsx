import classNames from 'classnames';

import { Loader } from '@/components/loader/Loader';
import { SIZE, type SIZES } from '@/foundation/sizes';
import { TYPE, type TYPES } from '@/foundation/types';

import styles from './Button.module.scss';

export interface IButtonProps {
  label?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  type?: TYPES;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
  size?: SIZES;
}

export const Button = (props: IButtonProps) => {
  const {
    label,
    prefix,
    suffix,
    type = TYPE.primary,
    size = SIZE.md,
    disabled,
    isLoading,
    onClick,
    ariaLabel,
    ...restProps
  } = props;

  return (
    <button
      role="button"
      className={classNames(styles.button, styles[type], styles[size], {
        [styles.loading]: isLoading,
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
