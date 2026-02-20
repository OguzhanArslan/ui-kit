export const WEIGHT = {
  light: 'light',
  regular: 'regular',
  medium: 'medium',
  semibold: 'semibold',
  bold: 'bold',
} as const;

export type WEIGHTS = (typeof WEIGHT)[keyof typeof WEIGHT];
