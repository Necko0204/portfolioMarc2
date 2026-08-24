import { useState } from 'react'
import { ArrowDown, ArrowUpRight, Eye, Search } from 'lucide-react'
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

function ProjectXRay({ project }: { project: Project }) {
  return (
    <article className="project-xray">
      <header>
        <span>case_file/{project.id}</span>
        <i>verified scope</i>
      </header>

      <div className="xray-heading">
        <div>
          <span>{project.category} / {project.year}</span>
          <h3>{project.title}</h3>
        </div>
        <strong aria-hidden="true">XR</strong>
      </div>

      <dl className="xray-evidence">
        <div>
          <dt>01 / problem</dt>
          <dd>{project.evidence.challenge}</dd>
        </div>
        <div>
          <dt>02 / ownership</dt>
          <dd>{project.evidence.ownership}</dd>
        </div>
        <div>
          <dt>03 / delivery</dt>
          <dd>{project.evidence.delivery}</dd>
        </div>
      </dl>

      <section className="xray-system-map" aria-label="Project system map">
        <span>04 / system map</span>
        <div>
          {project.evidence.systems.map((system, index) => (
            <span key={system}>
              <i>{String(index + 1).padStart(2, '0')}</i>
              {system}
            </span>
          ))}
        </div>
      </section>

      <footer>
        <span>Evidence over adjectives.</span>
        <a href={project.liveUrl} target="_blank" rel="noreferrer">
          Open deployment <ArrowUpRight aria-hidden="true" />
        </a>
      </footer>
    </article>
  )
}

export function ProjectIndex() {
  const [activeId, setActiveId] = useState(projects[0].id)
  const [view, setView] = useState<'preview' | 'xray'>('preview')
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
        <div className="project-stage-inner">
          <div className="project-view-controls" aria-label="Project display mode">
            <span>view_mode</span>
            <div>
              <button
                className={view === 'preview' ? 'active' : ''}
                type="button"
                aria-pressed={view === 'preview'}
                onClick={() => setView('preview')}
              >
                <Eye aria-hidden="true" /> Preview
              </button>
              <button
                className={view === 'xray' ? 'active' : ''}
                type="button"
                aria-pressed={view === 'xray'}
                onClick={() => setView('xray')}
              >
                <Search aria-hidden="true" /> Project X-Ray
              </button>
            </div>
          </div>

          <div className="project-stage-content">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${activeProject.id}-${view}`}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
              >
                {view === 'preview' ? (
                  <>
                    <ProjectPreview project={activeProject} />
                    <p className="project-description">{activeProject.description}</p>
                    <div className="project-tech">
                      {activeProject.tech.map((tech) => <span key={tech}>{tech}</span>)}
                    </div>
                  </>
                ) : (
                  <ProjectXRay project={activeProject} />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
