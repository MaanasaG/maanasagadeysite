'use client'

import { useEffect, useState } from 'react'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
]

export function SectionIndex() {
  const [active, setActive] = useState<string>('about')

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null)

    const obs = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          )[0]
        if (top) setActive(top.target.id)
      },
      // Section is "active" when its top is in the upper third of the viewport.
      { rootMargin: '-20% 0px -65% 0px', threshold: 0 }
    )

    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <nav
      aria-label="Sections"
      className="hidden lg:block fixed left-6 xl:left-10 top-1/2 -translate-y-1/2 z-20 pointer-events-auto"
    >
      <ol className="space-y-[14px]">
        {sections.map((s) => {
          const isActive = active === s.id
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`block font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-200 ${
                  isActive
                    ? 'text-sageDark'
                    : 'text-muted/55 hover:text-ink'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`inline-block align-middle mr-2 h-px transition-all duration-200 ${
                    isActive ? 'w-5 bg-sageDark' : 'w-2 bg-muted/40'
                  }`}
                />
                {s.label}
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
