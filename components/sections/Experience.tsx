import { SectionLabel } from '@/components/SectionLabel'

type Role = {
  dates: string
  title: string
  org: string
  note: string
}

const roles: Role[] = [
  {
    dates: '2026 — Now',
    title: 'Sr. Software Development Engineering Manager',
    org: 'Workday',
    note: 'Still figuring out what the "Sr." means. Mostly it means the problems got bigger.',
  },
  {
    dates: '2024 — 2026',
    title: 'Software Development Engineering Manager — Student ML & Financial Aid',
    org: 'Workday',
    note: 'Built the ML team from scratch while also owning the systems that determine whether students get their financial aid on time. The stakes keep you very, very honest.',
  },
  {
    dates: '2022 — 2024',
    title: 'Software Development Engineering Manager — Enterprise Frameworks',
    org: 'Workday',
    note: "Led the Org Chart team. Turns out building the product that visualises everyone else's reporting structure makes you think very carefully about your own.",
  },
  {
    dates: '2021 — 2022',
    title: 'Associate Software Development Engineering Manager',
    org: 'Workday',
    note: "First management role. Learned very quickly that managing engineers is nothing like being one. Also learned that's the fun part.",
  },
  {
    dates: '2018 — 2021',
    title: 'Software Engineer III — Web Applications',
    org: 'Workday',
    note: 'Grew into full ownership — technical design, scrum mastering, and a zero-regression obsession that still defines how I think about quality.',
  },
  {
    dates: '2016 — 2018',
    title: 'Software Engineer II — Web Applications',
    org: 'Workday',
    note: 'Wanted more challenges. Got more challenges. Moved deeper into feature development and never looked back.',
  },
  {
    dates: '2014 — 2016',
    title: 'Software Automation Engineer',
    org: 'Workday',
    note: "Where the Workday journey started. Wrote tests before I fully understood what I was testing — turns out that's a great way to learn a codebase fast.",
  },
  {
    dates: '2011 — 2013',
    title: 'Software Engineer — Mobile & Services',
    org: 'Peel',
    note: 'Shipped Android apps at a TV remote control startup. Yes, that was a real thing. It was genuinely great.',
  },
  {
    dates: 'Earlier',
    title: 'Flite, VMware (intern), Capgemini',
    org: 'San Francisco · Palo Alto · Hyderabad',
    note: 'QA, internships, early chaos. Everyone starts somewhere.',
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <SectionLabel>Experience</SectionLabel>

      <h2 className="section-h2">Where the time went.</h2>

      <ol className="mt-12 space-y-10">
        {roles.map((r) => (
          <li
            key={`${r.title}-${r.dates}`}
            className="grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-x-8 gap-y-1"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted pt-[0.3rem]">
              {r.dates}
            </div>
            <div>
              <h3 className="font-serif text-[1.3rem] leading-snug text-ink">
                {r.title}
              </h3>
              <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                {r.org}
              </p>
              <p className="mt-2 text-[0.9rem] leading-[1.65] text-muted">
                {r.note}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
