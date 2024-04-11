import React from 'react'
import './Portfolio.css'
import { PortCard } from './PortCard'
export const Portfolio = () => {
  return (
    <>
<section className='portfolio' id='portfolio' >
<h5>Recent Projects</h5>
<h2>My Portfolio</h2>
<div className='portfolio-con'>
 <PortCard />
  </div>

</section>
    </>
  )
}
