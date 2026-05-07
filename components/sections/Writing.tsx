import { SectionLabel } from '@/components/SectionLabel'
import { posts } from '@/lib/posts'

export function Writing() {
  const hasManyPosts = posts.length > 2

  return (
    <section id="out-of-my-system" className="py-24 sm:py-32">
      <SectionLabel>Out of my system</SectionLabel>

      <h2 className="section-h2">Things I had to write down before they ate me.</h2>

      <p className="mt-5 max-w-[36rem] text-muted text-[1.0rem] leading-[1.7]">
        Essays, opinions, and the occasional structured rant. Mostly about
        engineering teams, AI, and quality — but I reserve the right to go
        off-topic.
      </p>

      {hasManyPosts ? (
        /* Index view — used once we have 3+ posts */
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
                  <p className="mt-2 text-[1rem] leading-[1.6] text-muted">
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
      ) : (
        /* Inline view — fine for 1–2 posts */
        <>
          {posts.map((post) => (
            <article key={post.slug} className="mt-14">
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
        </>
      )}

      <p className="mt-16 font-mono text-xs uppercase tracking-[0.18em] text-muted">
        {hasManyPosts ? `${posts.length} essays so far. More incoming.` : 'More incoming.'}
      </p>
    </section>
  )
}
