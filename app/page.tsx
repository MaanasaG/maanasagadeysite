import { PlantCanvas } from '@/components/PlantCanvas'
import { SectionIndex } from '@/components/SectionIndex'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { Leadership } from '@/components/sections/Leadership'
import { Writing } from '@/components/sections/Writing'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/*
        Plant — fixed full-viewport, behind text. mix-blend-mode: multiply on
        the canvas (set in globals.css) makes the WebP's near-white background
        dissolve into the page background, leaving only the plant's strokes
        visible. The plant feels printed onto the page rather than placed on
        top of it. Composition: image is anchored toward the right-center
        (translateX positive) so the plant grows to the right of the text
        column without ever sharing a hard boundary.
      */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 hidden md:block"
        style={{ zIndex: 0 }}
      >
        <div className="h-full w-full">
          {/* Plant — narrow right rail. Opacity is animated by PlantCanvas
              based on scroll progress: invisible in the hero, easing in as
              the visitor reads About / Experience, present-but-quiet by
              Contact. The container is sized to match a quiet companion. */}
          <div className="absolute right-0 top-0 h-full w-[clamp(18rem,24vw,24rem)]">
            <PlantCanvas />
          </div>
        </div>
      </div>

      {/* Mobile: PlantCanvas tucked into the bottom-right corner. Smaller
          and even quieter than desktop — at 390px wide, even a faint plant
          can compete with the text. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 md:hidden"
        style={{ zIndex: 0 }}
      >
        <div className="absolute right-[-12vw] bottom-0 h-[42vh] w-[55vw]">
          <PlantCanvas />
        </div>
      </div>

      {/* Section index — sticky left gutter on lg+ screens, gives the
          reader orientation without a top nav. */}
      <SectionIndex />

      {/* Content column — centered in the viewport so the text reads as the
          page's substantial body. The plant sits in the right rail at low
          opacity, so any overlap on wide viewports disappears into the bg. */}
      <div className="relative z-10 mx-auto w-full">
        <div className="mx-auto w-full px-6 sm:px-10 lg:px-12">
          <div className="mx-auto max-w-prose">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Leadership />
            <Writing />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </main>
  )
}
