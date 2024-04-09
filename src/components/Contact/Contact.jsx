import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceDizzy } from '@fortawesome/free-solid-svg-icons'


export const Contact = () => {
  return (
    <>
    <section className='contact' id='contact'>
        <div className="wrapper">
          <div className="button">
            <div className="icon"><i><FontAwesomeIcon className='i' icon={faFaceDizzy} /></i></div>
            <span>facebook</span>
          </div>
          <div className="button">
            <div className="icon"><i><FontAwesomeIcon className='i' icon={faFaceDizzy} /></i></div>
            <span>facebook</span>
          </div>
          <div className="button">
            <div className="icon"><i><FontAwesomeIcon className='i' icon={faFaceDizzy} /></i></div>
            <span>facebook</span>
          </div>
          <div className="button">
            <div className="icon"><i><FontAwesomeIcon className='i' icon={faFaceDizzy} /></i></div>
            <span>facebook</span>
          </div>
        </div>
    </section>
    </>
  )
}
