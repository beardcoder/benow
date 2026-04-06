'use client'

import Reveal from '@/components/reveal'
import Parallax from '@/components/parallax'
import SmoothLine from '@/components/smooth-line'

export default function About() {
  return (
    <section className="relative px-6 py-32 md:px-12 md:py-48 lg:px-20">
      <SmoothLine className="absolute top-0 left-6 right-6 md:left-12 md:right-12 lg:left-20 lg:right-20" />

      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-8">
          {/* Label */}
          <Reveal className="md:col-span-4" delay={0.1}>
            <span className="text-xs font-light tracking-[0.3em] uppercase text-[var(--color-text-muted)]">
              Über mich
            </span>
          </Reveal>

          {/* Content */}
          <div className="md:col-span-8">
            <Parallax offset={20}>
              <Reveal delay={0.2}>
                <p className="font-serif text-2xl font-normal leading-relaxed tracking-tight-custom text-[var(--color-text-primary)] md:text-3xl lg:text-4xl text-balance">
                  Ich gestalte und entwickle digitale Erlebnisse — mit Fokus auf
                  Ästhetik, Performance und handwerkliche Präzision.
                </p>
              </Reveal>

              <Reveal delay={0.4}>
                <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-[var(--color-text-secondary)] md:text-lg">
                  Als Frontend-Entwickler und Designer aus Bayern verbinde ich
                  technische Exzellenz mit gestalterischem Anspruch. Ich arbeite
                  mit modernen Web-Technologien und lege Wert auf sauberen Code,
                  durchdachte Typografie und Liebe zum Detail.
                </p>
              </Reveal>

              <Reveal delay={0.5}>
                <div className="mt-12 flex flex-wrap gap-x-12 gap-y-6">
                  {[
                    'React & Next.js',
                    'TypeScript',
                    'Motion Design',
                    'UI/UX',
                    'Design Systems',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="text-sm font-light text-[var(--color-accent-dim)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Reveal>
            </Parallax>
          </div>
        </div>
      </div>
    </section>
  )
}
