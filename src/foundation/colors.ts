export const COLOR = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  muted: 'muted',
  menu: 'menu',
  success: 'success',
  warning: 'warning',
  error: 'error',
} as const;

export type COLORS = (typeof COLOR)[keyof typeof COLOR];
