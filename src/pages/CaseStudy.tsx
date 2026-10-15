import { Link, Navigate, useParams } from 'react-router-dom'
import { PROJECTS, getProject } from '../data/projects'
import { SITE } from '../data/site'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import Reveal from '../components/Reveal'
import { ArrowUpRight, GitHub } from '../components/Icons'
import type { ReactNode } from 'react'

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Reveal className="cs-body">
      <h2>{title}</h2>
      <div className="txt">{children}</div>
    </Reveal>
  )
}

export default function CaseStudy() {
  const { slug = '' } = useParams()
  const project = getProject(slug)
  useDocumentTitle(project ? `${project.name} case study` : 'Not found')
  if (!project) return <Navigate to="/work" replace />

  const i = PROJECTS.indexOf(project)
  const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length]
  const next = PROJECTS[(i + 1) % PROJECTS.length]

  return (
    <>
      <section className="on-dark page-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span>/</span><Link to="/work">Work</Link><span>/</span><span>{project.name}</span>
          </nav>
          <h1>{project.name}</h1>
          <p className="soft" style={{ marginTop: '1.4rem', fontSize: '1.25rem' }}>{project.short}</p>
          <dl className="meta">
            <div><dt>Type</dt><dd>{project.type}</dd></div>
            <div><dt>My role</dt><dd>Frontend design and development</dd></div>
            <div><dt>Stack</dt><dd>{project.stack.join(', ')}</dd></div>
            <div><dt>Hosting</dt><dd>Vercel</dd></div>
          </dl>
          <div className="cs-links">
            <a className="btn btn-primary" href={project.url} target="_blank" rel="noopener noreferrer">Visit live site <ArrowUpRight /></a>
            <a className="btn btn-ghost" href={SITE.github} target="_blank" rel="noopener noreferrer">Source code on GitHub <GitHub width={18} height={18} /></a>
          </div>
          <div className="cs-shot">
            <img src={project.image} alt={`Screenshot of the ${project.name} website`} width={1400} height={875} />
          </div>
        </div>
      </section>

      <section className="section on-light">
        <div className="wrap">
          <Block title="Overview"><p>{project.purpose}</p></Block>
          <Block title="The problem"><p>{project.problem}</p></Block>
          <Block title="My role">
            <p>{project.role} I handled the page structure, component breakdown, styling, responsive behaviour and deployment.</p>
          </Block>
          <Block title="What I built">
            <ul>{project.features.map((f) => <li key={f}>{f}</li>)}</ul>
          </Block>
          <Block title="Technical implementation">
            <p>Built with:</p>
            <div className="pills">{project.stack.map((t) => <span className="pill" key={t}>{t}</span>)}</div>
            <p className="soft">The page is split into self-contained sections, each styled to scale from phone to desktop.</p>
          </Block>
          <Block title="Responsiveness and accessibility">
            <p>Layouts are fluid and tested at phone, tablet and desktop widths. Interactive elements are real links and buttons, so they work with a keyboard.</p>
          </Block>
          <Block title="Still to come">
            <p className="soft">
              A deeper write-up covering technical decisions, challenges, testing and lessons learned is on its way. In the meantime,
              the live site and the source code show the full work.
            </p>
          </Block>
        </div>
      </section>

      <section className="section on-dark" style={{ paddingBlock: '3.5rem' }}>
        <div className="wrap pager">
          <Link to={`/work/${prev.slug}`}><small>Previous project</small><strong>{prev.name}</strong></Link>
          <Link to={`/work/${next.slug}`} style={{ textAlign: 'right' }}><small>Next project</small><strong>{next.name}</strong></Link>
        </div>
      </section>
    </>
  )
}
