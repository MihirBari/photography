
import React from "react";
import {Route, Routes } from "react-router-dom";
import Home from "./Home";
import PortifolioHome from "./portifolioHome"

function App() {
  return (
    <>

       <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/Portfolio" element={<PortifolioHome />} />
            </ Routes>
    </>
  );
}

export default App;
