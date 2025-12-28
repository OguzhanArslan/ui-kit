import classNames from 'classnames';

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
}

export const Input = (props: IInputProps) => {
  const { type = 'text', name, id, isError, isLoading, ...rest } = props;
  const inputId = id || name;

  return (
    <input
      id={inputId}
      name={name}
      type={type}
      className={classNames(styles.input, {
        [styles.error]: isError,
        [styles.loading]: isLoading,
      })}
      {...rest}
    />
  );
};
