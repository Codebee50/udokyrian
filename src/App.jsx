import Nav from "./components/Nav"
import About from "./sections/About"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"

const App = () => {
  return (
    <main className="relative bg-deep-background w-full flex flex-col items-center justify-center">
      <Nav></Nav>
      <Hero></Hero>
      <About></About>
      <Projects/>
    </main>
  )
}

export default App