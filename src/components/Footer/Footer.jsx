import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
  return (
    <>
        <footer>
            &copy;2024 Mubarak Yusuf, All Right Reserved.
            <a href='#home'><FontAwesomeIcon icon={faAngleUp} /></a>
        </footer>
    </>
  )
}
