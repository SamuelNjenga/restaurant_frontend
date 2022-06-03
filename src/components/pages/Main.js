import React from "react";
import Home from "../home/Home";
import About from "./About";
import WhyUs from "./WhyUs";
import Menu from "./Menu";
import Specials from "../specials/Specials";
import Events from "../events/Events";
import Chef from "../chef/Chef";
import Contact from "../contact/Contact";
import Reservation from "../reservation/Reservation";
import Testimonial from "../testimonials/Testimonial";

const Main = () => {
  return (
    <div>
      <Home />
      <About />
      <WhyUs />
      <Menu />
      <Specials />
      <Events />
      <Reservation />
      <Testimonial />
      <Chef />
      <Contact />
    </div>
  );
};

export default Main;
