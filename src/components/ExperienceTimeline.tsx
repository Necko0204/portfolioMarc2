import { Reveal } from './Reveal'
import { experiences } from '../data/portfolio'

export function ExperienceTimeline() {
  return (
    <div className="experience-timeline">
      {experiences.map((experience, index) => (
        <Reveal className="experience-item" key={`${experience.role}-${experience.period}`}>
          <div className="experience-index">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <i aria-hidden="true" />
          </div>
          <div className="experience-date">{experience.period}</div>
          <article>
            <h3>{experience.role}</h3>
            <p className="experience-company">{experience.company} <span>— {experience.location}</span></p>
            {experience.summary && <p className="experience-summary">{experience.summary}</p>}
            {experience.highlights && (
              <ul>
                {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            )}
            {experience.stack && (
              <div className="experience-stack" aria-label="Technology stack">
                {experience.stack.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
            )}
          </article>
        </Reveal>
      ))}
    </div>
  )
}
