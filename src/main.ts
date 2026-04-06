import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ============================================
// ENVIRONMENT
// ============================================

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const hasPointer    = window.matchMedia('(hover: hover) and (pointer: fine)').matches

// ============================================
// CHARACTER SPLITTING
// Wraps each character in an overflow-hidden
// envelope so we can slide them in from below.
// ============================================

function splitChars(line: HTMLElement): HTMLElement[] {
  const text = line.textContent ?? ''
  line.innerHTML = text
    .split('')
    .map((ch) =>
      ch === ' '
        ? '<span class="char-space"> </span>'
        : `<span class="char-outer"><span class="char">${ch}</span></span>`
    )
    .join('')
  return Array.from(line.querySelectorAll<HTMLElement>('.char'))
}

// ============================================
// CUSTOM CURSOR
// ============================================

if (hasPointer) {
  const outer = document.querySelector<HTMLElement>('.cursor-outer')!
  const dot   = document.querySelector<HTMLElement>('.cursor-dot')!
  let revealed = false

  document.addEventListener('mousemove', ({ clientX: x, clientY: y }) => {
    if (!revealed) {
      gsap.to([outer, dot], {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'back.out(1.4)',
      })
      revealed = true
    }
    // Dot — instant
    gsap.to(dot,  { x, y, duration: 0.06, ease: 'none' })
    // Ring — lags behind for "weight" feel
    gsap.to(outer, { x, y, duration: 0.55, ease: 'power3.out' })
  })

  document.querySelectorAll<HTMLElement>('a, button').forEach((el) => {
    el.addEventListener('mouseenter', () => outer.classList.add('is-hovering'))
    el.addEventListener('mouseleave', () => outer.classList.remove('is-hovering'))
  })

  document.addEventListener('mouseleave', () =>
    gsap.to([outer, dot], { opacity: 0, duration: 0.25 })
  )
  document.addEventListener('mouseenter', () =>
    gsap.to([outer, dot], { opacity: 1, duration: 0.25 })
  )
}

// ============================================
// SCROLL PROGRESS BAR
// ============================================

gsap.to('.scroll-progress', {
  scaleX: 1,
  ease: 'none',
  scrollTrigger: { start: 0, end: 'max', scrub: 0.3 },
})

// ============================================
// NAV — background on scroll
// ============================================

ScrollTrigger.create({
  start: 'top -80px',
  onUpdate: (self) => {
    const nav = document.querySelector('.nav')
    if (self.progress > 0) {
      nav?.classList.add('is-scrolled')
    } else {
      nav?.classList.remove('is-scrolled')
    }
  },
})

// ============================================
// HERO PHOTO PARALLAX
// ============================================

if (!reducedMotion) {
  gsap.to('.hero-photo', {
    yPercent: 22,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 0.8,
    },
  })
}

// ============================================
// INTRO ANIMATION
// ============================================

if (reducedMotion) {
  // Skip all setup — everything visible via CSS
  document.querySelector<HTMLElement>('.loader')!.style.display = 'none'
  gsap.set('.nav', { opacity: 1 })
  document.querySelector('.nav')?.classList.add('is-visible')
  // Reveal name lines without animation
  document.querySelectorAll<HTMLElement>('.name-line').forEach(splitChars)
  gsap.set('.char', { y: 0 })
  gsap.set(
    '.hero-line, .hero-role, .hero-sep, .hero-location, .hero-scroll, ' +
    '.section-label, .reveal-inner, .about-body, .about-tags, ' +
    '.project-item, .link-card',
    { opacity: 1, y: 0, clearProps: 'transform' }
  )
} else {
  // — Split characters —
  const allChars: HTMLElement[] = []
  document.querySelectorAll<HTMLElement>('.name-line').forEach((line) => {
    allChars.push(...splitChars(line))
  })

  // — Set initial states —
  gsap.set(allChars, { y: '115%' })
  gsap.set('.nav', { opacity: 0 })
  gsap.set('.hero-line', { scaleX: 0, transformOrigin: 'left center' })
  gsap.set('.hero-role, .hero-sep, .hero-location', { opacity: 0, y: 12 })
  gsap.set('.hero-scroll', { opacity: 0 })
  gsap.set('.section-label', { opacity: 0, y: 10 })
  gsap.set('.reveal-inner', { y: '108%' })
  gsap.set('.about-body', { opacity: 0, y: 28 })
  gsap.set('.about-tags', { opacity: 0, y: 16 })
  gsap.set('.project-item', { opacity: 0, y: 20 })
  gsap.set('.link-card', { opacity: 0, y: 16 })

  // — Loader bar animation then dissolve —
  const loader = document.querySelector<HTMLElement>('.loader')!
  const bar    = document.querySelector<HTMLElement>('.loader-bar')!

  gsap.timeline()
    .to(bar, {
      height: '60px',
      duration: 0.7,
      ease: 'power3.inOut',
    })
    .to(bar, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
    })
    .to(loader, {
      opacity: 0,
      duration: 0.55,
      ease: 'power2.inOut',
      onComplete: () => { loader.style.display = 'none' },
    })

  // — Hero choreography — starts while loader fades —
  const intro = gsap.timeline({ delay: 0.55 })

  intro
    // Structural lines extend
    .to('.hero-line', {
      scaleX: 1,
      duration: 1.1,
      ease: 'power3.inOut',
      stagger: 0.09,
    }, 0)

    // Nav fades in quietly
    .to('.nav', {
      opacity: 1,
      duration: 0.7,
      ease: 'power2.out',
      onComplete: () => {
        document.querySelector('.nav')?.classList.add('is-visible')
      },
    }, 0.1)

    // Characters slide up — main event
    .to(allChars, {
      y: '0%',
      duration: 0.9,
      stagger: 0.025,
      ease: 'power4.out',
    }, 0.25)

    // Meta row — staggered fade
    .to(['.hero-role', '.hero-sep', '.hero-location'], {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.09,
      ease: 'power3.out',
    }, 0.85)

    // Scroll hint
    .to('.hero-scroll', {
      opacity: 1,
      duration: 0.6,
      ease: 'power2.out',
    }, 1.1)
}

// ============================================
// SCROLL REVEALS
// ============================================

if (!reducedMotion) {
  // — About —
  ScrollTrigger.create({
    trigger: '#about',
    start: 'top 76%',
    once: true,
    onEnter: () => {
      gsap.timeline()
        .to('#about .section-label', {
          opacity: 1, y: 0, duration: 0.65, ease: 'power3.out',
        })
        .to('#about .reveal-inner', {
          y: '0%',
          duration: 1.05,
          stagger: 0.12,
          ease: 'power4.out',
        }, '-=0.35')
        .to('.about-body', {
          opacity: 1, y: 0,
          duration: 0.85,
          stagger: 0.13,
          ease: 'power3.out',
        }, '-=0.55')
        .to('.about-tags', {
          opacity: 1, y: 0,
          duration: 0.6,
          ease: 'power3.out',
        }, '-=0.4')
    },
  })

  // Subtle parallax on about lead text
  gsap.to('.about-lead', {
    yPercent: -8,
    ease: 'none',
    scrollTrigger: {
      trigger: '#about',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.2,
    },
  })

  // — Work —
  ScrollTrigger.create({
    trigger: '#work',
    start: 'top 78%',
    once: true,
    onEnter: () => {
      gsap.timeline()
        .to('#work .section-label', {
          opacity: 1, y: 0, duration: 0.65, ease: 'power3.out',
        })
        .to('.project-item', {
          opacity: 1, y: 0,
          duration: 0.75,
          stagger: 0.11,
          ease: 'power3.out',
        }, '-=0.3')
    },
  })

  // — Connect —
  ScrollTrigger.create({
    trigger: '#connect',
    start: 'top 78%',
    once: true,
    onEnter: () => {
      gsap.timeline()
        .to('#connect .section-label', {
          opacity: 1, y: 0, duration: 0.65, ease: 'power3.out',
        })
        .to('#connect .reveal-inner', {
          y: '0%',
          duration: 1.05,
          stagger: 0.12,
          ease: 'power4.out',
        }, '-=0.3')
        .to('.link-card', {
          opacity: 1, y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: 'power3.out',
        }, '-=0.55')
    },
  })
}

// ============================================
// SCROLL BUTTON — hero scroll hint
// ============================================

document.querySelector('.hero-scroll')?.addEventListener('click', () => {
  document.getElementById('about')?.scrollIntoView({
    behavior: reducedMotion ? 'instant' : 'smooth',
  })
})

// ============================================
// ANCHOR LINKS
// ============================================

document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href')
    if (!href || href === '#') return
    const target = document.querySelector<HTMLElement>(href)
    if (!target) return
    e.preventDefault()
    target.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth' })
  })
})
