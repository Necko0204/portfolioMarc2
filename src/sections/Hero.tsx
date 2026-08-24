import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Download, MapPin } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { profile } from '../data/portfolio'

const statements = [
  'building useful things',
  'solving real problems',
  'learning relentlessly',
  'shipping > talking',
]

export function Hero() {
  const [statement, setStatement] = useState(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return
    const interval = window.setInterval(
      () => setStatement((current) => (current + 1) % statements.length),
      2600,
    )
    return () => window.clearInterval(interval)
  }, [reduceMotion])

  return (
    <section className="hero-section" id="top">
      <div className="document-topbar">
        <span>marc.mendoza / portfolio</span>
        <span><i aria-hidden="true" /> available for opportunities</span>
        <span>build 2026.08</span>
      </div>

      <div className="hero-grid">
        <div className="hero-copy">
          <motion.div
            className="identity-row"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="identity-mark" aria-hidden="true"><span>MA</span><i /></div>
            <div className="name-block">
              <p>Hello, I'm</p>
              <h1>{profile.name}<span>.</span></h1>
              <strong>Full Stack Web Developer / IT Graduate</strong>
            </div>
          </motion.div>

          <motion.div
            className="hero-summary"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <p className="intro">I build responsive web platforms, secure user portals, and practical digital systems shaped around real business workflows.</p>
            <div className="hero-meta">
              <span><MapPin aria-hidden="true" /> Tanza, Cavite, Philippines</span>
              <span>React · TypeScript · PHP · Firebase · SQL</span>
            </div>
            <div className="hero-actions">
              <a className="primary-button" href="#work">Browse projects <ArrowUpRight /></a>
              <a className="text-link" href="/Marc-Angelo-Mendoza-CV.pdf" download>Download CV <Download /></a>
            </div>
          </motion.div>
        </div>

        <aside className="profile-console" aria-label="Developer profile summary">
          <header><span>profile.json</span><span>read-only</span></header>
          <dl>
            <div><dt>name</dt><dd>Marc Angelo</dd></div>
            <div><dt>role</dt><dd>Full Stack Developer</dd></div>
            <div><dt>education</dt><dd>BS Information Technology</dd></div>
            <div><dt>status</dt><dd><i /> open to work</dd></div>
          </dl>
          <div className="terminal-line" aria-live="polite">
            <span>marc@portfolio:~$</span>
            <AnimatePresence mode="wait">
              <motion.em
                key={statements[statement]}
                initial={reduceMotion ? false : { opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {statements[statement]}<b aria-hidden="true">_</b>
              </motion.em>
            </AnimatePresence>
          </div>
        </aside>
      </div>

      <div className="hero-foot">
        <span>01 / introduction</span>
        <span>Clean interfaces. Useful systems.</span>
        <a href="#profile">Continue <ArrowDown /></a>
      </div>
    </section>
  )
}
