import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, Pause, Play, ShieldCheck } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Reveal } from './Reveal'

const features = [
  'Secure authentication',
  'Role-based portals',
  'Product management',
  'Order processing',
  'Customer balances',
  'Top-up & withdrawal workflows',
  'Commission system',
  'Notifications',
  'Bilingual support',
  'Database security',
  'Mobile responsiveness',
]

const dashboards = [
  {
    title: 'Shopee Work',
    label: 'Super Admin overview',
    host: 'admin.shopee-work.app',
    image: '/dashboards/shopee-work-admin.png',
    alt: 'Shopee Work super admin overview dashboard',
  },
  {
    title: 'SkillTest Indonesia',
    label: 'Admin analytics',
    host: 'admin.skilltestindonesia.com',
    image: '/dashboards/skilltest-admin.png',
    alt: 'SkillTest Indonesia administrator analytics dashboard',
  },
  {
    title: 'Part Time Hub',
    label: 'Partner workspace',
    host: 'partner.parttimehubindonesia.com',
    image: '/dashboards/parttimehub-admin.png',
    alt: 'Part Time Hub Indonesia partner dashboard',
  },
]

export function FeaturedProject() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [manualPaused, setManualPaused] = useState(false)
  const [interactionPaused, setInteractionPaused] = useState(false)
  const reduceMotion = useReducedMotion()
  const activeDashboard = dashboards[activeIndex]
  const paused = manualPaused || interactionPaused

  useEffect(() => {
    if (paused || reduceMotion) return

    const timer = window.setInterval(() => {
      setDirection(1)
      setActiveIndex((current) => (current + 1) % dashboards.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [activeIndex, paused, reduceMotion])

  const showSlide = (index: number, nextDirection?: number) => {
    setDirection(nextDirection ?? (index > activeIndex ? 1 : -1))
    setActiveIndex((index + dashboards.length) % dashboards.length)
  }

  return (
    <section className="featured-section" id="featured">
      <div className="featured-copy">
        <Reveal>
          <p className="featured-label">Featured / 001</p>
          <h2>Full-stack order &amp; task platform<span>.</span></h2>
          <p className="featured-description">A responsive business platform developed for an Indonesian client with dedicated Customer, Admin, and Super Admin experiences.</p>
          <div className="featured-stack" aria-label="Project technology stack">
            {['React', 'TypeScript', 'Vite', 'Firebase'].map((tech) => <span key={tech}>{tech}</span>)}
          </div>
        </Reveal>
        <Reveal className="feature-list" delay={0.08}>
          {features.map((feature, index) => (
            <div key={feature}><span>{String(index + 1).padStart(2, '0')}</span><p>{feature}</p></div>
          ))}
        </Reveal>
      </div>

      <Reveal className="browser-frame" delay={0.1}>
        <div
          className={`dashboard-carousel${paused ? ' is-paused' : ''}`}
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured admin dashboards"
          onMouseEnter={() => setInteractionPaused(true)}
          onMouseLeave={() => setInteractionPaused(false)}
          onFocusCapture={() => setInteractionPaused(true)}
          onBlurCapture={() => setInteractionPaused(false)}
        >
          <div className="browser-topbar">
            <div aria-hidden="true"><i /><i /><i /></div>
            <span>{activeDashboard.host}</span>
            <ShieldCheck aria-label="Secure preview" />
          </div>

          <div className="dashboard-viewport">
            <AnimatePresence initial={false} mode="popLayout">
              <motion.figure
                className="dashboard-slide"
                key={activeDashboard.image}
                role="group"
                aria-roledescription="slide"
                aria-label={`${activeIndex + 1} of ${dashboards.length}: ${activeDashboard.title}`}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * 70 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * -70 }}
                transition={{ duration: reduceMotion ? 0.01 : 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <img src={activeDashboard.image} alt={activeDashboard.alt} />
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="dashboard-controls">
            <div className="dashboard-caption" aria-live="polite">
              <span>{String(activeIndex + 1).padStart(2, '0')} / {String(dashboards.length).padStart(2, '0')}</span>
              <p><strong>{activeDashboard.title}</strong>{activeDashboard.label}</p>
            </div>

            <div className="dashboard-dots" aria-label="Choose dashboard">
              {dashboards.map((dashboard, index) => (
                <button
                  className={index === activeIndex ? 'active' : ''}
                  key={dashboard.title}
                  type="button"
                  aria-label={`Show ${dashboard.title}`}
                  aria-pressed={index === activeIndex}
                  onClick={() => showSlide(index)}
                ><span /></button>
              ))}
            </div>

            <div className="dashboard-arrows">
              <button type="button" aria-label={manualPaused ? 'Resume automatic dashboard rotation' : 'Pause automatic dashboard rotation'} onClick={() => setManualPaused((current) => !current)}>
                {manualPaused ? <Play /> : <Pause />}
              </button>
              <button type="button" aria-label="Previous dashboard" onClick={() => showSlide(activeIndex - 1, -1)}><ArrowLeft /></button>
              <button type="button" aria-label="Next dashboard" onClick={() => showSlide(activeIndex + 1, 1)}><ArrowRight /></button>
            </div>
          </div>

          {!reduceMotion && <div className="dashboard-timer" key={activeIndex}><span /></div>}
        </div>
      </Reveal>
    </section>
  )
}
