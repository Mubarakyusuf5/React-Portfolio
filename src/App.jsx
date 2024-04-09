import { Intro } from "./components/Intro/Intro"
import { Navbar } from "./components/Navbar/Navbar"
import { About } from "./components/About/About"
import { Contact } from "./components/Contact/Contact"
import { Service } from "./components/Service/Service"
import { Portfolio } from "./components/Potfolio/Portfolio"
import { Footer } from "./components/Footer/Footer"

function App() {

  return (
    <>
    <Navbar />
     <Intro />
    <About />
    <Service />
    <Portfolio />
    <Contact />
    <Footer />
    </>
  )
}

export default App
