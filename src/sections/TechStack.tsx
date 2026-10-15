import { STACK_GROUPS } from '../data/content'
import Reveal from '../components/Reveal'

export default function TechStack() {
  return (
    <section className="section on-light" id="stack" aria-labelledby="stack-h">
      <div className="wrap">
        <Reveal className="sec-head">
          <h2 id="stack-h">Technology I use</h2>
          <p className="soft">Only tools I have actually worked with.</p>
        </Reveal>
        <div className="stack-grid">
          {STACK_GROUPS.map((g, i) => (
            <Reveal key={g.title} className="stack-card" delay={i * 0.06}>
              <h3>{g.title}</h3>
              <div className="pills">{g.items.map((t) => <span className="pill" key={t}>{t}</span>)}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
