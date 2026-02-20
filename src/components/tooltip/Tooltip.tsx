import React, { useCallback, useEffect, useId, useRef, useState } from 'react';

import styles from './Tooltip.module.scss';

export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';

export interface TooltipProps {
  content: React.ReactNode;
  placement?: TooltipPlacement;
  delayShow?: number;
  children: React.ReactElement;
  className?: string;
}

const OFFSET = 8;

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    { content, placement = 'top', delayShow = 200, children, className },
    ref,
  ) => {
    const [visible, setVisible] = useState(false);
    const [coords, setCoords] = useState({ top: 0, left: 0 });
    const triggerRef = useRef<HTMLDivElement | null>(null);
    const tooltipRef = useRef<HTMLDivElement | null>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);
    const tooltipId = useId();

    const updatePosition = useCallback(() => {
      const trigger = triggerRef.current;
      const tooltip = tooltipRef.current;
      if (!trigger || !tooltip) return;

      const rect = trigger.getBoundingClientRect();
      const tipRect = tooltip.getBoundingClientRect();
      let top = 0;
      let left = 0;

      switch (placement) {
        case 'top':
          top = rect.top - tipRect.height - OFFSET;
          left = rect.left + rect.width / 2 - tipRect.width / 2;
          break;
        case 'bottom':
          top = rect.bottom + OFFSET;
          left = rect.left + rect.width / 2 - tipRect.width / 2;
          break;
        case 'left':
          top = rect.top + rect.height / 2 - tipRect.height / 2;
          left = rect.left - tipRect.width - OFFSET;
          break;
        case 'right':
          top = rect.top + rect.height / 2 - tipRect.height / 2;
          left = rect.right + OFFSET;
          break;
      }

      // Viewport clamping
      top = Math.max(4, Math.min(top, window.innerHeight - tipRect.height - 4));
      left = Math.max(4, Math.min(left, window.innerWidth - tipRect.width - 4));

      setCoords({ top, left });
    }, [placement]);

    useEffect(() => {
      if (visible) updatePosition();
    }, [visible, updatePosition]);

    const show = useCallback(() => {
      timeoutRef.current = setTimeout(() => setVisible(true), delayShow);
    }, [delayShow]);

    const hide = useCallback(() => {
      clearTimeout(timeoutRef.current);
      setVisible(false);
    }, []);

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') hide();
      },
      [hide],
    );

    return (
      <>
        <div
          ref={(node) => {
            triggerRef.current = node;
            if (typeof ref === 'function') ref(node);
            else if (ref) ref.current = node;
          }}
          className={styles.trigger}
          onMouseEnter={show}
          onMouseLeave={hide}
          onFocus={show}
          onBlur={hide}
          onKeyDown={handleKeyDown}
          aria-describedby={visible ? tooltipId : undefined}
        >
          {children}
        </div>
        {visible && (
          <div
            ref={tooltipRef}
            id={tooltipId}
            role="tooltip"
            className={`${styles.tooltip} ${className ?? ''}`}
            style={{ top: coords.top, left: coords.left }}
          >
            {content}
          </div>
        )}
      </>
    );
  },
);
Tooltip.displayName = 'Tooltip';
