import React from 'react'; 
import { Link } from 'react-router-dom';

if (window.matchMedia("(min-width: 775px)").matches) {
  
  
}
const link=document.querySelector(".link-accueil")
  console.log("link eu",link)
function Header() {
  return (     
 <nav className='header'>
      <img src="../assets/LOGO.svg" className="logo-header" alt="logo" />
      <div className='link-header'>
        <Link to="/" className='link-accueil linkHeader'>Accueil</Link>
        <Link to="/Apropos" className='link-apropos linkHeader'>A Propos</Link>
      </div>
      
    </nav> 
   
  );
}
export default Header;
