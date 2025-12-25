export const TYPE = {
    primary: 'primary',
    secondary: 'secondary',
    tertiary: 'tertiary',
} as const;

export type TYPES = (typeof TYPE)[keyof typeof TYPE];