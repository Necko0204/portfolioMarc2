import { SectionHeader } from '../components/SectionHeader'
import { TechStack } from '../components/TechStack'

export function Stack() {
  return (
    <section className="page-section stack-section" id="stack">
      <SectionHeader number="04" label="Stack" title="The toolbox." />
      <TechStack />
    </section>
  )
}
