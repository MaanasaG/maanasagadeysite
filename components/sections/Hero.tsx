export function Hero() {
  return (
    <section
      id="top"
      className="pt-28 sm:pt-36 lg:pt-44 pb-28 sm:pb-36"
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:gap-10">
        <div className="portrait-wrap" aria-hidden="false">
          <img
            src="/photos/portrait.png"
            alt="Maanasa Gadey"
            className="portrait-img"
          />
        </div>

        <div>
          <h1 className="hero-title">Maanasa Gadey</h1>

          <p className="lead mt-6 max-w-[34rem]">
            Sr. Engineering Manager at Workday — leading the ML team for Workday
            Student and the Financial Aid platform.
          </p>

          <p className="mt-3 text-[1.0625rem] text-muted">
            San Carlos, California.
          </p>

          <p className="mt-3 flex gap-4 font-mono text-[11px] uppercase tracking-[0.14em]">
            <a
              href="https://www.linkedin.com/in/maanasagadey/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-ink transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/MaanasaG"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-ink transition-colors"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>

      <p className="mt-10 max-w-[34rem] text-[1.0625rem] leading-[1.7] text-ink">
        Engineering leader. Mother of two. Compulsive gardener. I spend my days
        building teams that ship hard things — and figuring out the human stuff
        that makes that possible. I solve problems in code, in org design, in
        soil, and occasionally in feelings.
      </p>

      <p className="mt-4 max-w-[34rem] text-[1.0rem] leading-[1.7]">
        I&rsquo;m not a writer. I just have thoughts that won&rsquo;t leave me
        alone, so I put them somewhere.{' '}
        <a href="#out-of-my-system" className="underline underline-offset-4 text-ink">
          That somewhere is here →
        </a>
      </p>
    </section>
  )
}
