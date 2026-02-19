import classNames from 'classnames';
import React, { useId } from 'react';
import styles from './Switch.module.scss';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ checked = false, onChange, label, disabled, className, id: propId, ...rest }, ref) => {
    const autoId = useId();
    const id = propId ?? autoId;

    return (
      <label
        htmlFor={id}
        className={classNames(styles.wrapper, disabled && styles.disabled, className)}
      >
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          id={id}
          className={styles.input}
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
          aria-checked={checked}
          {...rest}
        />
        <span className={classNames(styles.track, checked && styles.checked)}>
          <span className={styles.thumb} />
        </span>
        {label && <span className={styles.label}>{label}</span>}
      </label>
    );
  },
);
Switch.displayName = 'Switch';
