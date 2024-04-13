import { Intro } from "./components/Intro/Intro"
import { Navbar } from "./components/Navbar/Navbar"
import { About } from "./components/About/About"
import { Contact } from "./components/Contact/Contact"
import { Service } from "./components/Service/Service"
import { Portfolio } from "./components/Potfolio/Portfolio"
import { Footer } from "./components/Footer/Footer"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
    <Navbar />
     <Intro />
    <About />
    <Service />
    <Portfolio />
    <ToastContainer />
    <Contact />
    <Footer />
    </>
  )
}

export default App
