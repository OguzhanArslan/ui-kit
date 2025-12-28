export const SIZE = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
} as const;

export type SIZES = (typeof SIZE)[keyof typeof SIZE];
