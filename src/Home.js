import React from 'react'
import Banner from "./Banner";
import { StickyScrollRevealDemo } from "./StickyScrollRevealDemo";
import { AuroraBackgroundDemo } from "./AuroraBackgroundDemo";
import { LayoutGridDemo } from "./LayoutGridDemo";
import {NavbarDemo} from "./NavbarDemo";
import Footer from './footer';

const Home = () => {
  return (
    <>
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
  </>
  )
}

export default Home