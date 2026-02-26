import { useCallback, useEffect, useState } from 'react';

import { MoonIcon, SunIcon } from '../icons';

import styles from './ThemeToggle.module.scss';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.dataset.theme === 'dark',
  );

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
  }, [isDark]);

  const toggle = useCallback(() => setIsDark((prev) => !prev), []);

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <span key="sun" className={styles.iconSun}>
          <SunIcon width={18} height={18} />
        </span>
      ) : (
        <span key="moon" className={styles.iconMoon}>
          <MoonIcon width={18} height={18} />
        </span>
      )}
    </button>
  );
};
