import { SectionLabel } from '@/components/SectionLabel'

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <SectionLabel>Say hi</SectionLabel>

      <h2 className="section-h2">Let&rsquo;s talk.</h2>

      <div className="mt-7 space-y-4 leading-[1.75] max-w-[36rem]">
        <p>
          Best way to reach me:{' '}
          <a href="mailto:maanasavamsi09@gmail.com">maanasavamsi09@gmail.com</a>
          . Also on{' '}
          <a
            href="https://www.linkedin.com/in/maanasagadey/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          {' '}and{' '}
          <a
            href="https://github.com/MaanasaG"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
        <p>
          I&rsquo;m not actively job-hunting, but I read every email and reply
          to most. If you&rsquo;re a student or early-career engineer, my reply
          rate is even higher.
        </p>
        <p>
          Happy to talk engineering leadership, AI in enterprise, growing
          things in the Bay Area{' '}
          <em className="not-italic">(plants or teams)</em>, or
          parenting with zero answers and full honesty.
        </p>
      </div>
    </section>
  )
}
