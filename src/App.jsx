import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <div className="App mx-1.5">
        <Navbar />
        <Header />
      </div>
    </Router>
  );
}

export default App;
