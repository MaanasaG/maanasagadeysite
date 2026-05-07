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
          .
        </p>
        <p className="text-muted">
          I&rsquo;m not actively job-hunting, but I read every email and reply
          to most. If you&rsquo;re a student or early-career engineer, my reply
          rate is even higher.
        </p>
        <p className="text-muted">
          Happy to talk engineering leadership, Workday, AI in enterprise,
          growing things in the Bay Area{' '}
          <em className="not-italic">(plants or teams — genuinely the same skill set)</em>,
          or parenting. On parenting: I have two small humans and approximately
          zero answers, but I will absolutely listen, commiserate, and pretend
          I know what I&rsquo;m doing.{' '}
          <em className="not-italic">Especially gardening.</em>{' '}
          I have strong opinions about soil and I&rsquo;m not even slightly sorry.
        </p>
      </div>
    </section>
  )
}
