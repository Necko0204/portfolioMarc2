import { useCallback, useEffect, useState } from 'react'
import './App.css'
import { MotionConfig } from 'motion/react'
import { Navbar } from './components/Navbar'
import { CommandPalette } from './components/CommandPalette'
import { CanvasSignal } from './components/CanvasSignal'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { Profile } from './sections/Profile'
import { Experience } from './sections/Experience'
import { Work } from './sections/Work'
import { FeaturedProject } from './components/FeaturedProject'
import { Stack } from './sections/Stack'
import { ResumeExtras } from './sections/ResumeExtras'
import { Contact } from './sections/Contact'

function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false)
  const [canvasRipple, setCanvasRipple] = useState<{ x: number; y: number; id: number } | null>(null)
  const closeCommandPalette = useCallback(() => setCommandPaletteOpen(false), [])
  const openCommandPalette = useCallback(() => setCommandPaletteOpen(true), [])

  useEffect(() => {
    const openFromShortcut = (event: KeyboardEvent) => {
      const target = event.target
      const isEditing = target instanceof HTMLElement && (
        target.isContentEditable || target.closest('input, textarea, select, [contenteditable="true"]') !== null
      )
      const commandShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k'
      const slashShortcut = event.key === '/' && !event.metaKey && !event.ctrlKey && !event.altKey

      if (!isEditing && (commandShortcut || slashShortcut)) {
        event.preventDefault()
        setCommandPaletteOpen(true)
      }
    }
    window.addEventListener('keydown', openFromShortcut)
    return () => window.removeEventListener('keydown', openFromShortcut)
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <div
        className="site-shell min-h-screen"
        onPointerDown={(event) => {
          if (event.target !== event.currentTarget) return
          if (window.matchMedia('(max-width: 760px), (prefers-reduced-motion: reduce)').matches) return
          const bounds = event.currentTarget.getBoundingClientRect()
          setCanvasRipple({ x: event.clientX - bounds.left, y: event.clientY - bounds.top, id: Date.now() })
        }}
      >
        <a className="skip-link" href="#main-content">Skip to content</a>
        <CanvasSignal />
        <div className="canvas-ripple-layer" aria-hidden="true">
          {canvasRipple && (
            <span
              key={canvasRipple.id}
              className="canvas-ripple"
              style={{ left: canvasRipple.x, top: canvasRipple.y }}
              onAnimationEnd={() => setCanvasRipple(null)}
            />
          )}
        </div>
        <Navbar onOpenCommandPalette={openCommandPalette} />
        <div className="portfolio-frame">
          <div className="water-backdrop" aria-hidden="true">
            <svg className="water-wave water-wave--blue" viewBox="0 0 2880 260" preserveAspectRatio="none">
              <path d="M0 138 C120 74 240 74 360 138 C480 202 600 202 720 138 C840 74 960 74 1080 138 C1200 202 1320 202 1440 138" />
              <path transform="translate(1440 0)" d="M0 138 C120 74 240 74 360 138 C480 202 600 202 720 138 C840 74 960 74 1080 138 C1200 202 1320 202 1440 138" />
              <path d="M0 166 C160 118 320 118 480 166 C640 214 800 214 960 166 C1120 118 1280 118 1440 166" />
              <path transform="translate(1440 0)" d="M0 166 C160 118 320 118 480 166 C640 214 800 214 960 166 C1120 118 1280 118 1440 166" />
            </svg>
            <svg className="water-wave water-wave--teal" viewBox="0 0 2880 260" preserveAspectRatio="none">
              <path d="M0 128 C120 190 240 190 360 128 C480 66 600 66 720 128 C840 190 960 190 1080 128 C1200 66 1320 66 1440 128" />
              <path transform="translate(1440 0)" d="M0 128 C120 190 240 190 360 128 C480 66 600 66 720 128 C840 190 960 190 1080 128 C1200 66 1320 66 1440 128" />
              <path d="M0 102 C180 148 300 148 480 102 C660 56 780 56 960 102 C1140 148 1260 148 1440 102" />
              <path transform="translate(1440 0)" d="M0 102 C180 148 300 148 480 102 C660 56 780 56 960 102 C1140 148 1260 148 1440 102" />
            </svg>
          </div>
          <main id="main-content">
            <Hero />
            <Profile />
            <Experience />
            <Work />
            <FeaturedProject />
            <Stack />
            <ResumeExtras />
            <Contact />
          </main>
          <Footer />
        </div>
        <CommandPalette open={commandPaletteOpen} onClose={closeCommandPalette} />
      </div>
    </MotionConfig>
  )
}

export default App
