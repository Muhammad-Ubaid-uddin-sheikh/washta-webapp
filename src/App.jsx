import React, { useEffect } from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "components/Footer";
import Header from "pages/Home1/Header";

function App() {
  useEffect(() => {
    // Change status bar color to white
    document.body.style.backgroundColor = "white";
  }, []);
  return (
    <Router>
      {/* <Header/> */}
      <Routes />
      {/* <Footer style={{marginTop:'3em'}}  className="flex items-center justify-center self-stretch bg-indigo-300 py-[46px] md:py-5 "/> */}
    </Router>
  );
}

export default App;
