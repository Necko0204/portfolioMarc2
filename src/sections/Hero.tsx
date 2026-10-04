import { useEffect, useState } from 'react'
import { ArrowDown, ArrowLeft, ArrowUpRight, Download, MapPin } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { profile, projects } from '../data/portfolio'

const statements = [
  'building useful things',
  'solving real problems',
  'learning relentlessly',
  'shipping > talking',
]

const nameParts = profile.name.split(' ')
const typedNameLines = [
  nameParts.slice(0, -1).join(' '),
  `${nameParts.at(-1)}.`,
]
const typedNameLength = typedNameLines.reduce((total, line) => total + line.length, 0)
const recruiterSnapshot = [
  { value: String(projects.length).padStart(2, '0'), label: 'selected builds' },
  { value: '03', label: 'role-based portals' },
  { value: '04', label: 'international markets' },
  { value: profile.graduated, label: 'BSIT graduate' },
]

function TypedLine({ text, showCursor }: { text: string; showCursor: boolean }) {
  const hasAccent = text.endsWith('.')

  return (
    <span className="typing-name-line">
      {hasAccent ? text.slice(0, -1) : text}
      {hasAccent && <span className="name-accent">.</span>}
      {showCursor && (
        <motion.span
          className="typing-name-cursor"
          aria-hidden="true"
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: 'linear', times: [0, 0.45, 0.5, 1] }}
        />
      )}
    </span>
  )
}

export function Hero() {
  const [statement, setStatement] = useState(0)
  const [typedName, setTypedName] = useState(0)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [crumpling, setCrumpling] = useState(false)
  const reduceMotion = useReducedMotion()

  const openPersonalPage = () => setAboutOpen(true)

  const openProfilePage = () => {
    if (reduceMotion) {
      setProfileOpen(true)
      return
    }
    setCrumpling(true)
  }

  const closePage = () => {
    setCrumpling(false)
    setAboutOpen(false)
    setProfileOpen(false)
  }

  const closeProfilePanel = () => {
    setCrumpling(false)
    setProfileOpen(false)
  }

  useEffect(() => {
    if (reduceMotion) return
    const interval = window.setInterval(
      () => setStatement((current) => (current + 1) % statements.length),
      2600,
    )
    return () => window.clearInterval(interval)
  }, [reduceMotion])

  useEffect(() => {
    if (reduceMotion) return

    let interval: number | undefined
    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        setTypedName((current) => {
          if (current >= typedNameLength) {
            if (interval !== undefined) window.clearInterval(interval)
            return current
          }
          return current + 1
        })
      }, 74)
    }, 420)

    return () => {
      window.clearTimeout(start)
      if (interval !== undefined) window.clearInterval(interval)
    }
  }, [reduceMotion])

  const visibleNameLength = reduceMotion ? typedNameLength : typedName
  const firstLineLength = typedNameLines[0].length
  const firstLine = typedNameLines[0].slice(0, Math.min(visibleNameLength, firstLineLength))
  const secondLine = typedNameLines[1].slice(0, Math.max(0, visibleNameLength - firstLineLength))
  const cursorLine = visibleNameLength <= firstLineLength ? 0 : 1

  return (
    <section className="hero-section" id="top">
      <div className="document-topbar">
        <span>marc.mendoza / portfolio</span>
        <span><i aria-hidden="true" /> available for opportunities</span>
        <span>build 2026.08</span>
      </div>

      <AnimatePresence mode="wait" initial={false}>
      {aboutOpen ? (
        <motion.article
          key="about-canvas-page"
          className="about-canvas-page"
          id="about-canvas-page"
          aria-label="More about Marc"
          initial={reduceMotion ? false : { clipPath: 'inset(0 0 100% 0 round 8px)', opacity: .7, scaleY: .96 }}
          animate={{ clipPath: 'inset(0 0 0% 0 round 0px)', opacity: 1, scaleY: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scaleY: .98 }}
          transition={{ duration: reduceMotion ? .18 : .68, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: '8% 0%' }}
        >
          <header className="about-page-topbar">
            <span>marc.mendoza / about</span>
            <span>page 02 / 02</span>
            <button type="button" onClick={closePage}><ArrowLeft aria-hidden="true" /> Back to intro</button>
          </header>
          <div className="about-page-layout">
            <div className="about-page-main">
              <span className="about-page-kicker">A LITTLE MORE ABOUT ME</span>
              <h2>People-first systems.<br />Built with intention<span>.</span></h2>
              <p>I’m Marc, an Information Technology graduate and full stack developer who enjoys turning real workflows into clear, dependable digital tools.</p>
              <p>Alongside building responsive platforms and secure portals, I’ve worked in customer support, virtual assistance, lead generation, and community management. Those experiences help me understand the people and day-to-day operations behind the software.</p>
              <div className="about-page-principles">
                <div><span>01 / UNDERSTAND</span><strong>Start with the people and the real workflow.</strong></div>
                <div><span>02 / BUILD</span><strong>Make the useful path clear, responsive, and secure.</strong></div>
                <div><span>03 / IMPROVE</span><strong>Communicate, learn, and refine through delivery.</strong></div>
              </div>
            </div>
            <aside className="about-page-aside" aria-label="Profile details">
              <dl>
                <div><dt>based in</dt><dd>Tanza, Cavite, Philippines</dd></div>
                <div><dt>education</dt><dd>BS Information Technology</dd></div>
                <div><dt>focus</dt><dd>Web platforms · Portals · Practical systems</dd></div>
                <div><dt>currently</dt><dd><i /> Open to opportunities</dd></div>
              </dl>
              <a href="#profile" onClick={closePage}>Explore my experience <ArrowUpRight aria-hidden="true" /></a>
            </aside>
          </div>
          <footer className="about-page-foot"><span>Marc Angelo Mendoza</span><span>Full Stack Web Developer / IT Graduate</span></footer>
        </motion.article>
      ) : (
      <motion.div
        key="intro-page"
        className="hero-intro-page"
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -5 }}
        transition={{ duration: .24 }}
      >
      <div className="hero-grid">
        <svg className="hero-wave" viewBox="0 0 2880 220" preserveAspectRatio="none" aria-hidden="true">
          <path className="hero-wave-blue" d="M0 106 C120 78 240 78 360 106 C480 134 600 134 720 106 C840 78 960 78 1080 106 C1200 134 1320 134 1440 106 M1440 106 C1560 78 1680 78 1800 106 C1920 134 2040 134 2160 106 C2280 78 2400 78 2520 106 C2640 134 2760 134 2880 106" />
          <path className="hero-wave-teal" d="M0 132 C160 156 320 156 480 132 C640 108 800 108 960 132 C1120 156 1280 156 1440 132 M1440 132 C1600 156 1760 156 1920 132 C2080 108 2240 108 2400 132 C2560 156 2720 156 2880 132" />
          <path className="hero-wave-soft" d="M0 164 C180 140 300 140 480 164 C660 188 780 188 960 164 C1140 140 1260 140 1440 164 M1440 164 C1620 140 1740 140 1920 164 C2100 188 2220 188 2400 164 C2580 140 2700 140 2880 164" />
        </svg>
        <div className="hero-copy">
          <motion.div
            className="identity-row"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <button className="identity-mark identity-mark--button" type="button" aria-label="Open personal background" aria-controls="about-canvas-page" onClick={openPersonalPage}><span>MA</span><i /></button>
            <div className="name-block">
              <p>Hello, I'm</p>
              <h1 className="typing-name" aria-label={`${profile.name}.`}>
                <span className="typing-name-measure" aria-hidden="true">
                  <span className="typing-name-line">{typedNameLines[0]}</span>
                  <span className="typing-name-line">{typedNameLines[1]}</span>
                </span>
                <span className="typing-name-visible" aria-hidden="true">
                  <TypedLine text={firstLine} showCursor={!reduceMotion && cursorLine === 0} />
                  <TypedLine text={secondLine} showCursor={!reduceMotion && cursorLine === 1} />
                </span>
              </h1>
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

        <AnimatePresence mode="wait" initial={false}>
          {profileOpen ? (
            <motion.aside
              key="profile-details-panel"
              className="profile-console profile-details-page"
              id="profile-details-panel"
              aria-label="How Marc builds systems"
              initial={reduceMotion ? false : { clipPath: 'inset(0 0 100% 0 round 8px)', opacity: .65, scaleY: .96 }}
              animate={{ clipPath: 'inset(0 0 0% 0 round 0px)', opacity: 1, scaleY: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: .96, rotateZ: -2 }}
              transition={{ duration: reduceMotion ? .18 : .58, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: '50% 0%' }}
            >
              <header><span>profile.systems / 01</span><button type="button" onClick={closeProfilePanel}><ArrowLeft aria-hidden="true" /> Back</button></header>
              <div className="profile-details-content">
                <span className="profile-details-kicker">HOW I BUILD</span>
                <h2>Useful systems,<br />from front to back<span>.</span></h2>
                <p>I build responsive web experiences around the real task someone needs to complete, then connect the interface to the logic and data that make it work.</p>
                <div className="profile-details-list">
                  <div><strong>Interface</strong><span>Clear, responsive screens that make the next step obvious.</span></div>
                  <div><strong>Systems</strong><span>Useful data, roles, and workflows working together.</span></div>
                  <div><strong>Delivery</strong><span>Test the real paths, refine, and support the handoff.</span></div>
                </div>
                <a href="#work" onClick={closeProfilePanel}>See selected projects <ArrowUpRight aria-hidden="true" /></a>
              </div>
            </motion.aside>
          ) : (
            <motion.aside
              key="profile-console"
              className="profile-console"
              aria-label="Developer profile summary"
              initial={reduceMotion ? false : { opacity: 0, x: 18, rotateY: 3 }}
              animate={crumpling && !reduceMotion
                ? { opacity: 0, scale: .76, x: 18, y: 14, rotateY: 16, rotateZ: 9, skewX: -6, clipPath: 'polygon(9% 0, 100% 7%, 89% 18%, 100% 30%, 86% 43%, 100% 55%, 89% 69%, 100% 82%, 77% 100%, 7% 91%, 16% 77%, 0 64%, 13% 49%, 0 34%, 12% 20%, 0 7%)' }
                : { opacity: crumpling ? 0 : 1, x: 0, rotateY: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: .76, rotateZ: 9, skewX: -6, clipPath: 'polygon(9% 0, 100% 7%, 89% 18%, 100% 30%, 86% 43%, 100% 55%, 89% 69%, 100% 82%, 77% 100%, 7% 91%, 16% 77%, 0 64%, 13% 49%, 0 34%, 12% 20%, 0 7%)' }}
              transition={{ duration: crumpling ? .42 : .52, delay: crumpling ? 0 : .14, ease: [0.22, 1, 0.36, 1] }}
              onAnimationComplete={() => { if (crumpling) setProfileOpen(true) }}
              whileHover={reduceMotion || crumpling ? undefined : { y: -4, rotateZ: -0.35 }}
              whileTap={reduceMotion || crumpling ? undefined : { scale: 0.995 }}
              style={{ transformPerspective: 900 }}
            >
              <header><span>profile.json</span><span>open system profile</span></header>
              <div className="profile-water" aria-hidden="true">
                <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
                  <path d="M0 64 C120 16 240 16 360 64 C480 112 600 112 720 64 C840 16 960 16 1080 64 C1200 112 1320 112 1440 64" />
                  <path transform="translate(1440 0)" d="M0 64 C120 16 240 16 360 64 C480 112 600 112 720 64 C840 16 960 16 1080 64 C1200 112 1320 112 1440 64" />
                  <path d="M0 82 C160 50 320 50 480 82 C640 114 800 114 960 82 C1120 50 1280 50 1440 82" />
                  <path transform="translate(1440 0)" d="M0 82 C160 50 320 50 480 82 C640 114 800 114 960 82 C1120 50 1280 50 1440 82" />
                </svg>
                <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
                  <path d="M0 58 C120 100 240 100 360 58 C480 16 600 16 720 58 C840 100 960 100 1080 58 C1200 16 1320 16 1440 58" />
                  <path transform="translate(1440 0)" d="M0 58 C120 100 240 100 360 58 C480 16 600 16 720 58 C840 100 960 100 1080 58 C1200 16 1320 16 1440 58" />
                </svg>
              </div>
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
              <button className="profile-console-trigger" type="button" aria-label="Open system profile" aria-controls="profile-details-panel" onClick={openProfilePage}>
                <span className="sr-only">Open system profile</span>
              </button>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>

      <div className="recruiter-rail" aria-label="Recruiter snapshot">
        <p><span>signal</span> recruiter snapshot</p>
        {recruiterSnapshot.map((item, index) => (
          <motion.div
            key={item.label}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, delay: 0.22 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="hero-foot">
        <span>01 / introduction</span>
        <span>Clean interfaces. Useful systems.</span>
        <a href="#profile">Continue <ArrowDown /></a>
      </div>
      </motion.div>
      )}
      </AnimatePresence>
    </section>
  )
}
