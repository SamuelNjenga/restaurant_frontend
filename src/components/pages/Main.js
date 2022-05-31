import React from "react";
import Home from "../home/Home";
import About from "./About";
import WhyUs from "./WhyUs";
import Menu from "./Menu";
import Specials from "../specials/Specials";

const Main = () => {
  return (
    <div>
      <Home />
      <About />
      <WhyUs />
      <Menu />
      <Specials />
    </div>
  );
};

export default Main;
