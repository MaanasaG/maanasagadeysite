import { SectionLabel } from '@/components/SectionLabel'

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <SectionLabel>Contact</SectionLabel>
      <div className="prose-body space-y-3 text-[1.0625rem] text-ink">
        <p>
          The best way to reach me is by email at{' '}
          <a href="mailto:maanasavamsi09@gmail.com">maanasavamsi09@gmail.com</a>
          . I read everything; I reply to most things.
        </p>
        <p>
          You can also find me on{' '}
          <a
            href="https://www.linkedin.com/in/maanasagadey/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </section>
  )
}
