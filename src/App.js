
import React from "react";
import {BrowserRouter as Router } from "react-router-dom";
import MasterRoute from "./routes/MasterRoute";
function App() {
  return (
    <Router>
      <MasterRoute/>
    </Router>
  );
}

export default App;
