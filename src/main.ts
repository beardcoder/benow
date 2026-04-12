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
// CUSTOM CURSOR — organic motion
// ============================================

if (hasPointer) {
  const outer = document.querySelector<HTMLElement>(".cursor-outer")!;
  const dot = document.querySelector<HTMLElement>(".cursor-dot")!;
  let revealed = false;

  document.addEventListener("mousemove", ({ clientX: x, clientY: y }) => {
    if (!revealed) {
      gsap.to([outer, dot], {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
      });
      revealed = true;
    }
    gsap.to(dot, { x, y, duration: 0.08, ease: "none" });
    gsap.to(outer, { x, y, duration: 0.6, ease: "power3.out" });
  });

  document.querySelectorAll<HTMLElement>("a, button").forEach((el) => {
    el.addEventListener("mouseenter", () => outer.classList.add("is-hovering"));
    el.addEventListener("mouseleave", () => outer.classList.remove("is-hovering"));
  });

  document.addEventListener("mouseleave", () =>
    gsap.to([outer, dot], { opacity: 0, duration: 0.3 }),
  );
  document.addEventListener("mouseenter", () =>
    gsap.to([outer, dot], { opacity: 1, duration: 0.3 }),
  );
}

// ============================================
// SCROLL PROGRESS — growing root
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
// HERO FLORA — slow parallax drift
// ============================================

if (!reducedMotion) {
  gsap.to(".flora--1", {
    yPercent: -20,
    rotation: 15,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: 2,
    },
  });

  gsap.to(".flora--2", {
    yPercent: -40,
    rotation: -10,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: 1.5,
    },
  });
}

// ============================================
// INTRO ANIMATION — organic choreography
// ============================================

if (reducedMotion) {
  document.querySelector<HTMLElement>(".loader")!.style.display = "none";
  gsap.set(".nav", { opacity: 1 });
  document.querySelector(".nav")?.classList.add("is-visible");
  document.querySelectorAll<HTMLElement>(".name-line").forEach(splitChars);
  gsap.set(".char", { y: 0 });
  gsap.set(".hero-flora", { opacity: 0.12 });
  gsap.set(".hero-origin", { opacity: 1 });
  gsap.set(".tagline-word", { opacity: 1, y: 0 });
  gsap.set(".hero-scroll", { opacity: 1 });
  gsap.set(
    ".section-label, .reveal-inner, .philosophy-text, " +
      ".project-item, .link-card, .skill-item, .fullscreen-text",
    { opacity: 1, y: 0, clearProps: "transform" },
  );
} else {
  // Split hero characters
  const allChars: HTMLElement[] = [];
  document.querySelectorAll<HTMLElement>(".name-line").forEach((line) => {
    allChars.push(...splitChars(line));
  });

  // Set initial states
  gsap.set(allChars, { y: "120%" });
  gsap.set(".nav", { opacity: 0 });
  gsap.set(".hero-origin", { opacity: 0, y: 20 });
  gsap.set(".tagline-word", { opacity: 0, y: 30 });
  gsap.set(".hero-scroll", { opacity: 0 });
  gsap.set(".hero-flora", { opacity: 0 });
  gsap.set(".section-label", { opacity: 0, y: 14 });
  gsap.set(".reveal-inner", { y: "110%" });
  gsap.set(".philosophy-text", { opacity: 0, y: 35 });
  gsap.set(".project-item", { opacity: 0, y: 25 });
  gsap.set(".link-card", { opacity: 0, y: 20 });
  gsap.set(".skill-item", { opacity: 0, y: 30 });
  gsap.set(".fullscreen-text", { opacity: 0, y: 60 });
  gsap.set(".nature-word", { opacity: 0, x: -30 });

  // Loader animation
  const loader = document.querySelector<HTMLElement>(".loader")!;
  const ring = document.querySelector<HTMLElement>(".loader-ring")!;
  const loaderText = document.querySelector<HTMLElement>(".loader-text")!;

  gsap
    .timeline()
    .to(ring, {
      scale: 1.3,
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
      delay: 0.6,
    })
    .to(
      loaderText,
      {
        opacity: 0,
        y: -10,
        duration: 0.4,
        ease: "power2.in",
      },
      "-=0.5",
    )
    .to(loader, {
      opacity: 0,
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => {
        loader.style.display = "none";
      },
    });

  // Hero choreography
  const intro = gsap.timeline({ delay: 0.8 });

  intro
    // Flora emerges — atmospheric, slow
    .to(
      ".hero-flora",
      {
        opacity: 0.15,
        duration: 3,
        ease: "power2.out",
      },
      0,
    )

    // Nav fades in
    .to(
      ".nav",
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          document.querySelector(".nav")?.classList.add("is-visible");
        },
      },
      0.2,
    )

    // Origin text with upward float
    .to(
      ".hero-origin",
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      0.4,
    )

    // Characters grow upward — like plants
    .to(
      allChars,
      {
        y: "0%",
        duration: 1.3,
        stagger: 0.035,
        ease: "power4.out",
      },
      0.5,
    )

    // Tagline words — staggered with bounce
    .to(
      ".tagline-word",
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.18,
        ease: "back.out(1.4)",
      },
      1.2,
    )

    // Scroll hint
    .to(
      ".hero-scroll",
      {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      },
      1.8,
    );
}

// ============================================
// SCROLL REVEALS — nature-inspired motion
// ============================================

if (!reducedMotion) {
  // — Philosophie section —
  ScrollTrigger.create({
    trigger: "#philosophie",
    start: "top 74%",
    once: true,
    onEnter: () => {
      gsap
        .timeline()
        .to("#philosophie .section-label", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .to(
          "#philosophie .reveal-inner",
          {
            y: "0%",
            duration: 1.4,
            stagger: 0.16,
            ease: "power4.out",
          },
          "-=0.3",
        )
        .to(
          ".philosophy-text",
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            stagger: 0.18,
            ease: "power3.out",
          },
          "-=0.7",
        );
    },
  });

  // Nature words — parallax floating on scroll
  document.querySelectorAll<HTMLElement>(".nature-word").forEach((word) => {
    const speed = parseFloat(word.dataset.speed ?? "1");

    ScrollTrigger.create({
      trigger: "#philosophie",
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        gsap.to(word, {
          opacity: 0.06,
          x: 0,
          duration: 1.5,
          ease: "power2.out",
        });
      },
    });

    gsap.to(word, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: "#philosophie",
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    });
  });

  // Parallax on headline
  gsap.to(".philosophie-headline", {
    yPercent: -10,
    ease: "none",
    scrollTrigger: {
      trigger: "#philosophie",
      start: "top bottom",
      end: "bottom top",
      scrub: 2,
    },
  });

  // — Interlude — full-screen text reveal —
  ScrollTrigger.create({
    trigger: ".interlude",
    start: "top 60%",
    once: true,
    onEnter: () => {
      gsap.to(".fullscreen-text", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.25,
        ease: "back.out(1.2)",
      });
    },
  });

  // Interlude parallax on background glow
  gsap.to(".interlude-bg", {
    scale: 1.5,
    ease: "none",
    scrollTrigger: {
      trigger: ".interlude",
      start: "top bottom",
      end: "bottom top",
      scrub: 3,
    },
  });

  // — Skills — staggered reveal with playful bounce —
  ScrollTrigger.create({
    trigger: ".skills",
    start: "top 76%",
    once: true,
    onEnter: () => {
      gsap.to(".skill-item", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "back.out(1.4)",
      });
    },
  });

  // Skill icons — rotate on scroll
  document.querySelectorAll<HTMLElement>(".skill-icon").forEach((icon) => {
    gsap.to(icon, {
      rotation: 10,
      ease: "none",
      scrollTrigger: {
        trigger: icon,
        start: "top bottom",
        end: "bottom top",
        scrub: 3,
      },
    });
  });

  // — Work —
  ScrollTrigger.create({
    trigger: "#work",
    start: "top 76%",
    once: true,
    onEnter: () => {
      gsap
        .timeline()
        .to("#work .section-label", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .to(
          ".project-item",
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.14,
            ease: "power3.out",
          },
          "-=0.3",
        );
    },
  });

  // Project names — slight parallax
  document.querySelectorAll<HTMLElement>(".project-name").forEach((name) => {
    gsap.to(name, {
      xPercent: 3,
      ease: "none",
      scrollTrigger: {
        trigger: name,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    });
  });

  // — Connect —
  ScrollTrigger.create({
    trigger: "#connect",
    start: "top 76%",
    once: true,
    onEnter: () => {
      gsap
        .timeline()
        .to("#connect .section-label", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .to(
          "#connect .reveal-inner",
          {
            y: "0%",
            duration: 1.4,
            stagger: 0.16,
            ease: "power4.out",
          },
          "-=0.3",
        )
        .to(
          ".link-card",
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.14,
            ease: "back.out(1.2)",
          },
          "-=0.6",
        );
    },
  });

  // Connect lead — parallax
  gsap.to(".connect-lead", {
    yPercent: -8,
    ease: "none",
    scrollTrigger: {
      trigger: "#connect",
      start: "top bottom",
      end: "bottom top",
      scrub: 2,
    },
  });
}

// ============================================
// MARQUEE — speed up on scroll
// ============================================

if (!reducedMotion) {
  const marqueeTrack = document.querySelector<HTMLElement>(".marquee-track");
  if (marqueeTrack) {
    ScrollTrigger.create({
      trigger: ".marquee",
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        const speed = 1 + self.progress * 2;
        marqueeTrack.style.animationDuration = `${30 / speed}s`;
      },
    });
  }
}

// ============================================
// SCROLL BUTTON — hero scroll hint
// ============================================

document.querySelector(".hero-scroll")?.addEventListener("click", () => {
  const target = document.getElementById("philosophie") || document.getElementById("about");
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
