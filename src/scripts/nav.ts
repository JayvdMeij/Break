/**
 * Masthead behaviour: the scroll progress bar, the transparent-to-paper
 * transition, and the mobile menu toggle.
 *
 * Scroll work is coalesced into a single rAF tick — the listener itself
 * only ever flips a flag.
 */
export function initNav(): void {
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  const bar = document.querySelector<HTMLElement>('[data-progress]');

  if (nav || bar) {
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = window.scrollY || 0;
      if (bar) {
        const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        bar.style.transform = `scaleX(${Math.min(1, y / max)})`;
      }
      if (nav) nav.toggleAttribute('data-scrolled', y > 40);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
  }

  const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const menu = document.querySelector<HTMLElement>('[data-menu]');
  if (!toggle || !menu) return;

  const setOpen = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open));
    menu.toggleAttribute('data-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  // Any in-page jump closes the overlay again.
  menu.addEventListener('click', (event) => {
    if ((event.target as HTMLElement).closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });

  // The menu is desktop nav again above the breakpoint; drop any lock.
  const wide = window.matchMedia('(min-width: 60rem)');
  wide.addEventListener('change', (event) => {
    if (event.matches) setOpen(false);
  });
}
