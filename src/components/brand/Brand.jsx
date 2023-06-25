import React from 'react';
import './brand.css';
import { photo1, photo2, photo3, photo4, photo5 } from './imports';

const Brand = () => {
  return (
      
      <section className='brand section__padding'>
        <div><img src={photo1} /></div>
        <div><img src={photo2} /></div>
        <div><img src={photo3} /></div>
        <div><img src={photo4} /></div>
        <div> <img src={photo5} /></div>           

       </section>

   


    
  )
}

export default Brand