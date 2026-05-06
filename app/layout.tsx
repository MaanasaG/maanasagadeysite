import type { Metadata } from 'next'
import { Inter, Source_Serif_4, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600'],
})

const serif = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
  weight: ['400', '500'],
  style: ['normal', 'italic'],
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['400'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://maanasagadey.org'),
  title: {
    default: 'Maanasa Gadey',
    template: '%s — Maanasa Gadey',
  },
  description:
    'Software Engineering Manager at Workday. Building resilient platforms, ML teams, and the people that ship them.',
  authors: [{ name: 'Maanasa Gadey' }],
  openGraph: {
    title: 'Maanasa Gadey',
    description:
      'Software Engineering Manager at Workday. Building resilient platforms, ML teams, and the people that ship them.',
    url: 'https://maanasagadey.org',
    siteName: 'Maanasa Gadey',
    type: 'website',
  },
  twitter: { card: 'summary' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${serif.variable} ${mono.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
