import React, { useState } from 'react'
import './Navbar.css'

export const Navbar = () => {
    const [isRes, setIsRes] = useState(false)
    const [navbar, setIsNavbar] = useState(false)
    const links =[
        {id:1, name:'Home', url:'#home'},
        {id:2, name:'About', url:'#about'},
        {id:3, name:'Services', url:'#service'},
        {id:4, name:'Contact', url:'#contact'},
    ]

    const place = links.map(link => (
        <li key={link.id} ><a href={link.url}>{link.name}</a></li>
    ))
const toggle = ()=> {
    setIsRes(preRes => !preRes)
}
    const changeNav = () => {
        if (scrollY > 20) {
            setIsNavbar(true)
        }else{
            setIsNavbar(false)
        }
    }
    window.addEventListener("scroll", changeNav)
    const change = navbar ? 'active' : ''

  return (
    <>
    <nav className={`${isRes ? 'navbar resp' : 'navbar'} ${change}`}>
        <div className="logo">me.</div>
        <ul className={isRes ? 'show' : ''}>
            {place}
        </ul>
        <div className='toggle'
        onClick={toggle}
        >{isRes ? 'close' : 'open'}</div>
    </nav>
    </>
  )
}
