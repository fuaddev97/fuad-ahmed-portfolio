import { useRef } from 'react'
import { PROJECTS } from '../data/projects'
import { useDeck } from '../hooks/useDeck'
import Reveal from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import Button from '../components/Button'
import { ArrowRight } from '../components/Icons'

export default function Projects() {
  const deck = useRef<HTMLDivElement>(null)
  useDeck(deck)

  return (
    <section className="section on-dark work" id="work" aria-labelledby="work-h">
      <div className="wrap">
        <div className="sec-head">
          <Reveal as="h2" id="work-h">Featured projects</Reveal>
          <Reveal as="p" className="soft" delay={0.1}>
            Four websites I designed and built. Click a card to open the live site, or read the case study.
          </Reveal>
        </div>
        <div className="deck" ref={deck}>
          {PROJECTS.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
        <div className="work-more">
          <Button variant="ghost" to="/work">View all projects <ArrowRight /></Button>
        </div>
      </div>
    </section>
  )
}
