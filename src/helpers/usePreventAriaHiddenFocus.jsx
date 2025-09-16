import { useEffect } from 'react';

export function usePreventAriaHiddenFocus(sliderContainerRef) {
  useEffect(() => {
    if (!sliderContainerRef?.current) return;

    const onFocusIn = (e) => {
      const focused = e.target;
      if (!focused || !focused.closest) return;

      const slide = focused.closest('.slick-slide');
      if (!slide) return;

      if (slide.getAttribute('aria-hidden') === 'true') {
        e.preventDefault?.();
        try {
          focused.blur();
        } catch {
          // ignored intentionally (no console noise)
        }

        const container =
          sliderContainerRef.current?.innerSlider?.list || sliderContainerRef.current;
        if (container && typeof container.focus === 'function') {
          container.focus({ preventScroll: true });
        }
      }
    };

    document.addEventListener('focusin', onFocusIn);
    return () => document.removeEventListener('focusin', onFocusIn);
  }, [sliderContainerRef]);
}
