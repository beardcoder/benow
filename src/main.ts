import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ============================================
// PREFERS REDUCED MOTION CHECK
// ============================================

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches

// ============================================
// CUSTOM CURSOR
// ============================================

if (hasHover) {
  const cursorOuter = document.querySelector<HTMLElement>('.cursor-outer')!
  const cursorDot   = document.querySelector<HTMLElement>('.cursor-dot')!

  // Start off-screen, invisible — first mousemove reveals them
  let cursorInit = false

  document.addEventListener('mousemove', (e: MouseEvent) => {
    if (!cursorInit) {
      gsap.to([cursorOuter, cursorDot], {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
      })
      cursorInit = true
    }

    // Dot follows immediately
    gsap.to(cursorDot, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.06,
      ease: 'none',
    })

    // Outer ring follows with lag — "weight" feel
    gsap.to(cursorOuter, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.5,
      ease: 'power3.out',
    })
  })

  // Hover state on interactive elements
  const hoverTargets = document.querySelectorAll<HTMLElement>('a, button')
  hoverTargets.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursorOuter.classList.add('is-hovering')
    })
    el.addEventListener('mouseleave', () => {
      cursorOuter.classList.remove('is-hovering')
    })
  })

  // Fade cursor when pointer leaves viewport
  document.addEventListener('mouseleave', () => {
    gsap.to([cursorOuter, cursorDot], { opacity: 0, duration: 0.25 })
  })
  document.addEventListener('mouseenter', () => {
    gsap.to([cursorOuter, cursorDot], { opacity: 1, duration: 0.25 })
  })
}

// ============================================
// SCROLL PROGRESS BAR
// ============================================

gsap.to('.scroll-progress', {
  scaleX: 1,
  ease: 'none',
  scrollTrigger: {
    start: 0,
    end: 'max',
    scrub: 0.2,
  },
})

// ============================================
// INTRO ANIMATION
// ============================================

if (reducedMotion) {
  // Reduced motion: just make everything visible immediately
  const loader = document.querySelector<HTMLElement>('.loader')
  if (loader) loader.style.display = 'none'

  gsap.set('.nav', { opacity: 1 })
  document.querySelector('.nav')?.classList.add('is-visible')
  gsap.set('.hero-line', { scaleX: 1 })
  gsap.set('.hero-role, .hero-sep, .hero-location, .hero-scroll', { opacity: 1 })
  gsap.set('.section-label, .reveal-inner, .about-body, .project-item, .link-card', {
    opacity: 1,
    y: 0,
    clearProps: 'transform',
  })
} else {
  // — Establish initial states for animated elements —
  gsap.set('.name-word', { y: '110%' })
  gsap.set('.nav', { opacity: 0 })
  gsap.set('.hero-line', { scaleX: 0, transformOrigin: 'left center' })
  gsap.set('.hero-role, .hero-sep, .hero-location, .hero-scroll', { opacity: 0 })
  gsap.set('.section-label', { opacity: 0, y: 8 })
  gsap.set('.reveal-inner', { y: '105%' })
  gsap.set('.about-body', { opacity: 0, y: 22 })
  gsap.set('.project-item', { opacity: 0, y: 14 })
  gsap.set('.link-card', { opacity: 0, y: 12 })

  // — Choreographed intro timeline —
  const intro = gsap.timeline({
    onComplete: () => {
      const loader = document.querySelector<HTMLElement>('.loader')
      if (loader) loader.style.display = 'none'
      document.querySelector('.nav')?.classList.add('is-visible')
    },
  })

  intro
    // 1. Loader dissolves
    .to('.loader', {
      opacity: 0,
      duration: 0.55,
      ease: 'power2.inOut',
    }, 0.45)

    // 2. Structural lines extend (overlaps loader fade)
    .to('.hero-line', {
      scaleX: 1,
      duration: 1.05,
      ease: 'power3.inOut',
      stagger: 0.08,
    }, 0.75)

    // 3. Name rises from below (cinematic reveal)
    .to('.name-word', {
      y: '0%',
      duration: 1.15,
      stagger: 0.13,
      ease: 'power4.out',
    }, 0.95)

    // 4. Navigation fades in (overlapping with name)
    .to('.nav', {
      opacity: 1,
      duration: 0.65,
      ease: 'power2.out',
    }, 1.0)

    // 5. Hero metadata
    .to(['.hero-role', '.hero-sep', '.hero-location'], {
      opacity: 1,
      duration: 0.7,
      stagger: 0.08,
      ease: 'power3.out',
    }, 1.55)

    // 6. Scroll indicator
    .to('.hero-scroll', {
      opacity: 1,
      duration: 0.55,
      ease: 'power2.out',
    }, 1.8)
}

// ============================================
// SCROLL-TRIGGERED REVEALS
// ============================================

if (!reducedMotion) {
  // — About section —
  ScrollTrigger.create({
    trigger: '#about',
    start: 'top 78%',
    once: true,
    onEnter: () => {
      const tl = gsap.timeline()
      tl.to('#about .section-label', {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: 'power3.out',
      })
      .to('#about .reveal-inner', {
        y: '0%',
        duration: 1.0,
        stagger: 0.11,
        ease: 'power4.out',
      }, '-=0.35')
      .to('.about-body', {
        opacity: 1,
        y: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: 'power3.out',
      }, '-=0.5')
    },
  })

  // — Work section —
  ScrollTrigger.create({
    trigger: '#work',
    start: 'top 78%',
    once: true,
    onEnter: () => {
      const tl = gsap.timeline()
      tl.to('#work .section-label', {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: 'power3.out',
      })
      .to('.project-item', {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
      }, '-=0.3')
    },
  })

  // — Connect section —
  ScrollTrigger.create({
    trigger: '#connect',
    start: 'top 78%',
    once: true,
    onEnter: () => {
      const tl = gsap.timeline()
      tl.to('#connect .section-label', {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: 'power3.out',
      })
      .to('#connect .reveal-inner', {
        y: '0%',
        duration: 1.0,
        stagger: 0.1,
        ease: 'power4.out',
      }, '-=0.3')
      .to('.link-card', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.09,
        ease: 'power3.out',
      }, '-=0.55')
    },
  })
}

// ============================================
// SMOOTH ANCHOR SCROLLING
// ============================================

document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href')
    if (!href || href === '#') return

    const target = document.querySelector<HTMLElement>(href)
    if (!target) return

    e.preventDefault()
    target.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth' })
  })
})
