import React from "react";
import video from "./image/banner.mp4";

const Banner = () => {
  return (
    <div className="relative">
      {/* Video background */}
      <video
        autoPlay
        loop
        controls
        muted
        className="absolute top-0 left-0 w-full h-full z-0 object-cover"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Text content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-4">
          Your Title Here
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
          Your subtitle or additional information here
        </p>
      </div>
    </div>
  );
};

export default Banner;
