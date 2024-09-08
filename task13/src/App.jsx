import React from 'react';
import './App.css'; 
const NavigationMenu = () => {
  return (
    <nav className="nav-menu">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
