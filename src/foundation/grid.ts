import type React from 'react';

export type CSSVarName = `--${string}`;
export type CSSVars = React.CSSProperties &
  Partial<Record<CSSVarName, string | number>>;
