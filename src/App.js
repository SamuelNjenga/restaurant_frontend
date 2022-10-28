import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopNavbar from "./components/top-navbar/TopNavbar";

import Navigation from "./components/header/Navigation";
import Main from "./components/pages/Main";

import { CategoryProvider } from "./contexts/CategoryContext";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

const App = () => {
  return (
    <div>
      <CategoryProvider>
        <Router>
          <TopNavbar />
          <Navigation />
          <Routes>
            <Route path="/" element={<Main />} />{" "}
          </Routes>
        </Router>
      </CategoryProvider>
    </div>
  );
};

export default App;
