import React from "react";
import video from "./image/Bharat_Puspha.mp4";
import "./ThreeDCardDemo.css";


const PortfolioBanner = () => {
  return (
    <div className="h1-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-1/2 object-cover"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </div>
  );
};

export default PortfolioBanner;
