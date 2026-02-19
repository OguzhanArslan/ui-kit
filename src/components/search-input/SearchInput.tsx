import classNames from 'classnames';
import React, { useCallback } from 'react';
import styles from './SearchInput.module.scss';

export interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  value?: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
}

const SearchIcon: React.FC = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 14L10.5 10.5M12 7C12 9.76 9.76 12 7 12C4.24 12 2 9.76 2 7C2 4.24 4.24 2 7 2C9.76 2 12 4.24 12 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const CloseIcon: React.FC = () => (
  <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ value = '', onChange, onClear, className, placeholder = 'Search...', ...rest }, ref) => {
    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value),
      [onChange],
    );

    const handleClear = useCallback(() => {
      onChange?.('');
      onClear?.();
    }, [onChange, onClear]);

    return (
      <div className={classNames(styles.wrapper, className)}>
        <span className={styles.icon}><SearchIcon /></span>
        <input
          ref={ref}
          type="search"
          className={styles.input}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          aria-label={placeholder}
          {...rest}
        />
        {value && (
          <button type="button" className={styles.clear} onClick={handleClear} aria-label="Clear search">
            <CloseIcon />
          </button>
        )}
      </div>
    );
  },
);
SearchInput.displayName = 'SearchInput';
