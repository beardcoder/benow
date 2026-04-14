import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = globalThis.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
const hasPointer = globalThis.matchMedia(
  "(hover: hover) and (pointer: fine)",
).matches;

function splitChars(line: HTMLElement): HTMLElement[] {
  const text = line.textContent ?? "";
  line.innerHTML = text
    .split("")
    .map((char) =>
      char === " "
        ? '<span class="char-space"> </span>'
        : `<span class="char-wrap"><span class="char">${char}</span></span>`,
    )
    .join("");

  return Array.from(line.querySelectorAll<HTMLElement>(".char"));
}

if (hasPointer) {
  const ring = document.querySelector<HTMLElement>(".cursor-ring");
  const dot = document.querySelector<HTMLElement>(".cursor-dot");

  if (ring && dot) {
    let visible = false;

    document.addEventListener("mousemove", ({ clientX, clientY }) => {
      if (!visible) {
        gsap.to([ring, dot], {
          opacity: 1,
          duration: 0.45,
          ease: "power3.out",
        });
        visible = true;
      }

      gsap.to(dot, { x: clientX, y: clientY, duration: 0.08, ease: "none" });
      gsap.to(ring, {
        x: clientX,
        y: clientY,
        duration: 0.35,
        ease: "power2.out",
      });
    });

    document.querySelectorAll<HTMLElement>("a, button").forEach((node) => {
      node.addEventListener("mouseenter", () => ring.classList.add("is-hover"));
      node.addEventListener("mouseleave", () =>
        ring.classList.remove("is-hover"),
      );
    });

    document.addEventListener("mouseleave", () => {
      gsap.to([ring, dot], { opacity: 0, duration: 0.2, ease: "power2.out" });
    });

    document.addEventListener("mouseenter", () => {
      if (visible) {
        gsap.to([ring, dot], { opacity: 1, duration: 0.2, ease: "power2.out" });
      }
    });
  }
}

gsap.to(".scroll-progress", {
  scaleX: 1,
  ease: "none",
  scrollTrigger: {
    start: 0,
    end: "max",
    scrub: 0.3,
  },
});

ScrollTrigger.create({
  start: "top -64px",
  onUpdate: (self) => {
    document
      .querySelector(".nav")
      ?.classList.toggle("is-scrolled", self.progress > 0);
  },
});

const heroTarget =
  document.querySelector<HTMLElement>("#about") ?? document.body;
document.querySelector(".hero-scroll")?.addEventListener("click", () => {
  heroTarget.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth" });
});

document
  .querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
  .forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector<HTMLElement>(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth" });
    });
  });

if (reducedMotion) {
  document.querySelector<HTMLElement>(".loader")?.remove();
  document
    .querySelectorAll<HTMLElement>(
      ".nav, .hero-kicker, .hero-intro, .hero-manifesto-line, .hero-card, .hero-link, .hero-aura, .hero-orbit, .hero-side-label, .section-eyebrow, .about-copy, .about-quote, .link-card, .links-note",
    )
    .forEach((element) => {
      gsap.set(element, { opacity: 1, y: 0, x: 0, clearProps: "transform" });
    });

  document.querySelectorAll<HTMLElement>(".hero-name-line").forEach((line) => {
    splitChars(line);
    gsap.set(line.querySelectorAll(".char"), { y: 0 });
  });
} else {
  const allChars: HTMLElement[] = [];
  document.querySelectorAll<HTMLElement>(".hero-name-line").forEach((line) => {
    allChars.push(...splitChars(line));
  });

  gsap.set(allChars, { y: "120%" });
  gsap.set(".nav", { opacity: 0, y: -18 });
  gsap.set(".hero-kicker, .hero-intro, .hero-manifesto-line", {
    opacity: 0,
    y: 28,
  });
  gsap.set(".hero-card", { opacity: 0, y: 36, rotate: 4 });
  gsap.set(".hero-link", { opacity: 0, y: 18 });
  gsap.set(".hero-aura, .hero-orbit, .hero-side-label", { opacity: 0 });
  gsap.set(
    ".section-eyebrow, .about-copy, .about-quote, .link-card, .links-note",
    {
      opacity: 0,
      y: 30,
    },
  );

  const loader = document.querySelector<HTMLElement>(".loader");
  const startIntro = () => {
    const intro = gsap.timeline();

    intro
      .to(".nav", { opacity: 1, y: 0, duration: 0.75, ease: "power3.out" })
      .to(
        ".hero-aura, .hero-orbit, .hero-side-label",
        {
          opacity: 1,
          duration: 1.2,
          stagger: 0.08,
          ease: "power2.out",
        },
        0.05,
      )
      .to(
        allChars,
        {
          y: "0%",
          duration: 1.15,
          stagger: 0.03,
          ease: "power4.out",
        },
        0.12,
      )
      .to(
        ".hero-kicker, .hero-intro, .hero-manifesto-line",
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
        },
        0.35,
      )
      .to(
        ".hero-card",
        {
          opacity: 1,
          y: 0,
          rotate: -2,
          duration: 1,
          ease: "back.out(1.15)",
        },
        0.55,
      )
      .to(
        ".hero-link",
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
        },
        0.82,
      );
  };

  if (loader) {
    gsap.to(loader, {
      opacity: 0,
      duration: 0.65,
      ease: "power2.inOut",
      delay: 1.15,
      onComplete: () => {
        loader.style.display = "none";
        startIntro();
      },
    });
  } else {
    startIntro();
  }

  gsap.to(".hero-aura--forest", {
    yPercent: -10,
    xPercent: 4,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: 2,
    },
  });

  gsap.to(".hero-aura--clay", {
    yPercent: -14,
    xPercent: -6,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: 2.4,
    },
  });

  gsap.to(".hero-orbit--lg", {
    rotation: -10,
    yPercent: -8,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: 2.2,
    },
  });

  ScrollTrigger.create({
    trigger: ".about",
    start: "top 72%",
    once: true,
    onEnter: () => {
      gsap
        .timeline()
        .to(".about .section-eyebrow", {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        })
        .to(
          ".about-copy",
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.25",
        )
        .to(
          ".about-quote",
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.45",
        );
    },
  });

  ScrollTrigger.create({
    trigger: ".links",
    start: "top 72%",
    once: true,
    onEnter: () => {
      gsap
        .timeline()
        .to(".links .section-eyebrow", {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        })
        .to(
          ".links-note",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .to(
          ".link-card",
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.25",
        );
    },
  });
}
