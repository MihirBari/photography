import React from 'react';
import logo from './image/PM_LOGO.png';
import './style.css';

export const Loader = () => {
  return (
    <div className="loader-container">
      <img className="loader-image" src={logo} alt="loader" />
    </div>
  );
};