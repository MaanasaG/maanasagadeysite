import { SectionLabel } from '@/components/SectionLabel'

export function Leadership() {
  return (
    <section id="leadership" className="py-24 sm:py-32">
      <SectionLabel>How I run a team</SectionLabel>

      <h2 className="section-h2">Engineering is an environment-design problem.</h2>

      <p className="mt-7 max-w-[36rem] text-ink leading-[1.75]">
        I think about teams the way I think about gardens. You can&rsquo;t
        pull a plant upward to make it grow faster. You can only fix the soil,
        manage the light, clear the weeds — and then step back. The plant does
        the rest. The best teams don&rsquo;t need you every day. They need the
        right conditions.
      </p>

      <blockquote className="pullquote">
        &ldquo;Fix the soil, not the plant.&rdquo;
      </blockquote>

      <p className="max-w-[36rem] text-ink leading-[1.75]">
        The teams I&rsquo;ve built report high trust, high clarity, low
        escalation, and the kind of retention you only get when people actually
        want to be there. None of that is a vibe. It&rsquo;s the outcome of
        deliberate decisions about how meetings run, how decisions get
        documented, and how we treat each other when something breaks.{' '}
        <em className="not-italic text-muted">Especially when something breaks.</em>
      </p>

      <p className="mt-6 max-w-[36rem] text-ink leading-[1.75]">
        I learned this the hard way: the first time I tried to fix a struggling
        team by pushing harder on individuals, it didn&rsquo;t work. The second
        time, I fixed the meeting structure, the on-call rotation, and the way
        we wrote RFCs. It worked immediately. The team hadn&rsquo;t changed —
        the noise had.
      </p>

      <p className="mt-6 max-w-[36rem] text-ink leading-[1.75]">
        My north star:{' '}
        <strong className="font-normal" style={{ color: 'var(--clay)' }}>heart</strong>
        ,{' '}
        <strong className="font-normal" style={{ color: 'var(--clay)' }}>hustle</strong>
        , and{' '}
        <strong className="font-normal" style={{ color: 'var(--clay)' }}>humor</strong>
        . The heart keeps the work human. The hustle gets things done. The humor
        keeps everyone sane when the sprint goes sideways.{' '}
        <em className="not-italic text-muted">And the sprint always goes sideways.</em>
      </p>

      <ul className="philosophy-list mt-10">
        <li>a struggling engineer usually has a structural problem, not a character flaw — I&rsquo;ve never seen it the other way around</li>
        <li>if you have to say it three times, write it down</li>
        <li>pressure without direction is just noise</li>
        <li>automate the boring stuff — the boring stuff is load-bearing</li>
        <li>if the whole team is staying late, something is wrong with the planning, not the people</li>
      </ul>
    </section>
  )
}
