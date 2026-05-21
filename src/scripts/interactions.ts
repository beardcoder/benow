/* ============================================================
   letsbenow — interactions
   - Reveal on scroll (IntersectionObserver)
   - Magnetic hover (pointer devices only)
   - Cursor-tracking glow on cards
   - Tilt parallax on cards
   - Avatar reacts to scroll position
   No dependencies. ~2 KB minified.
   ============================================================ */

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const supportsFineHover = () =>
  window.matchMedia('(hover: hover) and (pointer: fine)').matches;

function initReveal() {
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!('IntersectionObserver' in window) || prefersReducedMotion()) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
  );

  targets.forEach((el) => io.observe(el));
}

function initMagnetic() {
  if (!supportsFineHover() || prefersReducedMotion()) return;

  const cards = document.querySelectorAll<HTMLElement>('[data-magnetic]');

  cards.forEach((card) => {
    const strength = card.classList.contains('link--featured') ? 12 : 8;

    let rafId = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const animate = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      card.style.setProperty('--tx', `${currentX.toFixed(2)}px`);
      card.style.setProperty('--ty', `${currentY.toFixed(2)}px`);
      card.style.setProperty('--itx', `${(currentX * 1.4).toFixed(2)}px`);
      card.style.setProperty('--ity', `${(currentY * 1.4).toFixed(2)}px`);

      if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
        rafId = requestAnimationFrame(animate);
      } else {
        rafId = 0;
      }
    };

    const onMove = (e: PointerEvent) => {
      const rect = card.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;

      targetX = ((relX - cx) / cx) * strength;
      targetY = ((relY - cy) / cy) * strength;

      // update glow position (%)
      card.style.setProperty('--mx', `${(relX / rect.width) * 100}%`);
      card.style.setProperty('--my', `${(relY / rect.height) * 100}%`);

      if (!rafId) rafId = requestAnimationFrame(animate);
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
      if (!rafId) rafId = requestAnimationFrame(animate);
    };

    card.addEventListener('pointermove', onMove);
    card.addEventListener('pointerleave', onLeave);
    card.addEventListener('pointercancel', onLeave);
  });
}

function initScrollEffects() {
  if (prefersReducedMotion()) return;

  const hero = document.querySelector<HTMLElement>('.hero');
  if (!hero) return;

  let ticking = false;

  const update = () => {
    const y = window.scrollY;
    // Subtle parallax fade of the hero as user scrolls past it
    const fade = Math.max(0, 1 - y / 600);
    hero.style.setProperty('--hero-opacity', fade.toFixed(3));
    hero.style.setProperty('--hero-shift', `${y * -0.15}px`);
    ticking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true },
  );
}

export function initInteractions() {
  const start = () => {
    initReveal();
    initMagnetic();
    initScrollEffects();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
}
