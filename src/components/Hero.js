import React from 'react';
import { useLocation } from 'react-router-dom';
function Hero() {
  const url = useLocation();

  const adresse =
    url.pathname === '/'
      ? './assets/image-acueil.svg'
      : './assets/image-apropos.svg';
 
  return (
    <div className='contnair-image'>
      <img src={adresse} className="image-hero" />
    </div>
  );
}
export default Hero;
