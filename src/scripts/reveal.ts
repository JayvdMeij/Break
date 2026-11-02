/**
 * Scroll-reveal for `[data-reveal]` elements.
 *
 * The start state lives in CSS (`.reveal`), so this only has to add the
 * `is-in` class. Rows inside a list reveal together; everything else gets
 * a small stagger so a section doesn't snap in as one block.
 */
export function initReveal(): void {
  const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  if (targets.length === 0) return;

  const show = (el: HTMLElement) => el.classList.add('is-in');

  if (!('IntersectionObserver' in window)) {
    targets.forEach(show);
    return;
  }

  targets.forEach((el, i) => {
    el.classList.add('reveal');
    if (!el.hasAttribute('data-row')) {
      el.style.setProperty('--reveal-delay', `${Math.min(i % 4, 3) * 0.07}s`);
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        show(entry.target as HTMLElement);
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
  );

  targets.forEach((el) => observer.observe(el));
}
