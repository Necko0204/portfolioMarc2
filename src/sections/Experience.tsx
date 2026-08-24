import { ExperienceTimeline } from '../components/ExperienceTimeline'
import { SectionHeader } from '../components/SectionHeader'

export function Experience() {
  return (
    <section className="page-section experience-section" id="experience">
      <SectionHeader number="02" label="Experience" title="Work, in context." />
      <ExperienceTimeline />
    </section>
  )
}
