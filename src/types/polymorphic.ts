import type { ComponentPropsWithoutRef, ElementType } from 'react';

export type IPolymorphicProps<
  C extends ElementType,
  OwnProps = object,
> = OwnProps & { as?: C } & Omit<
    ComponentPropsWithoutRef<C>,
    keyof OwnProps | 'as'
  >;
