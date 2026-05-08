import { notFound } from 'next/navigation'
import { posts } from '@/lib/posts'
import type { Metadata } from 'next'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.dek,
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  return (
    <main className="relative z-10 mx-auto w-full">
      <div className="mx-auto w-full px-6 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-prose pt-20 sm:pt-28 pb-24 sm:pb-32">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            {post.dateLabel}
          </p>

          <h1 className="mt-4 font-serif text-[clamp(1.875rem,3.4vw,2.25rem)] leading-[1.18] tracking-[-0.012em] text-ink">
            {post.title}
          </h1>

          {post.dek && (
            <p className="mt-5 font-serif italic text-[1.05rem] leading-[1.6] text-ink/85 max-w-[34rem]">
              {post.dek}
            </p>
          )}

          <div className="mt-12 essay">
            <post.Component />
          </div>

          <div className="mt-16 pt-8 border-t border-sage/30">
            <a
              href="/#out-of-my-system"
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-sageDark hover:text-ink transition-colors"
            >
              ← Back to all posts
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
