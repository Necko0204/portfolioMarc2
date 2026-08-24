import { useEffect, useRef, useState, type CSSProperties } from 'react'
import {
  BriefcaseBusiness,
  Braces,
  Code2,
  Download,
  FolderKanban,
  Moon,
  Send,
  Sun,
  UserRound,
} from 'lucide-react'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { profile } from '../data/portfolio'

const navigation = [
  { id: 'profile', label: 'Profile', icon: UserRound },
  { id: 'experience', label: 'Experience', icon: BriefcaseBusiness },
  { id: 'work', label: 'Projects', icon: FolderKanban },
  { id: 'stack', label: 'Stack', icon: Braces },
  { id: 'contact', label: 'Contact', icon: Send },
]

const sectionIds = navigation.map((item) => item.id)

export function Navbar() {
  const [progress, setProgress] = useState(0)
  const [darkMode, setDarkMode] = useState(
    () => typeof window !== 'undefined' && window.localStorage.getItem('marc-portfolio-theme') === 'dark',
  )
  const themeTransitionTimer = useRef<number | undefined>(undefined)
  const activeSection = useScrollSpy(sectionIds)

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
  }, [darkMode])

  useEffect(() => {
    const updateProgress = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight
      setProgress(available > 0 ? (window.scrollY / available) * 100 : 0)
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  useEffect(() => () => {
    if (themeTransitionTimer.current !== undefined) {
      window.clearTimeout(themeTransitionTimer.current)
    }
    document.documentElement.classList.remove('theme-transitioning')
  }, [])

  const toggleTheme = () => {
    const nextMode = !darkMode
    const root = document.documentElement

    if (themeTransitionTimer.current !== undefined) {
      window.clearTimeout(themeTransitionTimer.current)
    }
    root.classList.add('theme-transitioning')
    setDarkMode(nextMode)
    window.localStorage.setItem('marc-portfolio-theme', nextMode ? 'dark' : 'light')
    themeTransitionTimer.current = window.setTimeout(() => {
      root.classList.remove('theme-transitioning')
      themeTransitionTimer.current = undefined
    }, 350)
  }

  return (
    <aside className="site-nav" aria-label="Portfolio controls">
      <a className="rail-mark" href="#top" aria-label="Back to top">M<span>.</span></a>
      <nav className="rail-navigation" aria-label="Portfolio sections">
        {navigation.map((item) => {
          const Icon = item.icon
          return (
            <a
              key={item.id}
              className={activeSection === item.id ? 'active' : ''}
              href={`#${item.id}`}
              aria-label={item.label}
              data-label={item.label}
            >
              <Icon aria-hidden="true" />
            </a>
          )
        })}
      </nav>
      <div className="rail-actions">
        <button type="button" onClick={toggleTheme} aria-label={darkMode ? 'Use light theme' : 'Use dark theme'} data-label={darkMode ? 'Light mode' : 'Dark mode'}>
          {darkMode ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
        </button>
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="View GitHub" data-label="GitHub"><Code2 aria-hidden="true" /></a>
        <a href="/Marc-Angelo-Mendoza-CV.pdf" download aria-label="Download résumé" data-label="Résumé"><Download aria-hidden="true" /></a>
      </div>
      <div
        className="scroll-progress"
        aria-hidden="true"
        style={{ '--scroll-progress': progress / 100 } as CSSProperties}
      ><span /></div>
    </aside>
  )
}
