import React from 'react';
import './index.css';
import logo1 from './assets/react.svg'; 
import logo2 from './assets/react.svg';
import logo3 from './assets/react.svg';

const LogoGallery = () => {
  return (
    <div className="logo-gallery">
      <div className="logo">
        <img src={logo1} alt="Logo 1" />
      </div>
      <div className="logo">
        <img src={logo2} alt="Logo 2" />
      </div>
      <div className="logo">
        <img src={logo3} alt="Logo 3" />
      </div>
    </div>
  );
};

export default LogoGallery;