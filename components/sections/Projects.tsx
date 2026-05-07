import { SectionLabel } from '@/components/SectionLabel'

type Project = {
  title: string
  tag: string
  stat: string
  statLabel: string
  body: string
}

const projects: Project[] = [
  {
    title: 'Building the Student ML team',
    tag: 'Workday · 2022 — Now',
    stat: '3',
    statLabel: 'ML features in year one',
    body:
      'Started from zero: no team, no infra, no priors. Hired and coached the core group, set the operating system (experimentation framework, data validation, review gates), and partnered across Product/Eng/Legal on where ML belongs inside a regulated product. The win wasn&rsquo;t the models; it was trust, velocity, and a repeatable way to ship safely.',
  },
  {
    title: 'Org Chart & Enterprise Frameworks',
    tag: 'Workday · 2018 — 2021',
    stat: '20%+',
    statLabel: 'lift in product quality',
    body:
      'Led a platform team building frameworks consumed across multiple Workday products. Org Chart was the visible surface; the leadership work was the system underneath: shared standards, adoption plans, and data-driven OKRs that raised quality without performance theater. Built alignment first, then shipped durable leverage.',
  },
  {
    title: 'Road to Zero Regressions',
    tag: 'Workday · 2015 — 2018',
    stat: '0',
    statLabel: 'regressions on a flagship release',
    body:
      'Drove a platform-wide shift: make quality a property of architecture, not an output of QA. Built reusable automation, regression heatmaps, and pre-release gates, but the durable change was cultural: design reviews that assumed failure modes up front and teams that owned quality as a first-class product requirement.',
  },
  {
    title: 'ML Summit',
    tag: 'Workday · 2024',
    stat: '2',
    statLabel: 'days, one shared vocabulary',
    body:
      'Orchestrated an internal ML summit end-to-end — program, speakers, narrative, exec alignment. It wasn&rsquo;t a conference; it was an operating mechanism: get engineers across the org aligned on a shared vocabulary, risk posture, and the product and engineering decisions that actually matter before the chaos of scaling ML inside the product.',
  },
  {
    title: 'Dublin enablement',
    tag: 'Workday · 2017',
    stat: '1mo',
    statLabel: 'embedded with a new geo team',
    body:
      'Embedded in Dublin to unblock a newly formed geo team: built the onboarding curriculum, ran live architecture sessions, and mentored engineers 1:1. The outcome wasn&rsquo;t a training deck; it was a collaboration pattern that reduced dependency thrash and helped the new team ship independently.',
  },
]

export function Projects() {
  return (
    <section id="work" className="py-24 sm:py-32">
      <SectionLabel>The greatest hits</SectionLabel>

      <h2 className="section-h2">Five things worth talking about.</h2>

      <ol className="mt-14 space-y-16">
        {projects.map((p) => (
          <li key={p.title}>
            <article className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-x-10 gap-y-4">
              <div className="sm:text-right sm:pt-1">
                <span className="stat">{p.stat}</span>
                <span className="stat-label">{p.statLabel}</span>
              </div>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-serif text-[1.4rem] leading-snug text-ink">
                    {p.title}
                  </h3>
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted whitespace-nowrap">
                    {p.tag}
                  </span>
                </div>
                <p
                  className="mt-3 text-ink leading-[1.75]"
                  dangerouslySetInnerHTML={{ __html: p.body }}
                />
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}
