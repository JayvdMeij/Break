/**
 * Pointer physics for the shards flung off the K.
 *
 * Each shard is a free body: the pointer adds an impulse scaled by how
 * close and how fast it passes, drag bleeds the velocity off, and a
 * whisper of homing only kicks in once a shard has drifted far enough to
 * be lost. Once everything settles the rAF loop stops entirely.
 */

const RADIUS = 190;
const DRAG = 0.975;
const REST = 0.03;
const STRAY = 900;

interface Shard {
  el: HTMLElement;
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  vr: number;
}

export function initShards(): void {
  const wrap = document.querySelector<HTMLElement>('[data-shatter]');
  if (!wrap) return;

  // Touch pointers have nothing to push with, and reduced motion means
  // the CSS drift is already off. Either way, leave the shards be.
  if (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    window.matchMedia('(pointer: coarse)').matches
  ) {
    return;
  }

  const shards: Shard[] = Array.from(wrap.children).map((node) => {
    const el = node as HTMLElement;
    el.style.willChange = 'transform';
    return { el, x: 0, y: 0, r: 0, vx: 0, vy: 0, vr: 0 };
  });
  if (shards.length === 0) return;

  let live = false;
  let frame = 0;
  let last = 0;
  let mx = 0;
  let my = 0;
  let px = 0;
  let py = 0;

  const step = (time: number) => {
    const dt = last ? Math.min(2.4, (time - last) / 16.67) : 1;
    last = time;

    const speed = Math.min(60, Math.hypot(mx - px, my - py));
    const decay = Math.pow(DRAG, dt);
    let moving = false;

    for (const s of shards) {
      if (live) {
        const box = s.el.getBoundingClientRect();
        const dx = box.left + box.width / 2 - mx;
        const dy = box.top + box.height / 2 - my;
        const d = Math.hypot(dx, dy) || 1;
        if (d < RADIUS) {
          const force = Math.pow(1 - d / RADIUS, 1.6) * (0.5 + speed * 0.11);
          s.vx += (dx / d) * force * dt;
          s.vy += (dy / d) * force * dt;
          s.vr += ((dx * -Math.sign(dy || 1)) / d) * force * 0.9 * dt;
        }
      }

      if (Math.hypot(s.x, s.y) > STRAY) {
        s.vx -= s.x * 0.0006 * dt;
        s.vy -= s.y * 0.0006 * dt;
      }

      s.vx *= decay;
      s.vy *= decay;
      s.vr *= decay;
      s.x += s.vx * dt;
      s.y += s.vy * dt;
      s.r += s.vr * dt;

      if (Math.abs(s.vx) + Math.abs(s.vy) + Math.abs(s.vr) > REST) moving = true;
      s.el.style.transform = `translate3d(${s.x.toFixed(2)}px, ${s.y.toFixed(2)}px, 0) rotate(${s.r.toFixed(2)}deg)`;
    }

    px = mx;
    py = my;

    if (moving || live) {
      frame = requestAnimationFrame(step);
    } else {
      frame = 0;
      last = 0;
    }
  };

  const start = () => {
    if (!frame) frame = requestAnimationFrame(step);
  };

  window.addEventListener(
    'pointermove',
    (event) => {
      if (!live) {
        px = event.clientX;
        py = event.clientY;
        live = true;
        // Hand control over from the CSS drift to the simulation.
        for (const s of shards) s.el.style.animation = 'none';
      }
      mx = event.clientX;
      my = event.clientY;
      start();
    },
    { passive: true },
  );

  const settle = () => {
    live = false;
    start();
  };

  window.addEventListener('blur', settle);
  document.addEventListener('mouseleave', settle);
}
