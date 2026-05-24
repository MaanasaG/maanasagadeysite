// New post? Add MDX in content/posts/, then register here (newest first).
import ReadingPost from '@/content/posts/reading-is-the-new-coding.mdx'
import MeasuringPost from '@/content/posts/measuring-developer-productivity.mdx'
import HiringPost from '@/content/posts/hiring-for-editorial-judgment.mdx'

export type Post = {
  slug: string
  title: string
  dek?: string
  date: string // ISO
  dateLabel: string // human label
  Component: (props: Record<string, unknown>) => React.ReactNode
}

export const posts: Post[] = [
  {
    slug: 'reading-is-the-new-coding',
    title: 'Reading Is the New Coding',
    dek: "AI 10x'd what there is to read. Your eyeballs did not get a 10x. Congratulations, you're the bottleneck now.",
    date: '2026-05-24',
    dateLabel: 'May 2026',
    Component: ReadingPost as Post['Component'],
  },
  {
    slug: 'hiring-for-editorial-judgment',
    title: "You're not hiring a developer. You're hiring an editor.",
    dek: "The interview hasn't figured that out yet.",
    date: '2026-05-07',
    dateLabel: 'May 2026',
    Component: HiringPost as Post['Component'],
  },
  {
    slug: 'measuring-developer-productivity',
    title: 'Measuring developer productivity in the age of agents',
    dek: "Token usage isn't it. Lines of code never was. Seven measurable signals that actually tell you who can ship — and who's just orchestrating chaos.",
    date: '2026-05-01',
    dateLabel: 'May 2026',
    Component: MeasuringPost as Post['Component'],
  },
]
