import { SectionLabel } from '@/components/SectionLabel'

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <SectionLabel>Contact</SectionLabel>

      <h2 className="section-h2">Get in touch.</h2>

      <div className="mt-7 space-y-4 text-ink leading-[1.75] max-w-[36rem]">
        <p>
          The best way to reach me is by email at{' '}
          <a href="mailto:maanasavamsi09@gmail.com">maanasavamsi09@gmail.com</a>
          . You can also find me on{' '}
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
          to most.
        </p>
      </div>
    </section>
  )
}
