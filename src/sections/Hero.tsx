import { useRef } from 'react'
import { SITE } from '../data/site'
import { useHeroParallax } from '../hooks/useHeroParallax'
import Button from '../components/Button'
import Shard from '../components/Shard'
import { ArrowRight, Download } from '../components/Icons'
import me from '../assets/img/me.webp'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  useHeroParallax(ref)

  return (
    <section className="hero" aria-label="Introduction" ref={ref}>
      <div className="bg-glow" />
      <div className="grid-lines" />
      <Shard kind="ice" className="shard-left" depth={42} style={{ left: '1%', top: '62%', width: 'clamp(40px,4.5vw,70px)' }} />
      <Shard kind="cyan" depth={56} style={{ left: '46%', top: '14%', width: 'clamp(28px,3vw,46px)' }} />
      <Shard kind="blue" depth={28} style={{ right: '5%', top: '22%', width: 'clamp(46px,5vw,76px)' }} />

      <div className="hero-inner">
        <div className="hero-copy">
          <p className="role fade-in" style={{ '--d': '.2s' } as React.CSSProperties}>Frontend Web Developer</p>
          <h1 aria-label="I build interfaces that feel fast and look right.">
            <span className="ln" aria-hidden="true"><span style={{ '--i': 0 } as React.CSSProperties}>I build interfaces</span></span>
            <span className="ln" aria-hidden="true">
              <span style={{ '--i': 1 } as React.CSSProperties}>that feel <span className="grad">fast</span></span>
            </span>
            <span className="ln" aria-hidden="true"><span style={{ '--i': 2 } as React.CSSProperties}>and look right.</span></span>
          </h1>
          <p className="intro fade-in" style={{ '--d': '.9s' } as React.CSSProperties}>
            I turn designs and ideas into responsive, accessible websites with HTML, CSS, JavaScript, React and TypeScript.
          </p>
          <div className="cta-row fade-in" style={{ '--d': '1.05s' } as React.CSSProperties}>
            <Button href="#work">Explore my work <ArrowRight /></Button>
            <Button variant="ghost" href={SITE.cv} download>Download CV <Download /></Button>
            <Button variant="ghost" href="#contact">Contact me</Button>
          </div>
        </div>

        <div className="hero-fig">
          <div className="halo" />
          <div className="ring" />
          <div className="big-name" aria-hidden="true">Fuad</div>
          <img className="me" src={me} alt={`Portrait of ${SITE.name}`} width={850} height={1400} fetchPriority="high" />
        </div>
      </div>
    </section>
  )
}
