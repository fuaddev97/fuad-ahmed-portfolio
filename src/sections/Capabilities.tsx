import { CAPABILITIES } from '../data/content'
import Reveal from '../components/Reveal'

export default function Capabilities() {
  return (
    <section className="section on-mist" id="capabilities" aria-labelledby="cap-h">
      <div className="wrap">
        <Reveal className="sec-head">
          <h2 id="cap-h">What I can build for you</h2>
          <p className="soft">Real capabilities I can bring to your project.</p>
        </Reveal>
        <div className="cap-list">
          {CAPABILITIES.map((c, i) => (
            <Reveal key={c.title} className="cap" delay={i * 0.05}>
              <h3>{c.title}</h3>
              <p className="soft">{c.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
