import { EXTRA_PRACTICES, STEPS } from '../data/content'
import Reveal from '../components/Reveal'

export default function Process() {
  return (
    <section className="section on-dark" id="process" aria-labelledby="proc-h">
      <div className="wrap">
        <div className="sec-head">
          <Reveal as="h2" id="proc-h">How I work</Reveal>
          <Reveal as="p" className="soft">A repeatable process, from the first conversation to a live URL.</Reveal>
        </div>
        <div className="steps">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} className="step" delay={i * 0.06}>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </Reveal>
          ))}
        </div>
        <div className="process-extra">
          {EXTRA_PRACTICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
