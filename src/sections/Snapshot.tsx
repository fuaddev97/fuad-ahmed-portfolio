import { SITE } from '../data/site'
import Reveal from '../components/Reveal'

const CORE = ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Tailwind', 'Sass', 'Git', 'GitHub']

export default function Snapshot() {
  return (
    <section className="section on-light" id="snapshot" aria-labelledby="snap-h">
      <div className="wrap">
        <Reveal className="sec-head"><h2 id="snap-h">What I do, at a glance</h2></Reveal>
        <div className="snap-grid">
          <Reveal variant="left" className="snap feature">
            <h3>Primary focus</h3>
            <p className="big">Responsive, animated websites that stay fast.</p>
            <p style={{ color: 'rgba(223,233,255,.85)' }}>
              I care about the details people feel but rarely name: spacing, motion, load time and how a page behaves on a small screen.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="snap">
            <h3>Current role</h3>
            <p className="big">Freelance web developer</p>
            <p className="soft">Building responsive websites for cafés, restaurants and real estate firms, alongside my work as a logistics officer.</p>
          </Reveal>
          <Reveal delay={0.16} className="snap dark">
            <h3>Core technologies</h3>
            <div className="pills">{CORE.map((t) => <span className="pill" key={t}>{t}</span>)}</div>
          </Reveal>
          <Reveal delay={0.24} className="snap">
            <h3>Currently learning</h3>
            <p className="big" style={{ fontSize: '1.5rem' }}>Backend web development, on the way to full-stack.</p>
          </Reveal>
          <Reveal delay={0.32} className="snap">
            <h3>Based in {SITE.location}</h3>
            <p className="big" style={{ fontSize: '1.5rem' }}>English, Arabic and Turkish, all fluent.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
