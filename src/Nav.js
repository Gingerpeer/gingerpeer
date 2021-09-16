import React from 'react';
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/js/src/collapse.js";
import { Link } from 'react-router-dom';
import Logo from './Logo.png';
/* 
  To do:
  1. Stylize collapsed menu items with a media query that takes away outline when the menu collapses.
  2. Use a bootstrap carousel to show previous work done and reviews maybe?
  3. Play around with some animations.
  4. When done, publish.
*/
console.log({Logo})
const Nav = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
/*Function and fix for navbar collapse found at https://johnotu.medium.com/how-to-toggle-bootstrap-navbar-collapse-button-in-react-without-jquery-1d5c2fb0751c.*/
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return(
     <div>
         <nav id='Nav' className='navbar navbar-expand-md navbar-dark'>
         <img src={Logo} className='Logo img-fluid justify-content-start navbar-brand' alt='Logo'></img>
         <button className="navbar-toggler justify-content-end " type="Link" data-toggle="collapse" data-target="#collapseNavbar" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
         <span className="navbar-toggler-icon"></span>
         </button>
         <div className={`${isNavCollapsed ? 'collapse' : ''} justify-content-end navbar-collapse`} id="collapseNavbar">
             <Link className='btn btn-lg btn-outline-info' to='/'>Home</Link>
             <Link className='btn btn-lg btn-outline-info' to='/About'>About</Link>
             <Link className='btn btn-lg btn-outline-info' to='/Work'>My Work</Link>
             <Link className='btn btn-lg btn-outline-info' to='/Contact'>Contact Me</Link>
         </div>
     </nav>
     </div>
 );
}
export default Nav