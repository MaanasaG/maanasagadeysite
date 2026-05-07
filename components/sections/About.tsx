import { SectionLabel } from '@/components/SectionLabel'

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <SectionLabel>About-ish</SectionLabel>

      <h2 className="section-h2">Eleven years, one company, a few plot twists.</h2>

      <p className="lead mt-7 max-w-[36rem]">
        I started at Workday in 2014 and grew into the management roles I have
        now. The arc reads cleaner than it lived.{' '}
        <em className="not-italic text-muted">(Most arcs do.)</em>
      </p>

      <h3 className="sub-h3">The arc.</h3>
      <p className="max-w-[36rem] leading-[1.75]">
        Automation engineer first — writing test infrastructure before I fully
        understood what I was testing. Then into software development, owning
        features and technical design. Then management: Enterprise Frameworks,
        then Workday Student, then the ML team I built from scratch inside it.
        No one handed me a roadmap. I just kept saying yes to the hard thing.
      </p>

      <h3 className="sub-h3">What I&rsquo;m proudest of.</h3>
      <p className="max-w-[36rem] leading-[1.75]">
        Zero regressions on one of Workday&rsquo;s biggest releases. An ML
        team built from nothing that shipped in year one. Project Brain —
        which no org chart approved but everyone needed. A month in Dublin.
        A summit that turned scattered agendas across the org into one shared
        direction.{' '}
        <em className="not-italic text-muted">
          The through-line on all of it: get the conditions right and people
          surprise you.
        </em>
      </p>

      <h3 className="sub-h3">When I&rsquo;m not at my laptop.</h3>

      <div className="photo-grid mt-8">
        <figure className="photo-figure">
          <img
            src="/photos/succulents.png"
            alt="A hand holding a bowl of succulents — greens, blues, purples, a tiny cactus"
            className="photo-img"
          />
          <figcaption className="photo-caption">
            Current obsession: fitting as many succulents as possible into one bowl.
            The metaphor writes itself.
          </figcaption>
        </figure>

        <figure className="photo-figure">
          <img
            src="/photos/ganesh.png"
            alt="A Ganesh made entirely from vegetables — tomato head, cucumber ears, a dark twig trunk"
            className="photo-img"
          />
          <figcaption className="photo-caption">
            Ganesh made from tomato, cucumber, and a rogue twig. My kids were
            impressed for approximately four minutes.
          </figcaption>
        </figure>
      </div>

      <p className="mt-8 max-w-[36rem] leading-[1.75]">
        My head is always in the garden — what to sow, what to harvest, how to
        help <em>this</em> plant, how to grow <em>this</em> person. I grew up
        deciding the menu based on what the garden gave. I know no other way.
        The smell of soil is still my reset button.
      </p>

      <div className="photo-aside mt-8">
        <figure className="photo-figure photo-figure--wide">
          <img
            src="/photos/harvest.png"
            alt="Six bowls of freshly harvested greens arranged in a circle on a wooden table"
            className="photo-img"
          />
          <figcaption className="photo-caption">
            A full harvest morning. Six bowls, zero trips to the grocery store.
            This is what shipping feels like.
          </figcaption>
        </figure>
      </div>

      <p className="mt-8 max-w-[36rem] leading-[1.75]">
        Active in Women at Workday. Mentor across teams. Mother of two —
        those seedlings below are named after them — which has done more to
        refine my management style than any leadership program I&rsquo;ve
        attended.{' '}
        <em className="not-italic text-muted">
          A toddler will give you feedback no 360 survey ever will.
        </em>
      </p>

      <div className="photo-aside mt-6">
        <figure className="photo-figure photo-figure--wide">
          <img
            src="/photos/seedlings.png"
            alt="A tray of tiny green seedlings growing in dark soil"
            className="photo-img"
          />
          <figcaption className="photo-caption">
            Named after my kids. Patience required.
          </figcaption>
        </figure>
      </div>

      <p className="mt-8 max-w-[36rem] leading-[1.75] text-muted">
        The gardening lens and the management lens are the same lens, honestly.
        You read the environment, you work with what&rsquo;s actually there,
        and you play the long game.
      </p>
    </section>
  )
}
