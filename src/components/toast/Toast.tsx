import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import classNames from 'classnames';
import { createPortal } from 'react-dom';

import AlertCircleIcon from '../icons/generated/AlertCircleIcon';
import AlertOctagonIcon from '../icons/generated/AlertOctagonIcon';
import CircleCheckIcon from '../icons/generated/CircleCheckIcon';
import InfoIcon from '../icons/generated/InfoIcon';

import styles from './Toast.module.scss';

// ─── Types ───────────────────────────────────────────────

export type ToastVariant = 'success' | 'error' | 'warning' | 'info';

export interface ToastAction {
  label: string;
  onClick: () => void;
}

export interface ToastItem {
  id: string;
  title: string;
  description?: string;
  variant: ToastVariant;
  duration: number;
  action?: ToastAction;
}

export interface ToastOptions {
  description?: string;
  duration?: number;
  action?: ToastAction;
}

export interface ToastAPI {
  success: (title: string, options?: ToastOptions) => void;
  error: (title: string, options?: ToastOptions) => void;
  warning: (title: string, options?: ToastOptions) => void;
  info: (title: string, options?: ToastOptions) => void;
}

// ─── Variant Icons ───────────────────────────────────────

const variantIcons: Record<ToastVariant, React.FC> = {
  success: CircleCheckIcon,
  error: AlertOctagonIcon,
  warning: AlertCircleIcon,
  info: InfoIcon,
};

// ─── Context ─────────────────────────────────────────────

const ToastContext = createContext<ToastAPI | null>(null);

export function useToast(): ToastAPI {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}

// ─── Single Toast ────────────────────────────────────────

const CloseIcon: React.FC = () => (
  <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const ToastEntry: React.FC<{
  item: ToastItem;
  onRemove: (id: string) => void;
}> = ({ item, onRemove }) => {
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const hoveredRef = useRef(false);

  const startTimer = useCallback(() => {
    timerRef.current = setTimeout(() => onRemove(item.id), item.duration);
  }, [item.id, item.duration, onRemove]);

  useEffect(() => {
    startTimer();
    return () => clearTimeout(timerRef.current);
  }, [startTimer]);

  const Icon = variantIcons[item.variant];

  return (
    <div
      className={classNames(styles.toast, styles[item.variant])}
      role="status"
      aria-live="polite"
      onMouseEnter={() => {
        hoveredRef.current = true;
        clearTimeout(timerRef.current);
      }}
      onMouseLeave={() => {
        hoveredRef.current = false;
        startTimer();
      }}
    >
      <div className={styles.icon}>
        <Icon />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{item.title}</div>
        {item.description && (
          <div className={styles.description}>{item.description}</div>
        )}
        {item.action && (
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.actionButton}
              onClick={() => {
                item.action?.onClick();
                onRemove(item.id);
              }}
            >
              {item.action.label}
            </button>
          </div>
        )}
      </div>
      <button
        type="button"
        className={styles.close}
        onClick={() => onRemove(item.id)}
        aria-label="Close"
      >
        <CloseIcon />
      </button>
    </div>
  );
};

// ─── Provider ────────────────────────────────────────────

let idCounter = 0;

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = useCallback(
    (title: string, variant: ToastVariant, options?: ToastOptions) => {
      const id = String(++idCounter);
      setToasts((prev) => [
        ...prev,
        {
          id,
          title,
          description: options?.description,
          variant,
          duration: options?.duration ?? 5000,
          action: options?.action,
        },
      ]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const api: ToastAPI = {
    success: (title, opts) => addToast(title, 'success', opts),
    error: (title, opts) => addToast(title, 'error', opts),
    warning: (title, opts) => addToast(title, 'warning', opts),
    info: (title, opts) => addToast(title, 'info', opts),
  };

  return (
    <ToastContext.Provider value={api}>
      {children}
      {typeof document !== 'undefined' &&
        createPortal(
          <div className={styles.container}>
            {toasts.map((t) => (
              <ToastEntry key={t.id} item={t} onRemove={removeToast} />
            ))}
          </div>,
          document.body,
        )}
    </ToastContext.Provider>
  );
};
ToastProvider.displayName = 'ToastProvider';
