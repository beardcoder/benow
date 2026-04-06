# benow — Markus Sommer

Persönliche Landingpage. Minimalistisch, hochwertig, animiert.

## Technologie

- **Next.js 15** — React-Framework mit Static Export (`output: 'export'`)
- **Tailwind CSS 4** — Utility-first CSS mit custom Design Tokens
- **Framer Motion** — Performante, deklarative Animationen (scroll-reveal, parallax, hover)
- **TypeScript** — Typsicherheit und bessere DX

## Design

- Dunkler, editorialer Look mit starker Typografie (Playfair Display + Inter)
- Subtile Scroll-Animationen: Reveal, Parallax, Line-Draw, Hover-Motion
- Monochrome Farbpalette mit warmem Akzent
- Großzügige Whitespace-Komposition
- Responsive auf allen Viewports

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Erzeugt statische Dateien in `/out`.

## Struktur

```
src/
├── app/
│   ├── globals.css        # Design tokens + Tailwind
│   ├── layout.tsx         # Root layout mit Fonts + SEO
│   └── page.tsx           # Landingpage
└── components/
    ├── magnetic-link.tsx   # Link mit Hover-Underline-Animation
    ├── parallax.tsx        # Scroll-basierter Parallax-Wrapper
    ├── reveal.tsx          # Scroll-Reveal-Animation
    ├── smooth-line.tsx     # Animierte Trennlinie
    ├── text-reveal.tsx     # Wort-für-Wort Textanimation
    └── sections/
        ├── hero.tsx        # Hero mit Titel + Intro
        ├── about.tsx       # Über mich
        ├── work.tsx        # Projekte
        └── footer.tsx      # Kontakt + Social Links
```
