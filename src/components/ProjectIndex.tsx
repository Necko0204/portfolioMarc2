import { useEffect, useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, Eye, Search } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { projects, type Project } from '../data/portfolio'

function ProjectPreview({ project }: { project: Project }) {
  const host = project.liveUrl.replace(/^https?:\/\//, '').split('/')[0]
  const screens = project.screens ?? [{ label: project.screenLabel ?? 'Main screen', image: project.image, alt: project.imageAlt }]
  const [activeScreenIndex, setActiveScreenIndex] = useState(0)
  const activeScreen = screens[activeScreenIndex] ?? screens[0]

  useEffect(() => setActiveScreenIndex(0), [project.id])

  return (
    <div className="project-visual">
      <div className="preview-chrome">
        <span />
        <p>{host}</p>
        <i>{activeScreen.label}</i>
      </div>
      <a
        className="project-preview-link"
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${project.title} live website`}
      >
        <img className="project-preview-image" src={activeScreen.image} alt={activeScreen.alt} loading="lazy" decoding="async" />
        <span>Open live project <ArrowUpRight aria-hidden="true" /></span>
      </a>
      {screens.length > 1 && (
        <div className="project-screen-picker" role="group" aria-label={`${project.title} screenshots`}>
          {screens.map((screen, index) => (
            <button
              key={screen.label}
              className={index === activeScreenIndex ? 'active' : ''}
              type="button"
              aria-pressed={index === activeScreenIndex}
              aria-label={`Show ${screen.label} screenshot`}
              onClick={() => setActiveScreenIndex(index)}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>{screen.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function ProjectWorkflow({ project }: { project: Project }) {
  const workflow = project.workflow
  if (!workflow) return null
  return (
    <article className="project-workflow">
      <header>
        <span>workflow_map / {project.id}</span>
        <i>key journey</i>
      </header>
      <div className="project-workflow-heading">
        <span>{project.category} / USER FLOW</span>
        <h3>{workflow.title}</h3>
      </div>
      <ol className="project-workflow-steps">
        {workflow.steps.map((step, index) => (
          <li key={`${step.actor}-${step.title}`}>
            <span className="project-workflow-number">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <span className="project-workflow-actor">{step.actor}</span>
              <strong>{step.title}</strong>
              <p>{step.detail}</p>
            </div>
            {index < workflow.steps.length - 1 && <ArrowRight className="project-workflow-connector" aria-hidden="true" />}
          </li>
        ))}
      </ol>
      <footer className="project-workflow-outcome">
        <span>FLOW RESULT</span>
        <p>{workflow.outcome}</p>
        <a href={project.liveUrl} target="_blank" rel="noreferrer">Explore live project <ArrowUpRight aria-hidden="true" /></a>
      </footer>
    </article>
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

export function ProjectIndex({ pulseKey, onProjectChange }: { pulseKey: number; onProjectChange: () => void }) {
  const [activeId, setActiveId] = useState(projects[0].id)
  const [view, setView] = useState<'screen' | 'workflow' | 'xray'>('screen')
  const reduceMotion = useReducedMotion()
  const activeProject = projects.find((project) => project.id === activeId) ?? projects[0]
  const selectProject = (project: Project) => {
    if (project.id !== activeId) onProjectChange()
    setActiveId(project.id)
    if (!project.workflow) setView((current) => current === 'workflow' ? 'screen' : current)
  }

  return (
    <div className="project-index-layout">
      <div className="project-list" aria-label="Selected projects">
        {projects.map((project, index) => (
          <button
            className={`project-row${activeId === project.id ? ' active' : ''}`}
            key={project.id}
            type="button"
            aria-pressed={activeId === project.id}
            onMouseEnter={() => selectProject(project)}
            onFocus={() => selectProject(project)}
            onClick={() => selectProject(project)}
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
          {pulseKey > 0 && <span key={pulseKey} className="project-stage-pulse" aria-hidden="true" />}
            <div className="project-view-controls" role="tablist" aria-label="Project display mode">
            <span>view_mode</span>
            <div>
              <button
                  id="project-tab-screen"
                  className={view === 'screen' ? 'active' : ''}
                type="button"
                  role="tab"
                  aria-selected={view === 'screen'}
                  aria-controls="project-stage-panel"
                  onClick={() => setView('screen')}
              >
                  <Eye aria-hidden="true" /> Screens
              </button>
                {activeProject.workflow && (
                  <button
                    id="project-tab-workflow"
                    className={view === 'workflow' ? 'active' : ''}
                    type="button"
                    role="tab"
                    aria-selected={view === 'workflow'}
                    aria-controls="project-stage-panel"
                    onClick={() => setView('workflow')}
                  >
                    <ArrowRight aria-hidden="true" /> Workflow
                  </button>
                )}
              <button
                  id="project-tab-xray"
                className={view === 'xray' ? 'active' : ''}
                type="button"
                  role="tab"
                  aria-selected={view === 'xray'}
                  aria-controls="project-stage-panel"
                onClick={() => setView('xray')}
              >
                <Search aria-hidden="true" /> Project X-Ray
              </button>
            </div>
          </div>

          <div className="project-stage-content" id="project-stage-panel" role="tabpanel" aria-labelledby={`project-tab-${view}`}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${activeProject.id}-${view}`}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
              >
                {view === 'screen' ? (
                  <>
                    <ProjectPreview project={activeProject} />
                    <p className="project-description">{activeProject.description}</p>
                    <div className="project-tech">
                      {activeProject.tech.map((tech) => <span key={tech}>{tech}</span>)}
                    </div>
                  </>
                ) : view === 'workflow' ? (
                  <ProjectWorkflow project={activeProject} />
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
