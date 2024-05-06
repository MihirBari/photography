import React, { useEffect, useState } from 'react'
import Banner from "./Banner";
import { StickyScrollRevealDemo } from "./StickyScrollRevealDemo";
import { AuroraBackgroundDemo } from "./AuroraBackgroundDemo";
import { LayoutGridDemo } from "./LayoutGridDemo";
import {NavbarDemo} from "./NavbarDemo";
import Footer from './footer';
import { Loader } from './loader';

const Home = () => {
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
    <NavbarDemo />
    <Banner />
    <div className="relative">
      <div className="absolute top-full w-full">
        <AuroraBackgroundDemo />
        <LayoutGridDemo />
        <StickyScrollRevealDemo />
    <Footer /> 
      </div>
    </div> 
    </div>
  )}
  </>
  )
}

export default Home