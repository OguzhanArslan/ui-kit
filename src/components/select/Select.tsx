import classNames from 'classnames';
import ReactSelect, { components, type Props } from 'react-select';

import { ChevronDownIcon, CrossIcon } from '../icons';

import styles from './Select.module.scss';

export interface ISelectProps extends Props {
  isError?: boolean;
  isMulti?: boolean;
}

export const Select = (props: ISelectProps) => {
  const { isError, ...rest } = props;

  return (
    <ReactSelect
      className={classNames(styles.root, {
        [styles.error]: isError,
      })}
      classNamePrefix="uiSelect"
      components={{
        DropdownIndicator: (p) => (
          <components.DropdownIndicator {...p}>
            <span
              className={classNames({
                [styles.menuOpen]: p.selectProps.menuIsOpen,
                [styles.menuClose]: !p.selectProps.menuIsOpen,
              })}
            >
              <ChevronDownIcon width={20} height={20} />
            </span>
          </components.DropdownIndicator>
        ),
        ClearIndicator: (p) => (
          <components.ClearIndicator {...p}>
            <CrossIcon width={20} height={20} />
          </components.ClearIndicator>
        ),
        MultiValueRemove: (p) => (
          <components.MultiValueRemove {...p}>
            <CrossIcon width={16} height={16} />
          </components.MultiValueRemove>
        ),
      }}
      {...rest}
    />
  );
};
