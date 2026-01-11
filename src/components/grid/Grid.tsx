import React from 'react';

import type { CSSVars } from '@/foundation/grid';

import styles from './Grid.module.css';

export type GridGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type GridProps = React.HTMLAttributes<HTMLDivElement> & {
  cols?: number | `${number}`; // 12, "12" ikisini de kabul
  gap?: GridGap;
  alignItems?: React.CSSProperties['alignItems'];
  justifyItems?: React.CSSProperties['justifyItems'];
};

const GAP_MAP: Record<GridGap, string> = {
  none: '0px',
  xs: '6px',
  sm: '10px',
  md: '12px',
  lg: '16px',
  xl: '24px',
};

function toIntCols(cols: GridProps['cols'], fallback = 12) {
  const n = typeof cols === 'string' ? Number(cols) : cols;
  if (!n || Number.isNaN(n)) return fallback;
  return Math.max(1, Math.floor(n));
}

export function Grid({
  cols = 12,
  gap = 'md',
  alignItems = 'stretch',
  justifyItems = 'stretch',
  style,
  className,
  ...rest
}: GridProps) {
  const cssVars: CSSVars = {
    ...(style ?? {}),
    '--grid-cols': toIntCols(cols, 12),
    '--grid-gap': GAP_MAP[gap],
    '--grid-align-items': alignItems ?? 'stretch',
    '--grid-justify-items': justifyItems ?? 'stretch',
  };

  const cls = [styles.grid, className].filter(Boolean).join(' ');

  return <div className={cls} style={cssVars} {...rest} />;
}
