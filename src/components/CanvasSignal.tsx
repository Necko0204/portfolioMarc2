import { useScrollSpy } from '../hooks/useScrollSpy'

const sections = [
  { id: 'top', label: 'INTRO', x: 64, y: 72 },
  { id: 'profile', label: 'PROFILE', x: 55, y: 176 },
  { id: 'experience', label: 'EXPERIENCE', x: 48, y: 280 },
  { id: 'work', label: 'PROJECTS', x: 45, y: 385 },
  { id: 'featured', label: 'FEATURED', x: 62, y: 485 },
  { id: 'stack', label: 'STACK', x: 58, y: 590 },
  { id: 'contact', label: 'CONTACT', x: 53, y: 680 },
] as const

const sectionIds = sections.map(({ id }) => id)
const signalPath = 'M64-10C74 48 54 102 55 176S42 232 48 280 31 333 45 385C58 430 68 444 62 485S48 548 58 590 70 648 53 730'
const sectionProgress = [11, 25, 39, 53, 67, 82, 94]

export function CanvasSignal() {
  const activeSection = useScrollSpy(sectionIds)
  const activeIndex = Math.max(0, sections.findIndex(({ id }) => id === activeSection))

  return (
    <div className="canvas-signal" aria-hidden="true">
      <svg viewBox="0 0 96 720" preserveAspectRatio="none" fill="none">
        <defs>
          <radialGradient id="canvas-contact-glow">
            <stop stopColor="currentColor" stopOpacity=".45" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>
        <path className="canvas-signal__trace" d={signalPath} />
        <path className="canvas-signal__progress" d={signalPath} pathLength={100} style={{ strokeDasharray: `${sectionProgress[activeIndex]} 100` }} />
        <path className="canvas-signal__branch" d="M45 385H10m35 0h42m-24 0v-28m7 28v22" />
        <circle className={`canvas-signal__contact-glow${activeSection === 'contact' ? ' is-active' : ''}`} cx="53" cy="680" r="80" fill="url(#canvas-contact-glow)" />
        {sections.map(({ id, x, y }) => (
          <g key={id} transform={`translate(${x} ${y})`}>
            <circle className={`canvas-signal__node-halo${activeSection === id ? ' is-active' : ''}`} r="11" />
            <circle className={`canvas-signal__node${activeSection === id ? ' is-active' : ''}`} r="3" />
          </g>
        ))}
      </svg>
      <span className="canvas-signal__readout">
        {String(activeIndex + 1).padStart(2, '0')} / {String(sections.length).padStart(2, '0')}
        <b>{sections[activeIndex].label}</b>
      </span>
    </div>
  )
}
