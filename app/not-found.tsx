import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col justify-center px-6 sm:px-10">
      <div className="mx-auto w-full max-w-prose">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted mb-6">
          404
        </p>
        <h1 className="section-h2 mb-6">
          This page is also out of my system.
        </h1>
        <p className="text-[1.0625rem] leading-[1.7] text-muted mb-10">
          Whatever you were looking for isn&rsquo;t here. Might have moved,
          might have never existed.{' '}
          <em className="not-italic">(I&rsquo;m investigating.)</em>
        </p>
        <Link
          href="/"
          className="font-mono text-[11px] uppercase tracking-[0.16em] text-sageDark hover:text-ink transition-colors"
        >
          ← Back to the actual site
        </Link>
      </div>
    </main>
  )
}
