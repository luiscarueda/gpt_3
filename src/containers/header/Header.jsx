import React from 'react';
import './header.css';
import photo1 from '../../assets/people.png';
import photo2 from '../../assets/ai.png';


const Header = () => {
  return (
<>
 <header className='header section__padding'>
  <div className='header__content'>
   <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAI</h1>
   <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
   <div className='header__content-input'>
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
   </div>

   <div className='header__content-image1'>
     <img src={photo1} alt="people" />
  
     <p>1,600 people requested access a visit in last 24 hours</p> 
   </div>
    
   
  </div>
  <div className='header__content-image2'>
   <img src={photo2} alt="ia" />
   </div> 
</header>
</>
 )
}

export default Header