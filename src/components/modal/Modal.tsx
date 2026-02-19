import classNames from 'classnames';
import React, { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useFocusTrap } from '../../hooks';
import styles from './Modal.module.scss';

// ─── Types ───────────────────────────────────────────────

export type ModalSize = 'sm' | 'md' | 'lg';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  size?: ModalSize;
  className?: string;
  children: React.ReactNode;
}

export interface ModalSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface ModalHeaderProps extends ModalSectionProps {
  title?: string;
  description?: string;
  onClose?: () => void;
}

// ─── Close Icon ──────────────────────────────────────────

const CloseIcon: React.FC = () => (
  <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 4.5L4.5 13.5M4.5 4.5L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// ─── Sub-components ──────────────────────────────────────

const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ title, description, onClose, className, children, ...rest }, ref) => (
    <div ref={ref} className={classNames(styles.header, className)} {...rest}>
      {title ? (
        <div className={styles.headerContent}>
          <h2 className={styles.headerTitle}>{title}</h2>
          {description && <p className={styles.headerDescription}>{description}</p>}
        </div>
      ) : children}
      {onClose && (
        <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Close">
          <CloseIcon />
        </button>
      )}
    </div>
  ),
);
ModalHeader.displayName = 'Modal.Header';

const ModalBody = React.forwardRef<HTMLDivElement, ModalSectionProps>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={classNames(styles.body, className)} {...rest}>{children}</div>
  ),
);
ModalBody.displayName = 'Modal.Body';

const ModalFooter = React.forwardRef<HTMLDivElement, ModalSectionProps>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={classNames(styles.footer, className)} {...rest}>{children}</div>
  ),
);
ModalFooter.displayName = 'Modal.Footer';

// ─── Main Modal ──────────────────────────────────────────

const ModalRoot: React.FC<ModalProps> = ({ open, onClose, size = 'md', className, children }) => {
  const { trapRef } = useFocusTrap<HTMLDivElement>({
    active: open,
    escapeDeactivates: true,
    onEscape: onClose,
    returnFocusOnDeactivate: true,
  });

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose],
  );

  // Prevent body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div className={styles.backdrop} onClick={handleBackdropClick} aria-modal="true" role="dialog">
      <div ref={trapRef} className={classNames(styles.modal, styles[size], className)}>
        {children}
      </div>
    </div>,
    document.body,
  );
};

export const Modal = Object.assign(ModalRoot, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});
