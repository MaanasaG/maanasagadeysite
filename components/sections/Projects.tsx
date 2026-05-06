import { SectionLabel } from '@/components/SectionLabel'

type Project = {
  title: string
  one_liner: string
  body: string
  href?: string
  tag?: string
}

const projects: Project[] = [
  {
    title: 'Building the Student ML team',
    tag: 'Workday · 2022 — Present',
    one_liner:
      'No team, no infra, no priors — to three ML-driven student features in customers&rsquo; hands inside a year.',
    body:
      'Hired the team. Designed a model-experimentation framework, data validation pipelines, and a cross-functional ML review process so we could move fast without shipping models we couldn&rsquo;t explain. The hardest part wasn&rsquo;t the models; it was negotiating where ML belonged inside an existing product surface, and earning trust with Product and Architecture before we shipped.',
  },
  {
    title: 'Org Chart & Enterprise Frameworks',
    tag: 'Workday · 2018 — 2021',
    one_liner:
      'Configurable components used across Workday — including one of the most-trafficked features in the product.',
    body:
      'Led the engineering team behind a set of frameworks that other teams composed into their products. Org Chart was the visible one. The unglamorous work was setting up data-driven OKRs that lifted product quality 20%+ and let us measure developer productivity without resorting to lines-of-code theater.',
  },
  {
    title: 'Road to Zero Regressions',
    tag: 'Workday · 2015 — 2018',
    one_liner:
      'Shipped one of Workday&rsquo;s largest initiatives with zero regressions and 40% fewer defects than peer teams.',
    body:
      'A platform-wide push to make quality a property of the architecture rather than an output of QA. Reusable automation frameworks. Regression heatmaps. Pre-release gates. Embedded quality ownership in the design phase — not the test phase. The point wasn&rsquo;t the tooling; it was shifting the team&rsquo;s mental model of where bugs come from.',
  },
  {
    title: 'ML Summit — ~600 attendees',
    tag: 'Workday · 2024',
    one_liner:
      'Led, organized, and spoke at a two-day internal ML summit to align engineering, product, and research.',
    body:
      'From speaker line-up to track design to closing remarks. The goal was less &ldquo;information transfer&rdquo; and more aligning hundreds of people on a shared vocabulary for what we meant by &ldquo;applied ML&rdquo; inside the product. The follow-on work — the actual features that shipped — was the real metric.',
  },
  {
    title: 'Dublin enablement',
    tag: 'Workday · 2017',
    one_liner:
      'Spent a month embedded with a newly formed team in Dublin, ramping them on Workday&rsquo;s automation tools.',
    body:
      'Curriculum design, live architecture sessions, 1:1 mentorship across cultural and time-zone gaps. The lasting outcome was a cross-geo collaboration pattern — and engineers who stayed in touch long after I left.',
  },
]

export function Projects() {
  return (
    <section id="work" className="py-24 sm:py-32">
      <SectionLabel>What I&rsquo;ve shipped</SectionLabel>
      <ol className="space-y-14">
        {projects.map((p) => (
          <li key={p.title}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-serif text-[1.4rem] leading-snug text-ink">
                {p.title}
              </h3>
              {p.tag && (
                <span className="font-mono text-xs text-muted whitespace-nowrap">
                  {p.tag}
                </span>
              )}
            </div>
            <p
              className="mt-3 italic text-[1rem] leading-[1.7] text-ink/90"
              dangerouslySetInnerHTML={{ __html: p.one_liner }}
            />
            <p
              className="mt-3 text-[1rem] leading-[1.75] text-ink"
              dangerouslySetInnerHTML={{ __html: p.body }}
            />
            {p.href && (
              <p className="mt-3 text-[0.9rem]">
                <a href={p.href}>Read more →</a>
              </p>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}
