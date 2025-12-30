import classNames from 'classnames';
import ReactSelect, { components, type Props } from 'react-select';

import { ChevronDownIcon, CrossIcon } from '../icons';
import { Loader } from '../loader';

import styles from './Select.module.scss';

export interface ISelectProps extends Props {
  name: string;
  isError?: boolean;
  isLoading?: boolean;
  isMulti?: boolean;
  disabled?: boolean;
}

export const Select = (props: ISelectProps) => {
  const { name, isError, isLoading, disabled, ...rest } = props;

  return (
    <ReactSelect
      name={name}
      isLoading={isLoading}
      isDisabled={disabled}
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
        IndicatorsContainer: (p) => (
          <components.IndicatorsContainer {...p}>
            {p.selectProps.isLoading ? <Loader /> : null}
            {p.children}
          </components.IndicatorsContainer>
        ),
        LoadingIndicator: () => null,
      }}
      {...rest}
    />
  );
};
