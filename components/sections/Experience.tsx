import { SectionLabel } from '@/components/SectionLabel'

type Role = {
  title: string
  org: string
  dates: string
  bullets: string[]
}

const roles: Role[] = [
  {
    title: 'Engineering Manager — Workday Student',
    org: 'Workday',
    dates: '2021 — Present',
    bullets: [
      'Manage one of the core financial-aid teams owning foundational architecture for the Workday Student platform.',
      'Built the Student ML team from scratch — hiring, structure, model-experimentation framework, data validation pipelines, and a cross-functional ML review process.',
      'Shipped multiple high-impact customer features in partnership with Product, Design, and Architecture.',
    ],
  },
  {
    title: 'Software Engineering Manager — Enterprise Frameworks',
    org: 'Workday',
    dates: '2018 — 2021',
    bullets: [
      'Led the engineering team behind configurable components used across Workday products, including the Org Chart.',
      'Improved product quality 20%+ and lifted developer productivity through data-driven OKRs.',
      'Grew the team from 3 to 6, designed a personalized onboarding program, and managed across time zones.',
    ],
  },
  {
    title: 'Software Application Engineer',
    org: 'Workday',
    dates: '2014 — 2018',
    bullets: [
      'Technical Design Owner for several critical document areas; zero regressions on the supplier-accounts dev team while shipping new features.',
      'Wrote the automation that delivered the “Road to Zero Regressions” initiative — 40% fewer defects than peer teams.',
      'Spent a month in Dublin training newly formed teams on Workday&rsquo;s internal automation tools.',
    ],
  },
  {
    title: 'Software Engineer',
    org: 'PEEL Inc.',
    dates: '2011 — 2013',
    bullets: [
      'Designed, developed, and shipped Android apps with a focus on performance and clean release execution.',
      'Built an automation framework using Robotium for phone and tablet apps; led web-services creation/testing in Groovy and SoapUI.',
    ],
  },
  {
    title: 'Earlier',
    org: 'FLITE (formerly Widgetbox), VMware (intern), Capgemini',
    dates: '',
    bullets: [
      'Software engineering roles in San Francisco, Palo Alto, and Hyderabad.',
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <SectionLabel>Experience</SectionLabel>
      <ol className="space-y-12">
        {roles.map((r) => (
          <li key={`${r.title}-${r.dates}`} className="grid gap-2">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-serif text-[1.25rem] leading-snug text-ink">
                {r.title}
              </h3>
              <span className="font-mono text-xs text-muted whitespace-nowrap">
                {r.dates}
              </span>
            </div>
            <p className="text-[0.95rem] text-muted">{r.org}</p>
            <ul className="mt-2 space-y-2 text-[1rem] leading-[1.7] text-ink">
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
          </li>
        ))}
      </ol>
    </section>
  )
}
