import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
import { useKeyboardNavigation } from '../../hooks';
import styles from './Tabs.module.scss';

export interface TabItem {
  key: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  items: TabItem[];
  defaultActiveKey?: string;
  activeKey?: string;
  onChange?: (key: string) => void;
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ items, defaultActiveKey, activeKey: controlledKey, onChange, className, ...rest }, ref) => {
    const [internalKey, setInternalKey] = useState(defaultActiveKey ?? items[0]?.key);
    const currentKey = controlledKey ?? internalKey;

    const { containerRef, handleKeyDown } = useKeyboardNavigation<HTMLDivElement>({
      orientation: 'horizontal',
      itemSelector: 'button[role="tab"]:not([disabled])',
    });

    const handleSelect = useCallback(
      (key: string) => {
        if (!controlledKey) setInternalKey(key);
        onChange?.(key);
      },
      [controlledKey, onChange],
    );

    const activePanel = items.find((i) => i.key === currentKey);

    return (
      <div ref={ref} className={className} {...rest}>
        <div
          ref={containerRef}
          role="tablist"
          className={styles.tabList}
          onKeyDown={handleKeyDown}
        >
          {items.map((item) => (
            <button
              key={item.key}
              role="tab"
              type="button"
              aria-selected={item.key === currentKey}
              aria-controls={`panel-${item.key}`}
              tabIndex={item.key === currentKey ? 0 : -1}
              disabled={item.disabled}
              className={classNames(styles.tab, item.key === currentKey && styles.active)}
              onClick={() => handleSelect(item.key)}
            >
              {item.label}
            </button>
          ))}
        </div>
        {activePanel && (
          <div role="tabpanel" id={`panel-${activePanel.key}`} className={styles.panel}>
            {activePanel.content}
          </div>
        )}
      </div>
    );
  },
);
Tabs.displayName = 'Tabs';
