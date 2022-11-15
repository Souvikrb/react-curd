
import React from "react";
import Banners from "../components/banner";
import About from "../components/About";
import {
  Route,Routes
} from "react-router-dom";
function MasterRoute() {
  return (
      <Routes>
        <Route exact path="/" element={<Banners/>}/>
        <Route exact path="/about" element={<About/>}/>
      </Routes>
  );
}

export default MasterRoute;
