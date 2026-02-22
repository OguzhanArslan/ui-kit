import { forwardRef } from 'react';

import classNames from 'classnames';

import { Loader } from '../loader';

import styles from './Input.module.scss';

export interface IInputProps {
  id?: string;
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  isError?: boolean;
  isLoading?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  const {
    type = 'text',
    name,
    id,
    isError,
    isLoading,
    prefix,
    suffix,
    ...rest
  } = props;
  const inputId = id || name;

  return (
    <div
      className={classNames(styles.wrap, {
        [styles.prefixWrap]: prefix,
        [styles.suffixWrap]: suffix || isLoading,
      })}
    >
      {prefix && <div className={styles.prefix}>{prefix}</div>}

      <input
        ref={ref}
        id={inputId}
        name={name}
        type={type}
        className={classNames(styles.input, {
          [styles.error]: isError,
        })}
        {...rest}
      />

      {(suffix || isLoading) && (
        <div className={styles.suffix}>
          {isLoading ? (
            <div className={styles.loader}>
              <Loader />
            </div>
          ) : (
            suffix
          )}
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input';
