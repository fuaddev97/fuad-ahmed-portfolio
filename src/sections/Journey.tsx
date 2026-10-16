import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { JOURNEY } from '../data/content'
import { useScrollFill } from '../hooks/useScrollFill'
import Reveal from '../components/Reveal'

export default function Journey() {
  const timeline = useRef<HTMLDivElement>(null)
  useScrollFill(timeline)

  return (
    <section className="section on-light" id="journey" aria-labelledby="jr-h">
      <div className="wrap">
        <Reveal className="sec-head">
          <h2 id="jr-h">Experience and education</h2>
          <p className="soft">
            From mechanical engineering to teaching, sales and logistics, and now to building for the web.
            Freelance work is marked as such, so you can tell it apart from employment.
          </p>
        </Reveal>
        <div className="timeline" ref={timeline}>
          <div className="line" />
          {JOURNEY.map((item) => (
            <Reveal className="tl" key={`${item.title}-${item.org}`}>
              <p className="when">{item.when}</p>
              <h3>{item.title}</h3>
              <p className="org soft">{item.org}</p>
              <span className="kind">{item.kind}</span>
              {item.text && <p className="soft">{item.text}</p>}
              {item.details && (
                <ul>
                  {item.details.map((d) => (
                    <li key={d.text}>{d.label ? <><strong>{d.label}:</strong> {d.text}</> : d.text}</li>
                  ))}
                </ul>
              )}
              {item.showProjects && (
                <ul>
                  <li><Link to="/work">See the websites I’ve built</Link></li>
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
