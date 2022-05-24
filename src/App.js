import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopNavbar from "./components/top-navbar/TopNavbar";

import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/header/Navigation";
import Main from "./components/pages/Main";


const App = () => {
  return (
    <div>
      <Router>
        <TopNavbar />
        <Navigation />
        <Routes>
          <Route path="/" element={<Main />} />{" "}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
