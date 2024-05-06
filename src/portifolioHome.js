import React from 'react'
import Footer from './footer';
import ThreeDCardDemo from './ThreeDCardDemo';
import PortfolioBanner from './portfolioBanner';
import NavbarDemo from './NavbarDemo';

const PortifolioHome = () => {
  return (
    <>
    <NavbarDemo/>
    <PortfolioBanner />
        <ThreeDCardDemo />
    <Footer /> 
    
  </>
  )
}

export default PortifolioHome