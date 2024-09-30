import Hero from '../../containers/Hero/hero'
import Projects from '../../containers/Projects/projects'
import About from '../../containers/About/about'
import Skills from '../../containers/Skills/skills'
import Contact from '../../containers/Contact/contact'
import './home.scss'

const Home = () => {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </main>
  )
}

export default Home
