'use client'

import { motion } from 'framer-motion'
import Reveal from '@/components/reveal'
import SmoothLine from '@/components/smooth-line'

const projects = [
  {
    title: 'benow.de',
    description: 'Persönliche Website & digitale Visitenkarte',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    url: 'https://letsbenow.de',
  },
  {
    title: 'Frontend Architecture',
    description: 'Skalierbare Design Systems und Component Libraries',
    tags: ['React', 'TypeScript', 'Storybook'],
  },
  {
    title: 'Creative Web Experiences',
    description: 'Immersive Webseiten mit starker Motion und Typografie',
    tags: ['GSAP', 'WebGL', 'Three.js'],
  },
]

export default function Work() {
  return (
    <section className="relative px-6 py-32 md:px-12 md:py-48 lg:px-20">
      <SmoothLine className="absolute top-0 left-6 right-6 md:left-12 md:right-12 lg:left-20 lg:right-20" />

      <div className="mx-auto max-w-6xl">
        {/* Label */}
        <Reveal delay={0.1}>
          <span className="text-xs font-light tracking-[0.3em] uppercase text-[var(--color-text-muted)]">
            Ausgewählte Projekte
          </span>
        </Reveal>

        {/* Projects */}
        <div className="mt-16 md:mt-24">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={0.1 + i * 0.1}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  const content = (
    <motion.div
      className="group relative border-b border-[var(--color-border)] py-10 md:py-14"
      whileHover="hover"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:gap-8">
          <span className="font-mono text-xs text-[var(--color-text-muted)]">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="font-serif text-2xl font-normal text-[var(--color-text-primary)] md:text-3xl lg:text-4xl">
            <motion.span
              className="inline-block"
              variants={{
                hover: { x: 12 },
              }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {project.title}
            </motion.span>
          </h3>
        </div>
        <p className="max-w-xs text-sm font-light text-[var(--color-text-secondary)] md:text-right">
          {project.description}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-4 md:ml-16">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-light tracking-wider uppercase text-[var(--color-text-muted)]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Hover line */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-[var(--color-accent-dim)]"
        initial={{ width: 0 }}
        variants={{
          hover: { width: '100%' },
        }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
      />
    </motion.div>
  )

  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </a>
    )
  }

  return content
}
