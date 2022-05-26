import React from "react";

import "./WhyUs.css";
import "./Main.css";

const WhyUs = () => {
  return (
    <div>
      <section id="why-us" className="why-us">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Why Us</h2>
            <p>Why Choose Our Restaurant</p>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="box" data-aos="zoom-in" data-aos-delay="100">
                <span>01</span>
                <h4>Our Food Prices</h4>
                <p>Affordable and fair prices for our dishes.</p>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="box" data-aos="zoom-in" data-aos-delay="200">
                <span>02</span>
                <h4>Best Quality Food</h4>
                <p>Come enjoy best of meals and drinks.</p>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="box" data-aos="zoom-in" data-aos-delay="300">
                <span>03</span>
                <h4>The Serenity</h4>
                <p>Come and catch a breath at our place.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
