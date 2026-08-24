import { profile } from '../data/portfolio'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'

const facts = [
  ['Name', profile.name],
  ['Role', profile.role],
  ['Location', profile.location],
  ['Education', profile.education],
  ['Graduated', profile.graduated],
]

export function Profile() {
  return (
    <section className="page-section profile-section" id="profile">
      <SectionHeader number="01" label="Profile" title="Profile." />
      <div className="profile-layout">
        <Reveal className="profile-statement">
          <p>Marc Angelo Mendoza is an Information Technology graduate and Full Stack Web Developer with hands-on experience building responsive web platforms, secure portals, client-facing websites, and workflow-driven systems.</p>
          <p>His background extends beyond development into customer support, virtual assistance, lead generation, and digital community management—strengthening his communication, adaptability, problem-solving, and understanding of real business operations.</p>
        </Reveal>
        <Reveal delay={0.08}>
          <dl className="profile-facts">
            {facts.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
