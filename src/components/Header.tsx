import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SITE } from '../data/site'
import { useHeaderState } from '../hooks/useHeaderState'
import { useActiveSection } from '../hooks/useActiveSection'
import BrandMark from './BrandMark'
import SectionLink from './SectionLink'
import { GitHub, LinkedIn } from './Icons'

const LINKS = [
  { label: 'Work', id: 'work' },
  { label: 'Capabilities', id: 'capabilities' },
  { label: 'Stack', id: 'stack' },
  { label: 'Process', id: 'process' },
  { label: 'Journey', id: 'journey' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
]
const IDS = LINKS.map((l) => l.id)

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { scrolled, hidden } = useHeaderState(open)
  const active = useActiveSection(IDS, pathname === '/')

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}${hidden ? ' hide' : ''}`} id="top">
      <div className="wrap">
        <Link className="brand" to="/" onClick={close} aria-label={`${SITE.name}, home`}>
          <BrandMark />
          <span>{SITE.name}</span>
        </Link>

        <nav className={`nav${open ? ' open' : ''}`} id="nav" aria-label="Main">
          {LINKS.map((l) => (
            <SectionLink key={l.id} id={l.id} className={`link${active === l.id ? ' active' : ''}`} onClick={close}>
              {l.label}
            </SectionLink>
          ))}
        </nav>

        <div className="head-tools">
          <a className="icon-btn" href={SITE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHub /></a>
          <a className="icon-btn" href={SITE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedIn /></a>
          <a className="head-cv" href={SITE.cv} download>Download CV</a>
          <SectionLink id="contact" className="btn btn-primary head-contact" onClick={close}>Contact me</SectionLink>
          <button
            className="burger"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="nav"
            onClick={() => setOpen((o) => !o)}
          >
            <i /><i /><i />
          </button>
        </div>
      </div>
    </header>
  )
}

