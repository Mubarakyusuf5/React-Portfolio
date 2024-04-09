import { Intro } from "./components/Intro/Intro"
import { Navbar } from "./components/Navbar/Navbar"
import { About } from "./components/About/About"
import { Contact } from "./components/Contact/Contact"
import { Service } from "./components/Service/Service"

function App() {

  return (
    <>
    <Navbar />
     <Intro />
    <About />
    <Service />
    <Contact />
    </>
  )
}

export default App
