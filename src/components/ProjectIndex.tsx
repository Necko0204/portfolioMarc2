import { useState } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { projects, type Project } from '../data/portfolio'

function ProjectPreview({ project }: { project: Project }) {
  const host = project.liveUrl.replace(/^https?:\/\//, '').split('/')[0]

  return (
    <div className="project-visual">
      <div className="preview-chrome">
        <span />
        <p>{host}</p>
        <i>{project.category}</i>
      </div>
      <a
        className="project-preview-link"
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${project.title} live website`}
      >
        <img className="project-preview-image" src={project.image} alt={project.imageAlt} />
        <span>Open live project <ArrowUpRight aria-hidden="true" /></span>
      </a>
    </div>
  )
}

export function ProjectIndex() {
  const [activeId, setActiveId] = useState(projects[0].id)
  const reduceMotion = useReducedMotion()
  const activeProject = projects.find((project) => project.id === activeId) ?? projects[0]

  return (
    <div className="project-index-layout">
      <div className="project-list" aria-label="Selected projects">
        {projects.map((project, index) => (
          <button
            className={`project-row${activeId === project.id ? ' active' : ''}`}
            key={project.id}
            type="button"
            aria-pressed={activeId === project.id}
            onMouseEnter={() => setActiveId(project.id)}
            onFocus={() => setActiveId(project.id)}
            onClick={() => setActiveId(project.id)}
          >
            <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
            <span className="project-title">{project.title}</span>
            <span className="project-year">{project.year}</span>
            <span className="project-category">{project.category}</span>
            <ArrowUpRight className="project-arrow" aria-hidden="true" />
          </button>
        ))}
        <a className="project-feature-link" href="#featured">View featured case study <ArrowDown /></a>
      </div>

      <div className="project-stage" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            className="project-stage-inner"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <ProjectPreview project={activeProject} />
            <p>{activeProject.description}</p>
            <div className="project-tech">
              {activeProject.tech.map((tech) => <span key={tech}>{tech}</span>)}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
