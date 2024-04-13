import React from 'react'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownload } from '@fortawesome/free-solid-svg-icons/faCloudDownload'
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { faCss3, faHtml5, faJs, faNode, faPhp, faReact } from '@fortawesome/free-brands-svg-icons'

export const About = () => {
  return (
    <>
    <section className='about' id='about'>
      <div className="about-sec">
        <img src="/img.png" alt="" />
        <div className="aboutMe">
          <h5>About</h5>
          <h2>About Me</h2>
        <p>Hello, I’m Mubarak Yusuf, a Web-developer and Software-engineer based in Nigeria. 
        I have rich experience in web site design & building and customization. Also I am good at:
        </p>
        <ul>
          <li><FontAwesomeIcon icon={faHtml5} className='icon' /></li>
          <li><FontAwesomeIcon icon={faCss3} className='icon' /></li>
          <li><FontAwesomeIcon icon={faReact} className='icon' /></li>
          <li><FontAwesomeIcon icon={faPhp} className='icon' /></li>
          <li><FontAwesomeIcon icon={faJs} className='icon' /></li>
          <li><FontAwesomeIcon icon={faNode} className='icon' /></li>
        </ul>
        <div className="button">
          <a href="/database passQ.pdf" download><span>Download CV</span><FontAwesomeIcon icon={faCloudDownload} /></a>
          <a href="#contact" ><span>Hire Me</span><i><FontAwesomeIcon icon={faAngleRight} /></i></a>
        </div>
        </div>
      </div>
      <div className="edu-sec">

      </div>
    </section>
    </>
  )
}
