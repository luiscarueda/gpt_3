import React from 'react'
import './feature.css'

const Feature = ({title,text}) => {
  return (
    <div className='feature__container'>
      <div className='feature__container-title'>
        <div>
          <h1>{title}</h1>
        </div>       
      </div>
      <div className='feature__container-text'>
         <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature


  
