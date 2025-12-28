import classNames from 'classnames';
import type { Props } from 'react-select';
import ReactSelect from 'react-select';

import styles from './Select.module.scss';

export interface ISelectProps extends Props {
  isError?: boolean;
}

export const Select = (props: ISelectProps) => {
  const { isError, ...rest } = props;
  return (
    <ReactSelect
      className={classNames(styles.select, { [styles.isError]: isError })}
      {...rest}
    />
  );
};
