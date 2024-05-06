import React, { useEffect, useState } from 'react'
import Footer from './footer';
import ThreeDCardDemo from './ThreeDCardDemo';
import PortfolioBanner from './portfolioBanner';
import {NavbarDemo} from './NavbarDemo';
import { Loader } from './loader';

const PortifolioHome = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
     {loading ? (
        <Loader />
      ) : (
        <div>
    <NavbarDemo/>
    <div>
    <PortfolioBanner />
    <ThreeDCardDemo />
    </div>
    <Footer /> 
    </div>
  )}
  </>
  )
}

export default PortifolioHome