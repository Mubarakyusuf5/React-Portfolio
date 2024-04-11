import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceDizzy } from '@fortawesome/free-solid-svg-icons'


export const Contact = () => {
  return (
    <>
    <section className='contact' id='contact'>
      <div className="c">
        <h5>Get in touch</h5>
        <h2>Contact me</h2>
        <p></p>
      </div>
        <div className="form">
            <form action="">
              <input type="text" name='' placeholder='Enter your fullname'/>
              <input type="email" name="" id="" placeholder='Enter your email'/>
              <textarea name="" id="" cols="30" rows="10" placeholder='Enter your message...'></textarea>
              <button>Send Message</button>
            </form>
        </div>
    </section>
    </>
  )
}
