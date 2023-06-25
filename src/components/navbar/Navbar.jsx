/*
import React ,{useState} from 'react';
import './navbar.css';
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg';


const Navbar = () => {

  const [toggleMenu,setToggleMenu] = useState(false);
   
  <nav className='navbar'>
      <div className='navbar__links'>
        <div className='navbar__links-logo'>
         <img src={logo} alt="logo" />   
        </div>
        
      </div>

      <ul className='navbar__links-container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#wgpt3'>What is GPT3?</a></p>
          <p><a href='#possibility'>OPEN </a></p>
          <p><a href='#features'>Case Studies</a></p>
          <p><a href='#blog'>Library</a></p>                 
      </ul>  
        
        <div className='navbar__sign'>
          <p>Sign in</p>
          <button type='button'>Sign up</button>
        </div>
        <div className='navbar__menu'>
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} /> 
          }
        </div>
  </nav>
}
export default Navbar
*/



import React ,{useState} from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri';

const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false);
  return (
    
    <nav className='navbar'>
      <div className='navbar__links'>
        <div className='navbar__links-logo'>
         <img src={logo} alt="logo" />   
        </div>
      </div>  
      <ul className='navbar__links-container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#wgpt3'>What is GPT3?</a></p>
          <p><a href='#possibility'>OPEN </a></p>
          <p><a href='#features'>Case Studies</a></p>
          <p><a href='#blog'>Library</a></p>                 
      </ul>  
      <div className='navbar__sign'>
          <p>Sign in</p>
          <button type='button'>Sign up</button>
      </div> 
      <div className='navbar__menu'>
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} /> 
          }
        </div> 
        {toggleMenu && (
      <div className='navbar-menu_container scale-up-center'>
        <ul className='navbar__links-container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#wgpt3'>What is GPT3?</a></p>
          <p><a href='#possibility'>OPEN </a></p>
          <p><a href='#features'>Case Studies</a></p>
          <p><a href='#blog'>Library</a></p>                 
      </ul>  
      <div className='navbar__sign'>
          <p>Sign in</p>
          <button type='button'>Sign up</button>
      </div> 
        </div>
        )}

    </nav>
    
  )
}

export default Navbar
