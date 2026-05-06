import { SectionLabel } from '@/components/SectionLabel'

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <SectionLabel>About</SectionLabel>
      <div className="prose-body space-y-5 text-[1.0625rem] text-ink">
        <p>
          I&rsquo;ve been at Workday for eleven years. I started in 2014 as a
          software engineer building platform components and customer features,
          grew into a Technical Design Owner across several critical areas, and
          eventually moved into management — first leading the Enterprise
          Frameworks team behind features like the Org Chart, then the Workday
          Student platform team I lead today.
        </p>
        <p>
          The work I&rsquo;m proudest of is quieter than it looks on a résumé.
          Shipping one of Workday&rsquo;s largest initiatives with{' '}
          <em>zero regressions</em>. Building the Student ML team from scratch
          and putting three customer-facing features in production within the
          first year. Spending a month in Dublin training a newly formed team on
          our automation tools. Hosting an internal ML summit for ~600 people.
          Each of those is mostly an exercise in clarity, calm, and trust — not
          heroics.
        </p>
        <p>
          Outside of the org chart, I&rsquo;m active in{' '}
          <em>Women at Workday</em>, run a small internal book club that has
          quietly become one of my favorite parts of the job, and try to mentor
          the way I wish I&rsquo;d been mentored when I was new. I&rsquo;m also
          a mother of two, which has done more to refine my management style
          than any leadership program I&rsquo;ve attended.
        </p>
      </div>
    </section>
  )
}
