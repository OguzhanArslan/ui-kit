import { useCallback, useEffect, useRef } from 'react';

export interface UseAriaAnnounceOptions {
  /** aria-live politeness seviyesi */
  politeness?: 'polite' | 'assertive';
}

export interface UseAriaAnnounceReturn {
  /** Mesaji screen reader'a duyur */
  announce: (message: string) => void;
}

export function useAriaAnnounce(
  options: UseAriaAnnounceOptions = {},
): UseAriaAnnounceReturn {
  const { politeness = 'polite' } = options;
  const regionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Live region'u document'e ekle (gizli)
    const region = document.createElement('div');
    region.setAttribute('role', 'status');
    region.setAttribute('aria-live', politeness);
    region.setAttribute('aria-atomic', 'true');
    region.style.position = 'absolute';
    region.style.width = '1px';
    region.style.height = '1px';
    region.style.overflow = 'hidden';
    region.style.clip = 'rect(0, 0, 0, 0)';
    region.style.whiteSpace = 'nowrap';
    region.style.border = '0';
    document.body.appendChild(region);
    regionRef.current = region;

    return () => {
      document.body.removeChild(region);
      regionRef.current = null;
    };
  }, [politeness]);

  const announce = useCallback((message: string) => {
    if (!regionRef.current) return;
    // Icerik sifirlanip tekrar set edilmeli ki SR yeni mesaji okusun
    regionRef.current.textContent = '';
    requestAnimationFrame(() => {
      if (regionRef.current) {
        regionRef.current.textContent = message;
      }
    });
  }, []);

  return { announce };
}
