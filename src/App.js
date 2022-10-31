import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopNavbar from "./components/top-navbar/TopNavbar";

import Navigation from "./components/header/Navigation";
import Main from "./components/pages/Main";

import { CategoryProvider } from "./contexts/CategoryContext";
import { MenuItemProvider } from "./contexts/MenuItemContext";


import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

const App = () => {
  return (
    <div>
      <CategoryProvider>
        <MenuItemProvider>
          <Router>
            <TopNavbar />
            <Navigation />
            <Routes>
              <Route path="/" element={<Main />} />{" "}
            </Routes>
          </Router>
        </MenuItemProvider>
      </CategoryProvider>
    </div>
  );
};

export default App;
