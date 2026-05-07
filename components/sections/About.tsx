import { SectionLabel } from '@/components/SectionLabel'

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <SectionLabel>About</SectionLabel>

      <h2 className="section-h2">Eleven years, three roles, one company.</h2>

      <p className="lead mt-7 max-w-[36rem]">
        I started at Workday in 2014 and grew into the management roles I have
        now. The arc reads cleaner than it lived.
      </p>

      <h3 className="sub-h3">The arc.</h3>
      <p>
        Software engineer building platform components and customer features.
        Technical Design Owner across several critical areas. Then management
        — first the Enterprise Frameworks team behind the Org Chart, now the
        Workday Student platform team and the ML team I built inside it.
      </p>

      <h3 className="sub-h3">What I&rsquo;m proudest of.</h3>
      <p>
        Shipping one of Workday&rsquo;s largest initiatives with zero
        regressions. Building the Student ML team from nothing — three
        customer-facing features in production within a year. A month in
        Dublin training a newly formed team. Hosting an internal ML summit for
        ~600 people. Each of those is mostly an exercise in clarity, calm, and
        trust — not heroics.
      </p>

      <h3 className="sub-h3">Off the org chart.</h3>
      <p>
        Active in Women at Workday. Run a small internal book club that has
        quietly become one of my favorite parts of the job. Mentor across
        teams. Mother of two, which has done more to refine my management
        style than any leadership program I&rsquo;ve attended.
      </p>
    </section>
  )
}
