import { SectionLabel } from '@/components/SectionLabel'
import { posts } from '@/lib/posts'

export function Writing() {
  return (
    <section id="out-of-my-system" className="py-24 sm:py-32">
      <SectionLabel>Out of my system</SectionLabel>

      <h2 className="section-h2">Things I had to write down before they ate me.</h2>

      <p className="mt-5 max-w-[36rem] text-[1.0rem] leading-[1.7]">
        Opinions, arguments, and the occasional structured rant. Mostly about
        engineering teams, AI, and quality — but I reserve the right to go
        off-topic.
      </p>

      <ol className="mt-12 space-y-10 max-w-[36rem]">
        {posts.map((post) => (
          <li key={post.slug}>
            <article>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                {post.dateLabel}
              </p>
              <h3 className="mt-2 font-serif text-[1.4rem] leading-[1.2] tracking-[-0.005em] text-ink">
                <a href={`/posts/${post.slug}/`} className="hover:text-sageDark transition-colors">
                  {post.title}
                </a>
              </h3>
              {post.dek && (
                <p className="mt-2 text-[1rem] leading-[1.6]">
                  {post.dek}
                </p>
              )}
              <p className="mt-3">
                <a
                  href={`/posts/${post.slug}/`}
                  className="font-mono text-[11px] uppercase tracking-[0.14em] text-sageDark hover:text-ink transition-colors"
                >
                  Read →
                </a>
              </p>
            </article>
          </li>
        ))}
      </ol>

      <p className="mt-16 font-mono text-xs uppercase tracking-[0.18em] text-muted">
        {posts.length} posts so far. More incoming.
      </p>
    </section>
  )
}
