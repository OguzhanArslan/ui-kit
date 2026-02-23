import { useContext } from 'react';

import type { ToastAPI } from './Toast';
import { ToastContext } from './ToastContext';

export function useToast(): ToastAPI {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}
