import { PlantCanvas } from '@/components/PlantCanvas'
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
          {/* Plant area — bigger, more central. The container spans roughly
              the right two-thirds of the viewport with object-fit: cover, so
              the plant lands centered ~65% from the left. */}
          <div className="absolute right-0 top-0 h-full w-[clamp(40rem,68vw,60rem)]">
            <PlantCanvas />
          </div>
        </div>
      </div>

      {/* Mobile: same PlantCanvas — it auto-detects mobile and renders a
          static frame 60 with the same in-canvas blend pipeline. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 md:hidden"
        style={{ zIndex: 0 }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[80vh] w-full">
            <PlantCanvas />
          </div>
        </div>
      </div>

      {/* Content column — text-forward, sits on the left of the page so the
          plant has room to breathe to its right. Max-width prose for legibility. */}
      <div className="relative z-10 mx-auto w-full">
        <div className="mx-auto w-full max-w-[78rem] px-6 sm:px-10 lg:px-16">
          <div className="max-w-prose md:pl-2 lg:pl-4">
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
