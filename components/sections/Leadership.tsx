import { SectionLabel } from '@/components/SectionLabel'

export function Leadership() {
  return (
    <section id="leadership" className="py-24 sm:py-32">
      <SectionLabel>Leadership &amp; community</SectionLabel>
      <div className="prose-body space-y-5 text-[1.0625rem] text-ink">
        <p>
          I&rsquo;ve come to think of engineering as an environment-design
          problem. If the environment shines, individual performance follows.
          My teams consistently report high trust and clarity, low escalation
          rates, and the kind of retention you only get when people actually
          want to be there. That&rsquo;s not a vibe — it&rsquo;s an outcome of
          deliberate decisions about how meetings run, how decisions get
          documented, and how we treat each other when something breaks.
        </p>
        <p>
          I&rsquo;m active in <em>Women at Workday</em>, run an internal book
          club that has quietly become one of my favorite parts of the job, and
          mentor across teams. The shape of the mentorship is mostly listening
          — most engineers I work with already know what to do; they need
          someone to remove the structural noise that&rsquo;s making it hard.
        </p>
        <p>
          The line I keep coming back to: <em>systems &gt; heroics</em>. Quality
          by design beats quality by vigilance. Clarity beats pressure. The job
          of an engineering manager is to make the boring thing — the one that
          works — be the easiest thing to do.
        </p>
      </div>
    </section>
  )
}
