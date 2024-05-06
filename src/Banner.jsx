import React, { useEffect, useState } from "react";
import video from "./image/Mayur.mp4";
import logo from "./image/PM_LOGO.png";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsdeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Pixel Magic"];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
  };

  return (
    <div className=" h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full z-10">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent:"center"
          }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-4">
            {text}
          </h1>
          <img
            style={{ height: "7rem", width: "auto", marginLeft: "1rem" }}
            src={logo}
            alt=""
          />
        </div>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
          Your subtitle or additional information here
        </p>
      </div>
    </div>
  );
};

export default Banner;
