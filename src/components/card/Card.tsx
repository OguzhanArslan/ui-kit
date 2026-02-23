import React from 'react';

import classNames from 'classnames';

import styles from './Card.module.scss';

export type CardVariant = 'default' | 'outlined' | 'elevated';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

const CardRoot = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', className, children, ...rest }, ref) => (
    <div
      ref={ref}
      className={classNames(styles.card, styles[variant], className)}
      {...rest}
    >
      {children}
    </div>
  ),
);
CardRoot.displayName = 'Card';

export type CardSectionProps = React.HTMLAttributes<HTMLDivElement>;

const CardHeader = React.forwardRef<HTMLDivElement, CardSectionProps>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={classNames(styles.header, className)} {...rest}>
      {children}
    </div>
  ),
);
CardHeader.displayName = 'Card.Header';

const CardBody = React.forwardRef<HTMLDivElement, CardSectionProps>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={classNames(styles.body, className)} {...rest}>
      {children}
    </div>
  ),
);
CardBody.displayName = 'Card.Body';

const CardFooter = React.forwardRef<HTMLDivElement, CardSectionProps>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={classNames(styles.footer, className)} {...rest}>
      {children}
    </div>
  ),
);
CardFooter.displayName = 'Card.Footer';

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});
