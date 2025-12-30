import classNames from 'classnames';

import { CheckIcon } from '../icons';
import { Label } from '../label';

import styles from './Checkbox.module.scss';

export interface ICheckboxProps {
  id?: string;
  name: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  isError?: boolean;
  checked?: boolean;
}

export const Checkbox = (props: ICheckboxProps) => {
  const { label, name, id, isError, ...rest } = props;
  const checkboxId = id || name;

  return (
    <div
      className={classNames(styles.wrap, {
        [styles.error]: isError,
      })}
    >
      <input id={checkboxId} name={name} type="checkbox" {...rest} />

      <Label htmlFor={checkboxId}>
        <span className={styles.checkbox}>
          <CheckIcon width={16} height={16} />
        </span>
        <span>{label}</span>
      </Label>
    </div>
  );
};
