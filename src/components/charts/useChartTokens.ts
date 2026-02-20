import { useMemo } from 'react';

const FALLBACK_COLORS = [
  '#6366f1',
  '#22c55e',
  '#f59e0b',
  '#ef4444',
  '#3b82f6',
  '#a5b4fc',
];

function getCSSVar(name: string): string {
  if (typeof document === 'undefined') return '';
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
}

export function useChartColors(count: number = 6): string[] {
  return useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const value = getCSSVar(`--cuk-color-chart-${i + 1}`);
      return value || FALLBACK_COLORS[i] || FALLBACK_COLORS[0];
    });
  }, [count]);
}

export function useChartTheme() {
  return useMemo(
    () => ({
      textPrimary: getCSSVar('--cuk-color-text-primary') || '#1f2937',
      textSecondary: getCSSVar('--cuk-color-text-secondary') || '#6b7280',
      textMuted: getCSSVar('--cuk-color-text-muted') || '#9ca3af',
      border: getCSSVar('--cuk-color-border') || '#e5e7eb',
      surface: getCSSVar('--cuk-color-surface') || '#ffffff',
      surfaceRaised: getCSSVar('--cuk-color-surface-raised') || '#ffffff',
      background: getCSSVar('--cuk-color-background') || '#ffffff',
    }),
    [],
  );
}
