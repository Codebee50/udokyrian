import Nav from "./components/Nav"
import About from "./sections/About"
import ContactSection from "./sections/ContactSection"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Codebee from "./sections/Codebee"

const App = () => {
  return (
    <main className="relative bg-deep-background w-full flex flex-col items-center justify-center">
      <Nav></Nav>
      <Hero></Hero>
      <About></About>
      <Projects/>
      <ContactSection/>
      <Codebee/>
    </main>
  )
}

export default App