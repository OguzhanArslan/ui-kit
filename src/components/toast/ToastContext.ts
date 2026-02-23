import { createContext } from 'react';

import type { ToastAPI } from './Toast';

export const ToastContext = createContext<ToastAPI | null>(null);
