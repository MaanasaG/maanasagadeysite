import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel runs Next.js natively — full SSG pipeline (no `output: 'export'`),
  // so the build emits `.next/` with routes-manifest, image optimization, etc.
  // The site has no server logic, so SSG produces identical static HTML to
  // what `export` did, with the bonus of Vercel's optimized delivery.
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  reactStrictMode: true,
  trailingSlash: true,
}

export default withMDX(nextConfig)
