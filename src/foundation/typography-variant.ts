export const TYPOGRAPHY_VARIANT = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  paragraph: 'paragraph',
  small: 'small',
  caption: 'caption',
} as const;

export type TYPOGRAPHY_VARIANTS =
  (typeof TYPOGRAPHY_VARIANT)[keyof typeof TYPOGRAPHY_VARIANT];
