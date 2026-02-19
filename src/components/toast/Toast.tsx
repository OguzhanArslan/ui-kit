import classNames from 'classnames';
import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Toast.module.scss';

// ─── Types ───────────────────────────────────────────────

export type ToastVariant = 'success' | 'error' | 'warning' | 'info';

export interface ToastItem {
  id: string;
  message: string;
  variant: ToastVariant;
  duration: number;
}

export interface ToastAPI {
  success: (message: string, duration?: number) => void;
  error: (message: string, duration?: number) => void;
  warning: (message: string, duration?: number) => void;
  info: (message: string, duration?: number) => void;
}

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
    <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ToastEntry: React.FC<{ item: ToastItem; onRemove: (id: string) => void }> = ({ item, onRemove }) => {
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const hoveredRef = useRef(false);

  const startTimer = useCallback(() => {
    timerRef.current = setTimeout(() => onRemove(item.id), item.duration);
  }, [item.id, item.duration, onRemove]);

  useEffect(() => {
    startTimer();
    return () => clearTimeout(timerRef.current);
  }, [startTimer]);

  return (
    <div
      className={classNames(styles.toast, styles[item.variant])}
      role="status"
      aria-live="polite"
      onMouseEnter={() => { hoveredRef.current = true; clearTimeout(timerRef.current); }}
      onMouseLeave={() => { hoveredRef.current = false; startTimer(); }}
    >
      <div className={styles.content}>{item.message}</div>
      <button type="button" className={styles.close} onClick={() => onRemove(item.id)} aria-label="Close">
        <CloseIcon />
      </button>
    </div>
  );
};

// ─── Provider ────────────────────────────────────────────

let idCounter = 0;

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = useCallback((message: string, variant: ToastVariant, duration = 5000) => {
    const id = String(++idCounter);
    setToasts((prev) => [...prev, { id, message, variant, duration }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const api: ToastAPI = {
    success: (msg, dur) => addToast(msg, 'success', dur),
    error: (msg, dur) => addToast(msg, 'error', dur),
    warning: (msg, dur) => addToast(msg, 'warning', dur),
    info: (msg, dur) => addToast(msg, 'info', dur),
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
