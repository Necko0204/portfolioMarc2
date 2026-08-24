import { ProjectIndex } from '../components/ProjectIndex'
import { SectionHeader } from '../components/SectionHeader'
import { Reveal } from '../components/Reveal'

export function Work() {
  return (
    <section className="work-section" id="work">
      <SectionHeader number="03" label="Work" dark />
      <Reveal className="work-intro">
        <h2>Selected work<span>.</span></h2>
        <p>Things I've built, shipped, fixed, and learned from.</p>
      </Reveal>
      <ProjectIndex />
    </section>
  )
}
