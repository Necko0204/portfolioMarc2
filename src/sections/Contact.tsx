import { ArrowDownToLine, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { profile, socialLinks } from '../data/portfolio'

export function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-topline"><span>05 / Contact</span><span>Available for opportunities <i /></span></div>
      <Reveal className="contact-heading">
        <p>Let's turn it into something useful.</p>
        <h2>Have a problem<br />worth building<span>?</span></h2>
      </Reveal>
      <div className="contact-grid">
        <Reveal className="contact-actions">
          <a className="contact-primary" href={`mailto:${profile.email}`}>Email me <ArrowRight /></a>
          <a href={profile.github} target="_blank" rel="noreferrer">View GitHub <ArrowUpRight /></a>
          <a href="/Marc-Angelo-Mendoza-CV.pdf" download>Download CV <ArrowDownToLine /></a>
        </Reveal>
        <div className="contact-links">
          {socialLinks.map((link) => (
            <Reveal className="contact-link-row" key={link.label}>
              <span>{link.label}</span>
              <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
                {link.display}<ArrowUpRight aria-hidden="true" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
