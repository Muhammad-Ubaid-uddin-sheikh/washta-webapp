import React, { useEffect } from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  useEffect(() => {
    // Change status bar color to white
    document.body.style.backgroundColor = "white";
  }, []);
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
