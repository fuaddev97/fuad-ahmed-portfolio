import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import { ArrowUpRight } from '../components/Icons'

export default function WorkIndex() {
  useDocumentTitle('Work')
  return (
    <>
      <section className="on-dark page-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb"><Link to="/">Home</Link><span>/</span><span>Work</span></nav>
          <h1>Selected work</h1>
          <p className="soft" style={{ marginTop: '1.4rem', fontSize: '1.2rem' }}>
            Real websites I designed and built. Each one links to the live site and a case study.
          </p>
        </div>
      </section>
      <section className="section on-light">
        <div className="wrap">
          <div className="lib">
            {PROJECTS.map((p) => (
              <Reveal as="article" className="lib-item" key={p.slug}>
                <a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Open live ${p.name} site`}>
                  <img src={p.image} alt={`Screenshot of the ${p.name} website`} loading="lazy" width={1400} height={875} />
                </a>
                <div className="txt">
                  <p className="soft">{p.type}</p>
                  <h2 style={{ fontSize: 'clamp(1.8rem,3.4vw,2.8rem)' }}>{p.name}</h2>
                  <p>{p.short}</p>
                  <div className="pills">{p.stack.map((t) => <span className="pill" key={t}>{t}</span>)}</div>
                  <div className="btns">
                    <a className="btn btn-blue" href={p.url} target="_blank" rel="noopener noreferrer">Live site <ArrowUpRight /></a>
                    <Button variant="ghost-dark" to={`/work/${p.slug}`}>Case study</Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
