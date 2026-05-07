import { SectionLabel } from '@/components/SectionLabel'

type Role = {
  dates: string
  title: string
  org: string
  bullets: string[]
}

const roles: Role[] = [
  {
    dates: '2021 — Now',
    title: 'Engineering Manager — Workday Student',
    org: 'Workday',
    bullets: [
      'Lead a core financial-aid team owning foundational architecture for the Workday Student platform.',
      'Built the Student ML team from scratch — hiring, structure, model-experimentation framework, data validation pipelines, cross-functional ML review.',
    ],
  },
  {
    dates: '2018 — 2021',
    title: 'Software Engineering Manager — Enterprise Frameworks',
    org: 'Workday',
    bullets: [
      'Led the team behind configurable components used across Workday — including the Org Chart.',
      'Lifted product quality 20%+ via data-driven OKRs; grew the team from 3 to 6 with a personalized onboarding program.',
    ],
  },
  {
    dates: '2014 — 2018',
    title: 'Software Application Engineer',
    org: 'Workday',
    bullets: [
      'Technical Design Owner for several critical document areas; zero regressions on the supplier-accounts dev team while shipping new features.',
      'Wrote the automation that delivered “Road to Zero Regressions” — 40% fewer defects than peer teams.',
    ],
  },
  {
    dates: '2011 — 2013',
    title: 'Software Engineer',
    org: 'PEEL Inc.',
    bullets: [
      'Shipped Android apps with focus on performance and clean release execution.',
      'Built an automation framework with Robotium; led web-services creation/testing in Groovy and SoapUI.',
    ],
  },
  {
    dates: 'Earlier',
    title: 'FLITE, VMware (intern), Capgemini',
    org: 'San Francisco · Palo Alto · Hyderabad',
    bullets: [],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <SectionLabel>Experience</SectionLabel>

      <h2 className="section-h2">Where the time went.</h2>

      <ol className="mt-12 space-y-12">
        {roles.map((r) => (
          <li
            key={`${r.title}-${r.dates}`}
            className="grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-x-8 gap-y-2"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted pt-[0.4rem]">
              {r.dates}
            </div>
            <div>
              <h3 className="font-serif text-[1.3rem] leading-snug text-ink">
                {r.title}
              </h3>
              <p className="mt-1 text-[0.95rem] text-muted">{r.org}</p>
              {r.bullets.length > 0 && (
                <ul className="mt-4 space-y-2.5 text-ink">
                  {r.bullets.map((b, i) => (
                    <li key={i} className="pl-5 relative">
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-[0.85em] block h-px w-3 bg-hairline"
                      />
                      <span dangerouslySetInnerHTML={{ __html: b }} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
