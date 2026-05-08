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
