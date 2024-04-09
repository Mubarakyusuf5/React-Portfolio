import React from 'react'

export const ServCard = (props) => {
  return (
    <>
     <div className="serv-card">
    <img src={props.img} alt={props.name} />
    <h3>{props.name}</h3>
    <p>{props.statement}</p>
    </div>   
    </>
  )
}
