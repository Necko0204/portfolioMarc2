import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react'
import {
  ArrowDown,
  ArrowUp,
  BriefcaseBusiness,
  CornerDownLeft,
  Code2,
  Download,
  FolderKanban,
  Search,
  Send,
  UserRound,
  X,
} from 'lucide-react'
import { profile } from '../data/portfolio'

const commands = [
  { label: 'View projects', detail: 'Browse selected work', href: '#work', icon: FolderKanban, keywords: 'portfolio case studies builds' },
  { label: 'View experience', detail: 'Roles and client work', href: '#experience', icon: BriefcaseBusiness, keywords: 'career history jobs' },
  { label: 'View profile', detail: 'About Marc', href: '#profile', icon: UserRound, keywords: 'about bio education' },
  { label: 'Contact Marc', detail: 'Send an email', href: '#contact', icon: Send, keywords: 'email hire message' },
  { label: 'Download CV', detail: 'PDF résumé', href: '/Marc-Angelo-Mendoza-CV.pdf', icon: Download, download: true, keywords: 'resume cv pdf' },
  { label: 'Open GitHub', detail: 'View code and repositories', href: profile.github, icon: Code2, external: true, keywords: 'source code github' },
]

type CommandPaletteProps = {
  open: boolean
  onClose: () => void
}

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const optionRefs = useRef<Array<HTMLAnchorElement | null>>([])
  const internalNavigationSelected = useRef(false)

  const filteredCommands = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    if (!normalizedQuery) return commands
    return commands.filter((command) =>
      `${command.label} ${command.detail} ${command.keywords}`.toLowerCase().includes(normalizedQuery),
    )
  }, [query])

  useEffect(() => {
    if (!open) return
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const previousOverflow = document.body.style.overflow
    internalNavigationSelected.current = false
    document.body.style.overflow = 'hidden'
    inputRef.current?.focus()
    const closeOnEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      window.removeEventListener('keydown', closeOnEscape)
      document.body.style.overflow = previousOverflow
      if (!internalNavigationSelected.current) previousFocus?.focus()
      setQuery('')
      setActiveIndex(0)
    }
  }, [open, onClose])

  useEffect(() => {
    setActiveIndex((index) => Math.min(index, Math.max(filteredCommands.length - 1, 0)))
  }, [filteredCommands.length])

  if (!open) return null

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Tab') {
      const focusable = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('button:not([disabled]), input:not([disabled]), a[href]'))
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
      return
    }
    if (event.target !== inputRef.current || filteredCommands.length === 0) return
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActiveIndex((index) => (index + 1) % filteredCommands.length)
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActiveIndex((index) => (index - 1 + filteredCommands.length) % filteredCommands.length)
    } else if (event.key === 'Enter') {
      event.preventDefault()
      optionRefs.current[activeIndex]?.click()
    }
  }

  return (
    <div
      className="command-palette-backdrop"
      onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}
    >
      <section className="command-palette" role="dialog" aria-modal="true" aria-labelledby="command-palette-title" onKeyDown={handleKeyDown}>
        <header className="command-palette-heading">
          <span id="command-palette-title">COMMAND / PORTFOLIO</span>
          <button type="button" aria-label="Close command palette" onClick={onClose}><X aria-hidden="true" /></button>
        </header>
        <label className="command-palette-search">
          <Search aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            role="combobox"
            aria-label="Search portfolio actions"
            aria-expanded="true"
            aria-controls="command-palette-options"
            aria-activedescendant={filteredCommands.length ? `command-option-${activeIndex}` : undefined}
            placeholder="Where would you like to go?"
            value={query}
            onChange={(event) => { setQuery(event.target.value); setActiveIndex(0) }}
            autoComplete="off"
            spellCheck={false}
          />
          <kbd>ESC</kbd>
        </label>
        <div className="command-palette-list-wrap">
          <p className="command-palette-caption">QUICK DESTINATIONS</p>
          <div className="command-palette-list" id="command-palette-options" role="listbox" aria-label="Portfolio destinations">
            {filteredCommands.map((command, index) => {
              const Icon = command.icon
              return (
                <a
                  ref={(element) => { optionRefs.current[index] = element }}
                  id={`command-option-${index}`}
                  key={command.label}
                  className={`command-palette-option${activeIndex === index ? ' active' : ''}`}
                  role="option"
                  aria-selected={activeIndex === index}
                  href={command.href}
                  target={'external' in command && command.external ? '_blank' : undefined}
                  rel={'external' in command && command.external ? 'noreferrer' : undefined}
                  download={'download' in command && command.download ? true : undefined}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => {
                    internalNavigationSelected.current = command.href.startsWith('#')
                    onClose()
                  }}
                >
                  <span className="command-palette-icon"><Icon aria-hidden="true" /></span>
                  <span className="command-palette-copy"><strong>{command.label}</strong><small>{command.detail}</small></span>
                  <CornerDownLeft className="command-palette-enter" aria-hidden="true" />
                </a>
              )
            })}
            {filteredCommands.length === 0 && <p className="command-palette-empty">No matching actions. Try “projects” or “CV”.</p>}
          </div>
        </div>
        <footer className="command-palette-footer">
          <span><kbd><ArrowUp aria-hidden="true" /><ArrowDown aria-hidden="true" /></kbd> Navigate</span>
          <span><kbd><CornerDownLeft aria-hidden="true" /></kbd> Open</span>
          <span><kbd>/</kbd> <kbd>Ctrl/⌘ K</kbd> Quick open</span>
        </footer>
      </section>
    </div>
  )
}
