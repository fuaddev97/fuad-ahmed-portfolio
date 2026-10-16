import Reveal from '../components/Reveal'
import me from '../assets/img/me.webp'

const VALUES = [
  { title: 'Cross-cultural communication', text: 'Fluent in English, Arabic and Turkish, with intermediate Amharic.' },
  { title: 'Clear explanations', text: 'Years of teaching taught me to explain technical ideas simply.' },
  { title: 'Analytical mindset', text: 'My engineering background shapes how I break problems down.' },
  { title: 'Fast, self-driven learner', text: 'I taught myself frontend development and I’m now learning backend.' },
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
            I’m a mechanical engineer turned frontend web developer. I studied mechanical engineering in Turkey on a scholarship,
            then worked in teaching, sales and logistics before moving into web development. That mix gives me an international,
            multilingual background and a habit of explaining things clearly.
          </Reveal>
          <Reveal as="p" delay={0.1} className="soft">
            I build clean, responsive websites with React, TypeScript and Tailwind CSS, and I’m now learning backend development
            to become a full-stack engineer. I’m reliable, adaptable and quick to learn, and I’m looking for roles and freelance
            projects where I can keep growing.
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
