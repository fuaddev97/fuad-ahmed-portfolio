import Hero from '../sections/Hero'
import Marquee from '../sections/Marquee'
import Snapshot from '../sections/Snapshot'
import Projects from '../sections/Projects'
import Capabilities from '../sections/Capabilities'
import TechStack from '../sections/TechStack'
import Process from '../sections/Process'
import Journey from '../sections/Journey'
import About from '../sections/About'
import Contact from '../sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Snapshot />
      <Projects />
      <Capabilities />
      <TechStack />
      <Process />
      <Journey />
      <About />
      <Contact />
    </>
  )
}
