'use client'

import { useEffect, useRef, useState } from 'react'

const TOTAL_FRAMES = 121
const STATIC_FRAME = 60
const FRAME_PATH = (i: number) =>
  `/frames/frame_${String(i).padStart(4, '0')}.webp`


type Mode = 'animated' | 'static'

export function PlantCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const rafRef = useRef<number | null>(null)
  const lastFrameRef = useRef<number>(-1)

  const [mode, setMode] = useState<Mode | null>(null)
  const [ready, setReady] = useState(false)

  // Decide mode (animated vs static) from media queries
  useEffect(() => {
    const mqMobile = window.matchMedia('(max-width: 767px)')
    const mqReduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const decide = () =>
      setMode(mqMobile.matches || mqReduced.matches ? 'static' : 'animated')
    decide()
    mqMobile.addEventListener('change', decide)
    mqReduced.addEventListener('change', decide)
    return () => {
      mqMobile.removeEventListener('change', decide)
      mqReduced.removeEventListener('change', decide)
    }
  }, [])

  // Preload frames once mode is known
  useEffect(() => {
    if (mode === null) return
    let cancelled = false

    if (mode === 'static') {
      const img = new window.Image()
      img.decoding = 'async'
      img.src = FRAME_PATH(STATIC_FRAME)
      img.onload = () => {
        if (cancelled) return
        imagesRef.current = [img]
        setReady(true)
      }
      return () => {
        cancelled = true
      }
    }

    // animated: preload all frames
    const loaders = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
      return new Promise<HTMLImageElement | null>((resolve) => {
        const img = new window.Image()
        img.decoding = 'async'
        img.src = FRAME_PATH(i + 1)
        const finish = () => {
          if (typeof img.decode === 'function') {
            img.decode().then(() => resolve(img), () => resolve(img))
          } else {
            resolve(img)
          }
        }
        img.onload = finish
        img.onerror = () => resolve(null)
      })
    })

    Promise.all(loaders).then((imgs) => {
      if (cancelled) return
      imagesRef.current = imgs.filter(Boolean) as HTMLImageElement[]
      setReady(true)
    })

    return () => {
      cancelled = true
    }
  }, [mode])

  // Initial draw + scroll binding
  useEffect(() => {
    if (!ready || mode === null) return

    const draw = (idx: number) => {
      const canvas = canvasRef.current
      const wrap = wrapRef.current
      const img = imagesRef.current[idx] ?? imagesRef.current[0]
      if (!canvas || !wrap || !img) return
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const cw = wrap.clientWidth
      const ch = wrap.clientHeight
      const targetW = Math.max(1, Math.round(cw * dpr))
      const targetH = Math.max(1, Math.round(ch * dpr))
      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW
        canvas.height = targetH
        canvas.style.width = `${cw}px`
        canvas.style.height = `${ch}px`
      }
      // The frames have alpha-keyed (transparent) backgrounds, so we just
      // clear the canvas and draw — page bg shows through naturally.
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Object-fit: cover. The source video has empty space on the left/right
      // of the plant; covering (rather than containing) clips that empty
      // padding and makes the plant fill the visible canvas.
      const ar = img.naturalWidth / img.naturalHeight
      const car = canvas.width / canvas.height
      let dw: number
      let dh: number
      if (ar > car) {
        // Image wider than canvas — fit height, overflow horizontally.
        dh = canvas.height
        dw = dh * ar
      } else {
        // Image taller — fit width, overflow vertically.
        dw = canvas.width
        dh = dw / ar
      }
      const dx = (canvas.width - dw) / 2
      const dy = (canvas.height - dh) / 2
      ctx.drawImage(img, dx, dy, dw, dh)
    }

    if (mode === 'static') {
      draw(0)
      const onResize = () => draw(0)
      window.addEventListener('resize', onResize)
      return () => window.removeEventListener('resize', onResize)
    }

    const onScroll = () => {
      if (rafRef.current !== null) return
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        const doc = document.documentElement
        const max = doc.scrollHeight - window.innerHeight
        const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
        const idx = Math.min(
          TOTAL_FRAMES - 1,
          Math.max(0, Math.round(progress * (TOTAL_FRAMES - 1)))
        )
        if (idx !== lastFrameRef.current) {
          lastFrameRef.current = idx
          draw(idx)
        }
      })
    }

    const onResize = () => {
      lastFrameRef.current = -1
      onScroll()
    }

    draw(0)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [ready, mode])

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="plant-rail relative h-full w-full"
    >
      <canvas
        ref={canvasRef}
        className={`plant-canvas block h-full w-full transition-opacity duration-700 ${
          ready ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}
