import { Reveal } from '../components/Reveal'
import { strengths } from '../data/portfolio'

export function ResumeExtras() {
  return (
    <section className="resume-extras" aria-label="Education and personal strengths">
      <Reveal className="education-panel">
        <p className="micro-label">Education / 2021—2025</p>
        <h2>Bachelor of Science in Information Technology</h2>
        <p>National College of Science and Technology</p>
        <span>Tanza, Cavite</span>
      </Reveal>
      <div className="strengths-panel">
        <Reveal>
          <p className="micro-label">Personal strengths / 06</p>
          <p className="strengths-intro">Technical skills build the product. Understanding people helps build the right product.</p>
        </Reveal>
        <div className="strengths-list">
          {strengths.map((strength, index) => (
            <Reveal className="strength-row" key={strength} delay={Math.min(index * 0.03, 0.15)}>
              <span>{String(index + 1).padStart(2, '0')}</span><strong>{strength}</strong>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
