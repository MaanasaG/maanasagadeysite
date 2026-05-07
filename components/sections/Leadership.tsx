import { SectionLabel } from '@/components/SectionLabel'

export function Leadership() {
  return (
    <section id="leadership" className="py-24 sm:py-32">
      <SectionLabel>Leadership</SectionLabel>

      <h2 className="section-h2">Engineering is an environment-design problem.</h2>

      <p className="mt-7 max-w-[36rem] text-ink leading-[1.75]">
        The teams I&rsquo;ve built consistently report high trust, high
        clarity, low escalation, and the kind of retention you only get when
        people actually want to be there. None of that is a vibe — it&rsquo;s
        the outcome of deliberate decisions about how meetings run, how
        decisions get documented, and how we treat each other when something
        breaks.
      </p>

      <blockquote className="pullquote">
        &ldquo;If the environment shines, individual performance follows.&rdquo;
      </blockquote>

      <p className="max-w-[36rem] text-ink leading-[1.75]">
        The shape of mentorship I practice is mostly listening. Most engineers
        I work with already know what to do; they need someone to remove the
        structural noise that&rsquo;s making it hard.
      </p>

      <ul className="philosophy-list mt-10">
        <li>systems &gt; heroics</li>
        <li>clarity &gt; pressure</li>
        <li>quality by design, not quality by vigilance</li>
        <li>the boring thing that works should be the easy thing to do</li>
      </ul>
    </section>
  )
}
