import { useEffect } from 'react'
import './NotFound.css'

export function NotFound() {
  useEffect(() => {
    document.title = 'Page not found — Marc Angelo Mendoza'
  }, [])

  return (
    <div className="not-found-shell">
      <a className="not-found-skip" href="#not-found-main">Skip to content</a>

      <header className="not-found-header">
        <a className="not-found-brand" href="/" aria-label="Marc Angelo Mendoza, home">M<span>.</span></a>
        <span>Marc Angelo Mendoza / Portfolio</span>
        <span>System status: 404</span>
      </header>

      <main className="not-found-main" id="not-found-main">
        <div className="not-found-index" aria-hidden="true">404 / Not found</div>
        <div className="not-found-card">
          <div className="not-found-card-top"><span>Route unavailable</span><span>ERR_404</span></div>
          <div className="not-found-number" aria-hidden="true">404<span>.</span></div>
          <div className="not-found-content">
            <p className="not-found-eyebrow"><span /> Page not found</p>
            <h1>Looks like this page{' '}<br />is off the map<span>.</span></h1>
            <p>The link may have moved, or the address may have a typo. Head back to the portfolio and keep exploring.</p>
            <div className="not-found-actions">
              <a className="not-found-primary" href="/">Return home <span aria-hidden="true">↗</span></a>
              <a className="not-found-secondary" href="/#work">Browse projects <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <div className="not-found-card-bottom"><span>Requested path</span><code>{window.location.pathname}</code></div>
        </div>
      </main>

      <footer className="not-found-footer"><span>Full Stack Web Developer</span><span>&lt;/portfolio&gt;</span></footer>
    </div>
  )
}
