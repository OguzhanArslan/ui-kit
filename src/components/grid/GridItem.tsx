import React from 'react';

import type { CSSVars } from '@/foundation/grid';

import styles from './Grid.module.css';

export type GridItemProps = React.HTMLAttributes<HTMLDivElement> & {
  span?: number;
};

function clampSpan(span?: number) {
  const n = span ?? 1;
  if (Number.isNaN(n)) return 1;
  return Math.max(1, Math.floor(n));
}

export function GridItem({
  span = 1,
  style,
  className,
  ...rest
}: GridItemProps) {
  const cssVars: CSSVars = {
    ...(style ?? {}),
    '--grid-span': clampSpan(span),
  };

  const cls = [styles.item, className].filter(Boolean).join(' ');

  return <div className={cls} style={cssVars} {...rest} />;
}
