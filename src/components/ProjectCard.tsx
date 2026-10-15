import { Link } from 'react-router-dom'
import type { Project } from '../types'
import { ArrowUpRight } from './Icons'

/** Clicking the card opens the live site; the case-study link sits above the overlay. */
export default function ProjectCard({ project: p }: { project: Project }) {
  return (
    <div className="card-slot">
      <article className="card">
        <div className="shot">
          <img src={p.image} alt={`Screenshot of the ${p.name} website`} loading="lazy" width={1400} height={875} />
          <div className="shine" />
        </div>
        <div className="body">
          <h3>{p.name} <ArrowUpRight /></h3>
          <p className="what">{p.short}</p>
          <div className="tags">{p.stack.map((t) => <span key={t}>{t}</span>)}</div>
          <Link className="case" to={`/work/${p.slug}`}>Read the case study</Link>
        </div>
        <a
          className="stretch"
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open the live ${p.name} website (opens in a new tab)`}
        />
      </article>
    </div>
  )
}
