import { SectionLabel } from '@/components/SectionLabel'
import { posts } from '@/lib/posts'

export function Writing() {
  return (
    <section id="writing" className="py-24 sm:py-32">
      <SectionLabel>Recent writing</SectionLabel>

      {posts.map((post) => (
        <article key={post.slug} className="mt-2">
          <header className="mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
              {post.dateLabel}
            </p>
            <h3 className="mt-3 font-serif text-[1.9rem] sm:text-[2.1rem] leading-[1.15] tracking-[-0.005em] text-ink">
              {post.title}
            </h3>
            {post.dek && (
              <p className="mt-5 font-serif italic text-[1.05rem] leading-[1.6] text-ink/85 max-w-[34rem]">
                {post.dek}
              </p>
            )}
          </header>
          <div className="essay">
            <post.Component />
          </div>
        </article>
      ))}

      <p className="mt-20 font-mono text-xs uppercase tracking-[0.18em] text-muted">
        More posts coming.
      </p>
    </section>
  )
}
