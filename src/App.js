import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopNavbar from "./components/top-navbar/TopNavbar";

import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/header/Navigation";

const App = () => {
  return (
    <div>
      <Router>
        <TopNavbar />
        <Navigation />
        <Routes></Routes>
      </Router>
    </div>
  );
};

export default App;
