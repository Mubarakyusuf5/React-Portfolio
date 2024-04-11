import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const PortCard = () => {
  return (
    <>
    <div className="portcard">
        <img src="/three.jpg" alt="" />
        <div className="tag">react js</div>
        <div className="main">
          <div className="title">
            <h3>Mobile App</h3>
            <div className="link">
              <a href=""><FontAwesomeIcon icon={faGithub} /></a>
              <a href=""><FontAwesomeIcon icon={faGlobe} /></a>
            </div>
          </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>
    <div className="portcard">
        <img src="/three.jpg" alt="" />
        <div className="tag">react js</div>
        <div className="main">
          <div className="title">
            <h3>Mobile App</h3>
            <div className="link">
              <a href=""><FontAwesomeIcon icon={faGithub} /></a>
              <a href=""><FontAwesomeIcon icon={faGlobe} /></a>
            </div>
          </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>
    <div className="portcard">
        <img src="/three.jpg" alt="" />
        <div className="tag">react js</div>
        <div className="main">
          <div className="title">
            <h3>Mobile App</h3>
            <div className="link">
              <a href=""><FontAwesomeIcon icon={faGithub} /></a>
              <a href=""><FontAwesomeIcon icon={faGlobe} /></a>
            </div>
          </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>
    </>
  )
}
