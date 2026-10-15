import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects'
import { useScrollFill } from '../hooks/useScrollFill'
import Reveal from '../components/Reveal'

export default function Journey() {
  const timeline = useRef<HTMLDivElement>(null)
  useScrollFill(timeline)

  return (
    <section className="section on-light" id="journey" aria-labelledby="jr-h">
      <div className="wrap">
        <Reveal className="sec-head">
          <h2 id="jr-h">Career journey</h2>
          <p className="soft">Independent projects are marked as such, so you can tell them apart from client or employer work.</p>
        </Reveal>
        <div className="timeline" ref={timeline}>
          <div className="line" />
          <Reveal className="tl">
            <p className="when">2026</p>
            <h3>Independent frontend projects</h3>
            <span className="kind">Independent projects</span>
            <p className="soft">
              Designed and built four responsive websites for hospitality and real-estate brands and deployed each on Vercel.
            </p>
            <ul>
              {PROJECTS.map((p) => (
                <li key={p.slug}><Link to={`/work/${p.slug}`}>{p.name}</Link>, {p.type.toLowerCase()}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="tl">
            <p className="when">Learning path</p>
            <h3>From fundamentals to React and TypeScript</h3>
            <span className="kind">Skills milestone</span>
            <p className="soft">
              Started with HTML, CSS and JavaScript, then moved to React and TypeScript, with Git and GitHub for every project.
            </p>
          </Reveal>
          {/* Add education, certifications and any client or employer work as new <Reveal className="tl"> blocks. */}
        </div>
      </div>
    </section>
  )
}
