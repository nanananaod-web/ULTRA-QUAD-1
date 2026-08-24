import { useEffect, useRef } from 'react';

/**
 * Adds `is-visible` to any descendant carrying `.reveal` once it enters the
 * viewport. One observer per section keeps the scroll work cheap.
 */
export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = Array.from(root.querySelectorAll<HTMLElement>('.reveal'));
    if (targets.length === 0) return;

    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}

/** Tracks whether the page has scrolled past a threshold. */
export function useScrolledPast(threshold = 24) {
  const ref = useRef(false);
  return { ref, threshold };
}
