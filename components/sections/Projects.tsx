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
      'No team, no infra, no priors. Hired the team. Designed a model-experimentation framework, data validation pipelines, and a cross-functional ML review process. The hard part wasn&rsquo;t the models — it was negotiating where ML belonged inside an existing product and earning trust before we shipped.',
  },
  {
    title: 'Org Chart & Enterprise Frameworks',
    tag: 'Workday · 2018 — 2021',
    stat: '20%+',
    statLabel: 'lift in product quality',
    body:
      'Led the team behind frameworks composed across Workday products. Org Chart was the visible one. The unglamorous work was setting up data-driven OKRs that lifted quality and let us measure developer productivity without resorting to lines-of-code theater.',
  },
  {
    title: 'Road to Zero Regressions',
    tag: 'Workday · 2015 — 2018',
    stat: '0',
    statLabel: 'regressions on a flagship release',
    body:
      'A platform-wide push to make quality a property of the architecture, not an output of QA. Reusable automation. Regression heatmaps. Pre-release gates. Quality ownership in the design phase. The point wasn&rsquo;t the tooling; it was shifting where the team thought bugs come from.',
  },
  {
    title: 'ML Summit',
    tag: 'Workday · 2024',
    stat: '600',
    statLabel: 'engineers, two days',
    body:
      'Led, organized, and spoke at an internal ML summit. Speaker line-up to closing remarks. The goal wasn&rsquo;t information transfer; it was aligning hundreds of people on a shared vocabulary for applied ML inside the product. The features that shipped after were the real metric.',
  },
  {
    title: 'Dublin enablement',
    tag: 'Workday · 2017',
    stat: '1mo',
    statLabel: 'embedded with a new geo team',
    body:
      'A month in Dublin training a newly formed team on Workday&rsquo;s automation tools. Curriculum, live architecture sessions, 1:1 mentoring across cultural and time-zone gaps. The lasting outcome was a cross-geo collaboration pattern — and engineers who stayed in touch long after I left.',
  },
]

export function Projects() {
  return (
    <section id="work" className="py-24 sm:py-32">
      <SectionLabel>What I&rsquo;ve shipped</SectionLabel>

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
