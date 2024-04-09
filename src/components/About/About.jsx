import React from 'react'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownload } from '@fortawesome/free-solid-svg-icons/faCloudDownload'
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'

export const About = () => {
  return (
    <>
    <section className='about' id='about'>
      <div className="about-sec">
        <img src="/img.jpg" alt="" />
        <div className="aboutMe">
          <h5>About</h5>
          <h2>About Me</h2>
        <p>Hello, I’m Mubarak Yusuf, a Web-developer and Software-engineer based in Nigeria. 
        I have rich experience in web site design & building and customization. Also I am good at:
        </p>
        <ul>
          <li><span>jgj</span></li>
          <li><span>jhhk</span></li>
          <li><span>ytc</span></li>
          <li><span>hvh</span></li>
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
