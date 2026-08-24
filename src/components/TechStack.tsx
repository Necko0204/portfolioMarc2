import { ArrowUpRight } from 'lucide-react'
import { skillGroups } from '../data/portfolio'
import { Reveal } from './Reveal'

export function TechStack() {
  return (
    <div className="toolbox-list">
      {skillGroups.map((group, groupIndex) => (
        <Reveal className="toolbox-row" key={group.title}>
          <div className="toolbox-title"><span>{String(groupIndex + 1).padStart(2, '0')}</span><h3>{group.title}</h3></div>
          <div className="toolbox-skills">
            {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
          <ArrowUpRight aria-hidden="true" />
        </Reveal>
      ))}
    </div>
  )
}
