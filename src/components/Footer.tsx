import { Link } from 'react-router-dom'
import { SITE } from '../data/site'
import BrandMark from './BrandMark'
import SectionLink from './SectionLink'
import { ArrowUp } from './Icons'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Link className="brand" to="/"><BrandMark /><span>{SITE.name}</span></Link>
            <p>{SITE.tagline}</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link to="/work">All projects</Link></li>
              <li><SectionLink id="capabilities">Capabilities</SectionLink></li>
              <li><SectionLink id="process">How I work</SectionLink></li>
              <li><SectionLink id="about">About</SectionLink></li>
              <li><SectionLink id="contact">Contact</SectionLink></li>
            </ul>
          </div>
          <div>
            <h4>Elsewhere</h4>
            <ul>
              <li><a href={SITE.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href={SITE.cv} download>Download CV (PDF)</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {CURRENT_YEAR} {SITE.name}. All rights reserved.</span>
          <button className="to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Back to top <ArrowUp />
          </button>
        </div>
      </div>
    </footer>
  )
}
