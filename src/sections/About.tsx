import Reveal from '../components/Reveal'
import me from '../assets/img/me.webp'

const VALUES = [
  { title: 'Clarity', text: 'Simple structure, readable code, honest communication.' },
  { title: 'Accessibility', text: 'Interfaces that work with a keyboard, a screen reader and a small screen.' },
  { title: 'Craft', text: 'I sweat the spacing, the timing and the last 10%.' },
  { title: 'Curiosity', text: 'I keep learning and keep building.' },
]

export default function About() {
  return (
    <section className="section on-mist" id="about" aria-labelledby="ab-h">
      <div className="wrap about">
        <Reveal variant="left" className="about-art">
          <img src={me} alt="" loading="lazy" width={850} height={1400} />
        </Reveal>
        <div className="about-text">
          <Reveal as="h2" id="ab-h">About me</Reveal>
          <Reveal as="p" delay={0.05}>
            I’m a frontend developer who likes the moment a design comes alive in the browser. I enjoy the craft in the details:
            type that reads well, layouts that hold up on any screen and motion that guides rather than distracts.
          </Reveal>
          <Reveal as="p" delay={0.1} className="soft">
            I learn by building real projects, reading the documentation and debugging until I understand why something works.
            My goal is to join a team that ships production React and TypeScript interfaces, and to keep taking on freelance work
            that lets me do the same.
          </Reveal>
          <div className="values">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
