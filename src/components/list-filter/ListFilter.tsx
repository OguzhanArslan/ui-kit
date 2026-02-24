import React from 'react';

import classNames from 'classnames';

import { SearchInput } from '../search-input';
import { Select } from '../select';

import styles from './ListFilter.module.scss';

export interface FilterField {
  name: string;
  placeholder?: string;
  options: { label: string; value: string }[];
  value?: string;
  onChange?: (value: string | null) => void;
}

export interface ListFilterProps extends React.HTMLAttributes<HTMLDivElement> {
  searchValue?: string;
  searchPlaceholder?: string;
  onSearchChange?: (value: string) => void;
  filters?: FilterField[];
}

export const ListFilter = React.forwardRef<HTMLDivElement, ListFilterProps>(
  (
    {
      searchValue,
      searchPlaceholder,
      onSearchChange,
      filters,
      className,
      ...rest
    },
    ref,
  ) => (
    <div ref={ref} className={classNames(styles.root, className)} {...rest}>
      <div className={styles.search}>
        <SearchInput
          value={searchValue}
          onChange={onSearchChange}
          placeholder={searchPlaceholder}
        />
      </div>
      {filters?.map((filter) => (
        <div className={styles.filter} key={filter.name}>
          <Select
            name={filter.name}
            placeholder={filter.placeholder}
            options={filter.options}
            value={filter.options.find((o) => o.value === filter.value) ?? null}
            onChange={(opt) =>
              filter.onChange?.(
                (opt as { value: string } | null)?.value ?? null,
              )
            }
            isClearable
          />
        </div>
      ))}
    </div>
  ),
);
ListFilter.displayName = 'ListFilter';
