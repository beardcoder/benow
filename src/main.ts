import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ============================================
// ENVIRONMENT
// ============================================

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasPointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

// ============================================
// CHARACTER SPLITTING
// ============================================

function splitChars(line: HTMLElement): HTMLElement[] {
  const text = line.textContent ?? "";
  line.innerHTML = text
    .split("")
    .map((ch) =>
      ch === " "
        ? '<span class="char-space"> </span>'
        : `<span class="char-outer"><span class="char">${ch}</span></span>`,
    )
    .join("");
  return Array.from(line.querySelectorAll<HTMLElement>(".char"));
}

// ============================================
// CUSTOM CURSOR
// ============================================

if (hasPointer) {
  const ring = document.querySelector<HTMLElement>(".cursor-ring")!;
  const dot = document.querySelector<HTMLElement>(".cursor-dot")!;
  let revealed = false;

  document.addEventListener("mousemove", ({ clientX: x, clientY: y }) => {
    if (!revealed) {
      gsap.to([ring, dot], {
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
      });
      revealed = true;
    }
    gsap.to(dot, { x, y, duration: 0.08, ease: "none" });
    gsap.to(ring, { x, y, duration: 0.55, ease: "power3.out" });
  });

  document.querySelectorAll<HTMLElement>("a, button").forEach((el) => {
    el.addEventListener("mouseenter", () => ring.classList.add("is-hover"));
    el.addEventListener("mouseleave", () => ring.classList.remove("is-hover"));
  });

  document.addEventListener("mouseleave", () =>
    gsap.to([ring, dot], { opacity: 0, duration: 0.3 }),
  );
  document.addEventListener("mouseenter", () => {
    if (revealed) gsap.to([ring, dot], { opacity: 1, duration: 0.3 });
  });
}

// ============================================
// SCROLL PROGRESS
// ============================================

gsap.to(".scroll-progress", {
  scaleX: 1,
  ease: "none",
  scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
});

// ============================================
// NAV — background on scroll
// ============================================

ScrollTrigger.create({
  start: "top -80px",
  onUpdate: (self) => {
    const nav = document.querySelector(".nav");
    if (self.progress > 0) {
      nav?.classList.add("is-scrolled");
    } else {
      nav?.classList.remove("is-scrolled");
    }
  },
});

// ============================================
// HERO BLOBS — parallax drift
// ============================================

if (!reducedMotion) {
  gsap.to(".blob--1", {
    yPercent: -25,
    xPercent: 10,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: 2,
    },
  });

  gsap.to(".blob--2", {
    yPercent: -35,
    xPercent: -8,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: 1.5,
    },
  });

  gsap.to(".hero-watermark", {
    yPercent: 15,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: 3,
    },
  });
}

// ============================================
// INTRO ANIMATION
// ============================================

if (reducedMotion) {
  document.querySelector<HTMLElement>(".loader")!.style.display = "none";
  gsap.set(".nav", { opacity: 1 });
  document.querySelectorAll<HTMLElement>(".hero-name-line").forEach(splitChars);
  gsap.set(".char", { y: 0 });
  gsap.set(".blob", { opacity: 1 });
  gsap.set(".hero-badge", { opacity: 1 });
  gsap.set(".hero-sub", { opacity: 1 });
  gsap.set(".hero-tag", { opacity: 1, y: 0 });
  gsap.set(".hero-scroll", { opacity: 1 });
  gsap.set(
    ".section-tag, .about-text, .about-detail, " +
      ".skill-bar, .project-card, .link-strip, .interlude-word, " +
      ".links-text",
    { opacity: 1, y: 0, clearProps: "transform" },
  );
} else {
  // Split hero characters
  const allChars: HTMLElement[] = [];
  document.querySelectorAll<HTMLElement>(".hero-name-line").forEach((line) => {
    allChars.push(...splitChars(line));
  });

  // Set initial states
  gsap.set(allChars, { y: "130%" });
  gsap.set(".nav", { opacity: 0 });
  gsap.set(".hero-badge", { opacity: 0, y: 20 });
  gsap.set(".hero-sub", { opacity: 0, y: 25 });
  gsap.set(".hero-tag", { opacity: 0, y: 30 });
  gsap.set(".hero-scroll", { opacity: 0 });
  gsap.set(".blob", { opacity: 0 });
  gsap.set(".section-tag", { opacity: 0, y: 14 });
  gsap.set(".about-text", { y: "120%", opacity: 0 });
  gsap.set(".about-detail", { opacity: 0, y: 35 });
  gsap.set(".skill-bar", { opacity: 0, x: -40 });
  gsap.set(".project-card", { opacity: 0, y: 50, scale: 0.95 });
  gsap.set(".link-strip", { opacity: 0, x: -30 });
  gsap.set(".interlude-word", { opacity: 0, y: 80, rotation: 3 });
  gsap.set(".links-text", { y: "120%", opacity: 0 });

  // Loader sequence
  const loader = document.querySelector<HTMLElement>(".loader")!;
  const loaderRoot = document.querySelector<HTMLElement>(".loader-root")!;
  const loaderLabel = document.querySelector<HTMLElement>(".loader-label")!;

  gsap
    .timeline()
    .to(loaderRoot, {
      scale: 1.1,
      opacity: 0,
      duration: 0.7,
      ease: "power2.inOut",
      delay: 1.4,
    })
    .to(
      loaderLabel,
      {
        opacity: 0,
        y: -10,
        duration: 0.4,
        ease: "power2.in",
      },
      "-=0.4",
    )
    .to(loader, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        loader.style.display = "none";
      },
    });

  // Hero choreography
  const intro = gsap.timeline({ delay: 1.2 });

  intro
    // Blobs fade in
    .to(
      ".blob",
      {
        opacity: 1,
        duration: 3,
        stagger: 0.3,
        ease: "power2.out",
      },
      0,
    )

    // Nav
    .to(
      ".nav",
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      },
      0.2,
    )

    // Badge
    .to(
      ".hero-badge",
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
      },
      0.4,
    )

    // Name characters — grow upward like roots
    .to(
      allChars,
      {
        y: "0%",
        duration: 1.4,
        stagger: 0.03,
        ease: "power4.out",
      },
      0.5,
    )

    // Subtitle
    .to(
      ".hero-sub",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      1.3,
    )

    // Tagline words
    .to(
      ".hero-tag",
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "back.out(1.3)",
      },
      1.5,
    )

    // Scroll hint
    .to(
      ".hero-scroll",
      {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      },
      2.0,
    );
}

// ============================================
// SCROLL REVEALS
// ============================================

if (!reducedMotion) {
  // — About section —
  ScrollTrigger.create({
    trigger: "#about",
    start: "top 74%",
    once: true,
    onEnter: () => {
      gsap
        .timeline()
        .to("#about .section-tag", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .to(
          ".about-text",
          {
            y: "0%",
            opacity: 1,
            duration: 1.3,
            stagger: 0.14,
            ease: "power4.out",
          },
          "-=0.3",
        )
        .to(
          ".about-detail",
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            stagger: 0.16,
            ease: "power3.out",
          },
          "-=0.6",
        );
    },
  });

  // Parallax on headline
  gsap.to(".about-headline", {
    yPercent: -8,
    ease: "none",
    scrollTrigger: {
      trigger: "#about",
      start: "top bottom",
      end: "bottom top",
      scrub: 2,
    },
  });

  // About background glow
  gsap.to(".about-bg", {
    scale: 1.3,
    ease: "none",
    scrollTrigger: {
      trigger: "#about",
      start: "top bottom",
      end: "bottom top",
      scrub: 3,
    },
  });

  // — Interlude —
  ScrollTrigger.create({
    trigger: ".interlude",
    start: "top 55%",
    once: true,
    onEnter: () => {
      gsap.to(".interlude-word", {
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 1.3,
        stagger: 0.2,
        ease: "back.out(1.2)",
      });
    },
  });

  gsap.to(".interlude-glow", {
    scale: 1.6,
    ease: "none",
    scrollTrigger: {
      trigger: ".interlude",
      start: "top bottom",
      end: "bottom top",
      scrub: 3,
    },
  });

  // — Skills — staggered slide-in —
  ScrollTrigger.create({
    trigger: ".skills",
    start: "top 76%",
    once: true,
    onEnter: () => {
      gsap.to(".skill-bar", {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });
    },
  });

  // — Projects — cards rise and scale —
  ScrollTrigger.create({
    trigger: "#projects",
    start: "top 74%",
    once: true,
    onEnter: () => {
      gsap
        .timeline()
        .to("#projects .section-tag", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .to(
          ".project-card",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            stagger: 0.15,
            ease: "back.out(1.1)",
          },
          "-=0.3",
        );
    },
  });

  // Project cards — subtle parallax on individual cards
  document.querySelectorAll<HTMLElement>(".project-card").forEach((card, i) => {
    gsap.to(card, {
      yPercent: i % 2 === 0 ? -5 : 5,
      ease: "none",
      scrollTrigger: {
        trigger: card,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    });
  });

  // — Links —
  ScrollTrigger.create({
    trigger: "#links",
    start: "top 74%",
    once: true,
    onEnter: () => {
      gsap
        .timeline()
        .to("#links .section-tag", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .to(
          ".links-text",
          {
            y: "0%",
            opacity: 1,
            duration: 1.3,
            stagger: 0.14,
            ease: "power4.out",
          },
          "-=0.3",
        )
        .to(
          ".link-strip",
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.5",
        );
    },
  });

  // Links headline parallax
  gsap.to(".links-headline", {
    yPercent: -6,
    ease: "none",
    scrollTrigger: {
      trigger: "#links",
      start: "top bottom",
      end: "bottom top",
      scrub: 2,
    },
  });
}

// ============================================
// SCROLL BUTTON
// ============================================

document.querySelector(".hero-scroll")?.addEventListener("click", () => {
  const target = document.getElementById("about") || document.getElementById("philosophie");
  target?.scrollIntoView({
    behavior: reducedMotion ? "instant" : "smooth",
  });
});

// ============================================
// ANCHOR LINKS — smooth scroll
// ============================================

document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (!href || href === "#") return;
    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({
      behavior: reducedMotion ? "instant" : "smooth",
    });
  });
});
