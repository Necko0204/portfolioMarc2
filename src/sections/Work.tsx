import { useState } from 'react'
import { ProjectIndex } from '../components/ProjectIndex'
import { SectionHeader } from '../components/SectionHeader'
import { Reveal } from '../components/Reveal'

export function Work() {
  const [pulseKey, setPulseKey] = useState(0)

  return (
    <section className="work-section" id="work">
      <svg className="work-schematic" viewBox="0 0 680 350" fill="none" aria-hidden="true">
        <path d="M20 62h148l40 40h137v70h282M92 224h150l42-42h122v86h218M274 0v102m270 70v146M24 302h118l34-34h108m122-166h90l38-38h124" />
        {pulseKey > 0 && <path key={pulseKey} className="work-schematic__pulse" d="M20 62h148l40 40h137v70h282" pathLength={100} />}
        <circle cx="168" cy="62" r="4" /><circle cx="345" cy="172" r="4" />
        <circle cx="242" cy="224" r="4" /><circle cx="406" cy="268" r="4" />
        <circle cx="544" cy="172" r="4" /><circle cx="496" cy="102" r="4" />
      </svg>
      <SectionHeader number="03" label="Work" dark />
      <Reveal className="work-intro">
        <h2>Selected work<span>.</span></h2>
        <p>Things I've built, shipped, fixed, and learned from.</p>
      </Reveal>
      <ProjectIndex pulseKey={pulseKey} onProjectChange={() => setPulseKey((current) => current + 1)} />
    </section>
  )
}
